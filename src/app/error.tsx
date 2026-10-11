"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="rounded-xl border border-dashed bg-card px-5 py-8">
      <h1 className="font-heading text-2xl">This page failed to load</h1>
      <p className="mt-2 max-w-xl text-muted-foreground">
        The question bank is still here. Saved quizzes, if the browser kept them, are on
        the history page.
      </p>
      <Button type="button" className="mt-5 h-10 px-4" onClick={() => reset()}>
        Try again
      </Button>
    </div>
  );
}
