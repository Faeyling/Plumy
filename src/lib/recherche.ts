export function normaliser(s: string): string {
  return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '')
}

export function matchTerme(
  terme: { nom?: string; alias?: string[]; equivalentAnglais?: string; etymologie?: string; definition?: string },
  query: string,
): boolean {
  if (!query) return true
  const q = normaliser(query)
  return [
    terme.nom ?? '',
    ...(terme.alias ?? []),
    terme.equivalentAnglais ?? '',
    terme.etymologie ?? '',
    terme.definition ?? '',
  ].some(c => normaliser(c).includes(q))
}
