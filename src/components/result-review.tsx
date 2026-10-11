"use client";

import { useState } from "react";
import { RichText } from "@/components/rich-text";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { formatWhen } from "@/lib/storage";
import { getTopic } from "@/lib/topics";
import type { StoredItem, StoredQuiz } from "@/lib/types";

export function ResultReview({ quiz, heading }: { quiz: StoredQuiz; heading?: string }) {
  const [openItem, setOpenItem] = useState<StoredItem | null>(null);
  const topics = quiz.topicIds.map((id) => getTopic(id).title).join(", ");

  return (
    <div className="space-y-5">
      <div>
        <p className="text-xs font-medium tracking-wide text-primary uppercase">
          {formatWhen(quiz.createdAt)}
        </p>
        <h2 className="mt-1 font-heading text-3xl tracking-tight">
          {heading ?? `${quiz.score} of ${quiz.length}`}
        </h2>
        <p className="mt-2 text-muted-foreground">
          {quiz.score === quiz.length
            ? "Every item in this set was right."
            : `${quiz.score} right, ${quiz.length - quiz.score} wrong. Open any solution to see the steps.`}
        </p>
        <p className="mt-2 text-sm text-muted-foreground">{topics}</p>
      </div>
      <ol className="space-y-3">
        {quiz.items.map((item, index) => (
          <li key={item.questionId} className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-heading text-primary">{index + 1}</span>
              <Badge variant="outline">{getTopic(item.topicId).title}</Badge>
              <Badge variant={item.correct ? "secondary" : "destructive"}>
                {item.correct ? "Correct" : "Incorrect"}
              </Badge>
            </div>
            <RichText text={item.prompt} className="mt-3" />
            <p className="mt-3 text-sm text-muted-foreground">
              Your answer: <RichText text={item.userAnswer} className="inline" />
            </p>
            <Button
              type="button"
              variant="outline"
              className="mt-3 h-9 px-3"
              onClick={() => setOpenItem(item)}
            >
              Solution
            </Button>
          </li>
        ))}
      </ol>

      <Dialog open={openItem !== null} onOpenChange={(open) => !open && setOpenItem(null)}>
        <DialogContent className="max-h-[85vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Solution</DialogTitle>
            <DialogDescription>
              {openItem
                ? openItem.correct
                  ? "You had this one right."
                  : "The steps below are the worked solution."
                : ""}
            </DialogDescription>
          </DialogHeader>
          {openItem ? (
            <div className="space-y-4">
              <RichText text={openItem.prompt} />
              <p className="text-sm">
                Answer: <RichText text={openItem.correctDisplay} className="inline" />
              </p>
              <ol className="space-y-3">
                {openItem.solution.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="font-heading text-primary">{index + 1}</span>
                    <RichText text={step} />
                  </li>
                ))}
              </ol>
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}
