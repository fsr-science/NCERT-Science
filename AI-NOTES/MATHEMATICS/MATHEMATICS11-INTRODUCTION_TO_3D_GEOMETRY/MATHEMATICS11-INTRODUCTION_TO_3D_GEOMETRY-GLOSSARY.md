
# Glossary & Quick Reference — Introduction to Three-Dimensional Geometry (NCERT Ch. 11)

> Standalone last-minute revision sheet. Paired with the full NOTES file for derivations and worked examples, and the REVISION-MINDMAP file for the concept map and problem-solving flowcharts.

## Core Terms


| Term                  | Meaning                                                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Coordinate axes**   | The three mutually perpendicular lines\(x\)-, \(y\)-, \(z\)-axis formed where three mutually perpendicular planes meet at a point \(O\)            |
| **Origin** \(O\)      | The common point of the three axes/planes; coordinates\((0,0,0)\)                                                                                  |
| **Coordinate planes** | The XY-, YZ-, and ZX-planes, each spanned by a pair of axes                                                                                        |
| **Octant**            | One of the 8 regions space is divided into by the three coordinate planes; numbered I–VIII by sign pattern                                        |
| **Ordered triplet**   | \((x,y,z)\) — the unique representation of a point in space, in one-to-one correspondence with points                                             |
| **Collinear points**  | Points lying on one straight line; testable via the distance formula (sum-of-two-distances test)                                                   |
| **Locus**             | The full set of points\(P\) satisfying a given distance condition — a plane, sphere, or other surface depending on the condition's algebraic form |
| **Centroid**          | The point that averages a triangle's three vertices coordinate-by-coordinate                                                                       |

## Octant Sign Table


| Octant | I | II | III | IV | V  | VI | VII | VIII |
| -------- | --- | ---- | ----- | ---- | ---- | ---- | ----- | ------ |
| \(x\)  | + | − | −  | +  | +  | − | −  | +    |
| \(y\)  | + | +  | −  | − | +  | +  | −  | −   |
| \(z\)  | + | +  | +   | +  | − | − | −  | −   |

## Special Point Forms (Domain/Notation Discipline)


| Location   | Form        |
| ------------ | ------------- |
| Origin     | \((0,0,0)\) |
| \(x\)-axis | \((x,0,0)\) |
| \(y\)-axis | \((0,y,0)\) |
| \(z\)-axis | \((0,0,z)\) |
| XY-plane   | \((x,y,0)\) |
| YZ-plane   | \((0,y,z)\) |
| ZX-plane   | \((x,0,z)\) |

## Formula Sheet

**Distance between two points** \(P(x_1,y_1,z_1)\), \(Q(x_2,y_2,z_2)\):
\[
\boxed{PQ=\sqrt{(x_2-x_1)^2+(y_2-y_1)^2+(z_2-z_1)^2}}
\]

**Distance from the origin** to \(Q(x,y,z)\):
\[
\boxed{OQ=\sqrt{x^2+y^2+z^2}}
\]

**Midpoint** of \(P_1(x_1,y_1,z_1)\), \(P_2(x_2,y_2,z_2)\) *(New — generalizes the 2D formula component-wise)*:
\[
\boxed{M=\left(\dfrac{x_1+x_2}{2},\ \dfrac{y_1+y_2}{2},\ \dfrac{z_1+z_2}{2}\right)}
\]

**Centroid** of a triangle with vertices \((x_1,y_1,z_1)\), \((x_2,y_2,z_2)\), \((x_3,y_3,z_3)\) *(New)*:
\[
\boxed{G=\left(\dfrac{x_1+x_2+x_3}{3},\ \dfrac{y_1+y_2+y_3}{3},\ \dfrac{z_1+z_2+z_3}{3}\right)}
\]

## Diagnostic Tests


| Question                           | Test                                                                                                               |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Are\(P,Q,R\) collinear?            | Compute\(PQ\), \(QR\), \(PR\); collinear iff one equals the sum of the other two                                   |
| Is a triangle right-angled?        | Compare only the**largest** squared side to the sum of the other two squared sides                                 |
| Is\(ABCD\) a parallelogram?        | Midpoint of diagonal\(AC\) = midpoint of diagonal \(BD\) (sufficient in 3D; equal-opposite-sides alone is **not**) |
| Is that parallelogram a rectangle? | Diagonals equal in length (\(AC=BD\)), in addition to bisecting each other                                         |

## Locus Equation Types


| Condition                  | Resulting equation                                        | Geometric object                              |
| ---------------------------- | ----------------------------------------------------------- | ----------------------------------------------- |
| \(PA=PB\)                  | Linear in\(x,y,z\)                                        | Plane (perpendicular bisector plane of\(AB\)) |
| \(PA^2+PB^2=\text{const}\) | Quadratic in\(x,y,z\), pure \(x^2+y^2+z^2\) terms survive | Sphere                                        |
| \(PA+PB=\text{const}\)     | Quadratic after isolating and squaring twice              | Ellipsoid of revolution, foci\(A,B\)          |
