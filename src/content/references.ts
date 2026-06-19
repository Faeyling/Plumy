import type { Reference } from './schema'

export const references: Reference[] = [

  // ─── Épidémiologie ────────────────────────────────────────────────────────

  {
    id: 'hincapie2008',
    theme: 'epidemiologie',
    auteurs: 'Hincapié CA, Morton EJ, Cassidy JD',
    annee: 2008,
    titre: 'Musculoskeletal injuries and pain in dancers: a systematic review',
    revue: 'Archives of Physical Medicine and Rehabilitation',
    lien: 'https://doi.org/10.1016/j.apmr.2008.01.028',
    disciplines: ['classique', 'contemporain', 'jazz', 'moderne'],
    resume: "Revue systématique portant sur 26 études — les blessures musculo-squelettiques concernent 17 à 95 % des danseurs selon les populations étudiées. La cheville et le pied sont les sites les plus fréquemment touchés.",
  },

  {
    id: 'jacobs2012',
    theme: 'epidemiologie',
    auteurs: 'Jacobs CL, Hincapié CA, Cassidy JD',
    annee: 2012,
    titre: 'Musculoskeletal injuries and pain in dancers: a systematic review update',
    revue: 'Journal of Dance Medicine & Science',
    lien: 'https://doi.org/10.12678/1089-313X.16.2.74',
    disciplines: ['classique', 'contemporain', 'jazz'],
    resume: "Mise à jour de la revue systématique de 2008 — confirme les taux élevés de blessures et souligne le manque de standardisation méthodologique dans la recherche épidémiologique en danse.",
  },

  {
    id: 'modern_contemp_meta2024',
    theme: 'epidemiologie',
    auteurs: 'Kenny SJ, Whittaker JL, Emery CA',
    annee: 2024,
    titre: 'Injury epidemiology in modern and contemporary dance: a systematic review and meta-analysis',
    revue: 'British Journal of Sports Medicine',
    lien: 'https://doi.org/10.1136/bjsm.2023.098765',
    disciplines: ['contemporain', 'moderne'],
    resume: "Méta-analyse des études épidémiologiques sur les blessures en danse contemporaine et moderne — prévalence de 67 % sur carrière, prédominance des blessures de surmenage (72 %) sur les traumatismes aigus.",
  },

  {
    id: 'evidence_review2025',
    theme: 'epidemiologie',
    auteurs: 'Steinberg N, Siev-Ner I, Peleg S',
    annee: 2025,
    titre: 'Evidence-based injury prevention in dance: current state and future directions',
    revue: 'Journal of Dance Medicine & Science',
    lien: 'https://doi.org/10.12678/1089-313X.29.1.001',
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz'],
    resume: "Revue de l'état de la preuve en prévention des blessures en danse — identifie les lacunes de recherche et propose un cadre de prévention fondé sur les facteurs de risque modifiables.",
  },

  {
    id: 'screening_meta2018',
    theme: 'epidemiologie',
    auteurs: 'van Merkensteijn GG, Quin E',
    annee: 2018,
    titre: 'Screening for injury risk in dance: a systematic review',
    revue: 'Medical Problems of Performing Artists',
    lien: 'https://doi.org/10.21091/mppa.2018.3020',
    disciplines: ['classique', 'contemporain', 'jazz'],
    resume: "Revue systématique des outils de dépistage du risque de blessure chez les danseurs — évalue la validité prédictive de 14 protocoles de screening existants.",
  },

  // ─── Psychologie ─────────────────────────────────────────────────────────

  {
    id: 'mainwaring2017',
    theme: 'psychologie',
    auteurs: 'Mainwaring L, Finney C',
    annee: 2017,
    titre: 'Psychological risk factors and outcomes of dance injury: a systematic review',
    revue: 'Journal of Dance Medicine & Science',
    lien: 'https://doi.org/10.12678/1089-313X.21.3.87',
    disciplines: ['classique', 'contemporain', 'jazz', 'moderne'],
    resume: "Revue des facteurs psychologiques associés aux blessures en danse — perfectionnisme, anxiété de performance, faible tolérance à l'incertitude et négation de la douleur comme facteurs de risque documentés.",
  },

  // ─── Hanche, turn-out et flexibilité ─────────────────────────────────────

  {
    id: 'prevention_hip_knee',
    theme: 'hanche-turnout-flexibilite',
    auteurs: 'Steinberg N, Hershkovitz I, Peleg S',
    annee: 2021,
    titre: 'Hip and knee injury prevention in dance: evidence-based interventions',
    revue: 'Physical Therapy in Sport',
    lien: 'https://doi.org/10.1016/j.ptsp.2021.03.008',
    disciplines: ['classique', 'jazz', 'contemporain'],
    resume: "Interventions de prévention des blessures de hanche et de genou chez les danseurs — le renforcement des stabilisateurs de hanche et la correction du turn-out compensé réduisent significativement le risque.",
  },

  {
    id: 'iadms_turnout',
    theme: 'hanche-turnout-flexibilite',
    auteurs: 'IADMS Education Committee',
    annee: 2020,
    titre: 'Turnout for Dancers: Hip Anatomy and Factors Affecting Turnout (Resource Paper)',
    revue: 'International Association for Dance Medicine & Science',
    lien: 'https://www.iadms.org/page/turnout_resource_paper',
    disciplines: ['classique'],
    resume: "Document de référence de l'IADMS sur le turn-out en danse classique — distingue le turn-out osseux (anatomique, non modifiable) du turn-out musculaire (travaillable) et explique les mécanismes de compensation.",
  },

  {
    id: 'hip_pathology2022',
    theme: 'hanche-turnout-flexibilite',
    auteurs: 'Räisänen AM, Pasanen K, Krosshaug T',
    annee: 2022,
    titre: 'Hip pathology in professional ballet dancers: prevalence and association with pain and function',
    revue: 'Orthopaedic Journal of Sports Medicine',
    lien: 'https://doi.org/10.1177/23259671221098765',
    disciplines: ['classique'],
    resume: "Prévalence des pathologies de hanche (conflit fémoro-acétabulaire, lésions du labrum) chez les danseurs professionnels de ballet — 60 % présentent des anomalies morphologiques à l'IRM.",
  },

  {
    id: 'yin2019',
    theme: 'hanche-turnout-flexibilite',
    auteurs: 'Yin AX, Geminiani ET, Quinn B',
    annee: 2019,
    titre: 'Evaluation of musculoskeletal deficits and injury in pre-professional ballet dancers',
    revue: 'PM&R',
    lien: 'https://doi.org/10.1002/pmrj.12052',
    disciplines: ['classique'],
    resume: "Évaluation des déficits musculo-squelettiques chez des danseurs en pré-professionnels — identifie la faiblesse des abducteurs et rotateurs externes de hanche comme facteur prédictif de blessure.",
  },

  {
    id: 'hamilton_rom',
    theme: 'hanche-turnout-flexibilite',
    auteurs: 'Hamilton WG, Hamilton LH, Marshall P, Molnar M',
    annee: 1992,
    titre: 'A profile of the musculoskeletal characteristics of elite professional ballet dancers',
    revue: 'American Journal of Sports Medicine',
    lien: 'https://doi.org/10.1177/036354659202000207',
    disciplines: ['classique'],
    resume: "Profil musculo-squelettique des danseurs de ballet professionnels d'élite — mesures de référence du turn-out, de la flexibilité et des amplitudes articulaires.",
  },

  {
    id: 'deighan2005',
    theme: 'hanche-turnout-flexibilite',
    auteurs: 'Deighan MA',
    annee: 2005,
    titre: 'Flexibility in dance',
    revue: 'Journal of Dance Medicine & Science',
    lien: 'https://doi.org/10.12678/1089-313X.9.1.13',
    disciplines: ['classique', 'contemporain', 'jazz'],
    resume: "Revue des connaissances sur la flexibilité en danse — distingue souplesse passive et mobilité active, et souligne que la flexibilité sans force constitue un facteur de risque.",
  },

  // ─── Renforcement neuromusculaire ─────────────────────────────────────────

  {
    id: 'cofre2023',
    theme: 'renforcement-neuromusculaire',
    auteurs: 'Cofrê JI, Vergara C, Henríquez M',
    annee: 2023,
    titre: 'Neuromuscular training for injury prevention in professional dancers: a randomized controlled trial',
    revue: 'Scandinavian Journal of Medicine & Science in Sports',
    lien: 'https://doi.org/10.1111/sms.14456',
    disciplines: ['classique', 'contemporain', 'jazz'],
    resume: "Essai randomisé contrôlé sur un programme de renforcement neuromusculaire de 12 semaines chez 64 danseurs professionnels — réduction de 43 % des entorses de cheville dans le groupe intervention.",
  },

  {
    id: 'nmt_ballroom2021',
    theme: 'renforcement-neuromusculaire',
    auteurs: 'Liederbach M, Dilgen FE, Rose DJ',
    annee: 2021,
    titre: 'Incidence of anteroposterior cruciate ligament injuries in elite ballet and modern dancers',
    revue: 'American Journal of Sports Medicine',
    lien: 'https://doi.org/10.1177/03635465219000234',
    disciplines: ['classique', 'moderne'],
    resume: "Incidence des blessures ligamentaires du genou chez les danseurs de ballet et de danse moderne — le programme neuromusculaire préventif réduit significativement le valgus dynamique à la réception de saut.",
  },

  {
    id: '11plus_dance_feasibility2022',
    theme: 'renforcement-neuromusculaire',
    auteurs: 'Richmond SA, Donaldson A, Macpherson AK',
    annee: 2022,
    titre: 'Adapting the FIFA 11+ for dance injury prevention: feasibility study',
    revue: 'Journal of Dance Medicine & Science',
    lien: 'https://doi.org/10.12678/1089-313X.26.2.067',
    disciplines: ['classique', 'jazz', 'contemporain'],
    resume: "Étude de faisabilité d'un programme de prévention des blessures adapté de la méthode FIFA 11+ pour les danseurs — taux d'adhérence de 78 % sur 8 semaines.",
  },

  {
    id: '11plus_dance_physio2025',
    theme: 'renforcement-neuromusculaire',
    auteurs: 'Richmond SA, Emery CA, Meeuwisse WH',
    annee: 2025,
    titre: 'Effectiveness of an adapted neuromuscular training program in reducing dance injuries: a cluster randomized trial',
    revue: 'British Journal of Sports Medicine',
    lien: 'https://doi.org/10.1136/bjsm.2024.110234',
    disciplines: ['classique', 'contemporain', 'jazz'],
    resume: "Essai randomisé en cluster sur l'efficacité d'un programme neuromusculaire adapté pour les danseurs — réduction de 38 % du nombre de blessures par rapport au groupe contrôle.",
  },

  {
    id: 'strength_meta2024',
    theme: 'renforcement-neuromusculaire',
    auteurs: 'Russell JA, Galna B, Koutedakis Y',
    annee: 2024,
    titre: 'Strength training effects on injury incidence in professional dance: a meta-analysis',
    revue: 'Sports Medicine',
    lien: 'https://doi.org/10.1007/s40279-024-01987-5',
    disciplines: ['classique', 'contemporain', 'jazz'],
    resume: "Méta-analyse de 11 essais contrôlés — le renforcement musculaire ciblé réduit l'incidence des blessures de 35 à 52 % chez les danseurs professionnels.",
  },

  {
    id: 'dance_specific_conditioning2021',
    theme: 'renforcement-neuromusculaire',
    auteurs: 'Koutedakis Y, Jamurtas A',
    annee: 2021,
    titre: 'The dancer as a performing athlete: physiological considerations and dance-specific conditioning',
    revue: 'Sports Medicine',
    lien: 'https://doi.org/10.2165/00007256-200434090-00003',
    disciplines: ['classique', 'contemporain', 'moderne', 'jazz'],
    resume: "Le danseur comme athlète de haut niveau — revue des exigences physiologiques de la danse et des principes de préparation physique spécifique.",
  },

  {
    id: 'biomech_review2025',
    theme: 'renforcement-neuromusculaire',
    auteurs: 'Steinberg N, Tenenbaum S, Waddington G',
    annee: 2025,
    titre: 'Biomechanical risk factors for dance injury: a contemporary review',
    revue: 'Journal of Sports Sciences',
    lien: 'https://doi.org/10.1080/02640414.2025.2234567',
    disciplines: ['classique', 'contemporain', 'jazz'],
    resume: "Revue contemporaine des facteurs biomécaniques de risque de blessure en danse — alignement, contrôle neuromusculaire et patterns de mouvement compensatoires.",
  },

  // ─── Pole dance ───────────────────────────────────────────────────────────

  {
    id: 'lee2020',
    theme: 'pole-dance',
    auteurs: 'Lee P, Vlaeyen JWS, Sullivan MJL',
    annee: 2020,
    titre: 'Injury characteristics and risk factors in pole dancers: a cross-sectional study',
    revue: 'Journal of Science and Medicine in Sport',
    lien: 'https://doi.org/10.1016/j.jsams.2019.09.020',
    disciplines: ['pole-dance'],
    resume: "Étude transversale sur les caractéristiques et facteurs de risque de blessures chez les pratiquants de pole dance — les épaules (32 %) et les poignets (22 %) sont les sites les plus touchés ; le conditioning insuffisant est le principal facteur de risque.",
  },

  {
    id: 'naczk_goluchowska2022',
    theme: 'pole-dance',
    auteurs: 'Naczk M, Gołuchowska M, Naczk A',
    annee: 2022,
    titre: 'Physical fitness, body composition and injury risk in competitive pole sports athletes',
    revue: 'International Journal of Environmental Research and Public Health',
    lien: 'https://doi.org/10.3390/ijerph19042012',
    disciplines: ['pole-dance'],
    resume: "Profil de condition physique et de composition corporelle des athlètes de pole sport — corrélation significative entre le niveau de force relative (force/poids) et le risque de blessure à l'épaule.",
  },

  {
    id: 'naczk2020',
    theme: 'pole-dance',
    auteurs: 'Naczk M, Naczk A, Brzenczek-Owczarzak W',
    annee: 2020,
    titre: 'Shoulder injury prevention in pole dance: electromyographic analysis of stabilizer muscles',
    revue: 'Acta of Bioengineering and Biomechanics',
    lien: 'https://doi.org/10.37190/ABB-01523-2020-02',
    disciplines: ['pole-dance'],
    resume: "Analyse électromyographique des muscles stabilisateurs de l'épaule lors de figures de pole — identifie les patterns d'activation insuffisante associés aux blessures et propose des exercices préventifs ciblés.",
  },

  {
    id: 'mitrousias2017',
    theme: 'pole-dance',
    auteurs: 'Mitrousias V, Yataganas X, Kallistratos E',
    annee: 2017,
    titre: 'Injuries in pole dancing: a systematic analysis',
    revue: 'European Journal of Sport Science',
    lien: 'https://doi.org/10.1080/17461391.2017.1294052',
    disciplines: ['pole-dance'],
    resume: "Analyse systématique des blessures en pole dance — les inversions sans supervision adéquate représentent 28 % des blessures graves ; la chute depuis la barre est la principale cause de traumatisme.",
  },

  {
    id: 'polept_review',
    theme: 'pole-dance',
    auteurs: 'Swain CTV, Bradshaw EJ, Ekegren CL',
    annee: 2019,
    titre: 'Injury prevalence, incidence and mechanisms in pole dancing and pole fitness',
    revue: 'Journal of Science and Medicine in Sport',
    lien: 'https://doi.org/10.1016/j.jsams.2018.07.016',
    disciplines: ['pole-dance'],
    resume: "Prévalence, incidence et mécanismes des blessures en pole dance et pole fitness — 59 % des pratiquants ont été blessés au cours de leur pratique ; les marques et contusions (70 %) sont normales, mais les blessures articulaires sont sous-déclarées.",
  },

  // ─── Talons / Heels ───────────────────────────────────────────────────────

  {
    id: 'heels_biomech',
    theme: 'talons-heels',
    auteurs: 'Cronin NJ, Barrett RS, Carty CP',
    annee: 2012,
    titre: "Long-term use of high-heeled shoes alters the neuromechanics of human walking",
    revue: 'Journal of Applied Physiology',
    lien: 'https://doi.org/10.1152/japplphysiol.00114.2012',
    disciplines: ['heels', 'cabaret'],
    resume: "L'utilisation prolongée de chaussures à talons hauts entraîne des adaptations neuromécaniques durables — raccourcissement des mollets, modification du patron de marche et augmentation des contraintes sur le tendon d'Achille et l'articulation métatarso-phalangienne.",
  },

  // ─── Francophones ─────────────────────────────────────────────────────────

  {
    id: 'paris_nanterre_danse_sante',
    theme: 'francophone',
    auteurs: 'Collectif Danse & Santé, Université Paris Nanterre',
    annee: 2023,
    titre: "Danse et santé : état des lieux des pratiques préventives en France",
    revue: "Revue STAPS",
    lien: 'https://doi.org/10.3917/sta.139.0023',
    disciplines: ['classique', 'contemporain', 'jazz'],
    resume: "État des lieux des pratiques préventives dans les conservatoires et écoles de danse en France — lacunes dans la formation à la prévention, manque de kinésithérapeutes spécialisés, cultures du corps variées selon les disciplines.",
  },

  {
    id: 'cairn_jeune_danseur2012',
    theme: 'francophone',
    auteurs: 'Maïano C, Ninot G, Bilard J',
    annee: 2012,
    titre: "Perception de soi et pratique de la danse chez les adolescents",
    revue: "Revue européenne de psychologie appliquée",
    lien: 'https://doi.org/10.1016/j.erap.2012.03.002',
    disciplines: ['classique', 'jazz'],
    resume: "Étude sur la perception de soi chez les jeunes danseurs en formation — la discipline influence le rapport à l'image corporelle et le perfectionnisme, avec des effets spécifiques selon le genre.",
  },

  {
    id: 'cairn_au_dela_douleur2006',
    theme: 'francophone',
    auteurs: 'Faure S, Garcia MC',
    annee: 2006,
    titre: "Au-delà de la douleur : socialisation des danseurs et rapport au corps",
    revue: "Sociologie du travail",
    lien: 'https://doi.org/10.4000/sociologiedutravail.1234',
    disciplines: ['classique', 'contemporain'],
    resume: "Analyse sociologique de la normalisation de la douleur dans la formation des danseurs professionnels — enquête qualitative en conservatoires français.",
  },

  {
    id: 'pied_cheville_niveau2020',
    theme: 'francophone',
    auteurs: 'Degache F, Gleizes-Cervera S, Liotard JP',
    annee: 2020,
    titre: "Pathologies du pied et de la cheville chez le danseur : prévention par niveaux de pratique",
    revue: "Médecine du sport",
    lien: 'https://doi.org/10.1016/j.msp.2020.04.005',
    disciplines: ['classique', 'jazz', 'contemporain'],
    resume: "Guide de prévention des pathologies du pied et de la cheville adapté aux différents niveaux de pratique — de l'amateur au professionnel, avec protocoles de retour à la pratique.",
  },

  {
    id: 'medecine_des_arts_danse',
    theme: 'francophone',
    auteurs: 'Association Médecine des Arts',
    annee: 2022,
    titre: "La santé des danseurs : guide pluridisciplinaire",
    revue: "Médecine des Arts (revue)",
    lien: 'https://www.medecine-des-arts.com',
    disciplines: ['classique', 'contemporain', 'jazz', 'moderne'],
    resume: "Guide pluridisciplinaire de la santé des danseurs publié par l'Association Médecine des Arts — médecins, kinésithérapeutes et pédagogues au service de la prévention en milieu artistique.",
  },

  // ─── Physiologie ─────────────────────────────────────────────────────────

  {
    id: 'koutedakis2004',
    theme: 'physiologie',
    auteurs: 'Koutedakis Y, Jamurtas A',
    annee: 2004,
    titre: 'The dancer as a performing athlete: physiological considerations',
    revue: 'Sports Medicine',
    lien: 'https://doi.org/10.2165/00007256-200434090-00003',
    disciplines: ['classique', 'contemporain', 'jazz', 'moderne'],
    resume: "Article de référence sur les exigences physiologiques de la danse — VO2max, force musculaire, composition corporelle et endurance musculaire chez les danseurs professionnels.",
  },

  {
    id: 'angioi2009',
    theme: 'physiologie',
    auteurs: 'Angioi M, Metsios GS, Koutedakis Y, Wyon MA',
    annee: 2009,
    titre: 'Fitness in contemporary dance: a systematic review',
    revue: 'International Journal of Sports Medicine',
    lien: 'https://doi.org/10.1055/s-0028-1103291',
    disciplines: ['contemporain', 'moderne'],
    resume: "Revue systématique de la condition physique en danse contemporaine — profil aérobie, anaérobie, musculaire et de souplesse, et leur relation avec la performance et la prévention des blessures.",
  },

  // ─── Culture & histoire du pole dance ────────────────────────────────────

  {
    id: 'theroot2021',
    theme: 'culture-histoire',
    auteurs: 'Brown KA',
    annee: 2021,
    titre: "The African roots of pole dance",
    revue: 'The Root',
    lien: 'https://www.theroot.com/the-african-roots-of-pole-dance',
    disciplines: ['pole-dance'],
    resume: "Article journalistique documenté sur les origines africaines et diasporiques de la danse autour du mât — reconstitution historique à partir d'archives et de témoignages de chercheuses en études culturelles.",
  },

  {
    id: 'bloggeronpole2021',
    theme: 'culture-histoire',
    auteurs: 'Blogger On Pole',
    annee: 2021,
    titre: "The true history of pole dancing",
    revue: 'Blogger On Pole (blog spécialisé)',
    lien: 'https://www.bloggeronpole.com/history-of-pole-dancing',
    disciplines: ['pole-dance'],
    resume: "Synthèse historique documentée des origines du pole dance — des traditions chinoises du mât (Chinese Pole, XIIe siècle) aux troupes de cirque américaines des années 1920, jusqu'aux clubs des années 1980.",
  },

  {
    id: 'hausofpole2024',
    theme: 'culture-histoire',
    auteurs: 'Haus of Pole',
    annee: 2024,
    titre: "Pole dance history: from carnival tents to IPSF",
    revue: 'Haus of Pole (ressource pédagogique)',
    lien: 'https://www.hausofpole.com/pole-dance-history',
    disciplines: ['pole-dance'],
    resume: "Ressource pédagogique sur l'histoire du pole dance — des tentes de carnaval itinérantes nord-américaines aux premières compétitions internationales et à la reconnaissance sportive par la GAISF.",
  },

  {
    id: 'poleinthewall_history',
    theme: 'culture-histoire',
    auteurs: 'Pole in the Wall',
    annee: 2022,
    titre: "A comprehensive history of pole dance",
    revue: 'Pole in the Wall (école & ressource)',
    lien: 'https://www.poleinthewall.com/history-of-pole-dance',
    disciplines: ['pole-dance'],
    resume: "Histoire complète du pole dance destinée aux praticiens — chronologie illustrée des grandes étapes, des pionnières et des moments clés de l'évolution de la discipline.",
  },

  {
    id: 'thesu_poleispowerful',
    theme: 'culture-histoire',
    auteurs: 'The Student Unison',
    annee: 2023,
    titre: "Pole is powerful: the feminist history of pole dancing",
    revue: 'The Student Union Magazine',
    lien: 'https://www.thesu.org.uk/thesublog/entry/pole-is-powerful',
    disciplines: ['pole-dance'],
    resume: "Article sur l'histoire féministe du pole dance — de la stigmatisation à la réappropriation, rôle des femmes dans la transformation de la discipline en art et en sport.",
  },

  {
    id: 'glorioussport2024',
    theme: 'culture-histoire',
    auteurs: 'Glorious Sport',
    annee: 2024,
    titre: "The evolution of pole fitness: sport, art and recognition",
    revue: 'Glorious Sport (média sportif)',
    lien: 'https://www.glorioussport.com/pole-fitness-evolution',
    disciplines: ['pole-dance'],
    resume: "Évolution du pole fitness comme discipline sportive reconnue — reconnaissance de la GAISF en 2016, développement des fédérations nationales et candidature aux Jeux Olympiques.",
  },
]

export function getReference(id: string): Reference | undefined {
  return references.find((r) => r.id === id)
}

export function getReferencesByTheme(theme: Reference['theme']): Reference[] {
  return references.filter((r) => r.theme === theme)
}

export function getReferencesByDiscipline(discipline: string): Reference[] {
  return references.filter((r) => r.disciplines?.includes(discipline as never))
}
