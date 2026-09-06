
# Probability — NCERT Class 11, Chapter 14

> **Level:** Board (CBSE Class 11) / JEE-foundation. This chapter builds the *axiomatic* definition of probability — the rigorous foundation on which conditional probability, independence, and the later probability chapters (Class 12) are built.

## At a glance

- **Subject:** Mathematics — Probability (Set-theoretic / Axiomatic approach)
- **Prerequisites:** Sets (union, intersection, complement, difference), basic counting (permutations & combinations, for some worked examples)
- **Key idea:** An *event* is nothing but a subset of the sample space. Once you see events as sets, "probability" becomes a rule for assigning numbers to sets that obeys three simple axioms — everything else in the chapter (addition theorem, complement rule) is a consequence of those three axioms.

---

## 14.1 Event ⭐

The **sample space** \(S\) of a random experiment is the universal set for that experiment; every possible outcome is an element of \(S\). An **event** is formally defined as:

> **Definition:** Any subset \(E\) of a sample space \(S\) is called an event.

**Worked correspondence** — tossing a coin twice, \(S = \{HH, HT, TH, TT\}\):


| Description of event             | Corresponding subset of\(S\) |
| ---------------------------------- | ------------------------------ |
| Number of tails is exactly 2     | \(A = \{TT\}\)               |
| Number of tails is at least one  | \(B = \{HT, TH, TT\}\)       |
| Number of heads is at most one   | \(C = \{HT, TH, TT\}\)       |
| Second toss is not head          | \(D = \{HT, TT\}\)           |
| Number of tails is at most two   | \(S = \{HH, HT, TH, TT\}\)   |
| Number of tails is more than two | \(\phi\)                     |

Every description in words has a matching subset, and every subset has a matching description — this two-way correspondence is *why* set theory is the right language for probability.

### 14.1.1 Occurrence of an event ⭐

> **Key idea:** The event \(E\) is said to have **occurred** if the outcome \(\omega\) of the experiment satisfies \(\omega \in E\). If \(\omega \notin E\), then \(E\) has **not occurred**.

**Example (die, \(S = \{1,2,3,4,5,6\}\)):** Let \(E\) = "a number less than 4 appears." If the outcome is 1, 2, or 3, \(E\) has occurred; if the outcome is 4, 5, or 6, \(E\) has not occurred.

### 14.1.2 Types of events ⭐⭐

**1. Impossible and sure events.** The empty set \(\phi\) is called an *impossible event* (no outcome makes it happen), and the whole sample space \(S\) is called a *sure event* (every outcome makes it happen).

**2. Simple event.** An event with exactly one sample point. A sample space with \(n\) distinct outcomes has exactly \(n\) simple events. Example: for \(S=\{HH,HT,TH,TT\}\), the simple events are \(E_1=\{HH\}, E_2=\{HT\}, E_3=\{TH\}, E_4=\{TT\}\).

**3. Compound event.** An event with more than one sample point. Example (tossing a coin thrice, \(S\) has 8 outcomes): "exactly one head" \(=\{HTT,THT,TTH\}\) is compound.

### 14.1.3 Algebra of events ⭐⭐

Events combine exactly the way sets do.

**Complementary event ("not \(A\)"):** for every event \(A\), the event "not \(A\)," written \(A'\), consists of every outcome **not** in \(A\):

$$
\boxed{A' = \{\omega : \omega \in S,\ \omega \notin A\} = S - A}

$$

**Event "\(A\) or \(B\)"** — occurs when \(A\) occurs, or \(B\) occurs, or both:

$$
\boxed{\text{'}A \text{ or } B\text{'} = A \cup B = \{\omega : \omega \in A \text{ or } \omega \in B\}}

$$

**Event "\(A\) and \(B\)"** — occurs only when both occur simultaneously:

$$
\boxed{\text{'}A \text{ and } B\text{'} = A \cap B = \{\omega : \omega \in A \text{ and } \omega \in B\}}

$$

**Event "\(A\) but not \(B\)"** — \(A\) occurs and \(B\) does not:

$$
\boxed{\text{'}A \text{ but not } B\text{'} = A - B = A \cap B'}

$$

```tikz
\begin{tikzpicture}[thick, scale=1.0]
  \draw[fill=blue!12, draw=blue!60!black] (0,0) circle (1.5);
  \draw[fill=orange!12, draw=orange!70!black] (1.6,0) circle (1.5);
  \node[font=\small, text=blue!60!black] at (-0.9,0.9) {$A$};
  \node[font=\small, text=orange!70!black] at (2.5,0.9) {$B$};
  \node[font=\small] at (0.8,0) {$A\cap B$};
  \node[font=\small] at (-1.0,-1.0) {$A\setminus B$};
  \node[font=\small] at (2.6,-1.0) {$B\setminus A$};
  \node[below, font=\itshape\small, text=gray] at (0.8,-1.9) {A and B overlapping -- shaded region is whichever combination is being discussed};
\end{tikzpicture}
```

The overlapping region is \(A \cap B\) ("\(A\) and \(B\)"); the whole shaded area of both circles together is \(A \cup B\) ("\(A\) or \(B\)"); the blue-only crescent is \(A - B\) ("\(A\) but not \(B\)").

> **[!example] Solved — Prime / odd on a die (NCERT Example 1)**
> **Given:** Rolling a die, \(S = \{1,2,3,4,5,6\}\). \(A\) = "getting a prime number," \(B\) = "getting an odd number."
> **Find:** the sets for (i) \(A\) or \(B\) (ii) \(A\) and \(B\) (iii) \(A\) but not \(B\) (iv) not \(A\).
> **Approach:** Write \(A\) and \(B\) explicitly as sets, then apply the set-operation definitions above.
> **Work:**
>
> $$
> A = \{2,3,5\}, \quad B = \{1,3,5\}
>
> $$
>
> (i) \(A \cup B = \{1,2,3,5\}\)
> (ii) \(A \cap B = \{3,5\}\)
> (iii) \(A - B = \{2\}\)
> (iv) \(A' = \{1,4,6\}\)
> **Check:** \(A \cap B = \{3,5\}\) — both 3 and 5 are prime *and* odd, correct. \(A' \cup A = \{1,4,6\}\cup\{2,3,5\}=S\) ✓, and \(A' \cap A = \phi\) ✓, confirming \(A'\) is a genuine complement.

### 14.1.4 Mutually exclusive events ⭐⭐

> **Definition:** Events \(A\) and \(B\) are **mutually exclusive** if the occurrence of one excludes the occurrence of the other — i.e. they cannot occur simultaneously. Equivalently, \(A \cap B = \phi\) (their sets are disjoint).

**Example (die):** \(A=\)"odd number appears"\(=\{1,3,5\}\), \(B=\)"even number appears"\(=\{2,4,6\}\). Here \(A \cap B = \phi\), so \(A, B\) are mutually exclusive.

> **Watch out:** Mutually exclusive is a property of a *pair* (or set) of events, not a single event. Also, sharing even one common outcome breaks it — e.g. \(A=\)"odd number appears"\(=\{1,3,5\}\) and \(B=\)"number less than 4 appears"\(=\{1,2,3\}\) share the outcome 3, so they are **not** mutually exclusive even though most of their elements differ.

### 14.1.5 Exhaustive events ⭐⭐

> **Definition:** Events \(E_1, E_2, \dots, E_n\) are **exhaustive** if \(\displaystyle\bigcup_{i=1}^{n} E_i = S\) — at least one of them necessarily occurs whenever the experiment is performed. If, in addition, they are pairwise disjoint (\(E_i \cap E_j = \phi\) for \(i \ne j\)), they are called **mutually exclusive and exhaustive events**.

> **[!example] Solved — Mutually exclusive pairs among sums (NCERT Example 2)**
> **Given:** Two dice thrown, sum noted. \(A\)="sum is even," \(B\)="sum is a multiple of 3," \(C\)="sum is less than 4," \(D\)="sum is greater than 11."
> **Find:** which pairs are mutually exclusive.
> **Approach:** List each event as a subset of the 36-point sample space, then test pairwise intersections against \(\phi\).
> **Work:** \(C = \{(1,1),(2,1),(1,2)\}\), \(D=\{(6,6)\}\). Checking: \(A \cap B \ne \phi\) (e.g. \((3,3)\) has sum 6, even *and* a multiple of 3), similarly \(A\cap C, A\cap D, B\cap C, B\cap D\) are all non-empty. But \(C \cap D = \phi\) — the smallest possible sum in \(C\) is at most 3, the smallest in \(D\) is 12, so they can never coincide.
> **Check:** Only \((C,D)\) is mutually exclusive; the answer makes sense since \(C\) and \(D\) sit at opposite extremes of the possible sums (2 to 12) with no overlap in between.

> **[!example] Solved — Mutually exclusive AND exhaustive (NCERT Example 3)**
> **Given:** A coin tossed three times. \(A\)="no head," \(B\)="exactly one head," \(C\)="at least two heads."
> **Find:** whether \(\{A,B,C\}\) is mutually exclusive and exhaustive.
> **Work:** \(S\) has 8 outcomes. \(A=\{TTT\}\), \(B=\{HTT,THT,TTH\}\), \(C=\{HHT,HTH,THH,HHH\}\). Union \(A \cup B \cup C\) recovers all 8 outcomes of \(S\), so exhaustive. Pairwise intersections are all \(\phi\) (a given outcome has a definite number of heads — 0, 1, or ≥2 — never two of these at once), so mutually exclusive.
> **Check:** \(1+3+4=8=n(S)\) — the counts of the three disjoint pieces add up to the whole sample space, confirming both properties simultaneously.

---

## 14.2 Axiomatic Approach to Probability ⭐⭐⭐

Earlier (pre-Class-11) methods assigned probability only by counting equally likely outcomes. The **axiomatic approach** is more general: it lays down *rules* any valid probability assignment must obey, without assuming equal likelihood.

> **Definition:** \(P\) is a real-valued function whose domain is the power set of \(S\) and whose range is \([0,1]\), satisfying:
> (i) \(P(E) \ge 0\) for any event \(E\)
> (ii) \(P(S) = 1\)
> (iii) If \(E, F\) are mutually exclusive, \(P(E \cup F) = P(E) + P(F)\)

**Deriving \(P(\phi) = 0\):** Take \(F = \phi\) in axiom (iii). Since \(E\) and \(\phi\) are disjoint (any event and the empty set trivially don't overlap):

$$
\begin{aligned}
P(E \cup \phi) &= P(E) + P(\phi) \\
P(E) &= P(E) + P(\phi) \qquad (\text{since } E \cup \phi = E)\\
\Rightarrow\ \boxed{P(\phi) = 0}
\end{aligned}

$$

For \(S = \{\omega_1, \dots, \omega_n\}\), the axioms force:

$$
0 \le P(\omega_i) \le 1, \qquad \sum_{i=1}^{n} P(\omega_i) = 1, \qquad P(A) = \sum_{\omega_i \in A} P(\omega_i)

$$

> **Note:** the singleton \(\{\omega_i\}\) is itself an elementary event; for convenience we write \(P(\omega_i)\) for \(P(\{\omega_i\})\).

**Multiple valid assignments exist.** For a coin toss, \(P(H)=P(T)=\tfrac12\) satisfies all three axioms — but so does \(P(H)=\tfrac14, P(T)=\tfrac34\), and in fact so does *any* pair \(p, (1-p)\) with \(0 \le p \le 1\). The axioms alone don't force "fair" probabilities; **equally likely** is an additional physical assumption layered on top.

> **[!example] Solved — Validity check of probability assignments (NCERT Example 4)**
> **Given:** \(S = \{\omega_1, \dots, \omega_6\}\) with five different proposed assignments.
> **Find:** which assignments are valid under the axioms.
> **Approach:** Check two conditions for *every* assignment: (1) each \(p(\omega_i) \in [0,1]\), i.e. non-negative and not exceeding 1; (2) the six values sum to exactly 1.
> **Work (recomputed, not just quoted):**
>
> - (a) all equal to \(\tfrac16\): sum \(=6\times\tfrac16=1\) ✓, all in \([0,1]\) ✓ → **valid**
> - (b) \(1,0,0,0,0,0\): sum \(=1\) ✓, all in \([0,1]\) ✓ → **valid**
> - (c) includes \(-\tfrac14, -\tfrac13\): negative probabilities violate axiom (i) → **invalid**
> - (d) includes \(\tfrac32\): exceeds 1, violates the range → **invalid**
> - (e) \(0.1+0.2+0.3+0.4+0.5+0.6 = 2.1 \ne 1\): violates axiom (ii)/the sum condition → **invalid**
>   **Check:** Assignments (a) and (b) are the two extremes — perfectly uniform vs. all probability on one outcome — and both are legitimate probability distributions; this is a useful mental benchmark for spotting invalid ones quickly.

### 14.2.1 Probability of an event ⭐⭐

Once probabilities are assigned to every outcome, the probability of any event \(A\) is just the sum of the probabilities of the outcomes inside it: \(P(A) = \sum_{\omega_i \in A} P(\omega_i)\).

> **[!example] Solved — Defective pens (NCERT, §14.2.1)**
> **Given:** Three pens examined, each Good (\(G\)) or Bad (\(B\)); \(S\) has 8 equally-weighted outcomes each with probability \(\tfrac18\). \(A\)="exactly one defective," \(B\)="at least two defective."
> **Work:** \(A=\{BGG,GBG,GGB\}\), so \(P(A)=\tfrac18+\tfrac18+\tfrac18=\tfrac38\). \(B=\{BBG,BGB,GBB,BBB\}\), so \(P(B)=\tfrac48=\tfrac12\).
> **Check:** \(P(A)+P(B) = \tfrac38+\tfrac48=\tfrac78\), leaving \(\tfrac18\) for the remaining outcome \(GGG\) ("no defective") — consistent, since \(A, B,\) and \(\{GGG\}\) are mutually exclusive and together exhaust \(S\).

### 14.2.2 Probabilities of equally likely outcomes ⭐⭐

If \(S=\{\omega_1,\dots,\omega_n\}\) and every outcome is equally likely, each has probability \(p\) with \(np=1\), i.e. \(p=\tfrac1n\). Then for any event \(E\) with \(n(E)=m\):

$$
\boxed{P(E) = \frac{m}{n} = \frac{\text{number of outcomes favourable to } E}{\text{total possible outcomes}}}

$$

This is the familiar "classical" formula — it's a *special case* of the axiomatic definition, valid only under the extra assumption of equal likelihood.

### 14.2.3 Probability of the event 'A or B' — the Addition Theorem ⭐⭐⭐

**Naive attempt fails.** For \(A=\{HHT,HTH,THH\}\), \(B=\{HTH,THH,HHH\}\) (tossing a coin thrice, equally likely outcomes):

$$
P(A)+P(B) = \tfrac38+\tfrac38=\tfrac68, \quad\text{but}\quad P(A \cup B) = \tfrac48=\tfrac12 \ne \tfrac68

$$

The outcomes \(HTH\) and \(THH\) lie in **both** \(A\) and \(B\), so simply adding \(P(A)+P(B)\) counts them twice.

**General derivation.** Since \(A \cup B = A \cup (B-A)\) with \(A\) and \(B-A\) mutually exclusive, and \(B = (A\cap B)\cup(B-A)\) with \(A\cap B\) and \(B-A\) mutually exclusive, axiom (iii) gives:

$$
\begin{aligned}
P(A \cup B) &= P(A) + P(B - A) &&(1)\\
P(B) &= P(A \cap B) + P(B-A) &&(2)
\end{aligned}

$$

Subtracting (2) from (1) eliminates the unknown \(P(B-A)\):

$$
\begin{aligned}
P(A \cup B) - P(B) &= P(A) - P(A \cap B)\\
\Rightarrow\ \boxed{P(A \cup B) = P(A) + P(B) - P(A \cap B)}
\end{aligned}

$$

**Special case falls out directly:** if \(A, B\) are mutually exclusive, \(A \cap B = \phi \Rightarrow P(A\cap B)=0\), and the formula collapses to axiom (iii) itself, \(P(A\cup B)=P(A)+P(B)\) — the general addition theorem *contains* the mutually-exclusive rule as the case \(P(A\cap B)=0\), rather than the two being separate facts.

**Three-event version (NCERT Example 11, derivation):** Let \(E = B \cup C\). Applying the two-event formula twice, together with the distributive law \(A \cap (B\cup C) = (A\cap B)\cup(A\cap C)\):

$$
\begin{aligned}
P(A\cup B \cup C) &= P(A \cup E) = P(A)+P(E)-P(A\cap E) \\
P(E) &= P(B)+P(C)-P(B\cap C)\\
P(A\cap E) &= P(A\cap B)+P(A\cap C) - P(A\cap B\cap C)
\end{aligned}

$$

Substituting both into the first line:

$$
\boxed{P(A\cup B\cup C) = P(A)+P(B)+P(C) - P(A\cap B) - P(B\cap C) - P(A\cap C) + P(A\cap B\cap C)}

$$

### 14.2.4 Probability of event 'not A' — the Complement Rule ⭐⭐

Since \(A\) and \(A'\) are always mutually exclusive (\(A \cap A' = \phi\)) *and* exhaustive (\(A \cup A' = S\)), axiom (iii) plus axiom (ii) give \(P(A) + P(A') = P(S) = 1\), so:

$$
\boxed{P(\text{not } A) = P(A') = 1 - P(A)}

$$

> **[!example] Solved — Card probabilities (NCERT Example 5)**
> **Given:** One card drawn from a well-shuffled 52-card deck, equally likely outcomes.
> **Find:** \(P(\text{diamond})\), \(P(\text{not ace})\), \(P(\text{black})\), \(P(\text{not diamond})\), \(P(\text{not black})\).
> **Work:** \(P(\text{diamond}) = \tfrac{13}{52}=\tfrac14\). \(P(\text{ace})=\tfrac{4}{52}=\tfrac{1}{13} \Rightarrow P(\text{not ace}) = 1-\tfrac1{13}=\tfrac{12}{13}\). \(P(\text{black})=\tfrac{26}{52}=\tfrac12\). \(P(\text{not diamond})=1-\tfrac14=\tfrac34\). \(P(\text{not black})=1-\tfrac12=\tfrac12\).
> **Check:** \(P(\text{diamond})+P(\text{not diamond})=\tfrac14+\tfrac34=1\) ✓, and by symmetry \(P(\text{black})=P(\text{not black})=\tfrac12\) makes sense since exactly half the deck is black.

> **[!example] Solved — Discs in a bag (NCERT Example 6)**
> **Given:** 9 discs: 4 red, 3 blue, 2 yellow; one drawn at random.
> **Work:** \(P(\text{red})=\tfrac49\), \(P(\text{yellow})=\tfrac29\), \(P(\text{blue})=\tfrac39=\tfrac13\), \(P(\text{not blue})=1-\tfrac13=\tfrac23\). Red and blue are mutually exclusive (a disc can't be two colours), so \(P(\text{red or blue}) = P(\text{red})+P(\text{blue}) = \tfrac49+\tfrac13=\tfrac79\).
> **Check:** \(\tfrac49+\tfrac39+\tfrac29 = \tfrac99 = 1\) — the three colour-probabilities exhaust and partition the sample space, as they should.

> **[!example] Solved — Two students, De Morgan's law (NCERT Example 7)**
> **Given:** \(P(E)=0.05\) (Anil qualifies), \(P(F)=0.10\) (Ashima qualifies), \(P(E\cap F)=0.02\).
> **Find:** (a) neither qualifies (b) at least one fails to qualify (c) exactly one qualifies.
> **Approach:** "Neither qualifies" is \(E' \cap F'\), and by De Morgan's law \(E' \cap F' = (E\cup F)'\), so compute \(P(E\cup F)\) first via the addition theorem.
> **Work:** \(P(E\cup F) = 0.05+0.10-0.02=0.13\), so \(P(E'\cap F') = 1-0.13=0.87\).
> (b) "At least one will not qualify" is the complement of "both qualify": \(1-P(E\cap F)=1-0.02=0.98\).
> (c) "Only one qualifies" \(=(E\cap F')\cup(E'\cap F)\), a union of mutually exclusive pieces: \(P(E\cap F')+P(E'\cap F) = [P(E)-P(E\cap F)]+[P(F)-P(E\cap F)] = 0.03+0.08=0.11\).
> **Check:** \(0.11+0.02\) (exactly one) + (both) \(=0.13=P(E\cup F)\) ✓ — the "exactly one" and "both" pieces should reconstruct \(P(E \cup F)\), and they do.

> **[!example] Solved — Committee selection (NCERT Example 8)**
> **Given:** A 2-person committee selected from 2 men and 2 women (4 people total).
> **Find:** \(P(\text{no man})\), \(P(\text{one man})\), \(P(\text{two men})\).
> **Approach:** Total ways to pick 2 from 4 is \(^4C_2\); count favourable selections for each case using combinations, since order of selection doesn't matter.
> **Work:** \(^4C_2 = 6\).
> \(P(\text{no man}) = \dfrac{^2C_2}{^4C_2} = \dfrac{1}{6}\)
> \(P(\text{one man}) = \dfrac{^2C_1 \times {}^2C_1}{^4C_2} = \dfrac{4}{6} = \dfrac23\)
> \(P(\text{two men}) = \dfrac{^2C_2}{^4C_2} = \dfrac16\)
> **Check (added — sanity-checking a full distribution sums to 1, per rigor convention):** \(\tfrac16+\tfrac23+\tfrac16 = \tfrac16+\tfrac46+\tfrac16=\tfrac66=1\) ✓. The three cases (0, 1, 2 men) are mutually exclusive and exhaustive, so their probabilities must total exactly 1 — confirming no case was missed or double-counted.

> **[!example] Solved — Hand of 7 cards, at least 3 Kings (NCERT Example 10)**
> **Given:** A 7-card hand drawn from a 52-card deck.
> **Find:** \(P(\text{all 4 Kings})\), \(P(\text{exactly 3 Kings})\), \(P(\text{at least 3 Kings})\).
> **Approach:** Total hands \(= {}^{52}C_7\). For "exactly \(k\) Kings," choose \(k\) of the 4 Kings and the rest from the 48 non-Kings.
> **Work (recomputed):**
>
> $$
> P(4\text{ Kings}) = \frac{^4C_4 \times {}^{48}C_3}{^{52}C_7} = \frac{1 \times 17296}{133784560} = \frac{1}{7735}
>
> $$
>
> $$
> P(3\text{ Kings}) = \frac{^4C_3 \times {}^{48}C_4}{^{52}C_7} = \frac{4 \times 194580}{133784560} = \frac{9}{1547}
>
> $$
>
> "At least 3 Kings" means exactly 3 **or** exactly 4 — mutually exclusive cases, so:
>
> $$
> P(\text{at least 3 Kings}) = \frac{9}{1547}+\frac{1}{7735} = \frac{45}{7735}+\frac{1}{7735}=\frac{46}{7735}
>
> $$
>
> **Check:** verified independently that \(^{52}C_7 = 133{,}784{,}560\), \(^{48}C_3=17{,}296\), \(^{48}C_4=194{,}580\), and that \(1547 \times 5 = 7735\) so the fractions share a common denominator correctly — all figures reproduce the textbook's stated results exactly.

> **[!example] Solved — Relay race finishing order (NCERT Example 12, Miscellaneous)**
> **Given:** Five teams A, B, C, D, E in a relay race; all finishing orders equally likely.
> **Find:** (a) \(P(A,B,C\) finish exactly 1st, 2nd, 3rd respectively\()\) (b) \(P(A,B,C\) are the first three finishers, in any order\()\).
> **Approach:** Consider only the first three finishing positions: there are \(^5P_3\) equally likely arrangements of who occupies them.
> **Work:** \(^5P_3 = \dfrac{5!}{2!} = 60\), each with probability \(\tfrac{1}{60}\).
> (a) Only **one** arrangement (ABC in that exact order) satisfies it: \(P = \tfrac{1}{60}\).
> (b) A, B, C can occupy the first three places in \(3! = 6\) orders: \(P = \tfrac{6}{60} = \tfrac{1}{10}\).
> **Check:** \(\tfrac{1}{10} = 6 \times \tfrac{1}{60}\), i.e. part (b)'s answer is exactly \(3!\) times part (a)'s — correct, since (b) is the union of \(3!\) mutually exclusive "exact order" events, each with the probability found in (a).

---

## Points to Ponder

> **Watch out — double counting.** The single most common error in this chapter: writing \(P(A \cup B) = P(A)+P(B)\) *unconditionally*. This is only correct when \(A\) and \(B\) are mutually exclusive. Always check \(A \cap B\) first, and subtract it if it's non-empty.

> **Watch out — "not mutually exclusive" ≠ "exhaustive," and vice versa.** These are two independent properties of a set of events. A pair can be mutually exclusive but *not* exhaustive (e.g. "sum \(<4\)" and "sum \(>11\)" for two dice — disjoint, but plenty of sums between 4 and 11 are left uncovered). A pair can also be exhaustive but *not* mutually exclusive (e.g. "odd number" and "number \(<4\)" on a die — together they cover \(\{1,2,3,5\}\), missing 4 and 6, so this particular pair is actually neither — always verify both conditions independently rather than assuming one implies the other).

> **Watch out — the axioms don't require "equally likely."** \(P(H)=\tfrac14, P(T)=\tfrac34\) is just as valid an assignment as \(P(H)=P(T)=\tfrac12\), *provided* it satisfies all three axioms. Only invoke the classical formula \(P(E)=n(E)/n(S)\) when the problem explicitly states or implies equal likelihood (a fair coin, an unbiased die, a well-shuffled deck).

> **Watch out — "at least" and "at most" events.** Translate these carefully into set language before computing: "at least 2 heads" in three tosses is \(\{HHT,HTH,THH,HHH\}\) (2 **or** 3 heads), not just "2 heads." A rushed translation is a common source of an otherwise correct method giving the wrong final count.

> **Note — scope of \(P(E)=0 \iff E=\phi\).** In this chapter's finite, discrete sample spaces, probability zero and impossibility coincide exactly. This equivalence is specific to finite/discrete probability — it does **not** carry over unchanged to continuous probability distributions studied later, where an event can have probability 0 without being literally impossible. Don't over-generalize the finite-case intuition when the chapter's scope changes.

## Summary

An event is a subset of the sample space; the algebra of events (complement, union, intersection, difference) mirrors ordinary set algebra exactly. Mutually exclusive means disjoint sets; exhaustive means the union covers \(S\). The axiomatic definition — non-negativity, \(P(S)=1\), additivity over mutually exclusive events — is the minimal rule set from which everything else (probability zero for the impossible event, the classical equally-likely formula, the general addition theorem, and the complement rule) can be derived rather than separately memorized.
