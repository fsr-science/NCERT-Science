
# Relations and Functions — Revision Mindmap

## Concept Roadmap

How every idea in this chapter builds on the one before it — from Sets, all the way to combining functions algebraically.

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    S[Sets — union, intersection, subsets] --> OP[Ordered pair p, q\norder matters]
    OP --> CP["Cartesian product A × B\nall pairs p,q with p∈A, q∈B"]
    CP --> REL["Relation R\nany subset of A × B"]
    REL --> DRC["Domain / Range / Codomain\nfirst elements / second elements / whole target set"]
    DRC --> FN{"Every element of A has\nexactly one image?"}
    FN -- No, missing or duplicate images --> NOTFN["Just a relation\n(not a function)"]
    FN -- Yes --> FUNC["Function f: A → B"]
    FUNC --> RVF["Real valued / Real function\nrange and domain ⊆ ℝ"]
    RVF --> STD["Seven standard graphs\nidentity, constant, polynomial,\nrational, modulus, signum, greatest integer"]
    STD --> ALG["Algebra of real functions\nf+g, f−g, kf, fg, f/g (pointwise)"]
```

*Reading the map:* everything below "Relation" is a *subset* of everything above it — a function is a relation, a real function is a function, and the seven standard graphs are just specific real functions worth memorizing by sight. The algebra of functions at the bottom only makes sense once domain/range discipline (top half) is second nature — every combined function inherits domain restrictions from its pieces.

---

## Problem-Solving Strategy

### Strategy 1 — "Is this a relation or a function?"

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    A["Given a set of ordered pairs\n(or a rule) from A to B"] --> B{"Does every element\nof A appear as a\nfirst element at least once?"}
    B -- No --> C["Not a function\n(domain ≠ A)"]
    B -- Yes --> D{"Does any element of A\nappear as first element\nof two different pairs\nwith different second elements?"}
    D -- Yes --> E["Not a function\n(uniqueness fails)"]
    D -- No --> F["It is a function f: A → B"]
```

### Strategy 2 — "Find the domain of a given expression"

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    A["Given f(x), find its domain"] --> B{"Denominator present?"}
    B -- Yes --> C["Exclude x where\ndenominator = 0\n(factor fully first!)"]
    B -- No --> D{"Square root or even root?"}
    C --> D
    D -- Yes --> E["Require expression\ninside root ≥ 0"]
    D -- No --> F{"Logarithm present?"}
    E --> F
    F -- Yes --> G["Require argument of log > 0"]
    F -- No --> H["Domain is all of ℝ\n(intersect every condition found above)"]
    G --> H
```

### Strategy 3 — "Find the range of a given function"

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    A["Given y = f(x), find its range"] --> B["Try to isolate the\n'variable part' — e.g. write\nas constant ± (positive expression)"]
    B --> C{"Can you solve for x\nin terms of y instead?"}
    C -- Yes --> D["Find all y for which\nthe resulting x is real\nand lies in the original domain"]
    C -- No, algebra is messy --> E["Bound the expression directly\n(e.g. x² ≥ 0 ⟹ 1/(1+x²) ∈ (0,1])"]
    D --> F["State range as an interval\nor set — check endpoints:\nattained (closed) vs. approached only (open)"]
    E --> F
```

*A worked instance of Strategy 3 lives in the main notes: \(f(x)=\dfrac{x^2}{1+x^2}\) rewritten as \(1-\dfrac{1}{1+x^2}\), giving range \([0,1)\) — closed at \(0\) because it's attained at \(x=0\), open at \(1\) because it's only approached as \(x\to\pm\infty\).*
