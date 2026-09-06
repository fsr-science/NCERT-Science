
# Principle of Mathematical Induction

> NCERT Exemplar — Class 11, Chapter 4 (Board / JEE Foundation Level)

> **Key idea:** If a statement is true for a starting value, and its truth for any one value always forces its truth for the next value, then it is true for *every* value from the start onward — like a row of dominoes: knock over the first, and if each domino is guaranteed to knock over the next, the whole row falls.

## At a Glance

- **Subject:** Algebra — Proof Technique
- **Level:** Class 11 Board / JEE Foundation
- **Prerequisites:** Natural numbers, summation (Σ) and product notation, factorial notation, basic trigonometric sum-to-product identities
- **Companion files:** the boxed formula sheet lives in **GLOSSARY**, and the prerequisite → theorem → application map plus proof-strategy flowcharts live in **REVISION-MINDMAP**.

---

## 4.1 Overview ⭐

Mathematical induction is a technique for proving statements \( P(n) \) that are asserted for *every* natural number \( n \) (or every natural number from some fixed starting point onward). It does not discover a formula — it only *verifies* one that has already been proposed (by pattern-spotting, a recursive definition, or another derivation).

Two ingredients make induction work:

1. A **base case** — the statement is confirmed true for the smallest value it claims to hold for.
2. An **inductive step** — a purely logical argument, valid for an *arbitrary but fixed* \( k \), showing that truth at \( k \) forces truth at \( k+1 \).

Neither ingredient alone is enough. A true base case with no valid inductive step proves nothing beyond that one value; a valid inductive step with no base case proves nothing at all, since there is no starting domino to knock over.

## 4.1.1 The Principle of Mathematical Induction ⭐⭐⭐

**Object introduced:** \( P(n) \) — a statement (a proposition, not a number) whose domain is the natural numbers \( \mathbb{N} = \{1, 2, 3, \ldots\} \) and whose value is always *true* or *false* for each \( n \).

> [!info] Theorem — Principle of Mathematical Induction (PMI)
> Let \( P(n) \) be a statement involving the natural number \( n \) such that:
>
> 1. **Base step:** \( P(1) \) is true (or, more generally, \( P(n_0) \) is true for some fixed natural number \( n_0 \)); and
> 2. **Inductive step:** for a particular but arbitrary natural number \( k \geq n_0 \), \( P(k) \) true \( \Rightarrow \) \( P(k+1) \) true.
>
> Then \( P(n) \) is true for all natural numbers \( n \geq n_0 \).

This is already the **general form** of the theorem: the base value need not be \( n=1 \). Whenever a statement is only meaningful or only true from some later point on, the base case shifts — Examples 2 and 3 below start at \( n_0 = 2 \), and Example 5 starts at \( n_0 = 3 \). The mechanics of the inductive step never change; only the starting domino moves.

> **Watch out:** "Assume \( P(k) \) is true" is **not** claiming the statement is true for all \( k \) — that would be circular. It is a conditional, local assumption used only to build the implication \( P(k) \Rightarrow P(k+1) \). The *actual* truth for every \( n \geq n_0 \) is established only after both steps are combined.

---

## 4.2 Solved Examples

### Short Answer Type

#### 4.2.1 Solved — Sum of the First *n* Odd Numbers (NCERT Example 1) ⭐⭐

> [!example] Example
> **Given:** \( P(n) : 1 + 3 + 5 + \cdots + (2n-1) = n^2 \), for \( n \in \mathbb{N} \).
> **Approach:** Standard equality induction — add the next odd term, \( (2k+1) \), to both sides of the inductive hypothesis.

**Work**

Base step: \( P(1): 1 = 1^2 \) — true.

Inductive hypothesis: \( P(k): 1+3+5+\cdots+(2k-1) = k^2 \) for some \( k \in \mathbb{N} \).

Inductive step:
\[
\begin{aligned}
1+3+5+\cdots+(2k-1)+(2k+1) &= k^2 + (2k+1) &&\text{(using the IH)}\\
&= k^2 + 2k + 1 = (k+1)^2
\end{aligned}
\]

So \( P(k+1) \) is true whenever \( P(k) \) is true.

\[
\boxed{1+3+5+\cdots+(2n-1) = n^2 \quad \text{for all } n \in \mathbb{N}}
\]

**Check:** \( n=4 \): \( 1+3+5+7 = 16 = 4^2 \). ✓

---

#### 4.2.2 Solved — Sum \( \sum t(t+1) \) (NCERT Example 2) ⭐⭐

> [!example] Example
> **Given:** \( P(n) : \displaystyle\sum_{t=1}^{n-1} t(t+1) = \dfrac{n(n-1)(n+1)}{3} \), for natural numbers \( n \geq 2 \).
> **Approach:** The sum only has terms when \( n-1 \geq 1 \), i.e. \( n \geq 2 \) — so the base case must be \( n_0 = 2 \), not \( n_0 = 1 \). Otherwise this is standard equality induction.

**Work**

Base step ( \( n=2 \) ): \( \sum_{t=1}^{1} t(t+1) = 1\cdot2 = 2 = \dfrac{2\cdot1\cdot3}{3} \) — true.

Inductive hypothesis: \( P(k): \displaystyle\sum_{t=1}^{k-1} t(t+1) = \dfrac{k(k-1)(k+1)}{3} \).

Inductive step: add the term \( t=k \), i.e. \( k(k+1) \):
\[
\begin{aligned}
\sum_{t=1}^{k} t(t+1) &= \frac{k(k-1)(k+1)}{3} + k(k+1) \\
&= k(k+1)\left[\frac{k-1+3}{3}\right] = \frac{k(k+1)(k+2)}{3} \\
&= \frac{(k+1)\big((k+1)-1\big)\big((k+1)+1\big)}{3}
\end{aligned}
\]

\[
\boxed{\sum_{t=1}^{n-1} t(t+1) = \frac{n(n-1)(n+1)}{3} \quad \text{for all natural numbers } n \geq 2}
\]

**Check:** \( n=3 \): \( 1\cdot2 + 2\cdot3 = 2+6=8 \); RHS \( = \dfrac{3\cdot2\cdot4}{3}=8 \). ✓

---

#### 4.2.3 Solved — Telescoping Product (NCERT Example 3) ⭐⭐

> [!example] Example
> **Given:** \( P(n) : \left(1-\dfrac{1}{2^2}\right)\left(1-\dfrac{1}{3^2}\right)\cdots\left(1-\dfrac{1}{n^2}\right) = \dfrac{n+1}{2n} \), for natural numbers \( n \geq 2 \).
> **Approach:** Multiply the inductive hypothesis by the next factor, \( \left(1-\dfrac{1}{(k+1)^2}\right) \), and simplify using difference of squares.

**Work**

Base step ( \( n=2 \) ): \( 1-\dfrac14 = \dfrac34 = \dfrac{2+1}{2\cdot2} \) — true.

Inductive hypothesis: \( P(k): \left(1-\frac{1}{2^2}\right)\cdots\left(1-\frac{1}{k^2}\right) = \dfrac{k+1}{2k} \).

Inductive step:
\[
\begin{aligned}
\left(1-\frac{1}{2^2}\right)\cdots\left(1-\frac{1}{k^2}\right)\left(1-\frac{1}{(k+1)^2}\right)
&= \frac{k+1}{2k}\left(1-\frac{1}{(k+1)^2}\right) \\
&= \frac{k^2+2k}{2k(k+1)} = \frac{k(k+2)}{2k(k+1)} = \frac{(k+1)+1}{2(k+1)}
\end{aligned}
\]

\[
\boxed{\prod_{r=2}^{n}\left(1-\frac{1}{r^2}\right) = \frac{n+1}{2n} \quad \text{for all natural numbers } n \geq 2}
\]

**Check:** \( n=3 \): \( \left(1-\frac14\right)\left(1-\frac19\right) = \frac34\cdot\frac89 = \frac{2}{3} \); RHS \( = \frac{4}{6}=\frac23 \). ✓

---

#### 4.2.4 Solved — Divisibility: \(2^ {2n}-1\) by 3 (NCERT Example 4) ⭐⭐

> [!example] Example
> **Given:** \( P(n) : 2^{2n}-1 \) is divisible by 3, for every natural number \( n \).
> **Approach:** The **divisibility technique** — write the IH as \( 2^{2k}-1 = 3q \) for some \( q \in \mathbb{N} \), then express \( 2^{2(k+1)}-1 \) as *(a multiple of 3) + (the IH expression)* so the assumption can be substituted directly.

**Work**

Base step: \( 2^2-1 = 3 = 3\cdot1 \) — divisible by 3.

Inductive hypothesis: \( P(k): 2^{2k}-1 = 3q \), \( q \in \mathbb{N} \).

Inductive step:
\[
\begin{aligned}
2^{2(k+1)}-1 &= 2^{2k}\cdot 2^2 - 1 = 4\cdot 2^{2k}-1 \\
&= 3\cdot 2^{2k} + \left(2^{2k}-1\right) = 3\cdot2^{2k}+3q = 3\left(2^{2k}+q\right)
\end{aligned}
\]

which is a multiple of 3, since \( 2^{2k}+q \in \mathbb{N} \).

\[
\boxed{2^{2n}-1 \text{ is divisible by } 3 \text{ for every natural number } n}
\]

**Check:** \( n=3 \): \( 2^6-1=63=3\times21 \). ✓

---

#### 4.2.5 Solved — Inequality \( 2n+1 < 2^n \) (NCERT Example 5) ⭐⭐

> [!example] Example
> **Given:** \( P(n) : 2n+1 < 2^n \), for natural numbers \( n \geq 3 \).
> **Approach:** This statement is *false* for \( n=1,2 \) ( \( 3<2 \) and \( 5<4 \) both fail), so the base case must start at \( n_0=3 \). For the inductive step, chain the IH inequality through an intermediate bound rather than trying to solve for \( k \) directly.

**Work**

Base step ( \( n=3 \) ): \( 2\cdot3+1 = 7 < 8 = 2^3 \) — true.

Inductive hypothesis: \( P(k): 2k+1 < 2^k \).

Inductive step:
\[
\begin{aligned}
2(k+1)+1 &= 2k+3 = (2k+1)+2 \\
&< 2^k + 2 &&\text{(by the IH)}\\
&< 2^k + 2^k = 2\cdot2^k = 2^{k+1} &&\text{(since } 2 < 2^k \text{ for } k \geq 3\text{)}
\end{aligned}
\]

\[
\boxed{2n+1 < 2^n \quad \text{for all natural numbers } n \geq 3}
\]

**Check:** \( n=4 \): \( 9 < 16 \). ✓

---

### Long Answer Type

#### 4.2.6 Solved — Recursively Defined Sequence (NCERT Example 6) ⭐⭐

> [!example] Example
> **Given:** \( a_1 = 2 \), \( a_n = 5a_{n-1} \) for \( n \geq 2 \). **Range:** all terms are positive integers.
> **Find:** (i) the first four terms; (ii) prove \( a_n = 2\cdot5^{\,n-1} \) for all \( n \in \mathbb{N} \).

**Work**

(i) \( a_1=2,\ a_2=5(2)=10,\ a_3=5(10)=50,\ a_4=5(50)=250 \).

(ii) Base step: \( P(1): a_1 = 2\cdot5^0 = 2 \) — true.

Inductive hypothesis: \( P(k): a_k = 2\cdot5^{\,k-1} \).

Inductive step: using the recursive definition itself,
\[
a_{k+1} = 5a_k = 5\left(2\cdot5^{\,k-1}\right) = 2\cdot5^{\,k} = 2\cdot5^{\,(k+1)-1}
\]

\[
\boxed{a_n = 2\cdot5^{\,n-1} \quad \text{for all natural numbers } n}
\]

**Check:** matches the listed terms — \( a_4 = 2\cdot5^3 = 250 \). ✓

---

#### 4.2.7 Solved — Generalized Distributive Law (NCERT Example 7) ⭐⭐

> [!example] Example
> **Given:** the two-term distributive law \( c(a_1+a_2) = ca_1+ca_2 \) for real \( c,a_1,a_2 \).
> **Find:** prove \( c(a_1+a_2+\cdots+a_n) = ca_1+ca_2+\cdots+ca_n \) for all \( n \geq 2 \).
> **Approach:** The two-term law *is itself* the base case; the inductive step only needs to group the sum as "(first \(k\) terms) + (one more term)" and reapply the two-term law once.

**Work**

Base step ( \( n=2 \) ): true by the given law.

Inductive hypothesis: \( P(k): c(a_1+\cdots+a_k) = ca_1+\cdots+ca_k \).

Inductive step:
\[
\begin{aligned}
c(a_1+\cdots+a_k+a_{k+1}) &= c\big((a_1+\cdots+a_k)+a_{k+1}\big) \\
&= c(a_1+\cdots+a_k) + ca_{k+1} &&\text{(two-term law)}\\
&= ca_1+\cdots+ca_k+ca_{k+1} &&\text{(by the IH)}
\end{aligned}
\]

\[
\boxed{c(a_1+a_2+\cdots+a_n) = ca_1+ca_2+\cdots+ca_n \quad \text{for all } n \geq 2}
\]

---

#### 4.2.8 Solved — Sum of Sines in Arithmetic Progression (NCERT Example 8) ⭐⭐⭐

> [!example] Example
> **Given:** \( P(n) : \sin\alpha+\sin(\alpha+\beta)+\cdots+\sin\big(\alpha+(n-1)\beta\big) = \dfrac{\sin\left(\alpha+\frac{n-1}{2}\beta\right)\sin\left(\frac{n\beta}{2}\right)}{\sin\left(\frac{\beta}{2}\right)} \), for all \( n \in \mathbb{N} \) (requires \( \sin(\beta/2)\neq0 \)).
> **Approach:** Add \( \sin(\alpha+k\beta) \) to the IH, convert the sum of two sine terms and the resulting product into sums using the identities \( \sin A\sin B = \tfrac12[\cos(A-B)-\cos(A+B)] \), then reassemble into a single sine product.

**Work**

Base step ( \( n=1 \) ): \( \sin\alpha = \dfrac{\sin(\alpha+0)\sin(\beta/2)}{\sin(\beta/2)} = \sin\alpha \) — true.

Inductive hypothesis: \( P(k) \) as stated with \( n=k \).

Inductive step: add \( \sin(\alpha+k\beta) \):
\[
\begin{aligned}
&\frac{\sin\left(\alpha+\frac{k-1}{2}\beta\right)\sin\frac{k\beta}{2}}{\sin\frac{\beta}{2}} + \sin(\alpha+k\beta) \\
&= \frac{\sin\left(\alpha+\frac{k-1}{2}\beta\right)\sin\frac{k\beta}{2} + \sin(\alpha+k\beta)\sin\frac{\beta}{2}}{\sin\frac{\beta}{2}}\\
&= \frac{\cos\left(\alpha-\frac{\beta}{2}\right)-\cos\left(\alpha+k\beta-\frac{\beta}{2}\right)+\cos\left(\alpha+k\beta-\frac{\beta}{2}\right)-\cos\left(\alpha+k\beta+\frac{\beta}{2}\right)}{2\sin\frac{\beta}{2}}\\
&= \frac{\cos\left(\alpha-\frac{\beta}{2}\right)-\cos\left(\alpha+k\beta+\frac{\beta}{2}\right)}{2\sin\frac{\beta}{2}}
= \frac{\sin\left(\alpha+\frac{k\beta}{2}\right)\sin\left(\frac{(k+1)\beta}{2}\right)}{\sin\frac{\beta}{2}}
\end{aligned}
\]

which is exactly \( P(k+1) \).

\[
\boxed{\sum_{r=0}^{n-1}\sin(\alpha+r\beta) = \frac{\sin\left(\alpha+\frac{n-1}{2}\beta\right)\sin\left(\frac{n\beta}{2}\right)}{\sin\left(\frac{\beta}{2}\right)}\quad \text{for all } n \in \mathbb{N}}
\]

> **Watch out:** the middle two cosine terms cancel only because both expansions share the argument \( \alpha+k\beta-\frac{\beta}{2} \) — always double-check that a "telescoping" cancellation in a trig proof is between genuinely identical arguments, not merely similar-looking ones.

---

#### 4.2.9 Solved — Factorial Sum Identity (NCERT Example 9) ⭐⭐

> [!example] Example
> **Given:** \( P(n) : 1\times1!+2\times2!+3\times3!+\cdots+n\times n! = (n+1)!-1 \), for all natural numbers \( n \).
> **Approach:** Use \( (k+1)!=(k+1)\times k! \) to factor the last two terms together after adding \( (k+1)\times(k+1)! \) to the IH.

**Work**

Base step: \( 1\times1! = 1 = 2!-1 \) — true.

Inductive hypothesis: \( P(k): 1\times1!+\cdots+k\times k! = (k+1)!-1 \).

Inductive step:
\[
\begin{aligned}
1\times1!+\cdots+k\times k! + (k+1)\times(k+1)! &= (k+1)!-1+(k+1)!\times(k+1)\\
&= (k+1)!\big[1+(k+1)\big]-1\\
&= (k+2)(k+1)!-1 = (k+2)!-1
\end{aligned}
\]

\[
\boxed{\sum_{r=1}^{n} r\times r! = (n+1)!-1 \quad \text{for all natural numbers } n}
\]

**Check:** \( n=3 \): \( 1+4+18=23 \); RHS \( = 4!-1=23 \). ✓

---

#### 4.2.10 Solved — Piecewise Sum With Parity-Dependent Terms (NCERT Example 10) ⭐⭐⭐

> [!example] Example
> **Given:** the series \( 1^2+2\times2^2+3^2+2\times4^2+5^2+2\times6^2+\cdots \), whose general term is \( T_n = n^2 \) if \( n \) is odd and \( T_n=2n^2 \) if \( n \) is even, and whose claimed sum is
> \[
> S_n = \begin{cases} \dfrac{n(n+1)^2}{2}, & n \text{ even} \\[4pt] \dfrac{n^2(n+1)}{2}, & n \text{ odd} \end{cases}
> \]
> **Approach:** Because the term rule itself depends on the parity of \( n \), a single inductive step cannot cover both "next terms" at once — the proof must **branch into two cases** based on the parity of \( k \), since \( k \) odd forces \( k+1 \) even and vice versa.

**Work**

Base step: \( P(1): S_1=1^2=1=\dfrac{1^2(1+1)}{2} \) — true (odd-case formula).

Inductive hypothesis: \( P(k) \) true for some natural number \( k \) (in whichever case, odd or even, applies to \( k \)).

**Case 1 — \( k \) is odd (so \( k+1 \) is even):**
\[
\begin{aligned}
S_{k+1} &= \underbrace{1^2+2\times2^2+\cdots+k^2}_{=\ k^2(k+1)/2\ \text{by IH, } k\text{ odd}} + 2\times(k+1)^2\\
&= \frac{k^2(k+1)}{2}+2(k+1)^2 = \frac{k+1}{2}\left[k^2+4(k+1)\right] = \frac{k+1}{2}(k+2)^2\\
&= (k+1)\cdot\frac{\big[(k+1)+1\big]^2}{2}
\end{aligned}
\]
which matches the **even**-case formula at \( n=k+1 \). ✓

**Case 2 — \( k \) is even (so \( k+1 \) is odd):**
\[
\begin{aligned}
S_{k+1} &= \underbrace{1^2+2\times2^2+\cdots+2k^2}_{=\ k(k+1)^2/2\ \text{by IH, } k\text{ even}} + (k+1)^2 \\
&= \frac{k(k+1)^2}{2}+(k+1)^2 = \frac{(k+1)^2(k+2)}{2} = \frac{(k+1)^2\big[(k+1)+1\big]}{2}
\end{aligned}
\]
which matches the **odd**-case formula at \( n=k+1 \). ✓

Since \( P(k+1) \) holds in *both* possible cases for \( k \), it holds regardless of the parity of \( k \).

\[
\boxed{S_n \text{ as defined above holds for all natural numbers } n}
\]

**Check:** \( n=4 \) (even): \( 1+8+9+32=50 \); formula \( \dfrac{4\cdot25}{2}=50 \). ✓

---

### Objective Type Questions

#### 4.2.11 Solved — MCQ: Smallest Valid Base Case (NCERT Example 11) ⭐⭐

> [!example] Example
> **Given:** \( P(n): 2^n < 1\times2\times3\times\cdots\times n \). **Find:** the smallest positive integer for which \( P(n) \) is true.

**Work:** test successive values directly — this is a reminder that the *correct* base case is found by trial, not assumed to be \( n=1 \):


| \(n\) | \(2^n\) | \(n!\) | \(P(n)\) true? |
| ------- | --------- | -------- | ---------------- |
| 1     | 2       | 1      | No             |
| 2     | 4       | 2      | No             |
| 3     | 8       | 6      | No             |
| 4     | 16      | 24     | **Yes**        |

**Answer: (D) 4.**

---

#### 4.2.12 Solved — MCQ: Induction Starting Above the First Value (NCERT Example 12) ⭐⭐

> [!example] Example
> **Given:** a student proved \( P(k+1) \) true whenever \( P(k) \) is true, for all \( k>5,\ k\in\mathbb{N} \), and separately proved \( P(5) \) is true. **Find:** what can be concluded.

**Work:** with a true base case at \( n_0=5 \) and a valid implication chain running from there onward, the conclusion is \( P(n) \) true for all \( n \geq 5 \).

**Answer: (C) for all \(n \geq 5\).**

> **Watch out — read the quantifier carefully:** taken literally, "for all \( k>5 \)" proves the link \( P(6)\Rightarrow P(7), P(7)\Rightarrow P(8),\ldots \) but not \( P(5)\Rightarrow P(6) \), since \( k=5 \) is excluded from "\(k>5\)." The source's intended reading (and the accepted answer) treats the chain as starting at \( k=5 \), i.e. effectively "\(k \geq 5\)." When writing your own induction proofs, state the inductive step as "for all \(k \geq n_0\)" to remove this ambiguity entirely.

---

#### 4.2.13 Solved — Fill in the Blank: Finding a Divisor by GCD (NCERT Example 13) ⭐⭐

> [!example] Example
> **Given:** \( P(n): 2\cdot4^{2n+1}+3^{3n+1} \) is divisible by \( \lambda \) for all \( n\in\mathbb{N} \). **Find:** \( \lambda \).
> **Approach (objective-question shortcut):** when a proof is not required, compute the expression for the first two values of \( n \) and take their **HCF** — any divisor that works for *every* \( n \) must divide each of these particular values.

**Work:**
\[
n=1:\ 2\cdot4^3+3^4 = 128+81=209, \qquad n=2:\ 2\cdot4^5+3^7=2048+2187=4235
\]
\( \gcd(209,4235)=11 \).

\[
\boxed{\lambda = 11}
\]

---

#### 4.2.14 Solved — Fill in the Blank: Least Negative Integer (NCERT Example 14) ⭐⭐

> [!example] Example
> **Given:** \( P(n): 49^n+16n+k \) is divisible by 64 for \( n\in\mathbb{N} \). **Find:** the least negative integral value of \( k \).

**Work:** for \( n=1 \): \( 49+16+k = 65+k \) must be divisible by 64, so \( k=-1 \) (giving \(64\)) is the required value.

\[
\boxed{k=-1}
\]

---

#### 4.2.15 Solved — True/False: A Proof That Assumes the Wrong Hypothesis (NCERT Example 15) ⭐⭐⭐

> [!example] Example
> **Given:** the claimed statement \( P(n): 1^2+2^2+\cdots+n^2 = \dfrac{n(n+1)(2n+1)}{6} \) (this formula itself is the well-known, correct sum-of-squares identity). A student's "proof" checks \( P(1) \), then writes the inductive hypothesis as \( k^2 = \dfrac{k(k+1)(2k+1)}{6} \) and sets out to show \( (k+1)^2 = \dfrac{(k+1)(k+2)(2k+3)}{6} \).
> **Find:** is this a valid inductive proof?

**Work — locate the actual error:** the inductive hypothesis should assume the *entire partial sum up to \(k\)*, i.e. \( 1^2+2^2+\cdots+k^2 = \dfrac{k(k+1)(2k+1)}{6} \) — not merely the **last term**, \( k^2 \), in isolation. The written hypothesis \( k^2=\dfrac{k(k+1)(2k+1)}{6} \) is a false equation for any \( k\ge2 \) (e.g. \( k=2 \): \( 4 \neq \dfrac{2\cdot3\cdot5}{6}=5 \)), and the "statement to prove," \( (k+1)^2=\ldots \), is equally false. Verifying that a false statement implies another false statement establishes nothing about the true theorem.

**Answer: False** — because in the inductive step, both the inductive hypothesis and the target statement, as written, are incorrect; they must involve the cumulative sum, not the isolated \(k\)-th term.

---

## Points to Ponder ⭐⭐⭐

- **The base case is not always \(n=1\).** State it explicitly, and find it by testing small values rather than assuming — Example 11 shows a statement that is false at \(n=1,2,3\) and only becomes true at \(n=4\); Examples 2, 3, and 5 have genuine domain restrictions (\(n\geq2\) or \(n\geq3\)).
- **The inductive hypothesis must be the full statement \(P(k)\)** — usually a cumulative sum, product, or relation up to \(k\) — never just the isolated \(k\)-th term. Confusing the two produces a proof that "checks out" symbolically while proving nothing (Example 15).
- **When the recursive rule for a term depends on the parity (or any classification) of \(n\)**, the inductive step must split into cases matching that classification, and \(P(k+1)\) must be verified in *each* case separately (Example 10).
- **Both the base step and the inductive step are required — neither substitutes for the other.** An inductive step proven only "for \(k>n_0\)" does not by itself establish the link from the base case; state ranges as "\(k \geq n_0\)" to avoid the ambiguity seen in Example 12.
- **Induction verifies; it does not discover.** Every worked example here starts from an already-stated formula. If a formula is unknown, guess it first (from a pattern, a recursive definition, or a derivation), then use induction to confirm it holds for all \(n\).
- **Preserve inequality direction carefully when chaining bounds** (Example 5): each substitution using the IH must be checked to still point the right way, and any extra inequality used mid-proof (like \(2 < 2^k\)) must itself be justified within the stated range of \(k\).
- **In divisibility proofs, isolate the IH as an explicit multiple** (\(a^k - 1 = cq\)) and rewrite \(a^{k+1}-1\) as *(a multiple of \(c\))* + *(the IH expression)* — this is the single most reusable trick in the whole chapter (Examples 4 and 9, and Exercises 3, 4, 6, 7).
