import { describe, it, expect } from 'vitest'
import { normaliser, matchTerme } from './recherche'

describe('normaliser', () => {
  it("met en minuscules", () => {
    expect(normaliser('PLIÉ')).toContain('pli')
  })
  it("supprime les accents", () => {
    expect(normaliser('plié')).toBe('plie')
    expect(normaliser('arabesque')).toBe('arabesque')
    expect(normaliser('écharpe')).toBe('echarpe')
  })
  it("retourne une chaîne vide pour une entrée vide", () => {
    expect(normaliser('')).toBe('')
  })
})

describe('matchTerme', () => {
  const terme = {
    nom: 'Arabesque',
    alias: ['Grand arabesque'],
    equivalentAnglais: 'arabesque',
    etymologie: 'Du latin',
    definition: "Position sur une jambe, extension derrière.",
  }

  it("retourne true si query vide", () => {
    expect(matchTerme(terme, '')).toBe(true)
  })
  it("trouve sur le nom exact", () => {
    expect(matchTerme(terme, 'arabesque')).toBe(true)
  })
  it("trouve insensiblement à la casse", () => {
    expect(matchTerme(terme, 'ARABESQUE')).toBe(true)
  })
  it("trouve sans accent", () => {
    expect(matchTerme(terme, 'arabesque')).toBe(true)
  })
  it("trouve dans les alias", () => {
    expect(matchTerme(terme, 'grand')).toBe(true)
  })
  it("trouve dans la définition", () => {
    expect(matchTerme(terme, 'extension')).toBe(true)
  })
  it("trouve dans l'équivalent anglais", () => {
    expect(matchTerme(terme, 'arabesque')).toBe(true)
  })
  it("retourne false si aucun champ ne correspond", () => {
    expect(matchTerme(terme, 'pirouette')).toBe(false)
  })
  it("fonctionne avec des champs absents", () => {
    expect(matchTerme({ nom: 'Plié' }, 'plie')).toBe(true)
    expect(matchTerme({ nom: 'Plié' }, 'tour')).toBe(false)
  })
})
