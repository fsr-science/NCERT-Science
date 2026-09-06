
# REVISION MINDMAP — Binomial Theorem (NCERT Ch. 7)

*Pair with NOTES.md (derivations) and GLOSSARY.md (formula sheet)*

## Concept Roadmap

```mermaid
flowchart TD
    A["Combinations: ⁿCᵣ = n! / (r!(n−r)!)"] --> B["Pattern in Pascal's Triangle<br/>(Meru-Prastara)"]
    B --> C["Binomial Theorem<br/>(a+b)ⁿ = Σ ⁿCₖ aⁿ⁻ᵏbᵏ<br/>— proved by induction"]

    C --> D["Special case: b = −y<br/>(x−y)ⁿ, alternating signs"]
    C --> E["Special case: a=1, b=x<br/>(1+x)ⁿ"]
    C --> F["Special case: a=1, b=−x<br/>(1−x)ⁿ"]

    E --> G["Put x=1:<br/>2ⁿ = ΣⁿCₖ (row sum)"]
    F --> H["Put x=1:<br/>0 = Σ(−1)ᵏⁿCₖ (alt. sum)"]

    C --> I["Applications"]
    I --> J["Numerical estimation<br/>e.g. (98)⁵, (1.01)ⁿ vs fixed N"]
    I --> K["Divisibility / remainder proofs<br/>e.g. 6ⁿ−5n mod 25"]
    I --> L["Conjugate-pair simplification<br/>(a+b)ⁿ ± (a−b)ⁿ"]

    classDef base fill:#1e293b,stroke:#64748b,color:#e2e8f0,stroke-width:1px;
    classDef result fill:#1e3a5f,stroke:#3b82f6,color:#dbeafe,stroke-width:1.5px;
    classDef app fill:#3f2d1e,stroke:#f59e0b,color:#fde8c8,stroke-width:1.5px;
    class A,B base;
    class C,D,E,F,G,H result;
    class I,J,K,L app;
```

**Reading the map:** everything flows from one induction proof (node C). The three "special cases" (D, E, F) are not independent theorems — they are the *same* boxed result in NOTES.md §7.2.1 with specific values of $a,b$ plugged in. The two corollaries at $x=1$ (G, H) are themselves special cases of special cases (F chains from E's substitution, twice). The application branch (I) is where exam questions actually live — recognising *which* application a question wants (J vs K vs L) is exactly what the strategy flowchart below is for.

---

## Problem-Solving Strategy

```mermaid
flowchart TD
    S["What is the question actually asking me to do?"] --> Q1{"Expand the full<br/>binomial expression?"}
    Q1 -- Yes --> R1["Identify a, b, n → write ⁿCₖ row<br/>(Pascal's triangle if n small,<br/>formula if n large) → sum all n+1 terms"]

    Q1 -- No --> Q2{"Estimate / compute a large<br/>power like (98)⁵, (101)⁴?"}
    Q2 -- Yes --> R2["Split base as (round ± small)ⁿ<br/>→ expand fully for an EXACT value<br/>(all terms kept, Example 2 style)"]

    Q2 -- No --> Q3{"Compare a huge power<br/>to a fixed number, e.g.<br/>(1.01)ᴺ vs M ?"}
    Q3 -- Yes --> R3["Expand (1+small)ᴺ →  confirm ALL<br/>terms are positive → truncate to<br/>first 2–3 terms → compare partial<br/>sum to M (Example 3 style)"]

    Q3 -- No --> Q4{"Prove a divisibility or<br/>'leaves remainder r' statement?"}
    Q4 -- Yes --> R4["Write the base as (1 + a) with a =<br/>the divisor's building block → expand →<br/>separate first two terms → factor the<br/>rest by (divisor)² → read off remainder<br/>(Example 4 style)"]

    Q4 -- No --> Q5{"Simplify (a+b)ⁿ + (a−b)ⁿ<br/>or (a+b)ⁿ − (a−b)ⁿ ?"}
    Q5 -- Yes --> R5["Expand both, note odd-power terms<br/>cancel in the SUM and even-power<br/>terms cancel in the DIFFERENCE →<br/>keep only the surviving half-terms"]

    classDef q fill:#3f1e2d,stroke:#ec4899,color:#fde8f2,stroke-width:1.5px;
    classDef r fill:#1e3a2d,stroke:#22c55e,color:#dcfce7,stroke-width:1.5px;
    class S,Q1,Q2,Q3,Q4,Q5 q;
    class R1,R2,R3,R4,R5 r;
```

**Reading the strategy map:** the branch order matters — always check "full expansion?" first, since every other route is really "apply the binomial theorem, then do one extra structural step." The distinguishing question between R2 and R3 is whether the problem wants an **exact value** (keep everything) or an **inequality/bound** (truncation is safe only because every kept-vs-dropped term's sign is known).
