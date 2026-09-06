
# GLOSSARY — Binomial Theorem (NCERT Ch. 7, Positive Integral Index)

*Target level: Board / Class 11 · Standalone Quick-Reference sheet — pair with NOTES.md for derivations*

## Core Definitions


| Term                                            | Meaning                                                                                                                                  |
| ------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| **Binomial**                                    | An algebraic expression with exactly two terms, e.g.$a+b$.                                                                               |
| **Binomial coefficient** $\,{}^{n}C_r$          | The coefficient of the$(r+1)^{\text{th}}$ term in the expansion of $(a+b)^n$; equals $\dfrac{n!}{r!(n-r)!}$, $0 \le r \le n$.            |
| **Index** $n$                                   | The power to which the binomial is raised. This chapter covers**positive integral $n$ only** (rational/negative index is a later topic). |
| **Pascal's Triangle** (*Meru-Prastara*, Pingla) | Triangular array of binomial coefficients; row$n$ lists ${}^{n}C_0, {}^{n}C_1, \dots, {}^{n}C_n$.                                        |
| **General term** $T_{r+1}$                      | $T_{r+1} = {}^{n}C_r\, a^{n-r} b^{r}$ — the $(r+1)^{\text{th}}$ term, $r = 0,1,\dots,n$.                                                |

## Key Formulas

> [!note] ✏️ Binomial Theorem (positive integral index)
> $$
> (a+b)^n = \sum_{k=0}^{n} {}^{n}C_k\, a^{n-k} b^{k} = {}^{n}C_0 a^n + {}^{n}C_1 a^{n-1}b + \dots + {}^{n}C_n b^n
>
> $$

**Special cases** (obtained by substitution — see NOTES.md §7.2.2 for the derivation from the general theorem):


| Substitute         | Result                                                                            |
| -------------------- | ----------------------------------------------------------------------------------- |
| $b = -y$           | $\displaystyle (x-y)^n = \sum_{k=0}^{n}(-1)^k\, {}^{n}C_k\, x^{n-k} y^{k}$        |
| $a=1,\ b=x$        | $\displaystyle (1+x)^n = \sum_{k=0}^{n} {}^{n}C_k\, x^{k}$                        |
| $a=1,\ b=-x$       | $\displaystyle (1-x)^n = \sum_{k=0}^{n}(-1)^k\, {}^{n}C_k\, x^{k}$                |
| $(1+x)^n$ at $x=1$ | $\displaystyle 2^n = {}^{n}C_0 + {}^{n}C_1 + \dots + {}^{n}C_n$                   |
| $(1-x)^n$ at $x=1$ | $\displaystyle 0 = {}^{n}C_0 - {}^{n}C_1 + {}^{n}C_2 - \dots + (-1)^n\,{}^{n}C_n$ |

## Pascal's-Triangle Identities (used in the induction proof)

$$
{}^{n}C_0 = 1 = {}^{n}C_n, \qquad {}^{k}C_r + {}^{k}C_{r-1} = {}^{k+1}C_r, \qquad {}^{k}C_k = 1 = {}^{k+1}C_{k+1}

$$

## Structural Facts


| Fact            | Statement                                                 |
| ----------------- | ----------------------------------------------------------- |
| Number of terms | $(a+b)^n$ has exactly $n+1$ terms                         |
| Index behaviour | Power of$a$ falls $n \to 0$; power of $b$ rises $0 \to n$ |
| Index sum       | In every term, (power of$a$) + (power of $b$) $= n$       |

## Symbols Used


| Symbol                                       | Reads as                                   |
| ---------------------------------------------- | -------------------------------------------- |
| ${}^{n}C_r$ | "$n$ choose $r$"               |                                            |
| $T_{r+1}$ | general/$(r{+}1)^\text{th}$ term |                                            |
| $\boxed{\ }$                                 | final/named result, safe to quote directly |
