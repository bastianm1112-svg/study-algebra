// =============================================
// PRACTICE ENGINES — Flashcard, Problems, Quiz
// =============================================

// ─── Confetti ────────────────────────────────────────────────────────────────

const CONFETTI_COLORS = ['#6c63ff','#ff6584','#f9a828','#43c6ac','#a78bfa','#34d399','#fb923c','#60a5fa','#f472b6'];

export function launchConfetti(originEl) {
  const rect = originEl ? originEl.getBoundingClientRect() : { top: window.innerHeight / 2, left: window.innerWidth / 2 };
  const startX = rect.left + (rect.width || 0) / 2;
  const startY = rect.top;

  for (let i = 0; i < 30; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.cssText = `
      left: ${startX + (Math.random() - 0.5) * 200}px;
      top: ${startY}px;
      background: ${CONFETTI_COLORS[i % CONFETTI_COLORS.length]};
      width: ${6 + Math.random() * 8}px;
      height: ${6 + Math.random() * 8}px;
      border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
      animation-duration: ${1.2 + Math.random() * 1}s;
      animation-delay: ${Math.random() * 0.3}s;
    `;
    document.body.appendChild(piece);
    setTimeout(() => piece.remove(), 2500);
  }
}

// ─── XP Toast ────────────────────────────────────────────────────────────────

export function showXPToast(msg) {
  const toast = document.getElementById('xp-toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

// ─── Answer Normalization ─────────────────────────────────────────────────────

export function normalizeAnswer(str) {
  if (typeof str !== 'string') str = String(str);
  return str.trim().toLowerCase().replace(/\s+/g, '');
}

function answersMatch(userAns, correctAns) {
  const u = normalizeAnswer(userAns);
  const c = normalizeAnswer(correctAns);
  if (u === c) return true;
  // Try numeric comparison
  const uNum = parseFloat(u);
  const cNum = parseFloat(c);
  if (!isNaN(uNum) && !isNaN(cNum) && uNum === cNum) return true;
  // Handle x=5 vs 5
  const uMatch = u.match(/^[a-z]=(.+)$/);
  const cMatch = c.match(/^[a-z]=(.+)$/);
  if (uMatch && !cMatch && uMatch[1] === c) return true;
  if (!uMatch && cMatch && u === cMatch[1]) return true;
  if (uMatch && cMatch && uMatch[1] === cMatch[1]) return true;
  return false;
}

// ─── FLASHCARD ENGINE ────────────────────────────────────────────────────────

export function renderFlashcards(topic, container, onComplete) {
  const cards = topic.flashcards || [];
  if (!cards.length) {
    container.innerHTML = `<div class="completion-screen">
      <div class="completion-emoji">📭</div>
      <div class="completion-title">No flashcards yet</div>
    </div>`;
    return;
  }

  let currentIndex = 0;
  let gotItCount = 0;
  const results = []; // true/false per card

  function renderCard(idx) {
    const card = cards[idx];
    const flipped = false;
    container.innerHTML = `
      <div class="view">
        <div class="fc-progress">Card ${idx + 1} of ${cards.length}</div>
        <div class="flashcard-scene" id="fc-scene">
          <div class="flashcard" id="fc-card">
            <div class="flashcard-face flashcard-front">
              <div class="flashcard-label">Question</div>
              <div class="flashcard-text">${escapeHtml(card.front)}</div>
              <div class="flashcard-hint">Tap to reveal answer</div>
            </div>
            <div class="flashcard-face flashcard-back">
              <div class="flashcard-label">Answer</div>
              <div class="flashcard-text">${escapeHtml(card.back)}</div>
            </div>
          </div>
        </div>
        <div class="fc-buttons" id="fc-buttons" style="display:none;">
          <button class="btn btn-teal" id="fc-got-it">Got It ✓</button>
          <button class="btn btn-ghost" id="fc-still-learning">Still Learning ↺</button>
        </div>
      </div>`;

    const scene = document.getElementById('fc-scene');
    const fcCard = document.getElementById('fc-card');
    const fcButtons = document.getElementById('fc-buttons');
    let isFlipped = false;

    scene.addEventListener('click', () => {
      if (!isFlipped) {
        isFlipped = true;
        fcCard.classList.add('flipped');
        fcButtons.style.display = 'flex';
      }
    });

    document.getElementById('fc-got-it').addEventListener('click', () => {
      gotItCount++;
      results.push(true);
      next();
    });
    document.getElementById('fc-still-learning').addEventListener('click', () => {
      results.push(false);
      next();
    });
  }

  function next() {
    currentIndex++;
    if (currentIndex < cards.length) {
      renderCard(currentIndex);
    } else {
      showComplete();
    }
  }

  function showComplete() {
    const score = Math.round((gotItCount / cards.length) * 100);
    container.innerHTML = `
      <div class="completion-screen view">
        <div class="completion-emoji">🎉</div>
        <div class="completion-title">Deck Complete!</div>
        <div class="completion-subtitle">You knew ${gotItCount} out of ${cards.length} cards</div>
        <div class="completion-score">${score}%</div>
        <div class="completion-btns">
          <button class="btn btn-purple btn-full" id="fc-restart">🔄 Restart Deck</button>
          <button class="btn btn-ghost btn-full" id="fc-back">← Back to Topic</button>
        </div>
      </div>`;

    launchConfetti(document.querySelector('.completion-score'));

    document.getElementById('fc-restart').addEventListener('click', () => {
      currentIndex = 0;
      gotItCount = 0;
      results.length = 0;
      renderCard(0);
    });
    document.getElementById('fc-back').addEventListener('click', () => {
      history.back();
    });

    if (typeof onComplete === 'function') onComplete(score);
  }

  renderCard(0);
}

// ─── PROBLEM ENGINE ───────────────────────────────────────────────────────────

export function renderProblems(topic, container, onComplete) {
  const problems = topic.problems || [];
  if (!problems.length) {
    container.innerHTML = `<div class="completion-screen">
      <div class="completion-emoji">📭</div>
      <div class="completion-title">No problems yet</div>
    </div>`;
    return;
  }

  let currentIndex = 0;
  let correctCount = 0;

  function renderProblem(idx) {
    const prob = problems[idx];
    const progress = Math.round((idx / problems.length) * 100);

    container.innerHTML = `
      <div class="view">
        <div class="problem-progress-bar-wrap">
          <div class="problem-progress-bar">
            <div class="problem-progress-fill" style="width:${progress}%"></div>
          </div>
          <div class="problem-counter">Problem ${idx + 1} / ${problems.length}</div>
        </div>
        <div class="problem-container">
          <div class="problem-card" id="problem-card">
            <div class="problem-type-tag">${prob.type === 'fill-in' ? '✏️ Fill In' : '🔘 Multiple Choice'}</div>
            <div class="problem-question">${escapeHtml(prob.question)}</div>
            ${prob.type === 'multiple-choice' ? renderMCOptions(prob) : renderFillIn(prob)}
          </div>
          <div class="explanation-panel" id="explanation-panel" style="display:none;">
            ${renderExplanation(prob.explanation)}
          </div>
          <div class="problem-action-btns" id="action-btns" style="display:none;"></div>
        </div>
      </div>`;

    if (prob.type === 'multiple-choice') {
      attachMCListeners(prob, idx);
    } else {
      attachFillInListeners(prob, idx);
    }
  }

  function renderMCOptions(prob) {
    const letters = ['A','B','C','D','E'];
    return `<div class="mc-options" id="mc-options">
      ${(prob.choices || []).map((choice, i) => `
        <button class="mc-btn" data-choice="${escapeAttr(choice)}" data-idx="${i}">
          <span class="mc-letter">${letters[i]}</span>
          <span>${escapeHtml(choice)}</span>
        </button>`).join('')}
    </div>`;
  }

  function renderFillIn(prob) {
    return `<div class="fill-input-wrap">
      <input class="fill-input" id="fill-input" type="text" placeholder="Type your answer..." autocomplete="off" />
      <button class="btn btn-purple btn-full submit-btn" id="submit-fill">Check Answer →</button>
    </div>`;
  }

  function renderExplanation(exp) {
    if (!exp) return '<p>No explanation available.</p>';
    const steps = (exp.steps || []).map((s, i) => `
      <li><span class="step-num">${i + 1}</span> ${escapeHtml(s)}</li>`).join('');
    const tip = exp.tip ? `<div class="explanation-tip">💡 ${escapeHtml(exp.tip)}</div>` : '';
    return `
      <div class="explanation-title">💡 Solution Steps</div>
      <ul class="step-list">${steps}</ul>
      ${tip}`;
  }

  function showCorrect(idx, sourceEl) {
    correctCount++;
    if (sourceEl) sourceEl.classList.add('correct');
    const panel = document.getElementById('explanation-panel');
    if (panel) panel.style.display = 'none';
    const actionBtns = document.getElementById('action-btns');
    actionBtns.style.display = 'flex';
    actionBtns.innerHTML = `<button class="btn btn-teal btn-full" id="next-btn">${idx + 1 < problems.length ? 'Next Problem →' : 'See Results →'}</button>`;
    document.getElementById('next-btn').addEventListener('click', () => advance(idx));
    launchConfetti(sourceEl || document.getElementById('problem-card'));
    showXPToast('+20 XP');
  }

  function showWrong(idx, sourceEl) {
    if (sourceEl) sourceEl.classList.add('wrong');
    const panel = document.getElementById('explanation-panel');
    if (panel) panel.style.display = 'block';
    const actionBtns = document.getElementById('action-btns');
    actionBtns.style.display = 'flex';
    actionBtns.innerHTML = `
      <button class="btn btn-ghost" id="try-again-btn">↺ Try Again</button>
      <button class="btn btn-pink" id="next-btn-wrong">${idx + 1 < problems.length ? 'Next →' : 'Finish →'}</button>`;
    document.getElementById('try-again-btn').addEventListener('click', () => renderProblem(idx));
    document.getElementById('next-btn-wrong').addEventListener('click', () => advance(idx));
  }

  function advance(idx) {
    if (idx + 1 < problems.length) {
      renderProblem(idx + 1);
    } else {
      showComplete();
    }
  }

  function attachMCListeners(prob, idx) {
    document.querySelectorAll('.mc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mc-btn').forEach(b => b.disabled = true);
        const chosen = btn.getAttribute('data-choice');
        if (answersMatch(chosen, prob.answer)) {
          showCorrect(idx, btn);
        } else {
          showWrong(idx, btn);
          // Also highlight correct
          document.querySelectorAll('.mc-btn').forEach(b => {
            if (answersMatch(b.getAttribute('data-choice'), prob.answer)) b.classList.add('correct');
          });
        }
      });
    });
  }

  function attachFillInListeners(prob, idx) {
    const input = document.getElementById('fill-input');
    const submitBtn = document.getElementById('submit-fill');
    if (!input || !submitBtn) return;

    const check = () => {
      const val = input.value;
      if (!val.trim()) return;
      submitBtn.disabled = true;
      input.readOnly = true;
      if (answersMatch(val, prob.answer)) {
        input.classList.add('correct');
        showCorrect(idx, input);
      } else {
        input.classList.add('wrong');
        showWrong(idx, input);
      }
    };

    submitBtn.addEventListener('click', check);
    input.addEventListener('keydown', (e) => { if (e.key === 'Enter') check(); });
  }

  function showComplete() {
    const score = Math.round((correctCount / problems.length) * 100);
    container.innerHTML = `
      <div class="completion-screen view">
        <div class="completion-emoji">${score >= 80 ? '🎉' : score >= 50 ? '👍' : '💪'}</div>
        <div class="completion-title">${score >= 80 ? 'Excellent!' : score >= 50 ? 'Good Job!' : 'Keep Practicing!'}</div>
        <div class="completion-subtitle">You got ${correctCount} out of ${problems.length} correct</div>
        <div class="completion-score">${score}%</div>
        <div class="completion-btns">
          <button class="btn btn-pink btn-full" id="prob-restart">🔄 Try Again</button>
          <button class="btn btn-ghost btn-full" id="prob-back">← Back to Topic</button>
        </div>
      </div>`;

    if (score >= 70) launchConfetti(document.querySelector('.completion-score'));

    document.getElementById('prob-restart').addEventListener('click', () => {
      currentIndex = 0;
      correctCount = 0;
      renderProblem(0);
    });
    document.getElementById('prob-back').addEventListener('click', () => history.back());

    if (typeof onComplete === 'function') onComplete(score);
  }

  renderProblem(0);
}

// ─── QUIZ ENGINE ──────────────────────────────────────────────────────────────

export function renderQuiz(allTopics, container, onComplete) {
  // Gather all problems from all topics
  const allProblems = [];
  allTopics.forEach(topic => {
    (topic.problems || []).forEach(p => allProblems.push({ ...p, _topicTitle: topic.title }));
  });

  if (allProblems.length === 0) {
    container.innerHTML = `<div class="completion-screen">
      <div class="completion-emoji">📭</div>
      <div class="completion-title">No problems available yet</div>
    </div>`;
    return;
  }

  // Pick 10 random problems (shuffle + slice)
  const shuffled = [...allProblems].sort(() => Math.random() - 0.5);
  const quizProblems = shuffled.slice(0, Math.min(10, shuffled.length));

  let currentIndex = 0;
  let correctCount = 0;

  function renderQuizHeader() {
    return `<div class="quiz-header">
      <div class="quiz-title">🎯 Mixed Quiz</div>
      <div class="quiz-subtitle">Test yourself across all topics</div>
    </div>`;
  }

  function renderQP(idx) {
    const prob = quizProblems[idx];
    const progress = Math.round((idx / quizProblems.length) * 100);

    container.innerHTML = `
      <div class="view quiz-container">
        ${renderQuizHeader()}
        <div class="problem-progress-bar-wrap">
          <div class="problem-progress-bar">
            <div class="problem-progress-fill" style="width:${progress}%"></div>
          </div>
          <div class="problem-counter">Question ${idx + 1} / ${quizProblems.length} &nbsp;|&nbsp; <span style="color:#6c63ff;font-weight:800;">${prob._topicTitle}</span></div>
        </div>
        <div class="problem-card" id="problem-card">
          <div class="problem-type-tag">${prob.type === 'fill-in' ? '✏️ Fill In' : '🔘 Multiple Choice'}</div>
          <div class="problem-question">${escapeHtml(prob.question)}</div>
          ${prob.type === 'multiple-choice' ? renderMCQ(prob) : renderFIQ()}
        </div>
        <div class="explanation-panel" id="explanation-panel" style="display:none;">
          ${renderExp(prob.explanation)}
        </div>
        <div class="problem-action-btns" id="action-btns" style="display:none;"></div>
      </div>`;

    if (prob.type === 'multiple-choice') {
      attachMCQ(prob, idx);
    } else {
      attachFIQ(prob, idx);
    }
  }

  function renderMCQ(prob) {
    const letters = ['A','B','C','D','E'];
    return `<div class="mc-options" id="mc-options">
      ${(prob.choices || []).map((c, i) => `
        <button class="mc-btn" data-choice="${escapeAttr(c)}">
          <span class="mc-letter">${letters[i]}</span>
          <span>${escapeHtml(c)}</span>
        </button>`).join('')}
    </div>`;
  }
  function renderFIQ() {
    return `<div class="fill-input-wrap">
      <input class="fill-input" id="fill-input" type="text" placeholder="Type your answer..." autocomplete="off" />
      <button class="btn btn-purple btn-full submit-btn" id="submit-fill">Check Answer →</button>
    </div>`;
  }
  function renderExp(exp) {
    if (!exp) return '<p>No explanation available.</p>';
    const steps = (exp.steps || []).map((s, i) => `<li><span class="step-num">${i+1}</span> ${escapeHtml(s)}</li>`).join('');
    const tip = exp.tip ? `<div class="explanation-tip">💡 ${escapeHtml(exp.tip)}</div>` : '';
    return `<div class="explanation-title">💡 Solution Steps</div><ul class="step-list">${steps}</ul>${tip}`;
  }

  function correctQ(idx, el) {
    correctCount++;
    if (el) el.classList.add('correct');
    const panel = document.getElementById('explanation-panel');
    if (panel) panel.style.display = 'none';
    const ab = document.getElementById('action-btns');
    ab.style.display = 'flex';
    ab.innerHTML = `<button class="btn btn-teal btn-full" id="next-btn">${idx+1 < quizProblems.length ? 'Next Question →' : 'See Results →'}</button>`;
    document.getElementById('next-btn').addEventListener('click', () => advQ(idx));
    launchConfetti(el || document.getElementById('problem-card'));
    showXPToast('+3 XP');
  }

  function wrongQ(idx, el) {
    if (el) el.classList.add('wrong');
    const panel = document.getElementById('explanation-panel');
    if (panel) panel.style.display = 'block';
    const ab = document.getElementById('action-btns');
    ab.style.display = 'flex';
    ab.innerHTML = `
      <button class="btn btn-ghost" id="try-again-btn">↺ Try Again</button>
      <button class="btn btn-pink" id="next-btn-wrong">${idx+1 < quizProblems.length ? 'Next →' : 'Finish →'}</button>`;
    document.getElementById('try-again-btn').addEventListener('click', () => renderQP(idx));
    document.getElementById('next-btn-wrong').addEventListener('click', () => advQ(idx));
  }

  function advQ(idx) {
    if (idx + 1 < quizProblems.length) renderQP(idx + 1);
    else showResults();
  }

  function attachMCQ(prob, idx) {
    document.querySelectorAll('.mc-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        document.querySelectorAll('.mc-btn').forEach(b => b.disabled = true);
        const chosen = btn.getAttribute('data-choice');
        if (answersMatch(chosen, prob.answer)) {
          correctQ(idx, btn);
        } else {
          wrongQ(idx, btn);
          document.querySelectorAll('.mc-btn').forEach(b => {
            if (answersMatch(b.getAttribute('data-choice'), prob.answer)) b.classList.add('correct');
          });
        }
      });
    });
  }

  function attachFIQ(prob, idx) {
    const input = document.getElementById('fill-input');
    const submitBtn = document.getElementById('submit-fill');
    if (!input || !submitBtn) return;
    const check = () => {
      if (!input.value.trim()) return;
      submitBtn.disabled = true;
      input.readOnly = true;
      if (answersMatch(input.value, prob.answer)) {
        input.classList.add('correct');
        correctQ(idx, input);
      } else {
        input.classList.add('wrong');
        wrongQ(idx, input);
      }
    };
    submitBtn.addEventListener('click', check);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') check(); });
  }

  function showResults() {
    const score = Math.round((correctCount / quizProblems.length) * 100);
    const emoji = score >= 90 ? '🏆' : score >= 70 ? '🎉' : score >= 50 ? '👍' : '💪';
    const msg = score >= 90 ? 'Outstanding!' : score >= 70 ? 'Great Work!' : score >= 50 ? 'Not Bad!' : 'Keep Practicing!';
    container.innerHTML = `
      <div class="results-screen view">
        <div class="results-emoji">${emoji}</div>
        <div class="results-title">${msg}</div>
        <div class="results-score-big">${score}%</div>
        <div class="results-score-label">${correctCount} / ${quizProblems.length} correct</div>
        <div class="results-breakdown">
          <div class="results-stat"><div class="results-stat-num" style="color:#6c63ff;">${correctCount}</div><div class="results-stat-label">Correct</div></div>
          <div class="results-stat"><div class="results-stat-num" style="color:#ff6584;">${quizProblems.length - correctCount}</div><div class="results-stat-label">Wrong</div></div>
          <div class="results-stat"><div class="results-stat-num" style="color:#f9a828;">${quizProblems.length}</div><div class="results-stat-label">Total</div></div>
        </div>
        <div class="results-btns">
          <button class="btn btn-yellow btn-full" id="quiz-retake">🔄 Retake Quiz</button>
          <button class="btn btn-ghost btn-full" id="quiz-home">🏠 Back to Home</button>
        </div>
      </div>`;

    if (score >= 60) launchConfetti(document.querySelector('.results-score-big'));

    document.getElementById('quiz-retake').addEventListener('click', () => {
      currentIndex = 0;
      correctCount = 0;
      renderQP(0);
    });
    document.getElementById('quiz-home').addEventListener('click', () => {
      location.hash = '#home';
    });

    if (typeof onComplete === 'function') onComplete(score);
  }

  renderQP(0);
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function escapeAttr(str) {
  if (typeof str !== 'string') return '';
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}
