# Algebra 1 Study Site — Design Spec
**Date:** 2026-05-05
**Status:** Approved

---

## Overview

A plug-and-play Algebra 1 study website. No accounts, no login. Users get an auto-generated save code that stores their progress in localStorage. Fun, bubbly Duolingo-style design. Covers the full standard Algebra 1 curriculum across 9 units with flashcards, practice problems, and a mixed quiz mode. Desmos graphing calculator always available via a slide-out panel.

---

## Architecture

**Stack:** Multi-file vanilla HTML/CSS/JS. No framework, no build step.  
**Hosting:** GitHub Pages (`bastianm1112-svg/study-algebra`).  
**Routing:** Hash-based (`#home`, `#unit/2`, `#practice/slope-intercept-form`).

### File Structure

```
index.html              ← home/landing (generate or enter save code)
app.html                ← main app shell (all views rendered by JS)
css/
  style.css             ← Candy Pop theme, animations, responsive layout
js/
  app.js                ← hash router, save code system, progress state
  data.js               ← all topics, flashcards, problems, guide content
  practice.js           ← flashcard engine, problem checker, quiz mode
  calculator.js         ← Desmos API embed + slide-out panel logic
```

`index.html` handles save-code entry/generation and redirects to `app.html#home` once a code is active.

---

## Curriculum — 9 Units

### Unit 1 — Foundations
- Variables & Expressions
- Order of Operations (PEMDAS)
- Properties of Real Numbers

### Unit 2 — Linear Equations
- One-Step Equations
- Two-Step Equations
- Multi-Step Equations
- Variables on Both Sides
- Literal Equations & Formulas

### Unit 3 — Inequalities
- One-Step Inequalities
- Multi-Step Inequalities
- Compound Inequalities
- Absolute Value Equations & Inequalities

### Unit 4 — Functions & Graphing
- Introduction to Functions
- Graphing on the Coordinate Plane
- Slope & Rate of Change
- Slope-Intercept Form (y = mx + b)
- Point-Slope Form
- Standard Form

### Unit 5 — Systems of Equations
- Solving by Graphing
- Solving by Substitution
- Solving by Elimination

### Unit 6 — Exponents & Polynomials
- Exponent Rules
- Multiplying & Dividing Monomials
- Adding & Subtracting Polynomials
- Multiplying Polynomials (FOIL)

### Unit 7 — Factoring
- GCF & Factor by Grouping
- Factoring Trinomials (a = 1)
- Factoring Trinomials (a ≠ 1)
- Difference of Squares & Perfect Square Trinomials

### Unit 8 — Quadratic Equations
- Solving by Factoring
- Solving by Square Roots
- Completing the Square
- The Quadratic Formula
- The Discriminant

### Unit 9 — Radicals & Rational Expressions
- Simplifying Radicals
- Radical Operations
- Basic Rational Expressions

---

## Save Code System

- On first visit, auto-generate a random memorable code: `adjective-animal-4digits` (e.g. `swift-penguin-7842`).
- Displayed prominently on the home screen with a one-click copy button.
- Progress stored in `localStorage` under a key derived from the code.
- On return: user enters code in a text field to restore all progress.
- **Stored per code:** unit progress %, topic completion flags, best score per topic, total XP earned.

---

## Practice Modes

Each topic has three modes, accessible from the topic detail screen.

### Flashcards
- Term/concept on front, definition/formula/example on back.
- Flip animation on click.
- "Got It" / "Still Learning" buttons to self-rate.
- Deck shuffles automatically.
- **6–10 flashcards per topic.**

### Solve Problems
- Mix of multiple-choice and fill-in-the-blank questions.
- **8–12 problems per topic.**
- **Answer normalization:** fill-in-the-blank answers strip whitespace, ignore case, and accept equivalent forms (e.g. `x=5`, `x = 5`, and `5` all accepted when the answer is x = 5). Checked via a normalize function in `practice.js`.
- **On wrong answer:** a step-by-step worked solution panel slides in. Shows each step of the correct solution, highlights where the error likely occurred, and offers a "Try Again" button.
- On correct answer: green flash + confetti burst animation.

### Mixed Quiz
- 10 random questions pulled from **all topics** (not limited to practiced topics — available from day one).
- Scored out of 10, result saved to history with timestamp.
- Accessible from the home screen and unit overview.

---

## Mini Guides

- Every topic has a "Guide" button (book icon) always visible on the topic screen.
- **Never auto-shown** — always manual access only.
- Guide content: concept explanation, 2–3 worked examples, common mistakes, tips.
- Example guides: "How to graph inequalities on a number line", "Using the quadratic formula step by step", "The FOIL method explained", "How to identify slope from an equation".

---

## Desmos Calculator

- Floating button pinned top-left, visible on every screen.
- On click: full-screen overlay panel slides in with the Desmos graphing calculator embedded via `https://www.desmos.com/api/v1.9/calculator.js`.
- Close button (×) dismisses the panel without losing calculator state.
- Panel is z-indexed above all other UI including practice screens.

---

## Design System — Candy Pop

| Token | Value |
|-------|-------|
| Font | Nunito (Google Fonts) — round, friendly |
| Primary | `#6c63ff` (purple) |
| Accent 2 | `#ff6584` (pink) |
| Accent 3 | `#f9a828` (yellow) |
| Accent 4 | `#43c6ac` (teal) |
| Background | `#f8f7ff` (off-white, purple-tinted) |
| Card background | `#ffffff` |
| Border radius | `20px` on cards, `50px` on pill buttons |
| Shadow | `0 4px 16px rgba(108,99,255,0.12)` |

### Interactions
- Buttons: pill-shaped, bold font weight, subtle bounce on click (`transform: scale(0.96)`)
- Correct answer: green `#2ecc71` flash + CSS confetti burst
- Wrong answer: red `#ff6584` shake animation → explanation panel slides up
- Page transitions: fade-in (150ms)

---

## Progress & XP

- Each topic completion awards XP (flashcards = 10 XP, problems = 20 XP, quiz = 30 XP).
- Unit overview shows a progress bar (% of topics practiced).
- Home screen shows total XP and a streak counter (days in a row practiced, stored in localStorage).
- No leaderboard — purely personal progress.

---

## Screens / Views

| Hash Route | Screen |
|-----------|--------|
| `index.html` | Landing — save code entry/generation |
| `#home` | Unit grid overview + XP/streak summary |
| `#unit/:id` | Unit overview — topic list with completion badges |
| `#topic/:id` | Topic detail — Guide button, 3 practice mode buttons |
| `#flashcards/:id` | Flashcard deck for a topic |
| `#problems/:id` | Problem practice for a topic |
| `#quiz` | Mixed 10-question quiz |
| `#results` | Quiz results screen |

---

## Non-Goals

- No user accounts or backend.
- No server-side rendering.
- No AI-generated hints (all explanations are hardcoded, high quality).
- No social features (sharing, leaderboards).
- No mobile app — responsive web only.
