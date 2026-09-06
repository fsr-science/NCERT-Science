
# Linear Inequalities — Revision Mindmap (NCERT Chapter 5)

> Visual revision aid: how the chapter's ideas connect, and a decision flow for approaching any inequality problem. Pairs with the NOTES and GLOSSARY files.

## Concept Roadmap

```mermaid
flowchart TD
    A[Real number line and linear equations] --> B["Inequality: expressions related by lt, gt, le, ge"]
    B --> C[Classify: numerical vs literal vs double inequality]
    B --> D[Order axioms of the real numbers]
    D --> E["Rule 1: add or subtract the same number - sign unchanged"]
    D --> F["Rule 2: multiply or divide - sign flips only if the number is negative"]
    E --> G[Solve a linear inequality in one variable]
    F --> G
    G --> H[Graph the solution set on a number line]
    G --> I["Compound - double inequality: operate on all parts at once"]
    I --> J["System of inequalities: solve separately, then intersect"]
    G --> K[Applied word problems: averages, mixtures, unit conversion, consecutive integers]
    J --> K

    classDef def fill:#1f2937,stroke:#60a5fa,stroke-width:1.5px,color:#f9fafb;
    classDef rule fill:#312e81,stroke:#a5b4fc,stroke-width:1.5px,color:#f9fafb;
    classDef app fill:#164e63,stroke:#67e8f9,stroke-width:1.5px,color:#f9fafb;
    class A,B,C,D def;
    class E,F,G,H,I,J rule;
    class K app;
```

**Reading the map:** everything in the chapter traces back to the order axioms of \(\mathbb{R}\) (top). The addition property always preserves the sign (Rule 1); the multiplication property only preserves it for positive multipliers, forking into the sign-flip rule for negative ones (Rule 2). Both rules feed the single skill of solving a one-variable inequality, which then branches three ways: graphing it, chaining it into a compound/system inequality, or embedding it inside an applied word problem.

---

## Problem-Solving Strategy: Which Rule Applies?

```mermaid
flowchart TD
    A[Isolating the variable] --> B{What operation on both sides?}
    B -- "Add or subtract a number" --> C[Rule 1: sign of inequality unchanged]
    B -- "Multiply or divide by a number" --> D{Is the number positive or negative?}
    D -- Positive --> E["Rule 2a: sign unchanged"]
    D -- Negative --> F["Rule 2b: sign reverses"]
    C --> G[Continue simplifying]
    E --> G
    F --> G

    classDef step fill:#1f2937,stroke:#60a5fa,color:#f9fafb;
    classDef warn fill:#7f1d1d,stroke:#fca5a5,color:#f9fafb;
    class A,B,C,E,G step;
    class D,F warn;
```

**Interpretation:** the only decision point that actually risks an error is the sign check in the diamond — every sign-reversal mistake in this chapter traces back to skipping that check.

## Problem-Solving Strategy: Classify the Problem Type

```mermaid
flowchart TD
    A[Read the inequality problem] --> B{Single inequality in one variable?}
    B -- Yes --> C["Isolate x using Rule 1, then Rule 2"]
    B -- "No - form a < f(x) < b" --> D[Double / compound inequality]
    B -- "No - two separate inequalities" --> E[System of inequalities]
    D --> F[Apply the same operation to all three parts simultaneously]
    E --> G[Solve each inequality on its own]
    G --> H[Graph both solution sets on one number line]
    H --> I[Take the intersection - the overlapping shaded region]
    C --> J["State the domain: N, Z, or R, then write interval notation"]
    F --> J
    I --> J
    J --> K["Graph the final answer: open circle for strict, filled circle for slack"]

    classDef step fill:#1f2937,stroke:#60a5fa,color:#f9fafb;
    classDef decide fill:#312e81,stroke:#a5b4fc,color:#f9fafb;
    classDef result fill:#164e63,stroke:#67e8f9,color:#f9fafb;
    class A,C,D,E,F,G,H,I step;
    class B decide;
    class J,K result;
```

**Interpretation:** the branch point is recognizing the problem's *shape* before touching any algebra — a compound inequality and a system look similar on paper but are solved by different mechanics (operate on all parts at once vs. solve-then-intersect).

## Problem-Solving Strategy: Word-Problem Keyword Mapping

```mermaid
flowchart TD
    A[Word problem] --> B{Keyword in the statement}
    B -- "at least / minimum of" --> C["≥"]
    B -- "at most / upto / maximum of" --> D["≤"]
    B -- "more than" --> E[">"]
    B -- "less than" --> F["<"]
    C --> G[Set up the inequality with the identified variable]
    D --> G
    E --> G
    F --> G
    G --> H["Solve, then check against the real-world constraint - non-negative, integer, odd/even, etc."]

    classDef step fill:#1f2937,stroke:#60a5fa,color:#f9fafb;
    classDef decide fill:#312e81,stroke:#a5b4fc,color:#f9fafb;
    class A,G,H step;
    class B,C,D,E,F decide;
```

**Interpretation:** most marks lost on word problems come from mapping "at least"/"at most" to the strict symbol instead of the slack one (see NCERT Example 7, where a mark of exactly 70 must still count as satisfying "at least 60 average") — this flow exists specifically to make that mapping explicit before setting up the algebra.
