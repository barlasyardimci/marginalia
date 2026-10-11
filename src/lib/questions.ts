import type { Question } from "@/lib/types";

const tol = 0.001;

export const questions: Question[] = [
  {
    id: "d1",
    topicId: "derivatives",
    kind: "choice",
    prompt:
      "A firm has total cost $C(q) = 2q^{2} + 10q + 50$. Which expression is marginal cost $MC(q)$?",
    choices: [
      { id: "a", text: "$4q + 10$" },
      { id: "b", text: "$2q + 10$" },
      { id: "c", text: "$4q^{2} + 10$" },
      { id: "d", text: "$4q + 50$" },
    ],
    correctChoiceId: "a",
    guidance:
      "Differentiate term by term. The power rule says the derivative of $aq^{n}$ is $anq^{n-1}$, and an additive constant drops out. Marginal cost is that derivative of total cost. For a different cost, $C(q) = 5q^{2} + 3q + 7$, marginal cost is $10q + 3$.",
    solution: [
      "Marginal cost is $MC(q) = C'(q)$.",
      "The derivative of $2q^{2}$ is $4q$, the derivative of $10q$ is $10$, and the derivative of $50$ is $0$.",
      "So $MC(q) = 4q + 10$.",
    ],
  },
  {
    id: "d2",
    topicId: "derivatives",
    kind: "numeric",
    prompt:
      "Total cost is $C(q) = 3q^{2} + 8q + 20$. What is marginal cost at $q = 5$?",
    answer: 38,
    tolerance: tol,
    guidance:
      "Marginal cost is the derivative of total cost. Differentiate first, then substitute the given output. Example: if $C(q) = q^{2} + q$, then $MC(q) = 2q + 1$, so at $q = 4$ the marginal cost is $9$.",
    solution: [
      "$MC(q) = 6q + 8$.",
      "At $q = 5$, $MC(5) = 6 \\cdot 5 + 8 = 38$.",
    ],
  },
  {
    id: "d3",
    topicId: "derivatives",
    kind: "choice",
    prompt:
      "Total revenue is $R(q) = 100q - 2q^{2}$. Which expression is marginal revenue $MR(q)$?",
    choices: [
      { id: "a", text: "$100 - 4q$" },
      { id: "b", text: "$100 - 2q$" },
      { id: "c", text: "$100q - 4$" },
      { id: "d", text: "$100 - 2q^{2}$" },
    ],
    correctChoiceId: "a",
    guidance:
      "If the price falls as you sell more, multiply price by quantity first, then differentiate. The derivative of $aq^{2}$ is $2aq$. Example: $R(q) = 20q - q^{2}$ has marginal revenue $20 - 2q$.",
    solution: [
      "Marginal revenue is $MR(q) = R'(q)$.",
      "The derivative of $100q$ is $100$ and the derivative of $-2q^{2}$ is $-4q$.",
      "So $MR(q) = 100 - 4q$.",
    ],
  },
  {
    id: "d4",
    topicId: "derivatives",
    kind: "numeric",
    prompt: "Total revenue is $R(q) = 80q - q^{2}$. What is marginal revenue at $q = 10$?",
    answer: 60,
    tolerance: tol,
    guidance:
      "Marginal revenue is the derivative of total revenue. Differentiate, then evaluate at the stated quantity. Example: $R(q) = 12q - q^{2}$ gives $MR(q) = 12 - 2q$, which equals $8$ at $q = 2$.",
    solution: [
      "$MR(q) = 80 - 2q$.",
      "At $q = 10$, $MR(10) = 80 - 20 = 60$.",
    ],
  },
  {
    id: "d5",
    topicId: "derivatives",
    kind: "numeric",
    prompt:
      "Utility is $U(x) = 12x - 0.5x^{2}$. What is marginal utility at $x = 4$?",
    answer: 8,
    tolerance: tol,
    guidance:
      "Marginal utility is the derivative of total utility. The derivative of $0.5x^{2}$ is $x$, not half of $x$. Example: $U(x) = 7x - 0.5x^{2}$ has $MU(x) = 7 - x$, so at $x = 2$ marginal utility is $5$.",
    solution: [
      "$MU(x) = 12 - x$, because the derivative of $0.5x^{2}$ is $x$.",
      "At $x = 4$, $MU(4) = 12 - 4 = 8$.",
    ],
  },
  {
    id: "d6",
    topicId: "derivatives",
    kind: "numeric",
    prompt:
      "Revenue is $R(q) = 50q - q^{2}$ and cost is $C(q) = 10q + 100$. What quantity $q$ maximizes profit? Marginal revenue is falling, so the critical point is a maximum.",
    answer: 20,
    tolerance: tol,
    guidance:
      "Profit is revenue minus cost. An interior quantity maximizes profit where marginal revenue equals marginal cost, provided marginal revenue is falling. Differentiate each function and set them equal. Example: if $MR(q) = 14 - 2q$ and $MC = 4$, then $14 - 2q = 4$, so $q = 5$.",
    solution: [
      "$MR(q) = 50 - 2q$ and $MC(q) = 10$.",
      "Set $50 - 2q = 10$. Then $2q = 40$, so $q = 20$.",
      "The slope of marginal revenue is $-2 < 0$, so this critical point is a maximum.",
    ],
  },
  {
    id: "d7",
    topicId: "derivatives",
    kind: "numeric",
    prompt:
      "Total cost is $C(q) = q^{3} - 6q^{2} + 15q + 10$. What is marginal cost at $q = 2$?",
    answer: 3,
    tolerance: tol,
    guidance:
      "Differentiate each term with the power rule, then evaluate at the stated output. A square term $aq^{2}$ contributes $2aq$. Example: $C(q) = q^{2} + 5q$ has marginal cost $2q + 5$, equal to $9$ at $q = 2$.",
    solution: [
      "$MC(q) = 3q^{2} - 12q + 15$.",
      "At $q = 2$, $MC(2) = 3 \\cdot 4 - 12 \\cdot 2 + 15 = 12 - 24 + 15 = 3$.",
    ],
  },
  {
    id: "d8",
    topicId: "derivatives",
    kind: "choice",
    prompt:
      "Marginal utility is $MU(x) = 20 - 2x$ and $U(0) = 0$. Which function is total utility $U(x)$?",
    choices: [
      { id: "a", text: "$20x - x^{2}$" },
      { id: "b", text: "$20 - 2x$" },
      { id: "c", text: "$20x - 2x^{2}$" },
      { id: "d", text: "$10x - x^{2}$" },
    ],
    correctChoiceId: "a",
    guidance:
      "Marginal utility is the derivative of total utility, so total utility is an antiderivative of marginal utility. Integrate, then use the given value at zero to fix the constant. Example: $MU(x) = 6 - 2x$ and $U(0) = 0$ imply $U(x) = 6x - x^{2}$.",
    solution: [
      "Integrate $20 - 2x$ to get $20x - x^{2} + c$.",
      "$U(0) = 0$ forces $c = 0$.",
      "Check: the derivative of $20x - x^{2}$ is $20 - 2x$, which matches $MU$.",
    ],
  },
  {
    id: "d9",
    topicId: "derivatives",
    kind: "numeric",
    prompt:
      "Inverse demand is $P = 40 - 2q$, so total revenue is $R(q) = 40q - 2q^{2}$. What is marginal revenue at $q = 5$?",
    answer: 20,
    tolerance: tol,
    guidance:
      "Write revenue as price times quantity before you differentiate. Marginal revenue is not the price itself. Example: if $P = 12 - q$, then $R = 12q - q^{2}$ and $MR = 12 - 2q$, so at $q = 2$ marginal revenue is $8$.",
    solution: [
      "$R(q) = (40 - 2q)q = 40q - 2q^{2}$.",
      "$MR(q) = 40 - 4q$.",
      "At $q = 5$, $MR(5) = 40 - 20 = 20$.",
    ],
  },
  {
    id: "d10",
    topicId: "derivatives",
    kind: "choice",
    prompt: "Total cost is $C(q) = 5q^{2} + 40$. Which expression is marginal cost?",
    choices: [
      { id: "a", text: "$10q$" },
      { id: "b", text: "$5q + 40/q$" },
      { id: "c", text: "$10q + 40$" },
      { id: "d", text: "$5q$" },
    ],
    correctChoiceId: "a",
    guidance:
      "Marginal cost is the derivative of total cost, not average cost. Average cost divides by $q$; marginal cost does not. Example: $C(q) = 3q^{2} + 7$ has marginal cost $6q$.",
    solution: [
      "Average cost would be $C(q)/q = 5q + 40/q$. That is not what is asked.",
      "Differentiate $5q^{2} + 40$ to get $MC(q) = 10q$.",
    ],
  },
  {
    id: "p1",
    topicId: "partials",
    kind: "numeric",
    prompt:
      "Let $f(x, y) = 3x^{2}y + 4y$. What is $\\partial f/\\partial x$ at $(x, y) = (2, 3)$?",
    answer: 36,
    tolerance: tol,
    guidance:
      "Hold $y$ fixed and differentiate with respect to $x$. A power of $x$ multiplied by a factor that depends only on $y$ keeps that factor. Example: $f(x, y) = x^{2}y$ has $\\partial f/\\partial x = 2xy$, which equals $8$ at $(2, 2)$.",
    solution: [
      "Treating $y$ as constant, $\\partial f/\\partial x = 6xy$.",
      "At $(2, 3)$, $6 \\cdot 2 \\cdot 3 = 36$.",
    ],
  },
  {
    id: "p2",
    topicId: "partials",
    kind: "numeric",
    prompt:
      "Let $f(x, y) = 3x^{2}y + 4y$. What is $\\partial f/\\partial y$ at $(x, y) = (2, 3)$?",
    answer: 16,
    tolerance: tol,
    guidance:
      "Hold $x$ fixed and differentiate with respect to $y$. Powers of $x$ are constant for this derivative. Example: $f = x^{2}y + y$ has $\\partial f/\\partial y = x^{2} + 1$, which equals $5$ at $x = 2$.",
    solution: [
      "Treating $x$ as constant, $\\partial f/\\partial y = 3x^{2} + 4$.",
      "At $x = 2$, $3 \\cdot 4 + 4 = 16$. The value of $y$ does not enter this partial.",
    ],
  },
  {
    id: "p3",
    topicId: "partials",
    kind: "numeric",
    prompt:
      "A production function is $q = 10 L^{1/2} K^{1/2}$. What is the marginal product of labour at $L = 4$, $K = 4$?",
    answer: 5,
    tolerance: tol,
    guidance:
      "The marginal product of labour is the partial derivative with respect to labour, holding capital fixed. Write the square root as a power and use the power rule. Example: $q = 4L^{1/2}K^{1/2}$ has $MP_L = 2(K/L)^{1/2}$, which equals $2$ when $L = K$.",
    solution: [
      "$MP_L = \\partial q/\\partial L = 10 \\cdot \\tfrac{1}{2} L^{-1/2} K^{1/2} = 5 \\sqrt{K/L}$.",
      "At $L = 4$ and $K = 4$, $\\sqrt{K/L} = 1$, so $MP_L = 5$.",
    ],
  },
  {
    id: "p4",
    topicId: "partials",
    kind: "numeric",
    prompt:
      "Utility is $U(x, y) = x^{2}y$. What is the marginal utility of $x$ at $(3, 2)$?",
    answer: 12,
    tolerance: tol,
    guidance:
      "Marginal utility of $x$ is the partial derivative of $U$ with respect to $x$, treating $y$ as constant. Example: $U = xy$ has $MU_x = y$, so at $(2, 7)$ it equals $7$.",
    solution: [
      "$MU_x = \\partial U/\\partial x = 2xy$.",
      "At $(3, 2)$, $2 \\cdot 3 \\cdot 2 = 12$.",
    ],
  },
  {
    id: "p5",
    topicId: "partials",
    kind: "numeric",
    prompt:
      "Utility is $U(x, y) = x^{2}y$. What is the marginal utility of $y$ at $(3, 2)$?",
    answer: 9,
    tolerance: tol,
    guidance:
      "Marginal utility of $y$ treats $x$ as constant. Example: $U = x^{2}y$ has $MU_y = x^{2}$, which equals $4$ at $x = 2$.",
    solution: [
      "$MU_y = \\partial U/\\partial y = x^{2}$.",
      "At $x = 3$, $MU_y = 9$. The value of $y$ does not enter this partial.",
    ],
  },
  {
    id: "p6",
    topicId: "partials",
    kind: "choice",
    prompt: "Let $z = 4x + 7y + xy$. Which expression is $\\partial z/\\partial x$?",
    choices: [
      { id: "a", text: "$4 + y$" },
      { id: "b", text: "$4 + x$" },
      { id: "c", text: "$7 + x$" },
      { id: "d", text: "$4x + y$" },
    ],
    correctChoiceId: "a",
    guidance:
      "Differentiate in $x$ and treat $y$ as a constant. A product $xy$ contributes $y$ when you differentiate in $x$. Example: $z = 5x + xy$ has $\\partial z/\\partial x = 5 + y$.",
    solution: [
      "The derivative of $4x$ with respect to $x$ is $4$.",
      "The derivative of $7y$ with respect to $x$ is $0$.",
      "The derivative of $xy$ with respect to $x$ is $y$.",
      "So $\\partial z/\\partial x = 4 + y$.",
    ],
  },
  {
    id: "p7",
    topicId: "partials",
    kind: "numeric",
    prompt:
      "Let $f(K, L) = K^{2} + 2KL + L^{2}$. What is $\\partial f/\\partial K$ at $K = 3$, $L = 1$?",
    answer: 8,
    tolerance: tol,
    guidance:
      "Differentiate in $K$ and treat $L$ as constant, then evaluate. Example: $f = K^{2} + KL$ has $\\partial f/\\partial K = 2K + L$, which equals $7$ at $K = 2$, $L = 3$.",
    solution: [
      "$\\partial f/\\partial K = 2K + 2L$.",
      "At $K = 3$ and $L = 1$, the partial equals $6 + 2 = 8$.",
    ],
  },
  {
    id: "p8",
    topicId: "partials",
    kind: "numeric",
    prompt:
      "Let $f(x, y) = x^{2}y^{3}$. What is the mixed partial $\\partial^{2} f/\\partial y\\partial x$ at $(1, 1)$?",
    answer: 6,
    tolerance: tol,
    guidance:
      "Take one partial, then differentiate that result in the other variable. For this kind of polynomial the two mixed partials agree. Example: $f = xy^{2}$ has $\\partial f/\\partial x = y^{2}$ and then $\\partial^{2} f/\\partial y\\partial x = 2y$, which equals $4$ at $y = 2$.",
    solution: [
      "First, $\\partial f/\\partial x = 2xy^{3}$.",
      "Then $\\partial^{2} f/\\partial y\\partial x = 6xy^{2}$.",
      "At $(1, 1)$ the mixed partial equals $6$.",
    ],
  },
  {
    id: "p9",
    topicId: "partials",
    kind: "numeric",
    prompt:
      "Output is $q = 2L + 3K + LK$. What is the marginal product of capital when $L = 5$? It does not depend on $K$.",
    answer: 8,
    tolerance: tol,
    guidance:
      "The marginal product of capital is the partial derivative with respect to $K$. A product $LK$ contributes $L$ when labour is held fixed. Example: $q = K + LK$ has $MP_K = 1 + L$, which equals $4$ at $L = 3$.",
    solution: [
      "$MP_K = \\partial q/\\partial K = 3 + L$.",
      "At $L = 5$, $MP_K = 8$.",
    ],
  },
  {
    id: "p10",
    topicId: "partials",
    kind: "numeric",
    prompt:
      "Utility is $U(x, y) = \\ln x + 2\\ln y$, with $x > 0$ and $y > 0$. What is the marginal utility of $x$ at $x = 4$?",
    answer: 0.25,
    tolerance: tol,
    guidance:
      "The derivative of $\\ln x$ is $1/x$. A constant multiplier on $\\ln y$ does not appear in $MU_x$. Example: $U = \\ln x + \\ln y$ has $MU_x = 1/x$, which equals $0.5$ at $x = 2$.",
    solution: [
      "$MU_x = \\partial U/\\partial x = 1/x$.",
      "At $x = 4$, $MU_x = 1/4 = 0.25$.",
    ],
  },
  {
    id: "m1",
    topicId: "matrices",
    kind: "numeric",
    prompt: "What is the determinant of $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$?",
    answer: -2,
    tolerance: tol,
    guidance:
      "For a two-by-two matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the determinant is $ad - bc$. Example: $a = 3$, $b = 1$, $c = 1$, $d = 2$ gives $6 - 1 = 5$.",
    solution: [
      "The determinant is $1 \\cdot 4 - 2 \\cdot 3 = 4 - 6 = -2$.",
    ],
  },
  {
    id: "m2",
    topicId: "matrices",
    kind: "numeric",
    prompt:
      "Two sectors have intermediate-use coefficients $A = \\begin{pmatrix} 1/2 & 1/4 \\\\ 1/4 & 1/2 \\end{pmatrix}$ and final demand $d = \\begin{pmatrix} 3 \\\\ 3 \\end{pmatrix}$. Gross output $x$ solves $(I - A)x = d$. What is gross output of sector 1?",
    answer: 12,
    tolerance: tol,
    guidance:
      "Gross output solves $(I - A)x = d$, where $A$ holds intermediate-use coefficients and $d$ is final demand. You can invert $I - A$ or use elimination. Example: if $I - A$ is the identity and final demand is $(4, 7)$, gross output is $(4, 7)$.",
    solution: [
      "$I - A = \\begin{pmatrix} 1/2 & -1/4 \\\\ -1/4 & 1/2 \\end{pmatrix}$.",
      "The system is $\\tfrac{1}{2}x_1 - \\tfrac{1}{4}x_2 = 3$ and $-\\tfrac{1}{4}x_1 + \\tfrac{1}{2}x_2 = 3$.",
      "Doubling the first equation gives $x_1 - \\tfrac{1}{2}x_2 = 6$. Doubling the second gives $-\\tfrac{1}{2}x_1 + x_2 = 6$.",
      "Substitute $x_1 = 6 + \\tfrac{1}{2}x_2$ into the second doubled equation: $-\\tfrac{1}{2}(6 + \\tfrac{1}{2}x_2) + x_2 = 6$, so $\\tfrac{3}{4}x_2 = 9$ and $x_2 = 12$. Then $x_1 = 12$.",
    ],
  },
  {
    id: "m3",
    topicId: "matrices",
    kind: "choice",
    prompt:
      "Which matrix is the inverse of $\\begin{pmatrix} 2 & 0 \\\\ 0 & 4 \\end{pmatrix}$?",
    choices: [
      { id: "a", text: "Diagonal entries $\\frac{1}{2}$ and $\\frac{1}{4}$" },
      { id: "b", text: "Diagonal entries $2$ and $4$" },
      { id: "c", text: "Diagonal entries $\\frac{1}{2}$ and $4$" },
      { id: "d", text: "Diagonal entries $\\frac{1}{2}$ and $\\frac{1}{2}$" },
    ],
    correctChoiceId: "a",
    guidance:
      "A diagonal matrix with nonzero diagonal entries $a$ and $b$ has inverse diagonal $1/a$ and $1/b$. Off-diagonal zeros stay zero. Example: the inverse of a diagonal matrix with entries $5$ and $10$ is a diagonal matrix with entries $1/5$ and $1/10$.",
    solution: [
      "The matrix is diagonal with entries $2$ and $4$, both nonzero.",
      "Its inverse is diagonal with entries $1/2$ and $1/4$.",
      "Check: $\\begin{pmatrix} 1/2 & 0 \\\\ 0 & 1/4 \\end{pmatrix}\\begin{pmatrix} 2 & 0 \\\\ 0 & 4 \\end{pmatrix} = I$.",
    ],
  },
  {
    id: "m4",
    topicId: "matrices",
    kind: "numeric",
    prompt:
      "Solve the system $2x + y = 5$ and $x + 3y = 10$. What is $x$?",
    answer: 1,
    tolerance: tol,
    guidance:
      "Use substitution or elimination. Solve one equation for one unknown, substitute into the other, then back-substitute. Example: $x + y = 8$ and $x - y = 2$ add to $2x = 10$, so $x = 5$.",
    solution: [
      "From the first equation, $y = 5 - 2x$.",
      "Substitute into the second: $x + 3(5 - 2x) = 10$, so $x + 15 - 6x = 10$.",
      "Then $-5x = -5$, so $x = 1$. The matching $y$ is $3$.",
    ],
  },
  {
    id: "m5",
    topicId: "matrices",
    kind: "numeric",
    prompt:
      "Add $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix} + \\begin{pmatrix} 5 & 6 \\\\ 7 & 8 \\end{pmatrix}$. What is the entry in row 2, column 2 of the sum?",
    answer: 12,
    tolerance: tol,
    guidance:
      "Add matrices of the same shape entry by entry. The entry in row $i$ and column $j$ of the sum is the sum of those two entries. Example: adding a diagonal matrix of twos to a diagonal matrix of fives puts $7$ in the bottom-right corner.",
    solution: [
      "The bottom-right entries are $4$ and $8$.",
      "Their sum is $12$. The full sum is $\\begin{pmatrix} 6 & 8 \\\\ 10 & 12 \\end{pmatrix}$.",
    ],
  },
  {
    id: "m6",
    topicId: "matrices",
    kind: "numeric",
    prompt:
      "Compute $\\begin{pmatrix} 1 & 2 \\\\ 0 & 1 \\end{pmatrix}\\begin{pmatrix} 3 \\\\ 4 \\end{pmatrix}$. What is the first entry of the product?",
    answer: 11,
    tolerance: tol,
    guidance:
      "Each entry of a matrix-vector product is a row dotted with the column. Multiply pairwise and add. Example: the row $(2, 0)$ dotted with the column $(3, 9)$ is $6$.",
    solution: [
      "The first row $(1, 2)$ dotted with $(3, 4)$ is $1 \\cdot 3 + 2 \\cdot 4 = 11$.",
      "The second entry is $0 \\cdot 3 + 1 \\cdot 4 = 4$, so the product is $\\begin{pmatrix} 11 \\\\ 4 \\end{pmatrix}$.",
    ],
  },
  {
    id: "m7",
    topicId: "matrices",
    kind: "numeric",
    prompt:
      "Compute $\\begin{pmatrix} 1 & 0 \\\\ 2 & 1 \\end{pmatrix}\\begin{pmatrix} 4 & 1 \\\\ 0 & 3 \\end{pmatrix}$. What is the entry in row 2, column 1 of the product?",
    answer: 8,
    tolerance: tol,
    guidance:
      "For the product $AB$, the entry in row $i$ and column $j$ is row $i$ of $A$ dotted with column $j$ of $B$. Example: the row $(2, 0)$ dotted with the column $(3, 9)$ is $6$.",
    solution: [
      "Row 2 of the first matrix is $(2, 1)$. Column 1 of the second is $(4, 0)$.",
      "Their dot product is $2 \\cdot 4 + 1 \\cdot 0 = 8$.",
      "The full product is $\\begin{pmatrix} 4 & 1 \\\\ 8 & 5 \\end{pmatrix}$.",
    ],
  },
  {
    id: "m8",
    topicId: "matrices",
    kind: "numeric",
    prompt:
      "A linear IS–LM sketch is $Y + 2r = 100$ and $Y - r = 40$, with income $Y$ and interest rate $r$. What is equilibrium income $Y$?",
    answer: 60,
    tolerance: tol,
    guidance:
      "Write the two equilibrium conditions as a linear system in income and the interest rate, then eliminate one unknown. Example: $Y + r = 10$ and $Y - r = 4$ add to $2Y = 14$, so $Y = 7$.",
    solution: [
      "Subtract the second equation from the first: $(Y + 2r) - (Y - r) = 100 - 40$, so $3r = 60$ and $r = 20$.",
      "Then $Y - 20 = 40$, so $Y = 60$.",
      "Check the first equation: $60 + 2 \\cdot 20 = 100$.",
    ],
  },
  {
    id: "m9",
    topicId: "matrices",
    kind: "numeric",
    prompt:
      "The same linear IS–LM sketch is $Y + 2r = 100$ and $Y - r = 40$. What is the equilibrium interest rate $r$?",
    answer: 20,
    tolerance: tol,
    guidance:
      "Eliminate income, or substitute an income you have already found, to isolate the interest rate. Example: from $Y + r = 9$ and $Y = 6$, the rate is $r = 3$.",
    solution: [
      "Subtract the second equation from the first to get $3r = 60$.",
      "So $r = 20$. The matching income is $Y = 60$.",
    ],
  },
  {
    id: "m10",
    topicId: "matrices",
    kind: "numeric",
    prompt:
      "What is the top-left entry of the inverse of $\\begin{pmatrix} 1 & 2 \\\\ 3 & 4 \\end{pmatrix}$?",
    answer: -2,
    tolerance: tol,
    guidance:
      "The inverse of $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ is $\\frac{1}{ad - bc}\\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}$, provided the determinant is not zero. The top-left entry is $d$ divided by the determinant. Example: $\\begin{pmatrix} 2 & 0 \\\\ 0 & 1 \\end{pmatrix}$ has determinant $2$, so the top-left entry of the inverse is $1/2$.",
    solution: [
      "The determinant is $1 \\cdot 4 - 2 \\cdot 3 = -2$.",
      "The top-left entry of the inverse is $d / \\det = 4 / (-2) = -2$.",
      "The full inverse is $\\begin{pmatrix} -2 & 1 \\\\ 3/2 & -1/2 \\end{pmatrix}$.",
    ],
  },
  {
    id: "e1",
    topicId: "elasticity",
    kind: "choice",
    prompt:
      "Demand is $Q = 100 - 2P$. What is the point price elasticity of demand at $P = 20$?",
    choices: [
      { id: "a", text: "$-\\frac{2}{3}$" },
      { id: "b", text: "$-\\frac{3}{2}$" },
      { id: "c", text: "$-\\frac{1}{3}$" },
      { id: "d", text: "$-2$" },
    ],
    correctChoiceId: "a",
    guidance:
      "Point price elasticity is $(dQ/dP) \\cdot (P/Q)$. Differentiate demand, evaluate quantity at the stated price, then multiply the slope by $P/Q$. Example: $Q = 50 - P$ at $P = 10$ has $Q = 40$ and elasticity $-10/40 = -0.25$.",
    solution: [
      "The slope is $dQ/dP = -2$. At $P = 20$, $Q = 100 - 40 = 60$.",
      "Elasticity is $-2 \\cdot (20/60) = -40/60 = -2/3$.",
    ],
  },
  {
    id: "e2",
    topicId: "elasticity",
    kind: "numeric",
    prompt:
      "Demand is $Q = 120 - 4P$. What is the point price elasticity of demand at $P = 10$? Keep the sign.",
    answer: -0.5,
    tolerance: tol,
    guidance:
      "Use $(dQ/dP) \\cdot (P/Q)$ at the given price. Keep the sign: ordinary demand slopes down, so this elasticity is negative. Example: $Q = 30 - P$ at $P = 6$ has $Q = 24$ and elasticity $-6/24 = -0.25$.",
    solution: [
      "$dQ/dP = -4$. At $P = 10$, $Q = 120 - 40 = 80$.",
      "Elasticity is $-4 \\cdot (10/80) = -0.5$.",
    ],
  },
  {
    id: "e3",
    topicId: "elasticity",
    kind: "numeric",
    prompt:
      "Between two observations, price goes from $10$ to $14$ and quantity from $50$ to $30$. What is the arc (midpoint) price elasticity? Keep the sign.",
    answer: -1.5,
    tolerance: tol,
    guidance:
      "Arc elasticity uses the midpoint so the result does not depend on direction: $\\frac{Q_2 - Q_1}{P_2 - P_1} \\cdot \\frac{P_1 + P_2}{Q_1 + Q_2}$. Example: prices $2$ and $4$ with quantities $10$ and $6$ give $\\frac{-4}{2} \\cdot \\frac{6}{16} = -0.75$.",
    solution: [
      "$\\frac{30 - 50}{14 - 10} \\cdot \\frac{10 + 14}{50 + 30} = \\frac{-20}{4} \\cdot \\frac{24}{80}$.",
      "That is $-5 \\cdot 0.3 = -1.5$.",
    ],
  },
  {
    id: "e4",
    topicId: "elasticity",
    kind: "numeric",
    prompt:
      "Income goes from $2000$ to $2500$ and quantity demanded goes from $40$ to $50$. What is the arc (midpoint) income elasticity?",
    answer: 1,
    tolerance: tol,
    guidance:
      "The midpoint income elasticity divides the change in quantity by the change in income, then multiplies by the sum of the two incomes over the sum of the two quantities. Example: income from $20$ to $60$ and quantity from $4$ to $8$ gives $\\frac{4}{40} \\cdot \\frac{80}{12} = \\frac{2}{3}$.",
    solution: [
      "$\\frac{50 - 40}{2500 - 2000} \\cdot \\frac{2000 + 2500}{40 + 50} = \\frac{10}{500} \\cdot \\frac{4500}{90}$.",
      "That is $0.02 \\cdot 50 = 1$.",
    ],
  },
  {
    id: "e5",
    topicId: "elasticity",
    kind: "numeric",
    prompt:
      "The price of good $y$ goes from $10$ to $20$, and the quantity of good $x$ goes from $30$ to $50$. What is the arc (midpoint) cross-price elasticity of demand for $x$ with respect to the price of $y$?",
    answer: 0.75,
    tolerance: tol,
    guidance:
      "Cross-price arc elasticity puts the other good's price in the change and in the midpoint: $\\frac{Q_{x2} - Q_{x1}}{P_{y2} - P_{y1}} \\cdot \\frac{P_{y1} + P_{y2}}{Q_{x1} + Q_{x2}}$. Example: the other price goes from $2$ to $6$ while quantity goes from $5$ to $9$, which gives $\\frac{4}{4} \\cdot \\frac{8}{14} = \\frac{4}{7}$.",
    solution: [
      "$\\frac{50 - 30}{20 - 10} \\cdot \\frac{10 + 20}{30 + 50} = \\frac{20}{10} \\cdot \\frac{30}{80}$.",
      "That is $2 \\cdot 0.375 = 0.75$. The positive sign means the goods are substitutes.",
    ],
  },
  {
    id: "e6",
    topicId: "elasticity",
    kind: "choice",
    prompt:
      "Demand is $Q = 60/P$ for $P > 0$. What is the point price elasticity of demand?",
    choices: [
      { id: "a", text: "$-1$ at every positive price" },
      { id: "b", text: "$-60/P^{2}$, which still depends on $P$" },
      { id: "c", text: "It changes as $P$ changes" },
      { id: "d", text: "$0$" },
    ],
    correctChoiceId: "a",
    guidance:
      "Rewrite $Q = A/P$ as a power of $P$. For a demand $Q = AP^{b}$, the point price elasticity equals the exponent $b$. Example: $Q = 7P^{-2}$ has elasticity $-2$.",
    solution: [
      "Write $Q = 60P^{-1}$.",
      "For $Q = AP^{b}$ the point price elasticity is the exponent $b$.",
      "Here $b = -1$, at every price where demand is defined.",
    ],
  },
  {
    id: "e7",
    topicId: "elasticity",
    kind: "numeric",
    prompt:
      "Demand is $Q = 200 - 5P$. At what price is demand unit elastic (point price elasticity equal to $-1$)?",
    answer: 20,
    tolerance: tol,
    guidance:
      "Unit elastic means the point price elasticity equals $-1$. Set $(dQ/dP) \\cdot (P/Q) = -1$ and solve for price. Example: $Q = 40 - 2P$ gives $-2 \\cdot P/(40 - 2P) = -1$, so $P = 10$.",
    solution: [
      "The slope is $-5$ and $Q = 200 - 5P$, so $-5 \\cdot P/(200 - 5P) = -1$.",
      "Then $5P = 200 - 5P$, so $10P = 200$ and $P = 20$.",
      "At that price $Q = 100$, and $-5 \\cdot (20/100) = -1$.",
    ],
  },
  {
    id: "e8",
    topicId: "elasticity",
    kind: "numeric",
    prompt:
      "Income rises by $10$ percent and quantity demanded rises by $4$ percent. Using those percentage changes as stated, what is the income elasticity?",
    answer: 0.4,
    tolerance: tol,
    guidance:
      "When the question already gives percentage changes, divide them. Income elasticity is the percent change in quantity divided by the percent change in income. Example: quantity up $5$ percent and income up $20$ percent means elasticity $5/20 = 0.25$.",
    solution: [
      "Income elasticity is $4\\%/10\\% = 0.4$.",
      "The good is normal. The elasticity is below one, so the budget share of this good falls as income rises.",
    ],
  },
  {
    id: "e9",
    topicId: "elasticity",
    kind: "numeric",
    prompt:
      "The good's own price falls by $20$ percent and quantity demanded rises by $10$ percent. Using those percentage changes as stated, what is the price elasticity of demand? Keep the sign.",
    answer: -0.5,
    tolerance: tol,
    guidance:
      "Price elasticity is the percent change in quantity divided by the percent change in price. A price fall is a negative percent change, so keep the minus. Example: quantity up $4$ percent and price down $8$ percent means $4/(-8) = -0.25$.",
    solution: [
      "The price change is $-20$ percent and the quantity change is $+10$ percent.",
      "Elasticity is $10/(-20) = -0.5$.",
    ],
  },
  {
    id: "e10",
    topicId: "elasticity",
    kind: "choice",
    prompt:
      "Demand for $x$ is $Q_x = 20 + 2P_y$. What is the point cross-price elasticity of $x$ with respect to $P_y$ at $P_y = 5$?",
    choices: [
      { id: "a", text: "$\\frac{1}{3}$" },
      { id: "b", text: "$\\frac{2}{3}$" },
      { id: "c", text: "$2$" },
      { id: "d", text: "$\\frac{1}{5}$" },
    ],
    correctChoiceId: "a",
    guidance:
      "Point cross-price elasticity is $(\\partial Q_x/\\partial P_y) \\cdot (P_y/Q_x)$. Differentiate, read quantity off the demand at the stated price, then scale by that price-quantity ratio. Example: $Q_x = 8 + P_y$ at $P_y = 2$ has $Q_x = 10$ and elasticity $2/10 = 0.2$.",
    solution: [
      "The slope is $\\partial Q_x/\\partial P_y = 2$. At $P_y = 5$, $Q_x = 20 + 10 = 30$.",
      "Elasticity is $2 \\cdot (5/30) = 10/30 = 1/3$.",
    ],
  },
  {
    id: "l1",
    topicId: "lagrange",
    kind: "numeric",
    prompt:
      "Maximize $U(x, y) = xy$ subject to $2x + 4y = 40$, with $x > 0$ and $y > 0$. What is the optimal $x$?",
    answer: 10,
    tolerance: tol,
    guidance:
      "For $U = xy$ the marginal utilities are $MU_x = y$ and $MU_y = x$. Set $MU_x/p_x = MU_y/p_y$, then use the budget. Example: prices $1$ and $1$ with budget $8$ give $x = 4$ and $y = 4$.",
    solution: [
      "$MU_x / 2 = MU_y / 4$ means $y/2 = x/4$, so $x = 2y$.",
      "The budget $2(2y) + 4y = 40$ simplifies to $8y = 40$, so $y = 5$ and $x = 10$.",
    ],
  },
  {
    id: "l2",
    topicId: "lagrange",
    kind: "numeric",
    prompt:
      "Maximize $U(x, y) = xy$ subject to $2x + 4y = 40$. Using $\\mathcal{L} = xy + \\lambda(40 - 2x - 4y)$, what is the multiplier $\\lambda$ at the optimum?",
    answer: 2.5,
    tolerance: tol,
    guidance:
      "The multiplier satisfies $MU_x = \\lambda p_x$ at the optimum, and the same relation for $y$. Find the bundle first, then divide a marginal utility by its price. Example: if $MU_x = 6$ and the price of $x$ is $3$, then $\\lambda = 2$.",
    solution: [
      "The optimum is $x = 10$, $y = 5$, from $y/2 = x/4$ and the budget.",
      "$MU_x = y = 5$ and $p_x = 2$, so $\\lambda = 5/2 = 2.5$.",
      "Check with $y$: $MU_y = x = 10$ and $p_y = 4$, so $\\lambda = 10/4 = 2.5$.",
    ],
  },
  {
    id: "l3",
    topicId: "lagrange",
    kind: "numeric",
    prompt:
      "Minimize cost $6L + 3K$ subject to $LK = 18$, with $L > 0$ and $K > 0$. Production is $q = LK$. What is the cost-minimizing labour input $L$?",
    answer: 3,
    tolerance: tol,
    guidance:
      "Cost minimization sets the marginal product per euro equal across inputs: $MP_L/w = MP_K/r$. For $q = LK$ the marginal products are $MP_L = K$ and $MP_K = L$. Combine that rule with the output target. Example: wages and rental rates both equal to $2$, with target $LK = 8$, give a labour demand of $\\sqrt{8}$.",
    solution: [
      "$MP_L/w = K/6$ and $MP_K/r = L/3$. Set them equal: $K/6 = L/3$, so $K = 2L$.",
      "The constraint $(2L)L = 18$ gives $2L^{2} = 18$, so $L^{2} = 9$ and $L = 3$.",
    ],
  },
  {
    id: "l4",
    topicId: "lagrange",
    kind: "numeric",
    prompt:
      "Minimize cost $6L + 3K$ subject to $LK = 18$, with production $q = LK$. What is the cost-minimizing capital input $K$?",
    answer: 6,
    tolerance: tol,
    guidance:
      "Use $MP_L/w = MP_K/r$ together with the production target, and solve for capital. For $q = LK$, marginal products are the other input. Example: with both input prices equal to $2$ and target $LK = 8$, capital equals $\\sqrt{8}$.",
    solution: [
      "$K/6 = L/3$ implies $K = 2L$.",
      "Then $L \\cdot 2L = 18$, so $L = 3$ and $K = 6$.",
      "Cost is $6 \\cdot 3 + 3 \\cdot 6 = 36$.",
    ],
  },
  {
    id: "l5",
    topicId: "lagrange",
    kind: "numeric",
    prompt:
      "Maximize $U(x, y) = \\ln x + \\ln y$ subject to $2x + y = 12$, with $x > 0$ and $y > 0$. What is the optimal $x$?",
    answer: 3,
    tolerance: tol,
    guidance:
      "For $U = \\ln x + \\ln y$, marginal utilities are $1/x$ and $1/y$. Set $(1/x)/p_x = (1/y)/p_y$ and substitute into the budget. Example: prices $1$ and $1$ with budget $10$ give $x = 5$.",
    solution: [
      "$(1/x)/2 = (1/y)/1$ means $y = 2x$.",
      "The budget $2x + 2x = 12$ gives $x = 3$.",
    ],
  },
  {
    id: "l6",
    topicId: "lagrange",
    kind: "numeric",
    prompt:
      "Maximize $U(x, y) = \\ln x + \\ln y$ subject to $2x + y = 12$. What is the optimal $y$?",
    answer: 6,
    tolerance: tol,
    guidance:
      "Once the first-order conditions relate the two goods, the budget solves for the remaining quantity. Example: with equal prices and budget $10$, the utility $\\ln x + \\ln y$ spends half the budget on $y$, so $y = 5$.",
    solution: [
      "From $(1/x)/2 = 1/y$, get $y = 2x$.",
      "Then $2x + 2x = 12$, so $x = 3$ and $y = 6$.",
      "Check: $MU_x/p_x = (1/3)/2 = 1/6$ and $MU_y/p_y = (1/6)/1 = 1/6$.",
    ],
  },
  {
    id: "l7",
    topicId: "lagrange",
    kind: "numeric",
    prompt:
      "Maximize $U(x, y) = x^{2}y$ subject to $x + y = 9$, with prices equal to $1$ and with $x > 0$, $y > 0$. What is the optimal $x$?",
    answer: 6,
    tolerance: tol,
    guidance:
      "For $U = x^{2}y$ with equal prices, $MU_x = 2xy$ and $MU_y = x^{2}$. Setting them equal gives a relation between $x$ and $y$. Ignore the origin, where utility is zero, then use the budget. Example: on the budget $x + y = 12$ the same utility gives $x = 8$ and $y = 4$.",
    solution: [
      "$MU_x = 2xy$ and $MU_y = x^{2}$. Equal prices imply $2xy = x^{2}$.",
      "Since $x > 0$, divide by $x$ to get $x = 2y$.",
      "Then $2y + y = 9$, so $y = 3$ and $x = 6$.",
    ],
  },
  {
    id: "l8",
    topicId: "lagrange",
    kind: "numeric",
    prompt:
      "Maximize $U(x, y) = x^{2}y$ subject to $x + y = 9$, with equal prices. What is the optimal $y$?",
    answer: 3,
    tolerance: tol,
    guidance:
      "Use the marginal condition for this utility, then read the other good off the budget. Example: on the budget $x + y = 12$, with $U = x^{2}y$ and equal prices, the quantity of $y$ is $4$.",
    solution: [
      "Equal prices and $U = x^{2}y$ give $x = 2y$ at an interior optimum.",
      "The budget $2y + y = 9$ gives $y = 3$ and $x = 6$.",
      "Check: $MU_x = 2 \\cdot 6 \\cdot 3 = 36$ and $MU_y = 6^{2} = 36$.",
    ],
  },
  {
    id: "l9",
    topicId: "lagrange",
    kind: "numeric",
    prompt:
      "Maximize $U(x, y) = x^{1/2} y^{1/2}$ subject to $x + y = 10$, with equal prices. What is the optimal $x$?",
    answer: 5,
    tolerance: tol,
    guidance:
      "For $U = x^{1/2}y^{1/2}$ and equal prices, spend the same amount on each good. Equal expenditure is a share rule for equal exponents, not a rule for every utility. Example: budget $16$ and equal prices give $x = 8$.",
    solution: [
      "The exponents are equal and the prices are equal, so expenditure shares are equal.",
      "Half of the budget $10$ is spent on $x$, and the price of $x$ is $1$, so $x = 5$. Then $y = 5$.",
    ],
  },
  {
    id: "l10",
    topicId: "lagrange",
    kind: "numeric",
    prompt:
      "Maximize $U(x, y) = xy$ subject to $3x + y = 24$, with $x > 0$ and $y > 0$. What is the optimal $y$?",
    answer: 12,
    tolerance: tol,
    guidance:
      "Set $MU_x/p_x = MU_y/p_y$ for $U = xy$, so $y/p_x = x/p_y$, then substitute into the budget. Example: prices $1$ and $1$ with budget $8$ give $y = 4$.",
    solution: [
      "$MU_x = y$ and $MU_y = x$, with prices $3$ and $1$. Then $y/3 = x/1$, so $y = 3x$.",
      "The budget $3x + 3x = 24$ gives $x = 4$ and $y = 12$.",
      "Check: $MU_x/p_x = 12/3 = 4$ and $MU_y/p_y = 4/1 = 4$.",
    ],
  },
];

const byId = new Map(questions.map((question) => [question.id, question]));

export function questionById(id: string): Question | undefined {
  return byId.get(id);
}
