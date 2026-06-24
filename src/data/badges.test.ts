import { describe, it, expect } from 'vitest'
import { BADGES } from './badges'

describe('BADGES', () => {
  it('contient au moins 10 badges', () => {
    expect(BADGES.length).toBeGreaterThanOrEqual(10)
  })

  it('chaque badge a les champs requis', () => {
    BADGES.forEach(b => {
      expect(b.id, `badge ${b.id} manque id`).toBeTruthy()
      expect(b.nom, `badge ${b.id} manque nom`).toBeTruthy()
      expect(b.description, `badge ${b.id} manque description`).toBeTruthy()
      expect(b.symbole, `badge ${b.id} manque symbole`).toBeTruthy()
      expect(b.couleur, `badge ${b.id} manque couleur`).toBeTruthy()
    })
  })

  it('les ids sont uniques', () => {
    const ids = BADGES.map(b => b.id)
    const uniques = new Set(ids)
    expect(uniques.size).toBe(ids.length)
  })

  it('les couleurs référencent des variables CSS', () => {
    BADGES.forEach(b => {
      expect(b.couleur, `badge ${b.id}: couleur invalide`).toMatch(/^var\(--/)
    })
  })
})
