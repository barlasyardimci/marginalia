import type { Metadata } from "next";
import { HistoryBrowser } from "@/components/history-browser";

export const metadata: Metadata = {
  title: "History",
};

export default function HistoryPage() {
  return (
    <div>
      <h1 className="font-heading text-4xl tracking-tight">History</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Past quizzes from this browser, with the score and the outcome of each question.
      </p>
      <div className="mt-8">
        <HistoryBrowser />
      </div>
    </div>
  );
}
