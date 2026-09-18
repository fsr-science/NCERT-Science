# Computer Science | Chapter 04 | PYTHON PROGRAMMING FUNDAMENTALS | GLOSSARY

**Branches merged:** Python Fundamentals + Functions & Modules · **Level:** Class XI · Companion to `Python-Programming-Fundamentals-NOTES.md`
**Source chapters:** NCERT Computer Science — Chapter 5 (Getting Started with Python) + Chapter 7 (Functions)

> Alphabetical, one to two airtight sentences per term — audited against the notes-triad glossary-rules checklist (no circularity, no silent dependency on an undefined term, explicit discriminator for every confusable pair, single stated meaning, length discipline). `§` points back to the NOTES section for the full explanation.

| Term | Definition | § |
|---|---|---|
| **Argument** | A value supplied to a function at the point it is called — contrast with **Parameter**, the name that receives it inside the function. | §15.2 |
| **Assignment operator** | An operator such as `=`, `+=`, or `**=` that stores a (possibly computed) value into a variable — not to be confused with the relational `==`, which compares rather than assigns. | §8.3 |
| **Built-in function** | A ready-made function (e.g. `print()`, `abs()`, `len()`) available without importing anything. | §17.1 |
| **Comment** | Text starting with `#`, ignored by the interpreter, written to explain *why* code exists to a human reader. | §5 |
| **Compiler** | A translator that converts an entire program into object code before any of it runs, reporting all errors together — contrast with **Interpreter**, which translates and runs one statement at a time. | §1.1 |
| **Complex number** | A number with a real part and an imaginary part, written like `3 + 4j` in Python. | §7.1 |
| **Composition** | Using the result of one function call directly as the argument to another, e.g. `sqrt(ceil(624.7))`. | §17.2 |
| **Data type** | The category a value belongs to (e.g. `int`, `str`, `list`), which fixes what operations are valid on it. | §7 |
| **Debugging** | The process of finding and removing bugs (errors) from a program. | §13 |
| **`def`** | The keyword that begins a function definition. | §15.1 |
| **Default parameter** | A parameter given a pre-decided value in the function header, used only when the call omits a matching argument. | §15.2 |
| **Dictionary** | Python's built-in mapping type; stores `key : value` pairs and looks values up by key. | §7.5 |
| **Docstring** | A `"""triple-quoted"""` string at the start of a module (or function) describing what it does; readable via `.__doc__`. | §17.2 |
| **Explicit conversion (type casting)** | Converting a value's data type on purpose, using a function such as `int()`, `float()`, or `str()` — contrast with **Implicit conversion**, which Python performs automatically. | §12.1 |
| **Expression** | A combination of constants, variables, and operators that evaluates to a single value. | §9 |
| **Flow of execution** | The actual order in which statements run — which, for a function, jumps into the function body only when it's called. | §15.4 |
| **Float** | Python's data type for real (decimal-point) numbers, e.g. `4.0`. | §7.1 |
| **`from` statement** | `from module import name` — loads only the named function(s) so they can be called without the module prefix, unlike a plain **Import statement**, which requires the `module.` prefix on every call. | §17.2 |
| **Function** | A named group of instructions that performs a specific task when invoked (called). | §14.1 |
| **Function body** | The indented block of statements that make up a function's actual instructions. | §15.1 |
| **Function call** | The act of invoking a function by writing its name followed by `()`, with any arguments inside. | §15.1 |
| **Function definition** | The `def` block that creates a function — its header plus its body. | §15.1 |
| **Function header** | The first line of a function definition: `def name(parameters):`. | §15.1 |
| **`global` keyword** | Used inside a function to state that an assignment should modify the outer global variable, not create a new local one. | §16 |
| **Global variable** | A variable defined outside any function or block; accessible anywhere in the program from that point onward — contrast with **Local variable**, which is confined to the function it's defined in. | §16 |
| **id() function** | A built-in function returning an object's unique identity, comparable in spirit to a memory address. | §6 |
| **Identifier** | A programmer-chosen name for a variable, function, or other entity, following Python's naming rules. | §3 |
| **Identity operator** | `is` / `is not` — tests whether two names refer to the *same* object, not merely equal values; contrast with `==`, which tests equality of value, not identity. | §8.5 |
| **Immutable** | Describes a data type whose objects cannot be changed after creation (`int`, `float`, `bool`, `complex`, `str`, `tuple`) — contrast with **Mutable**. | §7.6 |
| **Implicit conversion (coercion)** | A type conversion Python performs automatically, only when no information would be lost — contrast with **Explicit conversion**, which the programmer forces with a function call. | §12.2 |
| **Import statement** | `import module` — loads a module so its functions can be called as `module.function()`; contrast with the **`from` statement**, which allows calling a function without the module prefix. | §17.2 |
| **input() function** | A built-in function that displays an optional prompt and returns whatever the user typed, always as a `string` — even if that text looks numeric. | §11 |
| **Integer (int)** | Python's data type for whole numbers, positive or negative, with no decimal part. | §7.1 |
| **Interactive mode** | A way of using the Python shell where each typed statement runs immediately at the `>>>` prompt — contrast with **Script mode**, where several statements are saved to a file and run together. | §1.4 |
| **Interpreter** | A translator that converts and runs a program one statement at a time, stopping at the first error found — contrast with **Compiler**, which translates the whole program before running any of it. | §1.1 |
| **Keyword** | A reserved word (like `if`, `def`, `True`) with a fixed meaning to the interpreter; cannot be used as an identifier — unlike a built-in function name such as `print`, which is not reserved and can technically (though inadvisably) be reassigned. | §2 |
| **List** | A mutable, ordered sequence type written with `[ ]` — contrast with **Tuple**, its immutable counterpart. | §7.2 |
| **Local variable** | A variable defined inside a function or block; accessible only there, and only while that function is running — contrast with **Global variable**, which is visible throughout the program. | §16 |
| **Logical error (semantic error)** | An error that lets the program run to completion but produces a wrong result; never flagged by the interpreter — contrast with **Syntax error** (stops the program before it starts) and **Runtime error** (stops it mid-way). | §13 |
| **Logical operator** | `and`, `or`, `not` — combine or invert `True`/`False` values. | §8.4 |
| **Mapping** | A data-type category that associates keys with values; Python's only built-in mapping type is the **Dictionary**. | §7.5 |
| **Membership operator** | `in` / `not in` — tests whether a value exists inside a sequence. | §8.6 |
| **Modular programming** | Dividing a program into separate, independently named blocks (functions), each solving one sub-problem — the *practice*; not to be confused with **Module**, the `.py` file that packages reusable functions. | §14.1 |
| **Module** | A `.py` file containing a collection of function definitions, reusable via `import` — the *artifact*; not to be confused with **Modular programming**, the practice of dividing a program into such blocks. | §17.2 |
| **Mutable** | Describes a data type whose objects *can* be changed in place after creation (`list`, `set`, `dict`) — contrast with **Immutable**. | §7.6 |
| **None** | A special data type with exactly one value, used to represent the absence of a value — distinct from both `False` and `0`, even though all three test as "falsy." | §7.4 |
| **Object** | What every Python value is — an item in memory with its own unique identity, reachable through one or more variable names. | §6 |
| **Operand** | A value that an operator acts on. | §8 |
| **Operator** | A symbol (like `+`, `==`, `and`) that performs an operation on one or more operands. | §8 |
| **Parameter** | The name in a function's header that receives an argument's value when the function is called — contrast with **Argument**, the value supplied at the call site. | §15.2 |
| **Precedence** | The order in which operators are evaluated when an expression mixes several of them. | §9.1 |
| **print() function** | A built-in function that displays one or more values to the screen, joined by `sep` and ended by `end`. | §11 |
| **Program** | An ordered set of instructions a computer executes to carry out a specific task. | §1.1 |
| **Programming language** | The language used to write the instructions that make up a program. | §1.1 |
| **Relational operator** | `==`, `!=`, `>`, `<`, `>=`, `<=` — compares two operands and evaluates to `True` or `False`; not to be confused with the assignment operator `=`, which stores a value rather than comparing one. | §8.2 |
| **Return statement** | `return` — sends a value (or `None`) back to the caller and ends the function's execution at that point. | §15.3 |
| **Reusability** | The benefit of being able to call the same function from many places, or from other programs, without rewriting it. | §14.2 |
| **Runtime error** | An error that stops the program abnormally *during* execution, after it has already started running correctly — contrast with **Syntax error** (never starts) and **Logical error** (never stops). | §13 |
| **Scope** | The part of a program where a particular variable can be accessed; specializes into **Global variable** and **Local variable**. | §16 |
| **Script mode** | A way of using Python where several statements are saved in a `.py` file and run together — contrast with **Interactive mode**, where each statement runs immediately at the prompt. | §1.4 |
| **Sequence** | An ordered collection whose items are reachable by integer index — strings, lists, and tuples. | §7.2 |
| **Set** | An unordered, mutable collection type, written with `{ }`, that never stores duplicate elements. | §7.3 |
| **Source code** | A program as written in a high-level language, before translation to machine language. | §1.1 |
| **Standard library** | Python's built-in collection of ready-made functions and modules. | §17 |
| **Statement** | A unit of code the interpreter can execute directly, such as an assignment or a function call. | §10 |
| **String** | Python's immutable data type for text, written with `'…'` or `"…"`. | §7.2 |
| **Syntax error** | An error that stops the interpreter from running the program at all, because the code doesn't follow Python's grammar — contrast with **Runtime error** (starts, then fails) and **Logical error** (never fails at all). | §13 |
| **Tuple** | An immutable, ordered sequence type written with `( )` — contrast with **List**, its mutable counterpart. | §7.2 |
| **type() function** | A built-in function that reports a value's data type. | §7.1 |
| **Type conversion** | Changing a value's data type, either explicitly (forced — see **Explicit conversion**) or implicitly (automatic — see **Implicit conversion**). | §12 |
| **TypeError** | A specific runtime error raised when an operation is applied to a value of an unsuitable type, e.g. `"text" + 5`. | §13 |
| **User-defined function** | A function written by the programmer, as opposed to a **Built-in function** from the standard library. | §15 |
| **ValueError** | A specific runtime error raised when a function receives an argument of the right type but an inappropriate value, e.g. `int("apple")`. | §13 |
| **Variable** | A name bound to an object stored in memory; created the moment it is first assigned a value. | §4 |
| **Void function** | A function that performs an action but has no `return` statement, so it sends nothing back — contrast with a function that ends in `return`, which sends a value to its caller. | §15.3 |
| **ZeroDivisionError** | A specific runtime error raised when a program attempts to divide a number by zero. | §13 |
