import { describe, it, expect } from 'vitest'
import { shuffle, genererQCM, genererAssociation, genererTexteATrous } from './quiz.utils'
import type { Terme } from '@/content/schema'

function makeTerme(id: string, nom: string, definition = `Def de ${nom}`): Terme {
  return {
    id,
    nom,
    disciplines: ['classique'],
    categories: ['positions'],
    definition,
    description: `Description longue de ${nom} pour les tests de reconnaissance visuelle.`,
    erreursCourantes: [],
    difficulteInterne: 1,
  }
}

const DECK: Terme[] = Array.from({ length: 10 }, (_, i) =>
  makeTerme(`terme-${i}`, `Terme ${i}`, `Définition du terme numéro ${i} avec du contenu.`),
)

describe('shuffle', () => {
  it("conserve la longueur", () => {
    expect(shuffle(DECK).length).toBe(DECK.length)
  })
  it("conserve tous les éléments", () => {
    const shuffled = shuffle(DECK)
    expect(shuffled.map(t => t.id).sort()).toEqual(DECK.map(t => t.id).sort())
  })
  it("ne modifie pas le tableau original", () => {
    const original = [...DECK]
    shuffle(DECK)
    expect(DECK.map(t => t.id)).toEqual(original.map(t => t.id))
  })
})

describe('genererQCM', () => {
  it("retourne le bon nombre de questions", () => {
    expect(genererQCM(DECK, 5).length).toBe(5)
  })
  it("retourne [] si moins de 4 termes", () => {
    expect(genererQCM(DECK.slice(0, 3))).toEqual([])
  })
  it("chaque question a 4 choix", () => {
    genererQCM(DECK).forEach(q => expect(q.choix.length).toBe(4))
  })
  it("la bonne réponse est dans les choix", () => {
    genererQCM(DECK).forEach(q =>
      expect(q.choix).toContain(q.bonneReponse),
    )
  })
  it("le type est qcm", () => {
    genererQCM(DECK).forEach(q => expect(q.type).toBe('qcm'))
  })
  it("ne dépasse pas le nombre de termes disponibles", () => {
    expect(genererQCM(DECK, 999).length).toBe(DECK.length)
  })
})

describe('genererAssociation', () => {
  it("retourne le bon nombre de paires", () => {
    expect(genererAssociation(DECK, 4).length).toBe(4)
  })
  it("retourne [] si moins de 3 termes", () => {
    expect(genererAssociation(DECK.slice(0, 2))).toEqual([])
  })
  it("chaque paire a un termeId, un nom et une définition", () => {
    genererAssociation(DECK).forEach(p => {
      expect(p.termeId).toBeTruthy()
      expect(p.nom).toBeTruthy()
      expect(p.definition).toBeTruthy()
    })
  })
  it("tronque les longues définitions", () => {
    const long = makeTerme('long', 'Long', 'A'.repeat(200))
    const paires = genererAssociation([...DECK.slice(0, 4), long], 5)
    const paireLong = paires.find(p => p.termeId === 'long')
    if (paireLong) expect(paireLong.definition.length).toBeLessThanOrEqual(113)
  })
})

describe('genererTexteATrous', () => {
  it("retourne le bon nombre de questions", () => {
    expect(genererTexteATrous(DECK, 5).length).toBe(5)
  })
  it("retourne [] si moins de 4 termes", () => {
    expect(genererTexteATrous(DECK.slice(0, 3))).toEqual([])
  })
  it("chaque question a 4 propositions", () => {
    genererTexteATrous(DECK).forEach(q => expect(q.propositions.length).toBe(4))
  })
  it("le mot manquant est dans les propositions", () => {
    genererTexteATrous(DECK).forEach(q =>
      expect(q.propositions).toContain(q.motManquant),
    )
  })
  it("insère ___ quand le nom est dans la définition", () => {
    const t = makeTerme('arabesque', 'Arabesque', "Arabesque est une position.")
    const questions = genererTexteATrous([t, ...DECK.slice(0, 5)])
    const q = questions.find(x => x.termeId === 'arabesque')
    if (q) expect(q.texteAvecTrous).toContain('___')
  })
})
