
# Trigonometric Functions

### NCERT Class 11 Mathematics — Chapter 3 · **Board / JEE Foundation**

> Generalises the acute-angle trigonometric *ratios* of a right triangle to trigonometric **functions**, defined for *any* real angle via radian measure and the unit circle.

---

## 3.1 Introduction ⭐

*Trigonometry* comes from the Greek *trigon* (triangle) + *metron* (measure). Up to this point, sine, cosine, etc. have only been defined for **acute** angles inside a right triangle, as ratios of sides. This chapter removes that restriction: once an angle is measured in **radians**, the same six functions can be defined for *any real number* — negative angles, angles bigger than 360°, and everything in between — using the unit circle. This generalisation is what makes trigonometric functions usable in calculus, physics (oscillations, waves), and periodic phenomena generally (tides, AC circuits, seismology).

---

## 3.2 Angles ⭐⭐

An **angle** is the amount of rotation of a ray about its endpoint. The starting ray is the *initial side*, the ray in its final position is the *terminal side*, and the fixed point of rotation is the *vertex*. By convention, **anticlockwise** rotation gives a **positive** angle and **clockwise** rotation gives a **negative** angle.

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=1.1]
  \begin{scope}
    \draw[->, line width=1pt] (0,0) -- (2.6,0) node[right, font=\small] {$A$};
    \draw[->, line width=1.3pt, blue!70!black] (0,0) -- (1.9,1.9) node[above right, font=\small, text=blue!70!black] {$B$};
    \draw[orange!80!black] (0.5,0) arc (0:45:0.5);
    \node[font=\small, orange!80!black] at (0.68,0.28) {$\theta$};
    \node[below, font=\small] at (0,-0.3) {$O$};
    \node[below, font=\itshape\small, text=gray] at (1.3,-0.9) {positive angle: anticlockwise};
  \end{scope}
  \begin{scope}[xshift=5.4cm]
    \draw[->, line width=1pt] (0,0) -- (2.6,0) node[right, font=\small] {$A$};
    \draw[->, line width=1.3pt, red!70!black] (0,0) -- (1.9,-1.9) node[below right, font=\small, text=red!70!black] {$B$};
    \draw[orange!80!black] (0.5,0) arc (0:-45:0.5);
    \node[font=\small, orange!80!black] at (0.68,-0.28) {$-\theta$};
    \node[above, font=\small] at (0,0.3) {$O$};
    \node[below, font=\itshape\small, text=gray] at (1.3,-2.3) {negative angle: clockwise};
  \end{scope}
\end{tikzpicture}
```

### 3.2.1 Degree measure ⭐

**Definition.** If the rotation from initial to terminal side is $\left(\dfrac{1}{360}\right)^{\text{th}}$ of a full revolution, the angle measures **one degree**, written $1°$.

\[
1° = 60' \quad (\text{minutes}), \qquad 1' = 60'' \quad (\text{seconds})
\]

### 3.2.2 Radian measure ⭐⭐

**Definition.** The angle subtended at the centre of a **unit circle** (radius 1) by an arc of length 1 is **one radian**.

**General result (arc–radius–angle).** In a circle of radius $r$, an arc of length $l$ subtends an angle $\theta$ (in radians) at the centre, where

\[
\boxed{\theta = \frac{l}{r}, \qquad \text{i.e. } l = r\theta}
\]

*(Domain/convention: $\theta$ here must be in radians — this formula does not hold if $\theta$ is substituted in degrees. $l$ and $r$ must be in the same length unit; the result is then a pure, dimensionless radian measure.)* On the unit circle ($r=1$) this reduces to $\theta = l$ — an arc's length numerically equals the radian measure it subtends, which is exactly why "radian" is often dropped as a unit.

One full revolution subtends an angle of $2\pi$ radian (circumference of a unit circle $=2\pi$).

### 3.2.3 Relation between radian and real numbers ⭐⭐

Every point on a number line drawn **tangent** to the unit circle at $A=(1,0)$ corresponds to a unique radian measure, and conversely: "roping" the positive ray anticlockwise around the circle and the negative ray clockwise puts every real number in one-to-one correspondence with an angle in radians.

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=6pt,width=4pt]}, thick, scale=1.1]
  \draw[gray!50] (0,0) circle (1);
  \draw[->, line width=0.8pt] (1,-2.3) -- (1,2.3) node[above, font=\small] {$P$};
  \fill (1,0) circle (1.4pt); \node[right, font=\small] at (1.1,0) {$A\ (0)$};
  \fill (1,1) circle (1.4pt); \node[right, font=\small] at (1.1,1) {$1$};
  \fill (1,2) circle (1.4pt); \node[right, font=\small] at (1.1,2) {$2$};
  \fill (1,-1) circle (1.4pt); \node[right, font=\small] at (1.1,-1) {$-1$};
  \fill (1,-2) circle (1.4pt); \node[right, font=\small] at (1.1,-2) {$-2$};
  \node[below, font=\small] at (1,-2.5) {$Q$};
  \node[below, font=\itshape\small, text=gray] at (0,-1.7) {roping $AP$ anticlockwise, $AQ$ clockwise: every real number matches a radian measure, and conversely};
\end{tikzpicture}
```

Because of this, **radian measures and real numbers can be treated as one and the same** — this is exactly why calculus later differentiates $\sin x$ treating $x$ as an ordinary real variable, not a "degree."

### 3.2.4 Relation between degree and radian ⭐⭐⭐

Since a full revolution is both $2\pi$ radian and $360°$:

\[
\boxed{2\pi \text{ radian} = 360° \quad\Longleftrightarrow\quad \pi \text{ radian} = 180°}
\]

\[
\boxed{\text{Radian measure} = \frac{\pi}{180}\times\text{Degree measure}}
\qquad
\boxed{\text{Degree measure} = \frac{180}{\pi}\times\text{Radian measure}}
\]

Using $\pi \approx \dfrac{22}{7}$: $1 \text{ radian} \approx 57°16'$, and $1° \approx 0.01746$ radian.


| Degree | $30°$  | $45°$  | $60°$  | $90°$  | $180°$ | $270°$  | $360°$ |
| -------- | --------- | --------- | --------- | --------- | --------- | ---------- | --------- |
| Radian | $\pi/6$ | $\pi/4$ | $\pi/3$ | $\pi/2$ | $\pi$   | $3\pi/2$ | $2\pi$  |

> **Notational convention (state this once, use it consistently):** writing angle $\theta°$ means the angle's **degree** measure is $\theta$; writing angle $\beta$ (no ° symbol) means its **radian** measure is $\beta$. When "radian" is dropped as a unit, e.g. $\pi = 180°$ or $\dfrac{\pi}{4}=45°$, it is understood that $\pi$ and $\pi/4$ are radian measures.

#### Worked Examples — 3.2

**Example 1 — Convert $40°20'$ to radian (NCERT Example 1)**
*Given:* $40°20'$. *Find:* radian measure. *Approach:* convert minutes to a decimal fraction of a degree first ($1'=\frac{1}{60}°$), **then** apply the degree→radian formula — do not substitute minutes directly into the formula.
\[
40°20' = \left(40+\tfrac{20}{60}\right)° = 40\tfrac13° = \tfrac{121}{3}°
\quad\Longrightarrow\quad
\tfrac{\pi}{180}\times\tfrac{121}{3} = \boxed{\dfrac{121\pi}{540}\ \text{radian}}
\]
*Check:* $\dfrac{121\pi}{540}\approx 0.704$ rad; independently, $40.33°\times\frac{\pi}{180}\approx0.704$ rad ✓.

**Example 2 — Convert 6 radians to degree measure (NCERT Example 2)**
\[
6 \times \frac{180}{\pi} = \frac{1080\times7}{22} = 343\tfrac{7}{11}° = 343° + \left(\tfrac{7}{11}\times60\right)' = 343°+38'+\tfrac{2}{11}'
\]
\[
\tfrac{2}{11}'\times 60 = \tfrac{120}{11}'' \approx 10.9''
\quad\Longrightarrow\quad
\boxed{6 \text{ radian} \approx 343°38'11''}
\]

**Example 3 — Radius from an arc of $37.4$ cm subtending $60°$, $\pi=\tfrac{22}{7}$ (NCERT Example 3)**
*Approach:* $60° = \tfrac{\pi}{3}$ radian; apply $r=l/\theta$.
\[
r = \frac{37.4}{\pi/3} = \frac{37.4\times3\times7}{22} = \boxed{35.7\ \text{cm}}
\]

**Example 4 — Minute-hand tip, length $1.5$ cm, in 40 minutes, $\pi=3.14$ (NCERT Example 4)**
*Given:* $r=1.5$ cm; in 60 min the hand sweeps one full revolution. *Find:* arc length $l$ in 40 min. *Work:* in 40 min the hand turns $\tfrac{40}{60}=\tfrac23$ of a revolution, i.e. $\theta=\tfrac23\times360°=240°=\tfrac{4\pi}{3}$ rad.
\[
l = r\theta = 1.5\times\frac{4\pi}{3} = 2\pi \approx \boxed{6.28\ \text{cm}}
\]
*Check:* units are cm × (dimensionless radian) = cm ✓.

**Example 5 — Same arc length subtends $65°$ and $110°$ in two circles; find $r_1:r_2$ (NCERT Example 5)**
\[
\theta_1 = \tfrac{13\pi}{36},\qquad \theta_2=\tfrac{22\pi}{36},\qquad l=r_1\theta_1=r_2\theta_2
\quad\Longrightarrow\quad
\boxed{r_1:r_2 = \theta_2:\theta_1 = 22:13}
\]
*Check:* the **larger** angle should correspond to the **smaller** radius for the same arc length ($110°>65°$ and $13<22$) ✓ — a quick sanity check worth doing on every "same arc, different angle" problem.

> Exercise 3.1 gives further practice on exactly these two skills (degree↔radian conversion; $l=r\theta$ applications) with different numbers.

---

## 3.3 Trigonometric Functions ⭐⭐⭐

**Definition (unit-circle definition of $\sin x, \cos x$).** Let $P(a,b)$ be any point on the unit circle centred at the origin, with $\angle AOP = x$ radian (equivalently, arc $AP=x$). Define
\[
\boxed{\cos x = a, \qquad \sin x = b}
\]
— for **every** real number $x$, positive, negative, or however large.

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=1.3]
  \draw[gray!50] (0,0) circle (1);
  \draw[->, line width=0.8pt] (-1.3,0) -- (1.3,0) node[right, font=\small] {$x\text{-axis}$};
  \draw[->, line width=0.8pt] (0,-1.3) -- (0,1.3) node[above, font=\small] {$y\text{-axis}$};
  \coordinate (P) at (0.766,0.643);
  \draw[blue!70!black, line width=1.4pt] (0,0) -- (P);
  \draw[orange!80!black] (0.35,0) arc (0:40:0.35);
  \node[font=\small, orange!80!black] at (0.5,0.16) {$x$};
  \draw[dashed, red!70!black] (P) -- (0.766,0);
  \node[right, font=\small, text=red!70!black] at (0.78,0.32) {$\sin x$};
  \draw[dashed, green!45!black] (0,0) -- (0.766,0);
  \node[below, font=\small, text=green!45!black] at (0.38,-0.05) {$\cos x$};
  \fill[blue!70!black] (P) circle (1.6pt);
  \node[above right, font=\small] at (P) {$P(\cos x,\sin x)$};
  \node[below, font=\itshape\small, text=gray] at (0,-1.6) {arc length $x$ from $A(1,0)$ fixes $P$; its coordinates *are* $\cos x,\sin x$};
\end{tikzpicture}
```

Since $\triangle OMP$ is right-angled at $M$, $OM^2+MP^2=OP^2=a^2+b^2=1$. This gives the **fundamental identity**, valid for all real $x$ with no exceptions:
\[
\boxed{\cos^2x+\sin^2x = 1}
\]

**Quadrantal angles** ($A(1,0),B(0,1),C(-1,0),D(0,-1)$, integral multiples of $\pi/2$):


| $x$      | $0$ | $\pi/2$ | $\pi$ | $3\pi/2$ | $2\pi$ |
| ---------- | ----- | --------- | ------- | ---------- | -------- |
| $\cos x$ | 1   | 0       | $-1$  | 0        | 1      |
| $\sin x$ | 0   | 1       | 0     | $-1$     | 0      |

**Periodicity.** One complete revolution returns $P$ to the same point, so for any integer $n$:
\[
\boxed{\sin(2n\pi+x)=\sin x, \qquad \cos(2n\pi+x)=\cos x}
\]

**Zeros.**
\[
\sin x = 0 \iff x = n\pi,\ n\in\mathbb{Z}
\qquad\qquad
\cos x = 0 \iff x = (2n+1)\tfrac{\pi}{2},\ n\in\mathbb{Z}
\]
($\cos x$ vanishes at **odd** multiples of $\pi/2$ only — not at $0,\pi,2\pi,\dots$.)

**The remaining four functions**, defined in terms of $\sin x,\cos x$:
\[
\operatorname{cosec}x=\frac{1}{\sin x}\ (x\neq n\pi),\qquad
\sec x=\frac{1}{\cos x}\ \left(x\neq(2n+1)\tfrac\pi2\right),
\]
\[
\tan x=\frac{\sin x}{\cos x}\ \left(x\neq(2n+1)\tfrac\pi2\right),\qquad
\cot x=\frac{\cos x}{\sin x}\ (x\neq n\pi)
\]

Dividing $\cos^2x+\sin^2x=1$ through by $\cos^2x$, then by $\sin^2x$, gives two corollaries — the *same* identity in two disguises, each valid only where the division is defined:
\[
\boxed{1+\tan^2x=\sec^2x}\ \left(x\neq(2n+1)\tfrac\pi2\right)
\qquad\qquad
\boxed{1+\cot^2x=\operatorname{cosec}^2x}\ (x\neq n\pi)
\]

**Standard-angle values** (unchanged from the earlier right-triangle ratios, since $0<x\le\pi/2$ is still "acute"):


|        | $0°$ | $\pi/6$    | $\pi/4$    | $\pi/3$    | $\pi/2$   | $\pi$ | $3\pi/2$  | $2\pi$ |
| -------- | ------- | ------------ | ------------ | ------------ | ----------- | ------- | ----------- | -------- |
| $\sin$ | 0     | $1/2$      | $1/\sqrt2$ | $\sqrt3/2$ | 1         | 0     | $-1$      | 0      |
| $\cos$ | 1     | $\sqrt3/2$ | $1/\sqrt2$ | $1/2$      | 0         | $-1$  | 0         | 1      |
| $\tan$ | 0     | $1/\sqrt3$ | 1          | $\sqrt3$   | undefined | 0     | undefined | 0      |

($\operatorname{cosec}x,\sec x,\cot x$ are the reciprocals of $\sin x,\cos x,\tan x$ respectively — undefined exactly where the reciprocated value is $0$.)

### 3.3.1 Sign of trigonometric functions ⭐⭐

If $P(a,b)$ has $\angle AOP=x$, then $Q(a,-b)$ has $\angle AOQ=-x$ (reflection in the $x$-axis).

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=6pt,width=4pt]}, thick, scale=1.3]
  \draw[gray!50] (0,0) circle (1);
  \draw[->, line width=0.8pt] (-1.3,0) -- (1.3,0) node[right, font=\small] {$x$};
  \draw[->, line width=0.8pt] (0,-1.3) -- (0,1.3) node[above, font=\small] {$y$};
  \coordinate (P) at (0.766,0.643);
  \coordinate (Q) at (0.766,-0.643);
  \draw[blue!70!black, line width=1.3pt] (0,0) -- (P);
  \draw[red!70!black, line width=1.3pt] (0,0) -- (Q);
  \fill[blue!70!black] (P) circle (1.6pt); \node[above right, font=\small, text=blue!70!black] at (P) {$P(a,b)$};
  \fill[red!70!black] (Q) circle (1.6pt); \node[below right, font=\small, text=red!70!black] at (Q) {$Q(a,-b)$};
  \draw[orange!80!black] (0.35,0) arc (0:40:0.35);
  \node[font=\small, orange!80!black] at (0.52,0.17) {$x$};
  \draw[orange!80!black] (0.35,0) arc (0:-40:0.35);
  \node[font=\small, orange!80!black] at (0.52,-0.17) {$-x$};
  \node[below, font=\itshape\small, text=gray] at (0,-1.6) {reflecting $P$ in the $x$-axis gives the angle $-x$};
\end{tikzpicture}
```

\[
\boxed{\cos(-x)=\cos x} \qquad\qquad \boxed{\sin(-x)=-\sin x}
\]
i.e. $\cos$ is an **even** function and $\sin$ is an **odd** function.

Since every point on the unit circle satisfies $-1\le a\le1,\ -1\le b\le1$: $\boxed{-1\le\cos x\le1,\ -1\le\sin x\le1}$ for **all** real $x$ — this is a hard, unconditional bound.

**Sign in each quadrant (ASTC table)** — derived directly from the signs of $a=\cos x$ and $b=\sin x$ in that quadrant, not memorised as a separate rule:


|                         | I:$0<x<\pi/2$ | II:$\pi/2<x<\pi$ | III:$\pi<x<3\pi/2$ | IV:$3\pi/2<x<2\pi$ |
| ------------------------- | :-------------: | :----------------: | :------------------: | :------------------: |
| $\sin x$                |       +       |        +        |         −         |         −         |
| $\cos x$                |       +       |        −        |         −         |         +         |
| $\tan x$                |       +       |        −        |         +         |         −         |
| $\operatorname{cosec}x$ |       +       |        +        |         −         |         −         |
| $\sec x$                |       +       |        −        |         −         |         +         |
| $\cot x$                |       +       |        −        |         +         |         −         |

### 3.3.2 Domain and range of trigonometric functions ⭐⭐


| Function                | Domain                                                   | Range                        |
| ------------------------- | ---------------------------------------------------------- | ------------------------------ |
| $\sin x$                | $\mathbb{R}$                                             | $[-1,1]$                     |
| $\cos x$                | $\mathbb{R}$                                             | $[-1,1]$                     |
| $\operatorname{cosec}x$ | $\mathbb{R}\setminus\{n\pi:n\in\mathbb{Z}\}$             | $(-\infty,-1]\cup[1,\infty)$ |
| $\sec x$                | $\mathbb{R}\setminus\{(2n+1)\tfrac\pi2:n\in\mathbb{Z}\}$ | $(-\infty,-1]\cup[1,\infty)$ |
| $\tan x$                | $\mathbb{R}\setminus\{(2n+1)\tfrac\pi2:n\in\mathbb{Z}\}$ | $\mathbb{R}$                 |
| $\cot x$                | $\mathbb{R}\setminus\{n\pi:n\in\mathbb{Z}\}$             | $\mathbb{R}$                 |

**Behaviour quadrant-by-quadrant** (the symbols $\infty,-\infty$ describe unbounded *behaviour*, not values the function actually attains):


|                        | I            | II             | III            | IV             |
| ------------------------ | -------------- | ---------------- | ---------------- | ---------------- |
| $\sin$                 | $0\to1$      | $1\to0$        | $0\to-1$       | $-1\to0$       |
| $\cos$                 | $1\to0$      | $0\to-1$       | $-1\to0$       | $0\to1$        |
| $\tan$                 | $0\to\infty$ | $-\infty\to0$  | $0\to\infty$   | $-\infty\to0$  |
| $\cot$                 | $\infty\to0$ | $0\to-\infty$  | $\infty\to0$   | $0\to-\infty$  |
| $\sec$                 | $1\to\infty$ | $-\infty\to-1$ | $-1\to-\infty$ | $\infty\to1$   |
| $\operatorname{cosec}$ | $\infty\to1$ | $1\to\infty$   | $-\infty\to-1$ | $-1\to-\infty$ |

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=6pt,width=4pt]}, thick, scale=1.0]
  \draw[->, line width=1pt] (-4.6,0) -- (4.6,0) node[right, font=\small] {$x$};
  \draw[->, line width=1pt] (0,-1.6) -- (0,1.6) node[above, font=\small] {$y$};
  \node[below, font=\small] at (-4,-0.15) {$-2\pi$};
  \node[below, font=\small] at (-2,-0.15) {$-\pi$};
  \node[below, font=\small] at (2,-0.15) {$\pi$};
  \node[below, font=\small] at (4,-0.15) {$2\pi$};
  \node[left, font=\small] at (-0.12,1) {$1$};
  \node[left, font=\small] at (-0.12,-1) {$-1$};
  \draw (-4,0.06)--(-4,-0.06); \draw (-2,0.06)--(-2,-0.06); \draw (2,0.06)--(2,-0.06); \draw (4,0.06)--(4,-0.06);
  \draw[blue!70!black, line width=1.5pt, smooth]
    plot coordinates {(-4,0) (-3.5,0.707) (-3,1) (-2.5,0.707) (-2,0) (-1.5,-0.707) (-1,-1) (-0.5,-0.707) (0,0) (0.5,0.707) (1,1) (1.5,0.707) (2,0) (2.5,-0.707) (3,-1) (3.5,-0.707) (4,0)};
  \draw[orange!80!black, line width=1.5pt, smooth]
    plot coordinates {(-4,1) (-3.5,0.707) (-3,0) (-2.5,-0.707) (-2,-1) (-1.5,-0.707) (-1,0) (-0.5,0.707) (0,1) (0.5,0.707) (1,0) (1.5,-0.707) (2,-1) (2.5,-0.707) (3,0) (3.5,0.707) (4,1)};
  \node[font=\small, text=blue!70!black] at (4.3,0.85) {$\sin x$};
  \node[font=\small, text=orange!80!black] at (4.3,1.3) {$\cos x$};
  \node[below, font=\itshape\small, text=gray] at (0,-1.4) {both curves repeat every $2\pi$; amplitude confined to $[-1,1]$};
\end{tikzpicture}
```

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=6pt,width=4pt]}, thick, scale=1.0]
  \draw[->, line width=1pt] (-2.6,0) -- (2.6,0) node[right, font=\small] {$x$};
  \draw[->, line width=1pt] (0,-2.3) -- (0,2.3) node[above, font=\small] {$y$};
  \draw[dashed, gray] (1.571,-2.3) -- (1.571,2.3); \node[below, font=\small] at (1.571,-2.4) {$\pi/2$};
  \draw[dashed, gray] (-1.571,-2.3) -- (-1.571,2.3); \node[below, font=\small] at (-1.571,-2.4) {$-\pi/2$};
  \draw[green!45!black, line width=1.5pt, smooth]
    plot coordinates {(-1.4,-3.7) (-1.2,-2.57) (-1,-1.56) (-0.8,-1.03) (-0.6,-0.68) (-0.4,-0.42) (-0.2,-0.20) (0,0) (0.2,0.20) (0.4,0.42) (0.6,0.68) (0.8,1.03) (1,1.56) (1.2,2.57) (1.4,3.7)};
  \node[below, font=\itshape\small, text=gray] at (0,-2.7) {one period of $\tan x$: rises from $-\infty$ to $\infty$ on $(-\pi/2,\pi/2)$, undefined at odd multiples of $\pi/2$};
\end{tikzpicture}
```

$\sec x,\operatorname{cosec}x,\cot x$ follow by taking the **reciprocal, branch by branch**, of $\cos x,\sin x,\tan x$: wherever the reciprocated function is $0$, the reciprocal function has a vertical asymptote (see the domain table above).

#### Worked Examples — 3.3

**Example 6 — $\cos x=-\tfrac35$, $x$ in quadrant III: find the other five (NCERT Example 6)**
*Given:* $\cos x=-\tfrac35$, QIII. *Approach:* QIII $\Rightarrow$ both $\sin x,\cos x$ negative; use $\sin^2x=1-\cos^2x$ then quotient/reciprocal relations.
\[
\sec x = -\tfrac53,\qquad \sin^2x = 1-\tfrac{9}{25}=\tfrac{16}{25}\ \Rightarrow\ \sin x = -\tfrac45\ (\text{QIII}\Rightarrow\text{negative})
\]
\[
\operatorname{cosec}x=-\tfrac54,\qquad \tan x=\frac{\sin x}{\cos x}=\frac{-4/5}{-3/5}=\tfrac43,\qquad \cot x=\tfrac34
\]
*Check:* $\tan x>0$ in QIII ✓ (matches the ASTC table); $\sin^2x+\cos^2x=\tfrac{16}{25}+\tfrac9{25}=1$ ✓.

**Example 7 — $\cot x=-\tfrac{5}{12}$, $x$ in quadrant II (NCERT Example 7)**
$\tan x=-\tfrac{12}{5}$; $\sec^2x=1+\tfrac{144}{25}=\tfrac{169}{25}\Rightarrow \sec x=-\tfrac{13}{5}$ (QII $\Rightarrow \sec$ negative) $\Rightarrow \cos x=-\tfrac{5}{13}$; $\sin x=\tan x\cos x=\left(-\tfrac{12}5\right)\!\left(-\tfrac5{13}\right)=\tfrac{12}{13}$; $\operatorname{cosec}x=\tfrac{13}{12}$.
*Check:* $\sin x>0,\cos x<0$ in QII ✓.

**Example 8 — Find $\sin\dfrac{31\pi}{3}$ (NCERT Example 8)**
*Approach:* reduce using the $2\pi$-periodicity of $\sin$.
\[
\frac{31\pi}{3} = 10\pi + \frac{\pi}{3} \quad\Longrightarrow\quad \sin\frac{31\pi}{3}=\sin\left(10\pi+\frac\pi3\right)=\sin\frac\pi3=\boxed{\frac{\sqrt3}{2}}
\]
*(10π is 5 full revolutions of $2\pi$, so it drops out entirely.)*

**Example 9 — Find $\cos(-1710°)$ (NCERT Example 9)**
*Approach:* reduce using the $360°$-periodicity of $\cos$; add whole multiples of $360°$ until the angle lands in a familiar range.
\[
\cos(-1710°) = \cos(-1710°+5\times360°) = \cos(90°) = \boxed{0}
\]

> Exercises 3.2 problems 1–5 practise "one ratio + quadrant → other five"; problems 6–10 practise periodicity reduction for larger/negative angles — both using exactly the two techniques above.

---

## 3.4 Trigonometric Functions of Sum and Difference of Two Angles ⭐⭐⭐

Everything in this section is a chain of **corollaries of a single master result**, obtained one after another by substitution — memorise the derivation logic, not 20 unrelated formulas.

**Identity 3 (the master result) — $\cos(x+y)=\cos x\cos y-\sin x\sin y$**

*Setup:* on the unit circle, let $P_1,P_2,P_3,P_4$ have angles $x,\,x+y,\,-y,\,0$ respectively from $A=(1,0)$, so $P_1(\cos x,\sin x)$, $P_2(\cos(x+y),\sin(x+y))$, $P_3(\cos(-y),\sin(-y))$, $P_4(1,0)$. Since $\angle P_1OP_3 = x-(-y) = x+y = \angle P_4OP_2$, triangles $P_1OP_3$ and $P_2OP_4$ are congruent (SAS: equal radii, equal included angle) $\Rightarrow P_1P_3=P_2P_4$.

\[
\begin{aligned}
P_1P_3^{\,2} &= (\cos x-\cos y)^2+(\sin x+\sin y)^2 \\
&= \cos^2x+\cos^2y-2\cos x\cos y+\sin^2x+\sin^2y+2\sin x\sin y \\
&= 2-2(\cos x\cos y-\sin x\sin y)
\end{aligned}
\]
\[
P_2P_4^{\,2} = \big(1-\cos(x+y)\big)^2+\big(0-\sin(x+y)\big)^2 = 2-2\cos(x+y)
\]

Equating (since $P_1P_3^2=P_2P_4^2$):
\[
\boxed{\cos(x+y)=\cos x\cos y-\sin x\sin y}
\]

**Everything below follows from this one identity by substitution — the general result first, special cases falling out of it:**


| # | Identity                               | How it follows                                                                                                                  |
| --- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| 4 | $\cos(x-y)=\cos x\cos y+\sin x\sin y$  | put$y\to-y$ in (3), use $\cos(-y)=\cos y,\ \sin(-y)=-\sin y$                                                                    |
| 5 | $\cos\left(\tfrac\pi2-x\right)=\sin x$ | put$x\to\tfrac\pi2,\ y\to x$ in (4)                                                                                             |
| 6 | $\sin\left(\tfrac\pi2-x\right)=\cos x$ | apply (5) to the angle$\tfrac\pi2-x$ itself                                                                                     |
| 7 | $\sin(x+y)=\sin x\cos y+\cos x\sin y$  | $\sin(x+y)=\cos\!\left(\tfrac\pi2-(x+y)\right)=\cos\!\left(\left(\tfrac\pi2-x\right)-y\right)$, expand by (4), then use (5),(6) |
| 8 | $\sin(x-y)=\sin x\cos y-\cos x\sin y$  | put$y\to-y$ in (7)                                                                                                              |

**Corollary table (identity 9)** — put suitable values of $x,y$ into (3),(4),(7),(8):


|                             | $\cos$    | $\sin$    |
| ----------------------------- | ----------- | ----------- |
| $\left(\tfrac\pi2+x\right)$ | $-\sin x$ | $\cos x$  |
| $(\pi-x)$                   | $-\cos x$ | $\sin x$  |
| $(\pi+x)$                   | $-\cos x$ | $-\sin x$ |
| $(2\pi-x)$                  | $\cos x$  | $-\sin x$ |

(Analogous results for $\tan,\cot,\sec,\operatorname{cosec}$ follow immediately by taking quotients/reciprocals of these.)

**Tangent and cotangent sum/difference (identities 10–13)** — divide (7) by (3), numerator and denominator by $\cos x\cos y$:
\[
\boxed{\tan(x+y)=\frac{\tan x+\tan y}{1-\tan x\tan y}}\quad\text{if none of }x,y,(x+y)\text{ is an odd multiple of }\tfrac\pi2
\]
\[
\boxed{\tan(x-y)=\frac{\tan x-\tan y}{1+\tan x\tan y}}\qquad(\text{put }y\to-y\text{ above})
\]
\[
\boxed{\cot(x+y)=\frac{\cot x\cot y-1}{\cot y+\cot x}},\qquad
\boxed{\cot(x-y)=\frac{\cot x\cot y+1}{\cot y-\cot x}}\quad\text{(none of }x,y,x\pm y\text{ a multiple of }\pi)
\]

**Double angle (identities 14–16)** — the special case $y=x$ in (3),(7), and the quotient of those:
\[
\boxed{\cos 2x=\cos^2x-\sin^2x=2\cos^2x-1=1-2\sin^2x=\dfrac{1-\tan^2x}{1+\tan^2x}}\quad\left(x\neq n\pi+\tfrac\pi2\right)
\]
\[
\boxed{\sin 2x = 2\sin x\cos x = \dfrac{2\tan x}{1+\tan^2x}}\left(x\neq n\pi+\tfrac\pi2\right),\qquad
\boxed{\tan 2x=\dfrac{2\tan x}{1-\tan^2x}}\left(2x\neq n\pi+\tfrac\pi2\right)
\]

*Half-angle corollary (useful in Miscellaneous problems):* substitute $x\to x/2$ in $\cos x=1-2\sin^2\tfrac{x}{2}=2\cos^2\tfrac{x}{2}-1$:
\[
2\sin^2\frac x2 = 1-\cos x, \qquad 2\cos^2\frac x2=1+\cos x
\]

**Triple angle (identities 17–19)** — decompose $3x=2x+x$ and apply the sum formulas plus double-angle results:
\[
\boxed{\sin 3x=3\sin x-4\sin^3x}\qquad
\boxed{\cos 3x=4\cos^3x-3\cos x}\qquad
\boxed{\tan 3x=\dfrac{3\tan x-\tan^3x}{1-3\tan^2x}}\ \left(3x\neq n\pi+\tfrac\pi2\right)
\]

**Sum $\leftrightarrow$ Product (identities 20–21)** — add/subtract (3)&(4) and (7)&(8), then substitute $\theta=x+y,\ \varphi=x-y$ (so $x=\tfrac{\theta+\varphi}2,\ y=\tfrac{\theta-\varphi}2$):

*Product-to-sum (the direct output of adding/subtracting, identity 21 — a "Remark" in the source, but logically comes first):*
\[
2\cos x\cos y=\cos(x+y)+\cos(x-y),\quad
-2\sin x\sin y=\cos(x+y)-\cos(x-y),
\]
\[
2\sin x\cos y=\sin(x+y)+\sin(x-y),\quad
2\cos x\sin y=\sin(x+y)-\sin(x-y)
\]

*Sum-to-product (relabelling $\theta,\varphi\to x,y$, identity 20 — the more commonly used direction):*
\[
\boxed{\cos x+\cos y=2\cos\frac{x+y}2\cos\frac{x-y}2}\qquad
\boxed{\cos x-\cos y=-2\sin\frac{x+y}2\sin\frac{x-y}2}
\]
\[
\boxed{\sin x+\sin y=2\sin\frac{x+y}2\cos\frac{x-y}2}\qquad
\boxed{\sin x-\sin y=2\cos\frac{x+y}2\sin\frac{x-y}2}
\]

#### Worked Examples — 3.4

**Example 11 — Find $\sin15°$ (NCERT Example 11)**
\[
\sin15°=\sin(45°-30°)=\sin45°\cos30°-\cos45°\sin30°=\frac1{\sqrt2}\cdot\frac{\sqrt3}2-\frac1{\sqrt2}\cdot\frac12=\boxed{\frac{\sqrt3-1}{2\sqrt2}}
\]
*Check:* numerically $\approx0.2588$, matches $\sin15°$ ✓.

**Example 12 — Find $\tan\dfrac{13\pi}{12}$ (NCERT Example 12)**
\[
\tan\frac{13\pi}{12}=\tan\left(\pi+\frac\pi{12}\right)=\tan\frac{\pi}{12}=\tan\left(\frac\pi4-\frac\pi6\right)
=\frac{1-\tfrac1{\sqrt3}}{1+\tfrac1{\sqrt3}}=\frac{\sqrt3-1}{\sqrt3+1}=\boxed{2-\sqrt3}
\]
*(rationalised by multiplying top and bottom by $\sqrt3-1$.)*

**Example 14 — Show $\tan3x\tan2x\tan x=\tan3x-\tan2x-\tan x$ (NCERT Example 14)**
*Approach:* write $3x=2x+x$ and expand with the tangent-sum formula — no need to touch $\sin,\cos$ at all.
\[
\tan3x=\tan(2x+x)=\frac{\tan2x+\tan x}{1-\tan2x\tan x}
\ \Longrightarrow
\tan3x-\tan3x\tan2x\tan x=\tan2x+\tan x
\]
\[
\Longrightarrow\ \boxed{\tan3x\tan2x\tan x=\tan3x-\tan2x-\tan x}
\]
*Check:* purely algebraic rearrangement — no domain issue introduced beyond the usual $\tan$ exclusions.

**Example 20 — Find $\tan\dfrac\pi8$ (NCERT Example 20)**
*Approach:* $\dfrac\pi8=\dfrac12\cdot\dfrac\pi4$; use the double-angle formula for $\tan$ with $x=\pi/8,\ 2x=\pi/4$, and solve the resulting quadratic.
\[
\tan\frac\pi4=1=\frac{2\tan(\pi/8)}{1-\tan^2(\pi/8)}
\]
Let $y=\tan\tfrac\pi8$: $1-y^2=2y \Rightarrow y^2+2y-1=0 \Rightarrow y=\dfrac{-2\pm2\sqrt2}2=-1\pm\sqrt2$.
Since $\pi/8$ lies in quadrant I, $\tan\tfrac\pi8>0$, so the $-1-\sqrt2$ root is **rejected as extraneous to the sign constraint**:
\[
\boxed{\tan\frac\pi8=\sqrt2-1}
\]
*Check:* $\sqrt2-1\approx0.414>0$ ✓, matches QI.

**Miscellaneous Example 18 — $\sin x=\tfrac35,\ \cos y=-\tfrac{12}{13}$, both $x,y$ in QII; find $\sin(x+y)$**
*Approach:* find $\cos x,\sin y$ using QII signs, then apply the sum formula (7) directly — this is the payoff application of the whole section.
\[
\cos^2x=1-\tfrac9{25}=\tfrac{16}{25}\Rightarrow\cos x=-\tfrac45\ (\text{QII}),\qquad
\sin^2y=1-\tfrac{144}{169}=\tfrac{25}{169}\Rightarrow\sin y=\tfrac5{13}\ (\text{QII})
\]
\[
\sin(x+y)=\sin x\cos y+\cos x\sin y = \tfrac35\!\left(-\tfrac{12}{13}\right)+\left(-\tfrac45\right)\!\tfrac5{13} = -\tfrac{36}{65}-\tfrac{20}{65}=\boxed{-\frac{56}{65}}
\]

**Example 22 — Prove $\cos^2x+\cos^2\!\left(x+\tfrac\pi3\right)+\cos^2\!\left(x-\tfrac\pi3\right)=\tfrac32$ (NCERT Example 22)**
*Approach:* rewrite every $\cos^2(\cdot)$ using the power-reduction form $\cos^2\theta=\tfrac{1+\cos2\theta}2$ (a direct corollary of double-angle identity 14), then apply product-to-sum on the two shifted terms.
\[
\text{L.H.S.} = \frac32+\frac12\Big[\cos2x+\cos\!\left(2x+\tfrac{2\pi}3\right)+\cos\!\left(2x-\tfrac{2\pi}3\right)\Big]
\]
By the sum-to-product identity (20)(i): $\cos\!\left(2x+\tfrac{2\pi}3\right)+\cos\!\left(2x-\tfrac{2\pi}3\right)=2\cos2x\cos\tfrac{2\pi}3=2\cos2x\left(-\tfrac12\right)=-\cos2x$.
\[
\text{L.H.S.} = \frac32+\frac12\big[\cos2x-\cos2x\big]=\boxed{\frac32}=\text{R.H.S.}\qquad\blacksquare
\]

> Examples 10, 13, 15–19 and 21 in the source apply exactly these identities (co-function corollaries, product-to-sum, half-angle) to prove further trig identities and evaluate more standard-angle values; the method each time is: rewrite using the appropriate boxed formula above, simplify, and match sides — never verify only the final numeric answer without checking the algebra is reversible.

---

## Points to Ponder

> [!warning] ⚠️ The traps that actually cost marks
> - **Degree vs. radian confusion.** A bare number like $\pi$ or $2$ inside a trig function is *always* radians unless a $°$ symbol is present. Writing $\sin 2$ and meaning $\sin 2°$ is a very common, very wrong substitution.
> - **$\cos x=0$ is not "every multiple of $\pi/2$."** It is exactly the *odd* multiples: $x=(2n+1)\pi/2$. Confusing this with $\sin x=0$ ($x=n\pi$) silently drops or adds solutions in equation-solving.
> - **Periods differ across functions.** $\sin,\cos,\sec,\operatorname{cosec}$ repeat every $2\pi$; $\tan,\cot$ repeat every $\pi$ only. Reducing $\tan\left(\tfrac{19\pi}3\right)$ using a $2\pi$ period wastes a step; reducing $\sin$ using a $\pi$ period silently flips a sign.
> - **Domain exclusions come in two families, easy to swap:** $\tan,\sec$ are undefined at *odd multiples of $\pi/2$*; $\cot,\operatorname{cosec}$ are undefined at *(all) multiples of $\pi$*. Double-check which family a given function belongs to before writing "$x\neq n\pi$" vs. "$x\neq(2n+1)\pi/2$".
> - **ASTC signs come from $a,b$ being independently positive/negative** in each quadrant — derive the row for $\tan,\cot$ (both positive in I *and* III, since $\tan=b/a$ needs $a,b$ to have the *same* sign) rather than memorising a mnemonic that can be misremembered.
> - **$D°M'$ must be fully converted to a decimal degree before multiplying by $\pi/180$** — plugging minutes directly into the radian formula (instead of $M'=\tfrac M{60}°$ first) is a very common arithmetic slip (see Example 1).
> - **The tangent-sum/difference formulas have an explicit validity condition** — none of $x,y,(x\pm y)$ may be an odd multiple of $\pi/2$ (else $\tan$ itself is undefined there). Check this before applying the formula inside an identity proof, not after.
> - **A quadratic derived from a double-angle formula can produce an extraneous root**, exactly as in ordinary algebra (Example 20): always re-impose the quadrant's sign constraint on $\tan,\sin,\cos$ before accepting a root.
