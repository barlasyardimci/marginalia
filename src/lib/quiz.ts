import { questions, questionById } from "@/lib/questions";
import type { ActiveQuiz, Question, TopicId } from "@/lib/types";

export function questionsForTopic(topicId: TopicId): Question[] {
  return questions.filter((question) => question.topicId === topicId);
}

export function shuffle<T>(items: T[], rng: () => number = Math.random): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swap = Math.floor(rng() * (index + 1));
    const current = copy[index];
    copy[index] = copy[swap];
    copy[swap] = current;
  }
  return copy;
}

export function buildQuiz(
  topicIds: TopicId[],
  length: 5 | 10,
  rng: () => number = Math.random,
): Question[] {
  const pool = questions.filter((question) => topicIds.includes(question.topicId));
  if (topicIds.length === 0) {
    throw new Error("Choose at least one topic.");
  }
  if (pool.length < length) {
    throw new Error("Not enough questions in the selected topics.");
  }
  const picked = shuffle(pool, rng).slice(0, length);
  const ids = new Set(picked.map((question) => question.id));
  if (ids.size !== picked.length) {
    throw new Error("Quiz repeated a question.");
  }
  return picked;
}

export function createActiveQuiz(topicIds: TopicId[], length: 5 | 10): ActiveQuiz {
  const picked = buildQuiz(topicIds, length);
  return {
    id: crypto.randomUUID(),
    createdAt: new Date().toISOString(),
    topicIds,
    questionIds: picked.map((question) => question.id),
    index: 0,
    responses: [],
    historySaved: false,
  };
}

export function activeQuestions(quiz: ActiveQuiz): Question[] {
  return quiz.questionIds.map((id) => {
    const question = questionById(id);
    if (!question) {
      throw new Error(`Missing question ${id}`);
    }
    return question;
  });
}
