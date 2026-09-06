
# Complex Numbers — Glossary & Quick Reference

> **Level:** Class 11 Board (NCERT Ch. 4) — foundational for JEE
> **Source:** *Complex Numbers and Quadratic Equations*, NCERT Mathematics (Reprint 2025-26), Sections 4.1–4.5 + Miscellaneous Examples/Exercise

> [!warning] ⚠️ Scope note
> The uploaded excerpt covers §4.1–§4.5 (up to the Argand-plane geometric picture) plus the Miscellaneous Examples/Exercise and Summary. It stops **before** §4.5.1 (polar/modulus-argument representation) and **before** §4.6 (Quadratic Equations with complex roots) — even though those are part of the full chapter and the chapter title. This glossary, the accompanying NOTES, and the REVISION-MINDMAP cover only what's in the source; add a follow-up note for polar form and the quadratic-equations section when that source material is available.

## Symbol Glossary


| Symbol                         | Read as                  | Meaning                                                                                                       |
| -------------------------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------- |
| \(i\)                          | "iota"                   | Symbol for\(\sqrt{-1}\); defined by \(i^2 = -1\)                                                              |
| \(z = a + ib\)                 | "z equals a plus i b"    | A complex number;\(a, b \in \mathbb{R}\)                                                                      |
| \(\operatorname{Re} z\)        | "real part of z"         | The real number\(a\) in \(z = a+ib\)                                                                          |
| \(\operatorname{Im} z\)        | "imaginary part of z"    | The real number\(b\) in \(z = a+ib\) (note: \(b\) itself, **not** \(ib\))                                     |
| \(\bar z\)                     | "z bar" / conjugate of z | \(a - ib\) for \(z = a+ib\)                                                                                   |
| \(\lvert z \rvert\)            | "modulus of z"           | \(\sqrt{a^2+b^2}\), a non-negative real number                                                                |
| \(z^{-1}\) or \(\dfrac{1}{z}\) | "inverse of z"           | The unique complex number with\(z \cdot z^{-1} = 1\), valid for \(z \neq 0\)                                  |
| Argand plane                   | —                       | The\(xy\)-plane with \(z=x+iy\) plotted as point \((x,y)\); horizontal = real axis, vertical = imaginary axis |

## Core Definitions

> **Complex number:** \(z = a + ib\), \(a,b \in \mathbb{R}\). Equality: \(a+ib = c+id \iff a=c \text{ and } b=d\).

## Formula & Identity Sheet

### Arithmetic (for \(z_1 = a+ib\), \(z_2 = c+id\))


| Operation                                 | Formula                                                                                                 |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Addition                                  | \(z_1+z_2 = (a+c) + i(b+d)\)                                                                            |
| Subtraction                               | \(z_1-z_2 = z_1 + (-z_2) = (a-c) + i(b-d)\)                                                             |
| Multiplication                            | \(z_1 z_2 = (ac-bd) + i(ad+bc)\)                                                                        |
| Division (\(z_2 \neq 0\))                 | \(\dfrac{z_1}{z_2} = z_1 \cdot \dfrac{1}{z_2}\)                                                         |
| Multiplicative inverse (\(z=a+ib\neq 0\)) | \[\boxed{\dfrac{1}{z} = \dfrac{a}{a^2+b^2} + i\dfrac{-b}{a^2+b^2} = \dfrac{\bar z}{\lvert z\rvert^2}}\] |

### Powers of \(i\) (\(k\) any integer)

\[
\boxed{i^{4k} = 1,\quad i^{4k+1} = i,\quad i^{4k+2} = -1,\quad i^{4k+3} = -i}
\]


| \(i^1\) | \(i^2\) | \(i^3\) | \(i^4\) | \(i^{-1}\) | \(i^{-2}\) | \(i^{-3}\) | \(i^{-4}\) |
| --------- | --------- | --------- | --------- | ------------ | ------------ | ------------ | ------------ |
| \(i\)   | \(-1\)  | \(-i\)  | \(1\)   | \(-i\)     | \(-1\)     | \(i\)      | \(1\)      |

### Square Roots of Negative Reals

For \(a > 0\): \(\sqrt{-a} = \sqrt{a}\,\sqrt{-1} = \sqrt{a}\, i\) (this is the **only** value meant by the radical symbol, even though \(\pm\sqrt{a}\,i\) both square to \(-a\)).

> [!warning] ⚠️ The rule that breaks
> \(\sqrt{a}\times\sqrt{b} = \sqrt{ab}\) holds when **at most one** of \(a, b\) is negative. It **fails** when both \(a<0\) and \(b<0\): treating \(\sqrt{-1}\times\sqrt{-1}\) as \(\sqrt{(-1)(-1)} = \sqrt{1} = 1\) contradicts \(i^2=-1\). Always convert to \(i\)-form **first**, then multiply.

### Algebraic Identities (hold for all complex \(z_1, z_2\), same as for reals)

\[
\begin{aligned}
(z_1+z_2)^2 &= z_1^2 + 2z_1z_2 + z_2^2 \\
(z_1-z_2)^2 &= z_1^2 - 2z_1z_2 + z_2^2 \\
(z_1+z_2)^3 &= z_1^3 + 3z_1^2z_2 + 3z_1z_2^2 + z_2^3 \\
(z_1-z_2)^3 &= z_1^3 - 3z_1^2z_2 + 3z_1z_2^2 - z_2^3 \\
z_1^2 - z_2^2 &= (z_1+z_2)(z_1-z_2)
\end{aligned}
\]

### Modulus & Conjugate Rules


| Property                      | Statement                                                                                                 |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| Modulus of a product          | \(\lvert z_1 z_2\rvert = \lvert z_1\rvert\,\lvert z_2\rvert\)                                             |
| Modulus of a quotient         | \(\left\lvert \dfrac{z_1}{z_2}\right\rvert = \dfrac{\lvert z_1\rvert}{\lvert z_2\rvert}\), \(z_2 \neq 0\) |
| Conjugate of a product        | \(\overline{z_1 z_2} = \bar z_1\, \bar z_2\)                                                              |
| Conjugate of a sum/difference | \(\overline{z_1 \pm z_2} = \bar z_1 \pm \bar z_2\)                                                        |
| Conjugate of a quotient       | \(\overline{\left(\dfrac{z_1}{z_2}\right)} = \dfrac{\bar z_1}{\bar z_2}\), \(z_2 \neq 0\)                 |
| Product with own conjugate    | \(z\bar z = \lvert z \rvert^2\)                                                                           |

### Argand Plane (geometric picture, as far as the source goes)

- \(z = x+iy \leftrightarrow\) point \((x,y)\).
- \(\lvert z \rvert = \sqrt{x^2+y^2}\) = distance from origin to \((x,y)\).
- \(\bar z = x-iy \leftrightarrow\) point \((x,-y)\): the **mirror image of \(z\) in the real (x-) axis**.
- Points on the real axis: \(a+i0\). Points on the imaginary axis: \(0+ib\).

## Historical Note (as given in the source)

- Indian mathematicians **Mahavira** (850 CE) and **Bhaskara** (1150 CE) both stated that a negative quantity has no square root.
- **Cardan** (1545) obtained \(x = 5+\sqrt{-15}\), \(y = 5-\sqrt{-15}\) while solving \(x+y=10\), \(xy=40\), but dismissed them as "useless."
- **Albert Girard** (c. 1625) accepted square roots of negative numbers, noting they give as many roots as the equation's degree.
- **Euler** introduced the symbol \(i\) for \(\sqrt{-1}\).
- **W. R. Hamilton** (c. 1830) defined \(a+ib\) rigorously as the ordered pair \((a,b)\), removing the need to call these numbers "imaginary."
