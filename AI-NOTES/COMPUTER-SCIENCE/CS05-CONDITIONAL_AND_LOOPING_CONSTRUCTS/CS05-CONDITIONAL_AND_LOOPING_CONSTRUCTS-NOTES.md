# Computer Science | Chapter 05 | Conditional and Looping Constructs | NOTES

> How Python decides *which* statement runs next: straight through, one branch out of many, or the same block over and over.

> *"Don't you hate code that's not properly indented? Making it [indenting] part of the syntax guarantees that all code is properly indented."*
>
> — G. van Rossum, quoted as the epigraph of [NCERT] Chapter 6

## At a glance

- **Branch:** Control Structures
- **Level:** Class XI (CBSE)
- **Language version assumed:** Python 3.x (in Python 2, `print` is a statement, not a function — every program here is Python 3)
- **Prerequisites:** variables and assignment, `input()` / `print()`, `int()` / `float()` type conversion, relational operators (`>`, `<`, `>=`, `<=`, `==`, `!=`), logical operators (`and`, `or`, `not`)
- **Key idea:** Python executes statements top to bottom by default. **Selection** and **repetition** are the only two things that change that order — everything else in this chapter (`break`, `continue`, `pass`, nesting) is a refinement of those two.

### Sources used

| Label | Source |
| ----- | ------ |
| **[NCERT]** | *Computer Science — Class XI* (NCERT), Chapter 6, "Flow of Control". **Primary source** — this note follows its section numbering. |
| **[CSP-XI]** | *Computer Science with Python — XI*, Chapter 6, "Conditional and Looping Constructs". **Supplementary** — its unique material is folded in as labelled subsections. |
| **(New)** | Added during gap analysis — not printed in either book. |

> [!note] Naming convention
> this note uses lowercase `snake_case` identifiers (`num1`, `test_condition`), matching NCERT. [CSP-XI] mixes styles (`Age`, `MaxSpeed`, `hourlypay`); where its code is quoted, its own casing is preserved so the program still matches the book.

### Conventions used in this note

| Marker | Meaning |
| ------ | ------- |
| **[NCERT]** | Content from the primary source. Its own labels are kept: *Program 6-1*, *Example 6.1*, *Exercise 5(i)*, *Programming Exercise 7*. |
| **[CSP-XI]** | Content from the supplementary source. Its programs are labelled **PI-n** (its "Practical Implementation-n") so they can never be confused with NCERT's *Program 6-n*. |
| **(Supp.)** | A whole section that exists only in [CSP-XI] and has been folded into NCERT's structure. |
| **(New)** | Added here during gap analysis — in neither book. |
| **§6.x** | A section *of this note*. Source-book sections are written without the sign, e.g. "[CSP-XI] 6.8.3". |
| ⭐ / ⭐⭐ / ⭐⭐⭐ | Weight: nice to know / examinable / core. |
| `> [!note]` | A key idea — the sentence to be able to state. |
| `> [!warning]` | A trap, a source error, or a spec/code mismatch. |
| `> [!tip]` | A shortcut or a check. |
| `> [!example]` | A worked practice item. |

Numbering: NCERT's own section numbers (6.1–6.6) are preserved exactly. Material folded in from [CSP-XI] or added here takes a **letter suffix** on the section it belongs to — §6.1a, §6.2.2a, §6.3a, §6.4.1a — so nothing shifts NCERT's numbering. Back matter continues as §6.7 onward.

Worked examples sit inside the nearest numbered section; a miss on any of them sends you to that section's number.

### Companion files

| File | Job | Read when |
| ---- | --- | --------- |
| `CS06-FLOW_OF_CONTROL_NOTES.md` | Full explanation — this file | First pass through the chapter |
| `CS06-FLOW_OF_CONTROL_GLOSSARY.md` | One-line lookup of a single term | "What does X mean, right now" |
| `CS06-FLOW_OF_CONTROL_CNOTES.md` | Blind-recall practice | Every revision session, **before** reopening this file |

## Learning goals

By the end of this note you should be able to:

1. Trace, by hand, which statements execute in an `if` / `if..else` / `if..elif..else` ladder and say why the others were skipped.
2. Choose between `for` and `while` from the problem statement alone, before writing any code.
3. Predict the exact output of a `range()` call without running it.
4. Explain what `break`, `continue` and `pass` each do to the surrounding loop, and what a loop's optional `else` does.
5. Spot the three classic failures — wrong indentation, `=` used for `==`, and a loop whose exit condition never becomes false.

## Contents

- **§6.1** — Introduction — what "flow of control" means
  - **§6.1a** — Where a decision is actually taken — the CPU's logic unit (Supp.)
  - **§6.1b** — Types of statements in Python (Supp.)
  - **§6.1c** — The three control-flow categories (Supp.)
- **§6.2** — Selection
  - **§6.2.1** — The `if` statement
  - **§6.2.2** — The `if..else` statement
  - **§6.2.2a** — Four standard `if..else` programs (Supp.)
  - **§6.2.3** — The `if..elif..else` ladder
  - **§6.2.4** — Nested `if`
- **§6.3** — Indentation
  - **§6.3a** — How the interpreter reads nesting (Supp.)
- **§6.4** — Repetition
  - **§6.4.1** — The `for` loop
  - **§6.4.1a** — The `range()` function — [NCERT] labels this 6.4.1(B)
  - **§6.4.2** — The `while` loop
  - **§6.4.3** — Infinite loops (Supp.)
  - **§6.4.4** — The loop `else` clause (Supp.)
- **§6.5** — Jump statements — `break`, `continue`, `pass`
  - **§6.5.1** — The `break` statement
  - **§6.5.2** — The `continue` statement
  - **§6.5.3** — The `pass` statement (Supp.)
- **§6.6** — Nested loops
- **§6.7** — Quick reference
  - **§6.7.1** — Syntax cheat-sheet
  - **§6.7.2** — Keywords introduced in this chapter
  - **§6.7.3** — Flowchart symbols
- **§6.8** — Points to ponder — the traps
- **§6.9** — Problem-solving strategy
  - **§6.9.1** — Choosing the right loop
  - **§6.9.2** — Word problem to working program
  - **§6.9.3** — Tracing a loop on paper
- **§6.10** — Check your understanding
- **§6.11** — Conceptual questions with answers
- **§6.12** — More output tracing
- **§6.13** — Converting between `while` and `for`
- **§6.14** — Find the error
- **§6.15** — Writing logical expressions
- **§6.16** — Objective questions with answers
  - **§6.16.1** — Fill in the blanks ([CSP-XI])
  - **§6.16.2** — True or false ([CSP-XI])
  - **§6.16.3** — Multiple choice ([CSP-XI])
- **§6.17** — Program library
  - **§6.17.1** — Technique — digit-by-digit processing with `% 10` and `// 10`
  - **§6.17.2** — Technique — the accumulator
  - **§6.17.3** — Technique — running extreme
  - **§6.17.4** — Technique — generating a sequence
  - **§6.17.5** — Technique — classification ladders
  - **§6.17.6** — Technique — menu-driven programs
  - **§6.17.7** — Technique — series with a running term
- **§6.18** — Pattern printing
- **§6.19** — Case studies
  - **§6.19.1** — Student Management Information System ([NCERT] Case Study 6.1)
  - **§6.19.2** — Guruji Astro — zodiac sign from a date ([CSP-XI] Case Study 1)
  - **§6.19.3** — Redwood Shop — GST on a sale ([CSP-XI] Case Study 2)
- **§6.20** — Still to attempt
- **§6.21** — Summary
- **§6.22** — Source-discrepancy appendix

## Concept roadmap

```mermaid
flowchart TD
    P1["Prerequisite: variables, input, print"] --> P3["Flow of control"]
    P2["Prerequisite: relational and logical operators"] --> P3
    P3 --> C1["Selection: if / if-else / if-elif-else"]
    P3 --> C2["Repetition: for and while"]
    C1 --> C3["Indentation defines the block"]
    C2 --> C3
    C2 --> C4["range for counted loops"]
    C1 --> C5["Jump statements: break, continue, pass"]
    C2 --> C5
    C2 --> C6["Nested loops"]
    C3 --> A1["Menu-driven programs, grading, calculators"]
    C4 --> A2["Tables, factorials, series"]
    C5 --> A3["Early exit: search, prime test"]
    C6 --> A4["Patterns, prime lists"]
```

*Reading it:* everything downstream of "Flow of control" splits into exactly two structures — selection and repetition. Indentation is not a separate topic; it is the mechanism *both* of them use to mark their bodies, which is why it sits under both.

---

## 6.1 Introduction — what "flow of control" means ⭐

[NCERT] opens with a school bus following one fixed road from milestone to milestone: there is only one route, so the order of arrival is fixed. That is **sequence** — Python executes one statement after another, from the first line to the last.

> [!note] Key idea
> The **flow of control** is the order in which the statements of a program are executed. Left alone, it is top-to-bottom. A **control structure** is any construct that changes it. Python has exactly two kinds: **selection** and **repetition**.

### Program 6-1 — Difference of two numbers ([NCERT] Program 6-1)

- **Given:** two numbers entered by the user.
- **Find:** their difference, printed.
- **Approach:** no decision, no repetition — pure sequence.

```python
#Program 6-1
#Program to print the difference of two input numbers
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
diff = num1 - num2
print("The difference of",num1,"and",num2,"is",diff)
```

Output (for inputs `5` and `7`):

```text
Enter first number: 5
Enter second number: 7
The difference of 5 and 7 is -2
```

- **Check:** `5 - 7` is `-2`, so the program is right — but the *answer* may not be what was wanted. A "difference" is usually meant to be positive. Fixing that needs a decision, which is exactly where §6.2 begins.

> [!warning] Trap
> `input()` always returns a **string**. Without `int()`, `num1 - num2` would raise `TypeError: unsupported operand type(s) for -: 'str' and 'str'`. The conversion is not decoration.

### 6.1a Where a decision is actually taken — the CPU's logic unit **(Supp.)** ⭐

[CSP-XI] frames the same idea in hardware terms. Every statement of a program is executed by the **CPU**, which has three parts: the **ALU** (Arithmetic Logic Unit), the **CU** (Control Unit) and the **MU** (Memory Unit). The ALU handles all mathematical operations and conversions; it is its *logic* half that lets a computer "think" — that is, evaluate a condition as true or false. Writing an `if` statement is how a programmer hands work to that unit.

Its everyday example names both halves of a decision cleanly:

> **If it is raining, I will use an umbrella so that I don't get wet.** If the condition is true — it *is* raining — take the umbrella. If it is false, do not.

This is called **branching**. A bare `if` only covers the true half, which is exactly the limitation §6.2.2 removes.

### 6.1b Types of statements in Python **(Supp.)** ⭐

[NCERT] does not classify statements; [CSP-XI] does, and the vocabulary is examinable.

| Type | What it is | Example |
| ---- | ---------- | ------- |
| **Empty statement** | A placeholder that does nothing. Python has no empty blocks, so a block that needs no action still needs a statement — `pass`. | `pass` |
| **Simple statement** | A single logical statement: an assignment, an expression, a call. | `x = 10`, `x = 10 + 15`, `print(name)` |
| **Compound statement** | A **header** line ending in a colon, plus an indented **body** of one or more statements. | `if`, `while`, `for`, `def` blocks |

The general shape of a compound statement:

```text
<compound statement header>:
    <one or more simple or compound statements,
     all indented to the same level>
```

> [!note] Key idea
> Every control structure in this chapter is a compound statement. Header ends with `:`; body is indented. Get those two right and most syntax errors disappear.

### 6.1c The three control-flow categories **(Supp.)** ⭐

1. **Sequence** — statements run in written order, no jumps.
2. **Selection / Decision** — a condition picks one block out of two or more alternatives (`if..else`).
3. **Iteration / Looping** — a block runs repeatedly while a condition holds (`for`, `while`).

The set of statements repeated is the **body of the loop**; one pass through it is an **iteration**; the condition that ends it is the **exit** or **test condition**.

---

## 6.2 Selection ⭐⭐⭐

You have ₹10 and the shop has several pens at ₹10 each — you must *decide* which to buy. A digital map offers the least-crowded route and the shortest route — you *select* one. **A decision means choosing one of two or more possible options**, and in Python that is the `if` family.

```mermaid
flowchart TD
    A([Start]) --> B[/"Input num1, num2"/]
    B --> C{"num1 > num2?"}
    C -->|Yes| D["diff = num1 - num2"]
    C -->|No| E["diff = num2 - num1"]
    D --> F[\"Display diff"\]
    E --> F
    F --> G([Stop])
```

*Reading it:* the diamond is the only place the path splits, and both branches rejoin before the output — so exactly one of `D` or `E` runs, never both, never neither. That is the defining property of selection.

### 6.2.1 The `if` statement

```text
if condition:
    statement(s)
```

- The condition is followed by a **colon** — it is not optional.
- The statement(s) below it are **indented** (4 spaces is standard). The indentation is what says "this belongs to the `if`".
- If the condition is `True`, the indented block runs. If it is `False`, the block is skipped entirely and control moves to the first *un-indented* line after it.
- There is no limit on how many statements the block may contain.
- Brackets around the condition — `if (age >= 18):` — are legal but not required.

#### Example 6.1 — Voting eligibility ([NCERT] Example 6.1)

```python
age = int(input("Enter your age "))
if age >= 18:
    print("Eligible to vote")
```

For input `10`, nothing is printed at all. The program simply ends without telling the user anything — which is a usability flaw, not a bug, and the reason `else` exists.

### 6.2.2 The `if..else` statement

`if` alone has no answer for the `False` case. `if..else` supplies one, and **exactly one** of the two blocks always runs.

```text
if condition:
    statement(s)
else:
    statement(s)
```

```python
age = int(input("Enter your age: "))
if age >= 18:
    print("Eligible to vote")
else:
    print("Not eligible to vote")
```

Output (for input `10`):

```text
Enter your age: 10
Not eligible to vote
```

#### Program 6-2 — Positive difference of two numbers ([NCERT] Program 6-2)

- **Given:** Program 6-1, which can print a negative difference.
- **Find:** always a positive difference.
- **Approach:** subtract the smaller from the larger — one decision, two branches, matching the flowchart above.

```python
#Program 6-2
#Program to print the positive difference of two numbers
num1 = int(input("Enter first number: "))
num2 = int(input("Enter second number: "))
if num1 > num2:
    diff = num1 - num2
else:
    diff = num2 - num1
print("The difference of",num1,"and",num2,"is",diff)
```

Output (for inputs `5` and `6`):

```text
Enter first number: 5
Enter second number: 6
The difference of 5 and 6 is 1
```

- **Check:** `num1 == num2` falls into the `else` branch and gives `0`, which is correct — a two-way `if..else` leaves no case uncovered, unlike a bare `if`.

### 6.2.2a Four standard `if..else` programs **(Supp.)** ⭐⭐

All four are the same two-way shape with a different condition. They appear in question papers constantly.

**1. Odd or even ([CSP-XI] Practical Implementation-4)** — the test is always the remainder operator, never division.

```python
x = int(input("Enter no: "))
if (x % 2 == 0):
    print("Even number")
else:
    print("Odd number")
```

Output:

```text
Enter no: 20
Even number
```

**2. Absolute value ([CSP-XI] Practical Implementation-5)**

```python
#Program to find absolute value of a number in Python
x = int(input("Enter the number: "))
if x > 0:
    print("absolute value is", x)
else:
    print("absolute value is", -x)
```

Output:

```text
Enter the number: -50
absolute value is 50
```

- **Check:** the condition is `x > 0`, so `0` falls into the `else` branch and prints `-0`, which for an integer *is* `0`. The program is right, but by luck rather than by design — `x >= 0` says what was meant.

**3. Divisibility ([CSP-XI] Practical Implementation-6)**

```python
#Program to check divisibility of a number
print("Enter a Number (Numerator): ")
numn = int(input())
print("Enter a Number (denominator): ")
numd = int(input())
if numn % numd == 0:
    print("\n" + str(numn) + " is divisible by " + str(numd))
else:
    print("\n" + str(numn) + " is not divisible by " + str(numd))
```

Output:

```text
Enter a Number (Numerator): 
20
Enter a Number (denominator): 
13

20 is not divisible by 13
```

- **Note:** `str(numn)` is required because `+` concatenates strings but raises `TypeError` on mixed `str` and `int`. Compare with `print("...", numn, "...")`, which uses commas and needs no conversion at all.

> [!warning] Trap
> Enter `0` as the denominator and `numn % numd` raises `ZeroDivisionError: integer division or modulo by zero`. That is a **runtime error** — the program starts fine and dies mid-way. Neither book guards against it; a real program would wrap the test in `if numd != 0:`.

**4. Weekly pay ([CSP-XI] 6.5.2, Example 1)** — the book's only example that shows a flowchart and its code side by side.

```mermaid
flowchart TD
    A([Start]) --> B[/"Input hourly pay"/]
    B --> C[/"Input hours per week"/]
    C --> D["weekly pay = hourly pay * hours per week"]
    D --> E{"weekly pay > 400?"}
    E -->|True| F[\"Can afford to live alone"\]
    E -->|False| G[\"Cannot afford to live alone"\]
    F --> H([End])
    G --> H
```

```python
hourlypay = int(input("How much do you earn per hour?"))
hoursperweek = int(input("How many hours a week do you work?"))
weeklypay = hourlypay * hoursperweek
if weeklypay > 400:
    print("You can afford to live alone.")
else:
    print("You can't afford to live alone.")
```

Output (for inputs `12` and `40`):

```text
How much do you earn per hour?12
How many hours a week do you work?40
You can afford to live alone.
```

- **Approach note:** the *calculation* happens before the decision, not inside it. Computing a value, then branching on it, is the standard shape — don't duplicate the arithmetic in both branches.

### 6.2.3 The `if..elif..else` ladder

When there are more than two outcomes, chaining is clearer than nesting. **`elif` is short for "else if".**

```text
if condition:
    statement(s)
elif condition:
    statement(s)
elif condition:
    statement(s)
else:
    statement(s)
```

> [!note] Key idea
> Conditions are tested **in order, top to bottom**. The moment one is `True`, its block runs and *the whole ladder ends* — no later condition is even evaluated. `else` is optional; the number of `elif`s depends only on how many cases there are.

That "first true branch wins" rule is why ladder order matters, and why overlapping conditions are not automatically a bug.

#### Example 6.2 — Positive, negative or zero ([NCERT] Example 6.2)

```python
number = int(input("Enter a number: "))
if number > 0:
    print("Number is positive")
elif number < 0:
    print("Number is negative")
else:
    print("Number is zero")
```

> [!warning] Trap
> As printed in NCERT, this example's first line reads `number = int(input("Enter a number: ")` — one closing parenthesis short. That is a **syntax error**: Python refuses to run the file at all and reports `SyntaxError: '(' was never closed`. The version above is corrected.

#### Example 6.3 — Traffic signal ([NCERT] Example 6.3)

```python
signal = input("Enter the colour: ")
if signal == "red" or signal == "RED":
    print("STOP")
elif signal == "orange" or signal == "ORANGE":
    print("Be Slow")
elif signal == "green" or signal == "GREEN":
    print("Go!")
```

Note there is no `else`, so typing `blue` prints nothing. Note also that `signal` is *not* passed through `int()` — it is meant to stay a string.

#### PI-7 — Grade from percentage ([CSP-XI] Practical Implementation-7)

```python
# A program to accept percentage of a student and display grade
perc = float(input("enter percentage of a student : "))
if perc > 85:
    print('A')
elif perc > 70 and perc <= 85:
    print('B')
elif perc > 60 and perc <= 70:
    print('C')
elif perc > 45 and perc <= 60:
    print('D')
else:
    print('E')
```

Output (for input `78`):

```text
enter percentage of a student : 78
B
```

- **Check:** `perc > 85` is `False`; `78 > 70 and 78 <= 85` is `True`, so `'B'` prints and conditions 3 and 4 are never tested.
- **Worth noticing:** the `and perc <= 85` half is *redundant*. Control only reaches the second test when the first was `False`, i.e. when `perc <= 85` already. Writing `elif perc > 70:` gives identical behaviour. Keeping the upper bound is a readability choice, not a correctness one — but be able to say why.

#### PI-8 — Income tax slabs ([CSP-XI] Practical Implementation-8) ⭐⭐

```python
# program to accept salary and calculate tax amount
salary = int(input("Enter salary of a person : "))
if salary <= 50000:
    tax = 0.05*salary
elif salary <= 60000:
    tax = 0.07*salary
elif salary <= 70000:
    tax = 0.08*salary
else:
    tax = 0.10*salary
print("Salary : ", salary, " Tax : ", tax)
```

Output (for input `65000`):

```text
Enter salary of a person : 65000
Salary :  65000  Tax :  5200.0
```

- **Check:** `65000 <= 50000` is `False`, `65000 <= 60000` is `False`, `65000 <= 70000` is `True`, so `tax = 0.08 × 65000 = 5200.0`.

> [!note] Key idea
> Each `elif` carries only an **upper** bound — no `and salary > 60000` is needed. Control only reaches the third test when the first two were `False`, so the lower bound is already guaranteed. This is the cleanest way to write slab-based conditions, and it is why **ladder order matters**: write the slabs in increasing order or the wrong rate wins.

### 6.2.4 Nested `if` ⭐⭐

An `if..else` may itself sit *inside* another `if`, `elif` or `else` block. This is **nesting**, and Python places no limit on the depth.

#### Program 6-3 — Four-function calculator ([NCERT] Program 6-3)

- **Given:** two numbers and an operator (`+`, `-`, `*`, `/`).
- **Find:** the result — but with the difference always positive, and division by zero refused.
- **Approach:** an `if..elif..else` ladder over the operator, with a nested `if..else` inside the `"-"` and `"/"` branches.

```python
#Program to create a four function calculator
result = 0
val1 = float(input("Enter value 1: "))
val2 = float(input("Enter value 2: "))
op = input("Enter any one of the operator (+,-,*,/): ")
if op == "+":
    result = val1 + val2
elif op == "-":
    if val1 > val2:
        result = val1 - val2
    else:
        result = val2 - val1
elif op == "*":
    result = val1 * val2
elif op == "/":
    if val2 == 0:
        print("Error! Division by zero is not allowed. Program terminated")
    else:
        result = val1/val2
else:
    print("Wrong input,program terminated")
print("The result is ",result)
```

Output (for inputs `84`, `4`, `/`):

```text
Enter value 1: 84
Enter value 2: 4
Enter any one of the operator (+,-,*,/): /
The result is  21.0
```

- **Check:** `84.0 / 4.0` is `21.0` — a float, because `val1` and `val2` were read with `float()` and `/` is true division in Python 3. It prints `21.0`, not `21`.
- **Check the failure paths too:** with `val2 = 0` and `op = "/"`, the error message prints *and then* `The result is  0` prints as well, because the final `print` is outside the ladder and `result` was never reassigned. The word "terminated" in the message is misleading — the program does not actually stop. Fixing that needs `exit()` or a restructure.

> [!warning] The spec and the code do not agree (New)
> [NCERT] states four requirements for Program 6-3 before giving the code:
>
> 1. Accept two numbers from the user.
> 2. Ask the user to input one of the operators `+`, `-`, `*`, `/`; display an error message for anything else.
> 3. Display only the **positive** difference for the operator `-`.
> 4. Display the message **"Please enter a value other than 0"** if the second number is `0` and `/` is entered.
>
> The code satisfies (1)–(3) but not (4) — it prints `"Error! Division by zero is not allowed. Program terminated"` instead. It also does not actually terminate. Reading a spec against an implementation is a marks-earning skill in its own right; this is a ready-made example.

> [!note] Key idea
> Only indentation tells you which `if` an `else` belongs to. An `else` pairs with the nearest `if` at the *same* indentation level.

#### PI-10 — Zero, positive or negative, by nesting ([CSP-XI] Practical Implementation-10)

```python
num = float(input("Enter a number: "))
if num >= 0:
    if num == 0:
        print("Zero")
    else:
        print("Positive number")
else:
    print("Negative number")
```

Output (for input `5`):

```text
Enter a number: 5
Positive number
```

Compare this with [NCERT] Example 6.2, which reaches the same three outcomes with a flat `if..elif..else`. Both are correct; the flat ladder is easier to read, which is why [CSP-XI] itself advises avoiding deep nesting "as far as possible".

#### Nested `if..elif..else` ([CSP-XI] 6.5.4)

The nested form lets an entire ladder sit inside one branch of an outer decision.

```python
var = 100
if var < 200:
    print("value is less than 200")
    if var == 150:
        print("Which is 150")
    elif var == 100:
        print("Which is 100")
    elif var == 50:
        print("Which is 50")
    elif var < 50:
        print("value is less than 50")
else:
    print("Could not find true countenance")
print("Good bye!")
```

Output:

```text
value is less than 200
Which is 100
Good bye!
```

- **Check:** two lines come from *inside* the outer `if` (the outer condition was `True`), and `"Good bye!"` from outside it, because that `print` is un-indented. `"Could not find true countenance"` is unreachable for any `var` below 200.

#### PI-9 — Sort three numbers into ascending order ([CSP-XI] Practical Implementation-9) ⭐⭐

```python
#Program to sort three inputted numbers and arrange them in ascending order.
x = int(input("Enter first number: "))
y = int(input("Enter second number: "))
z = int(input("Enter third number: "))
if y >= x <= z:
    if y <= z:
        min, mid, max = x, y, z
    else:
        min, mid, max = x, z, y
elif x >= y <= z:
    if x <= z:
        min, mid, max = y, x, z
    else:
        min, mid, max = y, z, x
elif x >= z <= y:
    if x <= y:
        min, mid, max = z, x, y
    else:
        min, mid, max = z, y, x
print("Numbers in ascending order = ", min, mid, max)
```

Output (for inputs `67`, `5`, `14`):

```text
Enter first number: 67
Enter second number: 5
Enter third number: 14
Numbers in ascending order =  5 14 67
```

- **Concept — chained comparison:** `y >= x <= z` is **not** a typo. Python allows chaining, and it means exactly `y >= x and x <= z` — in plain words, "`x` is the smallest". The outer ladder picks the smallest of the three; each nested `if` then orders the remaining two. Most other languages would evaluate `y >= x` to a boolean and then compare *that* to `z`, which is why the chain is worth knowing as a Python-specific feature.
- **Two flaws worth naming:** `min` and `max` are **built-in function names**; assigning to them shadows the built-ins for the rest of the program. Rename them `smallest`/`largest`. And the ladder has no final `else`, so if some case slipped through, `print` would fail with `NameError` — as written the three conditions do cover every ordering, but relying on that silently is fragile.

> [!example] Practice 6-A — the leap-year program has a hole (New)
> [CSP-XI] Solved Question 13 gives this code and asks for the output when the user enters 2000 and 1971:
>
> ```python
> year = int(input('Enter 4-digit year:'))
> if year % 100 == 0:
>     if year % 400 == 0:
>         print('Leap year')
> elif year % 4 == 0:
>     print('Leap year')
> else:
>     print("Not a leap year")
> ```
>
> The book's answers — `Leap year` for 2000 and `Not a leap year` for 1971 — are both correct. But trace `1900`: `1900 % 100 == 0` is `True`, so control enters the outer `if`; `1900 % 400 == 0` is `False`; the inner `if` has **no `else`**, and the outer `elif`/`else` are unreachable once the outer `if` was taken. The program prints **nothing at all**. That is a logical error, not a syntax one — it runs happily and silently.
>
> Corrected version:
>
> ```python
> year = int(input('Enter 4-digit year: '))
> if year % 400 == 0:
>     print('Leap year')
> elif year % 100 == 0:
>     print('Not a leap year')
> elif year % 4 == 0:
>     print('Leap year')
> else:
>     print('Not a leap year')
> ```
>
> Output for `1900`:
>
> ```text
> Enter 4-digit year: 1900
> Not a leap year
> ```
>
> Ordering the divisibility tests 400 → 100 → 4 makes every branch reachable and removes the nesting entirely.

---

## 6.3 Indentation ⭐⭐

Most languages wrap a block in curly brackets. **Python uses indentation instead** — for blocks *and* for nested blocks.

> [!note] Key idea
> **Indentation** is the leading whitespace (spaces or tabs) at the start of a statement. Statements at the same level of indentation form one **block**. The interpreter checks this strictly and raises `IndentationError` if it is inconsistent.

Conventions worth fixing now:

- Use **4 spaces** per level (NCERT and [CSP-XI] both describe one tab per level; 4 spaces is the PEP 8 standard and is what most editors insert for a tab).
- **Never mix tabs and spaces** in the same file. They look identical on screen and Python treats them as different — this produces `TabError` or, worse, a block that silently contains the wrong statements.
- The first *un-indented* line marks the end of a block.

### Program 6-4 — Larger of two numbers, with two-statement blocks ([NCERT] Program 6-4)

```python
#Program 6-4
#Program to find larger of the two numbers
num1 = 5
num2 = 6
if num1 > num2:                          #Block1
    print("first number is larger")
    print("Bye")
else:                                    #Block2
    print("second number is larger")
    print("Bye Bye")
```

Output:

```text
second number is larger
Bye Bye
```

- **Check:** `5 > 6` is `False`, so Block1 is skipped entirely and *both* lines of Block2 run. If `print("Bye")` and `print("Bye Bye")` were un-indented, they would sit outside the `if..else` and both would run every time — the output would gain two extra lines. Indentation alone decides this.

### 6.3a How the interpreter reads nesting **(Supp.)**

```python
statement_1                # block 1
if condition_a:            # block 1
    if condition_b:        # block 2
        statement_2        # block 3
    else:                  # block 2
        statement_3        # block 3
statement_4                # block 1
```

- `statement_1`, the outer `if` header, and `statement_4` are all in **block 1**. If `condition_a` is `False`, control jumps straight to `statement_4`.
- The nested `if..else` headers are **block 2**.
- `statement_2` and `statement_3` are **block 3**; exactly one of them runs, and only when `condition_a` was `True`.

---

## 6.4 Repetition ⭐⭐⭐

Paying an electricity bill every month; a butterfly's egg → caterpillar → pupa → butterfly → egg cycle — real processes repeat. So does code.

Printing the first five natural numbers with five `print()` calls works:

```python
#Program 6-5
#Print first five natural numbers
print(1)
print(2)
print(3)
print(4)
print(5)
```

Printing the first 100,000 would need 100,000 lines. The alternative is a loop, whose logic is:

1. Take a variable, say `count`, and set its value to 1.
2. Print the value of `count`.
3. Increment the variable (`count += 1`).
4. Repeat steps 2 and 3 as long as `count <= 100000`.

> [!note] Key idea
> A loop's condition is checked against a **control variable**. The programmer is responsible for making that condition *eventually* become `False` — that is the **exit condition**. Without one, the loop never ends.

Python has two looping constructs, and the choice between them is usually decided before you write a line:

| | `for` | `while` |
| --- | --- | --- |
| Called | **definite** loop | **indefinite** loop |
| Repeats | over the items of a sequence or range | as long as a condition stays `True` |
| Trip count | known in advance | not known in advance |
| Control variable | updated automatically by the loop | **you** must initialise and update it |
| Natural fit | "do this 10 times", "for each character" | "keep going until the user enters a negative number" |

### 6.4.1 The `for` loop

```text
for <control-variable> in <sequence / items in range>:
    <statements inside body of the loop>
```

The `for` loop runs once for each item in the sequence. With every iteration the control variable takes the next value; when the items are exhausted, the body stops running and control passes to the first statement after the loop. The sequence may be a string, a list, a tuple, or a `range`.

```mermaid
flowchart TD
    A([Start]) --> B["Take next item from the sequence"]
    B --> C{"Any item left?"}
    C -->|True| D["Body of for loop"]
    D --> B
    C -->|False| E["Statement following the loop"]
    E --> F([Stop])
```

*Reading it:* there is no separate "update" step to write — advancing to the next item *is* the loop mechanism. That is exactly what a `while` loop makes you do by hand.

#### Program 6-6 — Characters of a string ([NCERT] Program 6-6)

```python
#Print the characters in word PYTHON using for loop
for letter in 'PYTHON':
    print(letter)
```

Output:

```text
P
Y
T
H
O
N
```

#### Program 6-7 — Items of a list ([NCERT] Program 6-7)

```python
#Print the given sequence of numbers using for loop
count = [10,20,30,40,50]
for num in count:
    print(num)
```

Output:

```text
10
20
30
40
50
```

#### Program 6-8 — Even numbers in a sequence ([NCERT] Program 6-8)

```python
#Print even numbers in the given sequence
numbers = [1,2,3,4,5,6,7,8,9,10]
for num in numbers:
    if (num % 2) == 0:
        print(num,'is an even Number')
```

Output:

```text
2 is an even Number
4 is an even Number
6 is an even Number
8 is an even Number
10 is an even Number
```

- **Check:** the `if` is *inside* the loop body, so it is evaluated once per item — ten tests, five prints. Note the two levels of indentation: the loop body is one level in, the `if` body is two.

#### PI-11 — Iterating over a string of digits ([CSP-XI] Practical Implementation-11) ⭐⭐

```python
# Python program to illustrate for loop statement
for i in '123':
    print("Welcome", i, "times")        # body of for loop
```

Output:

```text
Welcome 1 times
Welcome 2 times
Welcome 3 times
```

> [!warning] Trap
> The loop variable `i` here is the **character** `'1'`, not the integer `1`. It only looks numeric. `i + 1` would raise `TypeError: can only concatenate str (not "int") to str`, and `i * 2` would give `'11'`, not `2`. The loop runs 3 times because the *string* has three characters — `for i in range(1, 4)` would give the same three lines with genuine integers.

### 6.4.1a The `range()` function — [NCERT] labels this 6.4.1(B) ⭐⭐⭐

`range()` is a built-in function that produces a sequence of integers.

```text
range([start], stop[, step])
```

> [!warning] The three rules that cost the most marks
> 1. `stop` is **excluded**. `range(1, 11)` gives 1 to 10, not 1 to 11.
> 2. Omitted `start` defaults to **0**; omitted `step` defaults to **1**.
> 3. All three arguments must be **integers**, and `step` may be positive or negative but **never zero**.

| Call | Values generated |
| ---- | ---------------- |
| `range(10)` | `0, 1, 2, 3, 4, 5, 6, 7, 8, 9` |
| `range(1, 11)` | `1, 2, 3, 4, 5, 6, 7, 8, 9, 10` |
| `range(2, 10)` | `2, 3, 4, 5, 6, 7, 8, 9` |
| `range(0, 30, 5)` | `0, 5, 10, 15, 20, 25` |
| `range(0, -9, -1)` | `0, -1, -2, -3, -4, -5, -6, -7, -8` |

In Python 3, `range()` returns a lazy range object, not a list — which is why the examples above are written `list(range(10))` when you want to *see* the values in the shell:

```python
>>> list(range(10))
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
>>> list(range(0, 30, 5))
[0, 5, 10, 15, 20, 25]
```

> [!tip] Counting trick
> the number of values in `range(a, b, s)` with `s > 0` is `(b - a + s - 1) // s`. For `range(1, 51, 3)` that is `(51 - 1 + 2) // 3 = 17` values, ending at 49 — *not* 16. ([CSP-XI] Solved Question 16 answers "16 times"; the correct count is **17**, verified by `len(list(range(1,51,3)))`.)

#### Program 6-9 — Multiples of 10 ([NCERT] Program 6-9)

```python
#Print multiples of 10 for numbers in a given range
for num in range(5):
    if num > 0:
        print(num * 10)
```

Output:

```text
10
20
30
40
```

- **Check:** `range(5)` yields `0,1,2,3,4`. The `if num > 0` skips the `0`, so four lines print, not five.

#### PI-13 — Table of a number ([CSP-XI] Practical Implementation-13)

```python
# Python program to print table of a number, say 3
num = 3
for i in range(1, 11):
    print(num, ' x ', i, ' = ', num*i)
```

Output:

```text
3  x  1  =  3
3  x  2  =  6
3  x  3  =  9
3  x  4  =  12
3  x  5  =  15
3  x  6  =  18
3  x  7  =  21
3  x  8  =  24
3  x  9  =  27
3  x  10  =  30
```

- **Check:** `range(1, 11)` is the standard "1 through 10" idiom. The doubled spaces are real: `print()` inserts its default separator (`sep=' '`, a single space) *between* arguments, and the string arguments already contain spaces of their own.

#### PI-14 — Factorial, the `range(num)` variant ([CSP-XI] Practical Implementation-14)

```python
# Python program to accept a number from a user and print factorial of that number
num = int(input("Enter non negative no to take factorial of : "))
fact = 1
for i in range(num):
    fact = fact * (i+1)
print('Factorial of ', num, '= ', fact)
```

Output (for input `8`):

```text
Enter non negative no to take factorial of : 8
Factorial of  8 =  40320
```

- **Compare with [NCERT] Program 6-19**, which writes `for i in range(1, num + 1): fact = fact * i`. Both multiply the same eight numbers. The `range(num)` form shifts the correction into the body as `i+1`; the `range(1, num+1)` form puts it in the header. **Prefer the header form** — a correction buried in the body is easy to misread, and the loop variable then means what it says.
- **Both share a flaw:** for a negative `num`, `range()` is empty and the program happily prints `Factorial of -5 = 1`. [NCERT] Program 6-19 guards against this with an `if num < 0:` branch; [CSP-XI]'s version does not, despite its own prompt asking for a non-negative number.

#### One `range()` detail, two different answers (New)

```python
for n in range(5):
    print(n*10)
```

Output:

```text
0
10
20
30
40
```

[NCERT] Program 6-9 uses the same `range(5)` but guards the body with `if num > 0:`, so it prints only `10 20 30 40`. Same range, four lines versus five — the difference is entirely the guard, and `range(5)` starting at `0` is what makes the guard necessary at all.

### 6.4.2 The `while` loop

```text
while test_condition:
    body of while
```

The condition is tested **before** any statement of the body runs. If it is `True`, the body runs; then the condition is tested again, and so on. When it becomes `False`, the body is skipped and control passes to the statement after the loop.

```mermaid
flowchart TD
    A([Start]) --> B["Initialisation statement"]
    B --> C{"Test expression"}
    C -->|True| D["Body of while loop"]
    D --> C
    C -->|False| E["Statements following the while loop"]
    E --> F([Stop])
```

*Reading it:* three things must all be present and correct — **initialise** before the loop, **test** at the top, **update** inside the body. Drop any one and the loop either never runs or never stops.

> [!warning] A real error in [CSP-XI]
> The caption under its Fig. 6.5 says "body of loop will be executed **until** test expression evaluates to true." That is backwards. The body executes **while** the test expression is `True`, and the loop ends when it becomes `False`. The same book states it correctly elsewhere ("the loop continues as long as the condition remains true") — trust that version.

> [!note] Key idea
> If the condition is `False` the very first time it is tested, the body of a `while` loop never executes — **not even once**.

> [!note] Key idea **(Supp.)**
> Python treats **any non-zero value as `True`**; `0` and `None` are treated as `False`. So `while 1:` and `while True:` behave identically, and `while count:` ends exactly when `count` reaches `0`. At least one statement must be present in the loop body — `pass` counts.

#### Program 6-10 — First five natural numbers ([NCERT] Program 6-10)

```python
#Print first 5 natural numbers using while loop
count = 1
while count <= 5:
    print(count)
    count += 1
```

Output:

```text
1
2
3
4
5
```

- **Check:** initialisation (`count = 1`), test (`count <= 5`), update (`count += 1`) are all visible. Delete the update line and the condition stays `True` forever — see *Infinite loops* below.

#### Program 6-11 — Factors of a number ([NCERT] Program 6-11)

- **Given:** a whole number from the user.
- **Find:** all of its factors, on one line.
- **Approach:** 1 and the number itself are factors of everything, so they are printed outside the loop; only `2` up to `num/2` need testing, because no number larger than half of `num` (other than `num` itself) can divide it.

```python
#Find the factors of a number using while loop
num = int(input("Enter a number to find its factor: "))
print (1, end=' ')          #1 is a factor of every number
factor = 2
while factor <= num/2 :
    if num % factor == 0:
        print(factor, end=' ')
    factor += 1
print (num, end=' ')        #every number is a factor of itself
```

Output (for input `6`):

```text
Enter a number to find its factor: 6
1 2 3 6 
```

- **Check:** `factor` runs 2, 3 (since `3 <= 3.0`); `6 % 2` and `6 % 3` are both `0`, so both print; at `factor = 4`, `4 <= 3.0` is `False` and the loop ends. `end=' '` replaces the default `end='\n'`, which is what keeps everything on one line.
- **Note:** `factor += 1` sits at the loop-body level, *not* inside the `if`. Indent it one level further and `factor` would only ever increase when a factor was found — an infinite loop for any `num` whose second-smallest factor is not 2.

### 6.4.3 Infinite loops **(Supp.)** ⭐⭐

> [!note] Key idea
> A loop becomes an **infinite loop** when its condition never becomes `False`. It is almost always caused by forgetting to update the control variable inside the body.

```python
#Program to illustrate the concept of infinite loop using while loop construct
var = 1
while var == 1:              # condition resulting in an infinite loop
    num = int(input("Enter a number: "))
    print("You entered : ", num)
print("Good bye")
```

`var` is assigned `1` before the loop and never touched again, so `var == 1` is permanently `True` and `print("Good bye")` is unreachable. **Press `Ctrl + C` to interrupt a runaway program.**

Two more ways to build one by accident:

```python
a = 5
while a > 0:
    print(a)          # 'a' is never decreased -> runs forever
```

```python
i = 1
while i <= 10:
    print(i)
i += 1                # update is OUTSIDE the loop -> runs forever
```

An infinite loop is not always a mistake, though — `while True:` with a `break` inside is a standard, deliberate pattern ([NCERT] Program 6-13, §6.5.1).

### 6.4.4 The loop `else` clause **(Supp.)** ⭐⭐

Python allows an `else` block attached to a **loop**, which does not exist in most other languages and is not covered by [NCERT].

```text
for <control-variable> in <sequence>:
    <statements>
else:                       # optional
    <statements>

while <test_expression>:
    <body of while>
else:                       # optional
    <body of else>
```

> [!note] Key idea
> A loop's `else` runs when the loop finishes **normally** — the `for` exhausted its sequence, or the `while` condition became `False`. It is **skipped entirely if the loop was left by `break`.** Read it as "no-break", not as "otherwise".

```python
# Python program to demonstrate 'for' loop with else
for ch in 'GOA':
    print(ch)
else:
    print('Coming out of the loop')
```

Output:

```text
G
O
A
Coming out of the loop
```

```python
# Python program to illustrate while loop with else statement
x = 0
s = 0
while (x < 10):
    s = s + x
    x = x + 1
else:
    print("The sum of first nine integers is: ", s)
```

Output:

```text
The sum of first nine integers is:  45
```

- **Check:** `x` runs 0 through 9, so `s = 0+1+...+9 = 45`. The double space before `45` is real — the string literal ends in a space and `print()` adds its default `sep=' '` as well.
- **Source note:** the message says "first nine integers" but the loop adds 0 through 9, which is ten values. The total is the same (adding 0 changes nothing), so the answer is right and the wording is loose.

The contrast that makes `else` worth learning:

```python
# Use of break statement inside loop in for..else statement
for val in "string":
    if val == "i":
        break
    print(val)
else:
    print("Bye")
```

Output:

```text
s
t
r
```

`"Bye"` never prints, because `break` left the loop early. Remove the `break` and it would. This is the standard "searched the whole list and found nothing" idiom.

---

## 6.5 Jump statements — `break`, `continue`, `pass` ⭐⭐⭐

Sometimes you want to leave a loop early, or skip the rest of just this one pass. `break` and `continue` are Python's **jump statements** for those two cases.

### 6.5.1 The `break` statement

> [!note] Key idea
> `break` **terminates the loop that contains it** and resumes execution at the first statement after that loop. Any statements after `break` inside the loop body are skipped. In nested loops, `break` exits only the **innermost** loop containing it.

```mermaid
flowchart TD
    A([Start]) --> B{"Loop condition"}
    B -->|False| G["Statement following the loop"]
    B -->|True| C["Loop statements"]
    C --> D{"break encountered?"}
    D -->|True| G
    D -->|False| E["More loop statements"]
    E --> B
    G --> H([Stop])
```

*Reading it:* `break` is the only arrow that leaves the loop body without passing back through the condition test — which is exactly why the loop's `else` clause is skipped when it fires.

#### Program 6-12 — Demonstrating `break` ([NCERT] Program 6-12)

```python
#Program to demonstrate the use of break statement in loop
num = 0
for num in range(10):
    num = num + 1
    if num == 8:
        break
    print('Num has value ' + str(num))
print('Encountered break!! Out of loop')
```

Output:

```text
Num has value 1
Num has value 2
Num has value 3
Num has value 4
Num has value 5
Num has value 6
Num has value 7
Encountered break!! Out of loop
```

- **Check:** `range(10)` would give ten iterations, but on the eighth the reassigned `num` reaches `8` and `break` fires *before* the `print`. Seven lines, then the message outside the loop.
- **Worth noticing:** `num = 0` before the loop is dead code — `for num in range(10)` overwrites `num` immediately. And reassigning the control variable inside the body (`num = num + 1`) does **not** affect which value the loop supplies next; `range` hands over the next value regardless.

#### Program 6-13 — Sum until a negative number ([NCERT] Program 6-13)

- **Given:** the user enters numbers one at a time; a negative number means "stop".
- **Find:** the sum of the positive numbers entered.
- **Approach:** the trip count is unknown, and the stop condition depends on input that does not exist yet — so `while True` plus `break` is the natural shape, not `for`.

```python
#Find the sum of all the positive numbers entered by the user
#till the user enters a negative number.
entry = 0
sum1 = 0
print("Enter numbers to find their sum, negative number ends the loop:")
while True:
    entry = int(input())        #int() typecasts string to integer
    if (entry < 0):
        break
    sum1 += entry
print("Sum =", sum1)
```

Output:

```text
Enter numbers to find their sum, negative number ends the loop:
3
4
5
-1
Sum = 12
```

- **Check:** `3 + 4 + 5 = 12`; the `-1` triggers `break` *before* `sum1 += entry`, so it is not added. Ordering matters here — swap those two lines and the answer becomes 11.
- **Concept:** since `True` can never be `False`, `break` is the *only* exit. That is a deliberate infinite loop, not an accidental one.

#### Program 6-14 — Prime or not ([NCERT] Program 6-14), and a bug in it

```python
#Write a Python program to check if a given number is prime or not.
num = int(input("Enter the number to be checked: "))
flag = 0                          #presume num is a prime number
if num > 1 :
    for i in range(2, int(num / 2)):
        if (num % i == 0):
            flag = 1              #num is a not prime number
            break                 #no need to check any further
    if flag == 1:
        print(num , "is not a prime number")
    else:
        print(num , "is a prime number")
else :
    print("Entered number is <= 1, execute again!")
```

Output (for input `20`):

```text
Enter the number to be checked: 20
20 is not a prime number
```

Output (for input `19`):

```text
Enter the number to be checked: 19
19 is a prime number
```

Output (for input `2`):

```text
Enter the number to check: 2
2 is a prime number
```

Output (for input `1`):

```text
Enter the number to check: 1
Entered number is <= 1, execute again!
```

- **Check `4`:** `int(4 / 2)` is `2`, so the loop is `range(2, 2)` — **empty**. The body never runs, `flag` stays `0`, and the program reports:

```text
Enter the number to be checked: 4
4 is a prime number
```

> [!warning] Gap in [NCERT] Program 6-14 (New)
> The loop stops one short: `range(2, int(num/2))` excludes `int(num/2)` itself. A composite number's smallest factor is at most `num/2`, and it is *strictly* less than `num/2` for every composite **except 4**, whose smallest factor is exactly `4/2 = 2`. So `4` — and only `4` — is misclassified as prime. (Verified by sweeping every `n` from 2 to 59 against a correct primality test; `4` is the sole disagreement.)
>
> Two fixes:
>
> ```python
> for i in range(2, num // 2 + 1):        # include num//2 in the search
> ```
>
> ```python
> for i in range(2, int(num ** 0.5) + 1): # faster: no factor exceeds sqrt(num)
> ```
>
> The second is the better habit: if `num = a * b` with `a <= b`, then `a <= sqrt(num)`, so a factor above the square root can never be the *first* one found.

### 6.5.2 The `continue` statement

> [!note] Key idea
> `continue` **skips the remaining statements in the current iteration** and jumps back to the top of the loop for the next one. The loop does **not** terminate — only this pass is cut short.

```mermaid
flowchart TD
    A([Start]) --> B{"Loop condition"}
    B -->|False| G["Statement following the loop"]
    B -->|True| C["Loop statements"]
    C --> D{"continue encountered?"}
    D -->|True| B
    D -->|False| E["More loop statements"]
    E --> B
    G --> H([Stop])
```

*Reading it:* compare with the `break` chart — the only difference is where the "yes" arrow points. `break` leaves the loop; `continue` returns to the condition.

#### Program 6-15 — Demonstrating `continue` ([NCERT] Program 6-15)

```python
#Prints values from 0 to 6 except 3
num = 0
for num in range(6):
    num = num + 1
    if num == 3:
        continue
    print('Num has value ' + str(num))
print('End of loop')
```

Output:

```text
Num has value 1
Num has value 2
Num has value 4
Num has value 5
Num has value 6
End of loop
```

- **Check:** `3` is missing, but `4`, `5`, `6` still print — proof that the loop survived. Replace `continue` with `break` and everything from `3` onwards disappears.

The same contrast on a string ([CSP-XI] Practical Implementations 20 and 24):

| Code | Output |
| ---- | ------ |
| `for val in "string":` `if val == "i": break` `print(val)` then `print("Over")` | `s t r Over` (one per line) |
| `for val in "string":` `if val == "i": continue` `print(val)` then `print("Over")` | `s t r n g Over` (one per line) |

`break` loses everything from `i` onwards; `continue` loses only the `i`.

### 6.5.3 The `pass` statement **(Supp.)** ⭐

> [!note] Key idea
> `pass` is the **empty statement** — a *null operation*. It does nothing at all. It exists because Python has no empty blocks: wherever a statement is syntactically required but no action is wanted, `pass` fills the slot.

```python
# pass is just a placeholder for any functionality to be added later.
sequence = ['p', 'a', 's', 's']
for val in sequence:
    pass
```

Output:

```text

```

(No output — the loop iterates four times and does nothing each time.)

Typical uses: an `if` branch you want to handle later, a function or class body not yet written, deliberately ignoring a case inside a loop.

> [!warning] Trap
> `pass`, `continue` and a comment are three different things. `pass` does nothing and control moves to the **next statement in the block**. `continue` does nothing *and jumps to the next iteration*, skipping the rest of the block. A comment isn't a statement at all and leaves the block empty — which is a `SyntaxError` (`IndentationError: expected an indented block`).

---

## 6.6 Nested loops ⭐⭐

> [!note] Key idea
> A loop inside another loop is a **nested loop**. For every single iteration of the **outer** loop, the **inner** loop runs to completion. The inner loop terminates first; the outer one continues only after it has finished.

Python places no restriction on how many loops may be nested or how deep. Any loop type may be nested in any other — `for` in `for`, `while` in `for`, `for` in `while`, `while` in `while`.

> [!warning] Trap
> The inner loop must use a **different** control variable from the outer loop. Reusing the same name makes the inner loop overwrite the outer loop's counter, and the outer loop's behaviour becomes unpredictable.

### Program 6-16 — How nesting executes ([NCERT] Program 6-16)

```python
#Demonstrate working of nested for loops
for var1 in range(3):
    print( "Iteration " + str(var1 + 1) + " of outer loop")
    for var2 in range(2):        #nested loop
        print(var2 + 1)
    print("Out of inner loop")
print("Out of outer loop")
```

Output:

```text
Iteration 1 of outer loop
1
2
Out of inner loop
Iteration 2 of outer loop
1
2
Out of inner loop
Iteration 3 of outer loop
1
2
Out of inner loop
Out of outer loop
```

- **Check:** outer runs 3 times, inner runs 2 times per outer pass — **3 × 2 = 6** executions of `print(var2 + 1)`. That product is the total-iterations rule for nested loops.
- **Note:** `"Out of inner loop"` is indented at the outer-loop-body level, so it prints three times; `"Out of outer loop"` is un-indented, so it prints once.

### Program 6-17 — Number pattern ([NCERT] Program 6-17)

- **Given:** a number `n` from the user.
- **Find:** a triangular pattern with `1` on row 1, `1 2` on row 2, and so on to row `n`.
- **Approach:** the outer loop counts rows; the inner loop's *upper bound depends on the outer loop's variable* — that dependency is what makes the triangle a triangle instead of a rectangle.

```python
#Program to print the pattern for a number input by the user
num = int(input("Enter a number to generate its pattern = "))
for i in range(1, num + 1):
    for j in range(1, i + 1):
        print(j, end = " ")
    print()
```

Output (for input `5`):

```text
Enter a number to generate its pattern = 5
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
```

- **Check:** on row `i`, the inner `range(1, i+1)` yields `1..i` — exactly `i` numbers. The bare `print()` at the *outer* body level supplies the line break that `end=" "` suppressed; move it one level in and every number lands on its own line.

### Program 6-18 — Prime numbers from 2 to 50 ([NCERT] Program 6-18)

```python
#Use of nested loops to find the prime numbers between 2 to 50
num = 2
for i in range(2, 50):
    j = 2
    while ( j <= (i/2)):
        if (i % j == 0):    #factor found
            break           #break out of while loop
        j += 1
    if ( j > i/j) :         #no factor found
        print ( i, "is a prime number")
print ("Bye Bye!!")
```

Output:

```text
2 is a prime number
3 is a prime number
5 is a prime number
7 is a prime number
11 is a prime number
13 is a prime number
17 is a prime number
19 is a prime number
23 is a prime number
29 is a prime number
31 is a prime number
37 is a prime number
41 is a prime number
43 is a prime number
47 is a prime number
Bye Bye!!
```

- **Check (executed, not copied):** the `break` leaves only the inner `while`; the outer `for` carries on to the next `i`, which is precisely why a per-number test can live inside a range scan. Trace `i = 9`: `j = 2` (`9 % 2 = 1`, so `j = 3`), `3 <= 4.5` and `9 % 3 == 0` → `break` with `j = 3`; then `3 > 9/3 = 3.0` is `False`, so nothing prints. Trace `i = 5`: the `while` ends normally with `j = 3`, and `3 > 5/3 ≈ 1.67` is `True`, so it prints.
- **Note:** `num = 2` on line 1 is never used — dead code in the printed program.

### Program 6-19 — Factorial ([NCERT] Program 6-19)

```python
#The following program uses a for loop nested inside an if..else
#block to calculate the factorial of a given number
num = int(input("Enter a number: "))
fact = 1
# check if the number is negative, positive or zero
if num < 0:
    print("Sorry, factorial does not exist for negative numbers")
elif num == 0:
    print("The factorial of 0 is 1")
else:
    for i in range(1, num + 1):
        fact = fact * i
    print("factorial of ", num, " is ", fact)
```

Output (for input `5`):

```text
Enter a number: 5
factorial of  5  is  120
```

- **Check:** `fact` accumulates `1×1×2×3×4×5 = 120`. The **accumulator pattern** — initialise outside the loop, update inside it — is the same shape as `sum1` in [NCERT] Program 6-13 (§6.5.1), except the identity value is `1` for a product and `0` for a sum.
- **Note:** [NCERT] prints the output line as `Factorial of  5  is  120` with a capital F, but the code's string is lowercase `"factorial of "`. The traced output above is what the code actually produces.

### PI-18 — Nested `while` ([CSP-XI] Practical Implementation-18)

```python
i = 2
while (i >= 0):
    j = 2
    while (j >= 0):
        print(2, end=" ")
        j = j-1
    print()
    i = i-1
```

Output:

```text
2 2 2 
2 2 2 
2 2 2 
```

- **Check:** outer runs for `i = 2, 1, 0` (three times); inner for `j = 2, 1, 0` (three times each) — nine `2`s in a 3 × 3 block. **`j = 2` must be re-initialised inside the outer loop**; move it above the outer `while` and the inner loop runs only on the first pass, because `j` would already be `-1` afterwards. That re-initialisation is the single most common nested-`while` bug.

---

## 6.7 Quick reference

### 6.7.1 Syntax cheat-sheet

| Construct | Syntax | Runs its body |
| --------- | ------ | ------------- |
| `if` | `if condition:` | once, if the condition is `True` |
| `if..else` | `if condition:` … `else:` | exactly one of the two blocks, always |
| `if..elif..else` | `if` … `elif` … `else:` | the first `True` branch only; `else` if none matched |
| Nested `if` | an `if` inside another block | depth is unlimited; pairing is set by indentation |
| `for` | `for var in sequence:` | once per item in the sequence |
| `while` | `while condition:` | repeatedly while the condition is `True`; possibly zero times |
| loop `else` | `else:` aligned with `for`/`while` | once, only if the loop ended **without** `break` |
| `break` | `break` | exits the innermost enclosing loop |
| `continue` | `continue` | skips to the next iteration of the innermost loop |
| `pass` | `pass` | nothing; a syntactic placeholder |
| `range` | `range([start], stop[, step])` | `start` defaults 0, `step` defaults 1, `stop` excluded |

### 6.7.2 Keywords introduced in this chapter

> [!note] Reserved words
> `if` · `elif` · `else` · `for` · `while` · `in` · `break` · `continue` · `pass` · `True` · `False` · `None`
>
> `range` and `print` are **built-in function names**, not keywords — Python will let you assign to them, but doing so shadows the built-in and is bad practice.
>
> Casing is not negotiable: `True` and `False` are capitalised; `if`, `for`, `while`, `break` are lowercase. `IF` and `Print` are not Python.

### 6.7.3 Flowchart symbols

| Symbol | Meaning |
| ------ | ------- |
| Oval / stadium | Start, Stop |
| Parallelogram | Input, Output |
| Rectangle | Process (a calculation or assignment) |
| Diamond | Decision (the only symbol with two outgoing arrows) |

---

## 6.8 Points to ponder — the traps

The traps that actually cost marks:

1. **`=` is assignment, `==` is comparison.** `if code = 'w':` is a `SyntaxError`, not a typo Python forgives.
2. **The colon is part of the header.** `if x > 5` without `:` is a `SyntaxError`.
3. **`stop` is excluded from `range()`.** "First 10 natural numbers" is `range(1, 11)`, never `range(1, 10)`.
4. **A `while` loop can run zero times.** If the condition starts `False`, the body never executes. A `for` over an empty sequence behaves the same way.
5. **Forgetting the update makes an infinite loop** — and so does putting the update outside the loop body, or inside an `if` that is not always taken.
6. **Loop `else` means "no `break` happened".** It is not "otherwise", and it is not skipped just because the loop body never ran.
7. **`break` and `continue` affect the innermost loop only.** In a nested loop, `break` in the inner loop does not stop the outer one.
8. **Indentation is syntax, not style.** Mixing tabs and spaces produces `TabError`; indenting one line too far silently moves it into the wrong block.
9. **`input()` returns a string.** `if age >= 18` on an unconverted `input()` raises `TypeError` in Python 3. Comparing `"10" > "9"` is a *string* comparison, and it is `False`.
10. **A `for` control variable holds the value it was last given**, not "the highest value of the list". ([CSP-XI]'s Points to Remember says "highest" — true only for an ascending range; after `for i in range(10, 0, -2)` the variable holds `2`, the lowest.)
11. **Know which kind of error you are looking at.** Missing colon or unbalanced bracket → **syntax error**, caught before the program runs. Division by zero or `int('abc')` → **runtime error**, caught mid-execution. A loop that runs one time too few → **logical error**, which runs to completion and quietly gives the wrong answer. Program 6-14's mishandling of `4` is a logical error, which is exactly why no error message appears.

---

## 6.9 Problem-solving strategy

### 6.9.1 Choosing the right loop

```mermaid
flowchart TD
    A{"Do I know how many repetitions before starting?"} -->|Yes| B["for with range"]
    A -->|No| C{"Am I walking through a string, list or tuple?"}
    C -->|Yes| D["for item in sequence"]
    C -->|No| E{"Does the stop condition depend on something computed or entered inside the loop?"}
    E -->|Yes| F["while, or while True plus break"]
    E -->|No| G["while with a counter"]
```

### 6.9.2 Word problem to working program

1. **Identify the inputs** — what does the user supply, and what type must it become? Write the `int()`/`float()` conversion in immediately.
2. **Identify the output** — one value, or one line per iteration?
3. **Decide the structure before the syntax** — is this a decision, a repetition, or both? How many cases does the decision have?
4. **Write the algorithm or pseudocode first** in plain steps:

```text
START
INPUT n
SET fact = 1
FOR i = 1 TO n DO
    SET fact = fact * i
END FOR
DISPLAY fact
STOP
```

5. **Translate to Python**, watching the colon and the indentation.
6. **Trace it by hand once** with a small input before trusting it — build a table of the control variable and the accumulator, one row per iteration. Every bug in this chapter shows up in that table.

### 6.9.3 Tracing a loop on paper

| Iteration | Control variable | Condition | Accumulator | Printed |
| --------- | ---------------- | --------- | ----------- | ------- |
| before | `count = 1` | — | — | — |
| 1 | 1 | `1 <= 5` True | — | `1` |
| 2 | 2 | `2 <= 5` True | — | `2` |
| … | … | … | … | … |
| exit | 6 | `6 <= 5` False | — | — |

Always include the **exit row**. Off-by-one errors live there.

---

## 6.10 Check your understanding

Trace each of these by hand, then verify. Outputs below have all been executed.

**1.** ([NCERT] Exercise 5(i))

```python
a = 110
while a > 100:
    print(a)
    a -= 2
```

<details><summary>Answer</summary>

```text
110
108
106
104
102
```
</details>

**2.** ([NCERT] Exercise 5(iv))

```python
i = 0; sum = 0
while i < 9:
    if i % 4 == 0:
        sum = sum + i
    i = i + 2
print (sum)
```

<details><summary>Answer</summary>

`12` — `i` takes 0, 2, 4, 6, 8; only 0, 4 and 8 are divisible by 4, and `0 + 4 + 8 = 12`.
</details>

**3.** ([NCERT] Exercise 5(v))

```python
for x in range(1,4):
    for y in range(2,5):
        if x * y > 10:
            break
        print (x * y)
```

<details><summary>Answer</summary>

```text
2
3
4
4
6
8
6
9
```

At `x = 3, y = 4`, `12 > 10` fires `break` — which ends the **inner** loop only, and since `x = 3` is the outer loop's last value the program then finishes.
</details>

**4.** ([CSP-XI] Solved Question 11(c))

```python
x = 10
y = 0
while x > y:
    x = x - 4
    y += 4
    print(x, end=" ")
```

<details><summary>Answer</summary>

`6 2 ` — after pass 1, `x = 6, y = 4` (`6 > 4`, continue); after pass 2, `x = 2, y = 8`, and `2 > 8` is `False`.
</details>

**5.** ([CSP-XI] Solved Question 12)

```python
x = 0
z = 1
for i in range(1,3):
    for j in range(1,i):
        z = i+j-1
        if(z%2==0):
            x=x+z
        elif(z%3==0):
            x=x+z-2
print("x =",x)
```

<details><summary>Answer</summary>

`x = 2`. When `i = 1`, the inner `range(1,1)` is empty and the body never runs. When `i = 2`, `j = 1` gives `z = 2`, which is even, so `x = 0 + 2 = 2`.
</details>

**6.** ([NCERT] Exercise 5(vi)) — assuming `print("Good bye!")` is indented at the loop-body level, aligned with `if var == 3:`

```python
var = 7 
while var > 0: 
    print ('Current variable value: ', var)
    var = var - 1
    if var == 3:
        break
    else:
        if var == 6:
            var = var - 1
            continue
    print ("Good bye!")
```

<details><summary>Answer</summary>

```text
Current variable value:  7
Current variable value:  5
Good bye!
Current variable value:  4
```

Pass 1: prints 7, `var` becomes 6, `continue` skips `"Good bye!"` and `var` drops to 5. Pass 2: prints 5, `var` becomes 4, neither special case applies, so `"Good bye!"` prints. Pass 3: prints 4, `var` becomes 3, `break`.

*The indentation of the last line is genuinely ambiguous in the printed book; a different reading changes the answer. This is itself the lesson — in Python, indentation is the answer.*
</details>

**7.** ([CSP-XI] Objective 3(g)) How many times does this execute?

```python
a = 5
while a > 0:
    print(a)
print("Thank You")
```

<details><summary>Answer</summary>

Infinitely. `a` is never changed, so `a > 0` stays `True` and `"Thank You"` is unreachable. Interrupt with `Ctrl + C`.
</details>

**8.** How many values does `range(1, 51, 3)` produce, and what is the last one?

<details><summary>Answer</summary>

**17** values, ending at **49**: `(51 - 1 + 2) // 3 = 17`. ([CSP-XI] Solved Question 16 answers 16; that is an error in the book.)
</details>

---

# Part B — Exercises, program library and case studies (§6.11–§6.20)

Everything the two chapters set as practice, worked through. Every output shown below was **executed**, not copied from the books — which is how the errors listed at the end of this note were found.

## 6.11 Conceptual questions with answers ⭐⭐⭐

**Q1. Difference between `else` and `elif`** ([NCERT] Ex. 1, [CSP-XI] Unsolved 11)

| | `else` | `elif` |
| --- | --- | --- |
| Takes a condition? | No | Yes |
| How many per `if`? | At most one | Any number |
| When does it run? | When every preceding condition was `False` | When all earlier conditions were `False` **and** its own is `True` |
| Position | Always last | Between the `if` and the `else` |

**Q2. Purpose of `range()`** ([NCERT] Ex. 2) — it generates a sequence of integers from `start` up to but **excluding** `stop`, in steps of `step`. Example: `list(range(0, 30, 5))` gives `[0, 5, 10, 15, 20, 25]`. It is what turns a `for` loop into a counted loop.

**Q3. `break` versus `continue`** ([NCERT] Ex. 3, [CSP-XI] Solved 5) — both alter the flow of a loop. `break` **terminates** the loop and resumes at the statement after it; `continue` **skips only the rest of the current iteration** and goes back to the condition. See §6.5.2 for the same code run with each.

**Q4. What is an infinite loop?** ([NCERT] Ex. 4) — a loop whose condition never becomes `False`. Example:

```python
a = 5
while a > 0:
    print(a)
```

`a` is never decreased, so the loop never ends. Interrupt with `Ctrl + C`.

**Q5. What are compound statements?** ([CSP-XI] Unsolved 1) — statements made of a header ending in a colon plus an indented body, executed as one unit: `if`, `while`, `for`, `def`.

**Q6. What are jump statements?** ([CSP-XI] Unsolved 2) — `break` and `continue`, which transfer control out of the normal loop flow.

**Q7. What is a nested loop?** ([CSP-XI] Unsolved 3) — a loop inside another loop; the inner loop completes fully for each single iteration of the outer one. See Program 6-16.

**Q8. Why must the loop control variable be updated inside a `while`?** ([CSP-XI] Unsolved 4) — because the condition is tested against it. Without an update the condition never becomes `False` and the loop never terminates.

**Q9. Significance of an empty statement** ([CSP-XI] Solved 3) — Python allows no empty blocks, so `pass` fills a block that is syntactically required but should do nothing.

**Q10. Purpose of `else` in a loop** ([CSP-XI] Solved 6) — it runs when the loop finishes normally. The book words this as "if the items in the sequence do not match or when loop gets over", which is loose; state it as: **the loop `else` runs if and only if the loop was not exited by `break`.**

## 6.12 More output tracing ⭐⭐⭐

**[NCERT] Exercise 5(ii)**

```python
for i in range(20,30,2):
    print(i)
```

```text
20
22
24
26
28
```

**[NCERT] Exercise 5(iii)**

```python
country = 'INDIA'
for i in country:
    print (i)
```

```text
I
N
D
I
A
```

Five lines, and the repeated `I` is printed twice — a `for` over a string visits every character, duplicates included.

**[CSP-XI] Solved 11(a)** — operator precedence

```python
x = 3
if x > 2 or x < 5 and x == 6:
    print("ok")
else:
    print("no output")
```

Output: `ok`. **`and` binds tighter than `or`**, so this reads `x > 2 or (x < 5 and x == 6)` — that is `True or (True and False)` — which is `True`. Written as `(x > 2 or x < 5) and x == 6` it would print `no output` instead. Parenthesise when in doubt.

**[CSP-XI] Solved 11(b)** — `x, y = 2, 4`; `if (x+y==10)` → `6 == 10` is `False`, so output is `False` (the *string*, from the `else` branch — not the boolean).

**[CSP-XI] Solved 11(e)**

```python
for x in range(2):
    for y in range(2):
        print(x,y,x+y)
```

```text
0 0 0
0 1 1
1 0 1
1 1 2
```

Four lines — 2 × 2, the nested-loop product rule.

**[CSP-XI] Solved 11(h)** — `for z in range(-100,100,100): print(z,end=' ')` gives `-100 0 `. Only two values: `100` is the excluded `stop`. Compare with 11(g)'s `range(-100,200,100)`, which does include `100`.

## 6.13 Converting between `while` and `for` ⭐⭐

A counted `while` and a `for` over a `range` are interchangeable. The mapping is mechanical:

| `while` part | `for` part |
| --- | --- |
| initialisation before the loop | `start` |
| the condition | `stop` (adjusted, because `stop` is excluded) |
| the update inside the body | `step` |

**[CSP-XI] Solved 8 — `while` to `for`**

```python
x = 5
while (x<10):
    print(x+10)
    x+=2
```

becomes

```python
for x in range(5,10,2):
    print(x+10)
```

Both print:

```text
15
17
19
```

**[CSP-XI] Solved 9 — `for` to `while`**

```python
for k in range(10,20,5):
    print(k)
```

becomes

```python
k = 10
while(k<20):
    print(k)
    k+=5
```

Both print `10` then `15`.

**[CSP-XI] Solved 38** — the same conversion with a body that branches:

```python
for a in range(3,100,3):
    if a%2==0:
        print(a+2,end=",")
    else:
        print(a*2,sep="$")
```

- **Check:** identical output to the original `while` version, starting `6`, `8,18`, `14,30`, … **Note the trap in the original:** `sep="$"` does nothing here. `sep` separates *multiple arguments* to one `print()`; with a single argument there is nothing to separate. The `$` never appears in the output.

## 6.14 Find the error ⭐⭐⭐

These are the highest-value debugging exercises in either book — and in three cases **the book's own printed answer is still wrong**, which makes them better practice, not worse.

**[CSP-XI] Solved 10(a)** — as printed:

```text
x=int("Enter value for x:")
for in range(0,11):
    if x=y
        print x+y
    else:
        Print x-y
```

Five separate errors: `input()` is missing inside `int()`; the `for` has no loop variable; `x=y` uses assignment instead of `==` and has no colon; `print x+y` is Python 2 syntax; `Print` has the wrong case. Corrected:

```python
x = int(input("Enter value for x: "))
for y in range(0,11):
    if x == y:
        print(x+y)
    else:
        print(x-y)
```

**[CSP-XI] Solved 10(b)** — the book's *corrected answer* reads:

```text
MaxSpeed=50
Alter='N'
MySpeed=int(input())
if MySpeed >MaxSpeed:
    Alter='Y':
print(Alter)
```

> [!warning] The printed answer still fails (New)
> `Alter='Y':` carries a stray colon left over from the question. Running it gives `SyntaxError: invalid syntax`. A colon ends a compound-statement *header*; an assignment is a simple statement and takes none.

Actually corrected:

```python
MaxSpeed = 50
Alter = 'N'
MySpeed = int(input())
if MySpeed > MaxSpeed:
    Alter = 'Y'
print(Alter)
```

Output (for input `70`):

```text
70
Y
```

**[CSP-XI] Solved 10(c)** — the book's corrected answer:

```python
A = int(input("enter a value"))
while A != 0:
    count = count + 1
    if count < A:
        print(count)
    else:
        print(count + A)
    A = A + 1
```

> [!warning] Two bugs survive the correction (New)
> Running it with input `3` gives `NameError: name 'count' is not defined` — `count` is used on the right-hand side of its own first assignment and was never initialised. And the update `A = A + 1` moves `A` *away* from `0` for any positive input, so even with `count` fixed the loop never terminates. Working version:
>
> ```python
> A = int(input("enter a value"))
> count = 0
> while A != 0:
>     count = count + 1
>     if count < A:
>         print(count)
>     else:
>         print(count + A)
>     A = A - 1
> ```

**[CSP-XI] Solved 39 — complete the code to reverse a number.** The book's answers for the four blanks are `n!=0`, `x=x%10`, `rev=rev*10+x`, `n=n//10`.

> [!warning] The second blank is wrong (New)
> `x=x%10` uses `x` before it has any value — `NameError: name 'x' is not defined`. It must be `x = n % 10`: take the last digit **of `n`**.

```python
n = int(input("Enter the number:"))
rev = 0
while n != 0:
    x = n % 10
    rev = rev * 10 + x
    n = n // 10
print("Reverse number=", rev)
```

Output (for input `1234`):

```text
Enter the number:1234
Reverse number= 4321
```

**[CSP-XI] Solved 40 — make the loop print multiples of 5.** `for a in range(5,100):` becomes `for a in range(5,100,5):` — the fix is the missing `step`, not the bounds.

**[CSP-XI] Unsolved 6** — as printed:

```text
code=input("Enter season code:")
if code=w:
    print "winter season"
    elif code==r:
    PRINT "rainy season"
else:
    Print "summer season"
```

Errors: `code=w` should be `code == 'w'` (assignment instead of comparison, and `w` is an undefined name rather than a string literal); `print "…"` is Python 2 — Python 3 needs parentheses; the `elif` is indented inside the `if` body instead of aligned with it; `PRINT` and `Print` have the wrong case. Corrected:

```python
code = input("Enter season code:")
if code == 'w':
    print("winter season")
elif code == 'r':
    print("rainy season")
else:
    print("summer season")
```

## 6.15 Writing logical expressions ⭐⭐

**[CSP-XI] Solved 7**

| In words | Expression |
| --- | --- |
| Either A is greater than B or A is less than C | `A > B or A < C` |
| Name is Aman and age is between 18 and 35 | `name == "Aman" and 18 <= age <= 35` |
| Place is either 'Delhi' or 'Goa' but not 'Jaipur' | `(place == 'Delhi' or place == 'Goa') and place != 'Jaipur'` |

The third one's final clause is **redundant** — a value that already equals `'Delhi'` or `'Goa'` cannot equal `'Jaipur'`. The book includes it because the question does; say so rather than pretending it adds anything.

**[CSP-XI] Unsolved 5**

| In words | Expression |
| --- | --- |
| Num is between 0 and 5 but not equal to 2 | `0 < num < 5 and num != 2` |
| Answer is either 'N' or 'n' | `answer in ('N', 'n')` |
| Age is at least 18 and gender is male | `age >= 18 and gender == 'M'` |
| City is either 'Kolkata' or 'Mumbai' | `city in ('Kolkata', 'Mumbai')` |

> [!warning] Part (i) is impossible as printed (New)
> "Mark is greater than or equal to **100** but less than **70**" — `mark >= 100 and mark < 70` can never be `True` for any value. It is presumably a misprint for `>= 60`. Writing the expression exactly as asked and then pointing out that it is unsatisfiable is the right answer; silently "fixing" the numbers is not.

## 6.16 Objective questions with answers ⭐⭐

### 6.16.1 Fill in the blanks ([CSP-XI])

| | Answer |
| --- | --- |
| (a) Statements in Python are executed ______ while working with a sequence construct. | sequentially (one after another) |
| (b) ______ are diagrams that show the step-by-step solution to a given problem. | Flow charts |
| (c) Two types of looping statements are ______ and ______. | `for`, `while` |
| (d) ______ loop is best when the number of iterations is known. | `for` |
| (e) ______ statement terminates the loop. | `break` |
| (f) A loop that never ends is called an ______ loop. | infinite |
| (g) The ______ construct means repetition of a set of statements depending upon a condition test. | looping / iteration |
| (h) In a nested loop the ______ loop must be terminated before the outer loop. | inner |
| (i) ______ statement abandons the current iteration of the loop. | `continue` |
| (j) A ______ line begins with a keyword and ends with a colon. | header |

### 6.16.2 True or false ([CSP-XI])

| Statement | Answer |
| --- | --- |
| (a) A flow chart is not a graphical representation of steps. | **False** — that is exactly what it is. |
| (b) `if`, `elif`, `else` are not block or compound statements. | **False** — all three are compound statements. |
| (c) Every compound statement has a header and an indented body. | **True** |
| (d) A block is a group of consecutive statements at the same indentation level. | **True** |
| (e) Python offers `pass` as an empty statement. | **True** |
| (f) `Ctrl + C` cancels a running endless loop. | **True** |
| (g) Indentation is not necessary when working with blocks. | **False** — it is syntax. |
| (h) `else if` can be used in Python. | **False** — Python spells it `elif`. (An `else:` containing a nested `if` is a different thing and is legal.) |
| (i) `continue` skips the rest of the loop and causes the next iteration to take place. | **True** |
| (j) The `else` block for a loop executes only on normal termination of the loop. | **True** |
| (k) Repeated execution of a set of statements is called iteration. | **True** |

### 6.16.3 Multiple choice ([CSP-XI])

| Question | Answer |
| --- | --- |
| (a) Graphical representation of an algorithm | **Flow chart** |
| (b) Not a decision-making statement | **`for` statement** — it is a looping statement |
| (c) Symbol used to end an `if` statement header | **Colon `:`** |
| (d) Which is a valid keyword: `IF`, `If`, `if` | **`if`** — Python is case-sensitive |
| (e) `if True: print(101) else: print(202)` prints | **101** |
| (f) Not a loop statement in Python | **`do-while`** — Python has no `do-while` |
| (g) `a=5` then `while a>0: print(a)` runs | **Infinite** times — `a` is never updated |
| (h) Statement used to iterate over a range or sequence | **`for`** |
| (i) `for x in range(1,20,3): print(x)` | **1, 4, 7, 10, 13, 16, 19** |
| (j) What abandons the current iteration of the loop | **`continue`** |

## 6.17 Program library ⭐⭐⭐

Grouped by the technique each one teaches, because the technique is what transfers — not the problem statement.

### 6.17.1 Technique — digit-by-digit processing with `% 10` and `// 10`

The same three-line engine solves five different questions. Peel off the last digit with `% 10`, then remove it with `// 10`, until the number reaches `0`.

**Sum of digits** ([NCERT] Programming Exercise 7, [CSP-XI] Unsolved 19)

```python
n = int(input("Enter an integer: "))
total = 0
while n > 0:
    total = total + n % 10
    n = n // 10
print("Sum of digits =", total)
```

```text
Enter an integer: 4523
Sum of digits = 14
```

**Reverse and palindrome** ([NCERT] Programming Exercise 8, [CSP-XI] Solved 29)

```python
orig = int(input("Enter a number: "))
num = orig
rev = 0
while num > 0:
    digit = num % 10
    rev = rev * 10 + digit
    num = int(num/10)
if orig == rev:
    print('Palindrome')
else:
    print('Not a Palindrome')
```

```text
Enter a number: 12321
Palindrome
```

- **Note:** `rev = rev * 10 + digit` is the reversal step — shift what you have one place left, then drop the new digit in. `num = int(num/10)` works, but `num = num // 10` is the right tool: integer division avoids creating a float only to truncate it.

**Armstrong number** ([CSP-XI] Solved 28) — a 3-digit number equal to the sum of the cubes of its digits, e.g. \( 3^3 + 7^3 + 1^3 = 371 \).

```python
num = int(input("Enter 3-digit number: "))
f = num
sum = 0
while(f>0):
    a = f%10
    f = int(f/10)
    sum = sum+(a**3)
if (sum==num):
    print(num," is an Armstrong number.")
else:
    print(num," is not an Armstrong number.")
```

```text
Enter 3-digit number: 371
371  is an Armstrong number.
```

- **Note:** `sum` here shadows the built-in `sum()` function. Harmless in this short program, bad practice in general — rename it `total`.

**Decimal to binary** ([CSP-XI] Solved 31)

```python
n = int(input("Enter no:"))
a = 0
m = 0
c = 1
while n > 0:
    a = n%2
    m = m + (a*c)
    c = c*10
    n = int(n/2)
print(m)
```

```text
Enter no:13
1101
```

- **Concept:** the same peel-and-shift engine with base 2 instead of base 10. `c` is a place-value multiplier (1, 10, 100, …) that assembles the bits into a decimal-looking *number*, not a string. It is a neat trick but it breaks for numbers above about 19 digits of output; a string (`bin_str = str(a) + bin_str`) is the safer build.

**Binary to decimal** ([CSP-XI] Unsolved 18) — the reverse, and much shorter as a `for` over the characters:

```python
b = input("Enter a binary number: ")
dec = 0
for bit in b:
    dec = dec * 2 + int(bit)
print("Decimal =", dec)
```

```text
Enter a binary number: 1101
Decimal = 13
```

### 6.17.2 Technique — the accumulator

Initialise **outside** the loop (`0` for a sum, `1` for a product), update **inside** it.

**Sum of even numbers up to n** ([CSP-XI] Solved 21)

```python
s = 0
n = int(input('Enter a limit'))
for i in range(n+1):
    if i%2==0:
        s+=i
print(s)
```

```text
Enter a limit10
30
```

**Sum of 1 + 1/8 + 1/27 + … + 1/n³** ([NCERT] Programming Exercise 6)

```python
n = int(input("Enter n: "))
total = 0
for i in range(1, n + 1):
    total = total + 1/(i ** 3)
print("Sum =", round(total, 4))
```

```text
Enter n: 4
Sum = 1.1777
```

**Sum of 1 + (1+2) + (1+2+3) + … ** ([CSP-XI] Unsolved 23) — an accumulator inside a nested loop:

```python
n = int(input("Enter n: "))
total = 0
for i in range(1, n + 1):
    for j in range(1, i + 1):
        total = total + j
print("Sum =", total)
```

```text
Enter n: 4
Sum = 20
```

### 6.17.3 Technique — running extreme

Seed the extreme with the **first** value read, never with `0` — seeding with `0` breaks the moment all the inputs are negative.

**Largest of 10 numbers** ([CSP-XI] Solved 41)

```python
n = int(input("Enter first number:"))
max = n
for i in range(2,11):
    n = int(input("Enter next number:"))
    if max<n:
        max = n
print("Maximum=",max)
```

For inputs `4 9 2 17 3 8 1 6 11 5`:

```text
Maximum= 17
```

- **Note:** `range(2,11)` runs 9 more times, which with the first `input()` makes exactly 10 numbers. And again, `max` shadows a built-in.

**Minimum and maximum of five numbers** ([NCERT] Programming Exercise 3)

```python
n = int(input("Enter number 1: "))
smallest = largest = n
for i in range(2, 6):
    n = int(input("Enter number " + str(i) + ": "))
    if n < smallest:
        smallest = n
    if n > largest:
        largest = n
print("Minimum =", smallest, " Maximum =", largest)
```

For inputs `12 4 39 7 25`:

```text
Minimum = 4  Maximum = 39
```

- **Note:** two independent `if`s, not `if..else` — a single value can be both the new minimum and the new maximum on the first comparison.

**Largest of three, by nesting** ([CSP-XI] Solved 20)

```python
A = int(input("Enter first number: "))
B = int(input("Enter second number: "))
C = int(input("Enter third number: "))
if (A > B):
    if (A > C):
        print(A," is the largest number")
    else:
        print(C," is the largest number")
else:
    if (B > C):
        print(B," is the largest number")
    else:
        print(C," is the largest number")
```

```text
Enter first number: 12
Enter second number: 45
Enter third number: 30
45  is the largest number
```

### 6.17.4 Technique — generating a sequence

**Fibonacci series** ([CSP-XI] Solved 26)

```python
i = int(input("Enter the limit:"))
x = 0
y = 1
z = 1
print("Fibonacci series")
print(x, y, end=" ")
while(z<=i):
    print(z, end=' ')
    x = y
    y = z
    z = x+y
```

```text
Enter the limit:20
Fibonacci series
0 1 1 2 3 5 8 13 
```

- **Note:** the book writes `print(x,y,end="")` with an empty `end`, which runs the `1` of `0 1` into the next number as `0 11 2 3 …`. Using `end=" "` fixes the display without touching the logic. The rolling assignment `x = y; y = z; z = x + y` is the part to memorise — order matters, and doing it in the wrong order loses a term.

**Sequence −5, 10, −15, 20, −25 …** ([NCERT] Programming Exercise 5)

```python
n = int(input("How many terms? "))
for i in range(1, n + 1):
    if i % 2 == 1:
        print(-5 * i, end=' ')
    else:
        print(5 * i, end=' ')
```

```text
How many terms? 6
-5 10 -15 20 -25 30 
```

**Even numbers between 10 and 20** ([CSP-XI] Unsolved 15)

```python
for i in range(10, 21):
    if i % 2 == 0:
        print(i, end=' ')
```

```text
10 12 14 16 18 20 
```

`range(10, 21, 2)` would do it with no `if` at all — worth saying which you chose and why.

**Prime numbers below 30** ([CSP-XI] Unsolved 20) — a `for..else` doing the work a flag variable usually does:

```python
for n in range(2, 30):
    for d in range(2, int(n ** 0.5) + 1):
        if n % d == 0:
            break
    else:
        print(n, end=' ')
```

```text
2 3 5 7 11 13 17 19 23 29 
```

- **Concept:** the `else` belongs to the **inner `for`**, not to the `if`. It runs only when the inner loop found no divisor, i.e. no `break` fired. This is the single best illustration of why loop `else` exists.

**Perfect number** ([CSP-XI] Solved 30) — a positive integer equal to the sum of its proper divisors; the smallest is 6.

```python
i = 1
s = 0
num = int(input("Enter number:"))
while i<num:
    if num%i == 0:
        s += i
    i = i+1
if s == num:
    print("It is a perfect no.")
else:
    print("It is not a perfect no.")
```

```text
Enter number:28
It is a perfect no.
```

### 6.17.5 Technique — classification ladders

**Vowel or consonant** ([CSP-XI] Solved 24) — the book writes five `elif`s, one per vowel. The `in` operator collapses all of them:

```python
ch = input("Enter a character:")
if ch in ('a','A','e','E','i','I','o','O','u','U'):
    print(ch, "is a vowel")
else:
    print(ch, "is a consonant")
```

```text
Enter a character:E
E is a vowel
```

**Uppercase / lowercase / digit / special** ([CSP-XI] Solved 42)

```python
ch = input("Enter character:")
if ch.isupper():
    print("Uppercase character")
elif ch.islower():
    print("lowercase character")
elif ch.isdigit():
    print("Digit")
else:
    print("Special Character")
```

```text
Enter character:7
Digit
```

**Driving licence eligibility** ([NCERT] Programming Exercise 1)

```python
name = input("Enter your name: ")
age = int(input("Enter your age: "))
if age >= 18:
    print(name, "is eligible to apply for a driving license")
else:
    print(name, "is not eligible to apply for a driving license")
```

```text
Enter your name: Riya
Enter your age: 16
Riya is not eligible to apply for a driving license
```

**Grade from percentage** ([NCERT] Programming Exercise 10)

| Percentage of marks | Grade |
| --- | --- |
| Above 90% | A |
| 80% to 90% | B |
| 70% to 80% | C |
| 60% to 70% | D |
| Below 60% | E |

```python
perc = float(input("Enter percentage: "))
if perc > 90:
    print("A")
elif perc >= 80:
    print("B")
elif perc >= 70:
    print("C")
elif perc >= 60:
    print("D")
else:
    print("E")
```

```text
Enter percentage: 84
B
```

- **Boundary note:** the printed table overlaps at every boundary — 80 is in both "70% to 80%" and "80% to 90%". The ladder above resolves each boundary *upwards* (80 → B). State whichever convention you use; an unstated one is where marks are lost.

**Temperature conversion** ([CSP-XI] Solved 17, [CSP-XI] Unsolved 14)

```python
Celsius = float(input("Enter temperature in Celsius:"))
Fahrenheit = (Celsius * 1.8) + 32
print(Celsius, " Celsius", Fahrenheit, "Fahrenheit")
```

```text
Enter temperature in Celsius:37
37.0  Celsius 98.60000000000001 Fahrenheit
```

> [!warning] Trap
> That trailing `…00000000001` is **not a bug in the program**. Floats are stored in binary and `98.6` has no exact binary representation. Use `round(Fahrenheit, 2)` for display. The same effect will reappear in every float calculation in this course.

The reverse conversion, as pseudocode first:

```text
START
INPUT fahrenheit
SET celsius = (fahrenheit - 32) / 1.8
DISPLAY celsius
STOP
```

```python
f = float(input("Enter temperature in Fahrenheit: "))
c = (f - 32) / 1.8
print(f, "Fahrenheit =", round(c, 2), "Celsius")
```

```text
Enter temperature in Fahrenheit: 98.6
98.6 Fahrenheit = 37.0 Celsius
```

### 6.17.6 Technique — menu-driven programs

([CSP-XI] Solved 23, [CSP-XI] Unsolved 16) The menu must reappear after every choice, and the user decides when to stop — the defining case for an intentional infinite loop.

```python
while True:
    print(" 1. For Area of Circle")
    print(" 2. For Area of Rectangle")
    ch = int(input("Enter your choice (enter 0 to exit): "))
    if ch == 1:
        r = int(input("Enter the radius of the Circle:"))
        a = 3.14*r*r
        print("Area of Circle: ", a)
    elif ch == 2:
        l = int(input("Enter the length:"))
        b = int(input("Enter the breadth:"))
        print("Area of Rectangle: ", l*b)
    elif ch == 0:
        break
    else:
        print("Invalid Option")
```

```text
 1. For Area of Circle
 2. For Area of Rectangle
Enter your choice (enter 0 to exit): 1
Enter the radius of the Circle:7
Area of Circle:  153.86
 1. For Area of Circle
 2. For Area of Rectangle
Enter your choice (enter 0 to exit): 0
```

- **Structure:** the `else` at the bottom catches invalid input and, crucially, does **not** break — so the menu redisplays. Every menu program in the syllabus is this shape.

### 6.17.7 Technique — series with a running term

**Exponential series** ([CSP-XI] Solved 32) — the series \( 1 + \dfrac{x}{1!} + \dfrac{x^2}{2!} + \cdots + \dfrac{x^n}{n!} \).

> [!warning] The book's program computes a different series (New)
> [CSP-XI]'s code is `total = total + ((x**i)/i)` — dividing by \( i \), not by \( i! \). For `x = 2, n = 5` it prints `18.07`, whereas the exponential series sums to about `7.27` (and \( e^2 \approx 7.389 \)). The denominators must be factorials.

```python
x = int(input("Enter the value of x :"))
n = int(input("Enter the limit :"))
total = 1
term = 1
for i in range(1, n + 1):
    term = term * x / i        # turns the previous term into the next one
    total = total + term
print(round(total,3))
```

```text
Enter the value of x :2
Enter the limit :5
7.267
```

- **Concept:** never recompute \( x^i \) and \( i! \) from scratch each pass. Each term is the previous term times \( x/i \) — one multiplication and one division per iteration instead of two inner loops.

**Geometric series** ([CSP-XI] Solved 33) — \( S = a + ar + ar^2 + ar^3 + \cdots \).

> [!warning] The book's program drops the first term (New)
> Its loop is `for i in range(1,n)`, which starts at \( ar^1 \) and omits \( a \) itself, and runs \( n-1 \) times rather than \( n \). For `a = 1, r = 2, n = 4` it prints `14.0`; the series \( 1 + 2 + 4 + 8 \) is `15.0`.

```python
n = int(input("Number of terms:"))
r = float(input("Enter ratio:"))
a = int(input("Enter the first term:"))
total = 0
for i in range(0, n):
    total = total + a*(r**i)
print("Sum of the series: ", total)
```

```text
Number of terms:4
Enter ratio:2
Enter the first term:1
Sum of the series:  15.0
```

- **Sanity check:** the closed form \( S_n = a\dfrac{r^n - 1}{r - 1} = 1 \times \dfrac{16 - 1}{1} = 15 \). Always check a series program against its closed form when one exists.

## 6.18 Pattern printing ⭐⭐

Every pattern is the same skeleton: **outer loop = rows, inner loop(s) = what goes on a row, `print()` at the outer level = the line break.** The only thing that changes is how the inner bounds depend on the outer variable.

**Rectangle of a repeated value** ([CSP-XI] Solved 34) — inner bound does *not* depend on the outer variable, so the shape is a rectangle.

```python
i = 3
while (i>=0):
    j = 3
    while (j>=0):
        print(5,end=' ')
        j = j-1
    print()
    i = i-1
```

```text
5 5 5 5 
5 5 5 5 
5 5 5 5 
5 5 5 5 
```

**Shrinking rows** ([CSP-XI] Solved 35)

```python
i = 3
while i>=0:
    j = 1
    while j<=i:
        print(j,end=' ')
        j = j+1
    print()
    i = i-1
```

```text
1 2 3 
1 2 
1 

```

- **Note:** the target pattern in the book has three rows, but `while i>=0` runs a fourth time with `i = 0`, where the inner loop does nothing and the bare `print()` still emits a **blank line**. Use `while i>0` to match the printed pattern exactly.

**Consecutive letters** ([CSP-XI] Solved 36) — `chr(65)` is `'A'`; the counter is carried across rows rather than reset.

```python
i = 1
num = 65
while i<=5:
    j = 1
    while j<=i:
        print(chr(num), end=" ")
        j = j+1
        num = num+1
    print()
    i = i+1
```

```text
A 
B C 
D E F 
G H I J 
K L M N O 
```

**Repeated odd numbers** ([CSP-XI] Solved 37(ii))

```python
n = 10
for i in range(1,n+1,2):
    for j in range(0,i+1,2):
        print(i,end=' ')
    print("")
```

```text
1 
3 3 
5 5 5 
7 7 7 7 
9 9 9 9 9 
```

**Right-aligned increasing rows** ([CSP-XI] Solved 37(iii))

> [!warning] The book's answer does not produce the pattern it was set (New)
> The target is `5` / `4 5` / `3 4 5` / `2 3 4 5` / `1 2 3 4 5`, right-aligned. The printed answer prints `a` repeatedly instead of `a` through `5`, and gives `11111 / 2222 / 333 / 44 / 5`. A version that matches the target:

```python
for a in range(5, 0, -1):
    print("  " * (a - 1), end="")
    for x in range(a, 6):
        print(x, end=" ")
    print()
```

```text
        5 
      4 5 
    3 4 5 
  2 3 4 5 
1 2 3 4 5 
```

**Star pyramid** ([NCERT] Programming Exercise 9(i))

```python
n = 3
for i in range(1, n + 1):
    print(" " * (n - i) + "* " * (2 * i - 1))
for i in range(n - 1, 0, -1):
    print(" " * (n - i) + "* " * (2 * i - 1))
```

```text
  * 
 * * * 
* * * * * 
 * * * 
  * 
```

- **Concept:** two loops, one ascending and one descending, is the standard way to build any symmetric pattern. Row `i` has `2i − 1` stars and `n − i` leading spaces — derive that relationship *before* writing the loop.

**Mirrored number pyramid** ([NCERT] Programming Exercise 9(ii))

```python
n = 5
for i in range(1, n + 1):
    print("  " * (n - i), end="")
    for j in range(i, 1, -1):
        print(j, end=" ")
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
```

```text
        1 
      2 1 2 
    3 2 1 2 3 
  4 3 2 1 2 3 4 
5 4 3 2 1 2 3 4 5 
```

- **Concept:** two inner loops on one row — one counting down to 2, one counting up from 1. Splitting a row into parts is what makes mirrored patterns tractable.

**Shrinking numbered rows** ([NCERT] Programming Exercise 9(iii))

```python
n = 5
for i in range(n, 0, -1):
    print(" " * (n - i), end="")
    for j in range(1, i + 1):
        print(j, end=" ")
    print()
```

```text
1 2 3 4 5 
 1 2 3 4 
  1 2 3 
   1 2 
    1 
```

**Hollow diamond** ([NCERT] Programming Exercise 9(iv))

```python
n = 3
for i in range(1, n + 1):
    if i == 1:
        print(" " * (n - i) + "*")
    else:
        print(" " * (n - i) + "*" + " " * (2 * i - 3) + "*")
for i in range(n - 1, 0, -1):
    if i == 1:
        print(" " * (n - i) + "*")
    else:
        print(" " * (n - i) + "*" + " " * (2 * i - 3) + "*")
```

```text
  *
 * *
*   *
 * *
  *
```

- **Source note:** the fourth pattern is printed with ambiguous spacing in [NCERT]; a hollow diamond is the reading the row-by-row star counts support. State your reading when you answer it.

**Letter blocks and countdown rows** ([CSP-XI] Unsolved 25 and 26)

```python
num = 65
for i in range(1, 6):
    for j in range(i):
        print(chr(num), end=' ')
    print()
    num += 1
```

```text
A 
B B 
C C C 
D D D D 
E E E E E 
```

```python
for i in range(1, 6):
    for j in range(i, 0, -1):
        print(j, end=' ')
    print()
```

```text
1 
2 1 
3 2 1 
4 3 2 1 
5 4 3 2 1 
```

## 6.19 Case studies ⭐⭐

### 6.19.1 Student Management Information System ([NCERT] Case Study 6.1)

A menu-driven program that accepts marks in five subjects, displays them, computes the total and percentage, and awards a grade.

| Criteria | Grade |
| --- | --- |
| percentage > 85 | A |
| percentage < 85 and percentage >= 75 | B |
| percentage < 75 and percentage >= 50 | C |
| percentage > 30 and percentage <= 50 | D |
| percentage < 30 | Reappear |

> [!warning] The criteria table has two holes (New)
> A percentage of **exactly 85** matches no row: `> 85` is false, and B requires `< 85`. A percentage of **exactly 30** also matches nothing: D requires `> 30` and Reappear requires `< 30`. Tested against all five conditions as printed, both values fall through every branch. Resolve the boundaries explicitly — the version below reads each band as "at least this much".

```python
total = 0
for i in range(1, 6):
    m = int(input("Enter marks in subject " + str(i) + ": "))
    total = total + m
percentage = total / 5
print("Total marks =", total)
print("Percentage =", percentage)
if percentage >= 85:
    grade = "A"
elif percentage >= 75:
    grade = "B"
elif percentage >= 50:
    grade = "C"
elif percentage > 30:
    grade = "D"
else:
    grade = "Reappear"
print("Grade =", grade)
```

```text
Enter marks in subject 1: 78
Enter marks in subject 2: 82
Enter marks in subject 3: 91
Enter marks in subject 4: 69
Enter marks in subject 5: 75
Total marks = 395
Percentage = 79.0
Grade = B
```

- **Note:** with `percentage = total / 5`, division by the *number of subjects* is written as a literal `5` in two places (the loop bound and the divisor). Naming it once — `subjects = 5` — and using that name in both is the habit worth forming.

### 6.19.2 Guruji Astro — zodiac sign from a date ([CSP-XI] Case Study 1)

Each month splits at a day boundary into two signs, which makes it a twelve-branch ladder with a **conditional expression** in each branch:

```python
day = int(input("Input birthday: "))
month = input("Input month of birth (e.g. march, july etc): ")
if month == 'april':
    astro_sign = 'Aries' if (day < 20) else 'Taurus'
elif month == 'december':
    astro_sign = 'Sagittarius' if (day < 22) else 'Capricorn'
else:
    astro_sign = 'unknown'          # remaining ten months follow the same shape
print("Your Astrological sign is :", astro_sign)
```

```text
Input birthday: 12
Input month of birth (e.g. march, july etc): april
Your Astrological sign is : Aries
```

- **Concept — the conditional expression:** `A if condition else B` is a single *expression* that evaluates to `A` or `B`. It is not a new control structure; it is a compact `if..else` usable on the right-hand side of an assignment. Use it only when both outcomes are one short value each.
- **Robustness:** the program compares against lowercase month names, so `April` fails. `month = input(...).lower()` fixes every such case at once.

### 6.19.3 Redwood Shop — GST on a sale ([CSP-XI] Case Study 2)

| Item | GST rate |
| --- | --- |
| Footwear ≤ ₹500 per pair | 5% |
| Footwear > ₹500 per pair | 18% |
| Apparel ≤ ₹1000 per piece | 5% |
| Apparel > ₹1000 per piece | 12% |

> [!note] Source note
> the printed table reads "Footwear <= 500" and "Footwear >= 500", which both apply at exactly ₹500 — and likewise at ₹1000 for apparel. The code resolves it with `<=` first, so ₹500 is taxed at 5%. The table above states that resolution instead of leaving it ambiguous.

```python
item_code = input("Enter item code (A) Apparel, (F) Footwear :")
SP = float(input("Enter selling price (per unit) of item:"))
if item_code == 'A' or item_code == 'a':
    item = 'Apparel'
    if SP <= 1000:
        gstRate = 5
    else:
        gstRate = 12
elif item_code == 'F' or item_code == 'f':
    item = 'Footwear'
    if SP <= 500:
        gstRate = 5
    else:
        gstRate = 18
cgst = SP*(gstRate/2)/100
sgst = cgst
amount = SP + cgst + sgst
print("Item:", item)
print("Price:", SP)
print("CGST:", cgst)
print("SGST:", sgst)
print("Amount payable:", amount)
```

```text
Enter item code (A) Apparel, (F) Footwear :A
Enter selling price (per unit) of item:800
Item: Apparel
Price: 800.0
CGST: 20.0
SGST: 20.0
Amount payable: 840.0
```

- **Concept:** GST is split equally into **CGST** (central) and **SGST** (state), so each is half the total rate — 5% total means 2.5% each, i.e. ₹20 apiece on ₹800. A nested `if` inside each `elif` branch is the natural fit, because the rate depends on the price *only after* the category is known.
- **Missing guard:** an item code other than A or F leaves `item` and `gstRate` undefined and the program dies with `NameError`. A final `else` that reports an invalid code is the fix.

## 6.20 Still to attempt

These remain open in the books and are not solved above. They all reuse a technique from §6.17.

| Question | Technique it reuses |
| --- | --- |
| [CSP-XI] Unsolved 13 — positive or negative number | classification ladder |
| [CSP-XI] Unsolved 16 — full calculator with all operations | menu-driven ladder |
| [CSP-XI] Unsolved 21, 22 — alternating-sign exponential series | running term, with a sign flip each pass |
| [CSP-XI] Unsolved 24 — right-triangle star pattern | outer rows, inner columns |
| [NCERT] Programming Exercise 2 — table of a number, as a function | counted `for` (functions come in Chapter 7) |

## 6.21 Summary

- Default flow is **sequence**; only **selection** and **repetition** change it.
- **Selection:** `if` (one-way), `if..else` (two-way), `if..elif..else` (multi-way, first `True` branch wins), and nesting for conditions inside conditions.
- **Indentation** defines every block — it is syntax, and it is what pairs an `else` with its `if`.
- **Repetition:** `for` for a known number of trips (definite), `while` for an unknown number (indefinite). `range(start, stop, step)` excludes `stop`.
- Every `while` needs **initialise → test → update**; a missing update is an infinite loop.
- **`break`** exits the innermost loop; **`continue`** skips to its next iteration; **`pass`** does nothing at all. A loop's optional **`else`** runs only if no `break` fired.
- In a **nested loop**, the inner loop completes fully for each single pass of the outer one; total body executions are the product of the two trip counts.

## 6.22 Source-discrepancy appendix

Every entry below was confirmed by executing the code, not by reading it.

| Where | Issue | Type |
| ----- | ----- | ---- |
| [NCERT] Example 6.2 | Missing closing parenthesis in `int(input(...)` | syntax error in print |
| [NCERT] Program 6-3 | Stated spec requires "Please enter a value other than 0"; the code prints a different message and does not terminate | spec/code mismatch |
| [NCERT] Program 6-14 | `range(2, int(num/2))` reports **4** as prime | logical error |
| [NCERT] Program 6-19 | Output shown as `Factorial of` but code prints `factorial of` | typographical |
| [NCERT] Prog. Ex. 9(iv) | Pattern spacing is ambiguous as printed | unclear specification |
| [NCERT] Prog. Ex. 10 | Grade bands overlap at 60/70/80/90 | ambiguous boundaries |
| [NCERT] Case Study 6.1 | Grade criteria match **no** branch for exactly 85 or exactly 30 | logical gap |
| [CSP-XI] Fig. 6.5 caption | "executed **until** test expression evaluates to true" — should be *while* it is true | factual |
| [CSP-XI] Points to Remember (`for`) | "loop variable contains the **highest** value of the list" — it holds the **last** value | factual |
| [CSP-XI] PI-14 | Factorial program prints `1` for negative input despite prompting for a non-negative number | missing guard |
| [CSP-XI] Solved Q10(b) | The book's **corrected answer** still contains `Alter='Y':` → `SyntaxError` | uncorrected error |
| [CSP-XI] Solved Q10(c) | The book's **corrected answer** uses `count` before assigning it → `NameError`, and the update never terminates the loop | uncorrected error |
| [CSP-XI] Solved Q13 | Leap-year code prints nothing for 1900 | logical error |
| [CSP-XI] Solved Q16 | `range(1,51,3)` runs **17** times, not 16 | factual |
| [CSP-XI] Solved Q26 | `end=""` runs the Fibonacci terms together as `0 11 2 3 …` | formatting |
| [CSP-XI] Solved Q32 | "Exponential series" divides by \( i \), not \( i! \) — computes a different series | logical error |
| [CSP-XI] Solved Q33 | Geometric series omits the first term \( a \) and runs \( n-1 \) times | logical error |
| [CSP-XI] Solved Q35 | Prints a trailing blank line the target pattern does not have | off-by-one |
| [CSP-XI] Solved Q37(iii) | Answer prints `11111 / 2222 / …`, not the pattern that was set | logical error |
| [CSP-XI] Solved Q39 | Blank (ii) answered `x=x%10`; must be `x=n%10` → `NameError` as printed | uncorrected error |
| [CSP-XI] Unsolved Q5(i) | "greater than or equal to 100 but less than 70" is unsatisfiable | impossible condition |
| [CSP-XI] Case Study 2 | GST table's `<= 500` and `>= 500` rows both apply at exactly ₹500 | ambiguous boundaries |