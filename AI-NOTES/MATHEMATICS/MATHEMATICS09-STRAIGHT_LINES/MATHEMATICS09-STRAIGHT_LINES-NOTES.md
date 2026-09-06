
# Straight Lines

> The algebra of the simplest figure in geometry — how a *slope* and one known point (or two, or an intercept) pin down every point on a line, and how to measure a point's distance from it.

## At a glance

- **Subject:** Coordinate Geometry — NCERT Class 11 Maths, Chapter 9
- **Level:** Board / JEE-foundation
- **Prerequisites:** distance formula, section formula, area of a triangle from coordinates (§9.1 recalls these)
- **Key idea:** a line is completely fixed by its *slope* together with one more piece of data (a point, an intercept, or a second point) — the five "forms" of a line's equation in §9.3 are just this idea applied to five different kinds of given data

## Difficulty legend

⭐ recall / definitional · ⭐⭐ standard derivation or technique · ⭐⭐⭐ synthesis / multi-step application

---

## 9.1 Recall from earlier classes ⭐

Four results carry straight over from Class 10 coordinate geometry and are used constantly in this chapter.

> **Distance formula.** For \( P(x_1,y_1) \) and \( Q(x_2,y_2) \):
> \[
> \boxed{PQ=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}}
> \]

> **Section formula (internal division).** The point dividing the segment joining \((x_1,y_1)\) and \((x_2,y_2)\) internally in the ratio \(m:n\) is
> \[
> \boxed{\left(\dfrac{mx_2+nx_1}{m+n},\ \dfrac{my_2+ny_1}{m+n}\right)}
> \]
> When \(m=n\), this collapses to the **midpoint** \(\left(\dfrac{x_1+x_2}{2},\dfrac{y_1+y_2}{2}\right)\).

> **Area of a triangle.** For vertices \((x_1,y_1),(x_2,y_2),(x_3,y_3)\):
> \[
> \boxed{\text{Area}=\frac12\left|x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\right|}
> \]
> **Collinearity test:** if this area is \(0\), the three points lie on one line.

**Recomputed check** (vertices \((4,4),(3,-2),(-3,16)\)):
\[
\begin{aligned}
\text{Area} &= \tfrac12\left|4(-2-16)+3(16-4)+(-3)(4-(-2))\right|\\
&= \tfrac12\left|4(-18)+3(12)+(-3)(6)\right| = \tfrac12\left|-72+36-18\right| = \tfrac12(54) = 27
\end{aligned}
\]
Matches the textbook — confirms the formula was applied correctly, not just copied.

This chapter now builds the algebra of a *line* on top of these tools, using **slope** as the central device.

---

## 9.2 Slope of a Line ⭐⭐

**Definition (inclination).** The angle \(\theta\) that a line \(l\) makes with the positive \(x\)-direction, measured anticlockwise, is its *inclination*. By convention \(0^\circ \le \theta \le 180^\circ\). A line parallel to (or coinciding with) the \(x\)-axis has \(\theta = 0^\circ\); a vertical line has \(\theta = 90^\circ\).

> **Slope.** \( m = \tan\theta,\ \theta \ne 90^\circ \).
>
> - Slope of the \(x\)-axis is \(0\).
> - Slope of a vertical line (\(\theta = 90^\circ\)) is **undefined** — never write \(m=\tan 90^\circ\); treat vertical lines separately (see §9.3.1).

### 9.2.1 Slope from two given points ⭐⭐

For \(P(x_1,y_1),\,Q(x_2,y_2)\) on a line with \(x_1 \ne x_2\) (else the line is vertical and \(m\) doesn't exist), drop perpendiculars to build a right triangle with legs \(MQ = y_2-y_1\) and \(MP = x_2-x_1\). Two cases cover **every** possible inclination, so together they *are* the general derivation:

**Case 1 — \(\theta\) acute.** Here \(\angle MPQ = \theta\) directly, so
\[
m=\tan\theta = \frac{MQ}{MP} = \frac{y_2-y_1}{x_2-x_1}.
\]

**Case 2 — \(\theta\) obtuse.** Here \(\angle MPQ = 180^\circ-\theta\), so \(\theta = 180^\circ - \angle MPQ\) and
\[
m=\tan\theta=\tan(180^\circ-\angle MPQ)=-\tan\angle MPQ=-\frac{MQ}{MP}=-\frac{y_2-y_1}{x_1-x_2}=\frac{y_2-y_1}{x_2-x_1}.
\]

Both cases give the **same** expression, so one formula covers every non-vertical line:
\[
\boxed{m=\frac{y_2-y_1}{x_2-x_1}}
\]

### 9.2.2 Parallelism and perpendicularity in terms of slope ⭐⭐

Let \(l_1,l_2\) have inclinations \(\alpha,\beta\) and slopes \(m_1,m_2\).

- **Parallel \(\iff\) equal slopes.** \(l_1 \parallel l_2 \Rightarrow \alpha=\beta \Rightarrow \tan\alpha=\tan\beta \Rightarrow m_1=m_2\); conversely \(m_1=m_2 \Rightarrow \tan\alpha=\tan\beta\), and since \(\tan\) is one-to-one on \((0^\circ,180^\circ)\setminus\{90^\circ\}\), \(\alpha=\beta\).
  \[
  \boxed{l_1 \parallel l_2 \iff m_1=m_2}
  \]
- **Perpendicular \(\iff\) slopes are negative reciprocals.** If \(l_1\perp l_2\), then \(\beta=\alpha+90^\circ\), so \(\tan\beta=\tan(\alpha+90^\circ)=-\cot\alpha=-\dfrac{1}{\tan\alpha}\), i.e. \(m_2=-\dfrac{1}{m_1}\). The converse follows the same way in reverse.
  \[
  \boxed{l_1 \perp l_2 \iff m_1 m_2 = -1}
  \]

### 9.2.3 Angle between two lines ⭐⭐

With inclinations \(\alpha_1,\alpha_2\) (so \(m_1=\tan\alpha_1,\ m_2=\tan\alpha_2\)), the adjacent angles \(\theta,\phi\) between the lines satisfy \(\theta=\alpha_2-\alpha_1\) and \(\phi = 180^\circ-\theta\). Using the tangent-subtraction identity (valid since \(1+m_1m_2\ne 0\)):
\[
\tan\theta = \frac{m_2-m_1}{1+m_1m_2}, \qquad \tan\phi = -\tan\theta.
\]
Whichever of \(\theta,\phi\) is acute is the one usually wanted, so the **acute angle** between the two lines is

\[
\boxed{\tan\theta = \left|\frac{m_2-m_1}{1+m_1m_2}\right|,\qquad 1+m_1m_2\ne 0}
\]

> [!warning] ⚠️ Additional ⭐⭐ — when one line is vertical (gap the textbook doesn't fill here)
> The formula above needs *both* slopes to exist. If \(L_2\) is vertical (\(\theta_2=90^\circ\), slope undefined) and \(L_1\) has inclination \(\alpha_1\), the angle between them is simply \(90^\circ-\alpha_1\), i.e.
> \[
> \tan(\text{angle}) = \cot\alpha_1 = \frac{1}{m_1}.
> \]
> Recognize this case *before* reaching for the boxed formula — plugging in "\(m_2=\infty\)" is not valid algebra.

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=1.0]
  \draw[->, line width=1pt] (-2.5,0) -- (2.5,0) node[right, font=\small] {$x$};
  \draw[blue!70!black, line width=1.6pt] (-1.5,-1.2) -- (2,2.4) node[above right, font=\small, text=blue!70!black] {$L_1$};
  \draw[orange!80!black, line width=1.6pt] (-0.8,-1.5) -- (0.6,2.6) node[above, font=\small, text=orange!80!black] {$L_2$};
  \draw[green!45!black] (0.9,0) arc (0:75:0.9);
  \node[font=\small, text=green!45!black] at (0.75,0.75) {$\theta$};
  \node[below, font=\itshape\small, text=gray] at (0,-1.9) {acute angle $\theta$ between $L_1,L_2$: $\tan\theta=\left|\dfrac{m_2-m_1}{1+m_1m_2}\right|$};
\end{tikzpicture}
```

### Worked Examples — Slope

**9.2 Solved — Slopes from points and inclination (NCERT Example 1)** ⭐

*Find the slope of the line:* (a) through \((3,-2)\) and \((-1,4)\); (b) through \((3,-2)\) and \((7,-2)\); (c) through \((3,-2)\) and \((3,4)\); (d) inclination \(60^\circ\).

\[
\begin{aligned}
\text{(a)}\ m &= \frac{4-(-2)}{-1-3} = \frac{6}{-4} = -\frac32\\
\text{(b)}\ m &= \frac{-2-(-2)}{7-3} = \frac{0}{4}=0 \qquad(\text{horizontal — makes sense, both points share } y=-2)\\
\text{(c)}\ m &= \frac{4-(-2)}{3-3} = \frac{6}{0}\ \text{undefined} \qquad(\text{vertical line } x=3)\\
\text{(d)}\ m &= \tan 60^\circ = \sqrt3
\end{aligned}
\]

**9.2 Solved — Slope of the other line (NCERT Example 2)** ⭐⭐

*Given:* angle between two lines is \(\frac{\pi}{4}\); one slope is \(m_1=\frac12\). *Find:* the other slope \(m\).
*Approach:* apply the boxed angle formula and solve for \(m\) — expect **two** answers, since \(\tan\theta=\pm\tan\theta\) both satisfy \(|\cdot|\).

\[
1 = \left|\frac{m-\tfrac12}{1+\tfrac12 m}\right| \;\Longrightarrow\; \frac{m-\tfrac12}{1+\tfrac12 m}=1 \ \text{ or }\ \frac{m-\tfrac12}{1+\tfrac12 m}=-1
\]
\[
m-\tfrac12 = 1+\tfrac12 m \Rightarrow \tfrac12 m = \tfrac32 \Rightarrow m=3
\qquad\text{or}\qquad
m-\tfrac12=-1-\tfrac12 m \Rightarrow \tfrac32 m=-\tfrac12 \Rightarrow m=-\tfrac13
\]
\[
\boxed{m = 3 \text{ or } m=-\tfrac13}
\]
*Check:* both values are genuinely different lines through the same point making \(45^\circ\) with the given line — one on each side — so two answers is the geometrically correct outcome, not an error.

**9.2 Solved — Perpendicularity gives an unknown coordinate (NCERT Example 3)** ⭐⭐

*Given:* line through \((-2,6)\) and \((4,8)\) is perpendicular to the line through \((8,12)\) and \((x,24)\). *Find:* \(x\).

\[
m_1=\frac{8-6}{4-(-2)}=\frac26=\frac13,\qquad m_2=\frac{24-12}{x-8}=\frac{12}{x-8}
\]
*Approach:* perpendicular \(\Rightarrow m_1m_2=-1\).
\[
\frac13\cdot\frac{12}{x-8}=-1 \;\Longrightarrow\; \frac{4}{x-8}=-1 \;\Longrightarrow\; x-8=-4 \;\Longrightarrow\; \boxed{x=4}
\]

---

## 9.3 Various Forms of the Equation of a Line ⭐⭐

The general question: given some data about a line, write the algebraic condition every point \((x,y)\) on it must satisfy.

### 9.3.1 Horizontal and vertical lines ⭐

A horizontal line at distance \(a\) from the \(x\)-axis: \(y=a\) (above) or \(y=-a\) (below). A vertical line at distance \(b\) from the \(y\)-axis: \(x=b\) (right) or \(x=-b\) (left). These are the cases §9.2's slope formula *can't* reach — handle them directly, never by forcing a slope into the point-slope formula.

**9.3 Solved — Lines through a point parallel to the axes (NCERT Example 4)** ⭐

Through \((-2,3)\): parallel to \(x\)-axis \(\Rightarrow y=3\). Parallel to \(y\)-axis \(\Rightarrow x=-2\).

### 9.3.2 Point-slope form ⭐⭐

Let \(P_0(x_0,y_0)\) be a fixed point on line \(L\) with slope \(m\), and \(P(x,y)\) any other point on \(L\). By the two-point slope formula (§9.2.1) applied to \(P_0\) and \(P\):
\[
m = \frac{y-y_0}{x-x_0} \;\Longrightarrow\; \boxed{y-y_0 = m(x-x_0)}
\]

**9.3 Solved — Point-slope form (NCERT Example 5)** ⭐

Through \((-2,3)\) with slope \(-4\): \(y-3=-4(x+2) \Rightarrow y-3=-4x-8 \Rightarrow \boxed{4x+y+5=0}\).

### 9.3.3 Two-point form ⭐⭐

Let \(L\) pass through \(P_1(x_1,y_1)\) and \(P_2(x_2,y_2)\); let \(P(x,y)\) be a general point on \(L\). Since \(P_1,P_2,P\) are collinear, slope of \(P_1P\) = slope of \(P_1P_2\) (this is exactly the §9.1 collinearity idea, restated as equal slopes rather than zero area):
\[
\frac{y-y_1}{x-x_1}=\frac{y_2-y_1}{x_2-x_1} \;\Longrightarrow\; \boxed{y-y_1=\frac{y_2-y_1}{x_2-x_1}(x-x_1)}
\]

**9.3 Solved — Two-point form (NCERT Example 6)** ⭐

Through \((1,-1)\) and \((3,5)\): \(y-(-1)=\dfrac{5-(-1)}{3-1}(x-1) = 3(x-1) \Rightarrow y+1=3x-3 \Rightarrow \boxed{-3x+y+4=0}\).

### 9.3.4 Slope-intercept form ⭐⭐

**Case I — \(y\)-intercept \(c\) known.** \(L\) has slope \(m\) and passes through the fixed point \((0,c)\). By point-slope form: \(y-c=m(x-0)\), i.e.
\[
\boxed{y=mx+c}
\]
(\(c\) is signed: positive above the origin, negative below.)

**Case II — \(x\)-intercept \(d\) known.** By the same method through \((d,0)\):
\[
\boxed{y=m(x-d)}
\]

**9.3 Solved — Slope-intercept, both cases (NCERT Example 7)** ⭐

Given \(\tan\theta=\frac12\) (so \(m=\frac12\)): (i) \(y\)-intercept \(-\frac32\): \(y=\frac12x-\frac32 \Rightarrow \boxed{2y-x+3=0}\). (ii) \(x\)-intercept \(4\): \(y=\frac12(x-4) \Rightarrow \boxed{2y-x+4=0}\).

### 9.3.5 Intercept form ⭐⭐

\(L\) meets the axes at \((a,0)\) and \((0,b)\). Substitute these two points into the two-point form (§9.3.3):
\[
y-0=\frac{b-0}{0-a}(x-a) \;\Longrightarrow\; ay=-bx+ab \;\Longrightarrow\; \boxed{\frac{x}{a}+\frac{y}{b}=1}
\]

**9.3 Solved — Intercept form (NCERT Example 8)** ⭐

Intercepts \(-3\) and \(2\): \(\dfrac{x}{-3}+\dfrac{y}{2}=1\). Multiply by \(6\): \(-2x+3y=6 \Rightarrow \boxed{2x-3y+6=0}\).

> **General linear equation.** Any equation \(Ax+By+C=0\) (\(A,B\) not both zero) is called the *general linear equation* — it's the common target all five forms above reduce to, and it's the form the distance formula in §9.4 requires.

---

## 9.4 Distance of a Point From a Line ⭐⭐⭐

Let \(L:Ax+By+C=0\) meet the axes at \(Q\left(-\frac{C}{A},0\right)\) and \(R\left(0,-\frac{C}{B}\right)\), and let \(d\) be the perpendicular distance from \(P(x_1,y_1)\) to \(L\) (the foot is \(M\)). This derivation is a direct **reuse of the §9.1 area-of-a-triangle formula** — worth noticing, since it shows the chapter's tools aren't isolated facts but build on each other.

Two expressions for the area of \(\triangle PQR\) must agree:
\[
\text{area}(\triangle PQR)=\tfrac12\,PM\cdot QR \;\Longrightarrow\; PM=\frac{2\,\text{area}(\triangle PQR)}{QR}
\]
Direct computation (using the coordinates of \(P,Q,R\)) gives \(2\,\text{area}(\triangle PQR)=\left|\frac{C}{AB}\right|\cdot|Ax_1+By_1+C|\) and \(QR=\left|\frac{C}{AB}\right|\sqrt{A^2+B^2}\). Dividing:
\[
\boxed{d=\frac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}}
\]

> [!warning] ⚠️ Watch out
> The line **must** be in general form \(Ax+By+C=0\) before you substitute. Plugging \((x_1,y_1)\) directly into a slope-intercept equation \(y=mx+c\) gives the wrong scale — rewrite it as \(mx-y+c=0\) first (\(A=m,\ B=-1,\ C=c\)).

**9.4 Solved — Distance of a point from a line (NCERT Example 9)** ⭐⭐

Distance of \((3,-5)\) from \(3x-4y-26=0\): here \(A=3,B=-4,C=-26\).
\[
d=\frac{|3(3)+(-4)(-5)-26|}{\sqrt{3^2+(-4)^2}}=\frac{|9+20-26|}{5}=\frac{3}{5}
\]

### 9.4.1 Distance between two parallel lines ⭐⭐

Parallel lines share slope \(m\): \(y=mx+c_1\) and \(y=mx+c_2\). Line (1) meets the \(x\)-axis at \(A\left(-\frac{c_1}{m},0\right)\); the distance between the lines equals the perpendicular distance from \(A\) to line (2). Substituting into the point-to-line formula and simplifying:
\[
\boxed{d=\frac{|c_1-c_2|}{\sqrt{1+m^2}}} \qquad\text{or, in general form } Ax+By+C_1=0,\ Ax+By+C_2=0:\qquad \boxed{d=\frac{|C_1-C_2|}{\sqrt{A^2+B^2}}}
\]

**9.4 Solved — Distance between parallel lines (NCERT Example 10)** ⭐

\(3x-4y+7=0\) and \(3x-4y+5=0\): \(A=3,B=-4,C_1=7,C_2=5\). \(d=\dfrac{|7-5|}{\sqrt{3^2+4^2}}=\dfrac{2}{5}\).

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=1.0]
  \draw[->, line width=1pt] (-1,0) -- (5,0) node[right, font=\small] {$x$};
  \draw[->, line width=1pt] (0,-1) -- (0,4) node[above, font=\small] {$y$};
  \draw[blue!70!black, line width=1.6pt] (-0.5,3.5) -- (4.5,-0.5) node[below right, font=\small, text=blue!70!black] {$L$};
  \coordinate (P) at (3,2.6);
  \fill[red!75!black] (P) circle (2.2pt);
  \node[above, font=\small, text=red!75!black] at (P) {$P(x_1,y_1)$};
  \coordinate (M) at (2.05,1.45);
  \draw[dashed, green!45!black, line width=1.2pt] (P) -- (M);
  \node[right, font=\small, text=green!45!black] at (2.6,2.05) {$d$};
  \fill[green!45!black] (M) circle (2pt);
  \node[below, font=\itshape\small, text=gray] at (2,-0.8) {perpendicular distance $d$ from $P$ to $L: Ax+By+C=0$};
\end{tikzpicture}
```

---

## Miscellaneous Examples ⭐⭐⭐

These combine two or more of the tools above — the payoff for having derived them rather than memorized them in isolation.

**Misc. Solved — Concurrency of three lines (NCERT Misc. Example 11)** ⭐⭐

*Given:* \(2x+y-3=0\), \(5x+ky-3=0\), \(3x-y-2=0\) are concurrent. *Find:* \(k\).
*Approach:* solve any **two** of the lines for their intersection point, then substitute into the third — concurrency means all three pass through one point, so that substitution must hold.

Solving \(2x+y=3\) and \(3x-y=2\) (add): \(5x=5 \Rightarrow x=1,\ y=1\). Substitute \((1,1)\) into the second line: \(5(1)+k(1)-3=0 \Rightarrow \boxed{k=-2}\).

**Misc. Solved — Distance measured along a slanted direction (NCERT Misc. Example 12)** ⭐⭐⭐

*Given:* find the distance of \(4x-y=0\) from \(P(4,1)\), measured **along** the line through \(P\) inclined at \(135^\circ\) (not the perpendicular).
*Approach:* "distance along a given direction" means find where that direction's line meets the given line, then take the ordinary distance between the two points.

Second line: slope \(\tan135^\circ=-1\), through \((4,1)\): \(y-1=-(x-4) \Rightarrow x+y-5=0\).
Intersection with \(4x-y=0\) (i.e. \(y=4x\)): \(x+4x-5=0 \Rightarrow x=1,\ y=4\), so \(Q=(1,4)\).
\[
PQ=\sqrt{(1-4)^2+(4-1)^2}=\sqrt{9+9}=3\sqrt2
\]

**Misc. Solved — Image (reflection) of a point in a line (NCERT Misc. Example 13)** ⭐⭐⭐

*Given:* reflect \(P(1,2)\) in the line \(x-3y+4=0\). *Find:* the image \(Q(h,k)\).
*Approach:* treating the line as a plane mirror gives **two independent conditions** — both are needed, neither alone pins down \(Q\):

1. the line is the *perpendicular bisector* of \(PQ\) \(\Rightarrow\) slope of \(PQ\) is the negative reciprocal of the line's slope \(\left(\frac13\right)\);
2. the *midpoint* of \(PQ\) lies on the line.

\[
\text{(1): } \frac{k-2}{h-1}=-3 \;\Rightarrow\; 3h+k=5
\qquad
\text{(2): } \frac{h+1}{2}-3\left(\frac{k+2}{2}\right)+4=0 \;\Rightarrow\; h-3k=-3
\]
Solving simultaneously: from (1), \(k=5-3h\); substitute into (2): \(h-3(5-3h)=-3 \Rightarrow 10h=12 \Rightarrow h=\frac65\), then \(k=5-3\left(\frac65\right)=\frac75\).
\[
\boxed{Q=\left(\tfrac65,\tfrac75\right)}
\]

**Misc. Solved — Area of a triangle formed by three lines (NCERT Misc. Example 14)** ⭐⭐⭐ *(general result)*

*Given:* lines \(y=m_1x+c_1\), \(y=m_2x+c_2\), and \(x=0\). *Show:* the enclosed triangle has area \(\dfrac{(c_1-c_2)^2}{2|m_1-m_2|}\).

Each of the first two lines meets \(x=0\) at \((0,c_1)\) and \((0,c_2)\) respectively — two vertices found immediately. The third vertex is the intersection of the two slanted lines: solving \(m_1x+c_1=m_2x+c_2\) gives
\[
x=\frac{c_2-c_1}{m_1-m_2},\qquad y=\frac{m_1c_2-m_2c_1}{m_1-m_2}
\]
Substituting all three vertices into the §9.1 area formula and simplifying:
\[
\boxed{\text{Area}=\frac{(c_1-c_2)^2}{2|m_1-m_2|}}
\]
This is already the *general* case (no special-case version to reduce it to) — note it purely as a reusable pattern: "a triangle cut off by two lines and an axis" always reduces to this same computation.

**Misc. Solved — A line bisected between two other lines (NCERT Misc. Example 15)** ⭐⭐⭐

*Given:* a line's segment between \(5x-y+4=0\) and \(3x+4y-4=0\) is bisected at \((1,5)\). *Find:* its equation.
*Approach:* parametrize the two unknown endpoints using each given line's own equation, then apply the midpoint condition.

Let the endpoints be \((\alpha_1,\beta_1)\) on the first line and \((\alpha_2,\beta_2)\) on the second: \(\beta_1=5\alpha_1+4\), \(\beta_2=\frac{4-3\alpha_2}{4}\). Midpoint conditions \(\alpha_1+\alpha_2=2\) and \(\beta_1+\beta_2=10\) give (after clearing denominators) \(20\alpha_1-3\alpha_2=20\). Solving with \(\alpha_2=2-\alpha_1\):
\[
20\alpha_1-3(2-\alpha_1)=20 \Rightarrow 23\alpha_1=26 \Rightarrow \alpha_1=\frac{26}{23},\quad \beta_1=5\left(\frac{26}{23}\right)+4=\frac{222}{23}
\]
Line through \((1,5)\) and \(\left(\frac{26}{23},\frac{222}{23}\right)\): slope \(=\dfrac{\frac{222}{23}-5}{\frac{26}{23}-1}=\dfrac{107/23}{3/23}=\dfrac{107}{3}\), giving
\[
y-5=\frac{107}{3}(x-1) \;\Longrightarrow\; \boxed{107x-3y-92=0}
\]

**Misc. Solved — Locus equidistant from two lines (NCERT Misc. Example 16)** ⭐⭐⭐

*Given:* \((h,k)\) is equidistant from \(3x-2y=5\) and \(3x+2y=5\). *Show:* the locus is a straight line.

\[
\frac{|3h-2k-5|}{\sqrt{13}}=\frac{|3h+2k-5|}{\sqrt{13}} \;\Longrightarrow\; 3h-2k-5=\pm(3h+2k-5)
\]
The \(+\) sign forces \(k=0\); the \(-\) sign forces \(h=\frac53\). Both \(y=0\) and \(x=\frac53\) are straight lines, so the full locus (their union) is a pair of straight lines — each branch individually is a straight line, confirming the claim.

---

## Points to Ponder

> **Watch out — slope is not always \(\tan\theta\) plugged in blindly.** For a vertical line, "slope" simply doesn't exist. Any formula built from \(m\) (point-slope, angle-between-lines, parallel/perpendicular tests) needs a vertical-line special case handled separately (§9.3.1, and the vertical-line note in §9.2.3) — never write \(m=\infty\).

> **Watch out — the acute-angle formula hides a \(\pm\).** \(\tan\theta=\left|\frac{m_2-m_1}{1+m_1m_2}\right|\) is one equation with an absolute value, not two different theorems. Example 2's two answers (\(m=3\) or \(-\frac13\)) both come from resolving that one \(\pm\) — expect twin answers whenever you square or absolute-value your way to a slope.

> **Key idea — point-slope and two-point forms are the same idea twice.** Both derivations rest on nothing more than "these three points are collinear," expressed as equal slopes (§9.1's collinearity test, restated). Seeing them as one idea applied twice, not two separate formulas to memorize, is what makes the intercept form (§9.3.5) easy to re-derive from scratch if you forget it.

> **Watch out — reflection needs *two* conditions, not one.** Finding the image of a point in a line requires *both* perpendicularity of the join **and** the midpoint lying on the line (Misc. Example 13). Using only one of the two conditions under-determines the answer.

> **Watch out — the distance formula needs general form.** \(d=\dfrac{|Ax_1+By_1+C|}{\sqrt{A^2+B^2}}\) only works once the line is written as \(Ax+By+C=0\). Forgetting to convert from \(y=mx+c\) first is the single most common arithmetic slip in this section.

> **Key idea — concurrency is a two-step check, not an assumption.** Solve any two of three lines for their intersection, then *substitute* into the third to confirm it passes through that same point (Misc. Example 11) — don't assume three lines are concurrent just because a problem says so without verifying.

See **REVISION-MINDMAP** for the concept roadmap and a per-problem-type decision checklist, and **GLOSSARY** for the full formula quick-reference table.
