# Computer Science | Chapter 05 | Conditional and Looping Constructs | GLOSSARY

> One-line lookup. Every entry stands alone: read it cold, get an unambiguous answer, move on.

## At a glance

- **Chapter:** CS06 — Flow of Control · **Branch:** Control Structures · **Level:** Class XI (CBSE)
- **Language version assumed:** Python 3.x
- **Sources:** **[NCERT]** *Computer Science — Class XI*, Ch. 6 "Flow of Control" · **[CSP-XI]** *Computer Science with Python — XI*, Ch. 6 "Conditional and Looping Constructs"

| File | Job | Read when |
| ---- | --- | --------- |
| `CS06-FLOW_OF_CONTROL_NOTES.md` | Full explanation | First pass, or when an entry here isn't enough |
| `CS06-FLOW_OF_CONTROL_GLOSSARY.md` | One-line lookup — this file | "What does X mean, right now" |
| `CS06-FLOW_OF_CONTROL_CNOTES.md` | Blind-recall practice | Every revision session |

### How to read an entry

- **Definition column:** one or two sentences, never more. Where a term has a **confusable twin**, the definition carries the *distinguishing* fact, not just a correct description — the discriminator is in bold.
- **§ column:** the section of NOTES that explains *why*. This glossary never explains why; that is NOTES's job.
- **(Supp.)** marks a term that appears only in [CSP-XI].
- **⚠** marks a term where the two books disagree. The entry states the version to use and points to **NOTES §6.22**, the source-discrepancy appendix.
- Terms with more than one meaning are flagged **[also means]** rather than silently defined in one sense only.

---

## 1. Flow-of-control vocabulary

| Term | Definition | § |
| ---- | ---------- | - |
| **Flow of control** | The order in which the statements of a program are executed. By default it runs top to bottom, first line to last. | §6.1 |
| **Control structure** | A construct that changes the default top-to-bottom order of execution. Python has exactly two kinds — selection and repetition. | §6.1 |
| **Sequence** | Execution of statements one after another in the order written, with no jump. **It is the absence of any control structure**, not a construct you write. | §6.1c |
| **Selection** (Decision) | Choosing one block of statements to execute from two or more alternatives, based on a condition. **Exactly one alternative runs**, which is what separates it from repetition. | §6.2 |
| **Iteration** | Executing a set of statements repeatedly. **[also means]** one single pass through a loop body — "the third iteration" — so read it from context. | §6.4 |
| **Repetition** / **Looping** | The general technique of executing a set of statements more than once. Interchangeable with *iteration* in its first sense. | §6.4 |
| **Branching** | Taking one of several paths depending on a condition; the informal name for what selection does. | §6.1a |
| **Condition** (Test expression) | An expression that evaluates to `True` or `False` and determines which path the program takes. | §6.2 |
| **Flowchart** | A diagram of a solution using standard symbols: oval for start/stop, parallelogram for input/output, rectangle for a process, **diamond for a decision — the only symbol with two exit arrows**. | §6.7.3 |
| **Pseudocode** | A language-independent, English-like statement of an algorithm, written before the code. | §6.9.2 |

## 2. Statements and blocks

| Term | Definition | § |
| ---- | ---------- | - |
| **Statement** | An instruction in the source code that the computer executes; the smallest executable unit of a program. Contrast with an **expression**, which produces a *value* rather than performing an action. | §6.1b |
| **Simple statement** | A statement occupying one logical line and carrying no indented body — an assignment, an expression, or a call. | §6.1b |
| **Compound statement** | A statement consisting of a **header** plus an indented **body**, executed as one unit. `if`, `while` and `for` are all compound statements. | §6.1b |
| **Empty statement** | A statement that performs no action, written in Python as `pass`. It exists because Python permits no empty block. | §6.1b |
| **Header** | The first line of a compound statement: a keyword, its condition or sequence, **and a mandatory colon `:`** at the end. | §6.1b |
| **Block** (suite, body) | A group of consecutive statements at the same indentation level, executed as a unit. It begins with an indent and ends at the **first less-indented line**. | §6.3 |
| **Indentation** | The leading whitespace at the start of a statement, which Python uses to group statements into a block. **It is syntax, not style** — it does the job curly brackets do in other languages. | §6.3 |
| **`IndentationError`** | The error Python raises when indentation is missing or inconsistent. It is a **syntax error**, so the program is rejected before any line runs. Mixing tabs and spaces raises the related `TabError`. | §6.3 |

## 3. Selection constructs

| Term | Definition | § |
| ---- | ---------- | - |
| **`if` statement** | A compound statement that executes its indented block only when its condition is `True`, and **does nothing at all when the condition is `False`**. | §6.2.1 |
| **`if..else` statement** | A two-way selection in which the condition chooses between two blocks. **Exactly one block always runs** — unlike a bare `if`, no input leaves the program with nothing to do. | §6.2.2 |
| **`elif`** | Python's spelling of "else if": a further condition chained onto an `if`. **Python has no `else if`** — that spelling is a syntax error. | §6.2.3 |
| **Ladder** (`if..elif..else`) | A chain of conditions tested top to bottom in which **the first `True` branch runs and the rest are never evaluated**; the optional final `else` is the catch-all. | §6.2.3 |
| **Nested `if`** | An `if` or `if..else` written inside the body of another `if`, `elif` or `else`. **Which `if` an `else` belongs to is decided by indentation alone.** | §6.2.4 |
| **`else`** | The block that runs when a condition is `False`. **[also means]** the block attached to a *loop*, which runs on normal completion under a completely different rule — see **loop `else`** below. | §6.2.2, §6.4.4 |

## 4. Repetition constructs

| Term | Definition | § |
| ---- | ---------- | - |
| **Loop** | A construct that executes a statement or group of statements more than once. | §6.4 |
| **`for` loop** | A loop that executes its body once for each item of a sequence or range. **The number of repetitions is known before the loop starts**, which is why it is called a *definite* loop. | §6.4.1 |
| **`while` loop** | A loop that repeats its body as long as a condition is `True`, testing the condition **before** each pass. **If the condition is `False` at the first test, the body never runs at all.** | §6.4.2 |
| **Definite loop** | A loop whose trip count is fixed before it begins — in Python, a `for` loop. | §6.4 |
| **Indefinite loop** | A loop whose trip count is not known in advance because it depends on a condition re-evaluated each pass — in Python, a `while` loop. | §6.4 |
| **Control variable** (loop variable) | The variable whose value the loop's condition is tested against. **A `for` loop updates it automatically; a `while` loop does not — you must initialise and update it yourself.** ⚠ [CSP-XI] says it "contains the highest value of the list" after a `for`; it holds the **last** value supplied, which is the lowest for a descending range. | §6.4, §6.22 |
| **Loop body** | The indented statements repeated on each iteration. It must contain at least one statement; `pass` satisfies that. | §6.4 |
| **Exit condition** (test condition) | The condition whose becoming `False` ends the loop. Guaranteeing that it eventually becomes `False` is the programmer's responsibility, not Python's. | §6.4 |
| **Infinite loop** | A loop whose condition never becomes `False` and so never terminates, usually because the control variable is never updated. **`while True:` with a `break` inside is a deliberate, correct use of the same shape.** Interrupt a running one with `Ctrl + C`. | §6.4.3 |
| **`range()`** | A built-in function generating a sequence of integers from `start` up to **but excluding** `stop`, in steps of `step`. **[also means]** in Python 3 it returns a lazy *range object*, not a list — wrap it in `list()` to see the values. | §6.4.1a |
| **`start`, `stop`, `step`** | The three parameters of `range()`. `start` defaults to `0` and `step` to `1`; all three must be integers, and `step` may be negative but **never zero**. | §6.4.1a |
| **Loop `else` clause** (Supp.) | A block attached to a `for` or `while` that runs when the loop ends **normally**, and is **skipped entirely if the loop was left by `break`**. Read it as "no-break", never as "otherwise". | §6.4.4 |
| **Accumulator** | A variable initialised before a loop and updated inside it to build a running total or product. **Initialise to `0` for a sum and `1` for a product** — the identity value of the operation. | §6.17.2 |
| **Truth value** | What Python treats as `True` or `False` in a condition: **every non-zero value is `True`; `0` and `None` are `False`.** This is why `while 1:` and `while True:` behave identically. | §6.4.2 |

## 5. Jump statements

| Term | Definition | § |
| ---- | ---------- | - |
| **Jump statement** | A statement that transfers control out of a loop's normal flow — in Python, `break` or `continue`. | §6.5 |
| **`break`** | Terminates the loop containing it and resumes at the first statement after that loop. **In a nested loop it exits only the innermost loop**, and it suppresses that loop's `else` clause. | §6.5.1 |
| **`continue`** | Abandons the rest of the current iteration and jumps back to the loop's condition test. **The loop is not terminated** — that is the whole difference from `break`. | §6.5.2 |
| **`pass`** (Supp.) | A null operation that does nothing when executed, used where a statement is syntactically required but no action is wanted. **Unlike `continue`, it skips nothing** — execution carries straight on to the next statement in the same block. | §6.5.3 |

## 6. Nesting

| Term | Definition | § |
| ---- | ---------- | - |
| **Nested loop** | A loop written inside the body of another loop. **The inner loop runs to completion for every single iteration of the outer one**, and terminates first. | §6.6 |
| **Outer loop / inner loop** | The enclosing loop and the enclosed loop. **The inner loop must use a different control variable**, or it overwrites the outer loop's counter. | §6.6 |
| **Trip count** | The number of times a loop's body executes. For a nested loop, the innermost body runs **the product** of the two trip counts. | §6.6 |

## 7. Error categories

| Term | Definition | § |
| ---- | ---------- | - |
| **Syntax error** | A violation of the language's grammar; Python rejects the file and **nothing runs**. Missing colon, unclosed bracket, `IndentationError`. | §6.8 |
| **Runtime error** | An error that aborts the program **mid-execution** with a traceback: `ZeroDivisionError`, `ValueError` from `int('abc')`, `NameError`, `TypeError`. | §6.8 |
| **Logical error** | A program that runs to completion and produces the **wrong answer**. **It produces no error message at all**, which is what makes it the hardest of the three to find. | §6.8 |

## 8. Operators and expressions used in conditions

| Term | Definition | § |
| ---- | ---------- | - |
| **Relational operator** | An operator comparing two values and yielding `True` or `False`: `>` `<` `>=` `<=` `==` `!=`. **`==` compares; `=` assigns**, and `=` inside a condition is a syntax error. | §6.15 |
| **Logical operator** | `and`, `or`, `not`, which combine or negate conditions. **Precedence runs `not`, then `and`, then `or`** — so `a or b and c` means `a or (b and c)`. | §6.15 |
| **Chained comparison** | Two comparisons written around one value, as in `y >= x <= z`, which Python reads as `y >= x and x <= z`. **Most other languages do not have this** — they would compare a boolean to `z`. | §6.2.4 |
| **`in`** | The membership operator, testing whether a value occurs in a sequence: `ch in ('a','e','i','o','u')`. **[also means]** the keyword supplying a `for` loop its sequence — two unrelated uses of one word. | §6.4.1, §6.17.5 |
| **Conditional expression** | `A if condition else B`, an expression evaluating to `A` or `B`. **It is not a control structure**: it yields a value and can sit on the right-hand side of an assignment. | §6.19.2 |
| **Modulus `%`** | The operator giving the remainder of a division; the basis of every even/odd, divisibility and digit-extraction test. **Raises `ZeroDivisionError` if the right operand is `0`.** | §6.17.1 |
| **Floor division `//`** | Integer division, discarding the fractional part. **Prefer `n // 10` over `int(n/10)`** — the latter builds a float only to truncate it. | §6.17.1 |
| **Shadowing** | Using a built-in function's name as a variable, e.g. `max = n` or `sum = 0`, which makes that built-in unavailable for the rest of the program. Legal, and done by several textbook programs in this chapter, but bad practice. | §6.17.3 |
| **Floating-point representation** | The reason `(37 * 1.8) + 32` prints `98.60000000000001`: binary floats cannot represent every decimal exactly. **It is not a bug in the program** — use `round(value, 2)` for display. | §6.17.5 |

## 9. Hardware vocabulary (Supp.)

| Term | Definition | § |
| ---- | ---------- | - |
| **CPU** | Central Processing Unit — the component that executes every statement of a program. It has three parts: ALU, CU and MU. | §6.1a |
| **ALU** | Arithmetic Logic Unit — the part of the CPU performing all mathematical operations and conversions. **Its logic half is what evaluates a condition as true or false**, which is the hardware an `if` statement uses. | §6.1a |
| **CU** | Control Unit — the part of the CPU directing the order in which instructions are fetched and executed; the hardware counterpart of "flow of control". | §6.1a |
| **MU** | Memory Unit — the part of the CPU holding the data the ALU works on. | §6.1a |

---

## 10. Discriminator index

Every confusable pair flagged in NOTES §6.8, with the single fact that separates them. Both halves of each pair carry this fact in their own entry above; this table is the cross-check.

| A | B | The one fact that separates them |
| --- | --- | --- |
| `=` | `==` | Assigns vs. compares. `=` inside a condition is a syntax error, not a silent bug. |
| `else` | `elif` | `else` takes no condition and appears at most once; `elif` takes one and may appear many times. |
| `else` (with `if`) | loop `else` | Runs when the condition was `False` vs. runs when the loop finished **without `break`**. |
| `for` | `while` | Trip count known before starting vs. not known. |
| `break` | `continue` | Leaves the loop vs. returns to the loop's condition. |
| `continue` | `pass` | Skips the rest of the iteration vs. skips nothing at all. |
| `pass` | a comment | `pass` is a statement and satisfies a block; a comment is not, so a block with only a comment raises `IndentationError`. |
| `range(1, 10)` | `range(1, 11)` | 1–9 vs. 1–10. `stop` is always excluded. |
| Nested `if` | `if..elif` | The second condition is a *refinement* of the first vs. an *alternative* to it. |
| Accidental infinite loop | `while True` + `break` | A missing update vs. a deliberate, standard pattern. |
| Syntax error | Logical error | Nothing runs, with a message vs. everything runs, with no message. |
| `and` | `or` | `and` binds tighter, so it groups first in an unparenthesised mix. |
| Iteration (one pass) | Iteration (the technique) | "The third iteration" vs. "repetition by iteration" — one word, two scopes. |

## 11. Where the two books disagree ⚠

This glossary does not resolve a genuine source conflict silently. Use the **Use this** column; the reasoning is in NOTES §6.22.

| Point | [CSP-XI] says | Use this | § |
| ----- | ------------- | -------- | - |
| Value of a `for` control variable after the loop | "contains the highest value of the list" | The **last** value supplied. For `range(10, 0, -2)` that is `2` — the lowest. | §6.22 |
| When a `while` body executes | "executed **until** test expression evaluates to true" (Fig. 6.5 caption) | Executed **while** the condition is `True`; the loop ends when it becomes `False`. The same book states it correctly elsewhere. | §6.4.2, §6.22 |
| Trip count of `range(1, 51, 3)` | "16 times" (Solved Q16) | **17** times, ending at 49. | §6.22 |

Nineteen further source errors — wrong formulas, uncorrected answers, unreachable branches — are listed in NOTES §6.22. None of them changes a *definition*, which is why they are not repeated here.

## 12. Keywords and built-ins introduced

> [!note] Reserved keywords — cannot be used as identifiers
> `if` · `elif` · `else` · `for` · `while` · `in` · `break` · `continue` · `pass` · `True` · `False` · `None`

> [!note] Built-in names — legal as identifiers, but shadowing them is bad practice
> `range` · `print` · `input` · `int` · `float` · `str` · `len` · `list` · `max` · `min` · `sum` · `chr`

> [!warning] Casing is fixed
> Python is case-sensitive. `True`, `False` and `None` are capitalised; every keyword above is otherwise lowercase. `IF`, `Print` and `Range` are not Python.

## 13. Definitions to reproduce verbatim

The six most commonly asked one-line definitions.

> **Flow of control:** the order of execution of the statements in a program. (§6.1)

> **Iteration:** the repeated execution of a set of statements in a program. (§6.4)

> **Indentation:** the leading whitespace at the beginning of a statement, used by Python to group statements into a block. (§6.3)

> **Infinite loop:** a loop whose condition never becomes `False`, so it never terminates. (§6.4.3)

> **Nested loop:** a loop contained within the body of another loop. (§6.6)

> **Jump statement:** a statement that transfers control out of the normal flow of a loop — `break` or `continue`. (§6.5)

---

## Audit log

What changed when this file was tightened against the five airtightness checks, and why. Kept so the next revision does not silently undo it.

| Former entry | Check it failed | Fix applied |
| ------------ | --------------- | ----------- |
| Every entry carried a third column, "Detail that earns the second mark" | **5 — length discipline.** That column was explanation, which is NOTES's job, and it pushed entries to four or five sentences. | Column removed. The *discriminating* fact was folded into the definition in bold; the rest now sits behind a `§` reference. |
| **Sequence:** "statements executed one after another in the order written" | **1 — circular in spirit.** Described the effect without saying what it *is* relative to the other two categories. | Added "it is the absence of any control structure, not a construct you write". |
| **Selection**, **`if..else`**, **`elif`**, **`break`**, **`continue`** | **3 — missing discriminator.** Each was technically correct but did not separate the term from its confusable twin under exam pressure. | Each now carries the separating fact in bold, cross-checked against §10. |
| **`else`**, **`in`**, **`iteration`**, **`range()`** | **4 — hidden polysemy.** Each was defined in one sense only, letting the reader assume completeness. | Flagged **[also means]** with the second sense stated. |
| **Control variable** | **Source conflict resolved silently.** Stated the correct rule without flagging that [CSP-XI] states a different one. | ⚠ flag added, plus the conflict table in §11. |
| **Logical operator** | **2 — silent dependency.** Named `and`/`or`/`not` without stating precedence, which is exactly what a reader looks the term up to find. | Precedence stated inline. |
| No entry carried a section reference | Not one of the five checks, but the three-file contract requires it. | Every entry now carries a `§` into NOTES. |
| "Easily confused pairs" table | Was doing the discriminator work *instead of* the entries, so a reader looking up one term alone missed it. | Retained as a cross-check index (§10), with the facts duplicated into the entries themselves. |