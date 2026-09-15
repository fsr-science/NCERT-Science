# Straight Lines — Practice Questions (PQs)

> Full worked solutions to every exercise problem in NCERT Class 11 Maths, Chapter 9 — Exercises 9.1, 9.2, 9.3, and the Miscellaneous Exercise. Pairs with **STRAIGHT_LINES-NOTES.md** for the textbook's worked examples and derivations these problems draw on, and **GLOSSARY.md** for the formula quick-reference.

## At a glance

- **Subject:** Coordinate Geometry — NCERT Class 11 Maths, Chapter 9
- **Coverage:** Exercise 9.1 (11 Qs) · Exercise 9.2 (19 Qs) · Exercise 9.3 (17 Qs) · Miscellaneous Exercise (23 Qs) — **70 problems**
- **Note:** every numeric or symbolic answer below was independently recomputed from the problem statement, not transcribed from a key — see the *Check* line wherever a result is easy to get subtly wrong (multi-valued answers, sign choices, extraneous branches)

Difficulty legend: ⭐ recall / single formula · ⭐⭐ standard technique · ⭐⭐⭐ multi-step synthesis

---

## Exercise 9.1 — Slope and the Angle Between Lines

### Q1 ⭐⭐ — Area of a quadrilateral

*Draw a quadrilateral with vertices \((-4,5),(0,7),(5,-5),(-4,-2)\) and find its area.*

**Approach:** a quadrilateral's area formula isn't in this chapter's toolkit directly — split it along diagonal \(AC\) into \(\triangle ABC\) and \(\triangle ACD\), and add the two areas using the §9.1 triangle-area formula.

\[
\text{Area}(\triangle ABC)=\tfrac12\left|(-4)(7-(-5))+0((-5)-5)+5(5-7)\right|=\tfrac12|-48+0-10|=29
\]
\[
\text{Area}(\triangle ACD)=\tfrac12\left|(-4)((-5)-(-2))+5((-2)-5)+(-4)(5-(-5))\right|=\tfrac12|12-35-40|=\tfrac{63}{2}
\]
\[
\boxed{\text{Area}=29+\tfrac{63}{2}=\tfrac{121}{2}=60.5\text{ sq. units}}
\]

### Q2 ⭐⭐ — Vertices of an equilateral triangle from its base

*The base of an equilateral triangle with side \(2a\) lies along the \(y\)-axis, with the midpoint of the base at the origin. Find the vertices.*

**Approach:** the base endpoints are immediate from the given data; the third vertex sits on the perpendicular bisector of the base (the \(x\)-axis, by symmetry) at a distance equal to the triangle's altitude.

Base endpoints: \((0,a)\) and \((0,-a)\) (length \(=2a\) ✓, midpoint \((0,0)\) ✓). Altitude of an equilateral triangle of side \(2a\):
\[
h=\sqrt{(2a)^2-a^2}=\sqrt{3}\,a
\]
The third vertex lies on the \(x\)-axis at this distance from the origin, on either side:
\[
\boxed{(0,a),\ (0,-a),\ (\sqrt3\,a,\,0)}\qquad\text{or the mirror image with }(-\sqrt3\,a,0)
\]

### Q3 ⭐ — Distance when \(PQ\) is axis-parallel

*Find the distance between \(P(x_1,y_1)\) and \(Q(x_2,y_2)\) when (i) \(PQ\parallel y\)-axis, (ii) \(PQ\parallel x\)-axis.*

(i) \(PQ\parallel y\)-axis \(\Rightarrow x_1=x_2\). The distance formula collapses to \(\boxed{PQ=|y_2-y_1|}\).
(ii) \(PQ\parallel x\)-axis \(\Rightarrow y_1=y_2\). Similarly \(\boxed{PQ=|x_2-x_1|}\).

### Q4 ⭐⭐ — Point on the \(x\)-axis equidistant from two points

*Find a point on the \(x\)-axis equidistant from \((7,6)\) and \((3,4)\).*

Let the point be \((x,0)\).
\[
(x-7)^2+6^2=(x-3)^2+4^2 \;\Longrightarrow\; -14x+49+36=-6x+9+16 \;\Longrightarrow\; -8x=-60 \;\Longrightarrow\; \boxed{x=\tfrac{15}{2}}
\]
*Check:* distance to \((7,6)\) is \(\sqrt{(7-7.5)^2+36}=\sqrt{36.25}\); to \((3,4)\) is \(\sqrt{(3-7.5)^2+16}=\sqrt{36.25}\). Equal ✓.

### Q5 ⭐ — Slope through the origin and a midpoint

*Find the slope of the line through the origin and the midpoint of the segment joining \(P(0,-4)\) and \(B(8,0)\).*

Midpoint of \(PB\) is \((4,-2)\). Slope through \((0,0)\) and \((4,-2)\):
\[
\boxed{m=\frac{-2-0}{4-0}=-\frac12}
\]

### Q6 ⭐⭐ — A right triangle, without Pythagoras

*Show, without using the Pythagoras theorem, that \((4,4),(3,5),(-1,-1)\) are the vertices of a right-angled triangle.*

**Approach:** "without Pythagoras" is the hint to use the *slope* perpendicularity test instead of side-length comparison — compute the three side-slopes and check whether any pair multiplies to \(-1\).

\[
m_{(4,4)\to(3,5)}=\frac{5-4}{3-4}=-1,\qquad m_{(4,4)\to(-1,-1)}=\frac{-1-4}{-1-4}=1
\]
\[
(-1)(1)=-1 \;\Longrightarrow\; \boxed{\text{the two sides through }(4,4)\text{ are perpendicular — right angle at }(4,4)}
\]

### Q7 ⭐⭐ — Slope from an angle measured off the \(y\)-axis

*Find the slope of the line making an angle of \(30^\circ\) with the positive direction of the \(y\)-axis, measured anticlockwise.*

**Approach:** slope needs the inclination measured from the positive *\(x\)-axis*, not the \(y\)-axis — convert first. The positive \(y\)-direction sits at \(90^\circ\) from the positive \(x\)-axis; rotating a further \(30^\circ\) anticlockwise gives inclination \(\theta=90^\circ+30^\circ=120^\circ\).
\[
\boxed{m=\tan120^\circ=-\sqrt3}
\]

### Q8 ⭐⭐ — A parallelogram, without the distance formula

*Show, without the distance formula, that \((-2,-1),(4,0),(3,3),(-3,2)\) are vertices of a parallelogram.*

**Approach:** a quadrilateral is a parallelogram iff its diagonals bisect each other — a midpoint check needs no distances at all.

Diagonals are \(A(-2,-1)C(3,3)\) and \(B(4,0)D(-3,2)\).
\[
\text{midpoint}(AC)=\left(\tfrac{-2+3}{2},\tfrac{-1+3}{2}\right)=\left(\tfrac12,1\right),\qquad \text{midpoint}(BD)=\left(\tfrac{4-3}{2},\tfrac{0+2}{2}\right)=\left(\tfrac12,1\right)
\]
\[
\boxed{\text{Both diagonals share midpoint }\left(\tfrac12,1\right)\Rightarrow ABCD\text{ is a parallelogram}}
\]
*Check (independent route):* slopes \(m_{AB}=\frac{0-(-1)}{4-(-2)}=\frac16\) and \(m_{DC}=\frac{3-2}{3-(-3)}=\frac16\) — opposite sides \(AB,DC\) are parallel too, confirming the same conclusion two ways.

### Q9 ⭐ — Angle between the \(x\)-axis and a line

*Find the angle between the \(x\)-axis and the line joining \((3,-1)\) and \((4,-2)\).*

\[
m=\frac{-2-(-1)}{4-3}=-1 \;\Longrightarrow\; \tan(\text{angle with }x\text{-axis})=|m|=1 \;\Longrightarrow\; \boxed{\text{angle}=45^\circ}
\]

### Q10 ⭐⭐⭐ — One slope is double another

*The slope of a line is double the slope of another line. If the tangent of the angle between them is \(\frac13\), find the slopes of the lines.*

**Approach:** let the smaller-magnitude slope be \(m\), so the pair is \((m,2m)\); apply the angle formula and solve the resulting quadratic — expect to recheck *both* roots, since a quadratic naturally produces two valid pairs, not one.

\[
\left|\frac{2m-m}{1+2m^2}\right|=\frac13 \;\Longrightarrow\; \frac{m}{1+2m^2}=\pm\frac13
\]
\[
\text{(+) case: } 2m^2-3m+1=0 \Rightarrow (2m-1)(m-1)=0 \Rightarrow m=\tfrac12\text{ or }m=1
\]
\[
\text{(−) case: } 2m^2+3m+1=0 \Rightarrow (2m+1)(m+1)=0 \Rightarrow m=-\tfrac12\text{ or }m=-1
\]
\[
\boxed{\text{slope pairs }(m,2m) = \left(\tfrac12,1\right),\ (1,2),\ \left(-\tfrac12,-1\right),\ (-1,-2)}
\]
*Check:* for \((1,2)\): \(\left|\frac{2-1}{1+2}\right|=\frac13\) ✓. All four roots of the two quadratics are genuine solutions — dropping the \(\left(\tfrac12,1\right)\) branch (easy to do, since it looks like a "smaller" repeat of \((1,2)\)) would silently lose half the answer.

### Q11 ⭐ — Point-slope relation, straight from the definition

*A line passes through \((x_1,y_1)\) and \((h,k)\). If its slope is \(m\), show that \(k-y_1=m(h-x_1)\).*

By the two-point slope formula (§9.2.1) applied to these two points on the line:
\[
m=\frac{k-y_1}{h-x_1} \;\Longrightarrow\; \boxed{k-y_1=m(h-x_1)}
\]
(This *is* the point-slope form of §9.3.2, written with \((h,k)\) as the running point instead of \((x,y)\) — not a new fact.)

---

## Exercise 9.2 — Forms of the Equation of a Line

### Q1 ⭐ — Equations of the coordinate axes

\[
\boxed{x\text{-axis: } y=0 \qquad y\text{-axis: } x=0}
\]

### Q2 ⭐ — Point-slope form

*Through \((-4,3)\) with slope \(\frac12\).*
\[
y-3=\tfrac12(x+4) \;\Longrightarrow\; \boxed{x-2y+10=0}
\]

### Q3 ⭐ — Point-slope form through the origin

*Through \((0,0)\) with slope \(m\).*
\[
\boxed{y=mx}
\]

### Q4 ⭐⭐ — Point-slope with an inclination

*Through \(\left(2,2\sqrt3\right)\), inclined at \(75^\circ\).*

**Approach:** \(75^\circ=45^\circ+30^\circ\) isn't a standard angle, but the tangent-addition identity gives it exactly — don't round to a decimal.
\[
m=\tan75^\circ=\tan(45^\circ+30^\circ)=\frac{1+\tfrac{1}{\sqrt3}}{1-\tfrac{1}{\sqrt3}}=2+\sqrt3
\]
\[
y-2\sqrt3=(2+\sqrt3)(x-2) \;\Longrightarrow\; y=(2+\sqrt3)x-2(2+\sqrt3)+2\sqrt3=(2+\sqrt3)x-4-2\sqrt3+2\sqrt3
\]
\[
\boxed{(2+\sqrt3)x-y-4=0}
\]

### Q5 ⭐ — Slope-intercept, Case II

*Intersecting the \(x\)-axis \(3\) units to the left of the origin, slope \(-2\).*

\(x\)-intercept \(d=-3\):
\[
y=-2(x-(-3)) \;\Longrightarrow\; \boxed{2x+y+6=0}
\]

### Q6 ⭐ — Slope-intercept, Case I

*Intersecting the \(y\)-axis \(2\) units above the origin, angle \(30^\circ\) with positive \(x\)-axis.*

\(m=\tan30^\circ=\frac{1}{\sqrt3}\), \(c=2\):
\[
y=\frac{x}{\sqrt3}+2 \;\Longrightarrow\; \boxed{x-\sqrt3\,y+2\sqrt3=0}
\]

### Q7 ⭐ — Two-point form

*Through \((-1,1)\) and \((2,-4)\).*
\[
m=\frac{-4-1}{2-(-1)}=-\frac53,\qquad y-1=-\tfrac53(x+1) \;\Longrightarrow\; \boxed{5x+3y+2=0}
\]

### Q8 ⭐⭐ — Median of a triangle

*Vertices \(P(2,1),Q(-2,3),R(4,5)\). Find the equation of the median through \(R\).*

**Approach:** the median through \(R\) runs to the *midpoint* of the opposite side \(PQ\), not to \(P\) or \(Q\) individually.
\[
\text{midpoint}(PQ)=(0,2),\qquad m=\frac{5-2}{4-0}=\frac34
\]
\[
y-5=\tfrac34(x-4) \;\Longrightarrow\; \boxed{3x-4y+8=0}
\]

### Q9 ⭐⭐ — Perpendicular through a given point

*Through \((-3,5)\), perpendicular to the line through \((2,5)\) and \((-3,6)\).*
\[
m_{\text{given}}=\frac{6-5}{-3-2}=-\frac15 \;\Longrightarrow\; m_{\perp}=5
\]
\[
y-5=5(x+3) \;\Longrightarrow\; \boxed{5x-y+20=0}
\]

### Q10 ⭐⭐⭐ — Perpendicular at a division point

*A line perpendicular to the segment joining \((1,0)\) and \((2,3)\) divides it in the ratio \(1:n\). Find the equation of the line.*

**Approach:** the perpendicular line's *point* is the section-formula point on the segment (not either endpoint); its *slope* is the negative reciprocal of the segment's slope.

Dividing point in ratio \(1:n\) (internal, from \((1,0)\) to \((2,3)\)):
\[
\left(\frac{1(2)+n(1)}{1+n},\ \frac{1(3)+n(0)}{1+n}\right)=\left(\frac{n+2}{n+1},\ \frac{3}{n+1}\right)
\]
Slope of the segment \(=\dfrac{3-0}{2-1}=3\), so the perpendicular's slope is \(-\dfrac13\):
\[
\boxed{y-\frac{3}{n+1}=-\frac13\left(x-\frac{n+2}{n+1}\right)}
\]

### Q11 ⭐ — Equal intercepts

*Cuts off equal intercepts on the axes, through \((2,3)\).*

Line \(\dfrac{x}{a}+\dfrac{y}{a}=1 \Rightarrow x+y=a\); through \((2,3)\): \(a=5\).
\[
\boxed{x+y=5}
\]

### Q12 ⭐⭐ — Intercepts with a given sum

*Through \((2,2)\), intercepts on the axes sum to \(9\).*

Let intercepts be \(a\) and \(9-a\): \(\dfrac{2}{a}+\dfrac{2}{9-a}=1 \Rightarrow 2(9-a)+2a=a(9-a) \Rightarrow 18=9a-a^2 \Rightarrow a^2-9a+18=0 \Rightarrow (a-3)(a-6)=0\).
\[
\boxed{a=3,\,b=6:\ \frac{x}{3}+\frac{y}{6}=1\quad\text{or}\quad a=6,\,b=3:\ \frac{x}{6}+\frac{y}{3}=1}
\]
*Check:* both pass through \((2,2)\) — \(\frac23+\frac13=1\) ✓ and \(\frac13+\frac23=1\) ✓ — and both give intercept sums of \(9\). Two genuinely different lines satisfy the given data.

### Q13 ⭐⭐ — Slope-intercept with an obtuse angle, plus a parallel line

*Through \((0,2)\), angle \(\frac{2\pi}{3}\) with the positive \(x\)-axis; also the line parallel to it, crossing the \(y\)-axis \(2\) units below the origin.*

\(m=\tan120^\circ=-\sqrt3\), \(c=2\):
\[
\boxed{\sqrt3\,x+y-2=0}
\]
Parallel line, same slope, \(c=-2\):
\[
\boxed{\sqrt3\,x+y+2=0}
\]

### Q14 ⭐⭐ — Line from its perpendicular foot

*The perpendicular from the origin to a line meets it at \((-2,9)\). Find the equation of the line.*

**Approach:** the segment from the origin to \((-2,9)\) *is* the perpendicular, so the line's slope is the negative reciprocal of that segment's slope — and the line passes through \((-2,9)\) itself.
\[
m_{\text{seg}}=\frac{9-0}{-2-0}=-\frac92 \;\Longrightarrow\; m_{\text{line}}=\frac29
\]
\[
y-9=\tfrac29(x+2) \;\Longrightarrow\; 9y-81=2x+4 \;\Longrightarrow\; \boxed{2x-9y+85=0}
\]

### Q15 ⭐⭐ — Linear model: rod length vs. temperature

*\(L=124.942\) at \(C=20^\circ\); \(L=125.134\) at \(C=110^\circ\). Express \(L\) as a linear function of \(C\).*
\[
m=\frac{125.134-124.942}{110-20}=\frac{0.192}{90}=0.002\overline{133}\ (\text{exactly }\tfrac{4}{1875})
\]
\[
c=124.942-m(20)\approx 124.8993
\]
\[
\boxed{L\approx 124.899+0.00213\,C}
\]
*Check:* at \(C=110\): \(124.899+0.00213(110)=124.899+0.2347\approx125.134\) ✓.

### Q16 ⭐⭐ — Linear model: milk demand vs. price

*Sells \(980\) L/week at Rs\(14\)/L, \(1220\) L/week at Rs\(16\)/L. How much at Rs\(17\)/L?*

Slope (L per rupee) \(=\dfrac{1220-980}{16-14}=120\). Demand is linear in price, so from \(P=16\) to \(P=17\):
\[
\boxed{D(17)=1220+120(1)=1340\text{ litres/week}}
\]

### Q17 ⭐⭐ — Intercept-form proof from a midpoint

*\(P(a,b)\) is the midpoint of a line segment between the axes. Show the line's equation is \(\dfrac{x}{a}+\dfrac{y}{b}=2\).*

If the intercepts are \((p,0)\) and \((0,q)\), their midpoint is \(\left(\frac p2,\frac q2\right)=(a,b) \Rightarrow p=2a,\ q=2b\). By the intercept form (§9.3.5):
\[
\frac{x}{2a}+\frac{y}{2b}=1 \;\Longrightarrow\; \boxed{\frac{x}{a}+\frac{y}{b}=2}
\]

### Q18 ⭐⭐⭐ — Intercept-form from a 1:2 division point

*\(R(h,k)\) divides a line segment between the axes in the ratio \(1:2\). Find the equation of the line.*

If the intercepts are \((a,0)\) and \((0,b)\), the point dividing \((a,0)\to(0,b)\) internally in ratio \(1:2\) is
\[
\left(\frac{1(0)+2(a)}{3},\frac{1(b)+2(0)}{3}\right)=\left(\frac{2a}{3},\frac{b}{3}\right)=(h,k) \;\Longrightarrow\; a=\frac{3h}{2},\ b=3k
\]
By the intercept form: \(\dfrac{x}{3h/2}+\dfrac{y}{3k}=1 \Rightarrow \dfrac{2x}{3h}+\dfrac{y}{3k}=1\); multiplying by \(3\):
\[
\boxed{\frac{2x}{h}+\frac{y}{k}=3}
\]

### Q19 ⭐⭐ — Collinearity via the line equation

*Prove \((3,0),(-2,-2),(8,2)\) are collinear, using the equation-of-a-line concept.*

**Approach:** the chapter's own suggested method — find the line through two of the points, then substitute the third and check it satisfies the equation (this is the two-point form doing the job the §9.1 area test could also do).
\[
m=\frac{-2-0}{-2-3}=\frac25,\qquad y-0=\tfrac25(x-3)
\]
Substitute \((8,2)\): \(\tfrac25(8-3)=\tfrac25(5)=2\), which matches \(y=2\).
\[
\boxed{(8,2)\text{ satisfies the line through the other two}\Rightarrow\text{all three points are collinear}}
\]

---

## Exercise 9.3 — Distance of a Point From a Line

### Q1 ⭐ — Slope-intercept form and reading off \(m,c\)

| Equation | Slope-intercept form | \(m\) | \(c\) |
|---|---|---|---|
| (i) \(x+7y=0\) | \(y=-\tfrac17x\) | \(-\tfrac17\) | \(0\) |
| (ii) \(6x+3y-5=0\) | \(y=-2x+\tfrac53\) | \(-2\) | \(\tfrac53\) |
| (iii) \(y=0\) | \(y=0\cdot x+0\) | \(0\) | \(0\) |

### Q2 ⭐ — Intercept form and reading off \(a,b\)

| Equation | Intercept form | \(a\) (x-int.) | \(b\) (y-int.) |
|---|---|---|---|
| (i) \(3x+2y-12=0\) | \(\tfrac{x}{4}+\tfrac{y}{6}=1\) | \(4\) | \(6\) |
| (ii) \(4x-3y=6\) | \(\tfrac{x}{3/2}+\tfrac{y}{-2}=1\) | \(\tfrac32\) | \(-2\) |
| (iii) \(3y+2=0\) | \(y=-\tfrac23\) (horizontal — no \(x\)-intercept) | — | \(-\tfrac23\) |

### Q3 ⭐⭐ — Distance to a line not yet in general form

*Distance of \((-1,1)\) from \(12(x+6)=5(y-2)\).*

**Approach:** the distance formula needs \(Ax+By+C=0\) first — expand and collect.
\[
12x+72=5y-10 \;\Longrightarrow\; 12x-5y+82=0
\]
\[
d=\frac{|12(-1)-5(1)+82|}{\sqrt{12^2+5^2}}=\frac{|{-12-5+82}|}{13}=\frac{65}{13}=\boxed{5}
\]

### Q4 ⭐⭐ — Points on an axis at a given distance from a line

*Points on the \(x\)-axis whose distance from \(\dfrac{x}{3}+\dfrac{y}{4}=1\) is \(4\) units.*

General form: \(4x+3y-12=0\). Let the point be \((x,0)\):
\[
\frac{|4x-12|}{5}=4 \;\Longrightarrow\; 4x-12=\pm20 \;\Longrightarrow\; x=8\ \text{or}\ x=-2
\]
\[
\boxed{(8,0)\ \text{and}\ (-2,0)}
\]

### Q5 ⭐⭐ — Distance between parallel lines

(i) \(15x+8y-34=0\) and \(15x+8y+31=0\):
\[
d=\frac{|{-34-31}|}{\sqrt{15^2+8^2}}=\frac{65}{17}
\]
(ii) \(l(x+y)+p=0\) and \(l(x+y)-r=0\), i.e. \(lx+ly+p=0\) and \(lx+ly-r=0\):
\[
d=\frac{|p-(-r)|}{\sqrt{l^2+l^2}} = \boxed{\frac{|p+r|}{l\sqrt2}}
\]

### Q6 ⭐ — Line parallel to a given line, through a point

*Parallel to \(3x-4y+2=0\), through \((-2,3)\).*

Same \(A,B\); solve for the new \(C\) using the point:
\[
3(-2)-4(3)+C=0 \;\Longrightarrow\; -18+C=0 \;\Longrightarrow\; \boxed{3x-4y+18=0}
\]

### Q7 ⭐⭐ — Line perpendicular to a given line, with an \(x\)-intercept

*Perpendicular to \(x-7y+5=0\), \(x\)-intercept \(3\).*

Given line's slope \(=\tfrac17\), so perpendicular slope \(=-7\), through \((3,0)\):
\[
y=-7(x-3) \;\Longrightarrow\; \boxed{7x+y-21=0}
\]

### Q8 ⭐⭐ — Angle between two lines

*Angle between \(\sqrt3x+y=1\) and \(x+\sqrt3y=1\).*

\[
m_1=-\sqrt3,\qquad m_2=-\frac{1}{\sqrt3}
\]
\[
\tan\theta=\left|\frac{m_2-m_1}{1+m_1m_2}\right|=\left|\frac{-\tfrac1{\sqrt3}+\sqrt3}{1+1}\right|=\left|\frac{\tfrac{2}{\sqrt3}}{2}\right|=\frac{1}{\sqrt3}
\]
\[
\boxed{\theta=30^\circ\ (\text{acute}), \qquad 150^\circ\ (\text{obtuse})}
\]

### Q9 ⭐⭐ — Solving for an unknown coordinate under a perpendicularity condition

*Line through \((h,3)\) and \((4,1)\) meets \(7x-9y-19=0\) at right angle. Find \(h\).*
\[
m=\frac{1-3}{4-h}=\frac{2}{h-4},\qquad m_{\text{given}}=\frac79
\]
\[
\frac{2}{h-4}\cdot\frac79=-1 \;\Longrightarrow\; 14=-9(h-4) \;\Longrightarrow\; 9h=22 \;\Longrightarrow\; \boxed{h=\frac{22}{9}}
\]

### Q10 ⭐⭐ — Parallel-line equation, general proof

*Prove: the line through \((x_1,y_1)\) parallel to \(Ax+By+C=0\) is \(A(x-x_1)+B(y-y_1)=0\).*

A line parallel to \(Ax+By+C=0\) has the same \(A,B\), differing only in the constant: \(Ax+By+C'=0\). Since \((x_1,y_1)\) lies on it, \(Ax_1+By_1+C'=0 \Rightarrow C'=-(Ax_1+By_1)\). Substituting back:
\[
Ax+By-(Ax_1+By_1)=0 \;\Longrightarrow\; \boxed{A(x-x_1)+B(y-y_1)=0}
\]

### Q11 ⭐⭐⭐ — Finding the other line from an angle condition

*Two lines through \((2,3)\) meet at \(60^\circ\); one has slope \(2\). Find the other.*
\[
\left|\frac{m-2}{1+2m}\right|=\tan60^\circ=\sqrt3 \;\Longrightarrow\; \frac{m-2}{1+2m}=\pm\sqrt3
\]
Solving each branch (rationalizing the denominator after cross-multiplying):
\[
\boxed{m=\frac{-8-5\sqrt3}{11}\qquad\text{or}\qquad m=\frac{-8+5\sqrt3}{11}}
\]
giving the two possible lines \(y-3=m(x-2)\) for these values of \(m\).
*Check:* both are genuine — same geometric situation as Example 2 (§9.2.3), where an angle condition alone always leaves two lines symmetric about the given one.

### Q12 ⭐⭐ — Right bisector (perpendicular bisector) of a segment

*Right bisector of the segment joining \((3,4)\) and \((-1,2)\).*
\[
\text{midpoint}=(1,3),\qquad m_{\text{seg}}=\frac{2-4}{-1-3}=\frac12 \;\Longrightarrow\; m_{\perp}=-2
\]
\[
y-3=-2(x-1) \;\Longrightarrow\; \boxed{2x+y-5=0}
\]

### Q13 ⭐⭐⭐ — Foot of the perpendicular

*Foot of the perpendicular from \((-1,3)\) to \(3x-4y-16=0\).*

**Approach:** move from \((-1,3)\) along the line's normal direction \((A,B)=(3,-4)\) by the signed parameter \(t=\dfrac{Ax_1+By_1+C}{A^2+B^2}\); the foot is \((x_1-At,\ y_1-Bt)\).
\[
t=\frac{3(-1)-4(3)-16}{3^2+(-4)^2}=\frac{-3-12-16}{25}=\frac{-31}{25}
\]
\[
\text{foot}=\left(-1-3\left(\tfrac{-31}{25}\right),\ 3-(-4)\left(\tfrac{-31}{25}\right)\right)=\left(\frac{68}{25},\ -\frac{49}{25}\right)
\]
\[
\boxed{\left(\dfrac{68}{25},\,-\dfrac{49}{25}\right)}
\]
*Check:* substitute into \(3x-4y-16\): \(3\left(\tfrac{68}{25}\right)-4\left(-\tfrac{49}{25}\right)-16=\tfrac{204}{25}+\tfrac{196}{25}-16=\tfrac{400}{25}-16=16-16=0\) ✓ — the foot genuinely lies on the line.

### Q14 ⭐⭐ — Slope and intercept from a perpendicular foot

*Perpendicular from origin to \(y=mx+c\) meets it at \((-1,2)\). Find \(m,c\).*

Segment from origin to \((-1,2)\) has slope \(-2\), which must be the negative reciprocal of \(m\):
\[
m\cdot(-2)=-1 \;\Longrightarrow\; \boxed{m=\frac12}
\]
\((-1,2)\) lies on the line: \(2=\tfrac12(-1)+c \Rightarrow \boxed{c=\tfrac52}\).

### Q15 ⭐⭐⭐ — A general identity between two perpendicular distances

*If \(p,q\) are the lengths of perpendiculars from the origin to \(x\cos\theta-y\sin\theta=k\cos2\theta\) and \(x\sec\theta+y\csc\theta=k\), prove \(p^2+4q^2=k^2\).*

\[
p=\frac{|k\cos2\theta|}{\sqrt{\cos^2\theta+\sin^2\theta}}=|k\cos2\theta| \;\Longrightarrow\; p^2=k^2\cos^22\theta
\]
\[
q=\frac{|k|}{\sqrt{\sec^2\theta+\csc^2\theta}} \;\Longrightarrow\; q^2=\frac{k^2}{\sec^2\theta+\csc^2\theta}=\frac{k^2\sin^2\theta\cos^2\theta}{\sin^2\theta+\cos^2\theta}=k^2\sin^2\theta\cos^2\theta=\frac{k^2\sin^22\theta}{4}
\]
\[
p^2+4q^2=k^2\cos^22\theta+k^2\sin^22\theta=k^2(\cos^22\theta+\sin^22\theta)=\boxed{k^2}
\]

### Q16 ⭐⭐⭐ — Equation and length of an altitude

*Triangle \(A(2,3),B(4,-1),C(1,2)\). Find the equation and length of the altitude from \(A\).*

**Approach:** the altitude from \(A\) is perpendicular to the *opposite side* \(BC\) and passes through \(A\); its length is the perpendicular distance from \(A\) to line \(BC\).
\[
m_{BC}=\frac{2-(-1)}{1-4}=-1 \;\Longrightarrow\; m_{\text{altitude}}=1
\]
\[
y-3=1(x-2) \;\Longrightarrow\; \boxed{x-y+1=0}
\]
Line \(BC\) in general form (through \(B(4,-1)\), slope \(-1\)): \(y+1=-(x-4) \Rightarrow x+y-3=0\). Length of the altitude \(=\) distance from \(A(2,3)\) to this line:
\[
\boxed{\text{length}=\frac{|2+3-3|}{\sqrt2}=\sqrt2}
\]

### Q17 ⭐⭐ — General intercept-perpendicular identity

*If \(p\) is the length of the perpendicular from the origin to the line with intercepts \(a,b\), show \(\dfrac{1}{p^2}=\dfrac{1}{a^2}+\dfrac{1}{b^2}\).*

Line: \(\dfrac xa+\dfrac yb=1 \Rightarrow bx+ay-ab=0\).
\[
p=\frac{|{-ab}|}{\sqrt{a^2+b^2}}=\frac{|ab|}{\sqrt{a^2+b^2}} \;\Longrightarrow\; \frac{1}{p^2}=\frac{a^2+b^2}{a^2b^2}=\boxed{\frac{1}{a^2}+\frac{1}{b^2}}
\]

---

## Miscellaneous Exercise

### Q1 ⭐⭐⭐ — Three conditions on one parametrized line

*For which \(k\) is \((k-3)x-(4-k^2)y+k^2-7k+6=0\) (a) parallel to the \(x\)-axis, (b) parallel to the \(y\)-axis, (c) through the origin?*

Write as \(Ax+By+C=0\) with \(A=k-3\), \(B=k^2-4\), \(C=k^2-7k+6\).

(a) Parallel to \(x\)-axis needs \(A=0,\ B\ne0\): \(k=3\), and \(B(3)=5\ne0\). \(\boxed{k=3}\)
(b) Parallel to \(y\)-axis needs \(B=0,\ A\ne0\): \(k=\pm2\); \(A(2)=-1\ne0\), \(A(-2)=-5\ne0\). \(\boxed{k=2\text{ or }k=-2}\)
(c) Through the origin needs \(C=0\): \(k^2-7k+6=(k-1)(k-6)=0\). \(\boxed{k=1\text{ or }k=6}\)

### Q2 ⭐⭐ — Intercepts from a sum and a product

*Intercepts on the axes have sum \(1\) and product \(-6\).*

\(a+b=1,\ ab=-6 \Rightarrow a,b\) are roots of \(t^2-t-6=0 \Rightarrow (t-3)(t+2)=0 \Rightarrow \{a,b\}=\{3,-2\}\). Two lines (depending on which intercept is \(x\) vs. \(y\)):
\[
\boxed{\frac x3+\frac y{-2}=1 \Rightarrow 2x-3y-6=0 \qquad\text{or}\qquad \frac{x}{-2}+\frac y3=1 \Rightarrow 3x-2y+6=0}
\]

### Q3 ⭐⭐ — Points on the \(y\)-axis at a given distance from a line

*Points on the \(y\)-axis whose distance from \(\dfrac x3+\dfrac y4=1\) is \(4\).*

General form \(4x+3y-12=0\); point \((0,y)\):
\[
\frac{|3y-12|}{5}=4 \;\Longrightarrow\; 3y-12=\pm20 \;\Longrightarrow\; y=\frac{32}{3}\ \text{or}\ y=-\frac83
\]
\[
\boxed{\left(0,\tfrac{32}{3}\right)\ \text{and}\ \left(0,-\tfrac83\right)}
\]

### Q4 ⭐⭐⭐ — Perpendicular distance to a chord of the unit circle

*Perpendicular distance from the origin to the line joining \((\cos\theta,\sin\theta)\) and \((\cos\phi,\sin\phi)\).*

**Approach:** write the two-point form, reduce to general form, apply the distance formula, then simplify with the half-angle identities — the messy trig cleans up completely if you don't stop simplifying too early.

After forming the line through the two points and computing the distance from the origin (steps parallel to §9.4's derivation), the numerator and denominator both reduce via \(\cos\phi-\cos\theta=-2\sin\frac{\phi+\theta}{2}\sin\frac{\phi-\theta}{2}\) and \(\sin\phi-\sin\theta=2\cos\frac{\phi+\theta}{2}\sin\frac{\phi-\theta}{2}\) to
\[
\boxed{d=\left|\cos\!\left(\frac{\theta-\phi}{2}\right)\right|}
\]
*Check:* squaring, \(d^2\) must simplify to \(\frac{1+\cos(\phi-\theta)}{2}\) by the double-angle identity — confirmed by direct algebraic expansion of the distance-squared expression, which collapses to exactly this with no leftover \(\theta,\phi\)-dependence beyond \(\cos(\phi-\theta)\).

### Q5 ⭐⭐ — Line parallel to an axis through an intersection point

*Line parallel to the \(y\)-axis through the intersection of \(x-7y+5=0\) and \(3x+y=0\).*

Solving simultaneously: \(x=-\tfrac{5}{22},\ y=\tfrac{15}{22}\). A line parallel to the \(y\)-axis through this point is simply:
\[
\boxed{x=-\frac{5}{22}}
\]

### Q6 ⭐⭐ — Perpendicular through an axis intercept

*Perpendicular to \(\dfrac x4+\dfrac y6=1\), through the point where it meets the \(y\)-axis.*

The line meets the \(y\)-axis at \((0,6)\). Given line's slope \(=-\tfrac32\), so perpendicular slope \(=\tfrac23\):
\[
y-6=\tfrac23(x-0) \;\Longrightarrow\; \boxed{2x-3y+18=0}
\]

### Q7 ⭐⭐ — Area of a triangle formed by three lines (parametric)

*Area of the triangle formed by \(y-x=0\), \(x+y=0\), \(x-k=0\).*

Vertices: \(y=x\) meets \(x+y=0\) at \((0,0)\); \(y=x\) meets \(x=k\) at \((k,k)\); \(x+y=0\) meets \(x=k\) at \((k,-k)\).
\[
\text{Area}=\tfrac12\left|0(k-(-k))+k(-k-0)+k(0-k)\right|=\tfrac12\left|-k^2-k^2\right|=\boxed{k^2\text{ sq. units}}
\]

### Q8 ⭐⭐ — Concurrency: solving for an unknown coefficient

*Find \(p\) so that \(3x+y-2=0\), \(px+2y-3=0\), \(2x-y-3=0\) are concurrent.*

Intersection of the 1st and 3rd lines: adding them, \(5x-5=0 \Rightarrow x=1,\ y=-1\). Substitute into the 2nd:
\[
p(1)+2(-1)-3=0 \;\Longrightarrow\; \boxed{p=5}
\]

### Q9 ⭐⭐ — Concurrency identity, general proof

*If \(y=m_1x+c_1,\ y=m_2x+c_2,\ y=m_3x+c_3\) are concurrent, show \(m_1(c_2-c_3)+m_2(c_3-c_1)+m_3(c_1-c_2)=0\).*

Let the common point be \((x_0,y_0)\), so \(c_i=y_0-m_ix_0\) for each \(i\). Then:
\[
c_2-c_3=(m_3-m_2)x_0,\quad c_3-c_1=(m_1-m_3)x_0,\quad c_1-c_2=(m_2-m_1)x_0
\]
\[
m_1(c_2-c_3)+m_2(c_3-c_1)+m_3(c_1-c_2)=x_0\big[m_1m_3-m_1m_2+m_2m_1-m_2m_3+m_3m_2-m_3m_1\big]=x_0(0)=\boxed{0}
\]
(every term cancels in pairs — this is a determinant identity, not a coincidence of these particular numbers.)

### Q10 ⭐⭐ — Lines at a fixed angle to a given line

*Lines through \((3,2)\) making \(45^\circ\) with \(x-2y=3\) (slope \(\tfrac12\)).*
\[
\left|\frac{m-\tfrac12}{1+\tfrac12 m}\right|=1 \;\Longrightarrow\; \frac{m-\tfrac12}{1+\tfrac12m}=\pm1 \;\Longrightarrow\; m=3\ \text{or}\ m=-\tfrac13
\]
\[
\boxed{y-2=3(x-3)\Rightarrow 3x-y-7=0 \qquad\text{or}\qquad y-2=-\tfrac13(x-3)\Rightarrow x+3y-9=0}
\]

### Q11 ⭐⭐⭐ — Line through an intersection, with equal intercepts

*Through the intersection of \(4x+7y-3=0\) and \(2x-3y+1=0\), with equal intercepts.*

Intersection: \(x=\tfrac{1}{13},\ y=\tfrac{5}{13}\) (not the origin, so the equal-intercept family \(x+y=a\) applies directly):
\[
a=\tfrac{1}{13}+\tfrac{5}{13}=\tfrac{6}{13} \;\Longrightarrow\; \boxed{13x+13y-6=0}
\]

### Q12 ⭐⭐⭐ — Line through the origin at a fixed angle, general proof

*Show the line through the origin making angle \(\theta\) with \(y=mx+c\) is \(\dfrac yx=\dfrac{m\pm\tan\theta}{1\mp m\tan\theta}\).*

Let the required line have slope \(M\) (so its equation is \(y=Mx\), i.e. \(\tfrac yx=M\)). By the angle-between-lines formula (§9.2.3), removing the absolute value as a \(\pm\) choice:
\[
\tan\theta=\pm\frac{M-m}{1+Mm}
\]
Solving each sign for \(M\):
\[
\tan\theta=\frac{M-m}{1+Mm} \;\Longrightarrow\; M=\frac{m+\tan\theta}{1-m\tan\theta}, \qquad \tan\theta=-\frac{M-m}{1+Mm} \;\Longrightarrow\; M=\frac{m-\tan\theta}{1+m\tan\theta}
\]
\[
\boxed{\frac yx=M=\frac{m\pm\tan\theta}{1\mp m\tan\theta}}
\]

### Q13 ⭐⭐ — Ratio in which a line divides a segment

*In what ratio does \(x+y=4\) divide the segment joining \((-1,1)\) and \((5,7)\)?*

Let the ratio be \(t:1\); the dividing point is \(\left(\dfrac{5t-1}{t+1},\dfrac{7t+1}{t+1}\right)\). Substituting into \(x+y=4\):
\[
\frac{5t-1}{t+1}+\frac{7t+1}{t+1}=4 \;\Longrightarrow\; 12t=4(t+1) \;\Longrightarrow\; 8t=4 \;\Longrightarrow\; t=\frac12
\]
\[
\boxed{\text{ratio }1:2\text{ (internal)}}
\]

### Q14 ⭐⭐⭐ — Distance along a slanted direction

*Distance of \(4x+7y+5=0\) from \((1,2)\), measured along \(2x-y=0\).*

**Approach:** exactly the §9.4 Miscellaneous-Example-12 pattern — the "distance along a direction" is found by intersecting the two lines, then taking the ordinary distance from \((1,2)\) to that intersection point (not the perpendicular distance).

Solving \(2x-y=0\) and \(4x+7y+5=0\) simultaneously: \(y=2x \Rightarrow 4x+14x+5=0 \Rightarrow x=-\tfrac{5}{18},\ y=-\tfrac59\).
\[
d=\sqrt{\left(1+\tfrac{5}{18}\right)^2+\left(2+\tfrac59\right)^2}=\boxed{\frac{23\sqrt5}{18}}
\]

### Q15 ⭐⭐⭐ — Direction of a line given a fixed intersection distance

*Direction through \((-1,2)\) so its intersection with \(x+y=4\) is \(3\) units away.*

**Approach:** parametrize the unknown line by its inclination \(\theta\); a point at distance \(3\) along it is \((-1+3\cos\theta,\ 2+3\sin\theta)\). Force this point onto \(x+y=4\).
\[
(-1+3\cos\theta)+(2+3\sin\theta)=4 \;\Longrightarrow\; \cos\theta+\sin\theta=1
\]
\[
\sqrt2\sin\!\left(\theta+45^\circ\right)=1 \;\Longrightarrow\; \sin(\theta+45^\circ)=\tfrac{1}{\sqrt2} \;\Longrightarrow\; \theta+45^\circ=45^\circ\text{ or }135^\circ
\]
\[
\boxed{\theta=0^\circ\ (\text{parallel to the }x\text{-axis})\quad\text{or}\quad\theta=90^\circ\ (\text{parallel to the }y\text{-axis})}
\]
*Check:* at \(\theta=0^\circ\), the point is \((2,2)\): \(2+2=4\) ✓, distance from \((-1,2)\) is \(3\) ✓. At \(\theta=90^\circ\), the point is \((-1,5)\): \(-1+5=4\) ✓, distance \(3\) ✓. (Moving in the *opposite* direction along either axis, i.e. \(\theta=180^\circ,270^\circ\), does **not** work — only these two headings land on the target line at exactly distance \(3\).)

### Q16 ⭐⭐ — Legs of a right triangle parallel to the axes

*Hypotenuse endpoints \((1,3)\) and \((-4,1)\); find the legs, parallel to the axes.*

**Approach:** the right-angle vertex must share its \(x\)-coordinate with one endpoint and its \(y\)-coordinate with the other — there are exactly two such points, giving two valid (mirror-image) triangles.

Vertex \((1,1)\): legs are \(x=1\) (to \((1,3)\)) and \(y=1\) (to \((-4,1)\)).
Vertex \((-4,3)\): legs are \(x=-4\) (to \((-4,1)\)) and \(y=3\) (to \((1,3)\)).
\[
\boxed{x=1,\ y=1 \qquad\text{or}\qquad x=-4,\ y=3}
\]

### Q17 ⭐⭐⭐ — Image of a point in a line

*Image of \((3,8)\) in the line \(x+3y=7\), as a plane mirror.*

**Approach:** the same two-condition method as NOTES.md's Misc. Example 13 — perpendicularity of the join, and the midpoint lying on the mirror line.

Let the image be \(Q(h,k)\). Line's slope \(=-\tfrac13\), so \(PQ\) has slope \(3\):
\[
\frac{k-8}{h-3}=3 \;\Longrightarrow\; k-8=3(h-3) \;\Longrightarrow\; 3h-k=1
\]
Midpoint \(\left(\tfrac{3+h}2,\tfrac{8+k}2\right)\) lies on \(x+3y=7\):
\[
\frac{3+h}{2}+3\left(\frac{8+k}{2}\right)=7 \;\Longrightarrow\; (3+h)+3(8+k)=14 \;\Longrightarrow\; h+3k=-13
\]
Solving \(3h-k=1\) and \(h+3k=-13\) simultaneously:
\[
\boxed{Q=(-1,-4)}
\]

### Q18 ⭐⭐⭐ — Two lines equally inclined to a third

*If \(y=3x+1\) and \(2y=x+3\) are equally inclined to \(y=mx+4\), find \(m\).*

**Approach:** "equally inclined" means the angle from line 1 to the target equals the angle from the target to line 2 — set up with a sign consistent with the target line *bisecting* the angle between the other two (the same-sign branch turns out to have no solution here, which is itself worth noticing rather than discarding silently).

With \(m_1=3,\ m_2=\tfrac12\):
\[
\frac{m_1-m}{1+m_1m}=-\frac{m_2-m}{1+m_2m}
\]
\[
\boxed{m=\frac{1-5\sqrt2}{7}\qquad\text{or}\qquad m=\frac{1+5\sqrt2}{7}}
\]
*Check:* the "same-sign" branch \(\frac{m_1-m}{1+m_1m}=\frac{m_2-m}{1+m_2m}\) yields no real solution at all — confirming the target line must sit as the *external* configuration (angle-bisector-like relationship with opposite orientation), not the naive same-sign match.

### Q19 ⭐⭐⭐ — Locus from a constant sum of distances

*If the sum of perpendicular distances of \(P(x,y)\) from \(x+y-5=0\) and \(3x-2y+7=0\) is always \(10\), show \(P\) moves on a line.*

\[
\frac{|x+y-5|}{\sqrt2}+\frac{|3x-2y+7|}{\sqrt{13}}=10
\]
**Approach:** within any region of the plane where both bracketed expressions keep a fixed sign (the plane splits into four such regions, divided by the two given lines), the absolute values can be dropped consistently, and what remains is manifestly linear in \(x,y\). Taking, for instance, the region where both are non-negative:
\[
\frac{x+y-5}{\sqrt2}+\frac{3x-2y+7}{\sqrt{13}}=10
\]
\[
\boxed{\left(\frac{1}{\sqrt2}+\frac{3}{\sqrt{13}}\right)x+\left(\frac{1}{\sqrt2}-\frac{2}{\sqrt{13}}\right)y+\left(\frac{7}{\sqrt{13}}-\frac{5}{\sqrt2}-10\right)=0}
\]
This is an equation of the form \(Ax+By+C=0\) — a straight line. The same holds, with different sign choices, in each of the other three regions, so wherever \(P\) is, the condition forces it onto *some* straight line: \(P\) must move on a line.

### Q20 ⭐⭐ — Line equidistant from two parallel lines

*Equidistant from \(9x+6y-7=0\) and \(3x+2y+6=0\).*

**Approach:** first rewrite both with matching \(A,B\) — the required line's constant is the *average* of the two, once they share the same \(A,B\), not a naive average of \(-7\) and \(6\).

Divide the first by \(3\): \(3x+2y-\tfrac73=0\). Now both lines have \(A=3,B=2\), with \(C_1=-\tfrac73,\ C_2=6\):
\[
C=\frac{C_1+C_2}{2}=\frac{-\tfrac73+6}{2}=\frac{11}{6}
\]
\[
3x+2y+\frac{11}{6}=0 \;\Longrightarrow\; \boxed{18x+12y+11=0}
\]

### Q21 ⭐⭐⭐ — Reflection point of a light ray

*A ray from \((1,2)\) reflects off the \(x\)-axis at \(A\); the reflected ray passes through \((5,3)\). Find \(A\).*

**Approach:** the reflection principle turns this into a straight-line problem — the image of \((1,2)\) in the mirror (the \(x\)-axis) is \((1,-2)\), and \(A\) is simply where the straight line from this image to \((5,3)\) crosses the \(x\)-axis.

Line through \((1,-2)\) and \((5,3)\): slope \(=\dfrac{3-(-2)}{5-1}=\dfrac54\). Setting \(y=0\):
\[
0-(-2)=\tfrac54(x-1) \;\Longrightarrow\; x=1+\tfrac85=\tfrac{13}{5}
\]
\[
\boxed{A=\left(\dfrac{13}{5},0\right)}
\]

### Q22 ⭐⭐⭐ — Product of two perpendiculars, general proof

*Prove the product of perpendiculars from \(\left(\sqrt{a^2-b^2},0\right)\) and \(\left(-\sqrt{a^2-b^2},0\right)\) to \(\dfrac xa\cos\theta+\dfrac yb\sin\theta=1\) is \(b^2\).*

Let \(c=\sqrt{a^2-b^2}\); the line is \(\dfrac{\cos\theta}{a}x+\dfrac{\sin\theta}{b}y-1=0\).
\[
p_1p_2=\frac{|c\cdot\tfrac{\cos\theta}{a}-1|\cdot|-c\cdot\tfrac{\cos\theta}{a}-1|}{\tfrac{\cos^2\theta}{a^2}+\tfrac{\sin^2\theta}{b^2}}=\frac{\left|1-\tfrac{c^2\cos^2\theta}{a^2}\right|}{\tfrac{\cos^2\theta}{a^2}+\tfrac{\sin^2\theta}{b^2}}
\]
Since \(c^2=a^2-b^2\): \(1-\dfrac{(a^2-b^2)\cos^2\theta}{a^2}=\dfrac{a^2-(a^2-b^2)\cos^2\theta}{a^2}=\dfrac{a^2\sin^2\theta+b^2\cos^2\theta}{a^2}\) (using \(a^2-a^2\cos^2\theta=a^2\sin^2\theta\)). The denominator is \(\dfrac{b^2\cos^2\theta+a^2\sin^2\theta}{a^2b^2}\) — the **same** bracketed quantity, scaled by \(a^2b^2\). Dividing:
\[
p_1p_2=\frac{\tfrac{a^2\sin^2\theta+b^2\cos^2\theta}{a^2}}{\tfrac{a^2\sin^2\theta+b^2\cos^2\theta}{a^2b^2}}=\boxed{b^2}
\]

### Q23 ⭐⭐⭐ — Shortest path to a line (least time)

*A person at the junction of \(2x-3y+4=0\) and \(3x+4y-5=0\) wants to reach \(6x-7y+8=0\) in the least time. Find the path.*

**Approach:** "least time" over a straight target means the *shortest* route, i.e. the perpendicular from the starting point to the target line — not any other line through the junction.

Junction (solving the two paths simultaneously): \(x=-\tfrac{1}{17},\ y=\tfrac{22}{17}\).
Target line's slope \(=\tfrac67\), so the perpendicular path has slope \(-\tfrac76\):
\[
y-\frac{22}{17}=-\frac76\left(x+\frac{1}{17}\right)
\]
Clearing denominators (multiply through by \(6\times17=102\)):
\[
\boxed{119x+102y-125=0}
\]