# Algebra 1 Study Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a full Algebra 1 study website with 9 curriculum units, save-code progress system, Desmos calculator, flashcards, problems, and mixed quiz — deployed on GitHub Pages.

**Architecture:** Multi-file vanilla HTML/CSS/JS with ES modules. Hash-based routing inside app.html. index.html handles save-code entry/generation and redirects. All content in per-unit data files.

**Tech Stack:** HTML5, CSS3, vanilla JS (ES modules), Desmos API v1.9, Google Fonts (Nunito), GitHub Pages.

---

## Task 1: Project Scaffold + GitHub Pages

**Files:**
- Create: `index.html`
- Create: `app.html`
- Create: `css/style.css`
- Create: `js/app.js`
- Create: `js/state.js`
- Create: `js/practice.js`
- Create: `js/calculator.js`
- Create: `js/data/index.js`
- Create: `.nojekyll`

- [ ] Push all skeleton files to GitHub main branch
- [ ] Verify GitHub Pages is enabled (Settings → Pages → main branch / root)

---

## Task 2: CSS Design System

**Files:** `css/style.css`

Full Candy Pop theme: Nunito font, purple/pink/yellow/teal palette, card styles, pill buttons, animations, responsive grid.

---

## Task 3: State Management

**Files:** `js/state.js`

Save code generation (`adjective-animal-4digits`), localStorage read/write, XP award, streak tracking.

---

## Task 4: Hash Router + App Shell

**Files:** `js/app.js`, `app.html`

Hash router, view mounting, navigation between home/unit/topic/flashcards/problems/quiz/results.

---

## Tasks 5–13: Content Data (per unit)

**Files:** `js/data/unit1.js` through `js/data/unit9.js`, `js/data/index.js`

Each unit file exports an object with topics, each topic having flashcards (6-10), problems (8-12), and a guide.

---

## Task 14: Landing Page UI

**Files:** `index.html`

Save code generation display, copy button, return-user code entry, redirect to app.html.

---

## Task 15: Home + Unit + Topic Views

**Files:** `js/app.js`

Unit grid, XP/streak header, unit overview with progress bar, topic detail with 3 mode buttons + guide.

---

## Task 16: Flashcard Engine

**Files:** `js/practice.js`

Flip animation, Got It/Still Learning, deck completion, XP award.

---

## Task 17: Problem Engine

**Files:** `js/practice.js`

MC + fill-in-blank, answer normalization, wrong-answer explanation panel, confetti on correct.

---

## Task 18: Mixed Quiz

**Files:** `js/practice.js`

10 random questions from all topics, scoring, results screen.

---

## Task 19: Desmos Calculator

**Files:** `js/calculator.js`

Floating top-left button, slide-out overlay, Desmos API embed.

---

## Task 20: Polish + Responsive

**Files:** `css/style.css`, all HTML

Confetti animation, shake animation, progress bars, mobile responsive.
