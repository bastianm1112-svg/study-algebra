// =============================================
// STATE MANAGEMENT — localStorage + XP + Streak
// =============================================

const ADJECTIVES = [
  'swift','brave','bright','calm','cool','dark','deep','eager',
  'fast','free','glad','good','high','huge','keen','kind','loud','mild',
  'nice','pure','quiet','rare','rich','safe','sharp','smart','soft','warm','wild','wise'
];
const ANIMALS = [
  'badger','beaver','cobra','crane','eagle','falcon','gecko','heron',
  'jaguar','koala','lemur','lynx','moose','narwhal','orca','panda','penguin',
  'puffin','raven','shark','sloth','tiger','toucan','viper','walrus','wolf','wombat','zebra'
];

export function generateCode() {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  const num = String(Math.floor(Math.random() * 9000) + 1000);
  return `${adj}-${animal}-${num}`;
}

export function getCode() { return localStorage.getItem('algebraCode'); }
export function setCode(code) { localStorage.setItem('algebraCode', code); }

// ─── Progress ────────────────────────────────────────────────────────────────

function progressKey() {
  const code = getCode();
  return code ? `progress-${code}` : 'progress-anonymous';
}

export function getProgress() {
  try {
    const raw = localStorage.getItem(progressKey());
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return { topics: {}, xp: 0, streak: 0, lastStudied: null };
}

export function saveProgress(p) {
  try { localStorage.setItem(progressKey(), JSON.stringify(p)); } catch (e) { /* ignore */ }
}

export function markTopicDone(topicId, mode, score) {
  const p = getProgress();
  if (!p.topics[topicId]) p.topics[topicId] = { flashcardsDone: false, problemsDone: false, bestScore: 0 };
  const t = p.topics[topicId];
  if (mode === 'flashcards' && !t.flashcardsDone) { t.flashcardsDone = true; p.xp = (p.xp || 0) + 10; }
  if (mode === 'problems' && !t.problemsDone)     { t.problemsDone  = true; p.xp = (p.xp || 0) + 20; }
  if (score > (t.bestScore || 0)) t.bestScore = score;
  saveProgress(p);
  updateStreak();
}

// ─── Streak ──────────────────────────────────────────────────────────────────

function todayStr() { return new Date().toISOString().slice(0, 10); }

export function getStreak() {
  const p = getProgress();
  if (!p.lastStudied) return 0;
  const today = todayStr();
  if (p.lastStudied === today) return p.streak || 1;
  const yest = new Date(); yest.setDate(yest.getDate() - 1);
  if (p.lastStudied === yest.toISOString().slice(0, 10)) return p.streak || 1;
  return 0;
}

export function updateStreak() {
  const p = getProgress();
  const today = todayStr();
  if (p.lastStudied === today) return;
  const yest = new Date(); yest.setDate(yest.getDate() - 1);
  if (p.lastStudied === yest.toISOString().slice(0, 10)) {
    p.streak = (p.streak || 0) + 1;
  } else {
    p.streak = 1;
  }
  p.lastStudied = today;
  saveProgress(p);
}

// ─── XP ──────────────────────────────────────────────────────────────────────

export function getXP() { return getProgress().xp || 0; }

export function addXP(amount) {
  const p = getProgress();
  p.xp = (p.xp || 0) + amount;
  saveProgress(p);
}

// ─── Export / Import ─────────────────────────────────────────────────────────

/**
 * Export all progress + code as a compact base64 string.
 * The string starts with "AS1:" so it's recognisable.
 */
export function exportSave() {
  const payload = { code: getCode(), progress: getProgress() };
  try {
    return 'AS1:' + btoa(unescape(encodeURIComponent(JSON.stringify(payload))));
  } catch (e) { return null; }
}

/**
 * Import from a save string (produced by exportSave).
 * Returns true on success, false on failure.
 */
export function importSave(str) {
  try {
    if (!str || !str.startsWith('AS1:')) return false;
    const payload = JSON.parse(decodeURIComponent(escape(atob(str.slice(4)))));
    if (!payload || !payload.code || !payload.progress) return false;
    setCode(payload.code);
    // Store progress under the imported code's key
    localStorage.setItem(`progress-${payload.code}`, JSON.stringify(payload.progress));
    return true;
  } catch (e) { return false; }
}

/**
 * Build a shareable quick-access URL using the current code.
 * Visiting this URL auto-logs the user in on index.html.
 */
export function buildQuickLink() {
  const code = getCode();
  if (!code) return null;
  const base = location.href.replace(/app\.html.*$/, '');
  return `${base}index.html?code=${encodeURIComponent(code)}`;
}
