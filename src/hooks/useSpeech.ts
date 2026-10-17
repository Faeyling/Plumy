import { useState, useCallback, useRef } from 'react'
import { getVoixId, getCleElevenLabs } from '@/lib/voix'
import { synthetiser, jouerAudio, arreterAudio, deverrouillerAudio } from '@/lib/elevenlabs'

function getFrenchVoice(): SpeechSynthesisVoice | null {
  const voices = window.speechSynthesis.getVoices()
  return (
    voices.find(v => v.lang === 'fr-FR' && v.localService) ??
    voices.find(v => v.lang === 'fr-FR') ??
    voices.find(v => v.lang.startsWith('fr')) ??
    null
  )
}

// Jeton de la lecture en cours, partagé par toutes les instances du hook :
// lancer une lecture ailleurs invalide celle-ci.
let lectureActive = 0

export function useSpeech() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isSupported] = useState(() => typeof window !== 'undefined' && 'speechSynthesis' in window)
  const maLecture = useRef(0)

  const speakLocal = useCallback((text: string, jeton: number) => {
    if (!isSupported) { setIsPlaying(false); return }
    const fire = () => {
      if (lectureActive !== jeton) return
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
    // Hors ligne ou sans clé : voix locale du navigateur
    const cle = navigator.onLine ? getCleElevenLabs() : ''
    if (!isSupported && !cle) return

    arreterAudio()
    window.speechSynthesis?.cancel()
    const jeton = ++lectureActive
    maLecture.current = jeton

    if (!cle) {
      speakLocal(text, jeton)
      return
    }

    // Doit rester synchrone dans le clic (iOS)
    deverrouillerAudio()
    setIsPlaying(true)
    void (async () => {
      try {
        const buffer = await synthetiser(text, cle, getVoixId())
        if (lectureActive !== jeton) { setIsPlaying(false); return }
        await jouerAudio(buffer, () => {
          if (maLecture.current === jeton) setIsPlaying(false)
        })
      } catch (err) {
        console.warn('[ElevenLabs] repli sur la voix du navigateur :', err)
        if (lectureActive === jeton) speakLocal(text, jeton)
        else setIsPlaying(false)
      }
    })()
  }, [isSupported, speakLocal])

  const stop = useCallback(() => {
    lectureActive++
    arreterAudio()
    window.speechSynthesis?.cancel()
    setIsPlaying(false)
  }, [])

  const toggle = useCallback((text: string) => {
    if (isPlaying) stop()
    else speak(text)
  }, [isPlaying, speak, stop])

  return { isPlaying, isSupported: isSupported || !!getCleElevenLabs(), speak, stop, toggle }
}
