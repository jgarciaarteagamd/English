(() => {
'use strict';

/* =========================================================
   Contenido
   ========================================================= */
const LEVELS = ['B1','B2','C1','C2'];
const LEVEL_INFO = {
  B1:{name:'Umbral', can:'Te desenvuelves en situaciones cotidianas, cuentas experiencias y planes, y das opiniones sencillas.'},
  B2:{name:'Avanzado', can:'Conversas con fluidez con nativos, defiendes tu punto de vista y entiendes textos complejos sobre temas conocidos.'},
  C1:{name:'Dominio operativo', can:'Te expresas con espontaneidad y precisión en contextos académicos y profesionales, con textos bien estructurados.'},
  C2:{name:'Maestría', can:'Entiendes prácticamente todo y matizas significados con la precisión y naturalidad de un nativo culto.'}
};
const byLevel = (a,b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level);
const GRAMMAR = (window.GRAMMAR || []).slice().sort(byLevel);
const DECKS = (window.VOCAB || []).slice().sort(byLevel);
const GUIDE = window.GUIDE || [];
const PASS_TEST = 75;
const IVL = [1,3,7,14,30,60,120];
const WRITING_PROMPTS = {
  B1:['Describe your last holiday: where you went, what you did and what you enjoyed most.','Write an email to a friend telling them about a change in your life (a new job, a move, a new hobby).','Describe a person who has influenced you and explain why.'],
  B2:['Has technology made us more or less sociable? Give your opinion with examples.','Write a story that begins: "I had never felt so nervous before…"','Write a review of a restaurant, film or app you have used recently.'],
  C1:['Discuss whether remote work benefits employees more than employers.','Write a formal letter of complaint about a service you received.','Some people say university should be free for everyone. Discuss both views and give your opinion.'],
  C2:['Write a review of a book or film that changed the way you think.','"Progress is impossible without change." Discuss, considering different perspectives.','Write an article for a magazine about a tradition from your country that is disappearing.']
};

/* =========================================================
   Utilidades
   ========================================================= */
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const pad = n => String(n).padStart(2, '0');
const dkey = d => d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
const today = () => dkey(new Date());
const parseKey = k => { const [y,m,d] = k.split('-').map(Number); return new Date(y, m - 1, d); };
const addDays = (k, n) => { const d = parseKey(k); d.setDate(d.getDate() + n); return dkey(d); };
const diffDays = (a, b) => Math.round((parseKey(b) - parseKey(a)) / 864e5);
const shuffle = arr => { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const hash = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return (h >>> 0).toString(36); };
const clone = o => JSON.parse(JSON.stringify(o));
const fmtDay = k => new Intl.DateTimeFormat('es', {weekday:'long', day:'numeric', month:'long'}).format(parseKey(k));
const fmtShort = k => new Intl.DateTimeFormat('es', {day:'numeric', month:'short'}).format(parseKey(k));
const plural = (n, one, many) => n + ' ' + (n === 1 ? one : many);
const inDays = k => { const n = diffDays(today(), k); return n <= 0 ? 'hoy' : n === 1 ? 'mañana' : 'en ' + n + ' días'; };

const ICONS = {
  home:'<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>',
  book:'<path d="M4 19.5V5a2 2 0 0 1 2-2h14v15H6a2 2 0 0 0-2 2z"/><path d="M4 19.5A2 2 0 0 0 6 21.5h14"/><path d="M9 7h7"/>',
  repeat:'<path d="M17 2l4 4-4 4"/><path d="M3 11V9a3 3 0 0 1 3-3h15"/><path d="M7 22l-4-4 4-4"/><path d="M21 13v2a3 3 0 0 1-3 3H3"/>',
  alert:'<path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0z"/>',
  cards:'<rect x="3" y="7" width="13" height="14" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v12"/>',
  spark:'<path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z"/><path d="M19 15l.7 1.8 1.8.7-1.8.7L19 20l-.7-1.8-1.8-.7 1.8-.7z"/>',
  map:'<path d="M9 4 3 6v14l6-2 6 2 6-2V4l-6 2z"/><path d="M9 4v14"/><path d="M15 6v14"/>',
  gear:'<path d="M4 6h9"/><path d="M19 6h1"/><circle cx="16" cy="6" r="2.5"/><path d="M4 12h2"/><path d="M12 12h8"/><circle cx="9" cy="12" r="2.5"/><path d="M4 18h11"/><circle cx="18" cy="18" r="2.5"/>',
  more:'<circle cx="5" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none"/><circle cx="19" cy="12" r="1.6" fill="currentColor" stroke="none"/>',
  speaker:'<path d="M11 5 6 9H3v6h3l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7"/><path d="M18.5 5.5a9 9 0 0 1 0 13"/>',
  check:'<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  star:'<path d="M12 2.8l2.8 5.9 6.4.8-4.7 4.4 1.2 6.4L12 17.2l-5.7 3.1 1.2-6.4L2.8 9.5l6.4-.8z" fill="currentColor" stroke="none"/>',
  flame:'<path d="M12 22c4 0 7-2.8 7-7 0-4.5-4-7.5-5-11-2.5 2-3.5 4.5-3.5 6.5-1-.8-1.8-2-2-3.5C6 9 5 11.5 5 15c0 4.2 3 7 7 7z"/>',
  right:'<path d="M5 12h14M13 6l6 6-6 6"/>',
  left:'<path d="M19 12H5M11 6l-6 6 6 6"/>',
  play:'<path d="M7 4.5v15l12-7.5z"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  trash:'<path d="M4 7h16"/><path d="M9 7V4h6v3"/><path d="M6 7l1 13h10l1-13"/>',
  target:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  pen:'<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>',
  chat:'<path d="M4 5h16v11H9l-5 4z"/>',
  shuffle:'<path d="M3 6h3c3 0 5 12 9 12h6"/><path d="M18 15l3 3-3 3"/><path d="M3 18h3c1.5 0 2.7-1.7 3.7-4"/><path d="M14 8.3C14.9 6.8 16 6 18 6h3"/><path d="M18 3l3 3-3 3"/>',
  copy:'<rect x="8" y="8" width="13" height="13" rx="2"/><path d="M16 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/>'
};
const ic = (n, cls = 'ico') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ''}</svg>`;

/* =========================================================
   Estado y persistencia (navegador + tu cuenta)
   ========================================================= */
const LS_KEY = 'rutaC2.v1';
const SECTIONS = ['progress','mistakes','vocab','custom'];
function blank() {
  return {
    progress:{updatedAt:0, xp:0, activity:{}, lessons:{}, tests:{}, settings:{goal:50, newPerDay:10, voice:'en-GB', rate:0.95, start:'B1', dir:'en'}},
    mistakes:{updatedAt:0, items:{}},
    vocab:{updatedAt:0, cards:{}, mine:[]},
    custom:{updatedAt:0, lessons:[], writing:[]}
  };
}
function hydrateSection(name, raw) {
  const b = blank()[name];
  if (!raw || typeof raw !== 'object') return b;
  const out = Object.assign(b, raw);
  if (name === 'progress') out.settings = Object.assign(blank().progress.settings, raw.settings || {});
  return out;
}
function hydrate(raw) {
  const s = blank();
  if (raw && typeof raw === 'object') for (const k of SECTIONS) s[k] = hydrateSection(k, raw[k]);
  return s;
}
let S = (() => { try { const r = localStorage.getItem(LS_KEY); if (r) return hydrate(JSON.parse(r)); } catch (e) {} return blank(); })();
const dirty = new Set();
let DB = null, UID = null, sync = 'local', writing = false, syncTimer = null;

function saveLocal() { try { localStorage.setItem(LS_KEY, JSON.stringify(S)); } catch (e) {} }
function touch(...secs) { for (const s of secs) { S[s].updatedAt = Date.now(); dirty.add(s); } prune(); saveLocal(); scheduleSync(); }
function prune() {
  const items = Object.values(S.mistakes.items);
  if (items.length > 400) {
    items.sort((a, b) => (a.resolved === b.resolved ? (a.last || 0) - (b.last || 0) : a.resolved ? -1 : 1));
    for (const m of items.slice(0, items.length - 400)) delete S.mistakes.items[m.k];
  }
  if (S.custom.lessons.length > 20) S.custom.lessons = S.custom.lessons.slice(-20);
  if (S.custom.writing.length > 15) S.custom.writing = S.custom.writing.slice(-15);
  const actKeys = Object.keys(S.progress.activity).sort();
  if (actKeys.length > 400) for (const k of actKeys.slice(0, actKeys.length - 400)) delete S.progress.activity[k];
}
function scheduleSync() { if (!DB) return; clearTimeout(syncTimer); syncTimer = setTimeout(flushSync, 1500); }
async function flushSync() {
  if (!DB) return;
  if (writing) { scheduleSync(); return; }
  writing = true;
  try {
    for (const s of [...dirty]) {
      dirty.delete(s);
      try { await DB.doc('data/users/' + UID + '/' + s).set(clone(S[s])); sync = 'cloud'; }
      catch (e) {
        const code = e && e.code;
        if (code === 'unavailable' || code === 'resource_exhausted') dirty.add(s);
        else { sync = 'error'; }
      }
    }
  } finally { writing = false; renderSync(); if (dirty.size && sync !== 'error') setTimeout(scheduleSync, 3000 + Math.random() * 2000); }
}
async function initCloud() {
  if (!window.claude || typeof window.claude.use !== 'function') return;
  try {
    const [db, user] = await Promise.all([window.claude.use('db'), window.claude.use('user')]);
    if (!db || !user) return;
    const id = await user.id();
    if (!id) return;
    DB = db; UID = id; sync = 'syncing'; renderSync();
    const snaps = await Promise.all(SECTIONS.map(s => db.doc('data/users/' + id + '/' + s).get().catch(() => null)));
    let changed = false;
    snaps.forEach((snap, i) => {
      const s = SECTIONS[i];
      if (snap && snap.exists) {
        const remote = snap.data() || {};
        if ((remote.updatedAt || 0) > (S[s].updatedAt || 0)) { S[s] = hydrateSection(s, clone(remote)); changed = true; }
        else if ((S[s].updatedAt || 0) > (remote.updatedAt || 0)) dirty.add(s);
      } else if (S[s].updatedAt) dirty.add(s);
    });
    sync = 'cloud';
    if (changed) { saveLocal(); render(); }
    renderSync();
    if (dirty.size) scheduleSync();
  } catch (e) { DB = null; sync = 'local'; renderSync(); }
}
document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'hidden' && dirty.size) flushSync(); });

/* ---------- Actividad, XP, racha ---------- */
function act(k = today()) {
  const A = S.progress.activity;
  if (!A[k]) A[k] = {xp:0, ex:0, ok:0, newL:0, rev:0, cards:0, newW:0, fixes:0};
  return A[k];
}
const actRO = (k = today()) => S.progress.activity[k] || {xp:0, ex:0, ok:0, newL:0, rev:0, cards:0, newW:0, fixes:0};
function addXP(n) { act().xp += n; S.progress.xp += n; }
function streak() {
  const A = S.progress.activity; let k = today(), n = 0;
  if (!(A[k] && A[k].xp > 0)) k = addDays(k, -1);
  while (A[k] && A[k].xp > 0) { n++; k = addDays(k, -1); }
  return n;
}
function accuracy() { let ex = 0, ok = 0; for (const a of Object.values(S.progress.activity)) { ex += a.ex || 0; ok += a.ok || 0; } return ex ? Math.round(ok / ex * 100) : null; }

/* ---------- Lecciones ---------- */
const allLessons = () => GRAMMAR.concat(S.custom.lessons);
const lessonById = id => allLessons().find(l => l.id === id);
const lp = id => S.progress.lessons[id];
function ensureLp(id) { return S.progress.lessons[id] || (S.progress.lessons[id] = {status:'new', best:0, last:0, attempts:0, theory:false, step:0, due:null, hist:[]}); }
const levelLessons = L => GRAMMAR.filter(l => l.level === L);
const lessonNo = l => levelLessons(l.level).indexOf(l) + 1;
const starsFor = s => s >= 95 ? 3 : s >= 80 ? 2 : s >= 60 ? 1 : 0;
function dueLessons() { const t = today(); return allLessons().filter(l => { const p = lp(l.id); return p && p.status === 'done' && p.due && p.due <= t; }); }
function levelStatus(L) {
  const ls = levelLessons(L);
  const done = ls.filter(l => lp(l.id) && lp(l.id).status === 'done');
  const avg = done.length ? Math.round(done.reduce((a, l) => a + lp(l.id).best, 0) / done.length) : 0;
  const t = S.progress.tests[L] || null;
  return {total:ls.length, done:done.length, avg, pct:ls.length ? done.length / ls.length : 0, test:t, passed:!!(t && t.passed)};
}
function workingLevel() {
  const start = Math.max(0, LEVELS.indexOf(S.progress.settings.start));
  for (let i = start; i < LEVELS.length; i++) {
    const st = levelStatus(LEVELS[i]);
    if (!(st.passed || (st.pct >= 1 && st.avg >= 80))) return LEVELS[i];
  }
  return 'C2';
}
function certifiedLevel() { let c = null; for (const L of LEVELS) if (levelStatus(L).passed) c = L; return c; }
function nextLesson() {
  const W = workingLevel();
  const order = LEVELS.slice(LEVELS.indexOf(W));
  for (const L of order) { const l = levelLessons(L).find(x => !(lp(x.id) && lp(x.id).status === 'done')); if (l) return l; }
  return null;
}
function scheduleLesson(id, score, isReview) {
  const p = ensureLp(id);
  if (p.status !== 'done') { p.status = 'done'; p.first = today(); p.step = score >= 80 ? 1 : 0; act().newL++; }
  else if (isReview || (p.due && p.due <= today())) {
    if (score >= 80) p.step = Math.min(p.step + 1, IVL.length - 1);
    else if (score < 60) p.step = Math.max(0, p.step - 1);
    act().rev++;
  }
  p.due = addDays(today(), IVL[p.step]);
  p.best = Math.max(p.best || 0, score); p.last = score; p.attempts = (p.attempts || 0) + 1;
  p.hist = (p.hist || []).concat({d:today(), s:score}).slice(-12);
}

/* ---------- Errores ---------- */
const pendingMistakes = () => Object.values(S.mistakes.items).filter(m => !m.resolved);
function recordAnswer(item, correct, user) {
  const M = S.mistakes.items, k = item.key;
  item.prev = M[k] ? clone(M[k]) : null;
  if (!correct) {
    const m = M[k] || {k, first:Date.now(), count:0};
    Object.assign(m, {ex:item.ex, lesson:item.lessonId || null, src:item.src || 'lesson', your:user, streak:0, last:Date.now(), resolved:false});
    m.count++; M[k] = m;
  } else if (M[k] && !M[k].resolved) {
    const m = M[k]; m.streak = (m.streak || 0) + 1; m.last = Date.now();
    if (m.streak >= 2) { m.resolved = true; m.resolvedAt = Date.now(); }
    act().fixes++;
  }
}
function undoRecord(item) { const M = S.mistakes.items; if (item.prev) M[item.key] = item.prev; else delete M[item.key]; }

/* ---------- Vocabulario (repetición espaciada tipo SM-2) ---------- */
const cardKey = (deckId, w) => deckId + '|' + w;
function myDeck() { return {id:'mine', level:'—', title:'Mis palabras', es:'Palabras que has añadido tú', words:S.vocab.mine.map(w => [w.w, w.p || '', w.d || '', w.es || '', w.ex || ''])}; }
const allDecks = () => DECKS.concat(S.vocab.mine.length ? [myDeck()] : []);
const deckById = id => id === 'mine' ? myDeck() : DECKS.find(d => d.id === id);
const card = k => S.vocab.cards[k];
function wordState(c) { if (!c) return 'new'; if (c.ivl >= 21) return 'mastered'; if (c.ivl >= 7) return 'learned'; return 'learning'; }
function gradeCard(k, g) {
  const c = S.vocab.cards[k] || {ivl:0, ease:2.5, reps:0, lapses:0, seen:today()};
  if (g === 1) { c.reps = 0; c.lapses++; c.ivl = 0; c.ease = Math.max(1.3, c.ease - 0.2); c.due = today(); }
  else {
    if (c.reps === 0) c.ivl = g === 4 ? 3 : 1;
    else if (c.reps === 1) c.ivl = g === 2 ? 2 : g === 3 ? 4 : 7;
    else c.ivl = Math.max(c.ivl + 1, Math.round(c.ivl * (g === 2 ? 1.2 : g === 3 ? c.ease : c.ease * 1.3)));
    if (g === 2) c.ease = Math.max(1.3, c.ease - 0.15);
    if (g === 4) c.ease = Math.min(3.2, c.ease + 0.15);
    c.reps++; c.due = addDays(today(), c.ivl);
  }
  S.vocab.cards[k] = c;
  return c;
}
function previewIvl(k, g) { const c = S.vocab.cards[k] ? clone(S.vocab.cards[k]) : {ivl:0, ease:2.5, reps:0, lapses:0}; if (g === 1) return 'hoy'; let ivl; if (c.reps === 0) ivl = g === 4 ? 3 : 1; else if (c.reps === 1) ivl = g === 2 ? 2 : g === 3 ? 4 : 7; else ivl = Math.max(c.ivl + 1, Math.round(c.ivl * (g === 2 ? 1.2 : g === 3 ? c.ease : c.ease * 1.3))); return ivl < 31 ? ivl + ' d' : Math.round(ivl / 30) + ' m'; }
function vocabStats() {
  let total = 0, learned = 0, mastered = 0, due = 0; const t = today();
  for (const d of allDecks()) for (const w of d.words) { total++; const c = card(cardKey(d.id, w[0])); const st = wordState(c); if (st === 'learned' || st === 'mastered') learned++; if (st === 'mastered') mastered++; if (c && c.due && c.due <= t) due++; }
  return {total, learned, mastered, due, newLeft:Math.max(0, S.progress.settings.newPerDay - actRO().newW)};
}

/* =========================================================
   Comparación de respuestas
   ========================================================= */
const CONTR = [[/\b(did|do|does|is|are|was|were|have|has|had|could|should|would|must|need)nt\b/g,"$1n't"],[/\bwont\b/g,"won't"],[/\bcant\b/g,"can't"],[/\bim\b/g,"i'm"],[/\bive\b/g,"i've"],[/\bwon't\b/g,'will not'],[/\bcan't\b/g,'cannot'],[/\bshan't\b/g,'shall not'],[/\bain't\b/g,'is not'],[/n't\b/g,' not'],[/'re\b/g,' are'],[/'ve\b/g,' have'],[/'ll\b/g,' will'],[/\bi'm\b/g,'i am'],[/\bcan not\b/g,'cannot'],[/\blet's\b/g,'let us']];
function base(s) {
  s = String(s || '').toLowerCase().replace(/[’‘`´]/g, "'").replace(/[“”«»]/g, '"').replace(/[—–]/g, '-');
  s = s.replace(/["()¿¡]/g, ' ');
  for (const [r, v] of CONTR) s = s.replace(r, v);
  s = s.replace(/[.,!?;:/]/g, ' ').replace(/\s+/g, ' ').trim();
  s = s.replace(/\b([a-z]{2,})iz(e|ed|es|ing|ation|ations)\b/g, '$1is$2').replace(/\b([a-z]{2,})yz(e|ed|es|ing)\b/g, '$1ys$2');
  s = s.replace(/\b(colo|favo|behavio|neighbo|hono|humo|labo|flavo)r(s|ed|ing|ite|ites)?\b/g, (m, a, b) => a + 'ur' + (b || ''));
  s = s.replace(/\b(travel|cancel|model|label|signal|fuel|level|counsel)l(ed|ing|er|ers)\b/g, '$1$2');
  return s;
}
function variants(s) {
  let out = [base(s)];
  const amb = [[/\b([a-z]+)'d\b/g, ['$1 would', '$1 had']], [/\b(it|he|she|that|what|there|here|who|where|how|everything|nobody|everyone)'s\b/g, ['$1 is', '$1 has']]];
  for (const [re, reps] of amb) {
    const next = [];
    for (const v of out) { if (v.search(re) >= 0) reps.forEach(r => next.push(v.replace(re, r))); else next.push(v); re.lastIndex = 0; }
    out = next;
  }
  return out;
}
const NONE_WORDS = ['-', '0', 'x', 'none', 'nothing', 'no article', 'nada', 'ninguno', 'sin articulo', 'sin artículo', 'ø'];
function matches(user, answers) {
  const u = base(user);
  if (answers.includes('-') && NONE_WORDS.includes(u)) return true;
  const uv = variants(user);
  return answers.some(a => { const av = variants(a); return uv.some(x => av.includes(x)); });
}

/* =========================================================
   Marcado de teoría → HTML
   ========================================================= */
const CALL_LABEL = {trap:'Trampa para hispanohablantes', tip:'Consejo', note:'Nota'};
function inl(s) {
  let h = esc(s);
  h = h.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  h = h.replace(/(^|[^*\w])\*([^*\s][^*]*?)\*(?![*\w])/g, '$1<em>$2</em>');
  h = h.replace(/`([^`]+)`/g, '<code>$1</code>');
  return h;
}
const plain = s => String(s || '').replace(/\*\*|`/g, '').replace(/(^|\s)\*([^*]+)\*/g, '$1$2');
function splitPipe(s) { const i = s.indexOf(' | '); if (i < 0) return [s.replace(/\s*\|\s*$/, ''), '']; return [s.slice(0, i), s.slice(i + 3)]; }
const speakBtn = text => ttsOK ? `<button class="speak" data-act="say" data-say="${esc(plain(text))}" aria-label="Escuchar">${ic('speaker')}</button>` : '';
function renderMarkup(src) {
  const lines = String(src || '').replace(/\r/g, '').split('\n');
  let html = '', i = 0, para = []; const toc = [];
  const flush = () => { if (para.length) { html += '<p>' + inl(para.join(' ')) + '</p>'; para = []; } };
  const starts = (p) => i < lines.length && lines[i].trim().startsWith(p);
  while (i < lines.length) {
    const line = lines[i].trim();
    if (!line) { flush(); i++; continue; }
    if (line.startsWith('## ')) { flush(); const id = 'sec' + toc.length; toc.push({id, t:plain(line.slice(3))}); html += `<h2 id="${id}">${inl(line.slice(3))}</h2>`; i++; continue; }
    if (line.startsWith('### ')) { flush(); html += `<h3>${inl(line.slice(4))}</h3>`; i++; continue; }
    if (line.startsWith(':: ')) { flush(); html += `<div class="formula">${inl(line.slice(3))}</div>`; i++; continue; }
    if (line.startsWith('> ')) {
      flush(); let g = '';
      while (starts('> ')) { const [en, es] = splitPipe(lines[i].trim().slice(2)); g += `<div class="ex">${speakBtn(en) || '<span></span>'}<div><p class="en">${inl(en)}</p>${es ? `<p class="es">${inl(es)}</p>` : ''}</div></div>`; i++; }
      html += `<div class="exs">${g}</div>`; continue;
    }
    if (line.startsWith('x> ')) {
      flush(); let g = '';
      while (starts('x> ')) { const [no, yes] = splitPipe(lines[i].trim().slice(3)); g += `<div class="wrong"><div class="no"><b>✗</b><span>${inl(no)}</span></div><div class="yes"><b>✓</b><span>${inl(yes)}</span></div></div>`; i++; }
      html += `<div class="wrongs">${g}</div>`; continue;
    }
    const cm = line.match(/^!(trap|tip|note):\s*(.*)$/);
    if (cm) { flush(); html += `<div class="call ${cm[1]}"><span class="lbl">${CALL_LABEL[cm[1]]}</span><p>${inl(cm[2])}</p></div>`; i++; continue; }
    if (line.startsWith('|')) {
      flush(); const rows = [];
      while (starts('|')) { const r = lines[i].trim(); if (!/^\|[\s\-:|]+\|$/.test(r)) rows.push(r.replace(/^\||\|$/g, '').split('|').map(c => c.trim())); i++; }
      if (rows.length) html += `<div class="tbl"><table><thead><tr>${rows[0].map(c => `<th>${inl(c)}</th>`).join('')}</tr></thead><tbody>${rows.slice(1).map(r => `<tr>${r.map(c => `<td>${inl(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
      continue;
    }
    if (line.startsWith('- ')) { flush(); let li = ''; while (starts('- ')) { li += '<li>' + inl(lines[i].trim().slice(2)) + '</li>'; i++; } html += `<ul>${li}</ul>`; continue; }
    para.push(line); i++;
  }
  flush();
  return {html, toc};
}
/* Markdown sencillo para respuestas de la IA */
function md(src) {
  const lines = String(src || '').replace(/\r/g, '').split('\n');
  let html = '', list = null, para = [];
  const flushP = () => { if (para.length) { html += '<p>' + inl(para.join(' ')) + '</p>'; para = []; } };
  const flushL = () => { if (list) { html += `<${list.t}>${list.items.map(x => '<li>' + inl(x) + '</li>').join('')}</${list.t}>`; list = null; } };
  for (const raw of lines) {
    const l = raw.trim();
    if (!l) { flushP(); flushL(); continue; }
    let m;
    if ((m = l.match(/^#{1,4}\s+(.*)$/))) { flushP(); flushL(); html += `<h4>${inl(m[1])}</h4>`; continue; }
    if ((m = l.match(/^[-*•]\s+(.*)$/))) { flushP(); if (!list || list.t !== 'ul') { flushL(); list = {t:'ul', items:[]}; } list.items.push(m[1]); continue; }
    if ((m = l.match(/^\d+[.)]\s+(.*)$/))) { flushP(); if (!list || list.t !== 'ol') { flushL(); list = {t:'ol', items:[]}; } list.items.push(m[1]); continue; }
    flushL(); para.push(l);
  }
  flushP(); flushL();
  return `<div class="md">${html}</div>`;
}

/* =========================================================
   Voz (texto a voz del navegador)
   ========================================================= */
const ttsOK = typeof window !== 'undefined' && 'speechSynthesis' in window && typeof window.SpeechSynthesisUtterance === 'function';
function speak(text) {
  if (!ttsOK) return;
  try {
    const u = new SpeechSynthesisUtterance(text);
    const lang = S.progress.settings.voice || 'en-GB';
    u.lang = lang; u.rate = S.progress.settings.rate || 0.95;
    const vs = speechSynthesis.getVoices() || [];
    const v = vs.find(x => x.lang === lang && /natural|google|premium|enhanced/i.test(x.name)) || vs.find(x => x.lang === lang) || vs.find(x => x.lang && x.lang.startsWith('en'));
    if (v) u.voice = v;
    speechSynthesis.cancel(); speechSynthesis.speak(u);
  } catch (e) {}
}

/* =========================================================
   IA (Claude) — opcional
   ========================================================= */
let SAMPLE = null, aiState = 'unknown';
async function initAI() {
  if (!window.claude || typeof window.claude.use !== 'function') { aiState = 'off'; render(); return; }
  try { SAMPLE = await window.claude.use('sample'); aiState = SAMPLE ? 'ready' : 'off'; } catch (e) { aiState = 'off'; }
  render();
}
const AI_OFF_CODES = ['not_granted', 'sampling_disabled', 'not_declared', 'capability_disabled', 'capability_removed'];
async function ask(input, opts = {}) {
  if (!SAMPLE) throw {code:'unavailable'};
  const o = {};
  for (const k of ['onText', 'signal', 'modelTier', 'cache']) if (opts[k] !== undefined) o[k] = opts[k];
  try { return opts.json ? await SAMPLE.json(input, o) : await SAMPLE(input, o); }
  catch (e) { if (e && AI_OFF_CODES.includes(e.code)) aiState = 'off'; throw e; }
}
function aiErr(e) {
  switch (e && e.code) {
    case 'cancelled': return '';
    case 'rate_limited': return 'Has hecho muchas consultas seguidas. Espera un poco y vuelve a intentarlo.';
    case 'invalid_json': return 'La respuesta no llegó en el formato esperado. Pulsa de nuevo para reintentarlo.';
    case 'not_granted': return 'No se ha permitido que esta página use Claude. Puedes activarlo en los permisos del artefacto.';
    case 'session_expired': return 'Tu sesión de Claude ha caducado. Vuelve a iniciar sesión.';
    case 'refused': return 'Claude no ha podido responder a esa petición. Prueba a reformularla.';
    case 'prompt_too_large': return 'El texto es demasiado largo. Prueba con uno más corto.';
    case 'sampling_disabled': return 'Claude no está disponible para esta cuenta.';
    default: return 'No se pudo conectar con Claude. Inténtalo de nuevo en un momento.';
  }
}
const EX_SCHEMA = `Each exercise is ONE of these JSON objects:
{"t":"mc","q":"sentence with ___ for the gap","o":["option A","option B","option C","option D"],"a":<index 0-3 of the correct option>,"e":"explicación breve en español"}
{"t":"gap","q":"sentence with ___ and a hint in brackets, e.g. (go)","a":["accepted answer","another accepted answer"],"e":"explicación en español"}
{"t":"fix","q":"a sentence containing exactly ONE typical error","a":["the corrected sentence"],"e":"explicación en español"}
{"t":"tr","q":"original sentence","k":"KEYWORD","s":"second sentence with ___ where 2-5 words go (they must include the keyword)","a":["words for the gap"],"e":"explicación en español"}`;
function validEx(x) {
  if (!x || typeof x !== 'object') return null;
  const e = String(x.e || '').slice(0, 400), q = typeof x.q === 'string' ? x.q.slice(0, 400) : null;
  if (!q) return null;
  if (x.t === 'mc' && Array.isArray(x.o) && x.o.length >= 2 && x.o.length <= 5 && Number.isInteger(Number(x.a)) && Number(x.a) >= 0 && Number(x.a) < x.o.length) return {t:'mc', q, o:x.o.map(o => String(o).slice(0, 160)), a:Number(x.a), e};
  const a = (Array.isArray(x.a) ? x.a : [x.a]).filter(v => typeof v === 'string' && v.trim()).map(v => v.slice(0, 300));
  if (!a.length) return null;
  if (x.t === 'gap' || x.t === 'fix') return {t:x.t, q, a, e};
  if (x.t === 'tr' && typeof x.k === 'string' && typeof x.s === 'string' && /_{3,}/.test(x.s)) return {t:'tr', q, k:x.k.slice(0, 30), s:x.s.slice(0, 300), a, e};
  return null;
}

/* =========================================================
   Router y estado de la interfaz
   ========================================================= */
let R = {name:'home', p:{}};
const stack = [];
let SESSION = null;   // sesión de ejercicios
let FLASH = null;     // sesión de tarjetas
let UI = {grammarLevel:null, grammarQuery:'', mistFilter:'pending', vocabLevel:'all', reviewLevel:'all', reviewCount:15, tutorTab:'write', guideOpen:'g-levels', confirmReset:false, importText:'', importMsg:''};
const AI = {extra:{}, explain:{}, write:{level:null, prompt:'', text:'', busy:false, result:null, err:'', ctl:null}, chat:{turns:[], busy:false, err:'', ctl:null, draft:''}, gen:{topic:'', level:null, busy:false, err:''}};

function go(name, p = {}, push = true) {
  if (push && !(R.name === name && JSON.stringify(R.p) === JSON.stringify(p))) stack.push(R);
  if (stack.length > 40) stack.shift();
  R = {name, p};
  render();
  window.scrollTo(0, 0);
}
function back(fallback = 'home') { const prev = stack.pop(); if (prev) { R = prev; render(); window.scrollTo(0, 0); } else go(fallback, {}, false); }

let toastTimer = null;
function toast(msg) { const t = $('#toast'); if (!t) return; t.textContent = msg; t.hidden = false; clearTimeout(toastTimer); toastTimer = setTimeout(() => { t.hidden = true; }, 2600); }

/* =========================================================
   Navegación
   ========================================================= */
const NAV = [
  {id:'home', label:'Inicio', icon:'home'},
  {id:'grammar', label:'Gramática', icon:'book'},
  {id:'review', label:'Repaso', icon:'repeat'},
  {id:'mistakes', label:'Mis errores', icon:'alert'},
  {id:'vocab', label:'Vocabulario', icon:'cards'},
  {id:'tutor', label:'Tutor IA', icon:'spark'},
  {id:'guide', label:'Plan C2', icon:'map'},
  {id:'settings', label:'Ajustes', icon:'gear'}
];
const SECTION_OF = {lesson:'grammar', quiz:null, deck:'vocab', flash:'vocab', more:'more'};
function navBadge(id) {
  if (id === 'review') { const n = dueLessons().length; return n ? `<span class="badge hot">${n}</span>` : ''; }
  if (id === 'mistakes') { const n = pendingMistakes().length; return n ? `<span class="badge">${n}</span>` : ''; }
  if (id === 'vocab') { const v = vocabStats(); return v.due ? `<span class="badge">${v.due}</span>` : ''; }
  return '';
}
function renderNav() {
  const cur = SECTION_OF[R.name] !== undefined ? SECTION_OF[R.name] : R.name;
  const side = $('#side');
  if (side) side.innerHTML = `
    <div class="brand"><div class="brand-mark"><span>C2</span></div><div><b>Ruta al C2</b><small>Tu plataforma de inglés</small></div></div>
    <nav class="nav" aria-label="Secciones">${NAV.map(n => `<button data-act="nav" data-to="${n.id}" ${cur === n.id ? 'aria-current="page"' : ''}>${ic(n.icon)}<span>${n.label}</span>${navBadge(n.id)}</button>`).join('')}</nav>
    <div class="side-foot"><div class="sync" id="sync"></div></div>`;
  const tb = $('#tabbar');
  const tabs = [NAV[0], NAV[1], NAV[2], NAV[4], {id:'more', label:'Más', icon:'more'}];
  const moreIds = ['mistakes', 'tutor', 'guide', 'settings', 'more'];
  if (tb) tb.innerHTML = tabs.map(n => {
    const on = n.id === 'more' ? moreIds.includes(cur) : cur === n.id;
    const dot = (n.id === 'review' && dueLessons().length) || (n.id === 'more' && pendingMistakes().length) ? '<span class="dot"></span>' : '';
    return `<button data-act="nav" data-to="${n.id}" ${on ? 'aria-current="page"' : ''}>${ic(n.icon)}<span>${n.label}</span>${dot}</button>`;
  }).join('');
  renderSync();
}
function renderSync() {
  const el = $('#sync'); if (!el) return;
  const txt = sync === 'cloud' ? 'Progreso guardado en tu cuenta' : sync === 'syncing' ? 'Sincronizando…' : sync === 'error' ? 'No se pudo guardar en tu cuenta; se guarda en este navegador' : 'Progreso guardado en este navegador';
  el.className = 'sync' + (sync === 'cloud' ? ' on' : '');
  el.innerHTML = `<i></i><span>${txt}</span>`;
}

/* =========================================================
   Componentes
   ========================================================= */
const lvChip = L => `<span class="lv lv-${esc(L)}">${esc(L)}</span>`;
const stars = n => `<span class="stars" aria-label="${n} de 3 estrellas">${[1, 2, 3].map(i => ic('star', i <= n ? '' : 'off')).join('')}</span>`;
const bar = (pct, cls = '') => `<div class="bar ${cls}"><i style="width:${Math.max(0, Math.min(100, pct))}%"></i></div>`;
function lessonStatusChip(l) {
  const p = lp(l.id);
  if (!p || p.status === 'new') return p && p.theory ? '<span class="chip accent">Teoría leída</span>' : '<span class="chip">Nueva</span>';
  if (p.due && p.due <= today()) return '<span class="chip bad">Repaso pendiente</span>';
  return `${stars(starsFor(p.best))}<span class="chip num">${p.best}%</span>`;
}
function ring(val, max, label) {
  const r = 46, c = 2 * Math.PI * r, f = max ? Math.min(1, val / max) : 0;
  return `<div class="ring" role="img" aria-label="${esc(label)}"><svg viewBox="0 0 104 104"><circle cx="52" cy="52" r="${r}" fill="none" stroke="var(--surface-3)" stroke-width="10"/><circle cx="52" cy="52" r="${r}" fill="none" stroke="var(--accent)" stroke-width="10" stroke-linecap="round" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - f)}"/></svg><div class="ring-c"><div><b class="num">${val}</b><div class="small muted">de ${max} XP</div></div></div></div>`;
}
const pageHead = (title, sub, extra = '') => `<header class="page-head">${extra}<h1>${title}</h1>${sub ? `<p>${sub}</p>` : ''}</header>`;
const backBtn = (label) => `<button class="btn ghost sm" data-act="back" style="align-self:flex-start">${ic('left')}${esc(label)}</button>`;

/* =========================================================
   Vista: Inicio (dashboard)
   ========================================================= */
function greeting() { const h = new Date().getHours(); return h < 13 ? 'Buenos días' : h < 20 ? 'Buenas tardes' : 'Buenas noches'; }
function recommendations() {
  const out = [];
  const due = dueLessons();
  if (due.length) out.push({icon:'repeat', cls:'bad', t:`Repaso espaciado: ${plural(due.length, 'lección', 'lecciones')}`, s:'Repasa ahora para fijarlo en la memoria a largo plazo.', act:'start-review'});
  const nl = nextLesson();
  if (nl) out.push({icon:'book', cls:'', t:`${lp(nl.id) && lp(nl.id).theory ? 'Continúa' : 'Siguiente lección'}: ${nl.title}`, s:`${nl.level} · ${nl.es}`, act:'open-lesson', id:nl.id});
  const W = workingLevel(), st = levelStatus(W);
  if (st.pct >= 0.75 && !st.passed) out.push({icon:'target', cls:'good', t:`Examen de nivel ${W}`, s:`Has completado ${st.done} de ${st.total} lecciones. Comprueba si ya dominas el ${W}.`, act:'start-test', lv:W});
  const pm = pendingMistakes().length;
  if (pm) out.push({icon:'alert', cls:'bad', t:`Corrige tus errores (${pm})`, s:'Cada error se supera cuando lo aciertas dos veces.', act:'start-mistakes'});
  const v = vocabStats();
  if (v.due + v.newLeft > 0) out.push({icon:'cards', cls:'good', t:`Vocabulario: ${v.due} para repasar${v.newLeft ? ` · ${v.newLeft} nuevas` : ''}`, s:'Diez minutos de tarjetas al día marcan la diferencia.', act:'start-flash'});
  return out.slice(0, 4);
}
function dailyPlan() {
  const a = actRO(), due = dueLessons().length, pm = pendingMistakes().length, v = vocabStats();
  const cardTarget = Math.min(20, v.due + v.newLeft + a.cards);
  const nl = nextLesson();
  return [
    {done:due === 0, t:due ? `Repasa ${plural(due, 'lección pendiente', 'lecciones pendientes')}` : (a.rev ? 'Repaso espaciado hecho' : 'Sin repasos pendientes hoy'), act:due ? 'start-review' : null},
    {done:a.newL >= 1, t:a.newL >= 1 ? 'Lección nueva completada' : (nl ? `Aprende: ${nl.title}` : 'Todas las lecciones completadas'), act:a.newL >= 1 || !nl ? null : 'open-lesson', id:nl && nl.id},
    {done:cardTarget === 0 || a.cards >= cardTarget, t:`Vocabulario: ${Math.min(a.cards, cardTarget)} / ${cardTarget} tarjetas`, act:'start-flash'},
    {done:pm === 0 || a.fixes >= Math.min(5, pm), t:pm ? `Supera errores: ${Math.min(a.fixes, Math.min(5, pm))} / ${Math.min(5, pm)}` : 'No tienes errores pendientes', act:pm ? 'start-mistakes' : null}
  ];
}
function heatmap() {
  const weeks = 18, t = parseKey(today());
  const start = new Date(t); start.setDate(start.getDate() - (weeks * 7 - 1));
  // alinear a lunes
  const off = (start.getDay() + 6) % 7; start.setDate(start.getDate() - off);
  const goal = S.progress.settings.goal || 50;
  let cells = '', d = new Date(start);
  while (d <= t) {
    const k = dkey(d), x = (S.progress.activity[k] || {}).xp || 0;
    const l = x <= 0 ? 0 : x < goal * 0.5 ? 1 : x < goal ? 2 : x < goal * 2 ? 3 : 4;
    cells += `<i data-l="${l}" class="${k === today() ? 'today' : ''}" title="${esc(fmtShort(k))}: ${x} XP"></i>`;
    d.setDate(d.getDate() + 1);
  }
  return `<div class="heat-wrap"><div class="heat" role="img" aria-label="Actividad de las últimas ${weeks} semanas">${cells}</div></div>
  <div class="row between small muted" style="margin-top:8px"><span>Cada cuadro es un día · ${weeks} semanas</span><span class="legend">Menos <i style="background:var(--heat-0)"></i><i style="background:var(--heat-1)"></i><i style="background:var(--heat-2)"></i><i style="background:var(--heat-3)"></i><i style="background:var(--heat-4)"></i> Más</span></div>`;
}
function xpColumns() {
  const days = []; for (let i = 13; i >= 0; i--) days.push(addDays(today(), -i));
  const vals = days.map(k => (S.progress.activity[k] || {}).xp || 0);
  const max = Math.max(S.progress.settings.goal || 50, ...vals);
  const cols = days.map((k, i) => `<div class="col ${k === today() ? 'today' : ''}" tabindex="0"><span class="tip">${esc(fmtShort(k))}: ${vals[i]} XP</span><i style="height:${vals[i] ? Math.max(4, vals[i] / max * 100) : 0}%"></i></div>`).join('');
  const goalPct = (S.progress.settings.goal || 50) / max * 100;
  return `<div class="cols" role="img" aria-label="XP de los últimos 14 días"><div style="position:absolute;left:0;right:0;bottom:${goalPct}%;border-top:1px dashed var(--line)"></div>${cols}</div>
  <div class="cols-x">${days.map((k, i) => `<span>${i % 2 === 1 ? '' : parseKey(k).getDate()}</span>`).join('')}</div>
  <p class="small muted" style="margin-top:6px">La línea discontinua marca tu objetivo diario (${S.progress.settings.goal} XP).</p>`;
}
function weakPoints() {
  const per = {};
  for (const m of pendingMistakes()) if (m.lesson) per[m.lesson] = (per[m.lesson] || 0) + 1;
  const list = Object.entries(per).map(([id, n]) => ({l:lessonById(id), n})).filter(x => x.l).sort((a, b) => b.n - a.n).slice(0, 5);
  const low = allLessons().filter(l => lp(l.id) && lp(l.id).status === 'done' && lp(l.id).best < 70 && !per[l.id]).slice(0, 5 - list.length).map(l => ({l, n:0}));
  const all = list.concat(low);
  if (!all.length) return '<div class="empty small">Cuando falles ejercicios, aquí verás los temas que más te cuestan.</div>';
  return `<div class="weak">${all.map(x => `<button data-act="open-lesson" data-id="${esc(x.l.id)}"><span>${lvChip(x.l.level)} <b>${esc(x.l.title)}</b></span><span class="chip ${x.n ? 'bad' : 'warn'} num">${x.n ? plural(x.n, 'error', 'errores') : lp(x.l.id).best + '%'}</span></button>`).join('')}</div>`;
}
function viewHome() {
  const goal = S.progress.settings.goal, xpToday = actRO().xp, st = streak();
  const W = workingLevel(), cert = certifiedLevel();
  const fresh = !Object.keys(S.progress.lessons).length && !S.progress.xp;
  const recs = recommendations();
  const acc = accuracy(), vs = vocabStats();
  const doneCount = GRAMMAR.filter(l => lp(l.id) && lp(l.id).status === 'done').length;
  const allM = Object.values(S.mistakes.items), resolved = allM.filter(m => m.resolved).length;
  const wi = LEVELS.indexOf(W);
  const fillPct = Math.min(76, (wi + levelStatus(W).pct) / 3 * 76);
  const welcome = fresh ? `<section class="panel" style="background:var(--accent-soft);border-color:var(--accent-line)">
      <div class="stack"><span class="eyebrow">Bienvenida</span><h2 style="font-size:1.5rem">Tu ruta del B1 al C2 empieza hoy</h2>
      <p style="max-width:62ch">Cada día: una lección (teoría con ejemplos + práctica), el repaso que toque y unas tarjetas de vocabulario. Cada fallo se guarda en tu cuaderno de errores y vuelve hasta que lo domines.</p>
      <div class="row"><button class="btn primary" data-act="open-lesson" data-id="${esc(GRAMMAR[0].id)}">${ic('play')}Empezar la primera lección</button><button class="btn" data-act="nav" data-to="guide">${ic('map')}Ver el plan hasta C2</button></div>
      <div class="row small"><span class="muted">Tu test dice B1. ¿Prefieres empezar en otro nivel?</span><span class="seg">${LEVELS.map(L => `<button data-act="set-start" data-lv="${L}" aria-pressed="${S.progress.settings.start === L}">${L}</button>`).join('')}</span></div></div></section>` : '';
  return `
  <div class="mobile-top"><div class="brand"><div class="brand-mark"><span>C2</span></div><div><b>Ruta al C2</b></div></div><button class="icon-btn" data-act="nav" data-to="settings" aria-label="Ajustes">${ic('gear')}</button></div>
  ${pageHead(`${greeting()}`, `Hoy es ${fmtDay(today())}. Estás trabajando el nivel <strong>${W}</strong>${cert ? ` y tienes acreditado el <strong>${cert}</strong>` : ''}. Objetivo: <strong>C2</strong>.`)}
  ${welcome}
  <section class="hero">
    <div class="panel stack">
      <div class="today">
        ${ring(xpToday, goal, `XP de hoy: ${xpToday} de ${goal}`)}
        <div class="stack" style="gap:8px">
          <div class="streak">${ic('flame', 'flame' + (st ? '' : ' off'))}<div><b class="num">${st}</b> <span class="muted">${st === 1 ? 'día seguido' : 'días seguidos'}</span></div></div>
          <p class="small muted">${xpToday >= goal ? 'Objetivo diario cumplido. ¡Bien hecho!' : st && !actRO().xp ? 'Haz algo hoy para no perder tu racha.' : `Te faltan ${goal - xpToday} XP para tu objetivo de hoy.`}</p>
          <p class="small muted num">${S.progress.xp.toLocaleString('es')} XP en total</p>
        </div>
      </div>
      <h3>Tu siguiente paso</h3>
      <div class="next-list">${recs.length ? recs.map(r => `<button class="next" data-act="${r.act}" ${r.id ? `data-id="${esc(r.id)}"` : ''} ${r.lv ? `data-lv="${r.lv}"` : ''}><span class="n-ico ${r.cls}">${ic(r.icon)}</span><span class="n-txt"><b>${esc(r.t)}</b><span>${esc(r.s)}</span></span>${ic('right')}</button>`).join('') : '<div class="empty">Lo tienes todo al día. Repasa un nivel en la sección Repaso.</div>'}</div>
    </div>
    <div class="panel stack">
      <div class="row between"><h3>Plan de hoy</h3><span class="chip num">${dailyPlan().filter(x => x.done).length}/4</span></div>
      <div>${dailyPlan().map(x => `<div class="plan-item"><span class="check ${x.done ? 'on' : ''}">${x.done ? ic('check') : ''}</span><span style="flex:1;min-width:0">${esc(x.t)}</span>${x.act && !x.done ? `<button class="btn sm" data-act="${x.act}" ${x.id ? `data-id="${esc(x.id)}"` : ''}>Ir</button>` : ''}</div>`).join('')}</div>
      <p class="small muted">Unos 30–40 minutos. Añade 15–30 min de inglés real (podcast, serie o lectura).</p>
    </div>
  </section>
  <section class="panel stack">
    <div class="row between"><h3>Tu ruta al C2</h3><button class="link small" data-act="nav" data-to="guide">¿Qué significa cada nivel?</button></div>
    <div class="route"><div class="fill" style="width:${fillPct}%"></div>${LEVELS.map((L, i) => {
      const s = levelStatus(L);
      return `<button class="station lv-${L} ${L === W ? 'cur' : ''} ${s.passed ? 'cert' : ''}" style="--lvc:var(--${L.toLowerCase()})" data-act="open-level" data-lv="${L}"><span class="st-dot">${L}</span><b class="small">${LEVEL_INFO[L].name}</b>${bar(s.pct * 100, 'lv' + L)}<small class="num">${s.done}/${s.total} lecciones${s.passed ? ' · acreditado' : L === W ? ' · estás aquí' : ''}</small></button>`;
    }).join('')}</div>
  </section>
  <section class="grid-4">
    <div class="stat"><span>Lecciones completadas</span><b>${doneCount}<span class="small muted"> / ${GRAMMAR.length}</span></b></div>
    <div class="stat"><span>Precisión en ejercicios</span><b>${acc == null ? '—' : acc + '%'}</b></div>
    <div class="stat"><span>Palabras aprendidas</span><b>${vs.learned}<span class="small muted"> / ${vs.total}</span></b></div>
    <div class="stat"><span>Errores superados</span><b>${resolved}<span class="small muted"> / ${allM.length}</span></b></div>
  </section>
  <section class="grid-2">
    <div class="panel stack"><h3>Constancia</h3>${heatmap()}</div>
    <div class="panel stack"><h3>XP de los últimos 14 días</h3>${xpColumns()}</div>
  </section>
  <section class="grid-2">
    <div class="panel stack"><h3>Dominio por nivel</h3><p class="small muted">Nota media de las lecciones completadas en cada nivel.</p>
      <div class="hbars">${LEVELS.map(L => { const s = levelStatus(L); return `<div class="hbar" style="--lvc:var(--${L.toLowerCase()})"><span>${lvChip(L)}</span><div class="track" title="${L}: ${s.done ? s.avg + '%' : 'sin datos'}"><i style="width:${s.avg}%"></i></div><span class="num small">${s.done ? s.avg + '%' : '—'}</span></div>`; }).join('')}</div>
    </div>
    <div class="panel stack"><h3>Tus puntos débiles</h3>${weakPoints()}</div>
  </section>`;
}

/* =========================================================
   Vista: Gramática
   ========================================================= */
function viewGrammar() {
  const L = UI.grammarLevel || R.p.level || workingLevel();
  UI.grammarLevel = L;
  const q = UI.grammarQuery.trim().toLowerCase();
  const tabs = LEVELS.map(x => { const s = levelStatus(x); return `<button class="lvl-tab" style="--lvc:var(--${x.toLowerCase()})" data-act="glevel" data-lv="${x}" aria-pressed="${!q && x === L}"><span class="row" style="gap:8px">${lvChip(x)}<b>${LEVEL_INFO[x].name}</b></span>${bar(s.pct * 100, 'lv' + x)}<small class="num">${s.done}/${s.total}${s.passed ? ' · acreditado' : ''}</small></button>`; }).join('')
    + (S.custom.lessons.length ? `<button class="lvl-tab" data-act="glevel" data-lv="mine" aria-pressed="${!q && L === 'mine'}"><span class="row" style="gap:8px">${ic('spark')}<b>Mis lecciones</b></span><small>${S.custom.lessons.length} creadas con IA</small></button>` : '');
  let list;
  if (q) list = allLessons().filter(l => (l.title + ' ' + l.es + ' ' + l.goal + ' ' + l.theory).toLowerCase().includes(q));
  else if (L === 'mine') list = S.custom.lessons;
  else list = levelLessons(L);
  const st = L !== 'mine' ? levelStatus(L) : null;
  const levelPanel = !q && st ? `<section class="panel stack" style="border-left:4px solid var(--${L.toLowerCase()})">
      <div class="row between"><div class="stack" style="gap:4px"><span class="eyebrow">Nivel ${L} · ${LEVEL_INFO[L].name}</span><p>${LEVEL_INFO[L].can}</p></div></div>
      <div class="row"><button class="btn primary" data-act="start-test" data-lv="${L}">${ic('target')}Examen de nivel ${L}</button><button class="btn" data-act="start-mixed" data-lv="${L}">${ic('shuffle')}Repaso mixto ${L}</button>
      ${st.test ? `<span class="chip ${st.passed ? 'good' : 'warn'} num">Mejor nota: ${st.test.best}%${st.passed ? ' · aprobado' : ` · aprueba con ${PASS_TEST}%`}</span>` : `<span class="small muted">Aprueba con un ${PASS_TEST}% para acreditar el nivel.</span>`}</div>
    </section>` : '';
  return `${pageHead('Gramática', 'Cada lección tiene una clase teórica completa con muchos ejemplos, trampas típicas del hispanohablante y práctica con corrección inmediata.')}
  <div class="lvl-tabs">${tabs}</div>
  <label class="field"><span class="sr" hidden>Buscar</span><input type="search" id="gq" placeholder="Buscar un tema: conditionals, inversion, used to…" value="${esc(UI.grammarQuery)}"></label>
  ${levelPanel}
  <div class="lessons" id="lesson-list">${lessonRows(list, !!q || L === 'mine')}</div>`;
}
function lessonRows(list, showLevel) {
  if (!list.length) return '<div class="empty">No hay lecciones que coincidan.</div>';
  return list.map(l => {
    const p = lp(l.id), done = p && p.status === 'done';
    const n = l.ai ? '' : lessonNo(l);
    return `<button class="lesson-row" data-act="open-lesson" data-id="${esc(l.id)}"><span class="idx ${done ? 'done' : ''}">${done ? ic('check') : (n || ic('spark'))}</span><span class="t"><b>${esc(l.title)}</b><span>${showLevel ? esc(l.level) + ' · ' : ''}${esc(l.es)}</span></span><span class="meta">${lessonStatusChip(l)}</span></button>`;
  }).join('');
}

/* =========================================================
   Vista: Lección
   ========================================================= */
function viewLesson() {
  const l = lessonById(R.p.id);
  if (!l) return `${backBtn('Volver')}<div class="empty">Esta lección ya no existe.</div>`;
  const tab = R.p.tab || 'theory';
  const p = lp(l.id);
  const mis = Object.values(S.mistakes.items).filter(m => m.lesson === l.id);
  const pend = mis.filter(m => !m.resolved);
  const {html, toc} = renderMarkup(l.theory);
  const head = `<div class="lesson-head">${backBtn(l.ai ? 'Mis lecciones' : 'Gramática ' + l.level)}
    <div class="row">${lvChip(l.level)}${l.ai ? '<span class="chip accent">Creada con IA</span>' : `<span class="chip">Lección ${lessonNo(l)} de ${levelLessons(l.level).length}</span>`}${p && p.status === 'done' ? stars(starsFor(p.best)) : ''}</div>
    <h1>${esc(l.title)}</h1><p class="muted" style="font-size:1.1rem">${esc(l.es)}</p>
    <div class="goal"><b>Objetivo:</b> ${esc(l.goal)}</div>
    <div class="seg" role="tablist">
      <button data-act="ltab" data-tab="theory" aria-pressed="${tab === 'theory'}">Teoría</button>
      <button data-act="ltab" data-tab="practice" aria-pressed="${tab === 'practice'}">Práctica · ${l.ex.length}</button>
      <button data-act="ltab" data-tab="errors" aria-pressed="${tab === 'errors'}">Tus errores${pend.length ? ' · ' + pend.length : ''}</button>
    </div></div>`;
  let body = '';
  if (tab === 'theory') {
    body = `<div class="theory-layout"><article class="theory">${html}
      <div class="lesson-cta"><h3>¿Listo para practicar?</h3><p>${plural(l.ex.length, 'ejercicio', 'ejercicios')} con corrección inmediata. Tus fallos se guardan para repasarlos.</p>
      <div class="row"><button class="btn primary lg" data-act="start-lesson" data-id="${esc(l.id)}">${ic('play')}Empezar práctica</button>${aiState === 'ready' ? `<button class="btn" data-act="ask-tutor" data-id="${esc(l.id)}">${ic('chat')}Preguntar una duda</button>` : ''}</div></div>
    </article><nav class="toc" aria-label="Índice"><span class="eyebrow" style="padding:0 10px 6px">En esta lección</span>${toc.map(t => `<a href="#${t.id}" data-act="toc" data-id="${t.id}">${esc(t.t)}</a>`).join('')}</nav></div>`;
  } else if (tab === 'practice') {
    const ex = AI.extra[l.id] || {};
    body = `<section class="grid-2">
      <div class="panel stack"><h3>Práctica de la lección</h3>
        ${p && p.status === 'done' ? `<div class="row">${stars(starsFor(p.best))}<span class="chip num">Mejor: ${p.best}%</span><span class="chip num">Última: ${p.last}%</span><span class="chip">${plural(p.attempts, 'intento', 'intentos')}</span></div><p class="small muted">Próximo repaso: <strong>${esc(inDays(p.due))}</strong> (${esc(fmtShort(p.due))}).</p>` : '<p class="muted">Aún no has hecho esta práctica. Lee primero la teoría si es un tema nuevo para ti.</p>'}
        <button class="btn primary" data-act="start-lesson" data-id="${esc(l.id)}">${ic('play')}${p && p.status === 'done' ? 'Repetir práctica' : 'Empezar práctica'}</button>
      </div>
      <div class="panel stack"><h3>Más práctica con IA</h3>
        ${aiState === 'ready' ? `<p class="small muted">Claude crea ejercicios nuevos de este tema, teniendo en cuenta tus errores.</p>
        <button class="btn" data-act="gen-extra" data-id="${esc(l.id)}" ${ex.busy ? 'disabled' : ''}>${ic('spark')}${ex.busy ? 'Creando ejercicios…' : 'Generar 8 ejercicios nuevos'}</button>
        ${ex.busy ? '<span class="thinking"><i></i><i></i><i></i> Pensando… puede tardar unos segundos</span>' : ''}${ex.err ? `<p class="small" style="color:var(--bad)">${esc(ex.err)}</p>` : ''}`
        : `<p class="small muted">${aiState === 'unknown' ? 'Conectando con Claude…' : 'Disponible cuando abres esta página dentro de Claude y permites que use Claude.'}</p>`}
      </div></section>`;
  } else {
    body = mis.length ? `<div class="row"><button class="btn primary" data-act="start-lesson-mistakes" data-id="${esc(l.id)}" ${pend.length ? '' : 'disabled'}>${ic('repeat')}Practicar estos errores (${pend.length})</button></div><div class="mlist">${mis.sort((a, b) => (a.resolved - b.resolved) || b.last - a.last).map(mistakeCard).join('')}</div>`
      : '<div class="empty">Todavía no tienes errores en esta lección. Cuando falles un ejercicio, aparecerá aquí con su explicación.</div>';
  }
  return head + body;
}

/* =========================================================
   Motor de ejercicios
   ========================================================= */
const TYPE_LABEL = {mc:'Elige la opción correcta', gap:'Completa el hueco', fix:'Corrige el error', tr:'Transformación con palabra clave', ord:'Ordena las palabras'};
function mkItem(ex, key, lessonId, src) {
  const it = {ex, key, lessonId, src, done:false, correct:null, user:'', prev:null};
  if (ex.t === 'mc') it.perm = shuffle(ex.o.map((_, i) => i));
  if (ex.t === 'ord') { let w = shuffle(ex.w.map((x, i) => ({x, i}))); if (w.map(o => o.x).join(' ') === ex.w.join(' ') && w.length > 1) w = w.slice(1).concat(w[0]); it.words = w; }
  return it;
}
const itemsOf = l => l.ex.map((ex, i) => mkItem(ex, l.id + '#' + i, l.id, l.ai ? 'custom' : 'lesson'));
function startSession(cfg) {
  if (!cfg.items.length) { toast('No hay ejercicios disponibles para esta sesión.'); return; }
  SESSION = Object.assign({i:0, q:{sel:null, text:'', built:[]}, startedAt:Date.now(), xp:0, finished:false}, cfg);
  prepQ();
  go('quiz');
  focusAnswer();
}
function prepQ() { const it = SESSION.items[SESSION.i]; SESSION.q = {sel:null, text:it && it.ex.t === 'fix' ? it.ex.q : '', built:[]}; }
function startLesson(id) { const l = lessonById(id); if (!l) return; startSession({mode:'lesson', title:l.title, lessonId:id, items:itemsOf(l)}); }
function pickFrom(l, n, preferWrong = true) {
  const items = itemsOf(l);
  const wrong = preferWrong ? items.filter(it => S.mistakes.items[it.key] && !S.mistakes.items[it.key].resolved) : [];
  const rest = shuffle(items.filter(it => !wrong.includes(it)));
  return shuffle(wrong).concat(rest).slice(0, n);
}
function startReview() {
  const due = dueLessons();
  if (!due.length) { toast('No tienes repasos pendientes hoy.'); return; }
  const per = Math.max(3, Math.ceil(15 / due.length));
  let items = [];
  for (const l of due) items = items.concat(pickFrom(l, per));
  startSession({mode:'review', title:'Repaso espaciado', items:shuffle(items).slice(0, Math.max(15, due.length * 3)), lessons:due.map(l => l.id)});
}
function startMixed(level, count) {
  let pool = allLessons().filter(l => (level === 'all' || l.level === level) && lp(l.id) && lp(l.id).status === 'done');
  if (!pool.length) pool = level === 'all' ? levelLessons(workingLevel()) : levelLessons(level);
  let items = [];
  for (const l of pool) items = items.concat(itemsOf(l));
  startSession({mode:'mixed', title:'Repaso mixto' + (level === 'all' ? '' : ' ' + level), items:shuffle(items).slice(0, count)});
}
function startMistakes(filterLesson) {
  let ms = pendingMistakes().filter(m => m.ex && (!filterLesson || m.lesson === filterLesson));
  ms.sort((a, b) => (b.count - a.count) || (a.last - b.last));
  ms = ms.slice(0, 12);
  if (!ms.length) { toast('No tienes errores pendientes. ¡Buen trabajo!'); return; }
  startSession({mode:'mistakes', title:'Practica tus errores', items:shuffle(ms.map(m => mkItem(m.ex, m.k, m.lesson, m.src)))});
}
function startTest(L) {
  let items = [];
  for (const l of levelLessons(L)) {
    const ok = itemsOf(l).filter(it => it.ex.t !== 'ord');
    items = items.concat(shuffle(ok).slice(0, 2));
  }
  startSession({mode:'test', title:'Examen de nivel ' + L, level:L, items:shuffle(items)});
}

function checkCurrent(override) {
  const it = SESSION.items[SESSION.i], ex = it.ex, q = SESSION.q;
  let correct = false, user = '';
  if (ex.t === 'mc') { if (q.sel == null) return; user = ex.o[q.sel]; correct = q.sel === ex.a; }
  else if (ex.t === 'ord') { user = q.built.map(i => it.words[i].x).join(' '); if (!q.built.length) return; correct = matches(user, ex.a); }
  else {
    user = (q.text || '').trim(); if (!user) return;
    correct = matches(user, ex.a);
    if (!correct && ex.t === 'tr') correct = matches(user, ex.a.map(a => ex.s.replace(/_{3,}/, a)));
  }
  it.done = true; it.correct = correct; it.user = user;
  const a = act(); a.ex++; if (correct) a.ok++;
  const xp = correct ? 10 : 2; addXP(xp); SESSION.xp += xp;
  recordAnswer(it, correct, user);
  touch('progress', 'mistakes');
  render();
}
function overrideCorrect() {
  const it = SESSION.items[SESSION.i];
  if (!it || !it.done || it.correct) return;
  undoRecord(it); it.correct = true; it.overridden = true;
  const a = act(); a.ok++; addXP(8); SESSION.xp += 8;
  const M = S.mistakes.items[it.key];
  if (M && !M.resolved) { M.streak = (M.streak || 0) + 1; if (M.streak >= 2) { M.resolved = true; M.resolvedAt = Date.now(); } act().fixes++; }
  touch('progress', 'mistakes');
  render();
}
function nextQ() {
  if (SESSION.i < SESSION.items.length - 1) { SESSION.i++; prepQ(); render(); focusAnswer(); }
  else finishSession();
}
function finishSession() {
  const s = SESSION; s.finished = true;
  const total = s.items.length, ok = s.items.filter(x => x.correct).length;
  s.score = total ? Math.round(ok / total * 100) : 0;
  if (s.mode === 'lesson' || s.mode === 'ai') {
    if (s.mode === 'lesson') scheduleLesson(s.lessonId, s.score, false);
    if (s.score >= 80) { addXP(20); s.xp += 20; }
  } else if (s.mode === 'review') {
    const per = {};
    for (const it of s.items) { if (!it.lessonId) continue; per[it.lessonId] = per[it.lessonId] || [0, 0]; per[it.lessonId][0]++; if (it.correct) per[it.lessonId][1]++; }
    for (const [id, [n, c]] of Object.entries(per)) scheduleLesson(id, Math.round(c / n * 100), true);
    addXP(15); s.xp += 15;
  } else if (s.mode === 'test') {
    const t = S.progress.tests[s.level] || {best:0, passed:false, attempts:0};
    t.best = Math.max(t.best, s.score); t.attempts++; t.date = today(); if (s.score >= PASS_TEST) t.passed = true;
    S.progress.tests[s.level] = t;
    if (s.score >= PASS_TEST) { addXP(100); s.xp += 100; }
  }
  touch('progress', 'mistakes');
  render();
}
function qText(s) { return esc(s).replace(/_{3,}/g, '<span class="gap" aria-label="hueco"></span>'); }
function correctText(ex) {
  if (ex.t === 'mc') return ex.o[ex.a];
  if (ex.t === 'tr') return ex.s.replace(/_{3,}/, ex.a[0]);
  return ex.a[0];
}
function viewQuiz() {
  const s = SESSION;
  if (!s) return `<div class="empty">No hay ninguna sesión activa.</div><button class="btn" data-act="nav" data-to="home">Volver al inicio</button>`;
  if (s.finished) return viewResult();
  const it = s.items[s.i], ex = it.ex, q = s.q, isTest = s.mode === 'test';
  const L = it.lessonId ? lessonById(it.lessonId) : null;
  let body = '';
  if (ex.t === 'mc') {
    body = `<div class="qtext">${qText(ex.q)}</div><div class="opts">${it.perm.map((oi, n) => {
      let cls = q.sel === oi ? 'sel' : '';
      if (it.done && !isTest) { if (oi === ex.a) cls = 'ok'; else if (q.sel === oi) cls = 'ko'; }
      return `<button class="opt ${cls}" data-act="pick" data-i="${oi}" ${it.done ? 'disabled' : ''}><kbd>${n + 1}</kbd><span>${esc(ex.o[oi])}</span></button>`;
    }).join('')}</div>`;
  } else if (ex.t === 'gap') {
    body = `<div class="qtext">${qText(ex.q)}</div><input type="text" class="answer-input" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Escribe la respuesta" value="${esc(q.text)}" ${it.done ? 'disabled' : ''}>`;
  } else if (ex.t === 'fix') {
    body = `<div class="qtext" style="font-size:1.15rem">${esc(ex.q)}</div><p class="small muted">Edita la frase para corregir el error y pulsa Comprobar.</p><textarea id="ans" class="answer-input" rows="2" autocomplete="off" autocapitalize="off" spellcheck="false" ${it.done ? 'disabled' : ''}>${esc(q.text)}</textarea>`;
  } else if (ex.t === 'tr') {
    body = `<div class="kw"><p class="orig">${esc(ex.q)}</p><span class="key">${esc(ex.k)}</span><div class="qtext">${qText(ex.s)}</div><p class="small muted">Completa con 2–5 palabras usando la palabra clave sin cambiarla.</p></div><input type="text" class="answer-input" id="ans" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Palabras que faltan" value="${esc(q.text)}" ${it.done ? 'disabled' : ''}>`;
  } else if (ex.t === 'ord') {
    body = `<div class="built" aria-label="Tu frase">${q.built.length ? q.built.map((wi, n) => `<button class="wchip" data-act="unbuild" data-n="${n}" ${it.done ? 'disabled' : ''}>${esc(it.words[wi].x)}</button>`).join('') : '<span class="muted small">Toca las palabras en orden…</span>'}</div>
      <div class="chips">${it.words.map((w, wi) => `<button class="wchip ${q.built.includes(wi) ? 'used' : ''}" data-act="build" data-i="${wi}" ${it.done ? 'disabled' : ''}>${esc(w.x)}</button>`).join('')}</div>`;
  }
  let fb = '';
  if (it.done && !isTest) {
    const typed = ex.t !== 'mc';
    fb = it.correct
      ? `<div class="feedback ok"><div class="fb-h">${ic('check')}${it.overridden ? 'Marcada como correcta' : '¡Correcto!'}</div>${typed && !matches(it.user, [correctText(ex)]) ? `<p>También vale: <span class="right">${esc(correctText(ex))}</span></p>` : ''}${ex.e ? `<p>${esc(ex.e)}</p>` : ''}</div>`
      : `<div class="feedback ko"><div class="fb-h">${ic('x')}No es correcto</div>${it.user ? `<p>Tu respuesta: <span class="yours">${esc(it.user)}</span></p>` : ''}<p>Respuesta correcta: <span class="right">${esc(correctText(ex))}</span></p>${ex.e ? `<p>${esc(ex.e)}</p>` : ''}<p class="small muted">Guardado en tu cuaderno de errores.</p>${typed ? '<div><button class="link small" data-act="override">Mi respuesta también es correcta</button></div>' : ''}</div>`;
  }
  const pct = s.i / s.items.length * 100;
  const canCheck = ex.t === 'mc' ? q.sel != null : ex.t === 'ord' ? q.built.length > 0 : !!(q.text || '').trim();
  return `<div class="quiz">
    <div class="quiz-top"><button class="icon-btn" data-act="quit" aria-label="Salir">${ic('x')}</button>${bar(pct)}<span class="small muted num">${s.i + 1}/${s.items.length}</span></div>
    <div class="row between"><span class="eyebrow">${esc(s.title)}</span>${L ? lvChip(L.level) : ''}</div>
    <div class="qcard"><span class="qtype">${TYPE_LABEL[ex.t] || ''}${L && s.mode !== 'lesson' ? ' · ' + esc(L.title) : ''}</span>${body}${fb}
      <div class="qactions"><span class="small muted">${isTest ? 'Examen: verás las correcciones al final.' : 'Pulsa Intro para continuar'}</span>
      ${it.done ? `<button class="btn primary" data-act="next" id="nextbtn">${s.i < s.items.length - 1 ? 'Siguiente' : 'Ver resultado'}${ic('right')}</button>`
        : `<button class="btn primary" data-act="check" ${canCheck ? '' : 'disabled'} id="checkbtn">Comprobar</button>`}</div>
    </div></div>`;
}
function viewResult() {
  const s = SESSION, wrong = s.items.filter(x => !x.correct);
  const st = starsFor(s.score);
  let headline = s.score >= 95 ? 'Impecable' : s.score >= 80 ? 'Muy bien' : s.score >= 60 ? 'Vas por buen camino' : 'Sigue practicando';
  let extra = '';
  if (s.mode === 'lesson') { const p = lp(s.lessonId); extra = `<p>Próximo repaso de esta lección: <strong>${esc(inDays(p.due))}</strong>. ${s.score < 60 ? 'Te recomendamos releer la teoría y repetir la práctica.' : ''}</p>`; }
  if (s.mode === 'test') { headline = s.score >= PASS_TEST ? `Nivel ${s.level} acreditado` : `Aún no: necesitas un ${PASS_TEST}%`; extra = s.score >= PASS_TEST ? `<p>Has demostrado el dominio de la gramática ${s.level}. ¡Siguiente parada: ${LEVELS[LEVELS.indexOf(s.level) + 1] || 'mantener el C2'}!</p>` : '<p>Repasa las lecciones de tus errores y vuelve a intentarlo en unos días.</p>'; }
  if (s.mode === 'review') extra = '<p>Hemos reprogramado tus lecciones según el resultado: las que dominas se espacian más; las que fallas vuelven antes.</p>';
  const nl = s.mode === 'lesson' ? (() => { const l = lessonById(s.lessonId); if (!l || l.ai) return null; const ls = levelLessons(l.level); return ls[ls.indexOf(l) + 1] || null; })() : null;
  return `<div class="quiz result">
    <div class="panel stack">
      <span class="eyebrow">${esc(s.title)}</span>
      <div class="score-big"><span class="pct">${s.score}%</span><div class="stack" style="gap:4px"><h2>${headline}</h2><div class="row">${s.mode !== 'test' ? stars(st) : ''}<span class="chip accent num">+${s.xp} XP</span><span class="chip num">${s.items.length - wrong.length} de ${s.items.length} correctas</span></div></div></div>
      ${extra}
      <div class="row">
        ${wrong.length ? `<button class="btn primary" data-act="retry-wrong">${ic('repeat')}Repetir mis fallos (${wrong.length})</button>` : ''}
        ${nl ? `<button class="btn ${wrong.length ? '' : 'primary'}" data-act="open-lesson" data-id="${esc(nl.id)}">Siguiente lección${ic('right')}</button>` : ''}
        ${s.lessonId ? `<button class="btn" data-act="open-lesson" data-id="${esc(s.lessonId)}">Volver a la lección</button>` : ''}
        <button class="btn ghost" data-act="nav" data-to="home">Ir al inicio</button>
      </div>
    </div>
    ${wrong.length ? `<h3>Aprende de tus errores</h3><div class="mlist">${wrong.map(it => `<div class="mitem"><span class="q">${esc(it.ex.t === 'tr' ? it.ex.q + ' → ' + it.ex.s : it.ex.q)}</span>${it.user ? `<span>Tu respuesta: <span class="yr">${esc(it.user)}</span></span>` : ''}<span>Correcta: <span class="cr">${esc(correctText(it.ex))}</span></span>${it.ex.e ? `<span class="ex-e">${esc(it.ex.e)}</span>` : ''}</div>`).join('')}</div>` : ''}
  </div>`;
}
function focusAnswer() { setTimeout(() => { const a = $('#ans'); if (a && !a.disabled) { a.focus(); if (a.tagName === 'TEXTAREA') { a.setSelectionRange(a.value.length, a.value.length); } } }, 30); }

/* =========================================================
   Vista: Repaso
   ========================================================= */
function viewReview() {
  const due = dueLessons();
  const upcoming = [];
  for (let i = 1; i <= 14; i++) { const k = addDays(today(), i); const n = allLessons().filter(l => lp(l.id) && lp(l.id).due === k).length; if (n) upcoming.push({k, n}); }
  const pm = pendingMistakes().length, v = vocabStats();
  const doneN = allLessons().filter(l => lp(l.id) && lp(l.id).status === 'done').length;
  return `${pageHead('Repaso', 'Repasar justo antes de olvidar es la forma más eficaz de fijar lo aprendido. Cada lección completada vuelve a los 1, 3, 7, 14, 30, 60 y 120 días si la aciertas; si fallas, vuelve antes.')}
  <section class="panel stack" style="border-left:4px solid ${due.length ? 'var(--bad)' : 'var(--good)'}">
    <div class="row between"><h3>Repaso espaciado de hoy</h3><span class="chip ${due.length ? 'bad' : 'good'}">${due.length ? plural(due.length, 'lección', 'lecciones') : 'Al día'}</span></div>
    ${due.length ? `<div class="row">${due.map(l => `<span class="chip">${esc(l.level)} · ${esc(l.title)}</span>`).join('')}</div><button class="btn primary lg" data-act="start-review" style="align-self:flex-start">${ic('play')}Empezar repaso</button>`
      : `<p class="muted">${doneN ? 'No tienes lecciones pendientes de repaso hoy.' : 'Cuando completes tu primera lección, aquí aparecerán sus repasos.'}</p>`}
    ${upcoming.length ? `<div class="stack" style="gap:6px"><span class="eyebrow">Próximos repasos</span><div class="row">${upcoming.map(u => `<span class="chip num">${esc(fmtShort(u.k))}: ${u.n}</span>`).join('')}</div></div>` : ''}
  </section>
  <section class="panel stack">
    <h3>Repaso mixto (práctica intercalada)</h3>
    <p class="small muted">Mezcla ejercicios de varias lecciones. Es más difícil, pero te entrena para elegir la estructura correcta, como al hablar.</p>
    <div class="row"><span class="seg">${['all'].concat(LEVELS).map(L => `<button data-act="rlevel" data-lv="${L}" aria-pressed="${UI.reviewLevel === L}">${L === 'all' ? 'Todo' : L}</button>`).join('')}</span>
    <span class="seg">${[10, 15, 25].map(n => `<button data-act="rcount" data-n="${n}" aria-pressed="${UI.reviewCount === n}">${n}</button>`).join('')}</span></div>
    <button class="btn" data-act="start-mixed" data-lv="${UI.reviewLevel}" style="align-self:flex-start">${ic('shuffle')}Empezar repaso mixto</button>
    <p class="small muted">${doneN ? 'Usa las lecciones que ya has completado.' : 'Aún no has completado lecciones: usará las de tu nivel actual.'}</p>
  </section>
  <section class="grid-2">
    <div class="panel stack"><h3>Tus errores</h3><p class="muted">${pm ? `${plural(pm, 'error pendiente', 'errores pendientes')} de superar.` : 'No tienes errores pendientes.'}</p><button class="btn" data-act="start-mistakes" ${pm ? '' : 'disabled'}>${ic('alert')}Practicar errores</button></div>
    <div class="panel stack"><h3>Vocabulario</h3><p class="muted">${v.due} tarjetas para repasar hoy · ${v.newLeft} nuevas disponibles.</p><button class="btn" data-act="start-flash" ${v.due + v.newLeft ? '' : 'disabled'}>${ic('cards')}Repasar tarjetas</button></div>
  </section>
  <section class="panel stack"><h3>Exámenes de nivel</h3><p class="small muted">Haz el examen de tu nivel cada 4–6 semanas para medir tu avance. Se aprueba con un ${PASS_TEST}%.</p>
    <div class="row">${LEVELS.map(L => { const t = S.progress.tests[L]; return `<button class="btn" data-act="start-test" data-lv="${L}">${lvChip(L)}${t ? `<span class="num small">${t.best}%</span>` : ''}${t && t.passed ? ic('check') : ''}</button>`; }).join('')}</div></section>`;
}

/* =========================================================
   Vista: Mis errores
   ========================================================= */
function mistakeCard(m) {
  const l = m.lesson ? lessonById(m.lesson) : null;
  const ex = m.ex || {};
  const src = m.src === 'writing' ? 'Redacción' : m.src === 'vocab' ? 'Vocabulario' : m.src === 'ai' ? 'Práctica IA' : null;
  const exp = AI.explain[m.k];
  return `<div class="mitem">
    <div class="row between"><div class="row" style="gap:6px">${l ? lvChip(l.level) + `<button class="link small" data-act="open-lesson" data-id="${esc(l.id)}">${esc(l.title)}</button>` : ''}${src ? `<span class="chip">${src}</span>` : ''}</div>
    <div class="row" style="gap:6px">${m.resolved ? '<span class="chip good">Superado</span>' : `<span class="chip warn num">${m.streak || 0}/2 aciertos</span>`}<span class="chip num" title="Veces que lo has fallado">×${m.count}</span></div></div>
    <span class="q">${esc(ex.t === 'tr' ? ex.q + ' → ' + ex.s : ex.q || '')}</span>
    ${m.your ? `<span>Tu respuesta: <span class="yr">${esc(m.your)}</span></span>` : ''}
    ${ex.t ? `<span>Correcta: <span class="cr">${esc(correctText(ex))}</span></span>` : ''}
    ${ex.e ? `<span class="ex-e">${esc(ex.e)}</span>` : ''}
    ${exp && (exp.text || exp.busy || exp.err) ? `<div class="ai-out">${exp.busy && !exp.text ? '<span class="thinking"><i></i><i></i><i></i> Pensando…</span>' : ''}${exp.text ? md(exp.text) : ''}${exp.err ? `<p style="color:var(--bad)">${esc(exp.err)}</p>` : ''}</div>` : ''}
    <div class="row" style="gap:6px">${aiState === 'ready' ? `<button class="btn sm" data-act="explain" data-k="${esc(m.k)}" ${exp && exp.busy ? 'disabled' : ''}>${ic('spark')}Explícamelo mejor</button>` : ''}<button class="btn ghost sm" data-act="del-mistake" data-k="${esc(m.k)}">${ic('trash')}Quitar</button></div>
  </div>`;
}
function viewMistakes() {
  const all = Object.values(S.mistakes.items), pend = all.filter(m => !m.resolved), res = all.filter(m => m.resolved);
  const per = {};
  for (const m of pend) { const id = m.lesson || ('_' + (m.src || 'otros')); per[id] = (per[id] || 0) + 1; }
  const top = Object.entries(per).sort((a, b) => b[1] - a[1]).slice(0, 6);
  const maxN = top.length ? top[0][1] : 1;
  const f = UI.mistFilter;
  const list = (f === 'pending' ? pend : f === 'resolved' ? res : all).slice().sort((a, b) => (b.count - a.count) || (b.last - a.last));
  return `${pageHead('Mis errores', 'Tu cuaderno de errores. Cada fallo se guarda con la respuesta correcta y su explicación. Se considera superado cuando lo aciertas dos veces en sesiones distintas.')}
  <section class="grid-3">
    <div class="stat"><span>Pendientes</span><b>${pend.length}</b></div>
    <div class="stat"><span>Superados</span><b>${res.length}</b></div>
    <div class="stat"><span>Fallos registrados</span><b>${all.reduce((a, m) => a + (m.count || 0), 0)}</b></div>
  </section>
  <section class="grid-2">
    <div class="panel stack"><h3>Practica lo que fallas</h3><p class="muted">Una sesión con hasta 12 de tus errores pendientes, empezando por los que más se repiten.</p><button class="btn primary" data-act="start-mistakes" ${pend.length ? '' : 'disabled'} style="align-self:flex-start">${ic('repeat')}Practicar mis errores</button></div>
    <div class="panel stack"><h3>Dónde fallas más</h3>${top.length ? `<div class="hbars">${top.map(([id, n]) => { const l = lessonById(id); const name = l ? l.title : id === '_writing' ? 'Redacciones' : id === '_vocab' ? 'Vocabulario' : 'Otros'; const lv = l ? l.level : null; return `<div class="hbar" style="grid-template-columns:minmax(0,1.3fr) minmax(0,1fr) 28px;--lvc:${lv ? `var(--${lv.toLowerCase()})` : 'var(--muted)'}"><span class="small" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${esc(name)}">${lv ? esc(lv) + ' · ' : ''}${esc(name)}</span><div class="track"><i style="width:${n / maxN * 100}%"></i></div><span class="num small">${n}</span></div>`; }).join('')}</div>` : '<div class="empty small">Sin errores pendientes.</div>'}</div>
  </section>
  <div class="row between"><span class="seg">${[['pending', 'Pendientes'], ['resolved', 'Superados'], ['all', 'Todos']].map(([k, t]) => `<button data-act="mfilter" data-f="${k}" aria-pressed="${f === k}">${t}</button>`).join('')}</span></div>
  ${list.length ? `<div class="mlist">${list.slice(0, 120).map(mistakeCard).join('')}</div>` : `<div class="empty">${f === 'resolved' ? 'Aún no has superado ningún error.' : 'No hay errores aquí. Cuando falles un ejercicio, lo verás en esta lista.'}</div>`}`;
}

/* =========================================================
   Vista: Vocabulario
   ========================================================= */
function deckProgress(d) { let l = 0, seen = 0; for (const w of d.words) { const c = card(cardKey(d.id, w[0])); if (c) seen++; const st = wordState(c); if (st === 'learned' || st === 'mastered') l++; } return {l, seen, n:d.words.length}; }
function viewVocab() {
  const v = vocabStats();
  const f = UI.vocabLevel;
  const decks = allDecks().filter(d => f === 'all' || d.level === f || (f === 'mine' && d.id === 'mine'));
  return `${pageHead('Vocabulario', 'Tarjetas con repetición espaciada: cada palabra vuelve justo cuando estás a punto de olvidarla. Aprende siempre la palabra dentro de una frase.')}
  <section class="panel stack">
    <div class="row between"><h3>Hoy</h3><span class="chip num">${v.learned} aprendidas · ${v.mastered} dominadas · ${v.total} en total</span></div>
    <p class="muted">${v.due} tarjetas para repasar y ${v.newLeft} palabras nuevas disponibles hoy.</p>
    <div class="row"><button class="btn primary lg" data-act="start-flash" ${v.due + v.newLeft ? '' : 'disabled'}>${ic('play')}Estudiar ahora</button><span class="small muted">Las nuevas se toman primero de los mazos de tu nivel (${workingLevel()}) y de falsos amigos.</span></div>
  </section>
  <div class="row between"><span class="seg">${['all'].concat(LEVELS).concat(S.vocab.mine.length ? ['mine'] : []).map(L => `<button data-act="vlevel" data-lv="${L}" aria-pressed="${f === L}">${L === 'all' ? 'Todos' : L === 'mine' ? 'Mis palabras' : L}</button>`).join('')}</span></div>
  <div class="decks">${decks.map(d => { const p = deckProgress(d); return `<div class="deck"><div class="row between">${d.id === 'mine' ? '<span class="chip accent">Personal</span>' : lvChip(d.level)}<span class="small muted num">${p.n} palabras</span></div><h3>${esc(d.title)}</h3><p class="small muted">${esc(d.es)}</p>${bar(p.n ? p.l / p.n * 100 : 0)}<span class="small muted num">${p.l} aprendidas · ${p.seen} vistas</span><div class="row"><button class="btn sm primary" data-act="deck-study" data-id="${d.id}">Estudiar</button><button class="btn sm" data-act="deck-quiz" data-id="${d.id}">Quiz</button><button class="btn sm ghost" data-act="open-deck" data-id="${d.id}">Ver lista</button></div></div>`; }).join('')}</div>
  <section class="panel stack"><h3>Añade tus propias palabras</h3><p class="small muted">¿Has encontrado una palabra útil en una serie, un artículo o una conversación? Guárdala aquí y entrará en tus repasos.</p>
    <div class="grid-2"><label class="field">Palabra o expresión en inglés<input type="text" id="mw-w" placeholder="e.g. to take something for granted"></label><label class="field">Significado en español<input type="text" id="mw-es" placeholder="dar algo por sentado"></label></div>
    <label class="field">Frase de ejemplo (opcional)<input type="text" id="mw-ex" placeholder="Don't take your health for granted."></label>
    <button class="btn" data-act="add-word" style="align-self:flex-start">${ic('plus')}Añadir palabra</button>
  </section>`;
}
function viewDeck() {
  const d = deckById(R.p.id);
  if (!d) return `${backBtn('Vocabulario')}<div class="empty">Mazo no encontrado.</div>`;
  const lbl = {new:'Nueva', learning:'Aprendiendo', learned:'Aprendida', mastered:'Dominada'}, cls = {new:'', learning:'warn', learned:'accent', mastered:'good'};
  return `${backBtn('Vocabulario')}${pageHead(esc(d.title), esc(d.es), d.id === 'mine' ? '' : lvChip(d.level))}
  <div class="row"><button class="btn primary" data-act="deck-study" data-id="${d.id}">${ic('play')}Estudiar este mazo</button><button class="btn" data-act="deck-quiz" data-id="${d.id}">${ic('target')}Quiz de 10 preguntas</button></div>
  <div class="wordlist">${d.words.map((w, i) => { const st = wordState(card(cardKey(d.id, w[0]))); return `<div class="wl">${speakBtn(w[0]) || '<span></span>'}<div><b>${esc(w[0])}</b><span class="d">${esc(w[1])}${w[1] ? ' · ' : ''}${esc(w[3])}</span></div><div class="wl-ex"><span class="d">${esc(w[2])}</span><div><em>${esc(w[4])}</em></div></div><div class="wl-st row" style="gap:6px"><span class="chip ${cls[st]}">${lbl[st]}</span>${d.id === 'mine' ? `<button class="icon-btn" data-act="del-word" data-i="${i}" aria-label="Eliminar">${ic('trash')}</button>` : ''}</div></div>`; }).join('')}</div>`;
}
function buildFlashQueue(deckId) {
  const t = today(), q = [];
  const decks = deckId ? [deckById(deckId)].filter(Boolean) : allDecks();
  for (const d of decks) for (const w of d.words) { const k = cardKey(d.id, w[0]); const c = card(k); if (c && c.due && c.due <= t) q.push({k, d:d.id, w}); }
  let newLeft = Math.max(0, S.progress.settings.newPerDay - actRO().newW);
  if (deckId) newLeft = Math.max(newLeft, 10);
  if (newLeft) {
    const W = workingLevel();
    const order = deckId ? decks : decks.slice().sort((a, b) => {
      const sc = d => d.id === 'v-false-friends' ? -1 : d.id === 'mine' ? 0 : d.level === W ? 1 : LEVELS.indexOf(d.level) < LEVELS.indexOf(W) ? 2 : 3 + LEVELS.indexOf(d.level);
      return sc(a) - sc(b);
    });
    outer: for (const d of order) for (const w of d.words) { const k = cardKey(d.id, w[0]); if (!card(k)) { q.push({k, d:d.id, w, isNew:true}); if (--newLeft <= 0) break outer; } }
  }
  return shuffle(q.filter(x => !x.isNew)).concat(q.filter(x => x.isNew)).slice(0, 80);
}
function startFlash(deckId) {
  const queue = buildFlashQueue(deckId);
  if (!queue.length) { toast('No hay tarjetas pendientes ahora mismo.'); return; }
  FLASH = {queue, i:0, revealed:false, done:0, total:queue.length, deckId, dir:S.progress.settings.dir || 'en', xp:0};
  go('flash');
}
function viewFlash() {
  const f = FLASH;
  if (!f) return `<div class="empty">No hay sesión de tarjetas activa.</div>`;
  if (f.i >= f.queue.length) {
    return `<div class="quiz result"><div class="panel stack"><span class="eyebrow">Vocabulario</span><div class="score-big"><span class="pct num">${f.done}</span><div class="stack" style="gap:4px"><h2>tarjetas repasadas</h2><span class="chip accent num">+${f.xp} XP</span></div></div><p class="muted">Las palabras volverán en el momento justo para fijarlas en tu memoria.</p><div class="row"><button class="btn primary" data-act="nav" data-to="vocab">Volver a Vocabulario</button><button class="btn" data-act="nav" data-to="home">Ir al inicio</button></div></div></div>`;
  }
  const it = f.queue[f.i], [w, pos, def, es, exs] = it.w;
  const front = f.dir === 'en'
    ? `<span class="pos">${esc(pos)}</span><div class="word">${esc(w)}</div>${speakBtn(w)}`
    : `<span class="pos">¿Cómo se dice en inglés?</span><div class="es-big">${esc(es)}</div><p class="def">${esc(def)}</p>`;
  const backSide = f.dir === 'en'
    ? `<div class="es-big">${esc(es)}</div><p class="def">${esc(def)}</p>${exs ? `<div class="exs-line">${esc(exs)} ${speakBtn(exs)}</div>` : ''}`
    : `<div class="word">${esc(w)}</div>${speakBtn(w)}${exs ? `<div class="exs-line">${esc(exs)}</div>` : ''}`;
  return `<div class="quiz">
    <div class="quiz-top"><button class="icon-btn" data-act="quit-flash" aria-label="Salir">${ic('x')}</button>${bar(f.i / f.queue.length * 100)}<span class="small muted num">${f.i + 1}/${f.queue.length}</span></div>
    <div class="row between"><span class="row" style="gap:6px">${it.isNew ? '<span class="chip accent">Nueva</span>' : '<span class="chip">Repaso</span>'}</span><span class="seg"><button data-act="fdir" data-d="en" aria-pressed="${f.dir === 'en'}">EN → ES</button><button data-act="fdir" data-d="es" aria-pressed="${f.dir === 'es'}">ES → EN</button></span></div>
    <div class="flash"><div class="card">${front}${f.revealed ? `<hr style="width:60%;border:0;border-top:1px solid var(--line)">${backSide}` : ''}</div></div>
    ${f.revealed ? `<div class="grades">${[[1, 'Otra vez'], [2, 'Difícil'], [3, 'Bien'], [4, 'Fácil']].map(([g, t]) => `<button class="g${g}" data-act="grade" data-g="${g}">${t}<small>${previewIvl(it.k, g)}</small></button>`).join('')}</div><p class="small muted" style="text-align:center">Teclas 1–4 para valorar</p>`
      : `<button class="btn primary lg" data-act="reveal" style="align-self:center">Mostrar respuesta</button><p class="small muted" style="text-align:center">Intenta recordarla antes de girar la tarjeta (Espacio)</p>`}
  </div>`;
}
function gradeFlash(g) {
  const f = FLASH, it = f.queue[f.i];
  const wasNew = !card(it.k);
  gradeCard(it.k, g);
  const a = act(); a.cards++; if (wasNew) a.newW++;
  const xp = g === 1 ? 1 : 2; addXP(xp); f.xp += xp; f.done++;
  if (g === 1) { const again = Object.assign({}, it, {isNew:false}); f.queue.splice(Math.min(f.queue.length, f.i + 4), 0, again); }
  f.i++; f.revealed = false;
  touch('vocab', 'progress');
  render();
}
function startDeckQuiz(id) {
  const d = deckById(id);
  if (!d || d.words.length < 4) { toast('Este mazo necesita al menos 4 palabras para el quiz.'); return; }
  const picks = shuffle(d.words).slice(0, 10);
  const items = picks.map((w, n) => {
    let ex;
    if (n % 2 === 0) {
      const others = shuffle(d.words.filter(x => x[0] !== w[0])).slice(0, 3).map(x => x[0]);
      const o = shuffle([w[0]].concat(others));
      ex = {t:'mc', q:`Which word or expression means: "${w[2] || w[3]}"?`, o, a:o.indexOf(w[0]), e:`${w[0]} = ${w[3]}. ${w[4] || ''}`.trim()};
    } else {
      const ans = String(w[0]).split(' / ').map(x => x.replace(/\s*\(.*?\)\s*/g, ' ').trim()).filter(Boolean);
      ex = {t:'gap', q:`En inglés: «${w[3]}» → ___`, a:ans.concat([w[0]]), e:`${w[4] || ''}`};
    }
    return mkItem(ex, 'v:' + cardKey(d.id, w[0]) + ':' + ex.t, null, 'vocab');
  });
  startSession({mode:'vocab', title:'Quiz · ' + d.title, items});
}

/* =========================================================
   Vista: Tutor IA
   ========================================================= */
function aiUnavailable() {
  return `<section class="panel stack"><h3>${aiState === 'unknown' ? 'Conectando con Claude…' : 'El tutor IA necesita Claude'}</h3><p class="muted">${aiState === 'unknown' ? 'Un momento.' : 'Estas funciones usan Claude con tu propia cuenta. Están disponibles cuando abres esta página dentro de Claude y permites que la use. Mientras tanto, todo lo demás (lecciones, repasos, errores y vocabulario) funciona igual.'}</p></section>`;
}
function viewTutor() {
  const tab = UI.tutorTab;
  const tabs = `<div class="seg">${[['write', 'Corrector de redacción'], ['chat', 'Pregunta al tutor'], ['gen', 'Lección a medida']].map(([k, t]) => `<button data-act="ttab" data-t="${k}" aria-pressed="${tab === k}">${t}</button>`).join('')}</div>`;
  const head = pageHead('Tutor IA', 'Claude corrige tus textos y explica cada error, responde tus dudas de gramática y crea lecciones a medida sobre lo que necesites.');
  if (aiState !== 'ready') return head + aiUnavailable();
  let body = '';
  if (tab === 'write') {
    const W = AI.write, lv = W.level || workingLevel();
    body = `<section class="panel stack">
      <div class="row between"><h3>Escribe y recibe correcciones</h3><span class="seg">${LEVELS.map(L => `<button data-act="wlevel" data-lv="${L}" aria-pressed="${lv === L}">${L}</button>`).join('')}</span></div>
      <p class="small muted">Elige un tema o escribe sobre lo que quieras (80–250 palabras). Los errores se guardan en tu cuaderno como ejercicios.</p>
      <div class="chips">${WRITING_PROMPTS[lv].map((p, i) => `<button class="wchip" style="font-weight:500;font-size:.9rem;text-align:left" data-act="wprompt" data-i="${i}">${esc(p)}</button>`).join('')}</div>
      ${W.prompt ? `<div class="call note"><span class="lbl">Tema</span><p>${esc(W.prompt)}</p></div>` : ''}
      <label class="field">Tu texto en inglés<textarea id="wtext" rows="9" placeholder="Start writing here…">${esc(W.text)}</textarea></label>
      <div class="row between"><span class="small muted num" id="wcount">${(W.text.trim().match(/\S+/g) || []).length} palabras</span><div class="row">${W.busy ? `<span class="thinking"><i></i><i></i><i></i> Corrigiendo…</span><button class="btn ghost" data-act="wstop">Detener</button>` : `<button class="btn primary" data-act="wcheck">${ic('pen')}Corregir mi texto</button>`}</div></div>
      ${W.err ? `<p style="color:var(--bad)">${esc(W.err)}</p>` : ''}
    </section>${W.result ? writingResult(W.result) : ''}
    ${S.custom.writing.length ? `<section class="panel stack"><h3>Tus redacciones anteriores</h3>${S.custom.writing.slice().reverse().map((w, i) => `<details class="acc"><summary><span>${esc(fmtShort(w.date))} · ${esc(w.level || '')} · ${esc((w.text || '').slice(0, 60))}…</span><span class="chip num">${w.result && w.result.errors ? plural(w.result.errors.length, 'error', 'errores') : ''}</span></summary><div style="padding:16px">${writingResult(w.result, true)}</div></details>`).join('')}</section>` : ''}`;
  } else if (tab === 'chat') {
    const C = AI.chat;
    body = `<section class="panel stack">
      <div class="chat" id="chatlog">${C.turns.length ? C.turns.map((t, i) => `<div class="msg ${t.role === 'user' ? 'me' : 'bot'}" ${i === C.turns.length - 1 && t.role === 'assistant' ? 'id="streaming"' : ''}>${t.role === 'user' ? esc(t.content) : md(t.content)}</div>`).join('')
        : `<div class="empty small">Pregunta cualquier duda: "¿Cuál es la diferencia entre <em>I've been</em> e <em>I went</em>?", "¿Cuándo uso <em>whom</em>?", o escribe una frase en inglés para que la corrija.</div>`}
      ${C.busy && (!C.turns.length || C.turns[C.turns.length - 1].role === 'user') ? '<div class="msg bot"><span class="thinking"><i></i><i></i><i></i> Pensando…</span></div>' : ''}</div>
      ${C.err ? `<p style="color:var(--bad)">${esc(C.err)}</p>` : ''}
      <label class="field">Tu pregunta<textarea id="chatin" rows="3" placeholder="Escribe tu duda en español o en inglés…">${esc(C.draft)}</textarea></label>
      <div class="row between"><button class="btn ghost sm" data-act="chat-clear" ${C.turns.length ? '' : 'disabled'}>Nueva conversación</button>${C.busy ? `<button class="btn" data-act="chat-stop">Detener</button>` : `<button class="btn primary" data-act="chat-send">${ic('chat')}Enviar</button>`}</div>
    </section>`;
  } else {
    const Gn = AI.gen, lv = Gn.level || workingLevel();
    body = `<section class="panel stack"><h3>Crea una lección sobre lo que necesites</h3>
      <p class="small muted">Por ejemplo: "preposiciones de tiempo in/on/at", "cómo usar 'would' para hábitos pasados", "conectores para un ensayo de opinión", "vocabulario y gramática para entrevistas de trabajo".</p>
      <label class="field">Tema<input type="text" id="gentopic" value="${esc(Gn.topic)}" placeholder="¿Qué quieres aprender?"></label>
      <div class="row"><span class="seg">${LEVELS.map(L => `<button data-act="glvl" data-lv="${L}" aria-pressed="${lv === L}">${L}</button>`).join('')}</span>${Gn.busy ? '<span class="thinking"><i></i><i></i><i></i> Creando la lección… (puede tardar un minuto)</span>' : `<button class="btn primary" data-act="gen-lesson">${ic('spark')}Crear lección</button>`}</div>
      ${Gn.err ? `<p style="color:var(--bad)">${esc(Gn.err)}</p>` : ''}
    </section>
    ${S.custom.lessons.length ? `<section class="stack"><h3>Tus lecciones creadas</h3><div class="lessons">${lessonRows(S.custom.lessons.slice().reverse(), true)}</div></section>` : ''}`;
  }
  return head + tabs + body;
}
function writingResult(r, compact) {
  if (!r) return '';
  return `<section class="${compact ? 'stack' : 'panel stack'}">
    <div class="row between"><h3>Corrección</h3><div class="row">${r.level ? `<span class="chip accent">Nivel estimado: ${esc(r.level)}</span>` : ''}${Array.isArray(r.errors) ? `<span class="chip ${r.errors.length ? 'bad' : 'good'}">${plural(r.errors.length, 'error', 'errores')}</span>` : ''}</div></div>
    ${r.summary ? `<p>${esc(r.summary)}</p>` : ''}
    ${Array.isArray(r.errors) && r.errors.length ? `<div class="err-list">${r.errors.map(e => `<div class="err"><span><span class="o">${esc(e.original)}</span> → <span class="c">${esc(e.correction)}</span>${e.type ? ` <span class="chip">${esc(e.type)}</span>` : ''}</span><span class="small">${esc(e.explanation)}</span></div>`).join('')}</div>` : ''}
    ${r.corrected ? `<div class="stack" style="gap:6px"><span class="eyebrow">Versión corregida</span><div class="call note"><p style="white-space:pre-wrap">${esc(r.corrected)}</p></div></div>` : ''}
    ${Array.isArray(r.upgrades) && r.upgrades.length ? `<div class="stack" style="gap:6px"><span class="eyebrow">Para sonar más avanzado</span>${r.upgrades.map(u => `<div class="call tip"><p><span class="o" style="text-decoration:none">${esc(u.from)}</span> → <strong>${esc(u.to)}</strong></p><p class="small">${esc(u.why)}</p></div>`).join('')}</div>` : ''}
    ${Array.isArray(r.strengths) && r.strengths.length ? `<div class="stack" style="gap:6px"><span class="eyebrow">Puntos fuertes</span><ul style="margin:0;padding-left:1.2em">${r.strengths.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>` : ''}
  </section>`;
}
async function runWritingCheck() {
  const W = AI.write; const text = (W.text || '').trim(); const lv = W.level || workingLevel();
  if ((text.match(/\S+/g) || []).length < 15) { W.err = 'Escribe al menos 15 palabras para poder corregir tu texto.'; render(); return; }
  W.busy = true; W.err = ''; W.result = null; W.ctl = new AbortController(); render();
  const prompt = `You are an expert Cambridge English examiner and teacher. A Spanish-speaking learner (current CEFR level ${lv}, aiming for C2) wrote the text below${W.prompt ? ` for this task: "${W.prompt}"` : ''}.
Correct it thoroughly but fairly. Explanations must be in Spanish, clear and short (max 30 words each). Keep British or American spelling consistent with the learner.
Reply with ONLY one JSON object of this shape:
{"level":"estimated CEFR level of the text, e.g. B1+","summary":"2-3 frases en español: valoración global y la prioridad principal de mejora","errors":[{"original":"exact wrong fragment copied from the text","correction":"corrected fragment","sentence":"the full original sentence containing the error","corrected_sentence":"that full sentence corrected","type":"grammar|vocabulary|spelling|punctuation|word order|register","explanation":"explicación en español"}],"corrected":"the whole text corrected, keeping the learner's ideas and style","upgrades":[{"from":"a correct but basic expression from the text","to":"a more advanced natural alternative (C1/C2)","why":"por qué suena mejor, en español"}],"strengths":["punto fuerte en español"]}
List at most 12 errors, the most important first. Give 2-4 upgrades and 1-3 strengths.

TEXT:
"""${text.slice(0, 6000)}"""`;
  try {
    const r = await ask(prompt, {json:true, signal:W.ctl.signal});
    if (!r || typeof r !== 'object') throw {code:'invalid_json'};
    r.errors = Array.isArray(r.errors) ? r.errors.filter(e => e && e.original && e.correction).slice(0, 15) : [];
    W.result = r;
    let added = 0;
    for (const e of r.errors) {
      const qs = String(e.sentence || e.original).slice(0, 400), as = String(e.corrected_sentence || e.correction).slice(0, 400);
      const k = 'w:' + hash(qs + '|' + as);
      if (!S.mistakes.items[k]) { S.mistakes.items[k] = {k, ex:{t:'fix', q:qs, a:[as], e:String(e.explanation || '').slice(0, 300)}, lesson:null, src:'writing', your:qs, count:1, streak:0, first:Date.now(), last:Date.now(), resolved:false}; added++; }
    }
    S.custom.writing.push({date:today(), level:lv, prompt:W.prompt, text:text.slice(0, 3000), result:{level:r.level, summary:r.summary, errors:r.errors.map(e => ({original:e.original, correction:e.correction, type:e.type, explanation:e.explanation})), corrected:String(r.corrected || '').slice(0, 4000), upgrades:(r.upgrades || []).slice(0, 4), strengths:(r.strengths || []).slice(0, 3)}});
    addXP(30);
    touch('mistakes', 'custom', 'progress');
    if (added) toast(`${plural(added, 'error guardado', 'errores guardados')} en tu cuaderno`);
  } catch (e) { W.err = aiErr(e); }
  W.busy = false; W.ctl = null; render();
}
const TUTOR_RULES = `Eres un profesor experto de inglés (certificado Cambridge CELTA/DELTA) para un hispanohablante que tiene nivel B1 y quiere llegar a C2.
Reglas: responde en español de forma clara y práctica; pon los ejemplos en inglés en **negrita** con su traducción; usa listas cortas; señala la "trampa" típica del hispanohablante cuando exista; no te extiendas más de ~250 palabras salvo que te lo pidan.
Si el alumno escribe una frase en inglés, corrígela primero (muestra la versión correcta y explica cada cambio) y luego responde.`;
async function chatSend() {
  const C = AI.chat; const msg = (C.draft || '').trim(); if (!msg || C.busy) return;
  C.turns.push({role:'user', content:msg}); C.draft = ''; C.busy = true; C.err = ''; C.ctl = new AbortController(); render(); scrollChat();
  const turns = C.turns.slice(-12);
  const input = [{role:'user', content:TUTOR_RULES}].concat(turns[0].role === 'assistant' ? turns.slice(1) : turns);
  let started = false;
  try {
    const {text} = await ask(input, {cache:false, signal:C.ctl.signal, onText:({text}) => {
      if (!started) { C.turns.push({role:'assistant', content:text}); started = true; render(); }
      else { C.turns[C.turns.length - 1].content = text; const el = $('#streaming'); if (el) el.innerHTML = md(text); }
      scrollChat();
    }});
    if (!started) C.turns.push({role:'assistant', content:text}); else C.turns[C.turns.length - 1].content = text;
    addXP(3); touch('progress');
  } catch (e) {
    if (e && e.text && started) C.turns[C.turns.length - 1].content = e.text;
    else if (started) C.turns.pop();
    C.err = aiErr(e);
  }
  C.busy = false; C.ctl = null; render(); scrollChat();
}
function scrollChat() { const el = $('#chatlog'); if (el) el.lastElementChild && el.lastElementChild.scrollIntoView({block:'nearest'}); }
async function genExtra(id) {
  const l = lessonById(id); if (!l) return;
  const st = AI.extra[id] = {busy:true, err:''}; render();
  const errs = Object.values(S.mistakes.items).filter(m => m.lesson === id).slice(-6).map(m => `- "${m.ex && m.ex.q}" → wrote "${m.your}", correct "${m.ex ? correctText(m.ex) : ''}"`).join('\n');
  const prompt = `You are an expert English teacher creating practice for a Spanish-speaking learner at CEFR ${l.level}.
Topic: ${l.title} (${l.es}). Learning goal: ${l.goal}
${errs ? 'The learner recently made these mistakes on this topic:\n' + errs + '\nInclude exercises that target those weaknesses.\n' : ''}
Create 8 NEW exercises on this topic, different from textbook clichés: 3 "mc", 2 "gap", 2 "fix" and 1 "tr". Natural, correct English; exactly one correct answer for mc; for gap/tr list every acceptable answer.
${EX_SCHEMA}
Reply with ONLY: {"exercises":[...]}`;
  try {
    const r = await ask(prompt, {json:true, cache:false});
    const list = (r && Array.isArray(r.exercises) ? r.exercises : Array.isArray(r) ? r : []).map(validEx).filter(Boolean);
    if (!list.length) throw {code:'invalid_json'};
    st.busy = false;
    startSession({mode:'ai', title:'Práctica extra · ' + l.title, lessonId:id, items:list.map(ex => mkItem(ex, 'ai:' + id + ':' + hash(ex.q), id, 'ai'))});
    return;
  } catch (e) { st.err = aiErr(e); }
  st.busy = false; render();
}
async function explainMistake(k) {
  const m = S.mistakes.items[k]; if (!m || !m.ex) return;
  const st = AI.explain[k] = {busy:true, text:'', err:''}; render();
  const l = m.lesson ? lessonById(m.lesson) : null;
  const prompt = `${TUTOR_RULES}

Explica a fondo este error para que no lo vuelva a cometer${l ? ` (tema: ${l.title}, nivel ${l.level})` : ''}:
Ejercicio: ${m.ex.t === 'tr' ? m.ex.q + ' → ' + m.ex.s + ' (palabra clave: ' + m.ex.k + ')' : m.ex.q}
${m.ex.t === 'mc' ? 'Opciones: ' + m.ex.o.join(' / ') + '\n' : ''}Respuesta del alumno: ${m.your || '(sin respuesta)'}
Respuesta correcta: ${correctText(m.ex)}
Incluye: 1) por qué su respuesta es incorrecta (o en qué contexto sí serviría), 2) la regla en una frase, 3) tres ejemplos nuevos correctos, 4) un truco para recordarlo.`;
  try { await ask(prompt, {modelTier:'quick', onText:({text}) => { st.text = text; render(); }}); }
  catch (e) { st.err = aiErr(e); }
  st.busy = false; render();
}
async function genLesson() {
  const Gn = AI.gen; const topic = (Gn.topic || '').trim(); const lv = Gn.level || workingLevel();
  if (topic.length < 3) { Gn.err = 'Escribe el tema que quieres aprender.'; render(); return; }
  Gn.busy = true; Gn.err = ''; render();
  const prompt = `You are an expert English grammar teacher writing a complete lesson for a Spanish-speaking learner at CEFR ${lv} who is aiming for C2.
Topic requested by the learner: "${topic.slice(0, 200)}"
Write the theory in Spanish (explanations) with MANY English examples, using EXACTLY this lightweight markup, one item per line:
"## Título de sección" for sections (4-6 sections), "### Subtítulo" for subsections,
":: Structure formula" for a formula line,
"> English example with the key structure in **double asterisks** | traducción al español" for examples (at least 20 examples in total),
"x> wrong sentence | correct sentence" for typical mistakes,
"!trap: texto" for a typical Spanish-speaker trap, "!tip: texto" for a tip, "!note: texto" for a note,
tables as "| a | b |" lines with a "|---|---|" separator after the header row, and "- " for bullet points. Finish with a "## Resumen" section.
Then write 10 exercises.
${EX_SCHEMA}
Reply with ONLY one JSON object: {"title":"English title","es":"título en español","goal":"objetivo de la lección en español (una frase)","theory":"the markup text, lines separated by \\n","exercises":[...]}`;
  try {
    const r = await ask(prompt, {json:true, cache:false, modelTier:'default'});
    const ex = (r && Array.isArray(r.exercises) ? r.exercises : []).map(validEx).filter(Boolean);
    if (!r || typeof r.theory !== 'string' || r.theory.length < 200 || ex.length < 3) throw {code:'invalid_json'};
    const id = 'ai-' + Date.now().toString(36);
    S.custom.lessons.push({id, ai:true, level:lv, title:String(r.title || topic).slice(0, 120), es:String(r.es || topic).slice(0, 160), goal:String(r.goal || '').slice(0, 300), theory:r.theory.slice(0, 40000), ex, createdAt:today()});
    touch('custom');
    Gn.busy = false; Gn.topic = '';
    go('lesson', {id, tab:'theory'});
    return;
  } catch (e) { Gn.err = aiErr(e); }
  Gn.busy = false; render();
}

/* =========================================================
   Vista: Plan C2 y Ajustes
   ========================================================= */
function viewGuide() {
  return `${pageHead('Plan C2', 'Cómo llegar del B1 al C2: qué significa cada nivel, cuánto tiempo lleva, el método que funciona y una rutina concreta.')}
  ${GUIDE.map(g => { const {html} = renderMarkup(g.body); return `<details class="acc" ${UI.guideOpen === g.id ? 'open' : ''} data-gid="${g.id}"><summary>${esc(g.title)}${ic('right')}</summary><div class="theory">${html}</div></details>`; }).join('')}`;
}
function viewSettings() {
  const st = S.progress.settings;
  const segBtns = (act, key, opts) => `<span class="seg">${opts.map(([v, t]) => `<button data-act="${act}" data-v="${v}" aria-pressed="${String(st[key]) === String(v)}">${t}</button>`).join('')}</span>`;
  return `${pageHead('Ajustes', 'Personaliza tu ritmo de estudio y gestiona tu progreso.')}
  <section class="panel stack"><h3>Ritmo</h3>
    <div class="stack" style="gap:6px"><b>Objetivo diario de XP</b>${segBtns('set-goal', 'goal', [[30, 'Ligero · 30'], [50, 'Normal · 50'], [80, 'Intenso · 80'], [120, 'Muy intenso · 120']])}<span class="small muted">Un ejercicio acertado da 10 XP; una tarjeta, 2 XP.</span></div>
    <div class="stack" style="gap:6px"><b>Palabras nuevas al día</b>${segBtns('set-new', 'newPerDay', [[5, '5'], [10, '10'], [15, '15'], [20, '20']])}</div>
    <div class="stack" style="gap:6px"><b>Nivel de partida</b>${segBtns('set-start', 'start', LEVELS.map(L => [L, L]))}<span class="small muted">Las recomendaciones empiezan en este nivel. Tu test indicó B1.</span></div>
  </section>
  <section class="panel stack"><h3>Pronunciación</h3>
    ${ttsOK ? `<div class="stack" style="gap:6px"><b>Acento de la voz</b>${segBtns('set-voice', 'voice', [['en-GB', 'Británico'], ['en-US', 'Americano']])}</div>
    <div class="stack" style="gap:6px"><b>Velocidad</b>${segBtns('set-rate', 'rate', [[0.8, 'Lenta'], [0.95, 'Normal'], [1.1, 'Rápida']])}</div>
    <button class="btn" data-act="say" data-say="The quick brown fox jumps over the lazy dog." style="align-self:flex-start">${ic('speaker')}Probar la voz</button>` : '<p class="muted">Tu navegador no ofrece voz sintética.</p>'}
  </section>
  <section class="panel stack"><h3>Copia de seguridad</h3>
    <p class="small muted">${sync === 'cloud' ? 'Tu progreso se guarda automáticamente en tu cuenta y en este navegador.' : 'Tu progreso se guarda en este navegador. Copia una copia de seguridad para llevarla a otro dispositivo.'}</p>
    <div class="row"><button class="btn" data-act="export">${ic('copy')}Copiar mi progreso</button></div>
    <label class="field">Restaurar desde una copia<textarea id="importbox" rows="3" placeholder="Pega aquí tu copia de seguridad">${esc(UI.importText)}</textarea></label>
    <div class="row"><button class="btn" data-act="import">Restaurar</button>${UI.importMsg ? `<span class="small">${esc(UI.importMsg)}</span>` : ''}</div>
  </section>
  <section class="panel stack"><h3>Empezar de cero</h3>
    ${UI.confirmReset ? `<div class="confirm"><b>¿Seguro? Se borrará todo tu progreso, errores y tarjetas.</b><div class="row"><button class="btn danger" data-act="reset-yes">Sí, borrar todo</button><button class="btn" data-act="reset-no">Cancelar</button></div></div>` : `<button class="btn danger" data-act="reset" style="align-self:flex-start">${ic('trash')}Borrar mi progreso</button>`}
  </section>`;
}
function viewMore() {
  return `${pageHead('Más', '')}<div class="sheet">${[NAV[3], NAV[5], NAV[6], NAV[7]].map(n => `<button data-act="nav" data-to="${n.id}">${ic(n.icon)}<span style="flex:1">${n.label}</span>${navBadge(n.id)}</button>`).join('')}</div><div class="sync" id="sync2"></div>`;
}

/* =========================================================
   Render principal
   ========================================================= */
const VIEWS = {home:viewHome, grammar:viewGrammar, lesson:viewLesson, quiz:viewQuiz, review:viewReview, mistakes:viewMistakes, vocab:viewVocab, deck:viewDeck, flash:viewFlash, tutor:viewTutor, guide:viewGuide, settings:viewSettings, more:viewMore};
function render() {
  const v = $('#view'); if (!v) return;
  const fn = VIEWS[R.name] || viewHome;
  let html;
  try { html = fn(); } catch (e) { console.error(e); html = `<div class="empty">Algo ha fallado al mostrar esta sección.</div><button class="btn" data-act="nav" data-to="home">Volver al inicio</button>`; }
  v.innerHTML = html;
  renderNav();
  const s2 = $('#sync2'); if (s2) { s2.className = 'sync' + (sync === 'cloud' ? ' on' : ''); s2.innerHTML = $('#sync') ? $('#sync').innerHTML : ''; }
  if (R.name === 'lesson' && R.p.id && (R.p.tab || 'theory') === 'theory') { const p = ensureLp(R.p.id); if (!p.theory) { p.theory = true; touch('progress'); } }
}

/* =========================================================
   Eventos
   ========================================================= */
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]'); if (!el) return;
  const a = el.dataset.act, d = el.dataset;
  switch (a) {
    case 'nav': if (d.to === 'flash') startFlash(); else go(d.to); break;
    case 'back': back(R.name === 'lesson' ? 'grammar' : R.name === 'deck' ? 'vocab' : 'home'); break;
    case 'say': speak(d.say); break;
    case 'toc': { e.preventDefault(); const t = document.getElementById(d.id); if (t) t.scrollIntoView({behavior:'smooth', block:'start'}); break; }
    case 'open-lesson': go('lesson', {id:d.id, tab:'theory'}); break;
    case 'open-level': UI.grammarLevel = d.lv; UI.grammarQuery = ''; go('grammar', {level:d.lv}); break;
    case 'ltab': R.p = Object.assign({}, R.p, {tab:d.tab}); render(); break;
    case 'glevel': UI.grammarLevel = d.lv; UI.grammarQuery = ''; render(); break;
    case 'start-lesson': startLesson(d.id); break;
    case 'start-lesson-mistakes': startMistakes(d.id); break;
    case 'start-review': startReview(); break;
    case 'start-mixed': startMixed(d.lv || 'all', UI.reviewCount); break;
    case 'start-mistakes': startMistakes(); break;
    case 'start-test': startTest(d.lv); break;
    case 'start-flash': startFlash(); break;
    case 'set-start': S.progress.settings.start = d.lv || d.v; UI.grammarLevel = null; touch('progress'); render(); break;
    case 'pick': if (SESSION && !SESSION.items[SESSION.i].done) { SESSION.q.sel = Number(d.i); render(); } break;
    case 'build': if (SESSION) { SESSION.q.built.push(Number(d.i)); render(); } break;
    case 'unbuild': if (SESSION) { SESSION.q.built.splice(Number(d.n), 1); render(); } break;
    case 'check': checkCurrent(); break;
    case 'next': nextQ(); break;
    case 'override': overrideCorrect(); break;
    case 'quit': { const s = SESSION; SESSION = null; if (s && s.lessonId) go('lesson', {id:s.lessonId, tab:'practice'}, false); else back(); break; }
    case 'retry-wrong': { const s = SESSION; const items = s.items.filter(x => !x.correct).map(x => mkItem(x.ex, x.key, x.lessonId, x.src)); startSession({mode:'retry', title:'Repite tus fallos', lessonId:s.lessonId, items}); break; }
    case 'rlevel': UI.reviewLevel = d.lv; render(); break;
    case 'rcount': UI.reviewCount = Number(d.n); render(); break;
    case 'mfilter': UI.mistFilter = d.f; render(); break;
    case 'del-mistake': delete S.mistakes.items[d.k]; touch('mistakes'); render(); break;
    case 'explain': explainMistake(d.k); break;
    case 'vlevel': UI.vocabLevel = d.lv; render(); break;
    case 'deck-study': startFlash(d.id); break;
    case 'deck-quiz': startDeckQuiz(d.id); break;
    case 'open-deck': go('deck', {id:d.id}); break;
    case 'reveal': if (FLASH) { FLASH.revealed = true; render(); } break;
    case 'grade': gradeFlash(Number(d.g)); break;
    case 'fdir': if (FLASH) { FLASH.dir = d.d; S.progress.settings.dir = d.d; FLASH.revealed = false; touch('progress'); render(); } break;
    case 'quit-flash': FLASH = null; go('vocab', {}, false); break;
    case 'add-word': {
      const w = ($('#mw-w') || {}).value || '', es = ($('#mw-es') || {}).value || '', ex = ($('#mw-ex') || {}).value || '';
      if (!w.trim() || !es.trim()) { toast('Escribe la palabra y su significado.'); break; }
      if (S.vocab.mine.some(x => x.w.toLowerCase() === w.trim().toLowerCase())) { toast('Esa palabra ya está en tu lista.'); break; }
      S.vocab.mine.push({w:w.trim().slice(0, 80), es:es.trim().slice(0, 120), ex:ex.trim().slice(0, 200), p:'', d:''}); touch('vocab'); toast('Palabra añadida a «Mis palabras»'); render(); break;
    }
    case 'del-word': { const d0 = deckById('mine'); const w = d0.words[Number(d.i)]; if (w) { S.vocab.mine.splice(Number(d.i), 1); delete S.vocab.cards[cardKey('mine', w[0])]; touch('vocab'); render(); } break; }
    case 'ttab': UI.tutorTab = d.t; render(); break;
    case 'wlevel': AI.write.level = d.lv; render(); break;
    case 'wprompt': { const lv = AI.write.level || workingLevel(); AI.write.prompt = WRITING_PROMPTS[lv][Number(d.i)]; render(); const t = $('#wtext'); if (t) t.focus(); break; }
    case 'wcheck': runWritingCheck(); break;
    case 'wstop': if (AI.write.ctl) AI.write.ctl.abort(); break;
    case 'chat-send': chatSend(); break;
    case 'chat-stop': if (AI.chat.ctl) AI.chat.ctl.abort(); break;
    case 'chat-clear': AI.chat.turns = []; AI.chat.err = ''; render(); break;
    case 'ask-tutor': { const l = lessonById(d.id); UI.tutorTab = 'chat'; AI.chat.draft = l ? `Tengo una duda sobre "${l.title}": ` : ''; go('tutor'); setTimeout(() => { const t = $('#chatin'); if (t) { t.focus(); t.setSelectionRange(t.value.length, t.value.length); } }, 40); break; }
    case 'glvl': AI.gen.level = d.lv; render(); break;
    case 'gen-lesson': genLesson(); break;
    case 'gen-extra': genExtra(d.id); break;
    case 'set-goal': S.progress.settings.goal = Number(d.v); touch('progress'); render(); break;
    case 'set-new': S.progress.settings.newPerDay = Number(d.v); touch('progress'); render(); break;
    case 'set-voice': S.progress.settings.voice = d.v; touch('progress'); render(); break;
    case 'set-rate': S.progress.settings.rate = Number(d.v); touch('progress'); render(); break;
    case 'export': {
      const txt = JSON.stringify({app:'ruta-c2', v:1, exportedAt:new Date().toISOString(), state:S});
      const done = () => toast('Copia de seguridad copiada al portapapeles');
      const fallback = () => { UI.importText = txt; UI.importMsg = 'Selecciona y copia el texto del cuadro.'; render(); const b = $('#importbox'); if (b) { b.focus(); b.select(); } };
      try { navigator.clipboard.writeText(txt).then(done, fallback); } catch (err) { fallback(); }
      break;
    }
    case 'import': {
      const raw = ($('#importbox') || {}).value || '';
      try { const o = JSON.parse(raw); const st = o && o.state ? o.state : o; if (!st || !st.progress) throw new Error('x'); S = hydrate(st); touch(...SECTIONS); UI.importText = ''; UI.importMsg = 'Progreso restaurado.'; render(); }
      catch (err) { UI.importMsg = 'Ese texto no es una copia de seguridad válida. Usa «Copiar mi progreso» para obtener una.'; render(); }
      break;
    }
    case 'reset': UI.confirmReset = true; render(); break;
    case 'reset-no': UI.confirmReset = false; render(); break;
    case 'reset-yes': { const keep = S.progress.settings; S = blank(); S.progress.settings = keep; UI.confirmReset = false; touch(...SECTIONS); toast('Progreso borrado'); go('home'); break; }
  }
});
document.addEventListener('toggle', e => { const d = e.target; if (d && d.matches && d.matches('details[data-gid]') && d.open) UI.guideOpen = d.dataset.gid; }, true);
document.addEventListener('input', e => {
  const t = e.target;
  if (t.id === 'ans' && SESSION) {
    SESSION.q.text = t.value;
    const b = $('#checkbtn'); if (b) b.disabled = !t.value.trim();
  } else if (t.id === 'gq') {
    UI.grammarQuery = t.value;
    const q = t.value.trim().toLowerCase();
    const L = UI.grammarLevel;
    const list = q ? allLessons().filter(l => (l.title + ' ' + l.es + ' ' + l.goal + ' ' + l.theory).toLowerCase().includes(q)) : (L === 'mine' ? S.custom.lessons : levelLessons(L));
    const box = $('#lesson-list'); if (box) box.innerHTML = lessonRows(list, !!q || L === 'mine');
  } else if (t.id === 'wtext') {
    AI.write.text = t.value; const c = $('#wcount'); if (c) c.textContent = (t.value.trim().match(/\S+/g) || []).length + ' palabras';
  } else if (t.id === 'chatin') AI.chat.draft = t.value;
  else if (t.id === 'gentopic') AI.gen.topic = t.value;
  else if (t.id === 'importbox') UI.importText = t.value;
});
document.addEventListener('keydown', e => {
  const tag = (e.target.tagName || '').toLowerCase();
  if (R.name === 'quiz' && SESSION && !SESSION.finished) {
    const it = SESSION.items[SESSION.i];
    if (e.key === 'Enter' && !e.shiftKey) {
      if (tag === 'button') return;
      e.preventDefault();
      if (it.done) nextQ(); else checkCurrent();
      return;
    }
    if (!it.done && it.ex.t === 'mc' && /^[1-5]$/.test(e.key) && tag !== 'input' && tag !== 'textarea') {
      const n = Number(e.key) - 1; if (it.perm[n] != null) { SESSION.q.sel = it.perm[n]; render(); }
    }
    return;
  }
  if (R.name === 'flash' && FLASH && FLASH.i < FLASH.queue.length && tag !== 'input' && tag !== 'textarea') {
    if (!FLASH.revealed && (e.key === ' ' || e.key === 'Enter')) { e.preventDefault(); FLASH.revealed = true; render(); }
    else if (FLASH.revealed && /^[1-4]$/.test(e.key)) gradeFlash(Number(e.key));
    return;
  }
  if (R.name === 'tutor' && e.target.id === 'chatin' && e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); chatSend(); }
});

/* =========================================================
   Arranque
   ========================================================= */
render();
if (ttsOK) { try { speechSynthesis.getVoices(); speechSynthesis.onvoiceschanged = () => {}; } catch (e) {} }
initCloud();
initAI();
})();
