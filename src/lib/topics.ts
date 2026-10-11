import type { Topic, TopicId } from "@/lib/types";

export const topics: Topic[] = [
  {
    id: "derivatives",
    title: "Derivatives",
    blurb:
      "A derivative is the instantaneous rate of change of a function of one variable. Differentiate polynomials, products, quotients, compositions, exponentials, logarithms, and sine and cosine, and evaluate the derivative at a point. When the function is cost, revenue, or utility, that same derivative is marginal cost, marginal revenue, or marginal utility.",
  },
  {
    id: "partials",
    title: "Partial derivatives",
    blurb:
      "When output or utility depends on several inputs, a partial derivative moves one variable and holds the others fixed. Marginal product and marginal utility in a two-good problem are partial derivatives.",
  },
  {
    id: "matrices",
    title: "Matrices",
    blurb:
      "A matrix lines up the coefficients of a linear relationship so you can add, multiply, and — when a square matrix is invertible — solve the system at once. An input–output table and a linear IS–LM sketch are the same algebra.",
  },
  {
    id: "elasticity",
    title: "Elasticity",
    blurb:
      "Elasticity divides a percent change in one variable by a percent change in another. Point elasticity uses a derivative at a single price. Arc elasticity uses the midpoint between two observations, so the result does not depend on which end you start from.",
  },
  {
    id: "lagrange",
    title: "Constrained optimization",
    blurb:
      "A Lagrange multiplier attaches a constraint to an objective. At an interior optimum the marginal gain per euro is the same for every choice, and the multiplier prices the constraint: marginal utility of income, or marginal cost of a production target.",
  },
];

export function isTopicId(value: string): value is TopicId {
  return topics.some((topic) => topic.id === value);
}

export function getTopic(id: TopicId): Topic {
  const topic = topics.find((item) => item.id === id);
  if (!topic) {
    throw new Error(`Unknown topic ${id}`);
  }
  return topic;
}
