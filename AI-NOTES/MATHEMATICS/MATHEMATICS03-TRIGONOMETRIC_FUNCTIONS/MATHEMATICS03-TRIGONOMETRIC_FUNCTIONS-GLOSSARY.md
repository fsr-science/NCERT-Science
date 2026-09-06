
# Trigonometric Functions — Quick Reference / Glossary

### NCERT Class 11 Mathematics, Chapter 3 — formula sheet for last-minute revision

---

## Angle measure

\[
\theta = \frac{l}{r}\ (\text{radian}),\qquad l=r\theta
\]

\[
\pi\ \text{radian} = 180°
\qquad
\text{Radian} = \frac{\pi}{180}\times\text{Degree}
\qquad
\text{Degree} = \frac{180}{\pi}\times\text{Radian}
\]

\[
1°=60',\qquad 1'=60''
\]


| Degree | $30°$  | $45°$  | $60°$  | $90°$  | $180°$ | $270°$  | $360°$ |
| -------- | --------- | --------- | --------- | --------- | --------- | ---------- | --------- |
| Radian | $\pi/6$ | $\pi/4$ | $\pi/3$ | $\pi/2$ | $\pi$   | $3\pi/2$ | $2\pi$  |

**Convention:** $\theta°$ = degree measure; $\beta$ (no ° symbol) = radian measure.

---

## Standard-angle values


|        | $0°$ | $\pi/6$    | $\pi/4$    | $\pi/3$    | $\pi/2$ | $\pi$ | $3\pi/2$ | $2\pi$ |
| -------- | ------- | ------------ | ------------ | ------------ | --------- | ------- | ---------- | -------- |
| $\sin$ | 0     | $1/2$      | $1/\sqrt2$ | $\sqrt3/2$ | 1       | 0     | $-1$     | 0      |
| $\cos$ | 1     | $\sqrt3/2$ | $1/\sqrt2$ | $1/2$      | 0       | $-1$  | 0        | 1      |
| $\tan$ | 0     | $1/\sqrt3$ | 1          | $\sqrt3$   | undef.  | 0     | undef.   | 0      |

$\operatorname{cosec},\sec,\cot$ = reciprocals of $\sin,\cos,\tan$ (undefined where the reciprocated value is $0$).

Frequently-derived extras: $\sin15°=\dfrac{\sqrt3-1}{2\sqrt2}$, $\tan\dfrac\pi{12}=2-\sqrt3$, $\tan\dfrac\pi8=\sqrt2-1$.

---

## Domain, range, and periodicity


| Function                | Domain                  | Range                        | Period | Parity |
| ------------------------- | ------------------------- | ------------------------------ | -------- | -------- |
| $\sin x$                | $\mathbb{R}$            | $[-1,1]$                     | $2\pi$ | odd    |
| $\cos x$                | $\mathbb{R}$            | $[-1,1]$                     | $2\pi$ | even   |
| $\tan x$                | $x\neq(2n+1)\tfrac\pi2$ | $\mathbb{R}$                 | $\pi$  | odd    |
| $\cot x$                | $x\neq n\pi$            | $\mathbb{R}$                 | $\pi$  | odd    |
| $\sec x$                | $x\neq(2n+1)\tfrac\pi2$ | $(-\infty,-1]\cup[1,\infty)$ | $2\pi$ | even   |
| $\operatorname{cosec}x$ | $x\neq n\pi$            | $(-\infty,-1]\cup[1,\infty)$ | $2\pi$ | odd    |

\[
\sin x=0 \iff x=n\pi \qquad\qquad \cos x=0\iff x=(2n+1)\tfrac\pi2 \qquad (n\in\mathbb{Z})
\]

---

## Sign table (ASTC)


|                             | I | II | III | IV |
| ----------------------------- | :-: | :--: | :---: | :--: |
| $\sin,\operatorname{cosec}$ | + | + | − | − |
| $\cos,\sec$                 | + | − | − | + |
| $\tan,\cot$                 | + | − |  +  | − |

---

## Pythagorean identities

\[
\boxed{\sin^2x+\cos^2x=1}\qquad
\boxed{1+\tan^2x=\sec^2x}\ \left(x\neq(2n+1)\tfrac\pi2\right)\qquad
\boxed{1+\cot^2x=\operatorname{cosec}^2x}\ (x\neq n\pi)
\]

---

## Even/odd and periodicity shifts

\[
\sin(-x)=-\sin x \qquad \cos(-x)=\cos x
\]
\[
\sin(2n\pi+x)=\sin x \qquad \cos(2n\pi+x)=\cos x
\]


|                | $\cos$    | $\sin$    |
| ---------------- | ----------- | ----------- |
| $\tfrac\pi2-x$ | $\sin x$  | $\cos x$  |
| $\tfrac\pi2+x$ | $-\sin x$ | $\cos x$  |
| $\pi-x$        | $-\cos x$ | $\sin x$  |
| $\pi+x$        | $-\cos x$ | $-\sin x$ |
| $2\pi-x$       | $\cos x$  | $-\sin x$ |

---

## Sum and difference formulas

\[
\boxed{\cos(x+y)=\cos x\cos y-\sin x\sin y}\qquad
\boxed{\cos(x-y)=\cos x\cos y+\sin x\sin y}
\]
\[
\boxed{\sin(x+y)=\sin x\cos y+\cos x\sin y}\qquad
\boxed{\sin(x-y)=\sin x\cos y-\cos x\sin y}
\]
\[
\boxed{\tan(x+y)=\dfrac{\tan x+\tan y}{1-\tan x\tan y}}\qquad
\boxed{\tan(x-y)=\dfrac{\tan x-\tan y}{1+\tan x\tan y}}
\]
\[
\boxed{\cot(x+y)=\dfrac{\cot x\cot y-1}{\cot y+\cot x}}\qquad
\boxed{\cot(x-y)=\dfrac{\cot x\cot y+1}{\cot y-\cot x}}
\]

*Validity:* $\tan(x\pm y)$ needs none of $x,y,(x\pm y)$ an odd multiple of $\tfrac\pi2$; $\cot(x\pm y)$ needs none of $x,y,(x\pm y)$ a multiple of $\pi$.

---

## Double and triple angle formulas

\[
\boxed{\cos2x=\cos^2x-\sin^2x=2\cos^2x-1=1-2\sin^2x=\dfrac{1-\tan^2x}{1+\tan^2x}}
\]
\[
\boxed{\sin2x=2\sin x\cos x=\dfrac{2\tan x}{1+\tan^2x}}\qquad
\boxed{\tan2x=\dfrac{2\tan x}{1-\tan^2x}}
\]
\[
\boxed{\sin3x=3\sin x-4\sin^3x}\qquad
\boxed{\cos3x=4\cos^3x-3\cos x}\qquad
\boxed{\tan3x=\dfrac{3\tan x-\tan^3x}{1-3\tan^2x}}
\]

**Half-angle corollary:** $2\sin^2\dfrac x2=1-\cos x,\qquad 2\cos^2\dfrac x2=1+\cos x$

---

## Sum $\leftrightarrow$ Product formulas

**Sum/difference $\to$ product:**
\[
\boxed{\cos x+\cos y=2\cos\dfrac{x+y}2\cos\dfrac{x-y}2}\qquad
\boxed{\cos x-\cos y=-2\sin\dfrac{x+y}2\sin\dfrac{x-y}2}
\]
\[
\boxed{\sin x+\sin y=2\sin\dfrac{x+y}2\cos\dfrac{x-y}2}\qquad
\boxed{\sin x-\sin y=2\cos\dfrac{x+y}2\sin\dfrac{x-y}2}
\]

**Product $\to$ sum/difference:**
\[
\boxed{2\cos x\cos y=\cos(x+y)+\cos(x-y)}\qquad
\boxed{-2\sin x\sin y=\cos(x+y)-\cos(x-y)}
\]
\[
\boxed{2\sin x\cos y=\sin(x+y)+\sin(x-y)}\qquad
\boxed{2\cos x\sin y=\sin(x+y)-\sin(x-y)}
\]

---

## Symbol glossary


| Symbol           | Meaning                                                                           |
| ------------------ | ----------------------------------------------------------------------------------- |
| $\theta°$       | angle whose**degree** measure is $\theta$                                         |
| $\beta$ (no °)  | angle whose**radian** measure is $\beta$                                          |
| $l,r,\theta$     | arc length, radius, subtended angle (radian) —$l=r\theta$                        |
| $n\in\mathbb{Z}$ | $n$ is an integer (used for "all multiples of…" conditions)                      |
| ASTC             | quadrant mnemonic:**A**ll (I), **S**in (II), **T**an (III), **C**os (IV) positive |
