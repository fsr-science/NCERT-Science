
# Statistics — Revision Mind-Map

*(NCERT Class 11 Mathematics, Chapter 13 — Measures of Dispersion)*

> The big picture: how every formula in this chapter connects to the others, and a decision flow for picking the right one under exam pressure. See **NOTES** for the derivations and worked examples behind each node.

## Concept Roadmap

```mermaid
flowchart TD
    classDef prereq fill:#2d3436,stroke:#74b9ff,color:#dfe6e9
    classDef core fill:#2c3e50,stroke:#00cec9,color:#dfe6e9
    classDef formula fill:#1e272e,stroke:#fdcb6e,color:#ffeaa7
    classDef limitation fill:#2c1e1e,stroke:#e17055,color:#fab1a0
    classDef application fill:#1e3a2c,stroke:#55efc4,color:#c7f9e8

    A[Mean, Median, Mode<br/>measures of central tendency]:::prereq --> B{Same centre,<br/>different spread?}:::prereq
    B --> C[Need a measure<br/>of dispersion]:::core
    C --> D[Range = Max − Min]:::formula
    D --> E[Deviation from<br/>a reference value a: xi − a]:::core
    E --> F[Mean Deviation<br/>M.D. a = mean of absolute deviations]:::formula
    F --> F1[Ungrouped data]:::formula
    F --> F2[Discrete frequency<br/>distribution]:::formula
    F --> F3[Continuous frequency<br/>distribution: use mid-points]:::formula
    F1 --> G
    F2 --> G
    F3 --> G[About the mean<br/>or about the median?]:::core
    F --> H[Limitation: absolute value<br/>is not algebraically tractable]:::limitation
    H --> I[Variance = mean of<br/>SQUARED deviations, σ²]:::formula
    I --> I1[Ungrouped data]:::formula
    I --> I2[Discrete frequency<br/>distribution]:::formula
    I --> I3[Continuous frequency<br/>distribution: use mid-points]:::formula
    I1 --> J[Standard Deviation<br/>σ = √variance]:::formula
    I2 --> J
    I3 --> J
    J --> K[Raw-score formula:<br/>σ = 1/N √{NΣfx² − (Σfx)²} ]:::formula
    K --> L[Shortcut / step-deviation:<br/>yi = xi − A / h, equal class width h]:::formula
    L --> M[Shift a constant → mean shifts,<br/>variance UNCHANGED]:::application
    L --> N[Scale by constant k → mean scales,<br/>variance × k²]:::application
    J --> O[Corrected mean/SD after a<br/>misrecorded observation]:::application
    J --> P[Compare consistency:<br/>lower σ = more consistent data]:::application
```

**Reading guide:** the roadmap has three layers. The top layer (grey) is what you already know coming in — mean, median, mode. The middle layer (yellow) is the actual machinery of this chapter, moving left-to-right in increasing sophistication: Range → Mean Deviation → (its limitation forces the move to) → Variance/SD → the raw-score and shortcut formulas that make it computable by hand. The bottom layer (green) is where this machinery actually gets *used* — comparing which of two data sets is more consistent, correcting a miscalculated mean/SD, and reasoning about how shifting or scaling data affects spread.

---

## Problem-Solving Strategy: "Which Formula Do I Need?"

```mermaid
flowchart TD
    classDef question fill:#1e272e,stroke:#74b9ff,color:#dfe6e9
    classDef action fill:#2c3e50,stroke:#00cec9,color:#dfe6e9
    classDef warning fill:#2c1e1e,stroke:#e17055,color:#fab1a0
    classDef result fill:#1e3a2c,stroke:#55efc4,color:#c7f9e8

    Start([What is the data given as?]):::question --> Q1{Ungrouped list,<br/>discrete xi:fi,<br/>or continuous classes?}:::question

    Q1 -->|Continuous, but classes<br/>have gaps / unequal look| Fix[Convert to continuous:<br/>subtract 0.5 from lower limit,<br/>add 0.5 to upper limit]:::warning
    Fix --> Q1

    Q1 -->|Ungrouped| U1{What is asked:<br/>Range, M.D., or Variance/SD?}:::question
    Q1 -->|Discrete xi:fi| D1{What is asked:<br/>M.D. or Variance/SD?}:::question
    Q1 -->|Continuous classes| C1[Replace each class<br/>by its mid-point]:::action
    C1 --> D1

    U1 -->|Range| RangeAns[Range = Max − Min]:::result
    U1 -->|M.D.| U2{About the mean<br/>or the median?}:::question
    U1 -->|Variance/SD| U3[σ² = 1/n Σ xi−x̄ ²]:::result

    U2 -->|Mean| U2a[Compute x̄,<br/>then M.D. x̄ = 1/n Σ|xi−x̄| ]:::result
    U2 -->|Median| U2b{n odd or even?}:::question
    U2b -->|Odd| U2b1[M = n+1 /2 -th term]:::result
    U2b -->|Even| U2b2[M = mean of n/2 -th<br/>and n/2+1 -th terms]:::result

    D1 -->|M.D.| D2{About the mean<br/>or the median?}:::question
    D1 -->|Variance/SD| D3{Are xi / mid-points large,<br/>or class widths equal?}:::question

    D2 -->|Mean| D2a[x̄ = 1/N Σfixi,<br/>M.D. x̄ = 1/N Σfi|xi−x̄| ]:::result
    D2 -->|Median| D2b{Discrete list<br/>or continuous classes?}:::question
    D2b -->|Discrete| D2b1[Build c.f. column;<br/>median = first value whose<br/>c.f. reaches N/2]:::result
    D2b -->|Continuous| D2b2[Find median class first cf ≥ N/2 ;<br/>Median = l + N/2−C /f × h]:::result
    D2b1 --> D2c[Then: M.D. M = 1/N Σfi|xi−M| ]:::result
    D2b2 --> D2c

    D3 -->|Widths unequal / values small| D3a[Use raw-score formula:<br/>σ = 1/N √ NΣfixi² − Σfixi ² ]:::result
    D3 -->|Values large AND<br/>equal class width h| D3b[Use step-deviation:<br/>yi = xi−A /h, then<br/>σ = h/N √ NΣfiyi² − Σfiyi ² ]:::result

    U2a --> Check
    U2b1 --> Check
    U2b2 --> Check
    U3 --> Check
    D2c --> Check
    D3a --> Check
    D3b --> Check
    RangeAns --> Check

    Check[["Final check:<br/>• units match original data?<br/>• computed centre lies between min and max?<br/>• spread proportionate to Range?<br/>• if median-class based, does the median fall<br/>  inside its own median class?"]]:::warning
```

**Reading guide:** every path through this flow ends at the same "Final check" box deliberately — no answer in this chapter is finished until you've sanity-checked it, the same discipline used in every worked example in **NOTES**. The two decision points worth flagging: (1) mean deviation always forces a choice between "about the mean" and "about the median" — read the question carefully, since the two give different numbers from the same data (compare Examples 4–5 vs. 6–7 in NOTES); (2) the shortcut step-deviation method is only a shortcut *when class widths are equal* — otherwise it silently gives a wrong answer rather than failing loudly, which is why that branch is flagged in warning colour.

---

## One-Glance Formula Recall (for the last five minutes before an exam)

```mermaid
flowchart LR
    classDef box fill:#1e272e,stroke:#fdcb6e,color:#ffeaa7
    R["Range<br/>Max − Min"]:::box --> MD["Mean Deviation<br/>average of |xi − a|"]:::box --> V["Variance<br/>average of xi − a ²"]:::box --> SD["Standard Deviation<br/>√Variance"]:::box
```

Each step to the right is a refinement of the one before it: Range uses only 2 points → Mean Deviation uses every point but can't be manipulated algebraically → Variance fixes that by squaring instead of taking absolute value → Standard Deviation restores the original units by undoing the square.
