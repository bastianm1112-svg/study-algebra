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

/**
 * Generate a new adjective-animal-NNNN code
 */
export function generateCode() {
  const adj = ADJECTIVES[Math.floor(Math.random() * ADJECTIVES.length)];
  const animal = ANIMALS[Math.floor(Math.random() * ANIMALS.length)];
  const num = String(Math.floor(Math.random() * 9000) + 1000);
  return `${adj}-${animal}-${num}`;
}

export function getCode() {
  return localStorage.getItem('algebraCode');
}

export function setCode(code) {
  localStorage.setItem('algebraCode', code);
}

// ─── Progress helpers ─────────────────────────────────────────────────────────

function progressKey() {
  const code = getCode();
  return code ? `progress-${code}` : 'progress-anonymous';
}

/**
 * Load progress from localStorage.
 * Shape: { topics: { [topicId]: { flashcardsDone, problemsDone, bestScore } }, xp, streak, lastStudied }
 */
export function getProgress() {
  try {
    const raw = localStorage.getItem(progressKey());
    if (raw) return JSON.parse(raw);
  } catch (e) { /* ignore */ }
  return { topics: {}, xp: 0, streak: 0, lastStudied: null };
}

export function saveProgress(p) {
  try {
    localStorage.setItem(progressKey(), JSON.stringify(p));
  } catch (e) { /* ignore */ }
}

/**
 * Mark a topic mode as done, update XP.
 * mode: 'flashcards' | 'problems' | 'quiz'
 * score: 0-100
 */
export function markTopicDone(topicId, mode, score) {
  const p = getProgress();
  if (!p.topics[topicId]) {
    p.topics[topicId] = { flashcardsDone: false, problemsDone: false, bestScore: 0 };
  }
  const topic = p.topics[topicId];
  if (mode === 'flashcards' && !topic.flashcardsDone) {
    topic.flashcardsDone = true;
    p.xp = (p.xp || 0) + 10;
  }
  if (mode === 'problems' && !topic.problemsDone) {
    topic.problemsDone = true;
    p.xp = (p.xp || 0) + 20;
  }
  if (score > (topic.bestScore || 0)) {
    topic.bestScore = score;
  }
  saveProgress(p);
  updateStreak();
}

// ─── Streak ───────────────────────────────────────────────────────────────────

function todayStr() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD
}

export function getStreak() {
  const p = getProgress();
  if (!p.lastStudied) return 0;
  const today = todayStr();
  const last = p.lastStudied;
  if (last === today) return p.streak || 1;
  // Check if yesterday
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);
  if (last === yStr) return p.streak || 1;
  return 0; // streak broken
}

export function updateStreak() {
  const p = getProgress();
  const today = todayStr();
  if (p.lastStudied === today) return; // already updated today
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);
  if (p.lastStudied === yStr) {
    p.streak = (p.streak || 0) + 1;
  } else if (p.lastStudied !== today) {
    p.streak = 1;
  }
  p.lastStudied = today;
  saveProgress(p);
}

// ─── XP ───────────────────────────────────────────────────────────────────────

export function getXP() {
  return getProgress().xp || 0;
}

export function addXP(amount) {
  const p = getProgress();
  p.xp = (p.xp || 0) + amount;
  saveProgress(p);
}
