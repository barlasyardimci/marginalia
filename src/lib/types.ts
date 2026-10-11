export const topicIds = [
  "derivatives",
  "partials",
  "matrices",
  "elasticity",
  "lagrange",
] as const;

export type TopicId = (typeof topicIds)[number];

export type Topic = {
  id: TopicId;
  title: string;
  blurb: string;
};

export type Choice = {
  id: string;
  text: string;
};

type QuestionBase = {
  id: string;
  topicId: TopicId;
  prompt: string;
  guidance: string;
  solution: string[];
};

export type NumericQuestion = QuestionBase & {
  kind: "numeric";
  answer: number;
  tolerance: number;
};

export type ChoiceQuestion = QuestionBase & {
  kind: "choice";
  choices: Choice[];
  correctChoiceId: string;
};

export type Question = NumericQuestion | ChoiceQuestion;

export type StoredItem = {
  questionId: string;
  topicId: TopicId;
  prompt: string;
  rawAnswer: string;
  userAnswer: string;
  correct: boolean;
  correctDisplay: string;
  solution: string[];
};

export type StoredQuiz = {
  id: string;
  createdAt: string;
  topicIds: TopicId[];
  length: number;
  score: number;
  items: StoredItem[];
};

export type ActiveQuiz = {
  id: string;
  createdAt: string;
  topicIds: TopicId[];
  questionIds: string[];
  index: number;
  responses: StoredItem[];
  historySaved: boolean;
};
