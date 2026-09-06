
# Conic Sections — GLOSSARY & Quick Reference

*Companion to Conic-Sections-NOTES.md · NCERT Class 11 Mathematics, Chapter 10*

---

## Terms Glossary


| Term                           | Meaning                                                                                                                            |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Conic section (conic)**      | A curve formed by intersecting a double-napped right circular cone with a plane.                                                   |
| **Nappe**                      | One of the two cone-shaped parts a cone's vertex divides it into (upper/lower).                                                    |
| **Generator**                  | The rotating line that sweeps out the cone's surface.                                                                              |
| **Vertex (of a cone)**         | The fixed point where axis and generator meet; separates the two nappes.                                                           |
| **Degenerate conic**           | The section obtained when the cutting plane passes*through* the cone's vertex — a point, a line, or a pair of intersecting lines. |
| **Centre (circle)**            | The fixed point every point of the circle is equidistant from.                                                                     |
| **Radius**                     | The fixed distance from a circle's centre to any point on it.                                                                      |
| **Focus / Foci**               | The fixed point (parabola) or pair of fixed points (ellipse, hyperbola) used in each curve's distance-based definition.            |
| **Directrix**                  | The fixed line used in the parabola's (focus, line) definition.                                                                    |
| **Axis (parabola)**            | The line through the focus, perpendicular to the directrix.                                                                        |
| **Vertex (parabola)**          | Where the parabola crosses its axis.                                                                                               |
| **Latus rectum**               | The chord through a focus, perpendicular to the axis/transverse axis, with both ends on the curve.                                 |
| **Centre (ellipse/hyperbola)** | The midpoint of the segment joining the two foci.                                                                                  |
| **Major axis**                 | The (longer) axis of an ellipse, passing through both foci.                                                                        |
| **Minor axis**                 | The axis of an ellipse through the centre, perpendicular to the major axis.                                                        |
| **Vertices (ellipse)**         | The two endpoints of the major axis.                                                                                               |
| **Transverse axis**            | The axis of a hyperbola passing through both foci and both vertices.                                                               |
| **Conjugate axis**             | The axis of a hyperbola through the centre, perpendicular to the transverse axis.                                                  |
| **Vertices (hyperbola)**       | The two points where the hyperbola meets its transverse axis.                                                                      |
| **Eccentricity (\(e\))**       | Ratio of centre-to-focus distance to centre-to-vertex distance,\(e=c/a\).                                                          |
| **Equilateral hyperbola**      | A hyperbola in which\(a=b\).                                                                                                       |

---

## Quick Reference — Sections of a Cone

Let \(\alpha\) = cone's half-angle, \(\beta\) = angle between cutting plane and axis.


| \(\beta\) vs \(\alpha\)   | Plane misses vertex     | Plane passes through vertex                       |
| --------------------------- | ------------------------- | --------------------------------------------------- |
| \(\beta=90^\circ\)        | Circle                  | —                                                |
| \(\alpha<\beta<90^\circ\) | Ellipse                 | Point (when\(\alpha<\beta\le90^\circ\))           |
| \(\beta=\alpha\)          | Parabola                | A line (degenerate parabola)                      |
| \(0\le\beta<\alpha\)      | Hyperbola (both nappes) | Pair of intersecting lines (degenerate hyperbola) |

---

## Quick Reference — Circle


| Item                                                                        | Formula                                                                           |
| ----------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| Standard equation, centre\((h,k)\), radius \(r\)                            | \((x-h)^2+(y-k)^2=r^2\)                                                           |
| Centre at origin                                                            | \(x^2+y^2=r^2\)                                                                   |
| **General form** (derived from completing the square, e.g. NCERT Example 3) | \(x^2+y^2+2gx+2fy+c=0\) &nbsp;⟹&nbsp; centre \((-g,-f)\), \(r=\sqrt{g^2+f^2-c}\) |

---

## Quick Reference — Parabola

Vertex at origin. \(a>0\) throughout; \(a\) is a *distance*, the equation's sign gives the direction.


| Orientation | Equation     | Focus      | Directrix | Axis       | Opens  | Latus rectum |
| ------------- | -------------- | ------------ | ----------- | ------------ | -------- | -------------- |
| Right       | \(y^2=4ax\)  | \((a,0)\)  | \(x=-a\)  | \(x\)-axis | \(+x\) | \(4a\)       |
| Left        | \(y^2=-4ax\) | \((-a,0)\) | \(x=a\)   | \(x\)-axis | \(-x\) | \(4a\)       |
| Up          | \(x^2=4ay\)  | \((0,a)\)  | \(y=-a\)  | \(y\)-axis | \(+y\) | \(4a\)       |
| Down        | \(x^2=-4ay\) | \((0,-a)\) | \(y=a\)   | \(y\)-axis | \(-y\) | \(4a\)       |

**Reading rule:** which variable is squared ⟹ axis of symmetry. Sign of the linear term's coefficient ⟹ direction.

---

## Quick Reference — Ellipse

Centre at origin; \(c^2=a^2-b^2\) (so \(a>b>0\)); \(e=c/a\), \(0<e<1\).


| Orientation       | Equation                                | Foci          | Vertices      | Major axis length | Minor axis length | Latus rectum        |
| ------------------- | ----------------------------------------- | --------------- | --------------- | ------------------- | ------------------- | --------------------- |
| Foci on\(x\)-axis | \(\dfrac{x^2}{a^2}+\dfrac{y^2}{b^2}=1\) | \((\pm c,0)\) | \((\pm a,0)\) | \(2a\)            | \(2b\)            | \(\dfrac{2b^2}{a}\) |
| Foci on\(y\)-axis | \(\dfrac{x^2}{b^2}+\dfrac{y^2}{a^2}=1\) | \((0,\pm c)\) | \((0,\pm a)\) | \(2a\)            | \(2b\)            | \(\dfrac{2b^2}{a}\) |

**Reading rule:** compare the two **denominators** — the larger one sits under the major-axis variable.

---

## Quick Reference — Hyperbola

Centre at origin; \(c^2=a^2+b^2\); \(e=c/a\), \(e\ge1\).


| Orientation       | Equation                                | Foci          | Vertices      | Transverse axis length | Conjugate axis length | Latus rectum        |
| ------------------- | ----------------------------------------- | --------------- | --------------- | ------------------------ | ----------------------- | --------------------- |
| Foci on\(x\)-axis | \(\dfrac{x^2}{a^2}-\dfrac{y^2}{b^2}=1\) | \((\pm c,0)\) | \((\pm a,0)\) | \(2a\)                 | \(2b\)                | \(\dfrac{2b^2}{a}\) |
| Foci on\(y\)-axis | \(\dfrac{y^2}{a^2}-\dfrac{x^2}{b^2}=1\) | \((0,\pm c)\) | \((0,\pm a)\) | \(2a\)                 | \(2b\)                | \(\dfrac{2b^2}{a}\) |

**Reading rule:** compare the two **signs** — the positive term sits under the transverse-axis variable (denominator *size* is irrelevant here, unlike the ellipse).

---

## Quick Reference — Eccentricity Across the Family


| Curve     | Eccentricity |
| ----------- | -------------- |
| Circle    | \(e=0\)      |
| Ellipse   | \(0<e<1\)    |
| Parabola  | \(e=1\)      |
| Hyperbola | \(e>1\)      |

*(This unified view is a conceptual signpost, not a formula derived in this chapter — see Points to Ponder in the Notes file.)*
