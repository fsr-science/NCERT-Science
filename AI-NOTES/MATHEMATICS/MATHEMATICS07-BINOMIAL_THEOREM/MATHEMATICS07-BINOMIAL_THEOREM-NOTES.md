
# Binomial Theorem

### NCERT Class 11, Chapter 7 — Board level (positive integral index only)

*Companion files: GLOSSARY.md (formula sheet) · REVISION-MINDMAP.md (concept map + strategy flowcharts)*

---

## 7.1 Introduction ⭐

Repeated multiplication to expand $(a+b)^n$ for large $n$ — e.g. $(98)^5$ or $(101)^6$ — becomes impractical. The Binomial Theorem gives a direct formula for $(a+b)^n$ for **any integer or rational $n$**; this chapter restricts attention to **$n$ a positive integer**.

> [!note] ✏️ Convention in force
> Throughout this chapter, $n \in \mathbb{Z}^+$ (positive integer). The extension to rational/negative $n$ is a later topic and the formulas below do **not** apply there without modification.

---

## 7.2 Pascal's Triangle ⭐

Writing out $(a+b)^0$ through $(a+b)^4$ by direct multiplication and reading off the coefficients gives the array:

$$
\begin{array}{c|ccccccccc}
\text{Index} & & & & & \text{Coefficients} & & & & \\
\hline
0 & & & & & 1 & & & & \\
1 & & & & 1 & & 1 & & & \\
2 & & & 1 & & 2 & & 1 & & \\
3 & & 1 & & 3 & & 3 & & 1 & \\
4 & 1 & & 4 & & 6 & & 4 & & 1 \\
\end{array}

$$

**Observed pattern:** each interior entry is the sum of the two entries diagonally above it in the previous row (e.g. row 2's $1,2$ come from row 1's $1,1$ added pairwise), and every row starts and ends with $1$. This triangular array is **Pascal's triangle**, also called ***Meru-Prastara*** (Pingla, *Chhanda shastra*, c. 200 BC) — the pattern was known to Indian mathematicians centuries before Pascal (1665).

From these first five rows we can also read off three structural facts that hold for every index $n$:

1. $(a+b)^n$ has $n+1$ terms.
2. The power of $a$ decreases by $1$ each term while the power of $b$ increases by $1$.
3. In every term, the two powers sum to $n$.

**Rewriting the triangle using combinations.** Since ${}^{n}C_r = \dfrac{n!}{r!(n-r)!}$ with ${}^{n}C_0 = 1 = {}^{n}C_n$, row $n$ of Pascal's triangle is exactly

$$
{}^{n}C_0,\ {}^{n}C_1,\ {}^{n}C_2,\ \dots,\ {}^{n}C_n.

$$

This means any row can be written down **without building the earlier rows** — e.g. row 7 is directly ${}^{7}C_0\,{}^{7}C_1\,{}^{7}C_2\,{}^{7}C_3\,{}^{7}C_4\,{}^{7}C_5\,{}^{7}C_6\,{}^{7}C_7$, giving

$$
(a+b)^7 = {}^{7}C_0 a^7 + {}^{7}C_1a^6b + {}^{7}C_2a^5b^2 + {}^{7}C_3a^4b^3 + {}^{7}C_4a^3b^4 + {}^{7}C_5a^2b^5 + {}^{7}C_6ab^6 + {}^{7}C_7b^7

$$

— this is the bridge to the general theorem below.

---

## 7.2.1 Binomial Theorem for any positive integer $n$ ⭐⭐⭐

> [!note] ✏️ Theorem
> $$
> \boxed{(a+b)^n = {}^{n}C_0 a^n + {}^{n}C_1 a^{n-1}b + {}^{n}C_2 a^{n-2}b^2 + \dots + {}^{n}C_{n-1}\,a\,b^{n-1} + {}^{n}C_n b^n = \sum_{k=0}^{n} {}^{n}C_k\, a^{n-k}b^k}
>
> $$

**Proof (principle of mathematical induction on $n$).**

Let $P(n)$ be the statement above.

*Step 1 — Base case.* For $n=1$: $(a+b)^1 = {}^{1}C_0 a^1 + {}^{1}C_1 b^1 = a+b$. So $P(1)$ holds.

*Step 2 — Inductive step.* Assume $P(k)$ holds for some positive integer $k$:

$$
(a+b)^k = {}^{k}C_0 a^k + {}^{k}C_1 a^{k-1}b + \dots + {}^{k}C_k b^k \qquad \text{...(1)}

$$

We must show $P(k+1)$ holds:

$$
(a+b)^{k+1} = {}^{k+1}C_0 a^{k+1} + {}^{k+1}C_1 a^k b + \dots + {}^{k+1}C_{k+1} b^{k+1}.

$$

Multiply (1) by $(a+b)$:

$$
(a+b)^{k+1} = (a+b)\big({}^{k}C_0a^k + {}^{k}C_1a^{k-1}b + \dots + {}^{k}C_{k-1}ab^{k-1} + {}^{k}C_k b^k\big)

$$

Distributing and collecting terms with the same power of $a^{}b^{}$ pairs the coefficient of $a^{k+1-j}b^{j}$ (for $1 \le j \le k$) as $\big({}^{k}C_j + {}^{k}C_{j-1}\big)$. Using the Pascal's-triangle identity ${}^{k}C_j + {}^{k}C_{j-1} = {}^{k+1}C_j$, together with ${}^{k+1}C_0 = 1 = {}^{k}C_0$ and ${}^{k}C_k = 1 = {}^{k+1}C_{k+1}$ at the two ends, gives exactly

$$
(a+b)^{k+1} = {}^{k+1}C_0 a^{k+1} + {}^{k+1}C_1 a^k b + {}^{k+1}C_2 a^{k-1}b^2 + \dots + {}^{k+1}C_{k+1} b^{k+1}.

$$

So $P(k+1)$ is true whenever $P(k)$ is true. Since $P(1)$ holds, by induction $P(n)$ holds for every positive integer $n$. $\blacksquare$

> [!info] Reading the general term
> The theorem is also written $\displaystyle (a+b)^n = \sum_{k=0}^{n} {}^{n}C_k\,a^{n-k}b^k$, where the $(k+1)^{\text{th}}$ term is $T_{k+1} = {}^{n}C_k\,a^{n-k}b^k$ — this is the object you extract when a question asks for "a particular term" rather than the full expansion.

**Illustration** — expanding $(x+2)^6$ (row 6: $1,6,15,20,15,6,1$):

$$
(x+2)^6 = {}^{6}C_0x^6 + {}^{6}C_1x^5(2) + {}^{6}C_2x^4(2)^2 + {}^{6}C_3x^3(2)^3 + {}^{6}C_4x^2(2)^4 + {}^{6}C_5x(2)^5 + {}^{6}C_6(2)^6

$$

$$
\boxed{(x+2)^6 = x^6 + 12x^5 + 60x^4 + 160x^3 + 240x^2 + 192x + 64}

$$

---

## 7.2.2 Some Special Cases ⭐⭐

Each case below follows by **substituting specific values of $a,b$ into the general theorem** — none of these is a separate result; each is the general theorem specialised.

**(i) $a=x,\ b=-y$:**

$$
(x-y)^n = \sum_{k=0}^n {}^{n}C_k\,x^{n-k}(-y)^k \implies \boxed{(x-y)^n = {}^{n}C_0x^n - {}^{n}C_1x^{n-1}y + {}^{n}C_2x^{n-2}y^2 - \dots + (-1)^n\,{}^{n}C_n y^n}

$$

> [!warning] ⚠️ Points to Ponder — the alternating sign is the single most common slip
> Every term with an **odd** power of $y$ carries a **minus** sign. Dropping this alternation (treating $(x-y)^n$ like $(x+y)^n$ with $y\to -y$ only in the last term) is a very common error — recheck the sign of *every* term, not just the substitution set-up.

Applying this to $(x-2y)^5$ (row 5: $1,5,10,10,5,1$):

$$
\boxed{(x-2y)^5 = x^5 - 10x^4y + 40x^3y^2 - 80x^2y^3 + 80xy^4 - 32y^5}

$$

**(ii) $a=1,\ b=x$:**

$$
\boxed{(1+x)^n = {}^{n}C_0 + {}^{n}C_1x + {}^{n}C_2x^2 + \dots + {}^{n}C_nx^n}

$$

Setting $x=1$ in this: $\boxed{2^n = {}^{n}C_0 + {}^{n}C_1 + {}^{n}C_2 + \dots + {}^{n}C_n}$ — the sum of an entire row of Pascal's triangle is a power of 2.

**(iii) $a=1,\ b=-x$:**

$$
\boxed{(1-x)^n = {}^{n}C_0 - {}^{n}C_1x + {}^{n}C_2x^2 - \dots + (-1)^n\,{}^{n}C_n x^n}

$$

Setting $x=1$: $\boxed{0 = {}^{n}C_0 - {}^{n}C_1 + {}^{n}C_2 - \dots + (-1)^n\,{}^{n}C_n}$ — a row's alternating sum is always zero.

---

## Worked Examples

### 7.E1 Solved — Expand a binomial with negative/fractional powers (NCERT Example 1)

**Given** $\left(x^2 + \dfrac{3}{x}\right)^4,\ x\neq 0$.
**Find** the full expansion.
**Approach** Apply the general theorem with $a=x^2,\ b=3/x,\ n=4$; row 4 is $1,4,6,4,1$.
**Work**

$$
\left(x^2+\frac{3}{x}\right)^4 = {}^4C_0(x^2)^4 + {}^4C_1(x^2)^3\!\left(\frac{3}{x}\right) + {}^4C_2(x^2)^2\!\left(\frac{3}{x}\right)^2 + {}^4C_3(x^2)\!\left(\frac{3}{x}\right)^3 + {}^4C_4\!\left(\frac{3}{x}\right)^4

$$

$$
= x^8 + 4x^6\cdot\frac{3}{x} + 6x^4\cdot\frac{9}{x^2} + 4x^2\cdot\frac{27}{x^3} + \frac{81}{x^4}

$$

$$
\boxed{= x^8 + 12x^5 + 54x^2 + \frac{108}{x} + \frac{81}{x^4}}

$$

**Check** Powers of $x$ fall by 3 each term ($8,5,2,-1,-4$) — consistent with $x^2$ decreasing and $1/x$ increasing simultaneously; $x\neq 0$ is required precisely because of the negative powers, matching the stated domain restriction.

### 7.E2 Solved — Numerical approximation via binomial split (NCERT Example 2)

**Given** Compute $(98)^5$.
**Find** the exact value without repeated multiplication.
**Approach** Write $98 = 100-2$ so the expansion has round, easy-to-multiply terms; use $(x-y)^5$.
**Work**

$$
(98)^5 = (100-2)^5 = {}^5C_0(100)^5 - {}^5C_1(100)^4(2) + {}^5C_2(100)^3(2)^2 - {}^5C_3(100)^2(2)^3 + {}^5C_4(100)(2)^4 - {}^5C_5(2)^5

$$

$$
= 10{,}000{,}000{,}000 - 1{,}000{,}000{,}000 + 40{,}000{,}000 - 800{,}000 + 8{,}000 - 32

$$

$$
\boxed{(98)^5 = 9{,}039{,}207{,}968}

$$

**Check** Recomputed term-by-term above (grouping positives $10{,}040{,}008{,}000$ minus negatives $1{,}000{,}800{,}032$) confirms the source's stated value — no arithmetic slip.

### 7.E3 Solved — Comparing a huge power to a fixed number (NCERT Example 3)

**Given** Compare $(1.01)^{1000000}$ and $10{,}000$.
**Find** Which is larger.
**Approach** Write $1.01 = 1+0.01$; expand and note **every** term of $(1+0.01)^n$ is positive, so truncating after two terms gives a *lower* bound, not an approximation that could overshoot.
**Work**

$$
(1.01)^{1000000} = (1+0.01)^{1000000} = {}^{1000000}C_0 + {}^{1000000}C_1(0.01) + (\text{other positive terms})

$$

$$
= 1 + 1{,}000{,}000\times 0.01 + (\text{other positive terms}) = 1 + 10{,}000 + (\text{other positive terms}) > 10{,}000

$$

$$
\boxed{(1.01)^{1000000} > 10{,}000}

$$

**Check** Every discarded term is positive (since $0.01>0$ and all ${}^{n}C_k>0$), so dropping them can only make the truncated sum *smaller* than the true value — the inequality direction is safe to assert.

### 7.E4 Solved — Divisibility/remainder proof by binomial expansion (NCERT Example 4)

**Given** $6^n - 5n$ for $n$ a positive integer.
**Find** Prove it always leaves remainder $1$ on division by $25$, i.e. $6^n-5n = 25k+1$ for some natural number $k$.
**Approach** Write $6 = 1+5$ so the expansion of $(1+5)^n$ naturally isolates the linear-in-$n$ term against a multiple of $25=5^2$.
**Work**

$$
(1+5)^n = {}^{n}C_0 + {}^{n}C_1(5) + {}^{n}C_2(5)^2 + \dots + {}^{n}C_n(5)^n

$$

$$
6^n = 1 + 5n + 5^2\big({}^{n}C_2 + {}^{n}C_3(5) + \dots + 5^{n-2}\big)

$$

$$
6^n - 5n = 1 + 25\big({}^{n}C_2 + 5\cdot{}^{n}C_3 + \dots + 5^{n-2}\big)

$$

$$
\boxed{6^n - 5n = 25k + 1, \quad k = {}^{n}C_2 + 5\cdot {}^{n}C_3 + \dots + 5^{n-2}}

$$

**Check** $k$ is a sum of products of non-negative binomial coefficients and non-negative powers of 5, hence a natural number — verify for $n=2$: $6^2-10=26=25(1)+1$ ✓, and $k={}^2C_2=1$ matches.

---

## Points to Ponder ⭐⭐

> [!warning] ⚠️ Traps that actually cost marks in this chapter
> - **Term count is $n+1$, not $n$.** Forgetting the "$+1$" is the most common index error when counting terms of $(a+b)^n$.
> - **Alternating signs in $(x-y)^n$**: sign of $T_{k+1}$ is $(-1)^k$ — check *every* term's sign, not just the first negative one.
> - **Indexing starts at $r=0$.** The general term is $T_{r+1} = {}^{n}C_r a^{n-r}b^r$ — a term numbered "5th" corresponds to $r=4$, a frequent off-by-one slip.
> - **This chapter is positive-integral-index only.** The formulas above (finite sum, $n+1$ terms) do **not** extend as written to negative or rational $n$ (infinite series, different convergence conditions) — don't reuse them there without re-deriving.
> - **In split-base numerical problems** (like $(98)^5$ or $(1.01)^n$), keep track of *which* terms you're allowed to discard: discarding is only safe to prove an *inequality* (Example 3) when you know the sign of every discarded term; for an *exact value* (Example 2) every term must be kept.
> - **In divisibility proofs**, the first two terms of $(1+a)^n$ (namely $1$ and $na$) must be separated out *before* factoring the rest by $a^2$ — folding them in early loses the remainder you're trying to isolate.
