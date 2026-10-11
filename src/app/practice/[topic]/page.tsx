import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PracticeSession } from "@/components/practice-session";
import { getTopic, isTopicId, topics } from "@/lib/topics";

export function generateStaticParams() {
  return topics.map((topic) => ({ topic: topic.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string }>;
}): Promise<Metadata> {
  const { topic } = await params;
  if (!isTopicId(topic)) return { title: "Topic" };
  return { title: getTopic(topic).title };
}

export default async function PracticePage({
  params,
}: {
  params: Promise<{ topic: string }>;
}) {
  const { topic } = await params;
  if (!isTopicId(topic)) notFound();

  return <PracticeSession topic={getTopic(topic)} />;
}
