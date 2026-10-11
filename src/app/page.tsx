import Link from "next/link";
import { RecentHistory } from "@/components/recent-history";
import { Button } from "@/components/ui/button";
import { questionsForTopic } from "@/lib/quiz";
import { topics } from "@/lib/topics";

export default function HomePage() {
  return (
    <div>
      <p className="text-xs font-medium tracking-[0.16em] text-primary uppercase">
        Personal study · economics mathematics
      </p>
      <h1 className="mt-3 max-w-3xl font-heading text-4xl tracking-tight sm:text-5xl">
        Problem sets for the calculus and linear algebra in a master&apos;s course.
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Work one question, or draw a quiz of five or ten. Guidance explains the method and
        stops before the answer. Checking shows the steps. Finished quizzes stay in this
        browser.
      </p>

      <div className="mt-8 grid gap-4 lg:grid-cols-[minmax(0,1fr)_17rem]">
        <ol className="grid gap-3 sm:grid-cols-2">
          {topics.map((topic, index) => (
            <li key={topic.id} className="rounded-xl bg-card p-4 ring-1 ring-foreground/10">
              <p className="font-heading text-sm text-primary">0{index + 1}</p>
              <h2 className="mt-1 font-heading text-2xl">{topic.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{topic.blurb}</p>
              <p className="mt-3 text-xs text-muted-foreground">
                {questionsForTopic(topic.id).length} questions
              </p>
              <Button className="mt-4 h-10 px-4" nativeButton={false} render={<Link href={`/practice/${topic.id}`} />}>
                Practice
              </Button>
            </li>
          ))}
        </ol>
        <aside className="h-fit rounded-xl bg-primary px-4 py-5 text-primary-foreground">
          <h2 className="font-heading text-2xl">A short quiz</h2>
          <p className="mt-2 text-sm text-primary-foreground/80">
            Pick any of the five topics and a length. The draw does not repeat a question.
          </p>
          <Button
            variant="secondary"
            className="mt-5 h-10 px-4"
            nativeButton={false}
            render={<Link href="/quiz" />}
          >
            Set up a quiz
          </Button>
        </aside>
      </div>

      <RecentHistory />
    </div>
  );
}
