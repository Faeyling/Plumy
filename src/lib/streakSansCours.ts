const STREAK_KEY = 'plumy-quizzes-sans-cours'

export function getStreakSansCours(): number {
  return parseInt(localStorage.getItem(STREAK_KEY) ?? '0', 10)
}

export function incrementerStreakSansCours(): void {
  localStorage.setItem(STREAK_KEY, String(getStreakSansCours() + 1))
}

export function resetStreakSansCours(): void {
  localStorage.removeItem(STREAK_KEY)
}
