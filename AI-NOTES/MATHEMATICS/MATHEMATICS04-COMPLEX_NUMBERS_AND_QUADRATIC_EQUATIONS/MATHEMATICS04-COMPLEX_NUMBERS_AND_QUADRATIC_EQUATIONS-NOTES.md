
# Complex Numbers and Quadratic Equations — Notes

**Target level:** Class 11 Board (CBSE/NCERT) — foundational for JEE

> [!info] Scope of this note
> The source excerpt supplied covers §4.1 through §4.5 (definitions, algebra of complex numbers, modulus/conjugate, and the Argand-plane geometric picture), plus the Miscellaneous Examples and Miscellaneous Exercise. It **stops before** §4.5.1 (polar / modulus-argument form) and **before** §4.6 (solving quadratic equations with complex roots) — both of which belong to the full NCERT chapter (the chapter title itself promises "Quadratic Equations"). Those two sections are not reproduced here because they weren't in the material provided; treat this note as covering "Complex Numbers" only, with the Quadratic Equations half still to be added.

---

## 4.1 Introduction ⭐

The real number system can't solve \(x^2+1=0\): this needs \(x^2=-1\), impossible for any real \(x\) since squares of reals are never negative. The chapter's goal is to build a number system large enough to solve **any** quadratic \(ax^2+bx+c=0\), including the case \(D = b^2-4ac < 0\), which real numbers can't handle.

The fix: define a new symbol \(i = \sqrt{-1}\), i.e. \(i^2 = -1\).

---

## 4.2 Complex Numbers ⭐⭐

> **Definition:** A number of the form \(a+ib\), where \(a,b\in\mathbb{R}\), is a **complex number**.

Examples: \(2+i3,\ (-1)+i\sqrt{3},\ 4+i\!\left(\dfrac{-1}{11}\right)\).

For \(z=a+ib\):

- \(a = \operatorname{Re} z\) — the **real part**.
- \(b = \operatorname{Im} z\) — the **imaginary part** (note: \(b\) is a real number, the coefficient of \(i\) — not \(ib\) itself).

**Equality:** \(z_1 = a+ib\) and \(z_2=c+id\) are equal **iff** \(a=c\) **and** \(b=d\) — i.e., real parts must match and imaginary parts must match separately; there's no single "size" comparison the way there is for real numbers.

### 6.4 Solved — Equating real and imaginary parts (NCERT Example 1)

> [!example] Example 1
> **Given:** \(4x + i(3x-y) = 3 + i(-6)\), \(x,y \in \mathbb{R}\).
> **Find:** \(x\) and \(y\).
> **Approach:** Two complex numbers are equal exactly when real parts match and imaginary parts match — split into two real equations.
> **Work:**
> \[
> \begin{aligned}
> 4x &= 3 \implies x = \frac{3}{4} \\
> 3x - y &= -6 \implies y = 3x+6 = 3\cdot\frac{3}{4}+6 = \frac{9}{4}+\frac{24}{4} = \frac{33}{4}
> \end{aligned}
> \]
> **Check:** Substituting back, \(4(3/4)=3\)✓ and \(3(3/4)-33/4 = 9/4-33/4=-24/4=-6\)✓.
> \[
> \boxed{x = \tfrac{3}{4},\quad y = \tfrac{33}{4}}
> \]

---

## 4.3 Algebra of Complex Numbers

### 4.3.1 Addition ⭐

\[
z_1+z_2 = (a+c)+i(b+d)
\]
Satisfies **closure**, **commutativity**, **associativity**, has an **additive identity** \(0+i0\), and every \(z=a+ib\) has an **additive inverse** \(-z=-a+i(-b)\) with \(z+(-z)=0\).

### 4.3.2 Subtraction ⭐

\[
z_1 - z_2 = z_1 + (-z_2)
\]

### 4.3.3 Multiplication ⭐⭐

\[
z_1 z_2 = (ac-bd) + i(ad+bc)
\]
Satisfies **closure**, **commutativity**, **associativity**, has multiplicative identity \(1+i0\), and (for \(z\neq 0\)) a **multiplicative inverse**:
\[
\boxed{\frac{1}{z} = \frac{a}{a^2+b^2} + i\frac{-b}{a^2+b^2}}, \qquad z \cdot \frac{1}{z} = 1
\]
Multiplication also **distributes** over addition, both ways: \(z_1(z_2+z_3)=z_1z_2+z_1z_3\) and \((z_1+z_2)z_3 = z_1z_3+z_2z_3\).

### 4.3.4 Division ⭐⭐

For \(z_2 \neq 0\): \(\dfrac{z_1}{z_2} = z_1 \cdot \dfrac{1}{z_2}\) — division is defined **as** multiplication by the inverse, not as a separately-derived operation.

### 4.3.5 Powers of \(i\) ⭐⭐⭐

Direct computation: \(i^3=-i,\ i^4=1,\ i^5=i,\ i^6=-1\), and \(i^{-1}=-i,\ i^{-2}=-1,\ i^{-3}=i,\ i^{-4}=1\).

**General pattern**, for any integer \(k\):
\[
\boxed{i^{4k}=1,\quad i^{4k+1}=i,\quad i^{4k+2}=-1,\quad i^{4k+3}=-i}
\]

> **Why this matters:** any power of \(i\), however large or negative, reduces to one of just four values by reading off the remainder when the exponent is divided by 4.

### 4.3.6 Square Roots of a Negative Real Number ⭐⭐⭐

\(i^2=-1\) and \((-i)^2 = i^2 = -1\), so **both** \(i\) and \(-i\) are square roots of \(-1\) — but the radical symbol \(\sqrt{-1}\) is defined to mean \(i\) **only** (a convention, not a fact you derive).

Generally, for \(a>0\): \(\sqrt{-a} = \sqrt{a}\,\sqrt{-1} = \sqrt{a}\,i\).

> [!warning] ⚠️ Where \(\sqrt{a}\sqrt{b}=\sqrt{ab}\) stops working
> This familiar rule holds when \(a,b\) are both positive, or when exactly one of \(a,b\) is negative. It **fails when both are negative**:
> \[
> i^2 = \sqrt{-1}\sqrt{-1} \overset{?}{=} \sqrt{(-1)(-1)} = \sqrt{1} = 1
> \]
> contradicting \(i^2=-1\). The source of the error is applying the real-number product rule to a case it was never proven for. **Rule of practice:** convert every negative-radicand square root to \(i\)-form first, then multiply — never multiply radicals directly while a negative sign is still under the root.

### 4.3.7 Identities ⭐⭐

The familiar real-number identities extend unchanged to complex numbers, because the proof only uses the distributive/commutative/associative laws — which complex numbers also satisfy:
\[
\begin{aligned}
(z_1+z_2)^2 &= z_1^2+2z_1z_2+z_2^2 \\
(z_1-z_2)^2 &= z_1^2-2z_1z_2+z_2^2 \\
(z_1+z_2)^3 &= z_1^3+3z_1^2z_2+3z_1z_2^2+z_2^3 \\
(z_1-z_2)^3 &= z_1^3-3z_1^2z_2+3z_1z_2^2-z_2^3 \\
z_1^2-z_2^2 &= (z_1+z_2)(z_1-z_2)
\end{aligned}
\]

### 6.4 Solved — Expressing products in \(a+ib\) form (NCERT Example 2)

> [!example] Example 2
> **Given:** (i) \((-5i)\left(\frac{1}{8}i\right)\)  (ii) \((-i)(2i)\left(-\frac{1}{8}i\right)^3\)
> **Find:** each in the form \(a+ib\).
> **Work:**
> (i) \(\left(-5i\right)\left(\tfrac{1}{8}i\right) = -\tfrac{5}{8}i^2 = -\tfrac{5}{8}(-1) = \boxed{\tfrac{5}{8}+i0}\)
> (ii) \((-i)(2i) = -2i^2 = 2\). Then \(\left(-\tfrac18 i\right)^3 = -\tfrac{1}{512}i^3 = -\tfrac{1}{512}(-i)=\tfrac{i}{512}\). Product: \(2\times\tfrac{i}{512} = \boxed{\tfrac{1}{256}i}\)
> **Check:** both reduce cleanly using \(i^2=-1\) with no leftover higher powers — consistent.

### 6.4 Solved — Cubing a complex binomial (NCERT Example 3)

> [!example] Example 3
> **Given:** \((5-3i)^3\).
> **Approach:** Apply \((a-b)^3=a^3-3a^2b+3ab^2-b^3\) with \(a=5,\ b=3i\).
> **Work:**
> \[
> \begin{aligned}
> (5-3i)^3 &= 5^3 - 3(5)^2(3i) + 3(5)(3i)^2 - (3i)^3 \\
> &= 125 - 225i + 3(5)(9i^2) - 27i^3 \\
> &= 125 - 225i - 135 + 27i \\
> &= \boxed{-10 - 198i}
> \end{aligned}
> \]
> **Check:** \(3(5)(9i^2)=135(-1)=-135\), and \(-27i^3 = -27(-i)=27i\) — signs verified term by term.

### 6.4 Solved — Product of two complex expressions (NCERT Example 4)

> [!example] Example 4
> **Given:** \((-\sqrt3+\sqrt{-2})(2\sqrt3-i)\).
> **Approach:** Convert \(\sqrt{-2}=\sqrt2\,i\) **first** (§4.3.6), then multiply as ordinary complex numbers.
> **Work:**
> \[
> \begin{aligned}
> (-\sqrt3+\sqrt2\,i)(2\sqrt3-i) &= -6+\sqrt3\,i+2\sqrt6\,i-\sqrt2\,i^2 \\
> &= (-6+\sqrt2) + \sqrt3(1+2\sqrt2)\,i
> \end{aligned}
> \]
> \[
> \boxed{(-6+\sqrt2) + \sqrt3(1+2\sqrt2)\,i}
> \]
> **Check:** \(-\sqrt2\,i^2 = -\sqrt2(-1)=+\sqrt2\), correctly folded into the real part; imaginary terms \(\sqrt3\,i+2\sqrt6\,i = \sqrt3(1+2\sqrt2)i\) since \(2\sqrt6=2\sqrt3\sqrt2\).

---

## 4.4 The Modulus and the Conjugate of a Complex Number ⭐⭐⭐

> **Definitions.** For \(z=a+ib\):
>
> - **Modulus** \(\lvert z\rvert = \sqrt{a^2+b^2}\) — always a non-negative real number.
> - **Conjugate** \(\bar z = a - ib\) — flip the sign of the imaginary part only.

Key identity: \(z\bar z = \lvert z\rvert^2\), which gives an alternative route to the inverse:
\[
z^{-1} = \frac{1}{z} = \frac{\bar z}{\lvert z\rvert^2}
\]

**Properties** (for \(z_1,z_2\) complex, \(z_2\neq0\) where division appears):
\[
\lvert z_1z_2\rvert=\lvert z_1\rvert\lvert z_2\rvert,\quad
\left\lvert\frac{z_1}{z_2}\right\rvert=\frac{\lvert z_1\rvert}{\lvert z_2\rvert},\quad
\overline{z_1z_2}=\bar z_1\bar z_2,\quad
\overline{z_1\pm z_2}=\bar z_1\pm\bar z_2,\quad
\overline{\left(\frac{z_1}{z_2}\right)}=\frac{\bar z_1}{\bar z_2}
\]

### 6.4 Solved — Finding a multiplicative inverse (NCERT Example 5)

> [!example] Example 5
> **Given:** \(z = 2-3i\).
> **Find:** \(z^{-1}\).
> **Work (via conjugate/modulus):** \(\bar z = 2+3i\), \(\lvert z\rvert^2 = 2^2+(-3)^2=13\).
> \[
> z^{-1}=\frac{\bar z}{\lvert z\rvert^2}=\frac{2+3i}{13}=\boxed{\tfrac{2}{13}+\tfrac{3}{13}i}
> \]
> **Check (alternative route — rationalize directly):** \(\dfrac{1}{2-3i}\cdot\dfrac{2+3i}{2+3i} = \dfrac{2+3i}{4-9i^2}=\dfrac{2+3i}{13}\) — same answer by a different method, confirming it.

### 6.4 Solved — Rationalizing a quotient and a negative power (NCERT Example 6)

> [!example] Example 6
> **Given:** (i) \(\dfrac{5+\sqrt2\,i}{1-\sqrt2\,i}\)  (ii) \(i^{-35}\)
> **Work:**
> (i) Multiply numerator and denominator by the conjugate \(1+\sqrt2\,i\):
> \[
> \frac{5+\sqrt2\,i}{1-\sqrt2\,i}\cdot\frac{1+\sqrt2\,i}{1+\sqrt2\,i}
> =\frac{5+5\sqrt2\,i+\sqrt2\,i+2i^2}{1-2i^2}
> =\frac{3+6\sqrt2\,i}{3}=\boxed{1+2\sqrt2\,i}
> \]
> (ii) \(i^{-35}=\dfrac{1}{i^{35}}=\dfrac{1}{(i^2)^{17}i}=\dfrac{1}{-i}=\dfrac{1}{-i}\cdot\dfrac{i}{i}=\dfrac{i}{-i^2}=\boxed{i}\)
> **Check:** using the §4.3.5 shortcut, \(-35 = 4(-9)+1\), so \(i^{-35}=i^{4(-9)+1}=i^1=i\) — matches.

---

## 4.5 Argand Plane (geometric representation) ⭐⭐

A complex number \(x+iy\) corresponds to the ordered pair \((x,y)\), plotted as a point in the **Argand plane** (also called the complex plane): the horizontal axis is the **real axis**, the vertical axis is the **imaginary axis**.

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=0.85]
  \draw[->, line width=1pt] (-6.5,0) -- (5.5,0) node[right, font=\small] {$x$};
  \draw[->, line width=1pt] (0,-3.5) -- (0,5) node[above, font=\small] {$y$};
  \fill[blue!70!black] (2,4) circle (2.5pt);
  \node[above right, font=\small] at (2,4) {$A(2,4)$};
  \fill[blue!70!black] (-2,3) circle (2.5pt);
  \node[above left, font=\small] at (-2,3) {$B(-2,3)$};
  \fill[blue!70!black] (0,1) circle (2.5pt);
  \node[above right, font=\small] at (0,1) {$C(0,1)$};
  \fill[blue!70!black] (2,0) circle (2.5pt);
  \node[below right, font=\small] at (2,0) {$D(2,0)$};
  \fill[blue!70!black] (-5,-2) circle (2.5pt);
  \node[below left, font=\small] at (-5,-2) {$E(-5,-2)$};
  \fill[blue!70!black] (1,-2) circle (2.5pt);
  \node[below right, font=\small] at (1,-2) {$F(1,-2)$};
  \node[below, font=\itshape\small, text=gray] at (0,-3) {each ordered pair $(x,y)$ plots the complex number $x+iy$};
\end{tikzpicture}
```

For example, \(2+4i,\ -2+3i,\ 0+1i,\ 2+0i,\ -5-2i,\ 1-2i\) correspond to points \(A,B,C,D,E,F\) above — matching NCERT Fig 4.1.

**Modulus as distance:** \(\lvert x+iy\rvert = \sqrt{x^2+y^2}\) is the distance from \(P(x,y)\) to the origin \(O(0,0)\).

**Conjugate as reflection:** \(z=x+iy\) plots at \(P(x,y)\); its conjugate \(\bar z = x-iy\) plots at \(Q(x,-y)\) — the **mirror image of \(P\) in the real axis**.

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=1.0]
  \draw[->, line width=1pt] (-2,0) -- (3.5,0) node[right, font=\small] {$x$};
  \draw[->, line width=1pt] (0,-2.5) -- (0,2.5) node[above, font=\small] {$y$};
  \fill[blue!70!black] (2,1.8) circle (2.5pt);
  \node[above, font=\small] at (2,1.8) {$P(x,y)$};
  \fill[orange!70!black] (2,-1.8) circle (2.5pt);
  \node[below, font=\small] at (2,-1.8) {$Q(x,-y)$};
  \draw[dashed, gray] (2,1.8) -- (2,-1.8);
  \draw[blue!70!black] (0,0) -- (2,1.8);
  \draw[orange!70!black] (0,0) -- (2,-1.8);
  \node[below, font=\itshape\small, text=gray] at (0.7,-2.3) {$\bar z$ is the mirror image of $z$ across the real axis};
\end{tikzpicture}
```

> [!info] What the source stops short of
> The full NCERT §4.5 continues into **polar (modulus–argument) representation** — writing \(z = r(\cos\theta+i\sin\theta)\) and defining the argument \(\theta\) — but that material is not part of the uploaded excerpt, so it isn't reconstructed here. Add it as a follow-up note once that source page is available.

---

## Miscellaneous Worked Examples (from the chapter's closing section)

### 6.4 Solved — Conjugate of a compound quotient (NCERT Miscellaneous Example 7)

> [!example] Miscellaneous Example 7
> **Given:** \(\dfrac{(3-2i)(2+3i)}{(1+2i)(2-i)}\).
> **Find:** its conjugate.
> **Work:**
> Numerator: \((3-2i)(2+3i) = 6+9i-4i-6i^2 = 6+5i+6=12+5i\).
> Denominator: \((1+2i)(2-i) = 2-i+4i-2i^2 = 2+3i+2 = 4+3i\).
> So the expression is \(\dfrac{12+5i}{4+3i}\); rationalize by \(4-3i\):
> \[
> \frac{(12+5i)(4-3i)}{16+9} = \frac{48-36i+20i+15}{25}=\frac{63-16i}{25}=\frac{63}{25}-\frac{16}{25}i
> \]
> Its conjugate flips only the imaginary sign:
> \[
> \boxed{\frac{63}{25}+\frac{16}{25}i}
> \]
> **Check:** could also apply \(\overline{\left(\frac{z_1}{z_2}\right)}=\frac{\bar z_1}{\bar z_2}\) directly to the original quotient — same final value, confirming the property from §4.4.

### 6.4 Solved — Proving a modulus identity (NCERT Miscellaneous Example 8)

> [!example] Miscellaneous Example 8
> **Given:** \(x+iy = \dfrac{a+ib}{a-ib}\), \(a,b\in\mathbb{R}\).
> **Find:** prove \(x^2+y^2=1\).
> **Approach (textbook method):** rationalize, split into real/imaginary parts, then compute \((x+iy)(x-iy)\).
> **Work:**
> \[
> x+iy = \frac{(a+ib)(a+ib)}{(a-ib)(a+ib)} = \frac{a^2-b^2+2abi}{a^2+b^2} = \frac{a^2-b^2}{a^2+b^2}+i\,\frac{2ab}{a^2+b^2}
> \]
> so \(x-iy = \dfrac{a^2-b^2}{a^2+b^2}-i\,\dfrac{2ab}{a^2+b^2}\), and
> \[
> x^2+y^2=(x+iy)(x-iy)=\frac{(a^2-b^2)^2+4a^2b^2}{(a^2+b^2)^2}=\frac{(a^2+b^2)^2}{(a^2+b^2)^2}=\boxed{1}
> \]
> **Faster check (via modulus rule, §4.4):** \(\lvert x+iy\rvert = \left\lvert\dfrac{a+ib}{a-ib}\right\rvert=\dfrac{\lvert a+ib\rvert}{\lvert a-ib\rvert}=\dfrac{\sqrt{a^2+b^2}}{\sqrt{a^2+b^2}}=1\), so \(x^2+y^2=\lvert x+iy\rvert^2=1\) — same result, confirms the longer algebraic route and shows *why* it's true: \(z\) and \(\bar z\) always have equal modulus, so this quotient always lands on the unit circle.

---

## Points to Ponder ⭐⭐⭐

> [!warning] ⚠️ The traps that actually cost marks
> - **\(\sqrt{a}\sqrt{b}=\sqrt{ab}\) fails when both \(a,b<0\)** (§4.3.6). Always convert \(\sqrt{-a}\to\sqrt{a}\,i\) *before* multiplying, never after.
> - **\(\operatorname{Im} z\) is the real coefficient \(b\), not \(ib\).** Writing \(\operatorname{Im}(2+5i)=5i\) instead of \(5\) is a very common slip.
> - **Equality of complex numbers is two conditions, not one.** \(a+ib=c+id\) needs *both* \(a=c\) and \(b=d\) — don't average or combine them into a single equation.
> - **The conjugate only flips the sign of \(b\), not of \(a\).** \(\overline{-3+5i} = -3-5i\), not \(3-5i\).
> - **Powers of \(i\) cycle with period 4 in *both* directions** — negative exponents (\(i^{-1}, i^{-2},\dots\)) follow the same \(i^{4k+r}\) pattern; reduce the exponent mod 4 first rather than repeatedly multiplying by \(i^{-1}=-i\).
> - **Division is multiplication by the inverse** (§4.3.4) — there's no separate "division formula" to memorize beyond \(z_1/z_2 = z_1\cdot(1/z_2)\), and \(1/z_2\) itself comes from §4.3.3.
> - **The conjugate's geometric picture is a reflection in the real axis**, not the origin — don't confusingly flip both coordinates (that would be \(-z\), the additive inverse, a different object entirely).
