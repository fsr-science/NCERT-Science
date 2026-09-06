
# Glossary & Quick Reference — Sequences and Series

> NCERT Class 11, Chapter 8 (2025–26 rationalized reprint). Standalone formula sheet for last-minute revision — see `NOTES-Sequences-and-Series.md` for derivations, worked examples, and diagrams.

## Sequences and Series


| Term                | Meaning                                                           | Formula / Notation                   | Conditions                                                        |
| --------------------- | ------------------------------------------------------------------- | -------------------------------------- | ------------------------------------------------------------------- |
| Sequence            | Ordered list of numbers with an identified 1st, 2nd, 3rd, … term | $a_1, a_2, a_3, \ldots, a_n, \ldots$ | Domain =$\mathbb{N}$, or $\{1,2,\ldots,k\}$ for a finite sequence |
| Term / general term | The number at the$n$th position                                   | $a_n$ (also $a(n)$)                  | —                                                                |
| Finite sequence     | Fixed number of terms                                             | —                                   | —                                                                |
| Infinite sequence   | Never terminates                                                  | —                                   | —                                                                |
| Recurrence relation | Rule generating$a_n$ from earlier terms                           | e.g.$a_n = a_{n-1}+a_{n-2}$          | Needs stated initial term(s)                                      |
| Series              | The*indicated sum* of a sequence's terms                          | $a_1+a_2+\cdots+a_n+\cdots$          | Finite/infinite matches the underlying sequence                   |
| Sigma notation      | Compact way to write a series                                     | $\displaystyle\sum_{k=1}^n a_k$      | —                                                                |
| Sum of a series     | The numerical value the series evaluates to                       | $S_n$                                | Distinct from the series itself (the expression)                  |

## Geometric Progression (G.P.)


| Term                      | Meaning                                                  | Formula                                               | Conditions                               |
| --------------------------- | ---------------------------------------------------------- | ------------------------------------------------------- | ------------------------------------------ |
| G.P.                      | Sequence with a constant ratio between consecutive terms | $\dfrac{a_{k+1}}{a_k}=r$ for all $k\ge 1$             | Every term non-zero                      |
| First term                | —                                                       | $a$                                                   | $a \ne 0$                                |
| Common ratio              | —                                                       | $r$                                                   | $r \ne 0$; can be negative or fractional |
| General term              | $n$th term of a G.P.                                     | $a_n = ar^{n-1}$                                      | —                                       |
| Sum to$n$ terms, $r=1$    | —                                                       | $S_n = na$                                            | Only when$r=1$                           |
| Sum to$n$ terms, $r\ne 1$ | —                                                       | $S_n = \dfrac{a(r^n-1)}{r-1} = \dfrac{a(1-r^n)}{1-r}$ | $r \ne 1$                                |
| Finite geometric series   | —                                                       | $a+ar+ar^2+\cdots+ar^{n-1}$                           | —                                       |
| Infinite geometric series | —                                                       | $a+ar+ar^2+\cdots$                                    | —                                       |

## Geometric Mean (G.M.)


| Term                                | Meaning                                   | Formula                                                            | Conditions                                   |
| ------------------------------------- | ------------------------------------------- | -------------------------------------------------------------------- | ---------------------------------------------- |
| G.M. of$a,b$                        | Number that makes$a, G, b$ a G.P.         | $G=\sqrt{ab}$                                                      | $a,b>0$                                      |
| Common ratio for inserting$n$ G.M.s | —                                        | $r = \left(\dfrac{b}{a}\right)^{\frac1{n+1}}$                      | Sequence$a,G_1,\ldots,G_n,b$ has $n+2$ terms |
| $k$th inserted G.M.                 | Numbers making$a,G_1,\ldots,G_n,b$ a G.P. | $G_k = a\left(\dfrac{b}{a}\right)^{\frac{k}{n+1}}$, $k=1,\ldots,n$ | Denominator is$n+1$, not $n$                 |

## Relationship Between A.M. and G.M.


| Term                       | Meaning                           | Formula                       | Conditions                        |
| ---------------------------- | ----------------------------------- | ------------------------------- | ----------------------------------- |
| A.M. of$a,b$               | —                                | $A=\dfrac{a+b}{2}$            | —                                |
| G.M. of$a,b$               | —                                | $G=\sqrt{ab}$                 | $a,b>0$                           |
| A.M.–G.M. inequality      | —                                | $A \ge G$                     | Equality iff$a=b$                 |
| Recovering$a,b$ from $A,G$ | Roots of the underlying quadratic | $x = A \pm \sqrt{(A+G)(A-G)}$ | Derived from$(a-b)^2=(a+b)^2-4ab$ |

## Symbols used in this chapter


| Symbol                      | Read as                  | Meaning                                            |
| ----------------------------- | -------------------------- | ---------------------------------------------------- |
| $a_n$                       | "a sub n"                | $n$th term of a sequence                           |
| $S_n$                       | "S sub n"                | Sum of the first$n$ terms                          |
| $r$                         | "common ratio"           | Constant ratio between consecutive G.P. terms      |
| $\displaystyle\sum_{k=1}^n$ | "sigma, k equals 1 to n" | Sum from$k=1$ to $k=n$                             |
| $G,\ G_1,\ldots,G_n$        | "geometric mean(s)"      | Term(s) inserted between$a$ and $b$ to form a G.P. |
| $A$                         | "A.M."                   | Arithmetic mean of two numbers                     |
