# Computer Science | Chapter 03 | Getting Started with Python | GLOSSARY

> Terms are grouped by chapter and alphabetized within each group. Every entry links back to a `§` section in `NOTES.md`. Built and audited under the **notes-triad** skill's airtightness checklist (no circularity, no silent dependency on an undefined term, discriminator stated for confusable pairs, polysemy flagged rather than hidden, one to two sentences per entry).
>
> **Revision-3 pass (stricter):** this edition tightens several entries that leaned on an undefined term (`function` inside *Argument* and *Object*), adds an entry the corpus was silently depending on (*Program*), and makes three confusable-pair discriminators explicit instead of implicit (Compiler/Interpreter, Mutable/Immutable, Assignment `=` / Relational `==`).

## Chapter 4 — Problem Solving & Algorithms

| Term | Definition | § |
|---|---|---|
| **Abstraction** | The third pillar of Computational Thinking: keeping only the information relevant to a problem and deliberately ignoring irrelevant detail, so a general model of the problem emerges (e.g. a world map keeps only longitude and latitude). | 4.3A |
| **Algorithm** | A finite sequence of precisely stated, unambiguous steps that leads to a desired result in a finite amount of time, if followed correctly. | 4.3 |
| **Coding** | The step of converting a finalised algorithm into a program (see *Program*), written in a high-level language and following that language's syntax. | 4.8 |
| **Computational Thinking** | The thought process of formulating a problem and expressing its solution so a human, a computer, or both can carry it out; built from four pillars — Decomposition, Pattern Recognition, Abstraction, Algorithms. | 4.3A |
| **Decomposition** | Breaking a complex problem into smaller, independently solvable sub-problems, later combined into the full solution. **Polysemy flag:** this unit uses the word at two different scales — as a Computational Thinking pillar (breaking down one problem, §4.3A) and as a systems-design technique (breaking down an entire software system, e.g. a railway reservation system, §4.9). Don't conflate the two on an exam that names one specifically. | 4.3A / 4.9 |
| **Dry run** | Manually tracing an algorithm's steps against specific input values to check the output matches expectation, without running actual code. | 4.6 |
| **Finiteness** | The requirement that a correct algorithm always stops after a finite number of steps; an algorithm with no stopping point is not a valid algorithm by definition. | 4.3 |
| **Flow of control** | The order in which an algorithm's steps execute: in sequence, along one selected branch, or repeated in a loop. | 4.5 |
| **Flowchart** | A visual representation of an algorithm using standard shapes — oval (start/end), rectangle (process), parallelogram (input/output), diamond (decision) — connected by arrows showing the direction of flow. | 4.4.1 |
| **GIGO (Garbage In, Garbage Out)** | The principle that a computer's output is only as correct as the input and logic supplied to it — a flawless algorithm run on wrong data still produces a wrong answer. | 4.1 |
| **Input (algorithm characteristic)** | The requirement that a good algorithm accepts zero or more well-defined pieces of data to work with. | 4.3 |
| **Output (algorithm characteristic)** | The requirement that a good algorithm produces at least one well-defined result. | 4.3 |
| **Pattern Recognition** | The second pillar of Computational Thinking: finding similarities among the smaller problems produced by decomposition, so a solution recognised once can be reused elsewhere (e.g. "all cats have eyes, tails, fur" lets one description cover every cat). | 4.3A |
| **Precision** | The characteristic that every step of an algorithm is stated exactly, leaving no room for a different reading. | 4.3 |
| **Problem solving** | The overall process of identifying a problem, developing an algorithm for it, and implementing that algorithm as a program (see *Program*). | 4.1–4.2 |
| **Program** | An ordered set of instructions, written in a programming language, that a computer executes to carry out a specific task. | 4.8 |
| **Pseudocode** | An informal, English-like description of an algorithm's logic, with no fixed syntax rules, written for human reading rather than direct machine execution. | 4.4.2 |
| **Repetition (Iteration / Loop)** | A flow-of-control pattern where steps execute repeatedly until a condition is satisfied — **count-controlled** when the number of repeats is known in advance, **sentinel-controlled** when repeats continue until a specific stop value appears in the data. | 4.5.3 |
| **Selection** | A flow-of-control pattern where the algorithm evaluates a condition and branches to one of several sets of steps depending on whether it is `True` or `False`. | 4.5.2 |
| **Sequence** | A flow-of-control pattern where every statement executes exactly once, in the order it is written, with no branching or repeating. | 4.5.1 |
| **Space complexity** | A measure of how much memory an algorithm needs relative to input size, used alongside time complexity to compare alternative correct algorithms for the same problem. | 4.7 |
| **Testing and Debugging** | The problem-solving step of running a program on many inputs and fixing any syntactical or logical errors it reveals. | 4.2 |
| **Time complexity** | A measure of how much processing time an algorithm needs relative to input size, used alongside space complexity to compare alternative correct algorithms for the same problem. | 4.7 |
| **Uniqueness** | The characteristic that the result of every step in an algorithm is uniquely determined by the input and the results of the preceding steps — no ambiguity about what happens next. | 4.3 |
| **Verifying an algorithm** | Confirming an algorithm's correctness by dry-running it on multiple input values, including at least one boundary/edge case, before trusting it enough to code. | 4.6 |

## Chapter 5 — Getting Started with Python

| Term | Definition | § |
|---|---|---|
| **Argument** | A value written inside the parentheses of a callable such as `print(...)`, supplied to tell it what to act on. | 5.10 |
| **ASCII / Lexicographic comparison** | The rule Python's relational operators use on strings: compare the two strings' characters position by position using each character's ASCII numeric code, moving to the next position only while the current pair is equal — the same principle as alphabetical/dictionary order. | 5.8.2 |
| **Assignment operator** | `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `//=`, `**=` — assigns or updates the value bound to a variable. **Discriminator:** `=` performs an action (store a value); it never tests anything. Do not confuse it with the relational operator `==`, which only compares and returns `True`/`False` without changing either operand. | 5.8.3 |
| **Boolean (`bool`)** | A data type restricted to the two constants `True` and `False`. **Discriminator:** `bool` is not a separate numeric family of its own — it is a subtype of `int` (which is why `True + True` evaluates to `2`). | 5.7.1 |
| **Comment** | Text following `#` on a line, ignored entirely by the interpreter; runs only to the end of that line, with no separate closing marker. | 5.5 |
| **Compiler** | A language translator that reads an *entire* source-code file and converts it all into object code before execution starts, reporting errors only after scanning the whole program. **Discriminator:** unlike an interpreter, a compiler never begins executing until translation of the whole file is complete. | 5.1 (§4.8) |
| **Complex number** | A number written as `real + imaginary*j` (e.g. `3 + 4j`); one of Python's three built-in numeric types, alongside `int` and `float`. | 5.7.1 |
| **Dictionary** | A mutable mapping data type holding data as `key : value` pairs inside `{ }`, with values looked up by key rather than by position. | 5.7.5 |
| **Explicit type conversion (type casting)** | Converting a value from one data type to another because the programmer specifically requests it, via `int()`, `float()`, `str()`, `chr()`, or `ord()`. **Discriminator:** unlike implicit conversion, this can lose information — `int(20.67)` truncates to `20` rather than rounding. | 5.12.1 |
| **Expression** | Any combination of constants, variables, and operators that evaluates to a value; a bare value or bare variable also counts, but a bare operator alone does not. | 5.9 |
| **Float (`float`)** | A numeric data type representing real (decimal / floating-point) numbers. | 5.7.1 |
| **Identifier** | A programmer-chosen name for a variable, function, or other entity: must start with a letter or underscore (never a digit), may then contain letters/digits/underscores, and must not be a keyword. | 5.3 |
| **Identity operator** | `is` / `is not` — checks whether two variables refer to the exact same object in memory (same `id()`). **Discriminator:** unlike `==`, `is` does not care whether the values are merely equal; two different objects holding equal values still test `is` as `False`. | 5.8.5 |
| **IDLE** | Python's standard development environment, combining a Shell window (for interactive mode) and an Editor window (for script mode) in one interface. *Source-wording flag: this textbook expands the acronym as "Integrated Development Learning Environment"; other references add "and" — "Integrated Development and Learning Environment." Use the source's own wording for exam answers unless told otherwise.* | 5.1.3 |
| **Immutable** | A data type whose value cannot be changed in place once created (`int`, `float`, `bool`, `complex`, `str`, `tuple`). **Discriminator:** "changing" an immutable variable actually destroys the old binding and creates a brand-new object, rebinding the name to it — unlike a mutable type, nothing is edited in place. | 5.7.6 |
| **Implicit type conversion (coercion)** | Conversion Python performs automatically, without the programmer asking, and only when it can be done without loss of information (also called type promotion) — e.g. adding an `int` to a `float` promotes the result to `float`. | 5.12.2 |
| **`input()`** | A built-in function that reads text typed by the user and **always returns it as a string**, regardless of what characters were typed. | 5.11 |
| **Int (`int`)** | A numeric data type representing whole numbers, positive or negative, with no fractional part. | 5.7.1 |
| **Interactive mode** | A way of using the Python interpreter where each statement is typed at the `>>>` prompt and executed immediately on `Enter`; statements are not saved for later use. | 5.1.3 |
| **Interpreter** | A language translator that processes source code one statement at a time — translating, then executing each one before moving to the next — and stops the moment it hits an error. **Discriminator:** unlike a compiler, it never scans the whole program up front. | 5.1 (§4.8) |
| **Keyword** | A reserved word with a fixed meaning to the Python interpreter (e.g. `if`, `while`, `class`); can never be used as an identifier. | 5.2 |
| **List** | A mutable, ordered sequence of items enclosed in `[ ]`, separated by commas. | 5.7.2 |
| **Logical error (semantic error)** | A bug that lets a program run to completion but produces an incorrect output, because the underlying logic is wrong rather than the syntax. **Discriminator:** distinguished from a runtime error by *not* crashing — the program finishes and prints something, just the wrong something. | 5.13 |
| **Logical operator** | `and`, `or`, `not` (always lowercase) — combine or negate truth values. Every value is logically `True` by default except `None`, `False`, `0`, and empty collections (`""`, `()`, `[]`, `{}`). | 5.8.4 |
| **Membership operator** | `in` / `not in` — tests whether a value exists inside a sequence such as a list, comparing both type and value (the string `'1'` is not found by `in` when the sequence holds the int `1`). | 5.8.6 |
| **Mutable** | A data type whose value *can* be changed in place after creation (`list`, `set`, `dict`). **Discriminator:** unlike an immutable type, no new object is created on a genuine in-place change — the same object is edited. | 5.7.6 |
| **`None`** | A special data type with a single value, representing the *absence* of a value. **Discriminator:** `None` is neither `False` nor `0`, and supports no arithmetic or comparison operations of its own. | 5.7.4 |
| **Object** | Anything Python can store in a variable or use as a value in a program; every value — numeric, string, or otherwise — is an object with a unique identity, returned by `id()`. | 5.6 |
| **Operand** | A value that an operator acts on. | 5.8 |
| **Operator** | A symbol that performs a mathematical or logical operation on one or more operands (e.g. `+`, `==`, `and`). | 5.8 |
| **`print()`** | A built-in function that writes its arguments to the screen as a single output line; formatting is controlled by `sep` (default a single space, between values) and `end` (default `'\n'`, after the last value). | 5.11 |
| **Program** | *(see Chapter 4 table — same definition applies; Python's own program files are saved with a `.py` or `.pyw` extension, translated to machine language by an interpreter statement by statement.)* | 5.1 |
| **Relational operator** | `==`, `!=`, `>`, `<`, `>=`, `<=` — compares two operands and evaluates to `True` or `False`, never changing either operand. **Discriminator:** `==` only ever tests equality; it is not interchangeable with the assignment operator `=`, which stores a value and tests nothing. | 5.8.2 |
| **Runtime error** | An error that appears only *while* a program is executing — the code is syntactically valid Python, but the interpreter cannot carry out the specific instruction (e.g. `ZeroDivisionError`, or a `ValueError` from `int("apple")`). **Discriminator:** distinguished from a syntax error by the fact that the program *did* start running first. | 5.13 |
| **Script mode** | A way of using Python where a program is written in a `.py`/`.pyw` file, saved, then run as a whole; output only appears once the file is actually run. | 5.1.3 |
| **Set** | A mutable, unordered collection of unique items enclosed in `{ }`; a duplicate value added to a set literal is silently dropped. | 5.7.3 |
| **Source code** | A program written in a high-level language, before translation into machine language by a compiler or interpreter. | 5.1 (§4.8) |
| **Statement** | A unit of code the Python interpreter can execute in one go, such as an assignment (`x = 4`) or a `print()` call. | 5.10 |
| **String (`str`)** | An immutable sequence of characters enclosed in single or double quotation marks; a numeric-looking string like `"452"` still cannot be used directly in arithmetic. | 5.7.2 |
| **Syntax error** | An error detected *before* the program runs at all, because the code violates Python's grammar rules (e.g. a missing parenthesis, or incorrect indentation, since Python uses indentation to mark blocks); the program produces no output whatsoever. | 5.13 |
| **Tuple** | An immutable, ordered sequence of items enclosed in `( )`, separated by commas. | 5.7.2 |
| **Type (data type)** | A classification that determines what kind of value a variable holds and which operations are valid on it. | 5.7 |
| **Unary operator** | An operator needing only one operand (e.g. unary `-`, `not`); ranks higher in precedence than binary operators using the same symbol. | 5.9.1 |
| **Variable** | A name (identifier) bound to an object stored in memory; created implicitly in Python the moment it is first assigned a value with `=`. | 5.4 |
