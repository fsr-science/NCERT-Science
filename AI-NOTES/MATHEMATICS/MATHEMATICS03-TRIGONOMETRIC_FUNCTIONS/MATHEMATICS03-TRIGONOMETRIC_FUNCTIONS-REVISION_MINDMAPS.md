
# Trigonometric Functions — Revision Mindmap

### NCERT Class 11 Mathematics, Chapter 3 — concept roadmap and problem-solving strategy

---

## Concept Roadmap

Prerequisite knowledge sits at the top; each result below it is either a **definition built on the unit circle** or a **corollary obtained by substitution** into an earlier boxed result — the whole chapter is one dependency chain, not a list of unrelated facts.

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    A["Prerequisite: acute-angle trig ratios\n(right-triangle definitions)"] --> B["Angle as rotation\ndegree measure & radian measure, l = rθ"]
    B --> C["Radian ↔ real-number\ncorrespondence"]
    C --> D["Unit-circle definition\ncos x = a, sin x = b — any real x"]
    D --> E["Pythagorean identity\ncos²x + sin²x = 1"]
    E --> F["Four more functions\ntan, cot, sec, cosec (ratios/reciprocals)"]
    F --> G["1 + tan²x = sec²x\n1 + cot²x = cosec²x"]
    D --> H["Sign (ASTC) & Domain/Range\nper quadrant"]
    D --> I["Periodicity\nsin,cos,sec,cosec: 2π · tan,cot: π"]
    D --> J["Even/Odd\ncos(−x)=cos x, sin(−x)=−sin x"]
    G --> K["Sum & Difference formulas\ncos(x±y), sin(x±y), tan(x±y), cot(x±y)"]
    H --> K
    I --> K
    J --> K
    K --> L["Double angle (y = x)\ncos 2x, sin 2x, tan 2x"]
    L --> M["Triple angle (3x = 2x + x)\nsin 3x, cos 3x, tan 3x"]
    K --> N["Sum ↔ Product formulas\nadd/subtract, substitute θ=x+y, φ=x−y"]
    L --> O["Half-angle corollary\n2sin²(x/2)=1−cos x"]
    M --> P["Applications"]
    N --> P
    O --> P
    P --> P1["Evaluate trig values\nof any real angle"]
    P --> P2["Prove trigonometric\nidentities"]
    P --> P3["Solve basic trig equations\nsin x = 0, cos x = 0"]
```

**Reading guide:** the two blue-collar dependencies to keep in view while revising are (i) *everything in §3.4 is a substitution corollary of the single distance-formula proof of $\cos(x+y)$*, and (ii) *domain/sign/periodicity all come from the same unit-circle definition* — so a mistake in one usually traces back to mis-stating a coordinate sign on the circle, not to forgetting a formula.

---

## Problem-Solving Strategy

### 1. Converting between degree and radian

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    A["Angle given as D°M'S″?"] -->|Yes| B["Convert minutes/seconds to a\ndecimal degree: M' = M/60°"]
    A -->|No, already in radians| E
    B --> C["Multiply the decimal degree\nby π/180"]
    C --> D["Simplify the resulting fraction\n(don't round early)"]
    D --> Z["Radian measure"]
    E["Multiply the radian value\nby 180/π"] --> F["Convert any leftover decimal\ndegree to minutes/seconds\n(×60 each step)"]
    F --> Y["Degree measure (D°M'S″)"]
```

### 2. Given one trig ratio + a quadrant, find the other five

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    A["One ratio given\n+ quadrant stated"] --> B{"Which pair does it belong to?"}
    B -->|"sin or cos given"| C["Use sin²x + cos²x = 1\nto get the other of the pair"]
    B -->|"tan or cot given"| D["Use 1+tan²x=sec²x or\n1+cot²x=cosec²x to get sec/cosec"]
    B -->|"sec or cosec given"| E["Invert to get cos/sin directly"]
    C --> F["Apply the quadrant's ASTC sign\nto resolve the ± from the square root"]
    D --> F
    E --> F
    F --> G["Fill in the remaining functions\nvia quotient/reciprocal relations"]
    G --> H["Check: does the sign of every\nfunction match the ASTC table?"]
```

### 3. Evaluating a trig function of an angle outside $[0°,90°]$

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    A["Angle is negative, or\nlarger than 360° / 2π"] --> B{"Which function?"}
    B -->|"sin, cos, sec, cosec"| C["Add/subtract whole multiples\nof 360° (or 2π) until in [0°,360°)"]
    B -->|"tan, cot"| D["Add/subtract whole multiples\nof 180° (or π) until in [0°,180°)"]
    C --> E["Identify the quadrant of the\nreduced angle"]
    D --> E
    E --> F["Find the reference (acute) angle\nfrom the nearest axis"]
    F --> G["Look up the standard value for\nthe reference angle"]
    G --> H["Attach the ASTC sign for that\nquadrant and function"]
```

### 4. Proving a trigonometric identity

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    A["Identity to prove"] --> B{"Sum or difference of\nsin/cos terms present?"}
    B -->|Yes| C["Apply sum-to-product formulas\nto collapse the sum first"]
    B -->|No| D{"Multiple angles\n(2x, 3x, x/2) present?"}
    D -->|Yes| Ecase["Expand via double/triple-angle\nor half-angle corollary"]
    D -->|No| F["Start from the more complex\nside; expand sin(x±y)/cos(x±y)\ndirectly"]
    C --> G["Simplify, factor common terms"]
    Ecase --> G
    F --> G
    G --> H["Confirm both sides now match\nterm-for-term, not just numerically"]
    H --> I{"Any tan/cot/sec/cosec\nused mid-proof?"}
    I -->|Yes| J["State the validity condition\n(x, y, x±y not an excluded value)"]
    I -->|No| K["Done"]
    J --> K
```
