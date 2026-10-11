import type { Question } from "@/lib/types";

export function parseNumeric(raw: string): number | null {
  const trimmed = raw.trim().replace(/\s+/g, "").replace(",", ".");
  const fraction = trimmed.match(/^([+-]?\d+(?:\.\d+)?)\/([+-]?\d+(?:\.\d+)?)$/);
  if (fraction) {
    const denominator = Number(fraction[2]);
    if (denominator === 0) return null;
    return Number(fraction[1]) / denominator;
  }
  if (!/^[+-]?\d+(?:\.\d+)?$/.test(trimmed)) return null;
  return Number(trimmed);
}

export function formatNumber(value: number): string {
  if (Number.isInteger(value)) return String(value);
  const rounded = Math.round(value * 1e6) / 1e6;
  return String(rounded);
}

export function correctDisplay(question: Question): string {
  if (question.kind === "choice") {
    const choice = question.choices.find((item) => item.id === question.correctChoiceId);
    return choice?.text ?? "";
  }
  return formatNumber(question.answer);
}

export function userAnswerDisplay(question: Question, raw: string): string {
  if (question.kind === "choice") {
    return question.choices.find((item) => item.id === raw)?.text ?? raw;
  }
  return raw.trim();
}

export function isCorrect(question: Question, raw: string): boolean {
  if (question.kind === "choice") {
    return raw === question.correctChoiceId;
  }
  const value = parseNumeric(raw);
  if (value === null) return false;
  return Math.abs(value - question.answer) <= question.tolerance;
}
