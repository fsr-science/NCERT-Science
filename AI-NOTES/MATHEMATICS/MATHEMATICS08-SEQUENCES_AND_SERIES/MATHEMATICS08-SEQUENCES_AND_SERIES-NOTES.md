
# Sequences and Series

> **Level:** CBSE Class 11 (Board / JEE foundation) — NCERT Chapter 8, 2025–26 rationalized reprint

## At a glance

- **Subject:** Mathematics — Sequences, Series, Geometric Progression, A.M.–G.M.
- **Prerequisites:** Basic algebra, exponent laws, solving linear/quadratic equations
- **Key idea:** A sequence is a function on the natural numbers; a G.P. is the special case where consecutive terms share a constant ratio, and this single constraint is enough to derive closed formulas for any term and for the sum of any number of terms.

> [!info] Source note
> This chapter's own introduction (§8.1) still mentions "arithmetic progression," "special series in forms of sum of natural numbers/squares/cubes" as chapter content — but the *rationalized* 2025–26 edition does not actually contain an Arithmetic Progression section or the special-series section in Chapter 8 (AP now lives in the Class 10 syllabus). These notes follow the chapter **as printed**: Sequences (§8.2) → Series (§8.3) → Geometric Progression (§8.4) → A.M.–G.M. relationship (§8.5). No content has been invented to "fill in" the topics the intro paragraph mentions but the chapter no longer covers.

---

## 8.2 Sequences ⭐

A **sequence** is an ordered list of numbers with an identified first, second, third, … member. Formally:

> [!note] ✏️ Definition
> A sequence can be regarded as a **function whose domain is the set of natural numbers** \(\mathbb{N}\), or a subset \(\{1,2,\ldots,k\}\). We write the *n*th term as \(a_n\) (or, using functional notation, \(a(n)\)); \(a_n\) is also called the **general term**.

- **Finite sequence** — contains a fixed number of terms (e.g., 10 generations of ancestors: \(a_1=2, a_2=4, \ldots, a_{10}=1024\)).
- **Infinite sequence** — never terminates (e.g., successive decimal approximations to \(10/3\): \(3, 3.3, 3.33, \ldots\)).

A sequence's rule can be given in three different ways, and it's worth being able to recognize all three:


| Way of specifying                                 | Example                                                                         |
| --------------------------------------------------- | --------------------------------------------------------------------------------- |
| Explicit formula in\(n\)                          | Even numbers:\(a_n = 2n\); Odd numbers: \(a_n = 2n-1\)                          |
| Recurrence relation (each term from earlier ones) | Fibonacci:\(a_1=a_2=1,\ a_n = a_{n-1}+a_{n-2}\) for \(n>2\)                     |
| Verbal / no closed formula exists                 | Primes\(2,3,5,7,\ldots\) — there is no algebraic formula for the \(n\)th prime |

> [!tip] 💡 Quick reference — Sequences
> \(a_n\) = value at position \(n\); domain of a sequence = \(\mathbb{N}\) (or a finite subset). Not every sequence has a formula — a recurrence relation or a verbal rule is equally valid.

### 8.2 Solved — First terms from a formula (NCERT Example 1) ⭐

**Given** (i) \(a_n = 2n+5\); (ii) \(a_n = \dfrac{n-3}{4}\).
**Find** The first three terms in each case.
**Work**
\[
\begin{aligned}
\text{(i)}\quad a_1 &= 2(1)+5 = 7, & a_2 &= 9, & a_3 &= 11\\
\text{(ii)}\quad a_1 &= \frac{1-3}{4} = -\frac12, & a_2 &= \frac{2-3}{4}=-\frac14, & a_3 &= \frac{3-3}{4}=0
\end{aligned}
\]
**Check** Each value was recomputed directly from the formula, not copied — e.g., \(a_2\) in (ii): \((2-3)/4 = -1/4\). ✓

### 8.2 Solved — Evaluating a formula at a large index (NCERT Example 2) ⭐

**Given** \(a_n = (n-1)(2-n)(3+n)\). **Find** \(a_{20}\).
**Work**
\[
a_{20} = (20-1)(2-20)(3+20) = 19 \times (-18) \times 23 = -7866
\]
**Check** Sign check: two negative-producing factors? Only \((2-20)=-18\) is negative, the other two factors are positive, so the product should be negative — matches \(-7866\). ✓

### 8.2 Solved — Sequence from a recurrence relation (NCERT Example 3) ⭐

**Given** \(a_1 = 1,\ a_n = a_{n-1}+2\) for \(n \ge 2\).
**Find** The first five terms and the corresponding series.
**Work**
\[
a_1=1,\quad a_2=3,\quad a_3=5,\quad a_4=7,\quad a_5=9
\]
**Series:** \(1+3+5+7+9+\cdots\)

> [!warning] ⚠️ A trap worth flagging early
> A **series** is the *indicated sum* \(a_1+a_2+a_3+\cdots\) — it is not the same thing as its *value*. "\(1+3+5+7\)" is a finite series with four terms; the **sum of the series** is the number 16. Students often use "series" to mean the total, which is imprecise.

---

## 8.3 Series ⭐

Given a sequence \(a_1, a_2, a_3, \ldots, a_n\), the expression
\[
a_1 + a_2 + a_3 + \cdots + a_n + \cdots
\]
is the **series associated with the sequence**. A series is finite or infinite exactly according to whether its underlying sequence is finite or infinite.

**Sigma notation** compresses this:
\[
a_1+a_2+\cdots+a_n = \boxed{\sum_{k=1}^{n} a_k}
\]

> [!tip] 💡 Quick reference — Series
> Series = the *expression* \(\sum a_k\); Sum of the series = the *number* it evaluates to. Keep these two words doing two different jobs.

---

## 8.4 Geometric Progression (G.P.) ⭐⭐

Consider \(2,4,8,16,\ldots\); \(\ \tfrac19,-\tfrac1{27},\tfrac1{81},-\tfrac1{243},\ldots\); \(\ 0.01,0.0001,0.000001,\ldots\). In each, every term (after the first) bears a **constant ratio** to the one before it — \(2\), \(-\tfrac13\), and \(0.01\) respectively.

> [!note] ✏️ Definition
> A sequence \(a_1,a_2,a_3,\ldots\) is a **geometric progression (G.P.)** if every term is non-zero and
> \[
> \boxed{\dfrac{a_{k+1}}{a_k} = r \ \text{(constant)}, \quad \text{for all } k \ge 1}
> \]
> Setting \(a_1=a\), the G.P. is \(a, ar, ar^2, ar^3,\ldots\), where \(a\) is the **first term** and \(r\) the **common ratio**. \(r\) can be positive, negative, or a fraction — a G.P. is not always "growing."

**Notation used throughout §8.4:** \(a\) = first term, \(r\) = common ratio, \(l\) = last term, \(n\) = number of terms, \(S_n\) = sum of the first \(n\) terms.

### 8.4.1 General term of a G.P. ⭐⭐

Building the pattern term by term:
\[
a_1 = ar^{1-1},\quad a_2 = ar^{2-1},\quad a_3=ar^{3-1},\quad \ldots
\]
suggests, and it is proved by induction, that
\[
\boxed{a_n = ar^{n-1}}
\]
A finite G.P. is written \(a, ar, ar^2,\ldots,ar^{n-1}\); an infinite one continues \(\ldots,ar^{n-1},\ldots\). The associated series \(a+ar+ar^2+\cdots+ar^{n-1}(+\cdots)\) is a **finite** (or **infinite**) **geometric series**.

### 8.4.2 Sum to *n* terms of a G.P. ⭐⭐

Let \(S_n = a+ar+ar^2+\cdots+ar^{n-1}\) — **(1)**.

**Case 1 — \(r=1\).** Every term equals \(a\), so
\[
\boxed{S_n = na}
\]

**Case 2 — \(r \ne 1\).** Multiply (1) by \(r\):
\[
rS_n = ar+ar^2+ar^3+\cdots+ar^n \quad \text{— (2)}
\]
Subtract (2) from (1) — every middle term cancels:
\[
(1-r)S_n = a - ar^n = a(1-r^n)
\]
\[
\boxed{S_n = \dfrac{a(r^n-1)}{r-1} = \dfrac{a(1-r^n)}{1-r}}, \qquad r \ne 1
\]

> [!warning] ⚠️ Why the case split is not optional
> The derivation above divides by \((1-r)\) — that step is undefined at \(r=1\), which is exactly why \(r=1\) needs its own (much simpler) formula rather than being treated as a limiting case of the main one.

### 8.4.2 Solved — General term and *n*th term (NCERT Example 4) ⭐

**Given** G.P. \(5, 25, 125,\ldots\) **Find** \(a_{10}\) and \(a_n\).
**Work** Here \(a=5,\ r=5\).
\[
a_{10} = 5(5)^{10-1} = 5(5)^9 = 5^{10}, \qquad a_n = 5(5)^{n-1} = 5^n
\]

### 8.4.2 Solved — Which term equals a given value (NCERT Example 5) ⭐⭐

**Given** G.P. \(2,8,32,\ldots\) **Find** which term is \(131072\).
**Approach** Set \(a_n=131072\) and solve for \(n\); here \(a=2, r=4\).
**Work**
\[
131072 = 2(4)^{n-1} \implies 65536 = 4^{n-1} \implies 4^8 = 4^{n-1} \implies n-1=8 \implies n=9
\]
**Check** \(2(4)^8 = 2 \times 65536 = 131072\). ✓ The 9th term is \(131072\).

### 8.4.2 Solved — Finding *a* and *r* from two given terms (NCERT Example 6) ⭐⭐

**Given** \(a_3=24,\ a_6=192\). **Find** \(a_{10}\).
**Approach** Two equations in \(a\) and \(r\); *dividing* them eliminates \(a\) first — this is the standard move whenever two terms of a G.P. are given.
**Work**
\[
a_3=ar^2=24 \ \text{(1)}, \qquad a_6=ar^5=192\ \text{(2)}
\]
\[
\frac{(2)}{(1)}: \ r^3 = \frac{192}{24}=8 \implies r=2 \implies a = \frac{24}{4}=6
\]
\[
a_{10}=ar^9 = 6(2)^9 = 6\times512 = 3072
\]
**Check** \(a_6 = 6(2)^5 = 6\times32=192\) ✓ matches the given data.

### 8.4.2 Solved — Sum of a geometric series (NCERT Example 7) ⭐⭐

**Given** \(1+\tfrac23+\tfrac49+\cdots\) **Find** \(S_n\) and \(S_5\).
**Work** \(a=1,\ r=\tfrac23\).
\[
S_n = \frac{1\left(1-\left(\tfrac23\right)^n\right)}{1-\tfrac23} = 3\left[1-\left(\tfrac23\right)^n\right]
\]
\[
S_5 = 3\left[1-\left(\tfrac23\right)^5\right] = 3\times\frac{211}{243} = \frac{211}{81}
\]
**Check** \(\left(\tfrac23\right)^5 = \tfrac{32}{243}\), so \(1-\tfrac{32}{243}=\tfrac{211}{243}\); \(3\times\tfrac{211}{243}=\tfrac{633}{243}=\tfrac{211}{81}\) after dividing by 3. ✓

### 8.4.2 Solved — Working backward from a given sum (NCERT Example 8) ⭐⭐⭐

**Given** G.P. \(3,\tfrac32,\tfrac34,\ldots\), \(S_n = \tfrac{3069}{512}\). **Find** \(n\).
**Work** \(a=3,\ r=\tfrac12\).
\[
\frac{3069}{512} = \frac{3\left(1-\left(\tfrac12\right)^n\right)}{1-\tfrac12} = 6\left(1-\left(\tfrac12\right)^n\right)
\]
\[
\left(\frac12\right)^n = 1 - \frac{3069}{3072} = \frac{3}{3072} = \frac{1}{1024} = \frac{1}{2^{10}} \implies n = 10
\]

### 8.4.2 Solved — Sum and product of three G.P. terms (NCERT Example 9) ⭐⭐⭐

**Given** Sum of first three terms of a G.P. \(=\tfrac{13}{12}\); their product \(=-1\).
**Find** The common ratio and the terms.

**Approach** For *three consecutive* G.P. terms, write them symmetrically as \(\tfrac{a}{r},\, a,\, ar\) rather than \(a, ar, ar^2\) — the product then collapses immediately to \(a^3\), independent of \(r\). This symmetric trick is worth remembering for any "3 (or 5) terms of a G.P., product given" problem.

**Work**
\[
\frac{a}{r}+ar+a = \frac{13}{12}\ \text{(1)}, \qquad \left(\frac{a}{r}\right)(a)(ar) = -1 \implies a^3=-1 \implies a=-1 \ \text{(real root only) (2)}
\]
Substituting \(a=-1\) into (1):
\[
-\frac1r - r - 1 = \frac{13}{12} \implies 12r^2+25r+12=0
\]
\[
r = \frac{-25\pm\sqrt{625-576}}{24} = \frac{-25\pm7}{24} \implies r=-\frac34 \ \text{or}\ -\frac43
\]
**Terms:** for \(r=-\tfrac34\): \(\tfrac43,\,-1,\,\tfrac34\); for \(r=-\tfrac43\): \(\tfrac34,\,-1,\,\tfrac43\) (the same three numbers, listed in the opposite order — expected, since reversing a G.P.'s order inverts its common ratio).

> [!warning] ⚠️ Discarding roots correctly
> \(a^3=-1\) technically has one real root (\(a=-1\)) and two complex roots. The problem is implicitly working over the reals, so the complex roots are correctly discarded — but this discarding must be *stated*, not silently skipped.

### 8.4.2 Solved — A series that is not itself a G.P. (NCERT Example 10) ⭐⭐⭐

**Given** \(S_n = 7+77+777+7777+\cdots\) to \(n\) terms.
**Approach** The terms \(7, 77, 777,\ldots\) do **not** have a constant ratio, so the G.P. sum formula cannot be applied directly. But each term is \(7\) times a repunit-like number (\(1, 11, 111,\ldots\)), and each of *those* can be rewritten as \(10^k-1\) over 9 — which **does** turn into a genuine G.P. sum.
**Work**
\[
S_n = 7[1+11+111+\cdots] = \frac79\big[9+99+999+\cdots\big] = \frac79\Big[(10-1)+(10^2-1)+\cdots+(10^n-1)\Big]
\]
\[
= \frac79\Big[(10+10^2+\cdots+10^n) - n\Big] = \boxed{\frac79\left[\frac{10(10^n-1)}{9} - n\right]}
\]
**Check (n=2):** Formula gives \(\tfrac79\left[\tfrac{10(99)}{9}-2\right] = \tfrac79[110-2]=\tfrac79(108)=84\). Direct sum: \(7+77=84\). ✓

### 8.4.2 Solved — Ancestors over 10 generations (NCERT Example 11) ⭐

**Given** 2 parents, 4 grandparents, 8 great-grandparents, … (10 generations). **Find** total ancestors.
**Work** \(a=2, r=2, n=10\).
\[
S_{10} = \frac{2(2^{10}-1)}{2-1} = 2(1024-1) = 2046
\]

> [!example] Visualizing growth vs. decay in a G.P.

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=0.7]
  \draw[->, line width=1pt] (-0.3,0) -- (6,0) node[right, font=\small] {$n$};
  \draw[->, line width=1pt] (0,-0.3) -- (0,18) node[above, font=\small] {$a_n$};
  \draw (1,0.15) -- (1,-0.15); \node[below, font=\small] at (1,-0.3) {$1$};
  \draw (2,0.15) -- (2,-0.15); \node[below, font=\small] at (2,-0.3) {$2$};
  \draw (3,0.15) -- (3,-0.15); \node[below, font=\small] at (3,-0.3) {$3$};
  \draw (4,0.15) -- (4,-0.15); \node[below, font=\small] at (4,-0.3) {$4$};
  \draw (5,0.15) -- (5,-0.15); \node[below, font=\small] at (5,-0.3) {$5$};
  \draw[blue!70!black, dashed, line width=1pt]
       plot coordinates {(1,1) (2,2) (3,4) (4,8) (5,16)};
  \fill[blue!70!black] (1,1) circle (2.4pt);
  \fill[blue!70!black] (2,2) circle (2.4pt);
  \fill[blue!70!black] (3,4) circle (2.4pt);
  \fill[blue!70!black] (4,8) circle (2.4pt);
  \fill[blue!70!black] (5,16) circle (2.4pt);
  \node[right, font=\small, text=blue!70!black] at (5.15,16) {$r=2$ (growth)};
  \draw[orange!80!black, dashed, line width=1pt]
       plot coordinates {(1,16) (2,8) (3,4) (4,2) (5,1)};
  \fill[orange!80!black] (1,16) circle (2.4pt);
  \fill[orange!80!black] (2,8) circle (2.4pt);
  \fill[orange!80!black] (3,4) circle (2.4pt);
  \fill[orange!80!black] (4,2) circle (2.4pt);
  \fill[orange!80!black] (5,1) circle (2.4pt);
  \node[right, font=\small, text=orange!80!black] at (5.15,1) {$r=\tfrac12$ (decay)};
  \node[below, font=\itshape\small, text=gray] at (2.5,-1.3) {dots are the actual terms $a_n$; dashed segments only guide the eye -- a sequence's domain is $\mathbb{N}$, not $\mathbb{R}$};
\end{tikzpicture}
```

The two curves cross exactly where \(1\cdot2^{n-1} = 16\cdot(\tfrac12)^{n-1}\), i.e. at \(n=3\) (both equal 4) — a useful sanity check when comparing a growing and a decaying G.P.

### 8.4.3 Geometric Mean (G.M.) ⭐⭐⭐

> [!note] ✏️ Definition
> The **geometric mean** of two positive numbers \(a,b\) is \(G=\sqrt{ab}\) — it is the number that makes \(a, G, b\) a G.P. (G.M. of 2 and 8 is 4, and \(2,4,8\) is indeed a G.P.)

**General case — inserting \(n\) geometric means.** Given positive \(a,b\), insert \(G_1,\ldots,G_n\) so that \(a,G_1,G_2,\ldots,G_n,b\) is a G.P. of \(n+2\) terms, with \(b\) as the \((n+2)\)th term:
\[
b = ar^{n+1} \implies \boxed{r = \left(\frac{b}{a}\right)^{\frac{1}{n+1}}}
\]
\[
\boxed{G_k = ar^k = a\left(\frac{b}{a}\right)^{\frac{k}{n+1}}}, \qquad k=1,2,\ldots,n
\]
The single-G.M. definition \(G=\sqrt{ab}\) is the special case \(n=1\): \(G_1 = a\left(\tfrac{b}{a}\right)^{1/2} = \sqrt{a\cdot ab/a}=\sqrt{ab}\). ✓

> [!warning] ⚠️ The exponent everyone gets wrong
> With \(n\) numbers inserted, the total sequence has \(n+2\) terms, so the exponent in \(r\) is \(\tfrac1{n+1}\), **not** \(\tfrac1n\). It's easy to miscount the "+2" and use the wrong denominator.

### 8.4.3 Solved — Inserting three geometric means (NCERT Example 12) ⭐⭐

**Given** Insert 3 numbers between 1 and 256 to make a G.P.
**Approach** Here \(a=1,\ b=256,\ n=3\), so this is the general formula above with \(n+1=4\).
**Work**
\[
256 = r^4 \implies r = \pm 4 \ \text{(real roots only)}
\]
For \(r=4\): \(G_1=4,\ G_2=16,\ G_3=64\). For \(r=-4\): \(G_1=-4,\ G_2=16,\ G_3=-64\).
**Check** \(1,4,16,64,256\): ratios are all \(4\). ✓ \(1,-4,16,-64,256\): ratios are all \(-4\). ✓

---

## 8.5 Relationship Between A.M. and G.M. ⭐⭐

For positive reals \(a,b\): \(A = \dfrac{a+b}{2}\) and \(G=\sqrt{ab}\).
\[
A-G = \frac{a+b}{2}-\sqrt{ab} = \frac{a+b-2\sqrt{ab}}{2} = \frac{\left(\sqrt a-\sqrt b\right)^2}{2} \ge 0
\]
\[
\boxed{A \ge G, \quad \text{with equality iff } a=b}
\]
This is already the *general* proof — it needs no special case, since a square is non-negative for **any** real \(a,b>0\).

> [!example] A geometric picture of the same inequality

```tikz
\begin{tikzpicture}[thick, scale=0.6]
  \draw[gray!50] (0,0) circle (5);
  \draw[line width=1.1pt] (-5,0) -- (5,0);
  \fill (-5,0) circle (2.2pt);
  \fill (5,0) circle (2.2pt);
  \fill (0,0) circle (2.2pt);
  \node[below, font=\small] at (-5,-0.3) {$X$};
  \node[below, font=\small] at (5,-0.3) {$Y$};
  \node[below, font=\small] at (0,-0.3) {$O$};
  \fill[red!70!black] (-3,0) circle (2.2pt);
  \node[below, font=\small, text=red!70!black] at (-3,-0.3) {$C$};
  \fill[blue!70!black] (-3,4) circle (2.2pt);
  \node[above, font=\small, text=blue!70!black] at (-3,4.2) {$P$};
  \draw[red!70!black, line width=1.3pt] (-3,0) -- (-3,4);
  \draw[green!45!black, dashed, line width=1.1pt] (0,0) -- (-3,4);
  \node[below, font=\small] at (-4,-0.3) {$a=2$};
  \node[below, font=\small] at (1,-0.3) {$b=8$};
  \node[above, font=\small, text=green!45!black] at (-1.9,2.5) {$OP=R=\text{AM}=5$};
  \node[right, font=\small, text=red!70!black] at (-2.85,2) {$CP=\sqrt{ab}=\text{GM}=4$};
  \node[below, font=\itshape\small, text=gray] at (0,-1.6) {right triangle $OCP$, right angle at $C$: hypotenuse $OP=\text{AM}$ can never be shorter than leg $CP=\text{GM}$; equality only when $C=O$, i.e.\ $a=b$};
\end{tikzpicture}
```

\(XY\) is a diameter split into segments \(a=2\) and \(b=8\) at \(C\); \(OP\) is a radius, so \(OP=\tfrac{a+b}2=\text{AM}\), while \(CP=\sqrt{R^2-OC^2}=\sqrt{ab}=\text{GM}\) (Pythagoras on right triangle \(OCP\)). Since a hypotenuse is never shorter than a leg, \(\text{AM}\ge \text{GM}\) — the same conclusion as the algebraic proof, seen geometrically.

### 8.5 Solved — Recovering *a, b* from A.M. and G.M. (NCERT Example 13) ⭐⭐

**Given** A.M. \(=10\), G.M. \(=8\) of positive numbers \(a,b\). **Find** \(a,b\).
**Work**
\[
a+b=20,\qquad ab=64
\]
\[
(a-b)^2=(a+b)^2-4ab = 400-256=144 \implies a-b=\pm12
\]
Solving with \(a+b=20\): \(a=16,b=4\) or \(a=4,b=16\).
**Check** \(\tfrac{16+4}2=10\) ✓, \(\sqrt{16\times4}=\sqrt{64}=8\) ✓.

---

## Advanced application — proving four numbers are in G.P. (NCERT Miscellaneous Example 14) ⭐⭐⭐

**Given** Real numbers \(a,b,c,d,p\) satisfy
\[
(a^2+b^2+c^2)p^2 - 2(ab+bc+cd)p + (b^2+c^2+d^2) \le 0
\]
**Find** Show \(a,b,c,d\) are in G.P.

**Approach** Regroup the left side as a sum of three perfect squares — a completing-the-square move that works because the cross-terms match up exactly.

**Work** The left side equals
\[
(a^2p^2-2abp+b^2)+(b^2p^2-2bcp+c^2)+(c^2p^2-2cdp+d^2) = (ap-b)^2+(bp-c)^2+(cp-d)^2
\]
A sum of squares of real numbers is always \(\ge 0\). Combined with the given \(\le 0\), the sum must equal exactly \(0\), forcing **each** square to vanish:
\[
ap=b,\quad bp=c,\quad cp=d \implies \frac{b}{a}=\frac{c}{b}=\frac{d}{c}=p
\]
Equal consecutive ratios is exactly the definition of a G.P. \(\blacksquare\)

> [!tip] 💡 The technique, generalized
> Whenever an inequality of the shape "(sum of squares) \(\le 0\)" appears, the real content is "(sum of squares) \(=0\)," and every individual square must vanish. This is a reusable proof pattern well beyond this chapter.

---

## Where to practice


| Exercise               | Covers                                                                                                          |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------- |
| Exercise 8.1           | Generating terms from explicit formulas and recurrence relations (§8.2)                                        |
| Exercise 8.2           | G.P. general term, sums, geometric means, A.M.–G.M. relationship (§8.4–8.5)                                  |
| Miscellaneous Exercise | Mixed applications — compound interest, chain letters, depreciation, and proofs combining G.P. with A.M.–G.M. |

---

## Points to Ponder

> [!warning] ⚠️ Series vs. sum of a series
> The *series* is the written expression \(a_1+a_2+\cdots\); the *sum* is the number it equals. Don't use "series" when you mean "total."

> [!warning] ⚠️ The \(r=1\) case cannot be skipped
> The main G.P. sum formula is derived by dividing by \((1-r)\), which is invalid at \(r=1\). Any problem that doesn't explicitly rule out \(r=1\) needs that case checked separately (\(S_n=na\)).

> [!warning] ⚠️ Counting the inserted terms correctly
> Inserting \(n\) geometric means between \(a\) and \(b\) makes a sequence of \(n+2\) terms (not \(n\), not \(n+1\)), so the exponent in \(r=(b/a)^{1/(n+1)}\) has \(n+1\) in the denominator.

> [!warning] ⚠️ Real roots only, and say so
> When an equation like \(a^3=-1\) or \(r^4=256\) has more roots than the real ones (complex cube roots, or \(\pm\) for even powers), state explicitly that only real roots are being kept — don't drop the other roots silently.

> [!warning] ⚠️ G.M. and A.M.–G.M. need \(a,b>0\)
> \(G=\sqrt{ab}\) is only real when \(a\) and \(b\) have the same sign (and by convention, positive). The inequality \(A\ge G\) is stated for positive reals — it isn't meaningful to compare A.M. and G.M. of negative numbers directly.

> [!warning] ⚠️ A sequence is discrete
> A sequence's domain is \(\mathbb N\), not an interval of \(\mathbb R\) — the smooth curve you might sketch through the points of a G.P. is a visual aid only; the sequence itself is defined *only* at integer positions.

> [!warning] ⚠️ Symmetric placement for odd counts of G.P. terms
> When a problem gives the sum/product of an *odd* number of consecutive G.P. terms (3, 5, …), write them symmetrically around the middle term (\(a/r, a, ar\) for three terms) — the product then reduces immediately to a power of the middle term alone, sidestepping a messier system of equations.
