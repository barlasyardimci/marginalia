import type { Metadata } from "next";
import { QuizSetup } from "@/components/quiz-setup";

export const metadata: Metadata = {
  title: "Quiz",
};

export default function QuizPage() {
  return (
    <div>
      <h1 className="font-heading text-4xl tracking-tight">Quiz</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Choose the topics you want to be examined on and how long the set should be. Each
        item has Guidance, then a check, then the worked solution.
      </p>
      <div className="mt-8">
        <QuizSetup />
      </div>
    </div>
  );
}
