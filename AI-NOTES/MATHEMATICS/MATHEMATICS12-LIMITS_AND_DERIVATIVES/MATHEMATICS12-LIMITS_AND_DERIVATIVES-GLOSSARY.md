
# Limits and Derivatives — Glossary & Quick Reference

*NCERT Class 11 Mathematics, Chapter 12 — companion to the NOTES and REVISION-MINDMAP files for this chapter.*

## At a glance

- **Subject:** Mathematics — Calculus (introductory)
- **Level:** CBSE Class 11 Board / JEE-Foundation
- **Prerequisites:** Functions and their graphs, polynomial and rational functions, trigonometric ratios and identities, factorization
- **Key idea:** A **limit** is the value a function is heading towards near a point; a **derivative** is a special limit that measures instantaneous rate of change.

---

## Core Definitions


| Term                         | Meaning                                                                                                                        | Notation                                                   |
| ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| Left-hand limit (LHL)        | The value\(f\) is expected to take at \(x=a\), based only on values of \(f(x)\) for \(x\) slightly **less** than \(a\)         | \(\displaystyle\lim_{x\to a^-} f(x)\)                      |
| Right-hand limit (RHL)       | The value\(f\) is expected to take at \(x=a\), based only on values of \(f(x)\) for \(x\) slightly **greater** than \(a\)      | \(\displaystyle\lim_{x\to a^+} f(x)\)                      |
| Limit at a point             | The common value of LHL and RHL,**when they agree**; may differ from \(f(a)\), or exist even where \(f(a)\) is undefined       | \(\displaystyle\lim_{x\to a} f(x) = l\)                    |
| Polynomial function          | \(f(x)=a_0+a_1x+a_2x^2+\cdots+a_nx^n\), all \(a_i\in\mathbb R\), \(a_n\neq0\)                                                  | degree\(n\)                                                |
| Rational function            | \(f(x)=\dfrac{g(x)}{h(x)}\), with \(g,h\) polynomials and \(h(x)\neq0\)                                                        | —                                                         |
| Sandwich (squeeze) theorem   | If\(f(x)\le g(x)\le h(x)\) near \(a\), and \(\lim_{x\to a}f(x)=\lim_{x\to a}h(x)=l\), then \(\lim_{x\to a}g(x)=l\) too         | Theorem 4, §12.4                                          |
| Derivative at a point        | The instantaneous rate of change of\(f\) at \(x=a\) — the limit of the average rate of change as the interval shrinks to zero | \(\displaystyle f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}\) |
| Derivative (as a function)   | \(f'(a)\), evaluated at a general point \(x\) instead of one fixed \(a\); defines a new function wherever the limit exists     | \(\displaystyle f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}\) |
| First principle              | Finding\(f'(x)\) directly from the limit definition above, rather than from a shortcut rule                                    | —                                                         |
| Tangent-slope interpretation | Geometrically,\(f'(a)\) is the slope of the tangent to the curve \(y=f(x)\) at the point \((a,f(a))\)                          | \(f'(a)=\tan\psi\)                                         |

---

## Algebra of Limits

*(valid whenever \(\lim_{x\to a}f(x)\) and \(\lim_{x\to a}g(x)\) both exist)*


| Rule            | Statement                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Sum             | \(\displaystyle\lim_{x\to a}[f(x)+g(x)] = \lim_{x\to a}f(x)+\lim_{x\to a}g(x)\)                                                          |
| Difference      | \(\displaystyle\lim_{x\to a}[f(x)-g(x)] = \lim_{x\to a}f(x)-\lim_{x\to a}g(x)\)                                                          |
| Product         | \(\displaystyle\lim_{x\to a}[f(x)\cdot g(x)] = \lim_{x\to a}f(x)\cdot\lim_{x\to a}g(x)\)                                                 |
| Quotient        | \(\displaystyle\lim_{x\to a}\frac{f(x)}{g(x)} = \frac{\lim_{x\to a}f(x)}{\lim_{x\to a}g(x)}\) &nbsp; provided \(\lim_{x\to a}g(x)\neq0\) |
| Scalar multiple | \(\displaystyle\lim_{x\to a}\big[\lambda f(x)\big] = \lambda\lim_{x\to a}f(x)\), for constant \(\lambda\)                                |

## Standard Limits


| Limit                                                               | Value                  | Condition                                                                |
| --------------------------------------------------------------------- | ------------------------ | -------------------------------------------------------------------------- |
| \(\displaystyle\lim_{x\to a} x^n\)                                  | \(a^n\)                | \(n\) a positive integer                                                 |
| \(\displaystyle\lim_{x\to a}\dfrac{x^n-a^n}{x-a}\)                  | \(na^{n-1}\)           | \(n\) a positive integer; also holds for any rational \(n\) with \(a>0\) |
| \(\displaystyle\lim_{x\to a} f(x)\) for polynomial \(f\)            | \(f(a)\)               | always                                                                   |
| \(\displaystyle\lim_{x\to a}\dfrac{g(x)}{h(x)}\), rational function | \(\dfrac{g(a)}{h(a)}\) | provided\(h(a)\neq0\)                                                    |
| \(\displaystyle\lim_{x\to 0}\dfrac{\sin x}{x}\)                     | \(1\)                  | \(x\) in **radians**                                                     |
| \(\displaystyle\lim_{x\to 0}\dfrac{1-\cos x}{x}\)                   | \(0\)                  | \(x\) in **radians**                                                     |

> **0/0 form protocol:** if direct substitution gives \(g(a)=0=h(a)\), write \(g(x)=(x-a)^k g_1(x)\), \(h(x)=(x-a)^l h_1(x)\) with \(g_1(a),h_1(a)\neq0\). If \(k>l\), the limit is \(0\); if \(k=l\), the limit is \(g_1(a)/h_1(a)\); if \(k<l\), the limit is not defined. If instead \(h(a)=0\) but \(g(a)\neq0\), the limit does not exist.

---

## Algebra of Derivatives


| Rule                   | Statement                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| Sum/Difference         | \((u\pm v)' = u'\pm v'\)                                                  |
| Product (Leibniz rule) | \((uv)' = u'v+uv'\)                                                       |
| Quotient               | \(\left(\dfrac{u}{v}\right)' = \dfrac{u'v-uv'}{v^2}\) &nbsp; (\(v\neq0\)) |
| Scalar multiple        | \((\lambda f)' = \lambda f'\), for constant \(\lambda\)                   |

## Standard Derivatives


| Function         | Derivative        | Domain note                                                      |
| ------------------ | ------------------- | ------------------------------------------------------------------ |
| \(a\) (constant) | \(0\)             | all\(x\)                                                         |
| \(x\)            | \(1\)             | all\(x\)                                                         |
| \(x^n\)          | \(nx^{n-1}\)      | proved here for\(n\) a positive integer; true for all real \(n\) |
| \(\dfrac1x\)     | \(-\dfrac1{x^2}\) | \(x\neq0\)                                                       |
| \(\sin x\)       | \(\cos x\)        | all\(x\)                                                         |
| \(\cos x\)       | \(-\sin x\)       | all\(x\) (used, not separately derived, in this chapter)         |
| \(\tan x\)       | \(\sec^2x\)       | \(x\neq(2n+1)\dfrac\pi2\)                                        |
| \(\cot x\)       | \(-\csc^2x\)      | \(x\neq n\pi\)                                                   |
| \(\sin^2x\)      | \(\sin 2x\)       | all\(x\) — obtained via the product rule                        |

---

## Notation Reference


| Symbol                                                                          | Meaning                                                                                |
| --------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| \(f'(a)\)                                                                       | derivative of\(f\) at the point \(x=a\)                                                |
| \(\dfrac{df}{dx}\), \(\dfrac{dy}{dx}\) (when \(y=f(x)\))                        | derivative of\(f\) with respect to \(x\), as a function                                |
| \(D\big(f(x)\big)\)                                                             | alternative notation for the derivative                                                |
| \(\left.\dfrac{df}{dx}\right\rvert_{a}\), \(\left(\dfrac{df}{dx}\right)_{x=a}\) | derivative of\(f\), evaluated at \(x=a\)                                               |
| \(\psi\)                                                                        | angle the tangent line makes with the\(x\)-axis, in the geometric picture of \(f'(a)\) |
