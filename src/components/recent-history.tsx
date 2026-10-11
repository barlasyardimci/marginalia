"use client";

import Link from "next/link";
import { HistoryBrowser } from "@/components/history-browser";
import { Button } from "@/components/ui/button";

export function RecentHistory() {
  return (
    <section className="mt-12">
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <h2 className="font-heading text-2xl">Recent quizzes</h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Scores stay on this browser. Nothing is sent to an account.
          </p>
        </div>
        <Button variant="ghost" className="h-9 px-3" render={<Link href="/history" />}>
          History
        </Button>
      </div>
      <HistoryBrowser limit={3} />
    </section>
  );
}
