# Relations and Functions — Practice Questions (NCERT Exercises 2.1–2.3 & Miscellaneous)

> **Gap this file fills:** cross-checking the primary source (NCERT PDF) against the rest of this note set showed every in-text worked *Example* was covered in NOTES, but the actual **Exercise problem sets** — the questions students are assigned as homework — had no solutions anywhere. This file solves all of Exercise 2.1, 2.2, 2.3, and the chapter's Miscellaneous Exercise. Every answer here is recomputed from the given data, not copied from an answer key.

---

## Exercise 2.1 — Cartesian Products of Sets ⭐⭐

#### Q1. If \(\left(\dfrac{x}{3}+1,\ y-\dfrac{2}{3}\right) = \left(\dfrac{5}{3},\ \dfrac{1}{3}\right)\), find \(x\) and \(y\).

**Work:** Equate components separately.
\[
\frac{x}{3}+1=\frac{5}{3} \implies \frac{x}{3}=\frac{2}{3} \implies x=2,
\qquad
y-\frac{2}{3}=\frac{1}{3} \implies y=1
\]
\[
\boxed{x=2,\ y=1}
\]

#### Q2. If \(n(A)=3\) and \(B=\{3,4,5\}\), find \(n(A\times B)\).

**Work:** \(n(A\times B)=n(A)\cdot n(B) = 3\times3 = \boxed{9}\)

#### Q3. \(G=\{7,8\}\), \(H=\{5,4,2\}\). Find \(G\times H\) and \(H\times G\).

**Work:**
\[
\boxed{G\times H = \{(7,5),(7,4),(7,2),(8,5),(8,4),(8,2)\}}
\]
\[
\boxed{H\times G = \{(5,7),(5,8),(4,7),(4,8),(2,7),(2,8)\}}
\]
**Check:** both have \(6\) elements, since \(n(G)\cdot n(H)=n(H)\cdot n(G)=6\) — same size, different pairs (as expected, \(G\times H\neq H\times G\)).

#### Q4. State true/false; correct the false ones.

**(i)** If \(P=\{m,n\}\) and \(Q=\{n,m\}\), then \(P\times Q=\{(m,n),(n,m)\}\).
**False.** As sets, \(Q=\{n,m\}=\{m,n\}=P\), so \(P\times Q\) has \(2\times2=4\) pairs, not \(2\): \(\boxed{P\times Q = \{(m,m),(m,n),(n,m),(n,n)\}}\)

**(ii)** If \(A,B\) are non-empty, then \(A\times B\) is a non-empty set of ordered pairs \((x,y)\) with \(x\in A, y\in B\).
\(\boxed{\text{True}}\) — this is exactly Definition 1.

**(iii)** If \(A=\{1,2\}\), \(B=\{3,4\}\), then \(A\times(B\cap\phi)=\phi\).
\(\boxed{\text{True}}\) — \(B\cap\phi=\phi\) always, and anything \(\times\,\phi=\phi\).

#### Q5. If \(A=\{-1,1\}\), find \(A\times A\times A\).

**Work:** \(2^3=8\) triplets, each coordinate independently \(\pm1\):
\[
\boxed{A\times A\times A = \{(-1,-1,-1),(-1,-1,1),(-1,1,-1),(-1,1,1),(1,-1,-1),(1,-1,1),(1,1,-1),(1,1,1)\}}
\]

#### Q6. If \(A\times B=\{(a,x),(a,y),(b,x),(b,y)\}\), find \(A,B\).

**Approach:** first elements across all pairs form \(A\); second elements form \(B\).
\[
\boxed{A=\{a,b\},\quad B=\{x,y\}}
\]
**Check:** \(n(A)\cdot n(B)=2\times2=4\), matching the 4 given pairs.

#### Q7. \(A=\{1,2\}\), \(B=\{1,2,3,4\}\), \(C=\{5,6\}\), \(D=\{5,6,7,8\}\). Verify:

**(i)** \(A\times(B\cap C) = (A\times B)\cap(A\times C)\)

**Work:** \(B\cap C=\phi\) (no common elements), so \(A\times(B\cap C)=\phi\).
\(A\times B=\{(1,1),(1,2),(1,3),(1,4),(2,1),(2,2),(2,3),(2,4)\}\), \(A\times C=\{(1,5),(1,6),(2,5),(2,6)\}\) — these share no pairs, so \((A\times B)\cap(A\times C)=\phi\).
\(\boxed{\text{Both sides} = \phi\ \checkmark}\)

**(ii)** \(A\times C\) is a subset of \(B\times D\).

**Work:** \(A\times C=\{(1,5),(1,6),(2,5),(2,6)\}\). Since \(A\subseteq B\) and \(C\subseteq D\), every pair \((a,c)\) with \(a\in A\subseteq B,\ c\in C\subseteq D\) automatically satisfies \((a,c)\in B\times D\).
\(\boxed{A\times C \subseteq B\times D\ \checkmark}\)

#### Q8. \(A=\{1,2\}\), \(B=\{3,4\}\). Write \(A\times B\); how many subsets?

**Work:** \(A\times B=\{(1,3),(1,4),(2,3),(2,4)\}\), a 4-element set, so it has \(2^4=\boxed{16}\) subsets:
\[
\phi,\ \{(1,3)\},\ \{(1,4)\},\ \{(2,3)\},\ \{(2,4)\},
\]
\[
\{(1,3),(1,4)\},\ \{(1,3),(2,3)\},\ \{(1,3),(2,4)\},\ \{(1,4),(2,3)\},\ \{(1,4),(2,4)\},\ \{(2,3),(2,4)\},
\]
\[
\{(1,3),(1,4),(2,3)\},\ \{(1,3),(1,4),(2,4)\},\ \{(1,3),(2,3),(2,4)\},\ \{(1,4),(2,3),(2,4)\},
\]
\[
\{(1,3),(1,4),(2,3),(2,4)\}
\]

#### Q9. \(n(A)=3\), \(n(B)=2\). \((x,1),(y,2),(z,1)\in A\times B\), \(x,y,z\) distinct. Find \(A,B\).

**Approach:** first elements give \(A\); second elements give \(B\).
**Work:** first elements \(x,y,z\) are 3 distinct values \(\implies A=\{x,y,z\}\). Second elements \(\{1,2,1\}\) give the distinct set \(\{1,2\}\), and \(n(B)=2\) confirms nothing extra is missing.
\[
\boxed{A=\{x,y,z\},\quad B=\{1,2\}}
\]

#### Q10. \(A\times A\) has 9 elements including \((-1,0)\) and \((0,1)\). Find \(A\) and the remaining elements.

**Approach:** \(n(A\times A)=n(A)^2=9\implies n(A)=3\). Every coordinate appearing in a pair of \(A\times A\) must itself be an element of \(A\).
**Work:** the given pairs contribute coordinates \(-1,0,1\) — exactly 3 distinct values, matching \(n(A)=3\).
\[
\boxed{A=\{-1,0,1\}}
\]
Listing all 9 pairs of \(A\times A\) and removing the two already given:
\[
\boxed{\text{Remaining} = \{(-1,-1),(-1,1),(0,-1),(0,0),(1,-1),(1,0),(1,1)\}}
\]

---

## Exercise 2.2 — Relations ⭐⭐

#### Q1. \(A=\{1,\dots,14\}\). \(R=\{(x,y): 3x-y=0,\ x,y\in A\}\). Find domain, codomain, range.

**Work:** \(y=3x\); need \(y\in A\), i.e.\ \(y\leq14\), so \(x\in\{1,2,3,4\}\) (at \(x=5\), \(y=15\notin A\)).
\[
R=\{(1,3),(2,6),(3,9),(4,12)\}
\]
\[
\boxed{\text{Domain}=\{1,2,3,4\},\quad \text{Codomain}=A=\{1,\dots,14\},\quad \text{Range}=\{3,6,9,12\}}
\]

#### Q2. \(R\) on \(\mathbb{N}\): \(R=\{(x,y): y=x+5,\ x<4,\ x,y\in\mathbb{N}\}\). Roster form, domain, range.

**Work:** \(x\in\{1,2,3\}\) gives \(y\in\{6,7,8\}\):
\[
\boxed{R=\{(1,6),(2,7),(3,8)\},\quad \text{Domain}=\{1,2,3\},\quad \text{Range}=\{6,7,8\}}
\]

#### Q3. \(A=\{1,2,3,5\}\), \(B=\{4,6,9\}\). \(R=\{(x,y): |x-y| \text{ odd}\}\). Roster form.

**Work:** checking all 12 pairs of \(A\times B\) for odd absolute difference:

| \(x\backslash y\) | 4 | 6 | 9 |
|---|---|---|---|
| 1 | 3 odd ✓ | 5 odd ✓ | 8 even |
| 2 | 2 even | 4 even | 7 odd ✓ |
| 3 | 1 odd ✓ | 3 odd ✓ | 6 even |
| 5 | 1 odd ✓ | 1 odd ✓ | 4 even |

\[
\boxed{R = \{(1,4),(1,6),(2,9),(3,4),(3,6),(5,4),(5,6)\}}
\]

#### Q4. Fig 2.7: \(P=\{5,6,7\}\to Q=\{3,4,5\}\), with \(5\to3\), \(6\to4\), \(7\to5\). Set-builder and roster form; domain and range.

**Approach:** each image is exactly \(2\) less than its preimage.
\[
\boxed{\text{Set-builder: } R=\{(x,y): x=y+2,\ x\in P,\ y\in Q\}}
\qquad
\boxed{\text{Roster: } R=\{(5,3),(6,4),(7,5)\}}
\]
\[
\boxed{\text{Domain}=\{5,6,7\},\quad \text{Range}=\{3,4,5\}}
\]

#### Q5. \(A=\{1,2,3,4,6\}\). \(R=\{(a,b): a,b\in A,\ b \text{ exactly divisible by } a\}\) (i.e.\ \(a\mid b\)).

**Work:** for each \(a\), list multiples of \(a\) within \(A\):
\[
a{=}1: 1,2,3,4,6;\quad a{=}2: 2,4,6;\quad a{=}3: 3,6;\quad a{=}4: 4;\quad a{=}6: 6
\]
\[
\boxed{R=\{(1,1),(1,2),(1,3),(1,4),(1,6),(2,2),(2,4),(2,6),(3,3),(3,6),(4,4),(6,6)\}}
\]
**(ii) Domain** \(=\{1,2,3,4,6\}=A\) (every element divides at least itself).
**(iii) Range** \(=\{1,2,3,4,6\}=A\) (every element is divisible by \(1\) at least).

#### Q6. \(R=\{(x,x+5): x\in\{0,1,2,3,4,5\}\}\). Domain and range.

**Work:** \(R=\{(0,5),(1,6),(2,7),(3,8),(4,9),(5,10)\}\)
\[
\boxed{\text{Domain}=\{0,1,2,3,4,5\},\quad \text{Range}=\{5,6,7,8,9,10\}}
\]

#### Q7. \(R=\{(x,x^3): x \text{ prime} <10\}\). Roster form.

**Work:** primes below 10 are \(2,3,5,7\); cube each:
\[
\boxed{R=\{(2,8),(3,27),(5,125),(7,343)\}}
\]

#### Q8. \(A=\{x,y,z\}\), \(B=\{1,2\}\). Number of relations from \(A\) to \(B\).

**Work:** \(n(A\times B)=3\times2=6\), so the number of relations (subsets of \(A\times B\)) is \(2^6 = \boxed{64}\)

#### Q9. \(R\) on \(\mathbb{Z}\): \(R=\{(a,b): a,b\in\mathbb{Z},\ a-b \text{ is an integer}\}\). Domain and range.

**Approach:** since \(a,b\) are themselves already integers, \(a-b\) is automatically an integer — the condition places **no restriction at all**.
\[
\boxed{R=\mathbb{Z}\times\mathbb{Z},\qquad \text{Domain}=\mathbb{Z},\quad \text{Range}=\mathbb{Z}}
\]

---

## Exercise 2.3 — Functions ⭐⭐⭐

#### Q1. Which of the following are functions? If so, find domain and range.

**(i)** \(\{(2,1),(5,1),(8,1),(11,1),(14,1),(17,1)\}\) — all six first elements are distinct, so each has a unique image (even though every image happens to be the same value \(1\) — that's allowed).
\(\boxed{\text{Function.}\ \text{Domain}=\{2,5,8,11,14,17\},\ \text{Range}=\{1\}}\)

**(ii)** \(\{(2,1),(4,2),(6,3),(8,4),(10,5),(12,6),(14,7)\}\) — all first elements distinct.
\(\boxed{\text{Function.}\ \text{Domain}=\{2,4,6,8,10,12,14\},\ \text{Range}=\{1,2,3,4,5,6,7\}}\)

**(iii)** \(\{(1,3),(1,5),(2,5)\}\) — the first element \(1\) appears twice with **different** images (\(3\) and \(5\)).
\(\boxed{\text{Not a function}}\) (uniqueness fails at \(x=1\)).

#### Q2. Domain and range of:

**(i)** \(f(x)=-|x|\). Defined for every real \(x\), so **Domain** \(=\mathbb{R}\). Since \(|x|\geq0\), \(-|x|\leq0\), and every non-positive value is attained (e.g.\ \(-|{-a}|=-a\) for any \(a\geq0\)).
\[
\boxed{\text{Domain}=\mathbb{R},\quad \text{Range}=(-\infty,0]}
\]

**(ii)** \(f(x)=\sqrt{9-x^2}\). Need \(9-x^2\geq0 \iff -3\leq x\leq3\).
\[
\boxed{\text{Domain}=[-3,3]}
\]
As \(x\) ranges over \([-3,3]\), \(9-x^2\) ranges over \([0,9]\), so \(\sqrt{9-x^2}\) ranges over \([0,3]\):
\[
\boxed{\text{Range}=[0,3]}
\]
**Check:** at \(x=0\) (interior point), \(f(0)=3\) — the maximum, attained; at \(x=\pm3\) (endpoints), \(f=0\) — the minimum, also attained. Both ends of the range are closed, consistent with a continuous function on a closed domain.

#### Q3. \(f(x)=2x-5\). Find \(f(0), f(7), f(-3)\).

\[
\boxed{f(0)=-5,\qquad f(7)=14-5=9,\qquad f(-3)=-6-5=-11}
\]

#### Q4. \(t(C) = \dfrac{9C}{5}+32\) (Celsius to Fahrenheit).

\[
t(0)=32,\qquad t(28)=\frac{252}{5}+32=50.4+32=82.4,\qquad t(-10)=-18+32=14
\]
For \(t(C)=212\): \(\dfrac{9C}{5}=180 \implies C=100\).
\[
\boxed{t(0)=32,\quad t(28)=82.4,\quad t(-10)=14,\quad C=100 \text{ when } t(C)=212}
\]
**Check:** \(C=100\) is water's boiling point in Celsius, and \(212°\)F is the same point in Fahrenheit — a familiar sanity check for this specific formula.

#### Q5. Find the range:

**(i)** \(f(x)=2-3x\), \(x\in\mathbb{R}\), \(x>0\). As \(x\to0^+\), \(f\to2\) (never attained, since \(x=0\) is excluded); as \(x\to\infty\), \(f\to-\infty\).
\[
\boxed{\text{Range}=(-\infty,2)}
\]

**(ii)** \(f(x)=x^2+2\), \(x\in\mathbb{R}\). Since \(x^2\geq0\), \(f(x)\geq2\), with equality at \(x=0\).
\[
\boxed{\text{Range}=[2,\infty)}
\]

**(iii)** \(f(x)=x\), \(x\in\mathbb{R}\) — the identity function.
\[
\boxed{\text{Range}=\mathbb{R}}
\]

---

## Miscellaneous Exercise ⭐⭐⭐

#### Q1. \(f(x)=x^2\) for \(0\leq x\leq3\), \(3x\) for \(3\leq x\leq10\). \(g(x)=x^2\) for \(0\leq x\leq2\), \(3x\) for \(2\leq x\leq10\). Show \(f\) is a function, \(g\) is not.

**Approach:** where two pieces of a piecewise rule overlap at a single boundary point, both pieces must agree — otherwise that one input gets two different outputs, which breaks the definition of a function.
**Work:** for \(f\), check the boundary \(x=3\): piece 1 gives \(f(3)=3^2=9\); piece 2 gives \(f(3)=3(3)=9\). **Same value** — \(f\) is well-defined at every point of \([0,10]\), hence a function.
For \(g\), check the boundary \(x=2\): piece 1 gives \(g(2)=2^2=4\); piece 2 gives \(g(2)=3(2)=6\). **Two different values** assigned to the same input \(x=2\) — this violates the definition of a function.
\[
\boxed{f \text{ is a function (boundary values agree)};\quad g \text{ is not (boundary values conflict: } 4\neq6\text{)}}
\]

#### Q2. \(f(x)=x^2\). Find \(\dfrac{f(1.1)-f(1)}{1.1-1}\).

**Work:** \(f(1.1)=1.21\), \(f(1)=1\).
\[
\frac{1.21-1}{0.1} = \frac{0.21}{0.1} = \boxed{2.1}
\]

#### Q3. Find the domain of \(f(x)=\dfrac{x^2+2x+1}{x^2-8x+12}\).

**Work:** factor the denominator fully: \(x^2-8x+12=(x-6)(x-2)\), zero at \(x=2,6\).
\[
\boxed{\text{Domain}=\mathbb{R}-\{2,6\}}
\]

#### Q4. Domain and range of \(f(x)=\sqrt{x-1}\).

**Work:** need \(x-1\geq0 \implies x\geq1\).
\[
\boxed{\text{Domain}=[1,\infty)}
\]
As \(x-1\) ranges over \([0,\infty)\), so does its square root.
\[
\boxed{\text{Range}=[0,\infty)}
\]

#### Q5. Domain and range of \(f(x)=|x-1|\).

**Work:** defined for every real \(x\); the absolute value is always \(\geq0\) and attains every non-negative value.
\[
\boxed{\text{Domain}=\mathbb{R},\quad \text{Range}=[0,\infty)}
\]

#### Q6. \(f=\left\{\left(x,\dfrac{x^2}{1+x^2}\right): x\in\mathbb{R}\right\}\). Determine the range.

This is exactly the Additional-Practice example worked in full in NOTES §2.4.2 (rewrite as \(1-\frac1{1+x^2}\), bound \(1+x^2\geq1\)):
\[
\boxed{\text{Range}=[0,1)}
\]

#### Q7. \(f,g:\mathbb{R}\to\mathbb{R}\), \(f(x)=x+1\), \(g(x)=2x-3\). Find \(f+g\), \(f-g\), \(\dfrac{f}{g}\).

**Work:**
\[
(f+g)(x) = (x+1)+(2x-3) = \boxed{3x-2}
\]
\[
(f-g)(x) = (x+1)-(2x-3) = \boxed{4-x}
\]
\[
\left(\frac{f}{g}\right)(x) = \frac{x+1}{2x-3},\quad \boxed{x\neq\tfrac32}
\]
**Check:** the quotient excludes \(x=\tfrac32\) precisely because \(g(\tfrac32)=2(\tfrac32)-3=0\) — the same domain-narrowing rule used throughout §2.4.2.

#### Q8. \(f=\{(1,1),(2,3),(0,-1),(-1,-3)\}\), \(f(x)=ax+b\) for integers \(a,b\). Determine \(a,b\).

This is the same computation as NCERT Example 20, now stated as an exercise — see NOTES §2.4.2 for the full Given/Find/Approach/Work/Check. Using \((0,-1)\): \(b=-1\). Using \((1,1)\): \(a+b=1\implies a=2\).
\[
\boxed{a=2,\ b=-1 \quad (f(x)=2x-1)}
\]
**Check:** \((2,3)\to 2(2)-1=3\) ✓; \((-1,-3)\to2(-1)-1=-3\) ✓ — all four given points fit.

#### Q9. \(R\) from \(\mathbb{N}\) to \(\mathbb{N}\): \(R=\{(a,b): a,b\in\mathbb{N},\ a=b^2\}\). Are the following true?

**(i)** \((a,a)\in R\) for all \(a\in\mathbb{N}\)?
This requires \(a=a^2\), i.e.\ \(a(a-1)=0 \implies a\in\{0,1\}\). Since this must hold for *every* natural number and fails already at \(a=2\) (\(2\neq2^2=4\)):
\[
\boxed{\text{False} — \text{counterexample } a=2}
\]

**(ii)** \((a,b)\in R \implies (b,a)\in R\)?
Take \(a=4,b=2\): \(4=2^2\) ✓ so \((4,2)\in R\). Is \((2,4)\in R\)? Need \(2=4^2=16\) — false.
\[
\boxed{\text{False} — \text{counterexample } (4,2)\in R \text{ but } (2,4)\notin R}
\]

**(iii)** \((a,b)\in R,\ (b,c)\in R \implies (a,c)\in R\)?
Take \(c=2\), so \(b=c^2=4\), so \(a=b^2=16\). Is \((a,c)=(16,2)\in R\)? Need \(16=2^2=4\) — false.
\[
\boxed{\text{False} — \text{counterexample } a=16, b=4, c=2}
\]
**Check:** compare with Miscellaneous Example 19 in NOTES, where the same three properties were tested for a *different* relation and came out **true** every time — a good reminder that reflexivity/symmetry/transitivity are properties of the *specific* relation, not automatic features of "any" relation.

#### Q10. \(A=\{1,2,3,4\}\), \(B=\{1,5,9,11,15,16\}\), \(f=\{(1,5),(2,9),(3,1),(4,5),(2,11)\}\). Are the following true?

**(i)** \(f\) is a relation from \(A\) to \(B\)?
Every pair has its first element in \(A\) and second in \(B\), so \(f\subseteq A\times B\).
\[
\boxed{\text{True} — f \text{ is a relation}}
\]

**(ii)** \(f\) is a function from \(A\) to \(B\)?
The element \(2\in A\) appears **twice** with different images: \((2,9)\) and \((2,11)\).
\[
\boxed{\text{False} — \text{uniqueness fails at } x=2}
\]

#### Q11. \(f=\{(ab,\ a+b): a,b\in\mathbb{Z}\}\subseteq\mathbb{Z}\times\mathbb{Z}\). Is \(f\) a function from \(\mathbb{Z}\) to \(\mathbb{Z}\)?

**Approach:** check whether the same product \(ab\) can arise from factor pairs with different sums.
**Work:** take \(ab=6\): \((a,b)=(1,6)\) gives sum \(7\); \((a,b)=(2,3)\) gives sum \(5\); \((a,b)=(-1,-6)\) gives sum \(-7\). The single first-element \(6\) is paired with at least three different second elements (\(7,5,-7,\dots\)).
\[
\boxed{\text{Not a function} — \text{the same product can come from factor pairs with different sums}}
\]

#### Q12. \(A=\{9,10,11,12,13\}\), \(f:A\to\mathbb{N}\), \(f(n)=\) highest prime factor of \(n\). Find the range.

**Work:** factorize each element of \(A\):
\[
9=3^2 \Rightarrow f(9)=3,\quad 10=2\cdot5\Rightarrow f(10)=5,\quad 11 \text{ prime}\Rightarrow f(11)=11,
\]
\[
12=2^2\cdot3\Rightarrow f(12)=3,\quad 13 \text{ prime}\Rightarrow f(13)=13
\]
\[
\boxed{\text{Range}=\{3,5,11,13\}}
\]