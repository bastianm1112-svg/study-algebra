// =============================================
// ALGEBRA 1 STUDY — MAIN APP ROUTER
// =============================================

import { getAllTopics, getUnitById, getTopicById, getAllUnits } from './data/index.js';
import { getProgress, markTopicDone, getXP, getStreak, updateStreak, getCode, exportSave, buildQuickLink, addXP } from './state.js';
import { initCalculator, toggleCalculator } from './calculator.js';
import { renderFlashcards, renderProblems, renderQuiz, showXPToast, launchConfetti } from './practice.js';

// ─── Bootstrap ───────────────────────────────────────────────────────────────

if (!getCode()) window.location.href = 'index.html';

window.addEventListener('DOMContentLoaded', () => {
  initCalculator();
  updateStreak();
  updateNav();
  route();

  // Profile nav button
  const profileBtn = document.getElementById('profileNavBtn');
  if (profileBtn) profileBtn.addEventListener('click', () => navigate('#profile'));
});

window.addEventListener('hashchange', () => { route(); window.scrollTo(0, 0); });

// ─── Nav ─────────────────────────────────────────────────────────────────────

function updateNav() {
  const xpEl = document.getElementById('xpBadge');
  const streakEl = document.getElementById('streakBadge');
  if (xpEl) xpEl.textContent = `⭐ ${getXP()} XP`;
  if (streakEl) streakEl.textContent = `🔥 ${getStreak()}`;
}

// ─── Router ───────────────────────────────────────────────────────────────────

function route() {
  const hash = location.hash || '#home';
  const root = document.getElementById('app-root');
  if (!root) return;

  if (hash === '#home' || hash === '') renderHome(root);
  else if (hash === '#quiz')           renderQuizView(root);
  else if (hash === '#profile')        renderProfileView(root);
  else if (hash.startsWith('#unit-'))        renderUnit(root, parseInt(hash.replace('#unit-', ''), 10));
  else if (hash.startsWith('#flashcards-')) renderFlashcardsView(root, hash.replace('#flashcards-', ''));
  else if (hash.startsWith('#problems-'))   renderProblemsView(root, hash.replace('#problems-', ''));
  else if (hash.startsWith('#guide-'))      renderGuideView(root, hash.replace('#guide-', ''));
  else if (hash.startsWith('#topic-'))      renderTopic(root, hash.replace('#topic-', ''));
  else renderHome(root);
}

function navigate(hash) { location.hash = hash; }
window.navigate = navigate;

// ─── HOME ─────────────────────────────────────────────────────────────────────

function renderHome(root) {
  const units = getAllUnits();
  const progress = getProgress();

  const unitCards = units.map(unit => {
    const topicCount = unit.topics.length;
    const doneCount = unit.topics.filter(t => {
      const tp = progress.topics[t.id];
      return tp && tp.flashcardsDone && tp.problemsDone;
    }).length;
    const pct = topicCount > 0 ? Math.round((doneCount / topicCount) * 100) : 0;
    return `
      <div class="unit-card" onclick="navigate('#unit-${unit.id}')">
        <div class="unit-color-bar" style="background:${unit.color}"></div>
        <span class="unit-card-emoji">${unit.emoji}</span>
        <div class="unit-card-title">Unit ${unit.id}: ${escHtml(unit.title)}</div>
        <div class="unit-card-subtitle">${doneCount}/${topicCount} topics</div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${unit.color}"></div></div>
        <div class="progress-label">${pct}% complete</div>
      </div>`;
  }).join('');

  root.innerHTML = `
    <div class="view">
      <div class="home-header">
        <h1>📐 Algebra 1 Study</h1>
        <p>Pick a unit to start learning!</p>
      </div>
      <div class="home-stats">
        <span class="stat-pill stat-xp">⭐ ${getXP()} XP earned</span>
        <span class="stat-pill stat-streak">🔥 ${getStreak()} day streak</span>
      </div>
      <div class="unit-grid">${unitCards}</div>
      <div class="home-quiz-wrap">
        <button class="btn btn-yellow home-quiz-btn" onclick="navigate('#quiz')">🎯 Mixed Quiz — Test Everything!</button>
      </div>
    </div>`;
}

// ─── UNIT ─────────────────────────────────────────────────────────────────────

function renderUnit(root, unitId) {
  const unit = getUnitById(unitId);
  if (!unit) { renderHome(root); return; }
  const progress = getProgress();
  const topicCount = unit.topics.length;
  const doneCount = unit.topics.filter(t => { const tp = progress.topics[t.id]; return tp && tp.flashcardsDone && tp.problemsDone; }).length;
  const pct = topicCount > 0 ? Math.round((doneCount / topicCount) * 100) : 0;

  const topicItems = unit.topics.map(t => {
    const tp = progress.topics[t.id] || {};
    const fcBadge  = tp.flashcardsDone ? `<span class="topic-badge badge-done">🃏 ✓</span>` : `<span class="topic-badge badge-todo">🃏</span>`;
    const probBadge = tp.problemsDone  ? `<span class="topic-badge badge-done">✏️ ✓</span>` : `<span class="topic-badge badge-todo">✏️</span>`;
    return `
      <div class="topic-item" onclick="navigate('#topic-${t.id}')">
        <div class="topic-item-info">
          <div class="topic-item-title">${escHtml(t.title)}</div>
          <div class="topic-badges">${fcBadge}${probBadge}</div>
        </div>
        <div class="topic-arrow">›</div>
      </div>`;
  }).join('');

  root.innerHTML = `
    <div class="view">
      <div class="view-header">
        <button class="back-btn" onclick="navigate('#home')">←</button>
        <span class="view-emoji">${unit.emoji}</span>
        <h2 class="view-title" style="color:${unit.color}">Unit ${unit.id}: ${escHtml(unit.title)}</h2>
      </div>
      <div class="unit-progress-section">
        <div style="font-weight:800;font-size:0.9rem;color:#555;margin-bottom:8px;">Overall Progress</div>
        <div class="progress-bar"><div class="progress-fill" style="width:${pct}%;background:${unit.color}"></div></div>
        <div class="progress-label">${doneCount} / ${topicCount} topics completed</div>
      </div>
      <div class="topic-list">${topicItems}</div>
    </div>`;
}

// ─── TOPIC ────────────────────────────────────────────────────────────────────

function renderTopic(root, topicId) {
  const topic = getTopicById(topicId);
  if (!topic) { renderHome(root); return; }
  const unit = findUnitForTopic(topicId);
  const unitHash = unit ? `#unit-${unit.id}` : '#home';
  const unitLabel = unit ? `Unit ${unit.id}: ${unit.title}` : 'Units';
  const progress = getProgress();
  const tp = progress.topics[topicId] || {};

  root.innerHTML = `
    <div class="view">
      <div class="view-header">
        <button class="back-btn" onclick="navigate('${unitHash}')">←</button>
        <div>
          <div class="topic-breadcrumb" onclick="navigate('${unitHash}')">${escHtml(unitLabel)}</div>
          <h2 class="view-title topic-main-title">${escHtml(topic.title)}</h2>
        </div>
      </div>
      <div class="mode-buttons">
        <button class="mode-btn mode-btn-purple" onclick="navigate('#flashcards-${topicId}')">
          <span class="mode-btn-icon">🃏</span>
          <span class="mode-btn-info">
            <span class="mode-btn-title">Flashcards ${tp.flashcardsDone ? '✓' : ''}</span>
            <span class="mode-btn-desc">${topic.flashcards ? topic.flashcards.length : 0} cards • Memorize key concepts</span>
          </span>
        </button>
        <button class="mode-btn mode-btn-pink" onclick="navigate('#problems-${topicId}')">
          <span class="mode-btn-icon">✏️</span>
          <span class="mode-btn-info">
            <span class="mode-btn-title">Practice Problems ${tp.problemsDone ? '✓' : ''}</span>
            <span class="mode-btn-desc">${topic.problems ? topic.problems.length : 0} problems • Apply what you know</span>
          </span>
        </button>
        <button class="mode-btn mode-btn-yellow" onclick="navigate('#quiz')">
          <span class="mode-btn-icon">🎯</span>
          <span class="mode-btn-info">
            <span class="mode-btn-title">Mixed Quiz</span>
            <span class="mode-btn-desc">10 questions • Test all topics</span>
          </span>
        </button>
      </div>
      <button class="mode-btn mode-btn-teal" onclick="navigate('#guide-${topicId}')">
        <span class="mode-btn-icon">📖</span>
        <span class="mode-btn-info">
          <span class="mode-btn-title">Study Guide</span>
          <span class="mode-btn-desc">Concept review, examples &amp; tips</span>
        </span>
      </button>
    </div>`;
}

// ─── FLASHCARDS ───────────────────────────────────────────────────────────────

function renderFlashcardsView(root, topicId) {
  const topic = getTopicById(topicId);
  if (!topic) { renderHome(root); return; }
  root.innerHTML = `
    <div class="view">
      <div class="view-header" style="margin-bottom:16px;">
        <button class="back-btn" onclick="navigate('#topic-${topicId}')">←</button>
        <div>
          <div class="topic-breadcrumb">${escHtml(topic.title)}</div>
          <h2 class="view-title" style="font-size:1.3rem;">🃏 Flashcards</h2>
        </div>
      </div>
      <div id="fc-container"></div>
    </div>`;
  renderFlashcards(topic, document.getElementById('fc-container'), (score) => {
    markTopicDone(topicId, 'flashcards', score);
    showXPToast('+10 XP for flashcards!');
    updateNav();
  });
}

// ─── PROBLEMS ─────────────────────────────────────────────────────────────────

function renderProblemsView(root, topicId) {
  const topic = getTopicById(topicId);
  if (!topic) { renderHome(root); return; }
  root.innerHTML = `
    <div class="view">
      <div class="view-header" style="margin-bottom:16px;">
        <button class="back-btn" onclick="navigate('#topic-${topicId}')">←</button>
        <div>
          <div class="topic-breadcrumb">${escHtml(topic.title)}</div>
          <h2 class="view-title" style="font-size:1.3rem;">✏️ Practice Problems</h2>
        </div>
      </div>
      <div id="prob-container"></div>
    </div>`;
  renderProblems(topic, document.getElementById('prob-container'), (score) => {
    markTopicDone(topicId, 'problems', score);
    showXPToast(`+20 XP! Score: ${Math.round(score)}%`);
    updateNav();
  });
}

// ─── QUIZ ─────────────────────────────────────────────────────────────────────

function renderQuizView(root) {
  root.innerHTML = `<div class="view"><div id="quiz-container"></div></div>`;
  renderQuiz(getAllTopics(), document.getElementById('quiz-container'), (score) => {
    const xpEarned = Math.round(score * 0.3);
    addXP(xpEarned);
    showXPToast(`+${xpEarned} XP from Quiz!`);
    updateNav();
  });
}

// ─── GUIDE ────────────────────────────────────────────────────────────────────

function renderGuideView(root, topicId) {
  const topic = getTopicById(topicId);
  if (!topic || !topic.guide) {
    root.innerHTML = `
      <div class="view">
        <div class="view-header">
          <button class="back-btn" onclick="navigate('#topic-${topicId}')">←</button>
          <h2 class="view-title">📖 Study Guide</h2>
        </div>
        <div class="guide-section"><p style="color:#888;font-weight:600;">No guide available for this topic yet.</p></div>
        <button class="btn btn-ghost" onclick="navigate('#topic-${topicId}')">← Back</button>
      </div>`;
    return;
  }
  const g = topic.guide;
  const conceptSection  = g.concept ? `<div class="guide-section"><div class="guide-section-title">📚 Concept</div><div class="guide-concept">${escHtml(g.concept)}</div></div>` : '';
  const examplesSection = g.examples && g.examples.length ? `
    <div class="guide-section">
      <div class="guide-section-title">💡 Examples</div>
      ${g.examples.map(ex => `
        <div class="example-card">
          <div class="example-problem">Problem: ${escHtml(ex.problem)}</div>
          <ol class="example-steps">${(ex.steps||[]).map((s,i)=>`<li><span class="step-num">${i+1}</span> ${escHtml(s)}</li>`).join('')}</ol>
          <div class="example-answer">Answer: ${escHtml(ex.answer)}</div>
        </div>`).join('')}
    </div>` : '';
  const tipsSection     = g.tips && g.tips.length ? `<div class="guide-section"><div class="guide-section-title">✅ Tips</div><ul class="guide-tips-list">${g.tips.map(t=>`<li><span class="guide-tip-dot">●</span> ${escHtml(t)}</li>`).join('')}</ul></div>` : '';
  const mistakesSection = g.commonMistakes && g.commonMistakes.length ? `<div class="guide-section"><div class="guide-section-title">⚠️ Common Mistakes</div><ul class="guide-tips-list">${g.commonMistakes.map(m=>`<li><span class="guide-mistakes-dot">●</span> ${escHtml(m)}</li>`).join('')}</ul></div>` : '';

  root.innerHTML = `
    <div class="view">
      <div class="view-header" style="margin-bottom:20px;">
        <button class="back-btn" onclick="navigate('#topic-${topicId}')">←</button>
        <div>
          <div class="topic-breadcrumb">${escHtml(topic.title)}</div>
          <h2 class="view-title" style="font-size:1.3rem;">📖 Study Guide</h2>
        </div>
      </div>
      ${conceptSection}${examplesSection}${tipsSection}${mistakesSection}
      <div style="margin-top:16px;"><button class="btn btn-purple btn-full" onclick="navigate('#flashcards-${topicId}')">🃏 Practice Flashcards</button></div>
      <div style="margin-top:12px;"><button class="btn btn-ghost btn-full" onclick="navigate('#topic-${topicId}')">← Back to Topic</button></div>
    </div>`;
}

// ─── PROFILE ─────────────────────────────────────────────────────────────────

function renderProfileView(root) {
  const code       = getCode() || '—';
  const xp         = getXP();
  const streak     = getStreak();
  const progress   = getProgress();
  const allTopics  = getAllTopics();
  const fcDone     = allTopics.filter(t => progress.topics[t.id]?.flashcardsDone).length;
  const probDone   = allTopics.filter(t => progress.topics[t.id]?.problemsDone).length;
  const totalTopics = allTopics.length;
  const quickLink  = buildQuickLink() || '';

  root.innerHTML = `
    <div class="view">
      <div class="view-header">
        <button class="back-btn" onclick="navigate('#home')">←</button>
        <h2 class="view-title">👤 My Profile</h2>
      </div>

      <!-- Stats -->
      <div class="profile-stats-grid">
        <div class="profile-stat-card" style="border-top:4px solid #6c63ff;">
          <div class="profile-stat-num" style="color:#6c63ff;">${xp}</div>
          <div class="profile-stat-label">Total XP</div>
        </div>
        <div class="profile-stat-card" style="border-top:4px solid #f9a828;">
          <div class="profile-stat-num" style="color:#f9a828;">${streak}</div>
          <div class="profile-stat-label">Day Streak 🔥</div>
        </div>
        <div class="profile-stat-card" style="border-top:4px solid #ff6584;">
          <div class="profile-stat-num" style="color:#ff6584;">${fcDone}/${totalTopics}</div>
          <div class="profile-stat-label">Flashcards Done</div>
        </div>
        <div class="profile-stat-card" style="border-top:4px solid #43c6ac;">
          <div class="profile-stat-num" style="color:#43c6ac;">${probDone}/${totalTopics}</div>
          <div class="profile-stat-label">Problems Done</div>
        </div>
      </div>

      <!-- Save Code -->
      <div class="profile-section">
        <div class="profile-section-title">🔑 Your Save Code</div>
        <div class="profile-code-box">
          <span class="profile-code-text" id="profileCodeText">${escHtml(code)}</span>
          <button class="copy-pill-btn" id="copyCodeBtn">📋 Copy</button>
        </div>
        <p class="profile-hint">Use this code on the login screen to restore your progress on this device.</p>
      </div>

      <!-- Quick-Access Link -->
      <div class="profile-section">
        <div class="profile-section-title">🔗 Quick-Access Link</div>
        <p class="profile-hint">Bookmark this link — opening it will log you straight in without typing your code.</p>
        <div class="profile-link-box">
          <span class="profile-link-text" id="profileLinkText">${escHtml(quickLink)}</span>
        </div>
        <button class="btn btn-purple btn-full" id="copyLinkBtn" style="margin-top:10px;">🔗 Copy Link</button>
      </div>

      <!-- Export Save -->
      <div class="profile-section">
        <div class="profile-section-title">📤 Export Save (Backup)</div>
        <p class="profile-hint">Copy this save string and keep it somewhere safe. Paste it on any device using the <strong>Import</strong> tab on the login screen to restore all your progress.</p>
        <button class="btn btn-pink btn-full" id="exportSaveBtn">📤 Copy Save String</button>
        <div class="success-toast" id="exportOk" style="display:none;margin-top:10px;color:#43c6ac;font-weight:800;text-align:center;">✅ Copied to clipboard!</div>
      </div>

      <div style="margin-top:8px;">
        <button class="btn btn-ghost btn-full" onclick="navigate('#home')">← Back to Home</button>
      </div>
    </div>`;

  document.getElementById('copyCodeBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(code).then(() => {
      document.getElementById('copyCodeBtn').textContent = '✅ Copied!';
      setTimeout(() => { document.getElementById('copyCodeBtn').textContent = '📋 Copy'; }, 2000);
    });
  });

  document.getElementById('copyLinkBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(quickLink).then(() => {
      document.getElementById('copyLinkBtn').textContent = '✅ Link Copied!';
      setTimeout(() => { document.getElementById('copyLinkBtn').textContent = '🔗 Copy Link'; }, 2000);
    });
  });

  document.getElementById('exportSaveBtn').addEventListener('click', () => {
    const saveStr = exportSave();
    if (!saveStr) return;
    navigator.clipboard.writeText(saveStr).then(() => {
      document.getElementById('exportSaveBtn').textContent = '✅ Copied!';
      document.getElementById('exportOk').style.display = 'block';
      setTimeout(() => {
        document.getElementById('exportSaveBtn').textContent = '📤 Copy Save String';
        document.getElementById('exportOk').style.display = 'none';
      }, 3000);
    });
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escHtml(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

function findUnitForTopic(topicId) {
  return getAllUnits().find(u => u.topics.some(t => t.id === topicId)) || null;
}

window.navigate = navigate;
