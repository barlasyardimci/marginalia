"use client";

import { useState } from "react";
import { RichText } from "@/components/rich-text";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { correctDisplay, isCorrect, parseNumeric, userAnswerDisplay } from "@/lib/grade";
import { getTopic } from "@/lib/topics";
import type { Question } from "@/lib/types";

export type GradePayload = {
  correct: boolean;
  userAnswer: string;
};

export function QuestionCard({
  question,
  initial,
  onGraded,
}: {
  question: Question;
  initial?: GradePayload | null;
  onGraded?: (result: GradePayload) => void;
}) {
  const [numeric, setNumeric] = useState(initial?.userAnswer ?? "");
  const [choice, setChoice] = useState(
    initial && question.kind === "choice" ? initial.userAnswer : "",
  );
  const [graded, setGraded] = useState<GradePayload | null>(initial ?? null);
  const [formError, setFormError] = useState<string | null>(null);
  const [guideOpen, setGuideOpen] = useState(false);
  const topic = getTopic(question.topicId);
  const locked = graded !== null;

  function submit() {
    if (locked) return;
    if (question.kind === "numeric") {
      if (!numeric.trim()) {
        setFormError("Enter a number before checking.");
        return;
      }
      if (parseNumeric(numeric) === null) {
        setFormError("Use a number such as 2.5, 2,5, or 5/2.");
        return;
      }
    } else if (!choice) {
      setFormError("Choose an option before checking.");
      return;
    }

    const raw = question.kind === "numeric" ? numeric : choice;
    const result = { correct: isCorrect(question, raw), userAnswer: raw };
    setGraded(result);
    setFormError(null);
    onGraded?.(result);
  }

  const answerText = correctDisplay(question);

  return (
    <article className="rounded-xl bg-card p-4 ring-1 ring-foreground/10 sm:p-6">
      <p className="text-xs font-medium tracking-wide text-primary uppercase">{topic.title}</p>
      <RichText text={question.prompt} className="mt-3 font-heading text-xl text-foreground sm:text-2xl" />

      <div className="mt-6">
        {question.kind === "numeric" ? (
          <div className="max-w-xs space-y-2">
            <Label htmlFor={`answer-${question.id}`}>Your answer</Label>
            <Input
              id={`answer-${question.id}`}
              inputMode="decimal"
              autoComplete="off"
              disabled={locked}
              value={numeric}
              onChange={(event) => setNumeric(event.target.value)}
              placeholder="Number"
              aria-invalid={formError ? true : undefined}
              className="h-10"
            />
          </div>
        ) : (
          <RadioGroup
            value={choice}
            onValueChange={(value) => {
              if (!locked) setChoice(value);
            }}
            className="gap-2"
            aria-label="Answer choices"
          >
            {question.choices.map((option) => (
              <label
                key={option.id}
                className={`flex cursor-pointer items-start gap-3 rounded-lg border bg-background px-3 py-3 ${
                  choice === option.id ? "border-primary bg-primary/5" : ""
                }`}
              >
                <RadioGroupItem value={option.id} disabled={locked} className="mt-1" />
                <RichText text={option.text} className="text-base" />
              </label>
            ))}
          </RadioGroup>
        )}
      </div>

      {formError ? (
        <p className="mt-3 text-sm text-destructive" role="alert">
          {formError}
        </p>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        <Button type="button" variant="outline" className="h-10 px-4" onClick={() => setGuideOpen(true)}>
          Guidance
        </Button>
        <Button type="button" className="h-10 px-4" disabled={locked} onClick={submit}>
          Check
        </Button>
      </div>

      {graded ? (
        <div
          className={
            graded.correct
              ? "mt-5 rounded-lg border border-primary/30 bg-primary/10 px-4 py-3"
              : "mt-5 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3"
          }
          role="status"
        >
          <p className="font-medium">{graded.correct ? "Correct." : "Incorrect."}</p>
          <p className="mt-1 text-sm">
            Your answer:{" "}
            <RichText
              text={userAnswerDisplay(question, graded.userAnswer)}
              className="inline"
            />
          </p>
          {graded.correct ? null : (
            <div className="mt-1 text-sm">
              <span>The answer is </span>
              <RichText text={answerText} className="inline" />
              <span>.</span>
            </div>
          )}
        </div>
      ) : null}

      {graded ? (
        <section className="mt-5 border-t pt-4">
          <h2 className="font-heading text-lg">Solution</h2>
          <ol className="mt-3 space-y-3">
            {question.solution.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="mt-0.5 font-heading text-primary">{index + 1}</span>
                <RichText text={step} />
              </li>
            ))}
          </ol>
        </section>
      ) : null}

      <Dialog open={guideOpen} onOpenChange={setGuideOpen}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Guidance</DialogTitle>
            <DialogDescription>
              The method for this question. The answer stays hidden.
            </DialogDescription>
          </DialogHeader>
          <RichText text={question.guidance} />
        </DialogContent>
      </Dialog>
    </article>
  );
}
