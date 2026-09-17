
# REVISION MINDMAP — Probability (NCERT Class 11, Chapter 14)

> Visual map of how the chapter's ideas connect, plus decision flowcharts for the problem types you'll actually meet. Pair this with `NOTES-Probability.md` for the reasoning behind each box, and `GLOSSARY-Probability.md` for the formula sheet.

## Concept Roadmap

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    SS["Random Experiment & Sample Space S"] --> EV["Event = subset of S"]

    EV --> TY["Types of Events"]
    TY --> IMP["Impossible Event: phi"]
    TY --> SURE["Sure Event: S"]
    TY --> SIM["Simple / Elementary Event -- one sample point"]
    TY --> COMPD["Compound Event -- more than one sample point"]

    EV --> ALG["Algebra of Events"]
    ALG --> NOTA["Complement: A' = S - A"]
    ALG --> ORB["'A or B' : A union B"]
    ALG --> ANDB["'A and B' : A intersect B"]
    ALG --> ANOTB["'A but not B' : A - B"]

    ALG --> ME["Mutually Exclusive: A intersect B = phi"]
    ALG --> EX["Exhaustive: union of all Ei = S"]
    ME --> MEEX["Mutually Exclusive AND Exhaustive"]
    EX --> MEEX

    EV --> AX["Axiomatic Approach to Probability"]
    AX --> AX1["Axiom i: P(E) >= 0"]
    AX --> AX2["Axiom ii: P(S) = 1"]
    AX --> AX3["Axiom iii: P(E union F) = P(E)+P(F), if mutually exclusive"]
    AX3 --> PPHI["Consequence: P(phi) = 0"]

    AX --> EQL["Equally Likely Outcomes assumption"]
    EQL --> CLASSIC["P(E) = n(E) / n(S)"]

    AX3 --> ADD["Addition Theorem: P(A or B) = P(A)+P(B)-P(A and B)"]
    ME --> ADD
    ADD --> ADD3["Three-event version: adds pairwise, subtracts, adds back triple overlap"]

    AX2 --> COMPRULE["Complement Rule: P(not A) = 1 - P(A)"]
    ME --> COMPRULE
    EX --> COMPRULE
```

**Reading the map:** Everything downstream of the three axioms is a *derived consequence*, not a separate rule to memorize. Notice how "mutually exclusive" feeds into three different downstream results (mutually-exclusive-and-exhaustive, the addition theorem's special case, and the complement rule) — recognizing mutual exclusivity early in a problem is the single most useful diagnostic step in this chapter.

---

## Problem-Solving Strategy

### 1. Computing P(A or B) — which formula applies?

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    Q1{"Do A and B share any\noutcome? Is A intersect B empty?"}
    Q1 -- "Yes, A ∩ B = phi\n(mutually exclusive)" --> F1["P(A or B) = P(A) + P(B)"]
    Q1 -- "No, they overlap" --> F2["P(A or B) = P(A) + P(B) - P(A and B)"]
    F1 --> CH1["Check: does P(A or B) still lie in [0,1]?"]
    F2 --> CH1
```

### 2. Assigning / computing a probability from scratch

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    S1["List the sample space S completely"] --> S2{"Does the problem state or\nimply equally likely outcomes?"}
    S2 -- Yes --> S3["Use P(E) = n(E) / n(S)"]
    S2 -- No --> S4["Assign P(omega_i) to each outcome\nsatisfying axioms i, ii, iii"]
    S4 --> S4b["P(E) = sum of P(omega_i) for omega_i in E"]
    S3 --> S5["Sanity check: 0 <= P(E) <= 1,\nand all outcome-probabilities sum to 1"]
    S4b --> S5
```

### 3. Classifying a set of events (mutually exclusive? exhaustive?)

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    C1["List events E1, E2, ..., En as sets"] --> C2{"Is Ei ∩ Ej = phi\nfor every pair i != j?"}
    C2 -- Yes --> C3["Mutually exclusive"]
    C2 -- No --> C4["Not mutually exclusive --\nfind the shared outcome as proof"]
    C1 --> C5{"Does the union of\nall Ei equal S?"}
    C5 -- Yes --> C6["Exhaustive"]
    C5 -- No --> C7["Not exhaustive --\nname a missing outcome as proof"]
    C3 --> C8{"Both mutually exclusive\nAND exhaustive?"}
    C6 --> C8
    C8 -- Yes --> C9["Mutually exclusive and exhaustive set --\nprobabilities of the Ei will sum to 1"]
```

### 4. "At least" / "at most" / complement word problems

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    W1["Event phrased as 'at least k' or\n'atmost k' or involves 'not'?"] --> W2{"Is the complement\neasier to count directly?"}
    W2 -- Yes --> W3["Find P(complement), then\nuse P(A) = 1 - P(not A)"]
    W2 -- No --> W4["List/count the favourable\noutcomes for the event directly"]
    W3 --> W5["Check: does the final\nanswer still lie in [0,1]?"]
    W4 --> W5
```

> **Tip:** "At least 3 Kings," "atleast one tail," "not an ace" are all textbook signals to try the complement route first — it's very often the shorter calculation (compare NCERT Example 5's "not an ace" and Example 10's "at least 3 Kings" in `NOTES-Probability.md`).
