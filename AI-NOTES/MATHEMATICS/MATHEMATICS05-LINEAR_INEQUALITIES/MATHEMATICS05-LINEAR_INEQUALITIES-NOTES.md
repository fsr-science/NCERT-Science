
# Linear Inequalities — Class 11 Mathematics (NCERT Chapter 5)

> Board-level foundation for JEE/NEET-adjacent inequality skills: comparing expressions with \(<, >, \le, \ge\) instead of \(=\), and tracking how the *solution set* changes with the domain (\(\mathbb{N}, \mathbb{Z}\), or \(\mathbb{R}\)).

## At a glance

- **Subject:** Algebra — Linear Inequalities
- **Level:** Class 11 Board / JEE Foundation
- **Prerequisites:** Linear equations in one variable, the real number line, basic algebraic simplification
- **Key idea:** An inequality obeys the same addition/subtraction rule as an equation, but multiplying or dividing both sides by a **negative** number reverses the direction of the inequality sign.

## Learning goals

By the end of this note, the reader should be able to:

1. Classify a statement as a numerical, literal, or double inequality, and as strict or slack.
2. Solve a linear inequality in one variable over \(\mathbb{N}\), \(\mathbb{Z}\), or \(\mathbb{R}\), and write the solution set in interval notation.
3. Represent the solution set of a linear inequality on a number line.
4. Solve a compound (double) inequality and a system of two inequalities, including graphing the intersection.
5. Translate an applied word problem (averages, mixtures, unit conversion, consecutive integers) into a linear inequality and solve it.

---

## 5.1 Introduction ⭐

Not every real-world constraint can be captured by an equation. Statements like "the classroom seats **at most** 60 students" or "the average score must be **at least** 60" compare two quantities without asserting they are equal. Such statements use the symbols \(<\) (less than), \(>\) (greater than), \(\le\) (less than or equal to), and \(\ge\) (greater than or equal to), and are called **inequalities**.

## 5.2 Inequalities — Definitions and Classification ⭐⭐

**Motivating examples.** If Ravi has ₹200 to spend on rice packets costing ₹30 each, and \(x\) is the number of packets he buys, he cannot always spend the full ₹200 exactly — packets are whole units — so the constraint is \(30x < 200\), not an equation. Similarly, if Reshma has ₹120 to spend on \(x\) registers (₹40 each) and \(y\) pens (₹20 each), her budget constraint is \(40x + 20y \le 120\), which itself splits into a strict case \(40x + 20y < 120\) (money left over) and an equality case \(40x + 20y = 120\) (money exactly used up).

> **Definition 1 (Inequality).** Two real numbers or two algebraic expressions related by the symbol \(<\), \(>\), \(\le\), or \(\ge\) form an **inequality**.

**Classification by content:**


| Type                 | Meaning                                            | Example                          |
| ---------------------- | ---------------------------------------------------- | ---------------------------------- |
| Numerical inequality | Both sides are fixed numbers                       | \(3 < 5\), \(7 > 5\)             |
| Literal inequality   | At least one side contains a variable              | \(x < 5\), \(y \ge 4\)           |
| Double inequality    | Two inequalities chained about a middle expression | \(3 \le x < 5\), \(2 < y \le 4\) |

**Classification by strictness:**

- **Strict inequality** — uses \(<\) or \(>\) only (the boundary value itself is *excluded*).
- **Slack inequality** — uses \(\le\) or \(\ge\) (the boundary value is *included*).

**Classification by degree and number of variables.** The general forms below cover every case this chapter studies:


| Form                                | Variables     | Degree                     | Strict/Slack |
| ------------------------------------- | --------------- | ---------------------------- | -------------- |
| \(ax+b<0\), \(ax+b>0\)              | one (\(x\))   | linear (\(a\neq 0\))       | strict       |
| \(ax+b\le 0\), \(ax+b\ge 0\)        | one (\(x\))   | linear (\(a\neq 0\))       | slack        |
| \(ax+by<c\), \(ax+by>c\)            | two (\(x,y\)) | linear (\(a\neq0,b\neq0\)) | strict       |
| \(ax+by\le c\), \(ax+by\ge c\)      | two (\(x,y\)) | linear (\(a\neq0,b\neq0\)) | slack        |
| \(ax^2+bx+c\le 0\), \(ax^2+bx+c>0\) | one (\(x\))   | **quadratic**, not linear  | mixed        |

> **Watch out:** The quadratic forms above are included here only to show what this chapter *excludes*. This note (and NCERT Chapter 5) confines itself strictly to **linear** inequalities in one or two variables.

---

## 5.3 Algebraic Solutions of Linear Inequalities in One Variable ⭐⭐⭐

### What counts as a solution

For the inequality \(30x < 200\) (Ravi's rice packets, restricted to \(x \in \mathbb{N}\)), substituting values shows \(x = 0,1,2,\dots,6\) all make the statement true, while \(x=7\) makes it false (\(210 \not< 200\)).

> **Key idea:** A **solution** of an inequality in one variable is any value of the variable that makes it a true statement. The collection of all such values is its **solution set**.

Trial-and-error works for small cases but does not scale — the chapter instead builds two rules analogous to solving equations.

### Deriving the solving rules from the order axioms of \(\mathbb {R}\)

Rather than treat "add the same number" and "multiply by a number" as separate ad-hoc facts for inequalities, both follow from the general **order axioms** of the real numbers. Let \(a, b, c \in \mathbb{R}\) with \(a < b\).

1. **Additive order property:** \(a < b \implies a + c < b + c\) for *every* real \(c\), positive, negative, or zero. Adding/subtracting never depends on the sign of \(c\), because shifting both points on the number line by the same amount preserves their relative order.
2. **Multiplicative order property:** the outcome of multiplying by \(c\) *does* depend on the sign of \(c\):

   - If \(c > 0\): multiplying stretches or shrinks the number line without reflecting it, so order is preserved: \(a<b \implies ac<bc\).
   - If \(c < 0\): multiplying also reflects the number line about \(0\), so the smaller point ends up on the larger side: \(a<b \implies ac>bc\).

   Concretely: \(3>2\) but \((-1)(3)=-3 < -2=(-1)(2)\); and \(-8<-7\) but \((-8)(-2)=16>14=(-7)(-2)\) — multiplying by \(-2\) flips both.

Substituting the special cases "add/subtract a constant" and "multiply/divide by a fixed non-zero number" into these two general order properties gives exactly the two rules the chapter uses for solving:

\[
\boxed{\textbf{Rule 1: } a<b \iff a+c<b+c \text{ for any } c\in\mathbb{R} \text{ (sign of inequality unchanged)}}
\]

\[
\boxed{\textbf{Rule 2: } \text{if } c>0,\ a<b\iff ac<bc; \quad \text{if } c<0,\ a<b\iff ac>bc \text{ (sign reverses only for negative } c)}
\]

The same two rules apply with \(\le\) in place of \(<\) throughout.

### 5.3 Solved — Domain changes the solution set (NCERT Example 1)

**Solve** \(30x < 200\) for (i) \(x\in\mathbb{N}\), (ii) \(x\in\mathbb{Z}\).

- **Approach:** Divide both sides by \(30\) (positive ⟹ Rule 2, no sign flip), then restrict to the stated domain.
- **Work:**
  \[
  30x<200 \;\Longrightarrow\; \frac{30x}{30}<\frac{200}{30} \;\Longrightarrow\; x<\frac{20}{3}
  \]
  (i) Natural numbers less than \(20/3 \approx 6.67\): solution set \(\{1,2,3,4,5,6\}\).
  (ii) Integers less than \(20/3\): solution set \(\{\dots,-3,-2,-1,0,1,2,3,4,5,6\}\), i.e. every integer up to \(6\).
- **Check:** \(x=6\): \(30(6)=180<200\) ✓. \(x=7\): \(30(7)=210\not<200\) ✓ correctly excluded.

### 5.3 Solved — Two-step isolation over integers vs. reals (NCERT Example 2)

**Solve** \(5x-3<3x+1\) for (i) \(x\in\mathbb{Z}\), (ii) \(x\in\mathbb{R}\).

- **Work:**
  \[
  5x-3<3x+1 \;\xRightarrow{\text{Rule 1 } (+3)}\; 5x<3x+4 \;\xRightarrow{\text{Rule 1 } (-3x)}\; 2x<4 \;\xRightarrow{\text{Rule 2 } (\div 2,\ +)}\; x<2
  \]
  (i) Over \(\mathbb{Z}\): \(\{\dots,-4,-3,-2,-1,0,1\}\).
  (ii) Over \(\mathbb{R}\): solution set \(x\in(-\infty,2)\).
- **Domain convention:** Unless a problem restricts \(x\) to \(\mathbb{N}\) or \(\mathbb{Z}\), this chapter solves over \(\mathbb{R}\) by default.

### 5.3 Solved — Collecting variable terms (NCERT Example 3)

**Solve** \(4x+3<6x+7\) for real \(x\).
\[
4x-6x<6x+4-6x \;\Longrightarrow\; -2x<4 \;\xRightarrow{\text{Rule 2},\ c=-\tfrac12<0,\ \text{flip}}\; x>-2
\]
Solution set: \((-2,\infty)\). **Check:** dividing by \(-2\) (negative) is exactly why \(<\) flipped to \(>\) — a direct application of the multiplicative order property above.

### 5.3 Solved — Fractional inequality (NCERT Example 4)

**Solve** \(\dfrac{5-2x}{3}\le \dfrac{x}{6}-5\).
\[
\frac{5-2x}{3}\le\frac{x}{6}-5 \;\xRightarrow{\times 6}\; 2(5-2x)\le x-30 \;\Longrightarrow\; 10-4x\le x-30 \;\Longrightarrow\; -5x\le-40
\]
Dividing by \(-5\) (negative) flips \(\le\) to \(\ge\): \(x\ge 8\), i.e. \(x\in[8,\infty)\).
**Check** at the boundary \(x=8\): LHS \(=\frac{5-16}{3}=-\frac{11}{3}\), RHS \(=\frac{8}{6}-5=-\frac{11}{3}\) — equality holds exactly at the boundary, consistent with the slack (\(\le\)) sign.

### 5.3 Solved — Graphing the solution (NCERT Example 5)

**Solve** \(7x+3<5x+9\) and graph it.
\[
2x<6 \;\Longrightarrow\; x<3
\]

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=0.9]
  \draw[->, line width=1pt] (-5,0) -- (6.5,0) node[right, font=\small] {$x$};
  \draw (-4,0.08) -- (-4,-0.08); \node[below, font=\small] at (-4,-0.2) {$-4$};
  \draw (-3,0.08) -- (-3,-0.08); \node[below, font=\small] at (-3,-0.2) {$-3$};
  \draw (-2,0.08) -- (-2,-0.08); \node[below, font=\small] at (-2,-0.2) {$-2$};
  \draw (-1,0.08) -- (-1,-0.08); \node[below, font=\small] at (-1,-0.2) {$-1$};
  \draw (0,0.08) -- (0,-0.08); \node[below, font=\small] at (0,-0.2) {$0$};
  \draw (1,0.08) -- (1,-0.08); \node[below, font=\small] at (1,-0.2) {$1$};
  \draw (2,0.08) -- (2,-0.08); \node[below, font=\small] at (2,-0.2) {$2$};
  \draw (3,0.08) -- (3,-0.08); \node[below, font=\small] at (3,-0.2) {$3$};
  \draw (4,0.08) -- (4,-0.08); \node[below, font=\small] at (4,-0.2) {$4$};
  \draw (5,0.08) -- (5,-0.08); \node[below, font=\small] at (5,-0.2) {$5$};
  \draw (6,0.08) -- (6,-0.08); \node[below, font=\small] at (6,-0.2) {$6$};
  \draw[red!75!black, line width=2pt, ->] (3,0) -- (-4.8,0);
  \draw[fill=white, draw=red!75!black, line width=1.4pt] (3,0) circle (2.2pt);
  \node[below, font=\itshape\small, text=gray] at (1,-0.9) {open circle at $3$ (excluded, strict $<$): solution set $(-\infty,3)$};
\end{tikzpicture}
```

The open circle at \(3\) marks that \(3\) itself is **not** a solution, matching the strict \(<\).

### 5.3 Solved — Graphing a slack inequality (NCERT Example 6)

**Solve** \(\dfrac{3x-4}{2}\ge\dfrac{x+1}{4}-1\) and graph it.
\[
\frac{3x-4}{2}\ge\frac{x-3}{4} \;\xRightarrow{\times 4}\; 6x-8\ge x-3 \;\Longrightarrow\; 5x\ge5 \;\Longrightarrow\; x\ge1
\]

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=0.9]
  \draw[->, line width=1pt] (-5,0) -- (6.5,0) node[right, font=\small] {$x$};
  \draw (-4,0.08) -- (-4,-0.08); \node[below, font=\small] at (-4,-0.2) {$-4$};
  \draw (-3,0.08) -- (-3,-0.08); \node[below, font=\small] at (-3,-0.2) {$-3$};
  \draw (-2,0.08) -- (-2,-0.08); \node[below, font=\small] at (-2,-0.2) {$-2$};
  \draw (-1,0.08) -- (-1,-0.08); \node[below, font=\small] at (-1,-0.2) {$-1$};
  \draw (0,0.08) -- (0,-0.08); \node[below, font=\small] at (0,-0.2) {$0$};
  \draw (1,0.08) -- (1,-0.08); \node[below, font=\small] at (1,-0.2) {$1$};
  \draw (2,0.08) -- (2,-0.08); \node[below, font=\small] at (2,-0.2) {$2$};
  \draw (3,0.08) -- (3,-0.08); \node[below, font=\small] at (3,-0.2) {$3$};
  \draw (4,0.08) -- (4,-0.08); \node[below, font=\small] at (4,-0.2) {$4$};
  \draw (5,0.08) -- (5,-0.08); \node[below, font=\small] at (5,-0.2) {$5$};
  \draw (6,0.08) -- (6,-0.08); \node[below, font=\small] at (6,-0.2) {$6$};
  \draw[red!75!black, line width=2pt, ->] (1,0) -- (6.3,0);
  \fill[red!75!black] (1,0) circle (2.6pt);
  \node[below, font=\itshape\small, text=gray] at (3,-0.9) {filled circle at $1$ (included, slack $\ge$): solution set $[1,\infty)$};
\end{tikzpicture}
```

The **filled** circle at \(1\) marks that \(1\) itself **is** a solution — the direct visual difference between strict and slack inequalities.

### 5.3 Solved — Average-marks constraint (NCERT Example 7)

- **Given:** First two terminal marks are \(62\) and \(48\); annual mark is \(x\).
- **Find:** Minimum \(x\) so the average of all three is at least \(60\).
- **Work:**
  \[
  \frac{62+48+x}{3}\ge 60 \;\Longrightarrow\; 110+x\ge180 \;\Longrightarrow\; x\ge70
  \]
- **Check:** at \(x=70\): average \(=\frac{62+48+70}{3}=\frac{180}{3}=60\) — exactly meets "at least 60." ✓ Marks are also capped at 100 in practice, but that upper bound isn't needed since the question only asks for the *minimum*.

### 5.3 Solved — Consecutive odd integers (NCERT Example 8)

- **Given:** Two consecutive odd natural numbers, both larger than \(10\), with sum less than \(40\).
- **Find:** All such pairs.
- **Approach:** Let the smaller number be \(x\); the next consecutive *odd* number is \(x+2\).
- **Work:**
  \[
  x>10 \quad\text{...(1)} \qquad x+(x+2)<40 \;\Longrightarrow\; 2x<38 \;\Longrightarrow\; x<19 \quad\text{...(2)}
  \]
  Combining (1) and (2): \(10<x<19\). Since \(x\) must be **odd**, \(x\in\{11,13,15,17\}\).
- **Check (domain discipline):** every candidate must satisfy *both* "odd" and "\(10<x<19\)" — a common slip is to forget the odd-number restriction and include \(12,14,16,18\) as well. Pairs: \((11,13),(13,15),(15,17),(17,19)\).

---

## 5.4 Compound (Double) Inequalities and Systems of Inequalities ⭐⭐⭐

A **double (compound) inequality** like \(a < f(x) < b\) is really *two* inequalities chained together (\(a<f(x)\) **and** \(f(x)<b\)); solve it by performing the *same* operation on **all three parts simultaneously**, so both chained inequalities move together. A **system** of two separately-stated inequalities is solved by finding each solution set on its own and then taking their **intersection**.

### 5.4 Solved — Double inequality, straightforward (NCERT Example 9)

**Solve** \(-8\le 5x-3<7\).
\[
-8\le5x-3<7 \;\xRightarrow{\text{Rule 1}, +3 \text{ on all three parts}}\; -5\le5x<10 \;\xRightarrow{\text{Rule 2}, \div5>0}\; -1\le x<2
\]
Solution set: \([-1,2)\).

### 5.4 Solved — Double inequality with a negative divisor (NCERT Example 10)

**Solve** \(-5\le \dfrac{5-3x}{2}\le 8\).
\[
-10\le5-3x\le16 \;\Longrightarrow\; -15\le-3x\le11 \;\xRightarrow{\div(-3),\text{ flip both}}\; 5\ge x\ge-\frac{11}{3}
\]
Rewriting with the smaller value first: \(x\in\left[-\dfrac{11}{3},\,5\right]\).

> **Watch out:** Dividing a double inequality by a negative number flips **both** inequality signs *and* swaps which end of the chain is the lower/upper bound — always rewrite the final answer with the smaller number on the left before quoting the interval.

### 5.4 Solved — System of two inequalities, graphed (NCERT Example 11)

**Solve simultaneously** and graph:
\[
3x-7<5+x \quad\text{...(1)} \qquad\qquad 11-5x\le1 \quad\text{...(2)}
\]

- **Work:** From (1): \(2x<12 \Rightarrow x<6\). From (2): \(-5x\le-10 \Rightarrow x\ge2\).
- **Intersection:** values satisfying *both* \(x<6\) and \(x\ge2\) give \(2\le x<6\).

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=0.85]
  \draw[->, line width=1pt] (-2.5,0) -- (9.5,0) node[right, font=\small] {$x$};
  \draw (-1,0.08) -- (-1,-0.08); \node[below, font=\small] at (-1,-0.2) {$-1$};
  \draw (0,0.08) -- (0,-0.08); \node[below, font=\small] at (0,-0.2) {$0$};
  \draw (1,0.08) -- (1,-0.08); \node[below, font=\small] at (1,-0.2) {$1$};
  \draw (2,0.08) -- (2,-0.08); \node[below, font=\small] at (2,-0.2) {$2$};
  \draw (3,0.08) -- (3,-0.08); \node[below, font=\small] at (3,-0.2) {$3$};
  \draw (4,0.08) -- (4,-0.08); \node[below, font=\small] at (4,-0.2) {$4$};
  \draw (5,0.08) -- (5,-0.08); \node[below, font=\small] at (5,-0.2) {$5$};
  \draw (6,0.08) -- (6,-0.08); \node[below, font=\small] at (6,-0.2) {$6$};
  \draw (7,0.08) -- (7,-0.08); \node[below, font=\small] at (7,-0.2) {$7$};
  \draw (8,0.08) -- (8,-0.08); \node[below, font=\small] at (8,-0.2) {$8$};
  \draw (9,0.08) -- (9,-0.08); \node[below, font=\small] at (9,-0.2) {$9$};
  \draw[red!75!black, line width=2pt] (2,0) -- (6,0);
  \fill[red!75!black] (2,0) circle (2.6pt);
  \draw[fill=white, draw=red!75!black, line width=1.4pt] (6,0) circle (2.2pt);
  \node[below, font=\itshape\small, text=gray] at (4,-0.9) {closed at $2$ (included), open at $6$ (excluded): intersection $[2,6)$};
\end{tikzpicture}
```

### 5.4 Additional Practice — Compound inequality, isolate then divide (New)

**Solve** \(2\le 3x-4\le5\).

- **Given:** compound inequality with linear middle expression.
- **Find:** solution set for real \(x\).
- **Work:**
  \[
  2\le3x-4\le5 \;\xRightarrow{+4 \text{ on all parts}}\; 6\le3x\le9 \;\xRightarrow{\div3>0}\; 2\le x\le3
  \]
- **Check:** boundary \(x=2\): \(3(2)-4=2\), and \(2\le2\le5\) ✓ (equality at the lower bound). Boundary \(x=3\): \(3(3)-4=5\), and \(2\le5\le5\) ✓ (equality at the upper bound). Solution set: \([2,3]\).

---

## 5.5 Applied Problems: Unit Conversion and Mixture Constraints ⭐⭐⭐

### 5.5 Solved — Temperature range conversion (NCERT Example 12)

- **Given:** \(30<C<35\), with \(C=\dfrac{5}{9}(F-32)\).
- **Find:** the corresponding range of \(F\).
- **Work:**
  \[
  30<\frac{5}{9}(F-32)<35 \;\xRightarrow{\times\frac{9}{5}>0}\; 54<F-32<63 \;\Longrightarrow\; 86<F<95
  \]
- **Check (units/context):** multiplying by \(\tfrac95\) is a *positive* scale factor, so the inequality direction is preserved throughout — no flip needed. Range: \(86°\text{F} < F < 95°\text{F}\).

### 5.5 Solved — Acid-mixture constraint (NCERT Example 13)

- **Given:** \(600\) L of a \(12\%\) acid solution; \(x\) L of a \(30\%\) solution is added.
- **Find:** the range of \(x\) so the mixture's acid concentration is strictly between \(15\%\) and \(18\%\).
- **Approach:** total mixture is \((x+600)\) L; total acid is \(0.30x + 0.12(600)\); require this to lie strictly between \(0.15(x+600)\) and \(0.18(x+600)\) — two separate inequalities solved and then intersected, exactly like a system.
- **Work:**
  \[
  30x+7200>15x+9000 \;\Longrightarrow\; 15x>1800 \;\Longrightarrow\; x>120
  \]
  \[
  30x+7200<18x+10800 \;\Longrightarrow\; 12x<3600 \;\Longrightarrow\; x<300
  \]
- **Check (context):** \(x\) must also be \(\ge 0\) (a volume) — both \(120\) and \(300\) already satisfy that automatically. Final range: \(120<x<300\) litres.

### 5.5 Additional Practice — Boric acid dilution (New, from Miscellaneous Exercise Q.12)

- **Given:** \(640\) L of an \(8\%\) boric acid solution; \(x\) L of a \(2\%\) solution is added. Resulting mixture must be strictly between \(4\%\) and \(6\%\) boric acid.
- **Find:** range of \(x\).
- **Work:** total acid \(=0.08(640)+0.02x=51.2+0.02x\); total volume \(=640+x\).
  \[
  0.04(640+x)<51.2+0.02x \;\Longrightarrow\; 25.6+0.04x<51.2+0.02x \;\Longrightarrow\; 0.02x<25.6 \;\Longrightarrow\; x<1280
  \]
  \[
  51.2+0.02x<0.06(640+x) \;\Longrightarrow\; 51.2+0.02x<38.4+0.06x \;\Longrightarrow\; 12.8<0.04x \;\Longrightarrow\; x>320
  \]
- **Check:** at \(x=320\): concentration \(=\frac{51.2+6.4}{960}=\frac{57.6}{960}=6\%\) exactly — confirms \(320\) is the boundary *excluded* by the strict "\(<6\%\)" condition on the original (unreduced) mixture, consistent with \(x>320\) being open. Final range: \(320<x<1280\) litres.

---

## Quick Reference (inline)

\[
\boxed{a<b \iff a+c<b+c \ \ \forall c\in\mathbb{R}} \qquad
\boxed{c>0: a<b\iff ac<bc} \qquad
\boxed{c<0: a<b\iff ac>bc}
\]


| Interval  | Meaning         | Number-line boundary marks           |
| ----------- | ----------------- | -------------------------------------- |
| \((a,b)\) | \(a<x<b\)       | open circle at both\(a\) and \(b\)   |
| \([a,b]\) | \(a\le x\le b\) | filled circle at both\(a\) and \(b\) |
| \([a,b)\) | \(a\le x<b\)    | filled at\(a\), open at \(b\)        |
| \((a,b]\) | \(a<x\le b\)    | open at\(a\), filled at \(b\)        |

*(A full glossary of terms and formulas is kept separately in the companion GLOSSARY note.)*

## Points to Ponder ⭐⭐⭐

> **Watch out:** Multiplying or dividing **both sides** by a negative number reverses the inequality — but this only applies when the multiplier's sign is *known*. Every example in this chapter multiplies/divides by a fixed numeric constant, never by an expression whose sign could depend on \(x\); that subtlety belongs to a later chapter (rational/absolute-value inequalities), not this one.

> **Watch out:** In a compound inequality, an operation must be applied to **all parts at once** (all three, in \(a<f(x)<b\)) — applying it to only one side breaks the chain and gives a wrong solution set.

> **Watch out:** Open vs. filled circles are not interchangeable notation — an open circle means the boundary value is *not* a solution (strict \(<\) or \(>\)); a filled circle means it *is* a solution (slack \(\le\) or \(\ge\)). Mixing these up silently changes the answer's meaning even if the number is correct.

> **Watch out:** In word problems, "at least" means \(\ge\) (not \(>\)), and "at most"/"upto" means \(\le\) (not \(<\)) — using the strict version instead of the slack one excludes a boundary value the problem intended to allow (see NCERT Example 7, where a mark of exactly 70 must count).

> **Watch out:** Always restate the domain before finalizing an answer. The *same* inequality \(30x<200\) has three different solution sets depending on whether \(x\in\mathbb{N}\), \(x\in\mathbb{Z}\), or \(x\in\mathbb{R}\) — dropping this restriction is a common way to lose marks even with correct algebra.

## Summary

A linear inequality compares two expressions with \(<,>,\le,\ge\) instead of \(=\). It is solved with the same two rules as an equation, except that multiplying or dividing by a negative number reverses the inequality's direction — a direct consequence of the multiplicative order property of \(\mathbb{R}\). Double inequalities are solved by operating on all parts at once; systems of inequalities are solved by intersecting the individual solution sets. Every solution set should be stated with its domain (\(\mathbb{N}\), \(\mathbb{Z}\), or \(\mathbb{R}\)) and, where applicable, graphed on a number line using open circles for strict boundaries and filled circles for slack ones.
