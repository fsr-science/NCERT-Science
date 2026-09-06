
# Linear Inequalities — Glossary & Quick Reference (NCERT Chapter 5)

> Standalone formula/term sheet for last-minute revision. Pairs with the companion NOTES file, which has the full derivations and worked examples.

## Term Glossary


| Term                                   | Definition                                                                                                                                            | Example                                                |
| ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Inequality**                         | Two real numbers or algebraic expressions related by\(<, >, \le,\) or \(\ge\)                                                                         | \(30x<200\)                                            |
| **Numerical inequality**               | An inequality where both sides are fixed numbers, no variable                                                                                         | \(3<5\)                                                |
| **Literal inequality**                 | An inequality where at least one side contains a variable                                                                                             | \(x\ge3\)                                              |
| **Double (compound) inequality**       | Two inequalities chained about one middle expression                                                                                                  | \(3\le x<5\)                                           |
| **Strict inequality**                  | Uses\(<\) or \(>\); the boundary value is **excluded** from the solution set                                                                          | \(x<3\)                                                |
| **Slack inequality**                   | Uses\(\le\) or \(\ge\); the boundary value is **included** in the solution set                                                                        | \(x\ge1\)                                              |
| **Linear inequality in one variable**  | Form\(ax+b \lessgtr 0\) (or \(\le,\ge\)) with \(a\neq0\)                                                                                              | \(ax+b<0\)                                             |
| **Linear inequality in two variables** | Form\(ax+by \lessgtr c\) (or \(\le,\ge\)) with \(a\neq0,\,b\neq0\)                                                                                    | \(ax+by\le c\)                                         |
| **Solution**                           | A value of the variable that makes the inequality a true statement                                                                                    | \(x=2\) solves \(30x<200\)                             |
| **Solution set**                       | The complete collection of all solutions                                                                                                              | \(\{0,1,2,3,4,5,6\}\) for \(30x<200,\ x\in\mathbb{N}\) |
| **Interval notation**                  | Shorthand for a solution set on the real line, using round brackets for excluded (open) endpoints and square brackets for included (closed) endpoints | \((-\infty,2)\), \([8,\infty)\), \([2,6)\)             |
| **System of inequalities**             | Two or more inequalities that must hold**simultaneously**; solved by intersecting their individual solution sets                                      | \(x<6\) and \(x\ge2 \Rightarrow [2,6)\)                |

## Quick Reference: Solving Rules

Both rules follow from the order axioms of \(\mathbb{R}\) — see the NOTES file for the full derivation.

\[
\boxed{\textbf{Rule 1 (Addition):}\quad a<b \iff a+c<b+c \ \text{ for every } c\in\mathbb{R}}
\]

\[
\boxed{\textbf{Rule 2 (Multiplication):}\quad
\begin{aligned}
c>0:&\quad a<b \iff ac<bc \ \text{(sign unchanged)}\\
c<0:&\quad a<b \iff ac>bc \ \text{(sign reverses)}
\end{aligned}}
\]

Both rules hold identically with \(\le\) in place of \(<\).

## Quick Reference: Interval Notation and Number-Line Marks


| Interval        | Inequality form | Left boundary            | Right boundary           |
| ----------------- | ----------------- | -------------------------- | -------------------------- |
| \((a,b)\)       | \(a<x<b\)       | open circle              | open circle              |
| \([a,b]\)       | \(a\le x\le b\) | filled circle            | filled circle            |
| \([a,b)\)       | \(a\le x<b\)    | filled circle            | open circle              |
| \((a,b]\)       | \(a<x\le b\)    | open circle              | filled circle            |
| \((-\infty,a)\) | \(x<a\)         | ray, arrow to\(-\infty\) | open circle at\(a\)      |
| \([a,\infty)\)  | \(x\ge a\)      | filled circle at\(a\)    | ray, arrow to\(+\infty\) |

## Quick Reference: Classification of General Forms


| Form                                 | Category                                      |
| -------------------------------------- | ----------------------------------------------- |
| \(ax+b<0\), \(\ ax+b>0\)             | Linear, one variable, strict                  |
| \(ax+b\le0\), \(\ ax+b\ge0\)         | Linear, one variable, slack                   |
| \(ax+by<c\), \(\ ax+by>c\)           | Linear, two variables, strict                 |
| \(ax+by\le c\), \(\ ax+by\ge c\)     | Linear, two variables, slack                  |
| \(ax^2+bx+c\le0\), \(\ ax^2+bx+c>0\) | **Quadratic** — outside this chapter's scope |

## Quick Reference: Word-Problem Keyword Map


| Phrase in the problem                                                   | Symbol          |
| ------------------------------------------------------------------------- | ----------------- |
| "at least", "not less than", "minimum of"                               | \(\ge\)         |
| "at most", "upto", "not more than", "maximum of"                        | \(\le\)         |
| "more than"                                                             | \(>\)           |
| "less than"                                                             | \(<\)           |
| "between\(a\) and \(b\)" (inclusive, common convention in this chapter) | \(a\le x\le b\) |

## Quick Reference: Compound Inequality vs. System of Inequalities


|                | Double/compound inequality                             | System of inequalities                            |
| ---------------- | -------------------------------------------------------- | --------------------------------------------------- |
| Written as     | \(a<f(x)<b\) (one chain)                               | Two separate inequalities                         |
| Solving method | Apply the same operation to**all three parts at once** | Solve each inequality**independently**            |
| Combining step | Not needed — already one chain                        | Take the**intersection** of the two solution sets |
| Graph          | Single shaded segment/ray                              | Overlap of two separately-shaded regions          |
