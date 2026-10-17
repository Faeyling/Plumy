import { describe, it, expect, vi, afterEach } from 'vitest'
import { synthetiser, ErreurVoix } from './elevenlabs'

function repondre(status: number, corps: unknown) {
  vi.stubGlobal('fetch', vi.fn(async () => new Response(JSON.stringify(corps), { status })))
}

async function codeErreur(): Promise<string> {
  try {
    await synthetiser('test', 'sk_x', 'voix')
    return 'aucune'
  } catch (e) {
    return e instanceof ErreurVoix ? e.code : 'pas-ErreurVoix'
  }
}

afterEach(() => vi.unstubAllGlobals())

describe('synthetiser — classement des erreurs ElevenLabs', () => {
  it('clé invalide', async () => {
    repondre(401, { detail: { status: 'invalid_api_key', message: 'Invalid API key' } })
    expect(await codeErreur()).toBe('cle-invalide')
  })
  it('voix de la Voice Library sur compte gratuit', async () => {
    repondre(402, { detail: { status: 'payment_required', message: 'Free users cannot use library voices via the API. Please upgrade your subscription to use this voice.' } })
    expect(await codeErreur()).toBe('voix-payante')
  })
  it('voix introuvable', async () => {
    repondre(404, { detail: { status: 'voice_not_found', message: 'A voice with the voice_id was not found.' } })
    expect(await codeErreur()).toBe('voix-introuvable')
  })
  it('quota épuisé (renvoyé en 401)', async () => {
    repondre(401, { detail: { status: 'quota_exceeded', message: 'This request exceeds your quota.' } })
    expect(await codeErreur()).toBe('quota')
  })
  it('activité inhabituelle (compte gratuit bloqué)', async () => {
    repondre(401, { detail: { status: 'detected_unusual_activity', message: 'Unusual activity detected. Free Tier usage disabled.' } })
    expect(await codeErreur()).toBe('activite-inhabituelle')
  })
  it('réseau indisponible', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => { throw new TypeError('Failed to fetch') }))
    expect(await codeErreur()).toBe('reseau')
  })
  it('succès : renvoie l\'audio', async () => {
    vi.stubGlobal('fetch', vi.fn(async () => new Response(new Uint8Array([1, 2, 3]), { status: 200 })))
    const buf = await synthetiser('test', 'sk_x', 'voix')
    expect(buf.byteLength).toBe(3)
  })
})
