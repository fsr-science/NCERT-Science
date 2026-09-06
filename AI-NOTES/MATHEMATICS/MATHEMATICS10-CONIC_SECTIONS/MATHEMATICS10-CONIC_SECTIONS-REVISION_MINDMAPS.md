
# Conic Sections — REVISION MINDMAP

*Companion to Conic-Sections-NOTES.md and Conic-Sections-GLOSSARY.md · NCERT Class 11 Mathematics, Chapter 10*

---

## Concept Roadmap

How the chapter's ideas connect, from the cone down to the four standard equations and their uses.

```mermaid
%%{init: {'theme': 'dark'}}%%
flowchart TD
    A[Double-napped right circular cone, half-angle alpha] --> B{Cutting-plane angle beta vs alpha}
    B -->|beta = 90 degrees| C["Circle (10.3)"]
    B -->|alpha < beta < 90 degrees| D["Ellipse (10.5)"]
    B -->|beta = alpha| E["Parabola (10.4)"]
    B -->|0 <= beta < alpha| F["Hyperbola (10.6), cuts both nappes"]

    C --> G[Locus: equidistant from one fixed point]
    D --> H[Locus: sum of distances to two foci is constant]
    E --> I[Locus: equidistant from a fixed point and a fixed line]
    F --> J[Locus: difference of distances to two foci is constant]

    G --> K["(x-h)^2 + (y-k)^2 = r^2"]
    H --> L["x^2/a^2 + y^2/b^2 = 1,  c^2 = a^2 - b^2,  e = c/a < 1"]
    I --> M["y^2 = 4ax,  latus rectum = 4a"]
    J --> N["x^2/a^2 - y^2/b^2 = 1,  c^2 = a^2 + b^2,  e = c/a > 1"]

    L --> P1[Latus rectum 2b^2/a]
    N --> P1

    K --> Q1[Applications: gears, circular motion]
    L --> Q2[Applications: planetary orbits, whispering galleries]
    M --> Q3[Applications: reflectors, telescopes, suspension-bridge cables]
    N --> Q4[Applications: navigation systems, sundial curves]

    B -.plane through vertex.-> R{Degenerate cases}
    R -->|alpha < beta <= 90 degrees| S[Point]
    R -->|beta = alpha| T[Straight line - degenerate parabola]
    R -->|0 <= beta < alpha| U[Pair of intersecting lines - degenerate hyperbola]
```

**Reading the map:** everything below the first branch point is a consequence of *where* the plane cuts the cone. Once you know which of the four curves you have, its defining locus property (row 2) is what you actually squeeze through the distance formula to get the boxed equation (row 3) — that's the one derivation pattern repeated four times across the whole chapter.

---

## Problem-Solving Strategy 1 — Classify a Conic From Its Equation

```mermaid
%%{init: {'theme': 'dark'}}%%
flowchart TD
    A[Given an equation with x^2 and/or y^2 terms] --> B{Only one variable is squared?}
    B -->|Yes| C[Parabola: isolate the squared variable, compare to y^2=4ax or x^2=4ay]
    B -->|No, both squared| D{Coefficients of x^2 and y^2 equal, same sign?}
    D -->|Yes| E[Circle: rewrite as (x-h)^2+(y-k)^2=r^2 by completing the square]
    D -->|No, same sign, different size| F[Ellipse: normalize to =1 form; larger denominator marks major axis]
    D -->|No, opposite signs| G[Hyperbola: normalize to =1 form; positive term marks transverse axis]
```

---

## Problem-Solving Strategy 2 — Orient a Parabola From Its Equation

```mermaid
%%{init: {'theme': 'dark'}}%%
flowchart TD
    A[Standard-form parabola identified] --> B{Which variable is squared?}
    B -->|y squared| C{Sign of the x-coefficient}
    C -->|Positive| D["Opens right: focus (a,0), directrix x=-a"]
    C -->|Negative| E["Opens left: focus (-a,0), directrix x=a"]
    B -->|x squared| F{Sign of the y-coefficient}
    F -->|Positive| G["Opens up: focus (0,a), directrix y=-a"]
    F -->|Negative| H["Opens down: focus (0,-a), directrix y=a"]
```

---

## Problem-Solving Strategy 3 — Extract Every Parameter From an Ellipse or Hyperbola

```mermaid
%%{init: {'theme': 'dark'}}%%
flowchart TD
    A[Equation normalized to =1 form] --> B[Read off a-squared and b-squared from the denominators]
    B --> C{Ellipse or hyperbola?}
    C -->|Ellipse, terms added| D["c^2 = a^2 - b^2  (need a > b)"]
    C -->|Hyperbola, terms subtracted| E["c^2 = a^2 + b^2"]
    D --> F["e = c/a; foci and vertices lie on the axis of the LARGER denominator"]
    E --> G["e = c/a; foci and vertices lie on the axis of the POSITIVE term"]
    F --> H["Latus rectum = 2b^2 / a"]
    G --> H
```

---

## Problem-Solving Strategy 4 — Find a Circle's Equation From Given Conditions

```mermaid
%%{init: {'theme': 'dark'}}%%
flowchart TD
    A[Circle problem: points and/or a line condition given] --> B["Write the general form (x-h)^2+(y-k)^2=r^2"]
    B --> C[Substitute each given point to get one equation per point in h, k, r-squared]
    C --> D[Turn any extra condition - centre on a line, centre on an axis - into another equation]
    D --> E[Solve the resulting system for h, k, r-squared]
    E --> F[Verify: substitute h, k, r-squared back into every original condition]
```

---

## One-Glance Exam Checklist

- **Circle:** normalize to \((x-h)^2+(y-k)^2=r^2\) before reading centre/radius — never read them off an un-completed general form.
- **Parabola:** squared variable → axis; sign of linear term → direction; \(a\) is always a positive distance.
- **Ellipse:** compare **denominator sizes** for the major axis.
- **Hyperbola:** compare **term signs** for the transverse axis — this is the opposite test from the ellipse.
- **Any conic built from conditions (points, foci, directrix, latus rectum):** set up the general equation first, substitute every condition, solve, then substitute back to confirm — don't stop at "solved," stop at "checked."
