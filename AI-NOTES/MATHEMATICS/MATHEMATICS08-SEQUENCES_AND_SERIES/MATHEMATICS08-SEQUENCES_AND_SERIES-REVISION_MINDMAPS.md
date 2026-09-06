
# Revision Mind-Map — Sequences and Series

> NCERT Class 11, Chapter 8. This file holds the chapter's concept roadmap and its problem-solving decision flows — for derivations and worked examples, see `NOTES-Sequences-and-Series.md`; for the formula sheet, see `GLOSSARY-Sequences-and-Series.md`.

## Concept Roadmap

```mermaid
flowchart TD
    classDef base fill:#1e1e2e,stroke:#89b4fa,color:#cdd6f4;
    classDef gp fill:#302446,stroke:#cba6f7,color:#cdd6f4;
    classDef mean fill:#2a3b2a,stroke:#a6e3a1,color:#cdd6f4;

    A["Natural numbers ℕ"]:::base --> B["Sequence: function with domain ℕ"]:::base
    B --> C{"Finite or infinite?"}:::base
    C -->|finite| D["Fixed number of terms"]:::base
    C -->|infinite| E["Never terminates"]:::base
    B --> F["Specified by: explicit formula aₙ, recurrence relation, or verbal rule"]:::base
    F --> H["Series: a₁+a₂+...+aₙ (+...), written Σ aₖ"]:::base
    H --> I["Geometric Progression: aₖ₊₁/aₖ = r (constant), terms ≠ 0"]:::gp
    I --> J["General term: aₙ = ar^(n−1)"]:::gp
    I --> K["Sum to n terms Sₙ"]:::gp
    K --> K1["r = 1  ⟹  Sₙ = na"]:::gp
    K --> K2["r ≠ 1  ⟹  Sₙ = a(rⁿ−1)/(r−1)"]:::gp
    I --> L["Geometric Mean: G = √(ab), for a,b > 0"]:::mean
    L --> M["Insert n means: a,G₁,...,Gₙ,b is a G.P. of n+2 terms"]:::mean
    I --> N["Relationship between A.M. and G.M.: A ≥ G, equality iff a = b"]:::mean
```

**Reading guide:** everything downstream of "Sequence" is a special case built on top of it. A **G.P.** is a sequence with one extra constraint (constant ratio); the **geometric mean** is what you get by asking "what single number continues a 2-term G.P.?"; and the **A.M.–G.M. relationship** compares that geometric mean to the ordinary average. If a problem statement doesn't explicitly mention a constant ratio, check whether it's really about a general sequence/series (§8.2–8.3) rather than a G.P. (§8.4) before applying any G.P. formula.

---

## Problem-Solving Strategy

### Strategy 1 — Finding an unknown term or the common ratio of a G.P.

```mermaid
flowchart TD
    S1["Given information about a G.P."] --> S2{"What form is it given in?"}
    S2 -->|"Two terms, e.g. aₚ and a_q"| S3["Write both as a·r^(power−1); divide one equation by the other to cancel a and solve for r"]
    S2 -->|"Sum and product of 3 consecutive terms"| S4["Write the terms symmetrically as a/r, a, ar — the product collapses to a³ directly"]
    S3 --> S5["Substitute r back into either original equation to find a"]
    S4 --> S5
    S5 --> S6["Now answer the actual question: a specific term, Sₙ, or the ratio itself"]
    S6 --> S7["Check: does a real/valid root make sense here (discard extraneous or non-real roots, and say so)?"]
```

### Strategy 2 — Summing a G.P. (or something that looks like one)

```mermaid
flowchart TD
    T1["Asked to find Sₙ"] --> T2{"Is it an actual G.P. (constant ratio)?"}
    T2 -->|"No — e.g. 7, 77, 777, ..."| T3["Factor out a constant so each term becomes (10^k − 1)/const; split the sum into a genuine G.P. sum minus n"]
    T2 -->|"Yes"| T4{"Is r = 1?"}
    T4 -->|"Yes"| T5["Sₙ = na"]
    T4 -->|"No"| T6["Sₙ = a(1−rⁿ)/(1−r)"]
    T3 --> T7["Simplify and verify with a small-n check (e.g. n = 2) against the direct sum"]
    T5 --> T7
    T6 --> T7
```

### Strategy 3 — Geometric mean and A.M.–G.M. problems

```mermaid
flowchart TD
    U1["Problem involves A.M. and/or G.M. of two positive numbers"] --> U2{"What's asked?"}
    U2 -->|"Insert n means between a and b"| U3["Find r = (b/a)^(1/(n+1)); Gₖ = a·r^k for k = 1,...,n — double-check the (n+1) in the exponent"]
    U2 -->|"Recover a, b from given A, G"| U4["Use a+b = 2A and ab = G², then (a−b)² = (a+b)² − 4ab to solve without a quadratic in one variable"]
    U2 -->|"Prove an inequality or classification (e.g. numbers are in G.P.)"| U5["Look for a sum-of-squares regrouping — a ≤ 0 sum of squares forces every square to be exactly 0"]
    U3 --> U6["Check: does the reconstructed sequence a,G₁,...,Gₙ,b actually have constant ratio r?"]
    U4 --> U6
    U5 --> U6
```

**Reading guide:** all three strategies end in a **check** step deliberately — the chapter's most common errors (dropped roots, wrong exponent denominators, treating \(r=1\) as a special case of the main formula) are exactly the kind that a five-second substitution back into the given data catches immediately.
