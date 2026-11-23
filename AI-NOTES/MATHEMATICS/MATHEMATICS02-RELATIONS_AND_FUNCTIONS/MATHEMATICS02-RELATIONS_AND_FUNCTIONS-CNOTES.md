# Mathematics | Chapter 02 | Relations and Functions | CNOTES

> This file holds the chapter's **Concept Roadmap** and its **Problem-Solving Strategy** flowcharts only — for definitions and worked examples see the NOTES file, and for the formula/quick-reference sheet see the GLOSSARY file. *(Upgrade note: this content previously lived under the wrong filename — a `-PQs.md` file that, despite its name, contained this roadmap rather than practice questions. It has been moved here, and `-PQs.md` now holds actual solved practice questions from NCERT Exercises 2.1–2.3 and the Miscellaneous Exercise.)*

## Concept Roadmap

How every idea in this chapter builds on the one before it — from Sets, all the way to combining functions algebraically.

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    S[Sets — union, intersection, subsets] --> OP[Ordered pair p, q\norder matters]
    OP --> CP["Cartesian product A × B\nall pairs p,q with p∈A, q∈B"]
    CP --> REL["Relation R\nany subset of A × B"]
    REL --> DRC["Domain / Range / Codomain\nfirst elements / second elements / whole target set"]
    REL --> PROP["Properties on a set\n(a,a)∈R? (a,b)∈R⟹(b,a)∈R? transitive?"]
    DRC --> FN{"Every element of A has\nexactly one image?"}
    FN -- No, missing or duplicate images --> NOTFN["Just a relation\n(not a function)"]
    FN -- Yes --> FUNC["Function f: A → B"]
    FUNC --> RVF["Real valued / Real function\nrange and domain ⊆ ℝ"]
    RVF --> LIN["General linear function mx+c"]
    LIN --> STD["Standard graphs\nidentity, constant, polynomial,\nrational, modulus, signum, greatest integer"]
    STD --> ALG["Algebra of real functions\nf+g, f−g, kf, fg, f/g (pointwise)"]
```

*Reading the map:* everything below "Relation" on the left branch is a *subset* of everything above it — a function is a relation, a real function is a function, and the seven standard graphs are just specific real functions worth memorizing by sight (with the general linear function \(mx+c\) as the parent case identity and constant both fall out of). The right branch — reflexivity, symmetry, transitivity — is a separate axis that any relation *on a set* can be tested against, independent of whether it happens to be a function. The algebra of functions at the bottom only makes sense once domain/range discipline (top half) is second nature — every combined function inherits domain restrictions from its pieces.

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

## Section-by-section key facts

- **2.1 Cartesian products:** Ordered pairs preserve order, and \(A\times B\) contains every pair with first element from \(A\) and second from \(B\). For finite sets, \(n(A\times B)=n(A)n(B)\).
- **2.2 Relations:** A relation from \(A\) to \(B\) is any subset of \(A\times B\). Its domain consists of first components that occur, its range of second components that occur, and its codomain is the target set \(B\).
- **2.3 Functions:** A function \(f:A\to B\) assigns every element of \(A\) exactly one image in \(B\); missing or multiple images violate the definition.
- **2.4 Real functions:** Domain and range restrictions determine the graph. Standard examples include identity, constant, polynomial, rational, modulus, signum and greatest-integer functions.
- **2.5 Algebra of real functions:** Sum, difference and product are defined pointwise on the common domain; the quotient also excludes points where the denominator function is zero.

### Strategy 4 — "Combine two real functions \(f\) and \(g\)"

```mermaid
%%{init: {'theme':'dark'}}%%
flowchart TD
    A["Given f, g : X → ℝ,\nasked for f+g, f−g, fg, or f/g"] --> B["Compute pointwise:\n(f∘g-combo)(x) uses f(x) and g(x)\nat the SAME input x"]
    B --> C{"Is the operation a quotient f/g?"}
    C -- No --> D["Domain of the combination\n= domain(f) ∩ domain(g)"]
    C -- Yes --> E["Domain of f/g\n= (domain(f) ∩ domain(g)) minus\nevery x where g(x) = 0"]
    D --> F["State the combined function\nAND its (possibly restricted) domain"]
    E --> F
```

*Reading the map:* the one place students lose marks here isn't the algebra — it's forgetting the quotient's extra restriction. Both worked examples in the main notes (NCERT Examples 16 and 17) show a value where \(f\) and \(g\) are individually fine but \(f/g\) is excluded solely because \(g(x)=0\) there.

## Chapter Mindmap

```mermaid
mindmap
  root((Mathematics Chapter 02 Relations and Functions))
    Sets union, intersection, subsets
      Ordered pair p, q order matters
        Cartesian product A B all pairs p,q with p A, q B
          Relation R any subset of A B
            Domain Range Codomain first elements second elements whole target set
              FN
                Just a relation not a function
                Function f A B
                  Real valued Real function range and domain ℝ
            Properties on a set a,a R a,b R b,a R transitive
```
