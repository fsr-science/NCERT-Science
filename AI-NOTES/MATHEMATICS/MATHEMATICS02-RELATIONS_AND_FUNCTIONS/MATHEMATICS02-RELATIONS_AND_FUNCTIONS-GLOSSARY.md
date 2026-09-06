
# Relations and Functions — Glossary & Quick Reference

## Cartesian Products


| Term                                | Meaning                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------- |
| **Ordered pair** \((p,q)\)          | \(p\) and \(q\) written in a fixed order; \((p,q)=(x,y) \iff p=x,\ q=y\) |
| **Cartesian product** \(P\times Q\) | \(\{(p,q): p\in P,\ q\in Q\}\)                                           |
| **Ordered triplet**                 | An element\((a,b,c)\) of \(A\times A\times A\)                           |

\[
\boxed{n(A\times B) = n(A)\cdot n(B)} \qquad
\boxed{A\times\phi=\phi} \qquad
\boxed{A\times B \neq B\times A \ \text{in general (but same size)}}
\]

## Relations


| Term                        | Meaning                                                             |
| ----------------------------- | --------------------------------------------------------------------- |
| **Relation** \(R: A \to B\) | Any subset of\(A\times B\)                                          |
| **Domain of \(R\)**         | Set of all first elements of pairs in\(R\)                          |
| **Range of \(R\)**          | Set of all second elements of pairs in\(R\)                         |
| **Codomain of \(R\)**       | The whole target set\(B\); \(\text{range}\subseteq\text{codomain}\) |

\[
\boxed{\#\{\text{relations } A\to B\} = 2^{\,n(A)\cdot n(B)}}
\]

## Functions


| Term                      | Meaning                                                                                                           |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| **Function** \(f:A\to B\) | A relation where every element of\(A\) has exactly one image in \(B\) (domain \(=A\), no repeated first elements) |
| **Image** of \(a\)        | The value\(f(a)=b\) where \((a,b)\in f\)                                                                          |
| **Preimage** of \(b\)     | Any\(a\) such that \(f(a)=b\)                                                                                     |
| **Real valued function**  | Range\(\subseteq \mathbb{R}\)                                                                                     |
| **Real function**         | Real valued**and** domain \(\subseteq \mathbb{R}\)                                                                |

\[
\boxed{\#\{\text{functions } A\to B\} = n(B)^{\,n(A)}} \quad\text{(generally far fewer than the relation count above)}
\]

## Standard Real Functions — Domain and Range at a Glance


| Function             | \(f(x)\)            | Domain               | Range                | Shape                                   |
| ---------------------- | --------------------- | ---------------------- | ---------------------- | ----------------------------------------- |
| Identity             | \(x\)               | \(\mathbb{R}\)       | \(\mathbb{R}\)       | line through origin, slope 1            |
| Constant             | \(c\)               | \(\mathbb{R}\)       | \(\{c\}\)            | horizontal line                         |
| Polynomial (\(x^2\)) | \(x^2\)             | \(\mathbb{R}\)       | \([0,\infty)\)       | upward parabola                         |
| Polynomial (\(x^3\)) | \(x^3\)             | \(\mathbb{R}\)       | \(\mathbb{R}\)       | odd, increasing                         |
| Rational (\(1/x\))   | \(1/x\)             | \(\mathbb{R}-\{0\}\) | \(\mathbb{R}-\{0\}\) | two asymptotic branches                 |
| Modulus              | \(\lvert x\rvert\)  | \(\mathbb{R}\)       | \([0,\infty)\)       | "V" shape                               |
| Signum               | \(\mathrm{sgn}(x)\) | \(\mathbb{R}\)       | \(\{-1,0,1\}\)       | three flat levels                       |
| Greatest integer     | \([x]\)             | \(\mathbb{R}\)       | \(\mathbb{Z}\)       | staircase, closed-left/open-right steps |

## Algebra of Real Functions

For \(f,g:X\to\mathbb{R}\), \(X\subseteq\mathbb{R}\), scalar \(k\in\mathbb{R}\):

\[
\boxed{(f+g)(x)=f(x)+g(x)}\qquad
\boxed{(f-g)(x)=f(x)-g(x)}\qquad
\boxed{(kf)(x)=k\,f(x)}
\]
\[
\boxed{(fg)(x)=f(x)\,g(x)}\qquad
\boxed{\left(\frac{f}{g}\right)(x)=\frac{f(x)}{g(x)},\quad g(x)\neq0}
\]

All defined **pointwise**; the quotient's domain always excludes every point where \(g(x)=0\), even if that point is otherwise fine for both \(f\) and \(g\).
