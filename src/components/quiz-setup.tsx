"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { createActiveQuiz, questionsForTopic } from "@/lib/quiz";
import { saveActiveQuiz } from "@/lib/storage";
import { topics } from "@/lib/topics";
import type { TopicId } from "@/lib/types";

export function QuizSetup() {
  const router = useRouter();
  const [selected, setSelected] = useState<TopicId[]>(topics.map((topic) => topic.id));
  const [length, setLength] = useState<5 | 10>(5);
  const [error, setError] = useState<string | null>(null);

  const available = selected.reduce(
    (sum, topicId) => sum + questionsForTopic(topicId).length,
    0,
  );

  function toggle(topicId: TopicId, checked: boolean) {
    setError(null);
    setSelected((current) =>
      checked ? [...current, topicId] : current.filter((id) => id !== topicId),
    );
  }

  function start() {
    if (selected.length === 0) {
      setError("Choose at least one topic.");
      return;
    }
    if (available < length) {
      setError(
        `Those topics only have ${available} questions, which is fewer than ${length}. Add a topic or choose the shorter quiz.`,
      );
      return;
    }
    try {
      const quiz = createActiveQuiz(selected, length);
      saveActiveQuiz(quiz);
      router.push("/quiz/session");
    } catch {
      setError("The quiz could not be built from the question bank.");
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <section className="rounded-xl bg-card p-4 ring-1 ring-foreground/10 sm:p-6">
        <h2 className="font-heading text-xl">Topics</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          One topic is enough. Questions are shuffled and none repeats inside the quiz.
        </p>
        <ul className="mt-4 space-y-3">
          {topics.map((topic) => {
            const count = questionsForTopic(topic.id).length;
            const checked = selected.includes(topic.id);
            const inputId = `topic-${topic.id}`;
            return (
              <li key={topic.id} className="rounded-lg border bg-background px-3 py-3">
                <Label htmlFor={inputId} className="items-start gap-3">
                  <Checkbox
                    id={inputId}
                    className="mt-0.5"
                    checked={checked}
                    onCheckedChange={(value) => toggle(topic.id, value)}
                  />
                  <span>
                    <span className="block font-medium">{topic.title}</span>
                    <span className="mt-1 block text-sm font-normal text-muted-foreground">
                      {count} questions. {topic.blurb}
                    </span>
                  </span>
                </Label>
              </li>
            );
          })}
        </ul>
      </section>

      <aside className="h-fit rounded-xl bg-card p-4 ring-1 ring-foreground/10 sm:p-6">
        <h2 className="font-heading text-xl">Length</h2>
        <RadioGroup
          value={String(length)}
          onValueChange={(value) => setLength(value === "10" ? 10 : 5)}
          className="mt-4"
          aria-label="Quiz length"
        >
          {[5, 10].map((option) => (
            <label key={option} className="flex items-center gap-3 rounded-lg border bg-background px-3 py-3">
              <RadioGroupItem value={String(option)} />
              <span>{option} questions</span>
            </label>
          ))}
        </RadioGroup>
        <p className="mt-3 text-sm text-muted-foreground">
          {available} questions available in the current selection.
        </p>
        {error ? (
          <p className="mt-3 text-sm text-destructive" role="alert">
            {error}
          </p>
        ) : null}
        <Button type="button" className="mt-4 h-10 w-full px-4" onClick={start}>
          Start quiz
        </Button>
      </aside>
    </div>
  );
}
