import { isCorrect, parseNumeric } from "../src/lib/grade";
import { questions } from "../src/lib/questions";
import { buildQuiz } from "../src/lib/quiz";
import { topics } from "../src/lib/topics";
import type { ChoiceQuestion, NumericQuestion, Question } from "../src/lib/types";

function assert(condition: boolean, message: string) {
  if (!condition) throw new Error(message);
}

function solve2(
  a11: number,
  a12: number,
  b1: number,
  a21: number,
  a22: number,
  b2: number,
): [number, number] {
  const det = a11 * a22 - a12 * a21;
  return [(b1 * a22 - a12 * b2) / det, (a11 * b2 - b1 * a21) / det];
}

const [leontief1, leontief2] = solve2(0.5, -0.25, 3, -0.25, 0.5, 3);
const [systemX, systemY] = solve2(2, 1, 5, 1, 3, 10);
const [income, rate] = solve2(1, 2, 100, 1, -1, 40);

const yUtility = 40 / 8;
const xUtility = 2 * yUtility;
const lambda = yUtility / 2;
const labour = Math.sqrt(18 / 2);
const capital = 2 * labour;
const logX = 12 / 4;
const logY = 2 * logX;
const cobbY = 9 / 3;
const cobbX = 2 * cobbY;
const shareX = 10 / 2;
const budgetY = 3 * (24 / 6);

const expectedNumeric: Record<string, number> = {
  d2: 6 * 5 + 8,
  d4: 80 - 2 * 10,
  d5: 12 - 4,
  d6: (50 - 10) / 2,
  d7: 3 * 2 ** 2 - 12 * 2 + 15,
  d9: 40 - 4 * 5,
  p1: 6 * 2 * 3,
  p2: 3 * 2 ** 2 + 4,
  p3: 5 * Math.sqrt(4 / 4),
  p4: 2 * 3 * 2,
  p5: 3 ** 2,
  p7: 2 * 3 + 2 * 1,
  p8: 6 * 1 * 1 ** 2,
  p9: 3 + 5,
  p10: 1 / 4,
  m1: 1 * 4 - 2 * 3,
  m2: leontief1,
  m4: systemX,
  m5: 4 + 8,
  m6: 1 * 3 + 2 * 4,
  m7: 2 * 4 + 1 * 0,
  m8: income,
  m9: rate,
  m10: 4 / (1 * 4 - 2 * 3),
  e2: -4 * (10 / 80),
  e3: ((30 - 50) / (14 - 10)) * ((10 + 14) / (50 + 30)),
  e4: ((50 - 40) / (2500 - 2000)) * ((2000 + 2500) / (40 + 50)),
  e5: ((50 - 30) / (20 - 10)) * ((10 + 20) / (30 + 50)),
  e7: 200 / 10,
  e8: 4 / 10,
  e9: 10 / -20,
  l1: xUtility,
  l2: lambda,
  l3: labour,
  l4: capital,
  l5: logX,
  l6: logY,
  l7: cobbX,
  l8: cobbY,
  l9: shareX,
  l10: budgetY,
};

assert(Math.abs(leontief2 - 12) < 1e-9, "sector 2 gross output should be 12");
assert(Math.abs(systemY - 3) < 1e-9, "linear system y should be 3");
assert(Math.abs(rate - 20) < 1e-9, "interest rate should be 20");

const expectedChoice: Record<string, string> = {
  d1: "4q+10",
  d3: "100-4q",
  d8: "20x-x^{2}",
  d10: "$10q$",
  p6: "4+y",
  m3: "\\frac{1}{4}",
  e1: "-\\frac{2}{3}",
  e6: "$-1$ at every positive price",
  e10: "\\frac{1}{3}",
};

function compact(value: string): string {
  return value.replace(/\s+/g, "").toLowerCase();
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) {
    const next = x % y;
    x = y;
    y = next;
  }
  return x || 1;
}

function reducedFraction(value: number): string | null {
  const sign = value < 0 ? "-" : "";
  const abs = Math.abs(value);
  for (let denominator = 2; denominator <= 12; denominator += 1) {
    const numerator = abs * denominator;
    if (Math.abs(numerator - Math.round(numerator)) > 1e-8) continue;
    const rounded = Math.round(numerator);
    const divisor = gcd(rounded, denominator);
    const den = denominator / divisor;
    if (den === 1) return null;
    return `${sign}${rounded / divisor}/${den}`;
  }
  return null;
}

function guidanceLeaks(question: Question): string[] {
  const guidance = question.guidance;
  const leaks: string[] = [];
  if (question.kind === "numeric") {
    const tokens = guidance.match(/-?\d+(?:\.\d+)?/g) ?? [];
    for (const token of tokens) {
      const value = Number(token);
      if (Math.abs(value - question.answer) <= question.tolerance) {
        leaks.push(`numeric token ${token}`);
      }
    }
    const printed = String(question.answer);
    const banned = Number.isInteger(question.answer)
      ? []
      : [printed, printed.replace(".", ","), printed.replace("-", "−")];
    const fraction = reducedFraction(question.answer);
    if (fraction && !Number.isInteger(question.answer)) {
      banned.push(fraction, fraction.replace("-", "−"));
      const [num, den] = fraction.replace("-", "").split("/");
      banned.push(`\\frac{${fraction.startsWith("-") ? "-" : ""}${num}}{${den}}`);
    }
    const compactGuidance = compact(guidance);
    for (const phrase of banned) {
      if (phrase && compactGuidance.includes(compact(phrase))) {
        leaks.push(`phrase ${phrase}`);
      }
    }
  } else {
    const correct = question.choices.find((choice) => choice.id === question.correctChoiceId);
    if (!correct) return ["missing correct choice"];
    if (compact(guidance).includes(compact(correct.text))) {
      leaks.push("correct choice text");
    }
  }
  return leaks;
}

const ids = new Set<string>();
for (const topic of topics) {
  const bank = questions.filter((question) => question.topicId === topic.id);
  assert(bank.length >= 10, `${topic.id} has ${bank.length} questions`);
}

for (const question of questions) {
  assert(!ids.has(question.id), `duplicate id ${question.id}`);
  ids.add(question.id);
  assert(question.prompt.length > 20, `${question.id} prompt is short`);
  assert(question.guidance.length > 40, `${question.id} guidance is short`);
  assert(question.solution.length > 0, `${question.id} has no solution`);
  const leaks = guidanceLeaks(question);
  assert(leaks.length === 0, `${question.id} guidance leaks: ${leaks.join(", ")}`);

  if (question.kind === "numeric") {
    const expected = expectedNumeric[question.id];
    assert(expected !== undefined, `no independent check for ${question.id}`);
    assert(
      Math.abs(question.answer - expected) < 1e-9,
      `${question.id} bank ${question.answer} != computed ${expected}`,
    );
    assert(isCorrect(question, String(expected)), `${question.id} does not grade its answer`);
    assert(parseNumeric(String(expected).replace(".", ",")) !== null, "comma parse");
  } else {
    const marker = expectedChoice[question.id];
    assert(marker !== undefined, `no choice check for ${question.id}`);
    const correct = question.choices.find((choice) => choice.id === question.correctChoiceId);
    if (!correct) throw new Error(`${question.id} missing correct choice`);
    assert(
      compact(correct.text).includes(compact(marker)) || correct.text === marker,
      `${question.id} marked choice does not contain ${marker}: ${correct.text}`,
    );
    assert(isCorrect(question, question.correctChoiceId), `${question.id} choice grade failed`);
    assert(
      question.choices.filter((choice) => compact(choice.text).includes(compact(marker))).length === 1,
      `${question.id} marker is ambiguous`,
    );
  }
}

assert(Object.keys(expectedNumeric).length === questions.filter((q) => q.kind === "numeric").length, "numeric coverage");
assert(Object.keys(expectedChoice).length === questions.filter((q) => q.kind === "choice").length, "choice coverage");

const quiz = buildQuiz(["derivatives"], 10, () => 0.42);
assert(quiz.length === 10, "quiz length");
assert(new Set(quiz.map((question) => question.id)).size === 10, "quiz repeats");
assert(quiz.every((question) => question.topicId === "derivatives"), "quiz topic");

let threw = false;
try {
  buildQuiz(["derivatives"], 10, () => 0);
  buildQuiz([], 5);
} catch {
  threw = true;
}
assert(threw, "empty topic selection should throw");

const numeric = questions.find((question) => question.id === "d2") as NumericQuestion;
assert(!isCorrect(numeric, ""), "blank is not correct");
assert(!isCorrect(numeric, "37"), "37 is not 38");
assert(isCorrect(numeric, "38.0"), "38.0 should pass");
assert(isCorrect(questions.find((question) => question.id === "l2") as NumericQuestion, "5/2"), "5/2 should pass");

const choice = questions.find((question) => question.id === "d1") as ChoiceQuestion;
assert(!isCorrect(choice, "b"), "wrong choice");

console.log(
  `Verified ${questions.length} questions across ${topics.length} topics (${questions.filter((q) => q.kind === "choice").length} multiple choice, ${questions.filter((q) => q.kind === "numeric").length} numeric).`,
);
