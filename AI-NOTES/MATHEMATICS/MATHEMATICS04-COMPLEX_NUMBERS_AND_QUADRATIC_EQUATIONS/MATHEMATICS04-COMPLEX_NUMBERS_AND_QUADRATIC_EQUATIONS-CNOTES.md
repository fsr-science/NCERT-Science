
# Complex Numbers — Revision Mindmap

> **Level:** Class 11 Board (NCERT Ch. 4, §4.1–§4.5) — foundational for JEE
> **Use this for:** a last-look-before-the-exam pass over how the chapter's ideas connect, and which technique to reach for on a given problem.

## Concept Roadmap

```mermaid
flowchart TD
    A["x² + 1 = 0 has no real solution"] --> B["Define i, i² = −1 (§4.1)"]
    B --> C["Complex number z = a + ib (§4.2)"]
    C --> D["Equality: a+ib = c+id ⟺ a=c AND b=d"]
    C --> E["Algebra of Complex Numbers (§4.3)"]
    E --> E1["Addition / Subtraction (§4.3.1–2)"]
    E --> E2["Multiplication (§4.3.3)"]
    E2 --> E3["Multiplicative inverse 1/z (§4.3.3-v)"]
    E --> E4["Division = multiply by inverse (§4.3.4)"]
    E --> E5["Powers of i, period 4 (§4.3.5)"]
    E --> E6["√ of negative reals, √a·√b trap (§4.3.6)"]
    E --> E7["Algebraic identities extend from ℝ (§4.3.7)"]
    C --> F["Modulus |z| and Conjugate z̄ (§4.4)"]
    F --> F1["z·z̄ = |z|² ⟹ 1/z = z̄ / |z|²"]
    F --> F2["|z1z2|=|z1||z2|, conj of products/sums"]
    C --> G["Argand Plane (§4.5)"]
    G --> G1["z = x+iy ↔ point (x,y)"]
    G1 --> G2["|z| = distance from origin"]
    G1 --> G3["z̄ = mirror image in real axis"]
    G -.-> H["Polar form (§4.5.1) — NOT in source excerpt"]
    C -.-> I["Quadratic equations, complex roots (§4.6) — NOT in source excerpt"]
```

> **Reading guide:** solid arrows trace the logical dependency actually built in the source (definition → algebra → modulus/conjugate → geometry). Dashed arrows point to the two sections the full NCERT chapter continues into (polar form, and solving quadratics with complex roots) that were **not** part of the uploaded pages — flagged here so revision doesn't silently skip them.

## Problem-Solving Strategy

### Which technique applies to this complex-number problem?

```mermaid
flowchart TD
    Q["What is the problem asking?"] --> Q1{"Two complex expressions set equal?"}
    Q1 -- Yes --> Q1a["Equate real parts AND imaginary parts separately (§4.2)"]
    Q1 -- No --> Q2{"Simplify/expand an arithmetic expression?"}
    Q2 -- Yes --> Q2a{"Any √(negative number) present?"}
    Q2a -- Yes --> Q2a1["Convert every √(−a) to √a·i FIRST (§4.3.6), then expand"]
    Q2a -- No --> Q2b["Expand using addition/multiplication/identity rules (§4.3.1, 3, 7)"]
    Q2 -- No --> Q3{"A power of i with a large or negative exponent?"}
    Q3 -- Yes --> Q3a["Reduce exponent mod 4, read off i, −1, −i, or 1 (§4.3.5)"]
    Q3 -- No --> Q4{"Asked for 1/z, z⁻¹, or a quotient z1/z2?"}
    Q4 -- Yes --> Q4a["Multiply num. and denom. by the conjugate of the denominator, or use z̄/|z|² (§4.3.4, §4.4)"]
    Q4 -- No --> Q5{"Asked for modulus, conjugate, or a proof about |z|/z̄?"}
    Q5 -- Yes --> Q5a["Try the shortcut rules first: |z1z2|=|z1||z2|, z·z̄=|z|² — often faster than expanding a+ib fully"]
    Q5 -- No --> Q6{"Asked to plot or interpret geometrically?"}
    Q6 -- Yes --> Q6a["Plot (x,y) on the Argand plane; remember z̄ is the real-axis mirror image (§4.5)"]
```

### Final check before writing the boxed answer

```mermaid
flowchart LR
    R1["Did I convert √(negative) to i-form before multiplying?"] --> R2["Did I keep Re and Im parts as SEPARATE real numbers throughout?"]
    R2 --> R3["Did I reduce any i-power using i^(4k+r), not repeated multiplication?"]
    R3 --> R4["If I rationalized a quotient, did I multiply by the denominator's conjugate (not the numerator's)?"]
    R4 --> R5["Does the final a+ib have both a and b as real numbers, with no leftover i² or i³?"]
    R5 --> R6["Boxed final answer ✔"]
```
