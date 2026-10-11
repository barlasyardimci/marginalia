"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ResultReview } from "@/components/result-review";
import { StatusBlock } from "@/components/status-block";
import { Button } from "@/components/ui/button";
import { formatWhen, HISTORY_EVENT, HISTORY_KEY, parseHistory } from "@/lib/storage";
import { getTopic } from "@/lib/topics";
import type { StoredQuiz } from "@/lib/types";

export function HistoryBrowser({ limit }: { limit?: number }) {
  const [quizzes, setQuizzes] = useState<StoredQuiz[]>([]);
  const [phase, setPhase] = useState<"loading" | "ready" | "error">("loading");
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    function read() {
      try {
        setQuizzes(parseHistory(window.localStorage.getItem(HISTORY_KEY) ?? ""));
        setPhase("ready");
      } catch {
        setPhase("error");
      }
    }

    const timeout = window.setTimeout(read, 0);
    window.addEventListener(HISTORY_EVENT, read);
    window.addEventListener("storage", read);
    return () => {
      window.clearTimeout(timeout);
      window.removeEventListener(HISTORY_EVENT, read);
      window.removeEventListener("storage", read);
    };
  }, []);

  if (phase === "loading") {
    return (
      <StatusBlock
        title="Opening saved quizzes"
        body="Reading scores stored in this browser."
      />
    );
  }

  if (phase === "error") {
    return (
      <StatusBlock
        title="Saved quizzes could not be read"
        body="This browser blocked local storage, or the saved list is damaged. New quizzes can still be taken, but past scores are unavailable right now."
      />
    );
  }

  if (quizzes.length === 0) {
    return (
      <StatusBlock
        title="No quizzes yet"
        body="When you finish a quiz, the score and each question stay in this browser. Practice questions are not saved."
        href="/quiz"
        action="Start a quiz"
      />
    );
  }

  const visible = typeof limit === "number" ? quizzes.slice(0, limit) : quizzes;
  const open = quizzes.find((quiz) => quiz.id === openId) ?? null;

  return (
    <div className="space-y-4">
      <ul className="space-y-3">
        {visible.map((quiz) => (
          <li key={quiz.id} className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
            <div className="flex flex-wrap items-end justify-between gap-3">
              <div>
                <p className="font-heading text-2xl">
                  {quiz.score}
                  <span className="text-base text-muted-foreground"> / {quiz.length}</span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{formatWhen(quiz.createdAt)}</p>
                <p className="mt-1 text-sm">
                  {quiz.topicIds.map((id) => getTopic(id).title).join(" · ")}
                </p>
              </div>
              <Button
                type="button"
                variant="outline"
                className="h-9 px-3"
                onClick={() => setOpenId(openId === quiz.id ? null : quiz.id)}
              >
                {openId === quiz.id ? "Hide" : "Review"}
              </Button>
            </div>
          </li>
        ))}
      </ul>
      {open ? <ResultReview quiz={open} /> : null}
      {limit && quizzes.length > limit ? (
        <Button variant="outline" className="h-10 px-4" nativeButton={false} render={<Link href="/history" />}>
          All saved quizzes
        </Button>
      ) : null}
    </div>
  );
}
