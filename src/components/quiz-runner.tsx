"use client";

import { useState } from "react";
import Link from "next/link";
import { QuestionCard, type GradePayload } from "@/components/question-card";
import { ResultReview } from "@/components/result-review";
import { StatusBlock } from "@/components/status-block";
import { Button } from "@/components/ui/button";
import { isErrorSnapshot, isServerSnapshot, useBrowserValue } from "@/lib/browser-store";
import { correctDisplay, userAnswerDisplay } from "@/lib/grade";
import { questionById } from "@/lib/questions";
import {
  ACTIVE_EVENT,
  ACTIVE_KEY,
  parseActiveQuiz,
  saveActiveQuiz,
  saveQuizResult,
} from "@/lib/storage";
import type { ActiveQuiz, StoredQuiz } from "@/lib/types";

function toStoredQuiz(quiz: ActiveQuiz): StoredQuiz {
  return {
    id: quiz.id,
    createdAt: quiz.createdAt,
    topicIds: quiz.topicIds,
    length: quiz.questionIds.length,
    score: quiz.responses.filter((item) => item.correct).length,
    items: quiz.responses,
  };
}

export function QuizRunner() {
  const raw = useBrowserValue("session", ACTIVE_KEY, ACTIVE_EVENT);
  const [storeError, setStoreError] = useState<string | null>(null);

  if (isServerSnapshot(raw)) {
    return (
      <StatusBlock
        title="Loading this quiz"
        body="Reading the set that was just drawn in this browser tab."
      />
    );
  }

  if (isErrorSnapshot(raw) || storeError) {
    return (
      <StatusBlock
        title="This quiz could not be opened"
        body={
          storeError ??
          "The browser refused to read the quiz saved in this tab. Start again from the quiz page."
        }
        href="/quiz"
        action="Back to quiz setup"
      />
    );
  }

  let quiz: ActiveQuiz | null = null;
  let broken = false;
  try {
    quiz = parseActiveQuiz(raw);
  } catch {
    broken = true;
  }

  if (broken) {
    return (
      <StatusBlock
        title="This quiz could not be opened"
        body="The saved quiz in this tab was unreadable. Start again from the quiz page."
        href="/quiz"
        action="Back to quiz setup"
      />
    );
  }

  if (!quiz || quiz.questionIds.length === 0) {
    return (
      <StatusBlock
        title="No quiz is open in this tab"
        body="Start a quiz to draw questions. A finished quiz stays in History on this browser."
        href="/quiz"
        action="Set up a quiz"
      />
    );
  }

  const active = quiz;

  function persist(next: ActiveQuiz) {
    try {
      saveActiveQuiz(next);
    } catch {
      setStoreError("The browser refused to store this quiz.");
    }
  }

  function gradeCurrent(result: GradePayload) {
    const question = questionById(active.questionIds[active.index] ?? "");
    if (!question) return;
    if (active.responses.some((item) => item.questionId === question.id)) return;
    persist({
      ...active,
      responses: [
        ...active.responses,
        {
          questionId: question.id,
          topicId: question.topicId,
          prompt: question.prompt,
          rawAnswer: result.userAnswer,
          userAnswer: userAnswerDisplay(question, result.userAnswer),
          correct: result.correct,
          correctDisplay: correctDisplay(question),
          solution: question.solution,
        },
      ],
    });
  }

  function finish() {
    const done: ActiveQuiz = {
      ...active,
      index: active.questionIds.length,
      historySaved: true,
    };
    if (!active.historySaved) {
      try {
        saveQuizResult(toStoredQuiz(done));
      } catch {
        setStoreError("The browser refused to store this result.");
        return;
      }
    }
    persist(done);
  }

  if (active.index >= active.questionIds.length) {
    const stored = toStoredQuiz(active);
    return (
      <div className="space-y-4">
        <ResultReview quiz={stored} heading={`${stored.score} of ${active.questionIds.length}`} />
        <Button className="h-10 px-4" render={<Link href="/history" />}>
          Open history
        </Button>
      </div>
    );
  }

  const current = questionById(active.questionIds[active.index] ?? "");
  if (!current) {
    return (
      <StatusBlock
        title="A question in this quiz is missing"
        body="The bank no longer contains one of the drawn items. Start a new quiz."
        href="/quiz"
        action="Set up a quiz"
      />
    );
  }

  const response = active.responses.find((item) => item.questionId === current.id);
  const last = active.index === active.questionIds.length - 1;

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Question {active.index + 1} of {active.questionIds.length}
      </p>
      <QuestionCard
        key={current.id}
        question={current}
        initial={
          response ? { correct: response.correct, userAnswer: response.rawAnswer } : null
        }
        onGraded={gradeCurrent}
      />
      {response ? (
        <Button
          type="button"
          className="h-10 px-4"
          onClick={() => {
            if (last) finish();
            else persist({ ...active, index: active.index + 1 });
          }}
        >
          {last ? "See results" : "Next question"}
        </Button>
      ) : null}
    </div>
  );
}
