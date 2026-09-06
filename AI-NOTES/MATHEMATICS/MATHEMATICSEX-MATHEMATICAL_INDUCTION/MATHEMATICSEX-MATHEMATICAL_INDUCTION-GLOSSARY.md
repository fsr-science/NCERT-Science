
# Principle of Mathematical Induction — Glossary & Quick Reference

> Standalone reference sheet. Pairs with **PMI-NOTES** (worked derivations) and **PMI-REVISION-MINDMAP** (concept map + strategy flowcharts).

## Key Terms


| Term                                      | Meaning                                                                                                                                          |
| ------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Natural numbers,\( \mathbb{N} \)          | \( \{1, 2, 3, \ldots\} \) — the domain over which \( P(n) \) is defined                                                                         |
| Statement\( P(n) \)                       | A proposition depending on\( n \) that is either true or false for each \( n \in \mathbb{N} \)                                                   |
| Base step (base case)                     | Verifying\( P(n_0) \) is true for the smallest value \( n_0 \) the claim covers — not always \( n_0=1 \)                                        |
| Inductive hypothesis (IH)                 | The assumption that\( P(k) \) is true, for one particular but arbitrary \( k \geq n_0 \) — must be the *full* statement, not just its last term |
| Inductive step                            | The logical argument proving\( P(k) \Rightarrow P(k+1) \)                                                                                        |
| Principle of Mathematical Induction (PMI) | Base step + inductive step, together, imply\( P(n) \) true for all \( n \geq n_0 \)                                                              |
| Telescoping                               | A sum or product where consecutive terms cancel, leaving only boundary terms                                                                     |
| Divisibility statement                    | \(P(n)\): "\(a(n)\) is divisible by \(c\)" \(\iff\) \(a(n) = c\cdot q\) for some \(q \in \mathbb{N}\)                                            |
| Recursively defined sequence              | A sequence given by an initial term plus a rule expressing\(a_n\) in terms of \(a_{n-1}\)                                                        |
| Case-split induction                      | An inductive step broken into sub-cases (e.g. by parity of\(k\)) when the term rule itself depends on that classification                        |

> [!info] Beyond this chapter
> **Strong induction** — assuming \(P(n_0), P(n_0+1), \ldots, P(k)\) *all* true to prove \(P(k+1)\), rather than just \(P(k)\) alone — is a useful extension not covered in this Exemplar chapter but worth knowing exists for later courses.

---

## Quick Reference: Results Proved by Induction in This Chapter


| Category                           | Result                                                                                                                                              | Valid for            | Source      |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------- | ------------- |
| Summation                          | \( 1+3+5+\cdots+(2n-1) = n^2 \)                                                                                                                     | \(n \geq 1\)         | Ex 1        |
| Summation                          | \( \displaystyle\sum_{t=1}^{n-1} t(t+1) = \frac{n(n-1)(n+1)}{3} \)                                                                                  | \(n \geq 2\)         | Ex 2        |
| Telescoping product                | \( \displaystyle\prod_{r=2}^{n}\left(1-\frac{1}{r^2}\right) = \frac{n+1}{2n} \)                                                                     | \(n \geq 2\)         | Ex 3        |
| Divisibility                       | \( 2^{2n}-1 \) divisible by 3                                                                                                                       | \(n \geq 1\)         | Ex 4        |
| Inequality                         | \( 2n+1 < 2^n \)                                                                                                                                    | \(n \geq 3\)         | Ex 5        |
| Recursive sequence                 | \(a_1=2,\ a_k=5a_{k-1}\ \Rightarrow\ a_n = 2\cdot5^{\,n-1}\)                                                                                        | \(n \geq 1\)         | Ex 6        |
| Algebraic law                      | \( c(a_1+\cdots+a_n) = ca_1+\cdots+ca_n \)                                                                                                          | \(n \geq 2\)         | Ex 7        |
| Trig series (sine)                 | \( \displaystyle\sum_{r=0}^{n-1}\sin(\alpha+r\beta) = \frac{\sin\left(\alpha+\frac{n-1}{2}\beta\right)\sin\frac{n\beta}{2}}{\sin\frac{\beta}{2}} \) | \(n \geq 1\)         | Ex 8        |
| Factorial sum                      | \( \displaystyle\sum_{r=1}^{n} r\times r! = (n+1)!-1 \)                                                                                             | \(n \geq 1\)         | Ex 9        |
| Piecewise sum                      | \(S_n = \frac{n(n+1)^2}{2}\) (n even), \(\frac{n^2(n+1)}{2}\) (n odd), for \(T_n=n^2\) (odd), \(2n^2\) (even)                                       | \(n \geq 1\)         | Ex 10       |
| Trig series (cosine)               | \( \displaystyle\sum_{r=0}^{n-1}\cos(\alpha+r\beta) = \frac{\cos\left(\alpha+\frac{n-1}{2}\beta\right)\sin\frac{n\beta}{2}}{\sin\frac{\beta}{2}} \) | \(n \in \mathbb{N}\) | Exercise 20 |
| Product of cosines                 | \( \cos\theta\cos2\theta\cos2^2\theta\cdots\cos2^{n-1}\theta = \dfrac{\sin(2^n\theta)}{2^n\sin\theta} \)                                            | \(n \in \mathbb{N}\) | Exercise 21 |
| Trig series (sine,\(\theta\) form) | \( \displaystyle\sum_{r=1}^{n}\sin(r\theta) = \frac{\sin\frac{n\theta}{2}\sin\frac{(n+1)\theta}{2}}{\sin\frac{\theta}{2}} \)                        | \(n \in \mathbb{N}\) | Exercise 22 |

## Standard Divisibility Toolkit


| Expression    | Divisible by                                                             | Reusable technique                                          |
| --------------- | -------------------------------------------------------------------------- | ------------------------------------------------------------- |
| \(4^n - 1\)   | 3                                                                        | write\(4^{k+1}-1 = 4\cdot4^k - 1 = 3\cdot4^k + (4^k-1)\)    |
| \(2^{3n}-1\)  | 7                                                                        | same pattern with base\(8=2^3\)                             |
| \(x^n - y^n\) | \(x-y\) (any integers, \(x\neq y\))                                      | factor:\(x^{k+1}-y^{k+1} = x(x^k-y^k) + y^k(x-y)\)          |
| \(x^n - 1\)   | \(x-1\) (always; least positive \(k\) with \(x-k\mid x^n-1\) is \(k=1\)) | \(x^n-1=(x-1)(x^{n-1}+\cdots+1)\)                           |
| \(n^3-n\)     | 6                                                                        | factor as\(n(n-1)(n+1)\), product of 3 consecutive integers |

## Self-Check Answer Key — Objective Exercises (4.3, Q26–30)

*(Unsolved practice problems from the source exercise set — answers only, for self-checking after attempting; full working is not reproduced here.)*


| Q  | Statement                                                                                          | Answer                                 |
| ---- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| 26 | Least positive\(k\) so \(10^n+3\cdot4^{n+2}+k\) divisible by 9                                     | (A) 5                                  |
| 27 | \(3\cdot5^{2n+1}+2^{3n+1}\) divisible by                                                           | (B) 17                                 |
| 28 | Least positive\(k\) so \(x^n-1\) divisible by \(x-k\)                                              | (A) 1                                  |
| 29 | \(2n<n!\) true for all \(n \geq\)                                                                  | 4                                      |
| 30 | "\(P(k)\Rightarrow P(k+1)\) for some \(k\)" alone implies \(P(n)\) true \(\forall n\in\mathbb{N}\) | **False** — no base case was verified |
