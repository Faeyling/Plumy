/**
 * Verification script: 3 passes on the import/export data pipeline
 */

import { chromium } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const BASE = 'http://localhost:5173';
const SCRATCHPAD = '/tmp/claude-0/-home-user-Plumy/759b82af-cce3-5738-9a15-7bbcd8ce0771/scratchpad';

let passed = 0;
let failed = 0;
const findings = [];

function assert(label, condition, detail = '') {
  if (condition) { console.log(`  OK: ${label}`); passed++; }
  else { console.log(`  FAIL: ${label}${detail ? ' --- ' + detail : ''}`); failed++; findings.push(`FAIL: ${label}${detail ? ' --- ' + detail : ''}`); }
}

function probe(label, condition, detail = '') {
  if (condition) { console.log(`  PROBE PASS: ${label}`); }
  else { console.log(`  PROBE WARN: ${label} --- ${detail || 'unexpected'}`); findings.push(`PROBE-WARN: ${label}${detail ? ' --- ' + detail : ''}`); }
}

async function seedDatabase(page, seedData) {
  await page.evaluate(async (seed) => {
    const dbVersion = await new Promise((res, rej) => {
      const p = indexedDB.open('PlumyDB');
      p.onsuccess = (e) => { const v = e.target.result.version; e.target.result.close(); res(v); };
      p.onerror = rej;
    });
    await new Promise((resolve, reject) => {
      const req = indexedDB.open('PlumyDB', dbVersion);
      req.onsuccess = (e) => {
        const db = e.target.result;
        try {
          const tx = db.transaction(['progressions', 'stats', 'termesPersonnels', 'historiqueQuiz'], 'readwrite');
          tx.oncomplete = () => { db.close(); resolve(); };
          tx.onerror = (err) => { db.close(); reject(new Error('tx: ' + err.target?.error)); };
          tx.objectStore('progressions').clear();
          tx.objectStore('stats').clear();
          tx.objectStore('termesPersonnels').clear();
          tx.objectStore('historiqueQuiz').clear();
          for (const p of seed.progressions) tx.objectStore('progressions').put(p);
          if (seed.stats) tx.objectStore('stats').put(seed.stats);
          for (const t of seed.termesPersonnels) tx.objectStore('termesPersonnels').put(t);
          for (const h of seed.historiqueQuiz) tx.objectStore('historiqueQuiz').add(h);
        } catch(e) { db.close(); reject(e); }
      };
      req.onerror = (e) => reject(new Error('open: ' + e.target?.error));
    });
  }, seedData);
}

async function readDatabase(page) {
  return page.evaluate(async () => {
    const dbVersion = await new Promise((res, rej) => {
      const p = indexedDB.open('PlumyDB');
      p.onsuccess = (e) => { const v = e.target.result.version; e.target.result.close(); res(v); };
      p.onerror = rej;
    });
    return new Promise((resolve, reject) => {
      const req = indexedDB.open('PlumyDB', dbVersion);
      req.onsuccess = (e) => {
        const db = e.target.result;
        const tx = db.transaction(['progressions', 'stats', 'termesPersonnels', 'historiqueQuiz'], 'readonly');
        const results = {};
        const reads = ['progressions', 'stats', 'termesPersonnels', 'historiqueQuiz'].map(store =>
          new Promise(res => { const r = tx.objectStore(store).getAll(); r.onsuccess = () => { results[store] = r.result; res(); }; })
        );
        Promise.all(reads).then(() => { db.close(); resolve(results); });
        tx.onerror = reject;
      };
      req.onerror = reject;
    });
  });
}

async function readLocalStorageCours(page) {
  return page.evaluate(() => {
    const r = {};
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k?.startsWith('plumy-cours-')) r[k] = JSON.parse(localStorage.getItem(k));
    }
    return r;
  });
}

const BASE_STATS = {
  id: 'global', points: 200, badges: ['premier-pas'], serieJours: 5,
  derniereVisite: 1720000000, quizJoues: 10, onboardingVu: true,
  historiqueActivite: [
    { date: '2024-01-01', termesVus: 3, quizReussis: 2 },
    { date: '2024-01-02', termesVus: 5, quizReussis: 4 },
  ],
};

const SEED_INITIAL = {
  progressions: [
    { termeId: 'plie', statut: 'maitrise', favori: false, vuLe: 5, reussitesQuiz: 4, echecsQuiz: 1, prochainRevision: 1720000000 },
    { termeId: 'battement', statut: 'vu', favori: true, vuLe: 2, reussitesQuiz: 1, echecsQuiz: 0, prochainRevision: 1720000001 },
  ],
  stats: BASE_STATS,
  termesPersonnels: [
    { id: 'tp-1', estPersonnel: true, nom: 'Mon terme', definition: 'Ma def', disciplines: ['classique'], categories: ['concepts'], description: '', erreursCourantes: [], difficulteInterne: 1 },
  ],
  historiqueQuiz: [
    { date: '2024-01-01', type: 'qcm', uniteNumero: 1, correct: 3, total: 5 },
    { date: '2024-01-02', type: 'association', uniteNumero: 2, correct: 4, total: 4 },
  ],
};

const BACKUP_JSON = {
  version: '2',
  exporteLe: new Date().toISOString(),
  progression: [
    { termeId: 'plie', statut: 'maitrise', favori: false, vuLe: 3, reussitesQuiz: 6, echecsQuiz: 2, prochainRevision: 1720000099 },
    { termeId: 'battement', statut: 'vu', favori: true, vuLe: 1, reussitesQuiz: 0, echecsQuiz: 0, prochainRevision: 1720000001 },
    { termeId: 'arabesque', statut: 'vu', favori: false, vuLe: 1, reussitesQuiz: 1, echecsQuiz: 0, prochainRevision: 1720000002 },
  ],
  stats: {
    points: 350, badges: ['premier-pas', 'second-badge'], serieJours: 7,
    derniereVisite: 1720000099, quizJoues: 12,
    historiqueActivite: [
      { date: '2024-01-01', termesVus: 2, quizReussis: 5 },
      { date: '2024-01-03', termesVus: 6, quizReussis: 3 },
    ],
  },
  termesPersonnels: [
    { id: 'tp-1', estPersonnel: true, nom: 'Mon terme (edite)', definition: 'Def mise a jour', disciplines: ['classique'], categories: ['concepts'], description: '', erreursCourantes: [], difficulteInterne: 1 },
  ],
  historiqueQuiz: [
    { date: '2024-01-01', type: 'qcm', uniteNumero: 1, correct: 3, total: 5 },
    { date: '2024-01-03', type: 'flashcards', uniteNumero: 3, correct: 7, total: 10 },
  ],
  coursProgression: {
    'intro-classique': { derniereSection: 2, sectionsVues: [0, 1, 2], derniereLecture: '2024-01-02T10:00:00.000Z' },
  },
};

async function freshPage(browser) {
  const ctx = await browser.newContext({ acceptDownloads: true });
  const page = await ctx.newPage();
  await page.goto(BASE);
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(1000);
  return { ctx, page };
}

async function dismissOverlays(page) {
  await page.keyboard.press('Escape').catch(() => {});
  await page.waitForTimeout(200);
  const overlay = page.locator('div.fixed.inset-0').first();
  if (await overlay.isVisible().catch(() => false)) {
    await overlay.click({ position: { x: 10, y: 10 }, force: true }).catch(() => {});
    await page.waitForTimeout(200);
  }
}

async function openSaveDialog(page) {
  await dismissOverlays(page);
  await page.getByRole('button', { name: /sauvegarder/i }).click();
  await page.waitForSelector('[role="dialog"]', { timeout: 5000 });
}

async function triggerExport(page) {
  await openSaveDialog(page);
  const dlPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: /exporter/i }).click();
  const dl = await dlPromise;
  await page.waitForTimeout(500);
  return dl;
}

async function triggerImportAndWait(page, filePath, mode) {
  await openSaveDialog(page);
  const [fc] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: /importer/i }).click(),
  ]);
  await fc.setFiles(filePath);
  await page.waitForSelector('text=Export', { timeout: 4000 });
  const btn = mode === 'remplacer' ? /remplacer/i : /fusionner/i;
  await page.getByRole('button', { name: btn }).first().click();
  // Wait for success state
  await page.waitForSelector('text=Succes', { timeout: 6000 }).catch(async () => {
    await page.waitForTimeout(2000);
  });
  await page.waitForTimeout(2500);
}

const browser = await chromium.launch({ executablePath: '/opt/pw-browsers/chromium', headless: true });

// == PASS 1 — Export completeness ==
console.log('\n== PASS 1 — Export completeness ==\n');

{
  const { ctx, page } = await freshPage(browser);
  await seedDatabase(page, SEED_INITIAL);
  await page.evaluate(() => {
    localStorage.setItem('plumy-cours-intro-classique', JSON.stringify({
      derniereSection: 3, sectionsVues: [0, 1, 2, 3], derniereLecture: '2024-06-15T10:00:00.000Z',
    }));
  });
  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(800);

  const dl1 = await triggerExport(page);
  const p1 = path.join(SCRATCHPAD, 'exported.json');
  await dl1.saveAs(p1);
  const exp = JSON.parse(fs.readFileSync(p1, 'utf8'));

  console.log('  keys:', Object.keys(exp).join(', '));
  console.log('  historiqueQuiz.length:', exp.historiqueQuiz?.length);
  console.log('  coursProgression:', exp.coursProgression ? Object.keys(exp.coursProgression).join(', ') : 'absent');

  assert('version === "2"', exp.version === '2', `got ${exp.version}`);
  assert('exporteLe present', !!exp.exporteLe);
  assert('progression array with plie', Array.isArray(exp.progression) && exp.progression.some(p => p.termeId === 'plie'));
  assert('stats present', exp.stats?.points !== undefined);
  assert('termesPersonnels present', Array.isArray(exp.termesPersonnels) && exp.termesPersonnels.length > 0);
  assert('[NEW] historiqueQuiz in export', Array.isArray(exp.historiqueQuiz), 'was absent before fix');
  assert('[NEW] historiqueQuiz has 2 entries', exp.historiqueQuiz?.length === 2, `got ${exp.historiqueQuiz?.length}`);
  assert('[NEW] historiqueQuiz: id stripped', exp.historiqueQuiz?.every(e => !('id' in e)));
  assert('[NEW] coursProgression in export', !!exp.coursProgression, 'was absent before fix');
  assert('[NEW] coursProgression.intro-classique', !!exp.coursProgression?.['intro-classique']);
  assert('[NEW] coursProgression.sectionsVues is array', Array.isArray(exp.coursProgression?.['intro-classique']?.sectionsVues));

  // Probes: empty DB + no cours
  await seedDatabase(page, { progressions: [], stats: { ...BASE_STATS, onboardingVu: true }, termesPersonnels: [], historiqueQuiz: [] });
  await page.evaluate(() => {
    for (let i = localStorage.length - 1; i >= 0; i--) {
      const k = localStorage.key(i);
      if (k?.startsWith('plumy-cours-')) localStorage.removeItem(k);
    }
  });
  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(600);
  const dl2 = await triggerExport(page);
  const p2 = path.join(SCRATCHPAD, 'exported_empty.json');
  await dl2.saveAs(p2);
  const exp2 = JSON.parse(fs.readFileSync(p2, 'utf8'));
  probe('empty DB: historiqueQuiz = []', Array.isArray(exp2.historiqueQuiz) && exp2.historiqueQuiz.length === 0, JSON.stringify(exp2.historiqueQuiz));
  probe('no cours: coursProgression absent', exp2.coursProgression === undefined, JSON.stringify(exp2.coursProgression));

  await ctx.close();
}

// == PASS 2 — Import remplacer ==
console.log('\n== PASS 2 — Import remplacer ==\n');

{
  const { ctx, page } = await freshPage(browser);
  await seedDatabase(page, SEED_INITIAL);
  // Add a local-only cours key that should be cleared by remplacer
  await page.evaluate(() => {
    localStorage.setItem('plumy-cours-local-only', JSON.stringify({ derniereSection: 1, sectionsVues: [0, 1], derniereLecture: '2024-01-01T00:00:00.000Z' }));
  });
  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(600);

  const bPath = path.join(SCRATCHPAD, 'backup_v2.json');
  fs.writeFileSync(bPath, JSON.stringify(BACKUP_JSON, null, 2));
  await triggerImportAndWait(page, bPath, 'remplacer');

  // Read DB BEFORE reload to check that import stored serieJours=7 correctly
  const dbImmediate = await readDatabase(page);
  const lsImmediate = await readLocalStorageCours(page);
  console.log('  [before reload] serieJours in DB:', dbImmediate.stats[0]?.serieJours, '(expect 7 — stored by import)');
  console.log('  [before reload] localStorage cours keys:', Object.keys(lsImmediate).join(', ') || '(none)');

  // Reload to get normalized app state
  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(600);
  const db = await readDatabase(page);
  const ls = await readLocalStorageCours(page);
  console.log('  [after reload] progressions:', db.progressions.length, '| historiqueQuiz:', db.historiqueQuiz.length, '| points:', db.stats[0]?.points);
  console.log('  [after reload] localStorage cours keys:', Object.keys(ls).join(', ') || '(none)');

  assert('remplacer: 3 progressions from backup', db.progressions.length === 3, `got ${db.progressions.length}`);
  assert('remplacer: plie.reussitesQuiz = 6', db.progressions.find(p => p.termeId === 'plie')?.reussitesQuiz === 6);
  assert('remplacer: arabesque present', db.progressions.some(p => p.termeId === 'arabesque'));
  assert('remplacer: stats.points = 350', db.stats[0]?.points === 350);
  // Check serieJours BEFORE reload (the import stores it correctly; app then resets it based on current date)
  assert('[FIX] remplacer: serieJours=7 stored immediately after import', dbImmediate.stats[0]?.serieJours === 7, `got ${dbImmediate.stats[0]?.serieJours}`);
  assert('remplacer: badges includes second-badge', db.stats[0]?.badges?.includes('second-badge'));
  assert('remplacer: termesPerso overwritten', db.termesPersonnels[0]?.nom === 'Mon terme (edite)', `got "${db.termesPersonnels[0]?.nom}"`);
  assert('[NEW] remplacer: historiqueQuiz cleared+restored (2)', db.historiqueQuiz.length === 2, `got ${db.historiqueQuiz.length}`);
  assert('[NEW] remplacer: 2024-01-01 qcm present', db.historiqueQuiz.some(e => e.date === '2024-01-01' && e.type === 'qcm'));
  assert('[NEW] remplacer: 2024-01-03 flashcards present', db.historiqueQuiz.some(e => e.date === '2024-01-03'));
  assert('[NEW] remplacer: intro-classique restored', !!ls['plumy-cours-intro-classique']);
  // After fix: local-only key should be cleared
  assert('[FIX] remplacer: local-only cours key cleared', !ls['plumy-cours-local-only'], 'key survived — not cleared by remplacer');

  await ctx.close();
}

// == PASS 3 — Import fusionner ==
console.log('\n== PASS 3 — Import fusionner ==\n');

{
  const { ctx, page } = await freshPage(browser);
  await seedDatabase(page, SEED_INITIAL);
  await page.evaluate(() => {
    localStorage.setItem('plumy-cours-intro-classique', JSON.stringify({
      derniereSection: 1, sectionsVues: [0, 1], derniereLecture: '2024-01-01T08:00:00.000Z',
    }));
  });
  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(600);

  const bPath = path.join(SCRATCHPAD, 'backup_v2.json');
  fs.writeFileSync(bPath, JSON.stringify(BACKUP_JSON, null, 2));
  await triggerImportAndWait(page, bPath, 'fusionner');

  await page.reload();
  await page.waitForLoadState('networkidle');
  await page.waitForTimeout(600);

  const db = await readDatabase(page);
  const ls = await readLocalStorageCours(page);

  const plie = db.progressions.find(p => p.termeId === 'plie');
  const battement = db.progressions.find(p => p.termeId === 'battement');
  const arabesque = db.progressions.find(p => p.termeId === 'arabesque');
  const stats = db.stats[0];
  const cours = ls['plumy-cours-intro-classique'];

  console.log('  plie.reussitesQuiz:', plie?.reussitesQuiz, '(file=6 local=4 expect=6)');
  console.log('  battement.reussitesQuiz:', battement?.reussitesQuiz, '(file=0 local=1 expect=1 local wins)');
  console.log('  stats.serieJours:', stats?.serieJours, '(file=7 local=5 expect=7)');
  console.log('  historiqueQuiz.length:', db.historiqueQuiz.length, '(local=2 +1new expect=3)');
  console.log('  cours.derniereSection:', cours?.derniereSection, '(local=1 file=2 expect=2)');
  console.log('  cours.sectionsVues:', JSON.stringify(cours?.sectionsVues));
  console.log('  cours.derniereLecture:', cours?.derniereLecture);

  // Progression merge (Leitner criterion)
  assert('[NEW] fusionner: plie wins on reussitesQuiz (6>4)', plie?.reussitesQuiz === 6);
  assert('[FIX] fusionner: battement local wins (1>0, not vuLe)', battement?.reussitesQuiz === 1);
  assert('fusionner: battement.favori preserved', battement?.favori === true);
  assert('fusionner: arabesque added (new)', !!arabesque);

  // Stats merge
  assert('[NEW] fusionner: serieJours = max(7,5)=7', stats?.serieJours === 7, `got ${stats?.serieJours}`);
  assert('fusionner: points = max(350,200)=350', stats?.points === 350);
  assert('fusionner: quizJoues = max(12,10)=12', stats?.quizJoues === 12);
  assert('fusionner: badges union (second-badge)', stats?.badges?.includes('second-badge'));
  const a0101 = stats?.historiqueActivite?.find(a => a.date === '2024-01-01');
  assert('[NEW] fusionner: historiqueActivite 2024-01-01 quizReussis=max(2,5)=5', a0101?.quizReussis === 5, `got ${a0101?.quizReussis}`);
  assert('[NEW] fusionner: historiqueActivite 2024-01-03 added', !!stats?.historiqueActivite?.find(a => a.date === '2024-01-03'));

  // termesPersonnels
  assert('[FIX] fusionner: termesPerso overwritten (cross-device edits)', db.termesPersonnels[0]?.nom === 'Mon terme (edite)', `got "${db.termesPersonnels[0]?.nom}"`);

  // historiqueQuiz dedup
  assert('[NEW] fusionner: historiqueQuiz=3 (1 dup skipped, 1 new added)', db.historiqueQuiz.length === 3, `got ${db.historiqueQuiz.length}`);
  assert('[NEW] fusionner: dup 2024-01-01|qcm|1 not doubled', db.historiqueQuiz.filter(e => e.date === '2024-01-01' && e.type === 'qcm').length === 1);
  assert('[NEW] fusionner: 2024-01-03 flashcards added', db.historiqueQuiz.some(e => e.date === '2024-01-03' && e.type === 'flashcards'));

  // coursProgression merge
  assert('[NEW] fusionner: derniereSection=max(2,1)=2', cours?.derniereSection === 2, `got ${cours?.derniereSection}`);
  assert('[NEW] fusionner: sectionsVues union [0,1,2]', [0,1,2].every(s => cours?.sectionsVues?.includes(s)), `got ${JSON.stringify(cours?.sectionsVues)}`);
  assert('[NEW] fusionner: derniereLecture=max(2024-01-02)', cours?.derniereLecture === '2024-01-02T10:00:00.000Z', `got ${cours?.derniereLecture}`);

  // Probes
  const futurePath = path.join(SCRATCHPAD, 'future_v999.json');
  fs.writeFileSync(futurePath, JSON.stringify({ ...BACKUP_JSON, version: '999' }));
  await page.reload(); await page.waitForLoadState('networkidle'); await page.waitForTimeout(300);
  await openSaveDialog(page);
  const [fc2] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: /importer/i }).click(),
  ]);
  await fc2.setFiles(futurePath);
  await page.waitForTimeout(700);
  const errEl = await page.locator('p').filter({ hasText: /non support/i }).first().textContent().catch(() => null);
  probe('[NEW] version v999: error shown in dialog', !!errEl, errEl === null ? 'no "non support" text found' : '');
  probe('[NEW] version v999: preview NOT reached', !(await page.locator('text=Export').isVisible().catch(() => false)), 'preview was visible');

  const v1Path = path.join(SCRATCHPAD, 'backup_v1.json');
  fs.writeFileSync(v1Path, JSON.stringify({ version: '1', exporteLe: new Date().toISOString(), progression: [], stats: {}, termesPersonnels: [] }));
  await page.keyboard.press('Escape').catch(() => {});
  await page.waitForTimeout(200);
  await page.reload(); await page.waitForLoadState('networkidle'); await page.waitForTimeout(300);
  await openSaveDialog(page);
  const [fc3] = await Promise.all([
    page.waitForEvent('filechooser'),
    page.getByRole('button', { name: /importer/i }).click(),
  ]);
  await fc3.setFiles(v1Path);
  await page.waitForTimeout(700);
  probe('version v1 (older) accepted, reaches preview', await page.locator('text=Export').isVisible().catch(() => false), 'did not reach preview');

  await ctx.close();
}

await browser.close();

console.log('\n== SUMMARY ==');
console.log(`${passed} passed, ${failed} failed`);
if (findings.length) {
  console.log('\nFindings:');
  for (const f of findings) console.log('  ' + f);
}
console.log('Verdict:', failed === 0 ? 'PASS' : 'FAIL');
process.exit(failed === 0 ? 0 : 1);
