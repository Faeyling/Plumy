import { useState, useCallback } from 'react'

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

  const speak = useCallback((text: string) => {
    if (!isSupported) return
    window.speechSynthesis.cancel()
    const jeton = ++lectureActive

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

  const stop = useCallback(() => {
    lectureActive++
    window.speechSynthesis?.cancel()
    setIsPlaying(false)
  }, [])

  const toggle = useCallback((text: string) => {
    if (isPlaying) stop()
    else speak(text)
  }, [isPlaying, speak, stop])

  return { isPlaying, isSupported, speak, stop, toggle }
}
