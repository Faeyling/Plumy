import { useSpeech } from '@/hooks/useSpeech'

interface SpeakButtonProps {
  text: string
  size?: number
  className?: string
}

export function SpeakButton({ text, size = 15, className }: SpeakButtonProps) {
  const { isPlaying, isSupported, toggle } = useSpeech()
  if (!isSupported) return null
  return (
    <button
      onClick={() => toggle(text)}
      aria-label={isPlaying ? 'Arrêter la lecture' : 'Écouter'}
      style={{ color: isPlaying ? 'var(--color-plumy-blue)' : 'var(--color-gris-texte)' }}
      className={`p-1 rounded-full transition-colors flex-shrink-0 hover:opacity-70 ${className ?? ''}`}
    >
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
        {isPlaying ? (
          <path d="M6 4h4v16H6zM14 4h4v16h-4z" fill="currentColor" />
        ) : (
          <path
            d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  )
}
