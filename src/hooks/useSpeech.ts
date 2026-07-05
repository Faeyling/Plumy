import { useState, useCallback, useRef } from 'react'

const ELEVENLABS_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY as string | undefined
const ELEVENLABS_VOICE = (import.meta.env.VITE_ELEVENLABS_VOICE_ID as string | undefined) ?? 'MF3mGyEYCl7XYWbV9V6O'

function getFrenchVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices()
  return (
    voices.find(v => v.lang === 'fr-FR' && v.localService) ??
    voices.find(v => v.lang === 'fr-FR') ??
    voices.find(v => v.lang.startsWith('fr')) ??
    null
  )
}

export function useSpeech() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSupported] = useState(() => typeof window !== 'undefined' && 'speechSynthesis' in window)
  const activeText = useRef<string>('')
  const audioRef = useRef<{ source: AudioBufferSourceNode; ctx: AudioContext } | null>(null)

  const speakLocal = useCallback((text: string) => {
    if (!isSupported) return
    const fire = () => {
      if (activeText.current !== text) return
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.lang = 'fr-FR'
      utterance.rate = 1.0
      utterance.pitch = 1.35
      const voice = getFrenchVoice()
      if (voice) utterance.voice = voice
      utterance.onstart = () => setIsPlaying(true)
      utterance.onend = () => setIsPlaying(false)
      utterance.onerror = () => setIsPlaying(false)
      window.speechSynthesis.speak(utterance)
    }
    if (window.speechSynthesis.getVoices().length > 0) {
      fire()
    } else {
      window.speechSynthesis.onvoiceschanged = () => {
        window.speechSynthesis.onvoiceschanged = null
        fire()
      }
    }
  }, [isSupported])

  const speak = useCallback((text: string) => {
    if (!isSupported && !ELEVENLABS_KEY) return

    if (audioRef.current) {
      try { audioRef.current.source.stop() } catch { /* already stopped */ }
      audioRef.current.ctx.close()
      audioRef.current = null
    }
    window.speechSynthesis?.cancel()
    activeText.current = text

    if (ELEVENLABS_KEY) {
      void (async () => {
        try {
          const res = await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${ELEVENLABS_VOICE}`, {
            method: 'POST',
            headers: {
              'xi-api-key': ELEVENLABS_KEY,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              text,
              model_id: 'eleven_multilingual_v2',
              voice_settings: { stability: 0.4, similarity_boost: 0.8, style: 0.6, use_speaker_boost: true },
            }),
          })
          if (!res.ok) throw new Error(`ElevenLabs ${res.status}`)
          if (activeText.current !== text) return

          const buffer = await res.arrayBuffer()
          if (activeText.current !== text) return

          const ctx = new AudioContext()
          const decoded = await ctx.decodeAudioData(buffer)
          if (activeText.current !== text) { ctx.close(); return }

          const source = ctx.createBufferSource()
          source.buffer = decoded
          source.connect(ctx.destination)
          audioRef.current = { source, ctx }
          setIsPlaying(true)
          source.start()
          source.onended = () => {
            audioRef.current = null
            ctx.close()
            setIsPlaying(false)
          }
        } catch {
          speakLocal(text)
        }
      })()
    } else {
      speakLocal(text)
    }
  }, [isSupported, speakLocal])

  const stop = useCallback(() => {
    activeText.current = ''
    if (audioRef.current) {
      try { audioRef.current.source.stop() } catch { /* already stopped */ }
      audioRef.current.ctx.close()
      audioRef.current = null
    }
    window.speechSynthesis?.cancel()
    setIsPlaying(false)
  }, [])

  const toggle = useCallback((text: string) => {
    if (isPlaying) stop()
    else speak(text)
  }, [isPlaying, speak, stop])

  return { isPlaying, isSupported: isSupported || !!ELEVENLABS_KEY, speak, stop, toggle }
}
