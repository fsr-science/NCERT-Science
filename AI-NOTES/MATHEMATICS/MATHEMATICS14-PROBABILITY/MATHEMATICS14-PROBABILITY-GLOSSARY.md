
# GLOSSARY — Probability (NCERT Class 11, Chapter 14)

> Quick-reference sheet: every term, set-notation correspondence, axiom, and formula from the chapter in one place, grouped by topic. For explanations and worked examples, see `NOTES-Probability.md`. For the concept map and problem-solving flowcharts, see `REVISION-MINDMAP-Probability.md`.

## 1. Foundational terms


| Term                       | Meaning                                                                                 | Notation                   |
| ---------------------------- | ----------------------------------------------------------------------------------------- | ---------------------------- |
| **Random experiment**      | An experiment whose outcome cannot be predicted with certainty                          | —                         |
| **Sample space**           | The set of*all* possible outcomes of a random experiment; acts as the universal set     | \(S\)                      |
| **Event**                  | Any subset of the sample space                                                          | \(E \subseteq S\)          |
| **Outcome / sample point** | A single element of the sample space                                                    | \(\omega\) or \(\omega_i\) |
| **Occurrence of an event** | Event\(E\) is said to occur if the actual outcome \(\omega\) satisfies \(\omega \in E\) | —                         |

## 2. Types of events


| Type                          | Definition                                                                                               | Example (rolling a die,\(S=\{1,2,3,4,5,6\}\)) |
| ------------------------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **Impossible event**          | The empty set; no outcome satisfies it                                                                   | "multiple of 7 appears"\(= \phi\)             |
| **Sure event**                | The whole sample space; every outcome satisfies it                                                       | "odd or even number appears"\(= S\)           |
| **Simple (elementary) event** | Contains exactly**one** sample point. A sample space with \(n\) outcomes has exactly \(n\) simple events | \(\{4\}\)                                     |
| **Compound event**            | Contains**more than one** sample point                                                                   | "even number appears"\(=\{2,4,6\}\)           |

> **Watch out:** Simple events of a sample space are always mutually exclusive of one another (they share no point), but a set of simple events is exhaustive only if it covers *every* outcome — i.e. only when you list *all* \(n\) of them.

## 3. Algebra of events (set operations on events)


| Event, in words                | Set notation                                                | Read as      |
| -------------------------------- | ------------------------------------------------------------- | -------------- |
| Not\(A\) (complementary event) | \(A' = S - A = \{\omega : \omega \in S, \omega \notin A\}\) | "not\(A\)"   |
| \(A\) or \(B\) (or both)       | \(A \cup B\)                                                | union        |
| \(A\) and \(B\)                | \(A \cap B\)                                                | intersection |
| \(A\) but not \(B\)            | \(A - B = A \cap B'\)                                       | difference   |

## 4. Special relationships between events


| Relationship                                  | Condition                                                                                   | Meaning                                                                              |
| ----------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------- |
| **Mutually exclusive**                        | \(A \cap B = \phi\)                                                                         | \(A\) and \(B\) cannot occur simultaneously; their sets are disjoint                 |
| **Exhaustive** (for \(E_1, E_2, \dots, E_n\)) | \(\displaystyle\bigcup_{i=1}^{n} E_i = S\)                                                  | At least one of the events necessarily occurs every time the experiment is performed |
| **Mutually exclusive AND exhaustive**         | \(E_i \cap E_j = \phi\ \forall i \ne j\) **and** \(\displaystyle\bigcup_{i=1}^{n} E_i = S\) | The events partition\(S\) with no overlap and no gap                                 |

## 5. Axiomatic definition of probability

Let \(S\) be a sample space. \(P\) is a real-valued function on the power set of \(S\), with range \([0,1]\), satisfying:


| Axiom | Statement                                                               |
| ------- | ------------------------------------------------------------------------- |
| (i)   | \(P(E) \ge 0\) for every event \(E\)                                    |
| (ii)  | \(P(S) = 1\)                                                            |
| (iii) | If\(E\) and \(F\) are mutually exclusive, \(P(E \cup F) = P(E) + P(F)\) |

**Direct consequences**, for \(S = \{\omega_1, \omega_2, \dots, \omega_n\}\):

$$
\boxed{P(\phi) = 0} \qquad
\boxed{0 \le P(\omega_i) \le 1 \ \ \forall i} \qquad
\boxed{\sum_{i=1}^{n} P(\omega_i) = 1} \qquad
\boxed{P(A) = \sum_{\omega_i \in A} P(\omega_i)}

$$

> **Note:** Probability assignments satisfying these axioms are **not unique** — many different valid assignments can exist for the same sample space (e.g. a biased vs. an unbiased coin). "Equally likely" is an *extra* assumption, not a requirement of the axioms.

## 6. Equally likely outcomes

If every outcome is equally likely, each simple event has probability \(\tfrac{1}{n}\) where \(n = n(S)\), and for any event \(A\):

$$
\boxed{P(A) = \dfrac{n(A)}{n(S)} = \dfrac{\text{number of outcomes favourable to } A}{\text{total number of possible outcomes}}}

$$

## 7. Combination rules for probability


| Rule                                       | Formula                                                                                               | Condition                                                              |
| -------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| **General addition theorem**               | \(P(A \cup B) = P(A) + P(B) - P(A \cap B)\)                                                           | Any two events\(A, B\)                                                 |
| **Addition rule, mutually exclusive case** | \(P(A \cup B) = P(A) + P(B)\)                                                                         | Only when\(A \cap B = \phi\)                                           |
| **Addition theorem, three events**         | \(P(A \cup B \cup C) = P(A)+P(B)+P(C) - P(A\cap B) - P(B \cap C) - P(A \cap C) + P(A \cap B \cap C)\) | Any three events\(A, B, C\)                                            |
| **Complement rule**                        | \(P(\text{not } A) = P(A') = 1 - P(A)\)                                                               | Any event\(A\) (since \(A, A'\) are mutually exclusive and exhaustive) |

## 8. Symbol quick-lookup


| Symbol                | Read as                                              |
| ----------------------- | ------------------------------------------------------ |
| \(S\)                 | Sample space                                         |
| \(\phi\)              | Empty set / impossible event                         |
| \(A'\) or "not \(A\)" | Complement of\(A\)                                   |
| \(A \cup B\)          | \(A\) or \(B\)                                       |
| \(A \cap B\)          | \(A\) and \(B\)                                      |
| \(A - B\)             | \(A\) but not \(B\)                                  |
| \(n(A)\)              | Number of elements (sample points) in set/event\(A\) |
| \(P(A)\)              | Probability of event\(A\)                            |
| \(\omega_i\)          | The\(i\)-th sample point / outcome                   |
