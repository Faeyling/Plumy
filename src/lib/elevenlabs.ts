// Appel à l'API ElevenLabs et lecture audio partagée par tous les boutons « Écouter »

export type CodeErreurVoix =
  | 'cle-invalide'
  | 'voix-payante'
  | 'voix-introuvable'
  | 'quota'
  | 'activite-inhabituelle'
  | 'reseau'
  | 'audio'
  | 'inconnue'

export class ErreurVoix extends Error {
  readonly code: CodeErreurVoix
  readonly statutHttp?: number

  constructor(code: CodeErreurVoix, message: string, statutHttp?: number) {
    super(message)
    this.code = code
    this.statutHttp = statutHttp
  }
}

// Le corps d'erreur ElevenLabs ressemble à { detail: { status, message } }, parfois { detail: "..." }
function classerErreur(statutHttp: number, corps: unknown): CodeErreurVoix {
  const detail = (corps as { detail?: unknown } | null)?.detail
  const statut = typeof detail === 'object' && detail !== null ? String((detail as { status?: unknown }).status ?? '') : ''
  const message = (typeof detail === 'string' ? detail : JSON.stringify(detail ?? '')).toLowerCase()

  if (statut === 'detected_unusual_activity' || message.includes('unusual activity')) return 'activite-inhabituelle'
  if (statut === 'quota_exceeded' || statutHttp === 429 || message.includes('quota')) return 'quota'
  if (statut === 'voice_not_found' || statutHttp === 404) return 'voix-introuvable'
  if (statutHttp === 402 || statut.includes('paid') || message.includes('library voice') || message.includes('upgrade')) return 'voix-payante'
  if (statutHttp === 401 || statut === 'invalid_api_key') return 'cle-invalide'
  return 'inconnue'
}

export async function synthetiser(texte: string, cle: string, voixId: string): Promise<ArrayBuffer> {
  let res: Response
  try {
    res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${voixId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': cle,
        'Content-Type': 'application/json',
        Accept: 'audio/mpeg',
      },
      body: JSON.stringify({
        text: texte,
        model_id: 'eleven_multilingual_v2',
        voice_settings: { stability: 0.4, similarity_boost: 0.8, style: 0.6, use_speaker_boost: true },
      }),
    })
  } catch (e) {
    throw new ErreurVoix('reseau', e instanceof Error ? e.message : String(e))
  }
  if (!res.ok) {
    const corps: unknown = await res.json().catch(() => null)
    throw new ErreurVoix(classerErreur(res.status, corps), `ElevenLabs ${res.status} ${JSON.stringify(corps)}`, res.status)
  }
  return res.arrayBuffer()
}

// ── Lecture audio ────────────────────────────────────────────────────────────
// Un seul AudioContext pour toute l'app. Il doit être créé/réveillé pendant le clic :
// après l'attente réseau, Safari (iOS) considère que le geste est terminé et reste muet.

let contexte: AudioContext | null = null
let sourceCourante: AudioBufferSourceNode | null = null

export function deverrouillerAudio(): void {
  const Ctor = window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!Ctor) return
  if (!contexte) contexte = new Ctor()
  if (contexte.state === 'suspended') void contexte.resume()
}

export function arreterAudio(): void {
  if (!sourceCourante) return
  const source = sourceCourante
  sourceCourante = null
  try { source.stop() } catch { /* déjà arrêtée */ }
}

export async function jouerAudio(buffer: ArrayBuffer, onFin: () => void): Promise<void> {
  deverrouillerAudio()
  if (!contexte) throw new ErreurVoix('audio', 'Web Audio indisponible')
  if (contexte.state === 'suspended') await contexte.resume()
  let decode: AudioBuffer
  try {
    decode = await contexte.decodeAudioData(buffer)
  } catch (e) {
    throw new ErreurVoix('audio', e instanceof Error ? e.message : String(e))
  }
  arreterAudio()
  const source = contexte.createBufferSource()
  source.buffer = decode
  source.connect(contexte.destination)
  source.onended = () => {
    if (sourceCourante === source) sourceCourante = null
    onFin()
  }
  sourceCourante = source
  source.start()
}
