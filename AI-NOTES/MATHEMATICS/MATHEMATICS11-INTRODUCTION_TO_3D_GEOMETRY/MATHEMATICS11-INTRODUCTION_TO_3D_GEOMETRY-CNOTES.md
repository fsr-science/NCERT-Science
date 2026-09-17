
# Revision Mind Map — Introduction to Three-Dimensional Geometry (NCERT Ch. 11)

> Pair this with the NOTES file (derivations, worked examples) and the GLOSSARY file (formula sheet). This file is for two things: seeing how the chapter's ideas connect, and knowing which procedure to reach for on a given problem.

## Concept Roadmap

```mermaid
flowchart TD
    P0[Prerequisite: 2D Cartesian coordinates and the Pythagorean theorem] --> D1["3 mutually perpendicular planes meet at O -- x, y, z axes (Section 11.2)"]
    D1 --> D2["Coordinate planes XY, YZ, ZX divide space into 8 octants (Table 11.1)"]
    D1 --> D3["Coordinates (x,y,z) of P = perpendicular distances from the YZ, ZX, XY planes (Section 11.3)"]
    D3 --> D4["Distance formula: PQ from two applications of Pythagoras (Section 11.4)"]
    D4 --> D5[Special case: distance from the origin]
    D4 --> A1["Application: collinearity test, PQ+QR=PR"]
    D4 --> A2["Application: classify a triangle -- isosceles / right-angled / scalene"]
    D3 --> D6["New: Midpoint and Centroid formulas -- componentwise average (Section 11.5)"]
    D6 --> A3["Application: 4th vertex of a parallelogram, medians, centroid problems"]
    D4 --> A4["Application: locus / equation of a set of points equidistant from given points"]
```

**Reading guide:** everything branches from one fact — a coordinate is a perpendicular distance from a plane, not an axis. Once octants (from signs) and the distance formula (from Pythagoras) are in hand, every application in the chapter — collinearity, triangle type, parallelograms, loci — is just that formula reused with a different diagnostic question layered on top.

## Problem-Solving Strategy 1 — Which Octant?

```mermaid
flowchart TD
    A["Given point (x, y, z)"] --> B{"Sign of x?"}
    B -- positive --> C{"Sign of y?"}
    B -- negative --> D{"Sign of y?"}
    C -- positive --> E{"Sign of z?"}
    C -- negative --> F{"Sign of z?"}
    D -- positive --> G{"Sign of z?"}
    D -- negative --> H{"Sign of z?"}
    E -- positive --> I1[Octant I]
    E -- negative --> I5[Octant V]
    F -- positive --> I4[Octant IV]
    F -- negative --> I8[Octant VIII]
    G -- positive --> I2[Octant II]
    G -- negative --> I6[Octant VI]
    H -- positive --> I3[Octant III]
    H -- negative --> I7[Octant VII]
```

**Reading guide:** walk the tree top to bottom, one sign at a time — \(x\) first, then \(y\), then \(z\). This is faster and less error-prone under exam pressure than scanning a table left to right.

## Problem-Solving Strategy 2 — Classifying Three Points

```mermaid
flowchart TD
    A["Three points P, Q, R given"] --> B["Compute PQ, QR, PR with the distance formula"]
    B --> C{"Does one distance equal the sum of the other two?"}
    C -- yes --> D["Collinear -- no triangle"]
    C -- no --> E["A genuine triangle"]
    E --> F["Identify the largest of PQ^2, QR^2, PR^2"]
    F --> G{"largest = sum of the other two squares?"}
    G -- yes --> H["Right-angled -- right angle opposite the largest side"]
    G -- no --> I{"Any two sides equal in length?"}
    H --> I
    I -- yes --> J[Isosceles]
    I -- no --> K[Scalene]
```

**Reading guide:** always compute all three distances before branching — deciding collinearity or side-equality from just two distances risks missing the pairing that actually matters. Note the right-angle check only ever needs the single largest-side comparison.

## Problem-Solving Strategy 3 — Equation of a Locus

```mermaid
flowchart TD
    A["A distance condition on P relative to fixed point(s) is given"] --> B{"What form is the condition?"}
    B -- "PA = PB" --> C["Square both sides once"]
    C --> D["x^2, y^2, z^2 terms cancel -- result is linear: a plane"]
    B -- "PA^2 + PB^2 = constant" --> E["Expand both squared terms directly, no need to isolate a radical"]
    E --> F["Result stays quadratic in x, y, z: a sphere"]
    B -- "PA + PB = constant" --> G["Isolate one radical, square, simplify, then square again"]
    G --> H["Result is an ellipsoid of revolution with foci A and B"]
```

**Reading guide:** identify which of the three condition shapes you're looking at *before* touching algebra — it tells you in advance whether the quadratic terms should vanish (plane) or survive (sphere), which catches an arithmetic slip immediately if the expected cancellation doesn't happen.
