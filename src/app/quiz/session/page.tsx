import type { Metadata } from "next";
import { QuizRunner } from "@/components/quiz-runner";

export const metadata: Metadata = {
  title: "Quiz in progress",
};

export default function QuizSessionPage() {
  return (
    <div>
      <h1 className="font-heading text-4xl tracking-tight">Quiz</h1>
      <div className="mt-6">
        <QuizRunner />
      </div>
    </div>
  );
}
