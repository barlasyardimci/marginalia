"use client";

import { writeBrowserValue } from "@/lib/browser-store";
import type { ActiveQuiz, StoredQuiz } from "@/lib/types";

export const HISTORY_KEY = "marginalia.quizHistory.v1";
export const ACTIVE_KEY = "marginalia.activeQuiz.v1";
export const HISTORY_EVENT = "marginalia-history";
export const ACTIVE_EVENT = "marginalia-active";

export function parseHistory(raw: string): StoredQuiz[] {
  if (!raw) return [];
  const parsed = JSON.parse(raw) as StoredQuiz[];
  if (!Array.isArray(parsed)) {
    throw new Error("Saved quizzes were not a list.");
  }
  return parsed.sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function saveQuizResult(quiz: StoredQuiz): void {
  const existing = parseHistory(window.localStorage.getItem(HISTORY_KEY) ?? "").filter(
    (item) => item.id !== quiz.id,
  );
  writeBrowserValue(
    window.localStorage,
    HISTORY_KEY,
    JSON.stringify([quiz, ...existing]),
    HISTORY_EVENT,
  );
}

export function parseActiveQuiz(raw: string): ActiveQuiz | null {
  if (!raw) return null;
  return JSON.parse(raw) as ActiveQuiz;
}

export function saveActiveQuiz(quiz: ActiveQuiz): void {
  writeBrowserValue(window.sessionStorage, ACTIVE_KEY, JSON.stringify(quiz), ACTIVE_EVENT);
}

export function formatWhen(iso: string): string {
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return iso;
  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}
