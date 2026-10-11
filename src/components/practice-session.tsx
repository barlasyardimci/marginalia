"use client";

import { useEffect, useState } from "react";
import { QuestionCard } from "@/components/question-card";
import { StatusBlock } from "@/components/status-block";
import { Button } from "@/components/ui/button";
import { questionsForTopic } from "@/lib/quiz";
import type { Question, Topic } from "@/lib/types";

function drawQuestion(topic: Topic, avoidId?: string): Question | null {
  const pool = questionsForTopic(topic.id);
  const options = avoidId ? pool.filter((item) => item.id !== avoidId) : pool;
  const bag = options.length > 0 ? options : pool;
  if (bag.length === 0) return null;
  const index = Math.floor(Math.random() * bag.length);
  return bag[index] ?? null;
}

export function PracticeSession({ topic }: { topic: Topic }) {
  const [question, setQuestion] = useState<Question | null>(null);
  const [ready, setReady] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setQuestion(drawQuestion(topic));
      setChecked(false);
      setReady(true);
    }, 0);
    return () => window.clearTimeout(timeout);
  }, [topic]);

  if (!ready) {
    return (
      <StatusBlock
        title="Drawing a question"
        body={`Picking one item from ${topic.title}. It stays on this page until you check it or ask for another.`}
      />
    );
  }

  if (!question) {
    return (
      <StatusBlock
        title="No questions in this topic"
        body="The bank for this topic is empty, so there is nothing to practise yet."
        href="/"
        action="Back to topics"
      />
    );
  }

  return (
    <div className="space-y-4">
      <div>
        <h1 className="font-heading text-3xl tracking-tight">{topic.title}</h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">{topic.blurb}</p>
      </div>
      <QuestionCard key={question.id} question={question} onGraded={() => setChecked(true)} />
      {checked ? (
        <Button
          type="button"
          variant="outline"
          className="h-10 px-4"
          onClick={() => {
            setChecked(false);
            setQuestion(drawQuestion(topic, question.id));
          }}
        >
          Another question
        </Button>
      ) : null}
    </div>
  );
}
