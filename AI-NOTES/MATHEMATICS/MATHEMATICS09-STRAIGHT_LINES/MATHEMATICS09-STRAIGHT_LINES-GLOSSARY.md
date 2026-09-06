
# Straight Lines — Glossary & Quick Reference

> Standalone recall sheet: term definitions, then every formula from the chapter grouped by topic. Pairs with **STRAIGHT_LINES-NOTES.md** for the full derivations.

## Term Glossary


| Term                                        | Meaning                                                                                                                         |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **Inclination** (\(\theta\))                | Angle a line makes with the positive\(x\)-direction, measured anticlockwise; \(0^\circ \le \theta \le 180^\circ\)               |
| **Slope / gradient** (\(m\))                | \(m=\tan\theta\); undefined when \(\theta=90^\circ\) (vertical line)                                                            |
| **\(y\)-intercept** (\(c\))                 | Signed distance where a line crosses the\(y\)-axis; positive above the origin, negative below                                   |
| **\(x\)-intercept** (\(d\) or \(a\))        | Signed distance where a line crosses the\(x\)-axis                                                                              |
| **General linear equation**                 | Any equation of the form\(Ax+By+C=0\), with \(A,B\) not both zero                                                               |
| **Concurrent lines**                        | Three or more lines that all pass through one common point                                                                      |
| **Collinear points**                        | Points that lie on a single straight line (area of the triangle they form is\(0\))                                              |
| **Locus**                                   | The path traced by a point obeying a stated geometric condition (e.g. equidistant from two fixed lines)                         |
| **Image / reflection of a point in a line** | The point\(Q\) such that the given line is the perpendicular bisector of the segment joining the original point \(P\) and \(Q\) |

## Quick Reference — Recall (Class 10 carry-forward)


| Result                                   | Formula                                                                    |
| ------------------------------------------ | ---------------------------------------------------------------------------- |
| Distance between two points              | \(PQ=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2}\)                                      |
| Section formula (ratio\(m:n\), internal) | \(\left(\dfrac{mx_2+nx_1}{m+n},\dfrac{my_2+ny_1}{m+n}\right)\)             |
| Midpoint (\(m=n\))                       | \(\left(\dfrac{x_1+x_2}{2},\dfrac{y_1+y_2}{2}\right)\)                     |
| Area of a triangle                       | \(\dfrac12\left\lvert x_1(y_2-y_3)+x_2(y_3-y_1)+x_3(y_1-y_2)\right\rvert\) |
| Collinearity test                        | Area\(=0 \iff\) the three points are collinear                             |

## Quick Reference — Slope and Angles


| Result                        | Formula                                                         | Notes                                                                                            |
| ------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| Slope from inclination        | \(m=\tan\theta\)                                                | undefined at\(\theta=90^\circ\)                                                                  |
| Slope from two points         | \(m=\dfrac{y_2-y_1}{x_2-x_1}\)                                  | requires\(x_1\ne x_2\)                                                                           |
| Slope of\(x\)-axis            | \(m=0\)                                                         | —                                                                                               |
| Slope of\(y\)-axis            | undefined                                                       | never substitute\(m=\infty\)                                                                     |
| Parallel condition            | \(m_1=m_2\)                                                     | —                                                                                               |
| Perpendicular condition       | \(m_1m_2=-1\)                                                   | —                                                                                               |
| Acute angle between two lines | \(\tan\theta=\left\lvert\dfrac{m_2-m_1}{1+m_1m_2}\right\rvert\) | needs\(1+m_1m_2\ne0\); if one line is vertical use \(\tan(\text{angle})=\dfrac{1}{m_1}\) instead |

## Quick Reference — Equations of a Line


| Given data                                    | Equation                                  | Case                     |
| ----------------------------------------------- | ------------------------------------------- | -------------------------- |
| Horizontal, distance\(a\) from \(x\)-axis     | \(y=a\) or \(y=-a\)                       | sign by side of axis     |
| Vertical, distance\(b\) from \(y\)-axis       | \(x=b\) or \(x=-b\)                       | sign by side of axis     |
| Point\((x_0,y_0)\) + slope \(m\)              | \(y-y_0=m(x-x_0)\)                        | point-slope form         |
| Two points\((x_1,y_1),(x_2,y_2)\)             | \(y-y_1=\dfrac{y_2-y_1}{x_2-x_1}(x-x_1)\) | two-point form           |
| Slope\(m\) + \(y\)-intercept \(c\)            | \(y=mx+c\)                                | slope-intercept, Case I  |
| Slope\(m\) + \(x\)-intercept \(d\)            | \(y=m(x-d)\)                              | slope-intercept, Case II |
| \(x\)-intercept \(a\) + \(y\)-intercept \(b\) | \(\dfrac{x}{a}+\dfrac{y}{b}=1\)           | intercept form           |
| Any of the above, standardized                | \(Ax+By+C=0\)                             | general linear equation  |

## Quick Reference — Distance


| Result                                | Formula                                                | Notes                                 |
| --------------------------------------- | -------------------------------------------------------- | --------------------------------------- |
| Point to line                         | \(d=\dfrac{\lvert Ax_1+By_1+C\rvert}{\sqrt{A^2+B^2}}\) | line**must** be in general form first |
| Between parallel lines (slope form)   | \(d=\dfrac{\lvert c_1-c_2\rvert}{\sqrt{1+m^2}}\)       | shared slope\(m\)                     |
| Between parallel lines (general form) | \(d=\dfrac{\lvert C_1-C_2\rvert}{\sqrt{A^2+B^2}}\)     | same\(A,B\) in both                   |
