# Marginalia

A personal problem set for the mathematics that shows up in an economics master's: derivatives, partial derivatives, matrices, elasticity, and constrained optimization.

One person uses it in the browser. There are no accounts. Quizzes are saved in `localStorage` on that browser. An open quiz is kept in `sessionStorage` for the tab.

## What you can do

- Practice one topic at a time. Answer on the page, open **Guidance** for the method without the answer, then check a step-by-step solution.
- Build a quiz of 5 or 10 questions from one or more topics. Questions are shuffled and do not repeat inside that quiz.
- Reopen past quiz scores and each question's outcome from History.

## Run locally

```bash
npm install
npm run dev
```

The dev server listens on [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run lint
npm run verify
```

`npm run verify` checks the question bank: every numeric answer is recomputed, every multiple-choice key is checked against the intended expression, and Guidance text is scanned so it does not contain the answer.

## Out of scope

No accounts, no authentication, and no database. No topics beyond the five above.
