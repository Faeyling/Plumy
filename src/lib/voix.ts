export const ELEVENLABS_KEY = 'sk_48608c6c95cc218c85cfc863f0c5b14b7c858522e9f69f83'

export const VOIX_ELEVENLABS = [
  { id: 'jfEwztGDkpbpy89xeku6', nom: 'Voix 1' },
  { id: 'IbbR6Av0dWuQJS0b8JVT', nom: 'Voix 2' },
] as const

export type VoixId = (typeof VOIX_ELEVENLABS)[number]['id']

const CLE_STORAGE = 'plumy-voix-id'
const VOIX_DEFAUT = VOIX_ELEVENLABS[0].id

export function getVoixId(): string {
  return localStorage.getItem(CLE_STORAGE) ?? VOIX_DEFAUT
}

export function setVoixId(id: string): void {
  localStorage.setItem(CLE_STORAGE, id)
}
