
# Limits and Derivatives — Notes

*NCERT Class 11 Mathematics, Chapter 12 · CBSE Board / JEE-Foundation level*

> How do you pin down "the velocity at one exact instant" when velocity is really a statement about change *over* an interval? This chapter builds the two ideas — **limit** and **derivative** — that make that question precise.

> [!source-note] A couple of numbering quirks in this reprint, worth knowing about so they don't look like errors on your part:
> - Some running text and table labels here still read "Table 13.1", "Section 13.2", etc., even though the chapter itself is numbered **12**. That's a leftover from an older edition where this was Chapter 13 — not a sign you're missing a page.
> - The book prints **"Theorem 5"** twice for two unrelated results: the two standard trigonometric limits in §12.4, and the algebra-of-derivatives rules in §12.5.1. These notes label them **Theorem 5A** and **Theorem 5B** to keep them apart.

---

## 12.1–12.2 The Physical Motivation: From Average to Instantaneous Velocity ⭐

A body dropped from a cliff covers a distance \(s = 4.9t^2\) metres in \(t\) seconds. The question "what is its velocity at the instant \(t=2\)?" can't be answered directly — velocity, as ordinarily defined, needs *two* points in time:

\[
\text{average velocity between } t=t_1 \text{ and } t=t_2 = \frac{\text{distance travelled}}{t_2-t_1}
\]

**Approach from the left** (intervals ending at \(t=2\)): as \(t_1\) creeps up towards \(2\) (\(t_1 = 0, 1, 1.5, 1.9, 1.99,\dots\)), the average velocity rises towards a value just above \(19.551\) m/s.

**Approach from the right** (intervals starting at \(t=2\)): as \(t_2\) creeps down towards \(2\) (\(t_2 = 4, 3, 2.1, 2.01,\dots\)), the average velocity falls towards a value just below \(19.649\) m/s.

Both sequences are squeezing towards the same number from either side. That common value is declared to be the **instantaneous velocity at \(t=2\)** — and, since velocity is the rate of change of displacement, this number is also called the **derivative of \(s=4.9t^2\) at \(t=2\)**.

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=1.0]
  \draw[->, line width=1pt] (-0.5,0) -- (5.5,0) node[right, font=\small] {$x$};
  \draw[->, line width=1pt] (0,-0.5) -- (0,4.5) node[above, font=\small] {$y$};
  \draw[blue!70!black, line width=1.6pt, smooth]
       plot coordinates {(0.3,0.35) (1,0.65) (1.8,1.1) (2.6,1.9) (3.4,2.9) (4.2,4.0) (4.7,4.75)};
  \coordinate (P) at (2.6,1.9);
  \coordinate (Q) at (4.2,4.0);
  \fill[red!75!black] (P) circle (2.2pt);
  \fill[red!75!black] (Q) circle (2.2pt);
  \node[below, font=\small, text=red!75!black] at (2.6,1.7) {$P\,(a,f(a))$};
  \node[above, font=\small, text=red!75!black] at (4.2,4.15) {$Q\,(a+h,f(a+h))$};
  \draw[orange!80!black, line width=1.2pt] (P) -- (Q);
  \draw[green!45!black, line width=1.4pt] (1.6,0.35) -- (3.8,3.55);
  \coordinate (R) at (4.2,1.9);
  \draw[gray] (P) -- (R) -- (Q);
  \node[below, font=\small] at (3.4,1.85) {$h$};
  \node[right, font=\small, orange!80!black] at (4.25,3.3) {secant $PQ$};
  \node[right, font=\small, green!45!black] at (3.8,3.6) {tangent at $P$};
  \node[below, font=\itshape\small, text=gray] at (2.4,-0.35) {as $h\to0$, $Q\to P$ along the curve and secant $PQ\to$ tangent at $P$};
\end{tikzpicture}
```

This picture is the geometric twin of the velocity story: the ratio \(\dfrac{f(a+h)-f(a)}{h}\) is the slope of the secant \(PQ\). As \(h\to0\), \(Q\) slides towards \(P\) and the secant swings into the **tangent line at \(P\)** — so the derivative equals the tangent's slope. Keep this figure in mind; §12.5 restates it formally.

> **Key idea:** Every derivative you compute in this chapter is secretly this same limiting process — shrink the interval, watch the average rate of change settle to one number.

---

## 12.3 Limits ⭐⭐

### Left-hand and right-hand limits

Since \(x\) can approach a point \(a\) from below or from above, a function can have two different "expected values" at \(a\):

> **Definition:** \(\displaystyle\lim_{x\to a^-}f(x)\) (left-hand limit, LHL) is the value \(f\) is expected to take, dictated by points *just to the left* of \(a\). \(\displaystyle\lim_{x\to a^+}f(x)\) (right-hand limit, RHL) is dictated by points *just to the right*. If LHL = RHL, that common value is \(\displaystyle\lim_{x\to a}f(x)\).

A few representative cases:

- \(f(x)=x^2\): as \(x\to0\) from either side, \(f(x)\to0\). So \(\lim_{x\to0}x^2=0\).
- \(h(x) = \dfrac{x^2-4}{x-2}\), \(x\neq2\): even though \(h\) isn't *defined* at \(x=2\), values of \(h(x)\) near \(2\) cluster around \(4\). So \(\lim_{x\to2}h(x)=4\) — a limit can exist where the function itself doesn't.
- \(f(x) = 1\) for \(x\le0\), \(f(x)=2\) for \(x>0\): here LHL \(=1\) and RHL \(=2\) disagree, so \(\lim_{x\to0}f(x)\) **does not exist**, even though \(f(0)=1\) is perfectly well-defined.

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=1.0]
  \draw[->, line width=1pt] (-3,0) -- (3,0) node[right, font=\small] {$x$};
  \draw[->, line width=1pt] (0,-0.5) -- (0,3) node[above, font=\small] {$y$};
  \draw[blue!70!black, line width=1.8pt] (-2.6,1) -- (0,1);
  \fill[blue!70!black] (0,1) circle (2.6pt);
  \draw[blue!70!black, line width=1.8pt] (0,2) -- (2.6,2);
  \draw[fill=white, draw=blue!70!black, line width=1.4pt] (0,2) circle (2.6pt);
  \node[left, font=\small] at (-0.15,1) {$1$};
  \node[left, font=\small] at (-0.15,2) {$2$};
  \node[below, font=\itshape\small, text=gray] at (0,-0.9) {LHL $=1\neq2=$ RHL $\;\Rightarrow\;\lim_{x\to0}f(x)$ does not exist, though $f(0)=1$ is defined};
\end{tikzpicture}
```

A subtler pair of cases worth internalising: a function can be defined at \(a\) with its limit there being a *different* number (e.g. \(f(x)=x+2\) for \(x\neq1\), \(f(1)=0\): \(\lim_{x\to1}f(x)=3\neq f(1)\)), or a function can fail to have a limit at \(a\) even though \(f(a)\) is defined (the piecewise \(x-2\)/\(x+2\) example, where LHL \(=-2\), RHL \(=2\), yet \(f(0)=0\)). **Limit-at-a-point and value-at-a-point are genuinely independent pieces of information.**

### 12.3.1 Algebra of Limits ⭐⭐

**Theorem 1.** If \(\lim_{x\to a}f(x)\) and \(\lim_{x\to a}g(x)\) both exist, then:

\[
\begin{aligned}
\text{(i)}\quad &\lim_{x\to a}[f(x)+g(x)] = \lim_{x\to a}f(x)+\lim_{x\to a}g(x)\\
\text{(ii)}\quad &\lim_{x\to a}[f(x)-g(x)] = \lim_{x\to a}f(x)-\lim_{x\to a}g(x)\\
\text{(iii)}\quad &\lim_{x\to a}[f(x)\cdot g(x)] = \lim_{x\to a}f(x)\cdot\lim_{x\to a}g(x)\\
\text{(iv)}\quad &\lim_{x\to a}\frac{f(x)}{g(x)} = \frac{\lim_{x\to a}f(x)}{\lim_{x\to a}g(x)}\quad\text{(denominator's limit} \neq 0\text{)}
\end{aligned}
\]

A special case of (iii), with \(g\) constant \(=\lambda\): \(\lim_{x\to a}[\lambda f(x)] = \lambda\lim_{x\to a}f(x)\).

### 12.3.2 Limits of Polynomials and Rational Functions ⭐⭐

Since \(\lim_{x\to a}x=a\), repeated use of the product rule gives \(\lim_{x\to a}x^n=a^n\). Applying Theorem 1 term-by-term to \(f(x)=a_0+a_1x+\cdots+a_nx^n\):

\[
\lim_{x\to a}f(x) = a_0+a_1a+a_2a^2+\cdots+a_na^n = f(a).
\]

> **Key idea:** For a polynomial, the limit at any point is simply the function value there — direct substitution always works.

For a rational function \(f(x)=g(x)/h(x)\) with \(h(x)\neq0\): if \(h(a)\neq0\), then \(\displaystyle\lim_{x\to a}f(x)=\frac{g(a)}{h(a)}\) by the quotient rule above.

**If \(h(a)=0\):** two sub-cases.

- \(g(a)\neq0\): the limit **does not exist**.
- \(g(a)=0\) too (the \(\frac00\) form): write \(g(x)=(x-a)^kg_1(x)\), \(h(x)=(x-a)^lh_1(x)\), where \(g_1(a),h_1(a)\neq0\) and \(k,l\) are the exact powers of \((x-a)\) dividing out. Then
  \[
  \lim_{x\to a}f(x) = \lim_{x\to a}\frac{(x-a)^kg_1(x)}{(x-a)^lh_1(x)} =
  \begin{cases}
  \dfrac{g_1(a)}{h_1(a)}, & k=l\\[4pt]
  0, & k>l\\[4pt]
  \text{not defined}, & k<l
  \end{cases}
  \]

**Theorem 2 (general case first).** For any positive integer \(n\):
\[
\lim_{x\to a}\frac{x^n-a^n}{x-a} = na^{n-1}.
\]

*Proof.* Factor: \(x^n-a^n = (x-a)(x^{n-1}+x^{n-2}a+\cdots+xa^{n-2}+a^{n-1})\), so
\[
\lim_{x\to a}\frac{x^n-a^n}{x-a} = \lim_{x\to a}\big(x^{n-1}+x^{n-2}a+\cdots+a^{n-1}\big) = \underbrace{a^{n-1}+a^{n-1}+\cdots+a^{n-1}}_{n\text{ terms}} = na^{n-1}.\ \blacksquare
\]

*Remark (special case falls out for free):* the familiar difference-of-squares/cubes limits (\(n=2,3\)) are just this formula at those particular \(n\) — there's no need to memorise them separately. The formula also extends (without proof here) to any **rational** exponent \(n\), provided \(a>0\); this extended version is what lets you evaluate limits with surds, such as \(\lim_{x\to0}\dfrac{\sqrt{1+x}-1}{x}\).

> #### Solved — Rational-function limit in \(\frac00\) form ⭐⭐ *(NCERT Example 2(ii))*
>
> **Find:** \(\displaystyle\lim_{x\to2}\frac{x^3-4x^2+4x}{x^2-4}\)
> **Approach:** direct substitution gives \(\frac{8-16+8}{0}=\frac00\), so factor both top and bottom.
> **Work:**
> \[
> \frac{x^3-4x^2+4x}{x^2-4} = \frac{x(x-2)^2}{(x+2)(x-2)} = \frac{x(x-2)}{x+2}\quad(x\neq2)
> \]
> \[
> \lim_{x\to2}\frac{x(x-2)}{x+2} = \frac{2(0)}{4} = 0
> \]
> **Check:** the cancelled factor \((x-2)\) is valid precisely because \(x\neq2\) throughout the limiting process — we never actually evaluate at \(x=2\).

> #### Solved — Standard-limit shortcut ⭐⭐ *(NCERT Example 3(i))*
>
> **Find:** \(\displaystyle\lim_{x\to1}\frac{x^{15}-1}{x^{10}-1}\)
> **Approach:** split into two applications of Theorem 2 with \(a=1\), rather than factoring degree-15 and degree-10 polynomials directly.
> **Work:**
> \[
> \frac{x^{15}-1}{x^{10}-1} = \frac{x^{15}-1}{x-1}\div\frac{x^{10}-1}{x-1}
> \quad\Longrightarrow\quad
> \lim_{x\to1}(\cdots) = \frac{15(1)^{14}}{10(1)^{9}} = \frac{15}{10}=\boxed{\dfrac32}
> \]
> **Check:** dimensionally sensible — this is a ratio of two "growth rates" at \(x=1\), and \(15/10\) simplifies cleanly.

---

## 12.4 Limits of Trigonometric Functions ⭐⭐⭐

**Theorem 3 (comparison).** If \(f(x)\le g(x)\) throughout a common domain, and both limits exist at \(a\), then \(\lim_{x\to a}f(x)\le\lim_{x\to a}g(x)\).

**Theorem 4 (sandwich/squeeze theorem).** If \(f(x)\le g(x)\le h(x)\) near \(a\), and \(\lim_{x\to a}f(x)=\lim_{x\to a}h(x)=l\), then \(\lim_{x\to a}g(x)=l\) as well.

### The geometric inequality behind everything

\[
\cos x < \frac{\sin x}{x} < 1 \qquad\text{for } 0<|x|<\frac\pi2 \tag{$*$}
\]

*Proof sketch.* On a unit circle centred at \(O\), let \(A\) be the point at angle \(0\), \(C\) the point at angle \(x\) (\(0<x<\pi/2\)), \(D\) the foot of the perpendicular from \(C\) to \(OA\), and \(B\) the point where ray \(OC\) extended meets the tangent line to the circle at \(A\).

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=1.8]
  \draw[gray!50] (0,0) circle (1);
  \coordinate (O) at (0,0);
  \coordinate (A) at (1,0);
  \coordinate (C) at (0.825,0.565);
  \coordinate (D) at (0.825,0);
  \coordinate (B) at (1,0.684);
  \draw[line width=1pt] (O) -- (A);
  \node[below, font=\small] at (A) {$A$};
  \node[below left, font=\small] at (O) {$O$};
  \draw[blue!70!black, line width=1.2pt] (O) -- (C);
  \node[above right, font=\small, text=blue!70!black] at (C) {$C$};
  \draw[dashed, red!70!black, line width=1pt] (C) -- (D);
  \node[below, font=\small, text=red!70!black] at (D) {$D$};
  \draw[green!45!black, line width=1.4pt] (A) -- (B);
  \node[right, font=\small, text=green!45!black] at (B) {$B$};
  \draw[dashed, gray] (O) -- (B);
  \draw[gray] (A) -- (C);
  \draw[orange!80!black] (0.25,0) arc (0:34.4:0.25);
  \node[font=\small, orange!80!black] at (0.34,0.11) {$x$};
  \node[below, font=\itshape\small, text=gray] at (0.5,-0.55) {area $\triangle OCD <$ area sector $OAC <$ area $\triangle OAB$};
\end{tikzpicture}
```

Comparing areas — \(\triangle OCD \subset\) sector \(OAC \subset \triangle OAB\) — gives \(\tfrac12\,\text{OA}\cdot\text{CD} < \tfrac{x}{2\pi}\pi(\text{OA})^2 < \tfrac12\,\text{OA}\cdot\text{AB}\), i.e. \(\sin x < x < \tan x\). Since \(\sin x>0\) here, dividing through by it and taking reciprocals gives exactly \((*)\).

**Theorem 5A (two standard trigonometric limits).**
\[
\text{(i)}\quad\lim_{x\to0}\frac{\sin x}{x}=1 \qquad\qquad \text{(ii)}\quad\lim_{x\to0}\frac{1-\cos x}{x}=0
\]

*Proof.* (i) Inequality \((*)\) sandwiches \(\sin x/x\) between \(\cos x\) and the constant \(1\); since \(\lim_{x\to0}\cos x=1\), the sandwich theorem forces \(\lim_{x\to0}\sin x/x=1\).

(ii) Using \(1-\cos x = 2\sin^2(x/2)\):
\[
\frac{1-\cos x}{x} = \frac{2\sin^2(x/2)}{x} = \frac{\sin(x/2)}{x/2}\cdot\sin(x/2) \;\xrightarrow[x\to0]{}\; 1\cdot0 = 0.\ \blacksquare
\]

> **Watch out:** both results need \(x\) in **radians** and hold only in the limit \(x\to0\) — they are not general identities valid at any \(x\).

> #### Solved — Combining two applications of Theorem 5A ⭐⭐⭐ *(NCERT Example 4(i))*
>
> **Find:** \(\displaystyle\lim_{x\to0}\frac{\sin4x}{\sin2x}\)
> **Approach:** engineer both the numerator and denominator into the \(\sin(\cdot)/(\cdot)\) shape.
> **Work:**
> \[
> \frac{\sin4x}{\sin2x} = \left(\frac{\sin4x}{4x}\right)\left(\frac{2x}{\sin2x}\right)(2)
> \;\xrightarrow[x\to0]{}\; (1)(1)(2) = \boxed{2}
> \]
> **Check:** as \(x\to0\), both \(4x\to0\) and \(2x\to0\), so Theorem 5A applies to each factor separately — order of operations is legitimate here because each piece's limit exists independently.

> #### Solved — \(\tan x/x\) as \(x\to0\) ⭐⭐ *(NCERT Example 4(ii))*
>
> **Work:** \(\displaystyle\frac{\tan x}{x}=\frac{\sin x}{x}\cdot\frac{1}{\cos x}\;\xrightarrow[x\to0]{}\;1\cdot1=\boxed{1}\)

---

## 12.5 Derivatives ⭐⭐⭐

### Definition and first geometric picture

**Definition 1.** For \(f\) real-valued and \(a\) in its domain, the **derivative of \(f\) at \(a\)** is
\[
f'(a) = \lim_{h\to0}\frac{f(a+h)-f(a)}{h}
\]
provided the limit exists.

> #### Solved — Derivative at a point, from scratch ⭐⭐ *(NCERT Example 6)*
>
> **Find:** \(f'(-1)\) for \(f(x)=2x^2+3x-5\), and verify \(f'(0)+3f'(-1)=0\).
> **Work:**
> \[
> f'(-1) = \lim_{h\to0}\frac{\big[2(-1+h)^2+3(-1+h)-5\big]-\big[2(-1)^2+3(-1)-5\big]}{h}
> = \lim_{h\to0}\frac{2h^2-h}{h} = \lim_{h\to0}(2h-1) = -1
> \]
> \[
> f'(0) = \lim_{h\to0}\frac{\big[2h^2+3h-5\big]-\big[-5\big]}{h} = \lim_{h\to0}(2h+3) = 3
> \]
> **Check:** \(f'(0)+3f'(-1) = 3+3(-1) = 0\). ✓ — confirms both individual computations are mutually consistent.

Section 12.2's secant-to-tangent picture makes the geometric meaning of \(f'(a)\) precise: with \(P=(a,f(a))\) and \(Q=(a+h,f(a+h))\), the ratio \(\dfrac{f(a+h)-f(a)}{h}\) is \(\tan(\angle QPR)\), the slope of chord \(PQ\). As \(h\to0\), \(Q\to P\) and the chord becomes the tangent, so:

\[
\boxed{f'(a) = \tan\psi}
\]

where \(\psi\) is the angle the tangent at \(P\) makes with the \(x\)-axis.

**Definition 2 (the derivative as a function).**
\[
f'(x) = \frac{df}{dx} = \lim_{h\to0}\frac{f(x+h)-f(x)}{h}
\]
wherever this limit exists — this is the **first-principle** definition. Other common notations: \(\frac{d}{dx}\big(f(x)\big)\), \(D(f(x))\), and \(\left.\frac{df}{dx}\right|_{x=a}\) for the value at a specific point.

> #### Solved — A batch of first-principle derivatives ⭐⭐ *(NCERT Examples 9–12)*
>
>
> | \(f(x)\)         | \(f'(x)\) from first principle | Sketch of the algebra                                                             |
> | ------------------ | -------------------------------- | ----------------------------------------------------------------------------------- |
> | \(10x\)          | \(10\)                         | \(\dfrac{10(x+h)-10x}{h}=\dfrac{10h}{h}\to10\)                                    |
> | \(x^2\)          | \(2x\)                         | \(\dfrac{(x+h)^2-x^2}{h}=\dfrac{2xh+h^2}{h}\to2x\)                                |
> | \(a\) (constant) | \(0\)                          | \(\dfrac{a-a}{h}=0\) for every \(h\neq0\)                                         |
> | \(\dfrac1x\)     | \(-\dfrac1{x^2}\)              | \(\dfrac1h\left[\dfrac1{x+h}-\dfrac1x\right]=\dfrac{-1}{x(x+h)}\to-\dfrac1{x^2}\) |
>
> **Check (domain):** the last row is only valid for \(x\neq0\) — both \(f\) and \(f'\) share that restriction.

### 12.5.1 Algebra of Derivatives ⭐⭐⭐

**Theorem 5B.** If \(f\) and \(g\) have derivatives on a common domain:
\[
\begin{aligned}
\text{(i)}\ &\frac{d}{dx}[f(x)+g(x)] = \frac{d}{dx}f(x)+\frac{d}{dx}g(x)\\
\text{(ii)}\ &\frac{d}{dx}[f(x)-g(x)] = \frac{d}{dx}f(x)-\frac{d}{dx}g(x)\\
\text{(iii)}\ &\frac{d}{dx}[f(x)\cdot g(x)] = \frac{d}{dx}f(x)\cdot g(x) + f(x)\cdot\frac{d}{dx}g(x) \quad\text{(product rule)}\\
\text{(iv)}\ &\frac{d}{dx}\!\left(\frac{f(x)}{g(x)}\right) = \frac{\dfrac{d}{dx}f(x)\cdot g(x) - f(x)\cdot\dfrac{d}{dx}g(x)}{\big(g(x)\big)^2}\quad\text{(quotient rule)}
\end{aligned}
\]

Writing \(u=f(x)\), \(v=g(x)\), (iii)–(iv) become the compact **Leibniz rule** \((uv)'=u'v+uv'\) and the **quotient rule** \(\left(\dfrac uv\right)'=\dfrac{u'v-uv'}{v^2}\).

> **Watch out:** in the quotient rule, it is \(u'v-uv'\) on top, **not** \(uv'-u'v\) — swapping the order flips the sign and is one of the most common scoring errors on this topic.

**Building up standard derivatives from the rules.** Since \(\frac{d}{dx}(x)=1\) (shown directly from Definition 2: \(\frac{(x+h)-x}{h}=1\)):

- \(10x = x+x+\cdots+x\) (ten terms) \(\Rightarrow \frac{d}{dx}(10x) = 1+1+\cdots+1 = 10\) — or, via the product rule with \(u=10\) (constant), \(v=x\): \((uv)'=u'v+uv'=0\cdot x+10\cdot1=10\). Both routes agree.
- \(x^2=x\cdot x \Rightarrow \frac{d}{dx}(x^2) = 1\cdot x+x\cdot1 = 2x\), matching the first-principle result above.

**Theorem 6.** For any positive integer \(n\), \(\dfrac{d}{dx}(x^n)=nx^{n-1}\).

*Proof (first principle + binomial theorem).* \((x+h)^n-x^n = h(nx^{n-1}+\cdots+h^{n-1})\) by the binomial expansion, so
\[
\frac{d}{dx}(x^n) = \lim_{h\to0}\frac{(x+h)^n-x^n}{h} = \lim_{h\to0}\big(nx^{n-1}+\cdots+h^{n-1}\big) = nx^{n-1}.
\]

*Alternative proof (induction + product rule).* True for \(n=1\). Assuming it for \(n-1\):
\[
\frac{d}{dx}(x^n) = \frac{d}{dx}(x\cdot x^{n-1}) = 1\cdot x^{n-1} + x\cdot\big[(n-1)x^{n-2}\big] = x^{n-1}+(n-1)x^{n-1} = nx^{n-1}.\ \blacksquare
\]

*Remark:* this result is true for **all real** \(n\), not just positive integers — a fact used constantly from here on, though not proved in this chapter.

### 12.5.2 Derivatives of Polynomials and Trigonometric Functions ⭐⭐⭐

**Theorem 7.** For \(f(x)=a_nx^n+a_{n-1}x^{n-1}+\cdots+a_1x+a_0\):
\[
\boxed{f'(x) = na_nx^{n-1}+(n-1)a_{n-1}x^{n-2}+\cdots+2a_2x+a_1}
\]
— an immediate consequence of the sum rule (Theorem 5B(i)) applied term-by-term together with Theorem 6.

> #### Solved — Direct application ⭐ *(NCERT Example 13)*
>
> \(\dfrac{d}{dx}\big(6x^{100}-x^{55}+x\big) = 600x^{99}-55x^{54}+1\).

> #### Solved — Evaluate the derivative, not just find it ⭐⭐ *(NCERT Example 14)*
>
> **Find:** \(f'(1)\) for \(f(x)=1+x+x^2+\cdots+x^{50}\).
> **Work:** \(f'(x) = 1+2x+3x^2+\cdots+50x^{49}\); at \(x=1\), \(f'(1) = 1+2+3+\cdots+50 = \dfrac{50\cdot51}{2}=\boxed{1275}\).
> **Check:** using the standard arithmetic-series sum keeps this fast and error-free versus adding 50 terms by hand.

> #### Solved — Quotient rule ⭐⭐ *(NCERT Example 15)*
>
> **Find:** \(\dfrac{d}{dx}\!\left(\dfrac{x+1}{x}\right)\), \(x\neq0\).
> **Work:** \(u=x+1,\,v=x,\,u'=1,\,v'=1\): \(\dfrac{u'v-uv'}{v^2}=\dfrac{x-(x+1)}{x^2}=\boxed{-\dfrac1{x^2}}\).

**Derivative of \(\sin x\)** (Example 16) — from first principle, using \(\sin A-\sin B = 2\cos\!\left(\frac{A+B}2\right)\sin\!\left(\frac{A-B}2\right)\):
\[
\frac{d}{dx}(\sin x) = \lim_{h\to0}\frac{\sin(x+h)-\sin x}{h}
= \lim_{h\to0}\cos\!\left(x+\frac h2\right)\cdot\frac{\sin(h/2)}{h/2} = \cos x\cdot1 = \boxed{\cos x}
\]

**Derivative of \(\tan x\)** (Example 17) — from first principle, using \(\sin(A+B)\):
\[
\frac{d}{dx}(\tan x) = \lim_{h\to0}\frac1h\left[\frac{\sin(x+h)}{\cos(x+h)}-\frac{\sin x}{\cos x}\right]
= \lim_{h\to0}\frac{\sin h}{h}\cdot\lim_{h\to0}\frac1{\cos(x+h)\cos x} = 1\cdot\frac1{\cos^2x} = \boxed{\sec^2x}
\]
valid wherever \(\cos x\neq0\), i.e. \(x\neq(2n+1)\pi/2\).

**Derivative of \(\sin^2x\)** (Example 18) — via the product rule, \(u=v=\sin x\):
\[
\frac{d}{dx}(\sin x\sin x) = \cos x\sin x+\sin x\cos x = 2\sin x\cos x = \boxed{\sin2x}
\]

### Miscellaneous Worked Examples (NCERT Examples 19–22) ⭐⭐⭐

> #### First principle on rational and combined functions
>
> **(a)** \(f(x)=\dfrac{2x+3}{x-2}\) (undefined at \(x=2\)):
> \[
> f'(x) = \lim_{h\to0}\frac1h\left[\frac{2(x+h)+3}{x+h-2}-\frac{2x+3}{x-2}\right] = \lim_{h\to0}\frac{-7}{(x-2)(x+h-2)} = \boxed{-\dfrac{7}{(x-2)^2}}
> \]
> **Check:** matches the quotient rule shortcut — \(u=2x+3,v=x-2,u'=2,v'=1\): \(\dfrac{2(x-2)-(2x+3)}{(x-2)^2}=\dfrac{-7}{(x-2)^2}\). Also note \(f'\), like \(f\), is undefined at \(x=2\).
>
> **(b)** \(f(x)=x+\dfrac1x\) (undefined at \(x=0\)): first principle gives \(f'(x)=1-\dfrac1{x^2}\) — the sum rule applied to the two pieces already computed above.
>
> **(c)** \(f(x)=\sin x+\cos x\): first principle (expand \(\sin(x+h)\), \(\cos(x+h)\), use \(\lim\sin h/h=1\), \(\lim(\cos h-1)/h=0\)) gives \(f'(x)=\cos x-\sin x\).
>
> **(d)** \(f(x)=x\sin x\): first principle gives \(f'(x)=x\cos x+\sin x\) — matching the product rule with \(u=x,v=\sin x\).

> #### Two more standard derivatives, two ways each
>
> **\(\sin2x\):** using \(\sin2x=2\sin x\cos x\) and the product rule, \(\dfrac{d}{dx}(\sin2x)=2(\cos^2x-\sin^2x)=2\cos2x\).
>
> **\(\cot x\):** using the quotient rule on \(\cot x=\dfrac{\cos x}{\sin x}\):
> \[
> \frac{d}{dx}(\cot x) = \frac{(-\sin x)(\sin x)-(\cos x)(\cos x)}{\sin^2x} = -\frac{\sin^2x+\cos^2x}{\sin^2x} = \boxed{-\csc^2x}
> \]
> Equivalently, writing \(\cot x = 1/\tan x\) and using the quotient rule with \(\tan x\)'s known derivative \(\sec^2x\) gives the same answer — a good consistency check when two routes are available.

> #### Quotient rule with mixed algebraic/trigonometric terms ⭐⭐⭐
>
> \[
> \frac{d}{dx}\!\left(\frac{x^5-\cos x}{\sin x}\right) = \frac{(5x^4+\sin x)\sin x-(x^5-\cos x)\cos x}{\sin^2x} = \frac{5x^4\sin x-x^5\cos x+1}{\sin^2x}
> \]
> \[
> \frac{d}{dx}\!\left(\frac{x+\cos x}{\tan x}\right) = \frac{(1-\sin x)\tan x-(x+\cos x)\sec^2x}{\tan^2x}
> \]
> **Check (domain):** the first is undefined wherever \(\sin x=0\) (i.e. \(x=n\pi\)); the second wherever \(\tan x\) is \(0\) or undefined.

---

## Points to Ponder ⭐

- **Limit ≠ function value.** \(\lim_{x\to a}f(x)\) can exist and differ from \(f(a)\), can exist where \(f(a)\) is undefined, or can fail to exist even where \(f(a)\) is perfectly defined. Always be clear which of the two a question is actually asking for.
- **LHL ≠ RHL means the limit simply does not exist** — don't average the two values or pick whichever looks nicer.
- **\(\frac00\) is a signal, not a verdict.** It means "factor, cancel, rationalize, or use an identity" — not "the limit doesn't exist."
- If \(h(a)=0\) but \(g(a)\neq0\) in \(g(x)/h(x)\), the limit genuinely does not exist in this course (it is not treated as \(0\) or as \(\infty\)).
- \(\lim_{x\to0}\sin x/x=1\) and \(\lim_{x\to0}(1-\cos x)/x=0\) require \(x\) in **radians** and hold only as \(x\to0\) — don't reach for them at \(x\to a\neq0\), or with degrees.
- **Quotient-rule sign order:** it's \(u'v-uv'\), never \(uv'-u'v\).
- Differentiating can *tighten* a domain: e.g. \(\tan x\)'s derivative \(\sec^2x\) is undefined at exactly the same points \(\tan x\) itself is; always re-state the domain after applying the quotient rule, since a new denominator \(v^2\) appears.
- This chapter's printed **"Theorem 5"** appears twice for two unrelated results (see the source note at the top) — don't cross-reference the wrong one.
