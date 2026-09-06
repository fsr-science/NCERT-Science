
# Introduction to Three-Dimensional Geometry — Class 11 Maths (NCERT Ch. 11)

> How do you pin down the *exact* location of a point that isn't confined to a flat sheet of paper — the tip of a hanging bulb, the blade-tip of a ceiling fan, an aircraft mid-flight? This chapter builds the coordinate system that answers that question in space.

## At a glance

- **Subject:** Mathematics — Coordinate Geometry
- **Level:** Class 11 Board / JEE-Mains foundation
- **Prerequisites:** 2D Cartesian coordinates, the Pythagorean theorem, basic algebraic expansion
- **Key idea:** A point in space needs exactly **three** signed distances (from three mutually perpendicular planes) to be located uniquely — everything else in the chapter (octants, distance, loci) follows from that one fact.
- **Where this sits in the bigger picture:** this is the short, purely descriptive introduction — octants, coordinates, distance. Direction cosines/ratios and the equations of lines and planes in space build on it later.

> **Historical note (adapted):** Descartes (1637) worked out coordinate geometry only in the plane. It was Bernoulli's 1715 letter to Leibniz that introduced the three coordinate planes used today, Parent's 1700 paper that first treated solid analytic geometry systematically, and Euler (1748) who organized 3D coordinate geometry into the form this chapter still follows.

## Concept Roadmap

*(See the companion REVISION-MINDMAP file for the full flowchart tying every section together.)*

---

## 11.1 The Central Idea ⭐

In the plane, one number along each of two perpendicular axes fixes a point. In space, a third mutually perpendicular direction is needed — think of the corner of a room: the floor plus two adjacent walls give three perpendicular reference planes, and the perpendicular distance from each one is one coordinate of the point. So **a point in space always corresponds to an ordered triplet \((x, y, z)\)** of real numbers, and conversely.

## 11.2 Coordinate Axes, Coordinate Planes, and Octants ⭐⭐

Three planes intersecting at a single point \(O\), mutually perpendicular to each other, intersect pairwise along three lines — the **\(x\)-, \(y\)-, and \(z\)-axes**. The three planes themselves are the **XY-, YZ-, and ZX-coordinate planes**, and \(O\) is the **origin**.

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, <={Stealth[length=7pt,width=5pt]}, thick, scale=1.0]
  \draw[fill=blue!8, draw=none] (0,0) -- (2.6,0) -- (1.2,-1.0) -- (-1.4,-1.0) -- cycle;
  \draw[<->, line width=1pt] (-1.9,0) -- (2.6,0);
  \node[right, font=\small] at (2.6,0) {$Y$};
  \node[left, font=\small] at (-1.9,0) {$Y'$};
  \draw[<->, line width=1pt] (0,-1.7) -- (0,2.3);
  \node[above, font=\small] at (0,2.3) {$Z$};
  \node[below, font=\small] at (0,-1.7) {$Z'$};
  \draw[<->, line width=1pt] (1.0,0.7) -- (-1.4,-1.0);
  \node[above right, font=\small] at (1.0,0.7) {$X'$};
  \node[below left, font=\small] at (-1.4,-1.0) {$X$};
  \fill (0,0) circle (1.6pt);
  \node[above left, font=\small] at (0,0) {$O$};
  \node[below, font=\itshape\small, text=gray] at (0,-2.2) {three mutually perpendicular planes meet at $O$; their lines of intersection are the $x$, $y$, $z$-axes (the shaded strip hints at the $XY$-plane)};
\end{tikzpicture}
```

**Sign convention (with the XOY plane as the page and OZ vertical):** up along \(OZ\) is positive, down along \(OZ'\) is negative; right of the \(ZX\)-plane along \(OY\) is positive, left along \(OY'\) is negative; toward the reader along \(OX\) is positive, away along \(OX'\) is negative.

**Octants.** The three coordinate planes cut space into **eight octants**, named by which side of each axis they fall on (e.g. \(XOYZ\), \(X'OYZ\), …) and numbered I–VIII. Which octant a point lies in is completely determined by the *signs* of its \((x,y,z)\):


| Octant | I | II | III | IV | V  | VI | VII | VIII |
| -------- | --- | ---- | ----- | ---- | ---- | ---- | ----- | ------ |
| \(x\)  | + | − | −  | +  | +  | − | −  | +    |
| \(y\)  | + | +  | −  | − | +  | +  | −  | −   |
| \(z\)  | + | +  | +   | +  | − | − | −  | −   |

> **Watch out:** memorizing this table by rote invites mistakes. It's faster and more reliable to *build* the octant number by walking the sign of \(x\), then \(y\), then \(z\) — see the decision flowchart in the REVISION-MINDMAP file.

**Example 2 — Locate two points by sign pattern *(NCERT)*** ⭐

- **Given:** points \((-3,1,2)\) and \((-3,1,-2)\).
- **Find:** which octant each lies in.
- **Approach:** read the sign triplet and match it against the table.
- **Work:** \((-3,1,2)\) has signs \((-,+,+)\), which is octant **II**. \((-3,1,-2)\) has signs \((-,+,-)\), which is octant **VI**.
- **Check:** both triplets are read off the same table column-by-column with no arithmetic to slip on — a quick re-scan of the table confirms II and VI are the only columns matching each pattern.

## 11.3 Coordinates of a Point in Space ⭐⭐

Given a point \(P\), drop a perpendicular \(PM\) onto the XY-plane, then drop a perpendicular \(ML\) from \(M\) onto the \(x\)-axis. Then \(OL=x\), \(LM=y\), \(MP=z\) are the point's \(x\)-, \(y\)-, and \(z\)-coordinates. Equivalently — and more useful for construction — draw three planes through \(P\) parallel to the coordinate planes; they meet the axes at \(A\), \(B\), \(C\) with \(OA=x\), \(OB=y\), \(OC=z\), and the resulting box has \(P\) as its far corner.

```tikz
\usetikzlibrary{arrows.meta}
\begin{tikzpicture}[>={Stealth[length=7pt,width=5pt]}, thick, scale=1.0]
  \draw[->, line width=1pt] (0,0) -- (-0.95,-0.66) node[below left, font=\small] {$X$};
  \draw[->, line width=1pt] (0,0) -- (3.0,0) node[right, font=\small] {$Y$};
  \draw[->, line width=1pt] (0,0) -- (0,2.3) node[above, font=\small] {$Z$};
  \draw (0,0) -- (-0.715,-0.494);
  \draw (0,0) -- (2.4,0);
  \draw (0,0) -- (0,1.9);
  \draw (-0.715,-0.494) -- (1.685,-0.494);
  \draw (-0.715,-0.494) -- (-0.715,1.406);
  \draw (2.4,0) -- (1.685,-0.494);
  \draw (2.4,0) -- (2.4,1.9);
  \draw (0,1.9) -- (2.4,1.9);
  \draw (0,1.9) -- (-0.715,1.406);
  \draw[dashed, gray] (1.685,-0.494) -- (1.685,1.406);
  \draw[dashed, gray] (-0.715,1.406) -- (1.685,1.406);
  \draw[dashed, gray] (2.4,1.9) -- (1.685,1.406);
  \fill (0,0) circle (1.4pt); \node[above right, font=\small] at (0,0) {$O$};
  \fill (-0.715,-0.494) circle (1.4pt); \node[below, font=\small] at (-0.715,-0.494) {$A$};
  \fill (2.4,0) circle (1.4pt); \node[below, font=\small] at (2.4,0) {$B$};
  \fill (0,1.9) circle (1.4pt); \node[left, font=\small] at (0,1.9) {$C$};
  \fill (1.685,-0.494) circle (1.4pt); \node[below, font=\small] at (1.685,-0.494) {$D$};
  \fill (-0.715,1.406) circle (1.4pt); \node[left, font=\small] at (-0.715,1.406) {$F$};
  \fill (2.4,1.9) circle (1.4pt); \node[right, font=\small] at (2.4,1.9) {$E$};
  \fill[blue!70!black] (1.685,1.406) circle (1.8pt); \node[above right, font=\small, text=blue!70!black] at (1.685,1.406) {$P(x,y,z)$};
  \node[below, font=\itshape\small, text=gray] at (0.8,-1.3) {$OA=x,\ OB=y,\ OC=z$; planes through $A,B,C$ parallel to the coordinate planes meet at $P$ (dashed edges are hidden behind the box)};
\end{tikzpicture}
```

> **Key idea:** \(x\), \(y\), \(z\) are the *perpendicular distances of \(P\) from the YZ-, ZX-, and XY-planes respectively* — not distances from the axes. This is the single most common point of confusion in the chapter.

**Named special cases (domain/notation discipline):**


| Location         | Coordinate form |
| ------------------ | ----------------- |
| Origin           | \((0,0,0)\)     |
| On the\(x\)-axis | \((x,0,0)\)     |
| On the\(y\)-axis | \((0,y,0)\)     |
| On the\(z\)-axis | \((0,0,z)\)     |
| In the XY-plane  | \((x,y,0)\)     |
| In the YZ-plane  | \((0,y,z)\)     |
| In the ZX-plane  | \((x,0,z)\)     |

**Example 1 — Reading a coordinate off the construction box *(NCERT)*** ⭐

- **Given:** \(P(2,4,5)\), using the box construction \(O,A,B,C,D,E,F,P\) above.
- **Find:** the coordinates of \(F\) (the corner in the ZX-plane, i.e. with \(y=0\)).
- **Approach:** \(F\) lies in the ZX-plane, so its distance measured along \(OY\) is zero — only the \(y\)-coordinate changes, \(x\) and \(z\) are inherited from \(P\).
- **Work:** \(F=(2,0,5)\).
- **Check:** \(F\) should satisfy the ZX-plane form \((x,0,z)\) from the table above — it does.

## 11.4 Distance Between Two Points ⭐⭐⭐

This is the chapter's workhorse result: a direct 3D generalization of the 2D distance formula, proved with two applications of Pythagoras.

**Derivation (general case).** Let \(P(x_1,y_1,z_1)\) and \(Q(x_2,y_2,z_2)\) be any two points. Draw planes through \(P\) and \(Q\) parallel to the coordinate planes; they enclose a rectangular box with \(PQ\) as a space diagonal. Let \(A\) and \(N\) be the box corners such that \(P \to A \to N \to Q\) traces three mutually perpendicular edges, with
\[
PA = y_2-y_1,\qquad AN = x_2-x_1,\qquad NQ = z_2-z_1.
\]

```tikz
\begin{tikzpicture}[thick, scale=1.0]
  \draw (0,0) -- (2.4,0);
  \draw (2.4,0) -- (1.52,-0.608);
  \draw (1.52,-0.608) -- (1.52,1.292);
  \draw[dashed, gray] (2.4,0) -- (1.52,1.292);
  \draw[dashed, blue!70!black, line width=1.1pt] (0,0) -- (1.52,1.292);
  \fill (0,0) circle (1.6pt); \node[below, font=\small] at (0,0) {$P(x_1,y_1,z_1)$};
  \fill (2.4,0) circle (1.4pt); \node[below, font=\small] at (2.4,0) {$A$};
  \fill (1.52,-0.608) circle (1.4pt); \node[below, font=\small] at (1.52,-0.608) {$N$};
  \fill[blue!70!black] (1.52,1.292) circle (1.6pt); \node[above, font=\small] at (1.52,1.292) {$Q(x_2,y_2,z_2)$};
  \node[font=\small] at (2.15,0.18) {$90^\circ$};
  \node[font=\small] at (1.72,-0.45) {$90^\circ$};
  \node[below, font=\itshape\small, text=gray] at (0.8,-1.1) {$PA=y_2-y_1$, $AN=x_2-x_1$, $NQ=z_2-z_1$; the space diagonal $PQ$ (blue, dashed) is the distance being derived};
\end{tikzpicture}
```

Step 1 — triangle \(ANQ\) has a right angle at \(N\):
\[
AQ^2 = AN^2 + NQ^2.
\]
Step 2 — triangle \(PAQ\) has a right angle at \(A\):
\[
PQ^2 = PA^2 + AQ^2 = PA^2 + AN^2 + NQ^2.
\]
Step 3 — substitute:
\[
\boxed{PQ=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}}
\]

**Special case** — distance from the origin (\(x_1=y_1=z_1=0\)):
\[
\boxed{OQ=\sqrt{x_2^{\,2}+y_2^{\,2}+z_2^{\,2}}}
\]

**Example 3 — Plain distance *(NCERT)*** ⭐

- **Given:** \(P(1,-3,4)\), \(Q(-4,1,2)\).
- **Find:** \(PQ\).
- **Work:** \(PQ=\sqrt{(-4-1)^2+(1+3)^2+(2-4)^2}=\sqrt{25+16+4}=\sqrt{45}=3\sqrt5\) units.
- **Check:** \(3\sqrt5\approx6.7\), which is a plausible size for coordinates spanning a range of about 5 units in each axis — no sign was dropped since every term is squared.

**Example 4 — Collinearity test *(NCERT)*** ⭐⭐

- **Given:** \(P(-2,3,5)\), \(Q(1,2,3)\), \(R(7,0,-1)\).
- **Find:** are \(P,Q,R\) collinear?
- **Approach:** three points are collinear exactly when the *sum of the two shorter distances equals the longest* — i.e. one point lies between the other two on a straight line.
- **Work:** \(PQ=\sqrt{9+1+4}=\sqrt{14}\); \(QR=\sqrt{36+4+16}=\sqrt{56}=2\sqrt{14}\); \(PR=\sqrt{81+9+36}=\sqrt{126}=3\sqrt{14}\). Since \(PQ+QR=\sqrt{14}+2\sqrt{14}=3\sqrt{14}=PR\), the points are collinear.
- **Check:** all three distances came out as multiples of \(\sqrt{14}\) — a strong internal consistency signal that the arithmetic is right, not a coincidence to ignore.

**Example 5 — Classifying a triangle *(NCERT, with a sharper right-angle test)*** ⭐⭐⭐

- **Given:** \(A(3,6,9)\), \(B(10,20,30)\), \(C(25,-41,5)\).
- **Find:** is \(\triangle ABC\) right-angled?
- **Approach:** compute all three squared side lengths, then compare **only** the *largest* squared side against the sum of the other two — the largest side is the only one that could possibly be a hypotenuse, since the angle opposite it is the triangle's largest angle. If that one comparison fails, no vertex can have a right angle.
- **Work:** \(AB^2=7^2+14^2+21^2=49+196+441=686\); \(BC^2=15^2+61^2+25^2=225+3721+625=4571\); \(CA^2=22^2+47^2+4^2=484+2209+16=2709\). The largest is \(BC^2=4571\), but \(CA^2+AB^2=2709+686=3395\neq4571\).
- **Check:** since the *only* candidate hypotenuse relation fails, the triangle is **not** right-angled at any vertex — no need to test the other two combinations separately.

**Example 6 — Equation of a locus *(NCERT)*** ⭐⭐

- **Given:** \(A(3,4,5)\), \(B(-1,3,-7)\); \(P(x,y,z)\) satisfies \(PA^2+PB^2=2k^2\).
- **Find:** the equation this condition places on \(x,y,z\).
- **Approach:** write both squared distances in full, add, and simplify — this expands to a genuinely quadratic equation (a sphere), unlike \(PA=PB\) (see the Quick Reference).
- **Work:**
  \[
  (x-3)^2+(y-4)^2+(z-5)^2+(x+1)^2+(y-3)^2+(z+7)^2=2k^2
  \]
  \[
  \boxed{2x^2+2y^2+2z^2-4x-14y+4z=2k^2-109}
  \]
- **Check:** every squared binomial was expanded independently and the constant terms collected once at the end (\(9+16+25+1+9+49=109\)) — re-adding them confirms \(109\).

## Miscellaneous Examples ⭐⭐⭐

**Example 7 — Parallelogram, but not a rectangle *(NCERT, with a stronger proof of "parallelogram")*** ⭐⭐⭐

- **Given:** \(A(1,2,3)\), \(B(-1,-2,-1)\), \(C(2,3,2)\), \(D(4,7,6)\).
- **Find:** show \(ABCD\) is a parallelogram but not a rectangle.
- **Approach:** \(AB=CD\) and \(BC=DA\) is the textbook's check, but *equal opposite sides alone does not guarantee a parallelogram in 3D* — the four points might not even be coplanar. The genuinely sufficient test is that the **diagonals bisect each other** (their midpoints coincide), which also forces coplanarity.
- **Work:** \(AB=\sqrt{4+16+16}=6\), \(BC=\sqrt{9+25+9}=\sqrt{43}\), \(CD=\sqrt{4+16+16}=6\), \(DA=\sqrt{9+25+9}=\sqrt{43}\) — opposite sides match. Midpoint of \(AC=\left(\tfrac{3}{2},\tfrac{5}{2},\tfrac{5}{2}\right)\); midpoint of \(BD=\left(\tfrac{3}{2},\tfrac{5}{2},\tfrac{5}{2}\right)\) — the diagonals do bisect each other, so \(ABCD\) is confirmed a genuine (coplanar) parallelogram. For the rectangle check: \(AC=\sqrt{1+1+1}=\sqrt3\), \(BD=\sqrt{25+81+49}=\sqrt{155}\); since \(AC\neq BD\), the diagonals are unequal and \(ABCD\) is **not** a rectangle.
- **Check:** a rectangle's diagonals must be equal *in addition to* bisecting each other — here they bisect each other but aren't equal, which is exactly "parallelogram, not rectangle."

**Example 8 — Perpendicular-bisector plane *(NCERT)*** ⭐⭐

- **Given:** \(A(3,4,-5)\), \(B(-2,1,4)\); \(P(x,y,z)\) satisfies \(PA=PB\).
- **Find:** the equation of the set of such points \(P\).
- **Approach:** square both sides once (never leave a bare radical), and expect the pure-quadratic terms to cancel, since \(PA=PB\) describes a *plane*, not a sphere.
- **Work:**
  \[
  (x-3)^2+(y-4)^2+(z+5)^2=(x+2)^2+(y-1)^2+(z-4)^2
  \]
  \[
  \boxed{10x+6y-18z-29=0}
  \]
- **Check:** the \(x^2,y^2,z^2\) terms did cancel as expected, leaving a genuinely linear (planar) equation — this plane is exactly the perpendicular bisector plane of segment \(AB\).

**Example 9 — Centroid, solving backward *(NCERT)*** ⭐⭐

- **Given:** centroid \(G(1,1,1)\) of \(\triangle ABC\); \(A(3,-5,7)\), \(B(-1,7,-6)\).
- **Find:** \(C\).
- **Approach:** the centroid formula (derived in §11.5 below) applies component-by-component; solve one linear equation per coordinate.
- **Work:** \(\dfrac{3-1+x}{3}=1\Rightarrow x=1\); \(\dfrac{-5+7+y}{3}=1\Rightarrow y=1\); \(\dfrac{7-6+z}{3}=1\Rightarrow z=2\). So \(C=(1,1,2)\).
- **Check:** substituting \(C=(1,1,2)\) back — \(\left(\tfrac{3-1+1}{3},\tfrac{-5+7+1}{3},\tfrac{7-6+2}{3}\right)=(1,1,1)\) — reproduces the given centroid exactly.

## 11.5 Midpoint and Centroid Formulas (New — fills a gap the chapter needs but never states) ⭐⭐

Example 9 above already needs the centroid formula, and the chapter's own Miscellaneous Exercise (fourth vertex of a parallelogram, medians of a triangle, centroid components) needs both midpoint and centroid — neither is actually derived in the chapter text. Since \(x\), \(y\), \(z\) are independent perpendicular distances from the three coordinate planes (§11.3), any point dividing a segment, or averaging several points, does so **the same way in each coordinate separately** — the familiar 1D/2D formulas simply repeat, once per axis.

**Midpoint** of \(P_1(x_1,y_1,z_1)\) and \(P_2(x_2,y_2,z_2)\):
\[
\boxed{M=\left(\dfrac{x_1+x_2}{2},\ \dfrac{y_1+y_2}{2},\ \dfrac{z_1+z_2}{2}\right)}
\]

**Centroid** of a triangle with vertices \((x_1,y_1,z_1)\), \((x_2,y_2,z_2)\), \((x_3,y_3,z_3)\):
\[
\boxed{G=\left(\dfrac{x_1+x_2+x_3}{3},\ \dfrac{y_1+y_2+y_3}{3},\ \dfrac{z_1+z_2+z_3}{3}\right)}
\]

**Additional Practice — Fourth vertex of a parallelogram (New)** ⭐⭐

- **Given:** parallelogram \(ABCD\) with \(A(1,0,-1)\), \(B(4,3,2)\), \(C(6,5,3)\).
- **Find:** \(D\).
- **Approach:** in any parallelogram the diagonals bisect each other, so midpoint of \(AC\) = midpoint of \(BD\).
- **Work:** midpoint of \(AC=\left(\tfrac{7}{2},\tfrac{5}{2},1\right)\). Setting this equal to midpoint of \(BD\): \(\tfrac{4+x}{2}=\tfrac{7}{2}\Rightarrow x=3\); \(\tfrac{3+y}{2}=\tfrac{5}{2}\Rightarrow y=2\); \(\tfrac{2+z}{2}=1\Rightarrow z=0\). So \(D=(3,2,0)\).
- **Check:** midpoint of \(BD=\left(\tfrac{4+3}{2},\tfrac{3+2}{2},\tfrac{2+0}{2}\right)=\left(\tfrac72,\tfrac52,1\right)\) — matches midpoint of \(AC\) exactly.

**Additional Practice — Missing vertex from a centroid (New)** ⭐⭐

- **Given:** \(\triangle ABC\) with \(A(2,-3,1)\), \(B(4,5,-2)\), centroid \(G(3,0,2)\).
- **Find:** \(C\).
- **Work:** \(\dfrac{2+4+x}{3}=3\Rightarrow x=3\); \(\dfrac{-3+5+y}{3}=0\Rightarrow y=-2\); \(\dfrac{1-2+z}{3}=2\Rightarrow z=7\). So \(C=(3,-2,7)\).
- **Check:** \(\left(\tfrac{2+4+3}{3},\tfrac{-3+5-2}{3},\tfrac{1-2+7}{3}\right)=(3,0,2)=G\). ✓.

## Quick Reference (condensed — full sheet in the companion GLOSSARY file)


| Result               | Formula                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------ |
| Distance\(PQ\)       | \(\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}\)                                     |
| Distance from origin | \(\sqrt{x^2+y^2+z^2}\)                                                             |
| Midpoint (New)       | \(\left(\frac{x_1+x_2}{2},\frac{y_1+y_2}{2},\frac{z_1+z_2}{2}\right)\)             |
| Centroid (New)       | \(\left(\frac{x_1+x_2+x_3}{3},\frac{y_1+y_2+y_3}{3},\frac{z_1+z_2+z_3}{3}\right)\) |
| Collinear\(P,Q,R\)   | one of\(PQ+QR=PR\), \(QR+RP=QP\), \(RP+PQ=RQ\) holds                               |
| Right angle test     | largest side\(^2\) = sum of other two sides\(^2\)                                  |

## Points to Ponder

> **Watch out — coordinates are distances from planes, not axes.** \(x\), \(y\), \(z\) are the perpendicular distances of \(P\) from the YZ-, ZX-, and XY-planes respectively. Saying "distance from the \(x\)-axis" is a different (and larger, in general) quantity.

> **Watch out — equal opposite sides don't prove a 3D parallelogram.** Four points with \(AB=CD\) and \(BC=DA\) can fail to be planar at all. Always confirm with the midpoint-of-diagonals test, which is genuinely sufficient (Example 7).

> **Watch out — only the largest side needs the right-angle check.** In any triangle, only the angle opposite the *longest* side can possibly be \(\ge 90^\circ\); checking any other pair squanders effort and can't overturn the conclusion (Example 5).

> **Watch out — collinearity needs the correct pairing.** Compute all three pairwise distances first; only *then* check which one equals the sum of the other two. Don't assume the order the points were listed in is the order they lie on the line.

> **Watch out — squaring hides no sign information you need.** \((x_2-x_1)^2=(x_1-x_2)^2\), so the distance formula never cares which point you call "1" and which "2" — but every coordinate of the *same* labeled point must stay together across \(x\), \(y\), \(z\).

> **Watch out — a locus condition's algebraic *type* tells you its geometric type.** \(PA=PB\) collapses to a linear equation (a plane); \(PA^2+PB^2=\text{const}\) stays quadratic (a sphere); \(PA+PB=\text{const}\) is an ellipsoid of revolution with foci \(A,B\) (needs isolating one radical and squaring twice). Recognizing which one you're looking at prevents mis-simplifying midway.

## Summary

A point in space is an ordered triplet \((x,y,z)\) of perpendicular distances from three mutually perpendicular coordinate planes meeting at the origin; the signs of these three numbers place the point in one of eight octants. The distance formula \(PQ=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}\) — a direct extension of Pythagoras — is the tool behind collinearity tests, triangle classification, and locus equations, and (together with the midpoint and centroid formulas that generalize component-by-component) behind every problem in the Miscellaneous Exercise.
