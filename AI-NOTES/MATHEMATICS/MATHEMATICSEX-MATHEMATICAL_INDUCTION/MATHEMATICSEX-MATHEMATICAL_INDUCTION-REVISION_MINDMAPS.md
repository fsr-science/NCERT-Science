
# Principle of Mathematical Induction — Revision Mind Map

> Pairs with **PMI-NOTES** (full derivations) and **PMI-GLOSSARY** (formula sheet). This file is purely visual: a concept roadmap, then the proof-writing and technique-selection flowcharts for exam revision.

## Concept Roadmap

```mermaid
%%{init: {'theme': 'dark'}}%%
flowchart TD
    A["Natural numbers ℕ = {1, 2, 3, ...}"] --> B["Statement P(n) defined on ℕ"]
    B --> C["Base Step: verify P(n₀) true<br/>(n₀ not always 1)"]
    B --> D["Inductive Hypothesis: assume P(k) true<br/>for arbitrary fixed k ≥ n₀"]
    D --> E["Inductive Step: prove P(k) ⟹ P(k+1)"]
    C --> F["Principle of Mathematical Induction"]
    E --> F
    F --> G["Conclusion: P(n) true for all n ≥ n₀"]
    G --> H1["Summation formulas<br/>(Ex 1, 2)"]
    G --> H2["Divisibility results<br/>(Ex 4, 9)"]
    G --> H3["Inequalities<br/>(Ex 5)"]
    G --> H4["Recursively defined sequences<br/>(Ex 6)"]
    G --> H5["Trigonometric series<br/>(Ex 8; Exercises 20-22)"]
    G --> H6["Case-split / parity-dependent sums<br/>(Ex 10)"]
```

**Reading the map:** everything below the theorem box (F) is an *application category* — the base step and inductive step are always the same two moves; only the algebraic technique used inside the inductive step (adding a term, factoring out a divisor, chaining an inequality, substituting a recursion, or splitting into cases) changes with the category.

---

## Proof-Writing Steps (Every Induction Proof, Every Time)

```mermaid
%%{init: {'theme': 'dark'}}%%
flowchart LR
    S1["1. State P(n) precisely<br/>(the exact equality/inequality/divisibility claim)"] --> S2["2. Find the correct base case n₀<br/>by testing small n directly"]
    S2 --> S3["3. Verify P(n₀) is literally true"]
    S3 --> S4["4. Write the Inductive Hypothesis:<br/>assume P(k) true for arbitrary k ≥ n₀"]
    S4 --> S5["5. Prove P(k+1) using the IH<br/>(never re-derive from scratch)"]
    S5 --> S6["6. Conclude: P(n) true ∀ n ≥ n₀"]
```

**Reading the map:** step 2 is the one students skip most often — assuming \(n_0=1\) by default costs marks whenever the statement (like Examples 2, 3, or 5 in the notes) is only meaningful or only true from a later point on.

---

## Which Technique Applies? (Decision Flow)

```mermaid
%%{init: {'theme': 'dark'}}%%
flowchart TD
    Q0["Look at the statement P(n)"] --> Q1{"What kind of claim is it?"}
    Q1 -->|"Equality: sum or product = closed form"| T1["Add/multiply in the (k+1)-th term<br/>on top of the IH, then simplify<br/>to match the target form"]
    Q1 -->|"Divisibility by constant c"| T2["Write IH as f(k) = c·q.<br/>Express f(k+1) as<br/>(multiple of c) + f(k), substitute IH"]
    Q1 -->|"Inequality"| T3["Start from the IH inequality;<br/>chain a justified intermediate bound<br/>to reach the (k+1) inequality"]
    Q1 -->|"Recursively defined sequence"| T4["Substitute the recursion rule<br/>a_{k+1} = g(a_k) into the<br/>claimed closed form, using the IH"]
    Q1 -->|"Term rule depends on parity/classification of n"| T5["Split into Case 1 (k odd)<br/>and Case 2 (k even);<br/>verify P(k+1) separately in each"]
    T1 --> C1{"Base case n₀ = 1?"}
    T2 --> C1
    T3 --> C1
    T4 --> C1
    T5 --> C1
    C1 -->|"Yes"| End1["Standard write-up:<br/>P(1) true, P(k)⟹P(k+1), done"]
    C1 -->|"No — test small n first"| End2["State n₀ explicitly,<br/>then proceed the same way"]
```

**Reading the map:** the *type* of statement (left branch) decides which algebraic move opens the inductive step; the base-case check (right side) is independent of that choice and must always be done by direct substitution, never assumed.
