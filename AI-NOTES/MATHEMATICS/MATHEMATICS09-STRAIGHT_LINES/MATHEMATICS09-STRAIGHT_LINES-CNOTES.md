
# Straight Lines — Revision Mind Map

> Two views for last-minute revision: (1) how the chapter's ideas depend on each other, and (2) which technique to reach for given what a problem hands you. Pairs with **STRAIGHT_LINES-NOTES.md** for the derivations these summarize.

## Concept Roadmap

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    A["§9.1 Recall: distance, section formula, area of a triangle"] --> B["§9.2 Slope m = tanθ"]
    B --> C["§9.2.1 Slope from two points"]
    C --> D["§9.2.2 Parallel: m1=m2 · Perpendicular: m1m2=-1"]
    C --> E["§9.2.3 Angle between two lines"]
    A -.->|"collinearity ⇒ equal slopes"| G2["§9.3.3 Two-point form"]
    B --> F["§9.3 Equation of a line"]
    F --> F1["§9.3.1 Horizontal / vertical lines"]
    F --> F2["§9.3.2 Point-slope form"]
    F --> G2
    F --> F4["§9.3.4 Slope-intercept form"]
    F --> F5["§9.3.5 Intercept form"]
    F1 & F2 & G2 & F4 & F5 --> H["General linear equation Ax+By+C=0"]
    A -.->|"reuses area-of-triangle formula"| I["§9.4 Distance of a point from a line"]
    H --> I
    I --> J["§9.4.1 Distance between parallel lines"]
    D --> K["Applications: concurrency, reflection, locus, area cut off by lines"]
    E --> K
    I --> K
    J --> K
```

Read this top-down: everything traces back to the four recalled facts in §9.1. The dotted arrows mark the two "callback" moments worth noticing on revision — the two-point form is just collinearity restated as equal slopes, and the distance formula is the area-of-a-triangle formula run in reverse.

## Problem-Solving Strategy — "Which technique applies?"

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    S["What does the problem give you?"] --> Q1{"A point + a slope?"}
    Q1 -->|Yes| R1["Point-slope form\ny − y0 = m(x − x0)"]
    Q1 -->|No| Q2{"Two points on the line?"}
    Q2 -->|Yes| R2["Two-point form\n(check x1 ≠ x2 first — else line is vertical: x = x1)"]
    Q2 -->|No| Q3{"Both intercepts a, b?"}
    Q3 -->|Yes| R3["Intercept form\nx/a + y/b = 1"]
    Q3 -->|No| Q4{"Slope + one intercept?"}
    Q4 -->|Yes| R4["Slope-intercept form\ny = mx + c  or  y = m(x − d)"]
    Q4 -->|No| Q5{"Question is about an angle?"}
    Q5 -->|Yes| Q5a{"Either line vertical?"}
    Q5a -->|Yes| R5a["angle = 90° − α  (use cot, not the boxed tanθ formula)"]
    Q5a -->|No| R5["tanθ = |(m2−m1)/(1+m1m2)|"]
    Q5 -->|No| Q6{"Question is about distance?"}
    Q6 -->|Yes| Q6a{"Distance between two parallel lines?"}
    Q6a -->|Yes| R6a["d = |C1−C2| / √(A²+B²)"]
    Q6a -->|No| R6["Convert to Ax+By+C=0, then d = |Ax1+By1+C| / √(A²+B²)"]
    Q6 -->|No| Q7{"Reflection / image of a point?"}
    Q7 -->|Yes| R7["Two conditions together:\n1) join ⟂ the line (slope = −1/m)\n2) midpoint lies on the line"]
    Q7 -->|No| Q8{"Three lines given, asked if concurrent?"}
    Q8 -->|Yes| R8["Solve any two lines for their point,\nsubstitute into the third to confirm"]
```

## Problem-Solving Strategy — Sanity checks before you finalize

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart LR
    T1["Did a slope come out of a vertical-line pair (x1=x2)?"] --> T1a["Stop — use x = k instead of a slope formula"]
    T2["Used the point-to-line distance formula?"] --> T2a["Confirm the line was in Ax+By+C=0 form, not y=mx+c"]
    T3["Solved an angle-between-lines equation?"] --> T3a["Expect two slope answers from the ± inside the absolute value"]
    T4["Found a 'reflection' point?"] --> T4a["Verify BOTH: perpendicularity AND midpoint-on-line"]
    T5["Claimed three lines are concurrent?"] --> T5a["Verify by substitution into the third line, not by inspection"]
```
