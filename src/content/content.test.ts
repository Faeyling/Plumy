import { describe, it, expect } from 'vitest'
import { tousLesTermes } from './termes'
import { tousCesLeCours } from './cours'
import { unites } from './unites'
import { references } from './references'
import { toutesLesQuestionsCours } from './questionsCours'

const termeIds = new Set(tousLesTermes.map(t => t.id))
const coursParId = new Map(tousCesLeCours.map(c => [c.id, c]))
const referenceIds = new Set(references.map(r => r.id))

describe('intégrité du contenu', () => {
  it("les id de termes sont uniques et en kebab-case", () => {
    expect(termeIds.size).toBe(tousLesTermes.length)
    const invalides = tousLesTermes.filter(t => !/^[a-z0-9]+(-[a-z0-9]+)*$/.test(t.id)).map(t => t.id)
    expect(invalides).toEqual([])
  })

  it("chaque terme a un tableau erreursCourantes", () => {
    expect(tousLesTermes.filter(t => !Array.isArray(t.erreursCourantes)).map(t => t.id)).toEqual([])
  })

  it("les termesLies pointent vers des termes existants", () => {
    const casses = tousLesTermes.flatMap(t =>
      (t.termesLies ?? []).filter(id => !termeIds.has(id)).map(id => `${t.id} → ${id}`),
    )
    expect(casses).toEqual([])
  })

  it("les unités référencent des cours et termes existants", () => {
    const casses = unites.flatMap(u => [
      ...u.coursIds.filter(id => !coursParId.has(id)).map(id => `unité ${u.numero} → cours ${id}`),
      ...u.termeIds.filter(id => !termeIds.has(id)).map(id => `unité ${u.numero} → terme ${id}`),
    ])
    expect(casses).toEqual([])
  })

  it("les termesAbordes des cours existent", () => {
    const casses = tousCesLeCours.flatMap(c =>
      (c.termesAbordes ?? []).filter(id => !termeIds.has(id)).map(id => `${c.id} → ${id}`),
    )
    expect(casses).toEqual([])
  })

  it("les références de sécurité existent", () => {
    const casses = tousLesTermes.flatMap(t =>
      (t.securite?.referencesIds ?? []).filter(id => !referenceIds.has(id)).map(id => `${t.id} → ${id}`),
    )
    expect(casses).toEqual([])
  })

  it("les questions de cours pointent vers une section existante et sont cohérentes", () => {
    const invalides = toutesLesQuestionsCours
      .filter(q => {
        const cours = coursParId.get(q.coursId)
        return (
          !cours ||
          !cours.sections[q.sectionIndex] ||
          !q.choix.includes(q.bonneReponse) ||
          new Set(q.choix).size !== q.choix.length
        )
      })
      .map(q => `${q.coursId}#${q.sectionIndex} : ${q.question.slice(0, 50)}`)
    expect(invalides).toEqual([])
  })
})
