# Computer Science | Chapter 02 | DATA REPRESENTATION and BOOLEAN LOGIC | GLOSSARY

**Level:** Class XI (CBSE) · **Companion files:** `CS02-...-NOTES.md` (explanations), `CS02-...-CNOTES.md` (self-test)

> **How to use this file:** one entry = one unambiguous, self-contained answer to "what is this, right now." No worked examples, no "why," no source-comparison reasoning — those live in NOTES. Every entry closes with a `§` pointer back to the NOTES section that explains it in full. If an entry needs more than two sentences to stand alone, that is itself a signal the definition has drifted into NOTES's job — flag it rather than let it grow.

> **Confusable-pair quick index** (each pair's discriminator is embedded in both entries below, not just here): MSB ↔ LSB · ASCII ↔ ISCII ↔ Unicode · Tautology ↔ Fallacy · NAND ↔ AND · NOR ↔ OR · De Morgan's First Law ↔ Second Law · Dual ↔ Duality Principle.

---

**AND Operator** — The Boolean operator (symbol `.`), also called logical multiplication, whose output is `1` only when *all* of its inputs are `1`. Not to be confused with **NAND**, which is AND followed by a NOT. **§2.6.1**

**ASCII (American Standard Code for Information Interchange)** — A 7-bit character-encoding scheme (`2⁷ = 128` codes) covering English letters, digits, punctuation, and control codes only. Narrower in scope than **ISCII** (8-bit, adds Indian scripts) and **Unicode** (variable-width, every world script); ASCII code points 0–128 are identical in all three. **§2.4**

**Base (Radix)** — The count of unique digit-symbols a number system uses, and the value each digit's position is raised to when computing that digit's positional value (e.g. binary = base 2, decimal = base 10). **§2.2**

**Bit** — A **b**inary dig**it**, `0` or `1`; the smallest unit of information a computer can store. **§2.1**

**Boolean Constant** — A specific value held in a **Boolean Variable**: `True`/`False`, `1`/`0`, or `Yes`/`No`. **§2.5**

**Boolean Expression (Logical Expression)** — A combination of Boolean operators, variables, and constants that evaluates to a single truth value, e.g. `X + Y.Z`. **§2.5**

**Boolean Statement (Proposition)** — A statement with a definite truth value, `True` or `False` (e.g. "Is the house locked?"); a question with no fixed true/false answer (e.g. "Where is your house?") is not one. **§2.5**

**Boolean Variable (Binary/Logical Variable)** — A variable restricted to exactly one of two possible values (`0`/`1`, `Yes`/`No`, `True`/`False`); one **bit** stores one Boolean variable. **§2.5**

**Byte** — A group of 8 bits; one plain-ASCII character occupies exactly one byte in storage. **§2.4**

**Cipher** — Data that has been converted into a coded form so its meaning is hidden from anyone without the key; the act of producing a cipher is *encryption*, and recovering the original from it is *decryption*. **§2.4**

**Code Point** — The unique number Unicode assigns to one character, fixed regardless of platform, program, or language. **§2.4**

**Complement (Negation)** — The result of applying the **NOT Operator** to a Boolean variable; a variable `A` and its complement `A'` always hold opposite values. **§2.6.3**

**De Morgan's First Law** — `(A+B)' = A'.B'`: the complement of an OR turns into the AND of the complements. Distinguish from the **Second Law**, which starts from AND, not OR. **§2.9**

**De Morgan's Second Law** — `(A.B)' = A'+B'`: the complement of an AND turns into the OR of the complements. Distinguish from the **First Law**, which starts from OR, not AND. **§2.9**

**Dual** — The specific expression produced by applying the **Duality Principle** to a given Boolean expression. **§2.9**

**Duality Principle** — The rule that swapping every `.`↔`+` and every `0`↔`1` in a Boolean expression produces its **Dual** without changing the function's value. **§2.9**

**Encoding Scheme** — A standard mapping that converts characters/data into unique codes, which are then converted to binary for the computer to store and process. **§2.4**

**Face Value** — The digit itself, independent of its base or its position in the number (e.g. the face value of the `7` in `72` is simply 7). **§2.2**

**Fallacy** — A Boolean expression whose truth-table output is `0` for every input combination; the opposite of a **Tautology**. **§2.7**

**Hexadecimal Number System** — A base-16 positional number system using the 16 symbols `0`–`9` and `A`–`F` (`A=10` through `F=15`); one hex digit always encodes exactly 4 bits. **§2.2.4**

**Integrated Circuit (IC)** — A single chip of **semiconductor** material loaded with **transistors** and other components, performing the arithmetic and logic operations at the heart of a microprocessor. **§2.2**

**ISCII (Indian Script Code for Information Interchange)** — An 8-bit character-encoding scheme (`2⁸ = 256` codes) that keeps all 128 ASCII codes unchanged and uses the remaining 128 for Indian-script characters. Wider than **ASCII**, narrower than **Unicode** (which is not capped at 256 characters). **§2.4**

**Least Significant Bit (LSB)** — The right-most digit of a number, carrying the smallest positional weight, in any number system — the opposite end from the **MSB**. **§2.2**

**Logic Circuit** — An arrangement of **logic gates** that takes one or more inputs and produces an output implementing a Boolean expression. **§2.8**

**Logic Gate** — A single building block (NOT, AND, OR, NAND, NOR, or XOR) that implements one basic Boolean operation on its input signal(s). **§2.8**

**Most Significant Bit (MSB)** — The left-most digit of a number, carrying the greatest positional weight, in any number system — the opposite end from the **LSB**. **§2.2**

**NAND Gate** — AND followed by NOT: output is `0` only when both inputs are `1`, else `1`. One of the two **Universal Gates**; not to be confused with a plain **AND Operator**, which has no final inversion. **§2.8**

**NOR Gate** — OR followed by NOT: output is `1` only when both inputs are `0`, else `0`. One of the two **Universal Gates**; not to be confused with a plain **OR Operator**, which has no final inversion. **§2.8**

**NOT Operator** — The unary Boolean operator (symbol `'` or an overbar) that reverses a single input's value. **§2.6.3**

**Number System** — A method for representing numbers, defined by a **Base (Radix)** and a fixed set of digit-symbols, where a digit's contribution depends on its **Face Value**, the base, and its position. **§2.2**

**Octal Number System** — A base-8 positional number system using digits `0`–`7`; one octal digit always encodes exactly 3 bits. **§2.2.3**

**Operator Precedence (Boolean)** — The fixed evaluation order NOT → AND → OR: NOT binds tightest, OR loosest, so `X.Y'+Z` means `(X.(Y'))+Z`, not `X.(Y'+Z)`. **§2.7**

**OR Operator** — The Boolean operator (symbol `+`), also called logical addition, whose output is `1` if *any* of its inputs is `1`. Not to be confused with **NOR**, which is OR followed by a NOT. **§2.6.2**

**Positional Value** — The weight of a digit's position, computed as the number system's base raised to the power of that position number (e.g. the `10³` place in decimal). **§2.2**

**Semiconductor** — A material whose electrical conductivity can be precisely controlled, used to build the transistors inside an **Integrated Circuit**. **§2.2**

**Tautology** — A Boolean expression whose truth-table output is `1` for every input combination; the opposite of a **Fallacy**. **§2.7**

**Transistor** — A tiny electronic switch, whose ON/OFF state, triggered by an incoming electronic signal, is exactly what the binary digits `1`/`0` represent inside a computer. **§2.2**

**Truth Table** — A table listing every one of the `2ⁿ` possible input combinations for `n` Boolean variables, together with the resulting output of an expression. **§2.7**

**Unicode** — A universal character-encoding standard giving one fixed **Code Point** to every character of every world script, independent of platform or program; a superset of ASCII, and unlike ISCII, not limited to 256 characters. **§2.4**

**Universal Gate** — Either the **NAND Gate** or the **NOR Gate**; from either one alone, every other logic gate (and hence any digital circuit) can be built. **§2.8**

**UTF-8** — A Unicode Transformation Format using 1 to 4 bytes per character depending on the code point's size; the only one of the three that is byte-for-byte backward-compatible with plain ASCII. **§2.4**

**UTF-16** — A Unicode Transformation Format using 2 or 4 bytes per character (most modern-language characters take 2); unlike UTF-8, even a plain ASCII character takes 2 bytes here. **§2.4**

**UTF-32** — A Unicode Transformation Format using a fixed 4 bytes for every character, regardless of the code point's size. **§2.4**

**XOR Gate (Exclusive-OR)** — A logic gate whose output is `1` only when its two inputs *differ*, and `0` when they are the same. **§2.8**

---

## Audit note (per notes-triad airtightness rules)

This file replaces an earlier draft. Changes made to satisfy the five airtightness checks:

| Issue found | Check failed | Fix applied |
|---|---|---|
| `Cipher` conflated the coded artifact with the encryption *process* | 1 — near-circular | Split into artifact vs. process within one sentence |
| `Dual (Duality Principle)` bundled two distinct terms under one heading | 4 — hidden polysemy | Split into separate `Dual` and `Duality Principle` entries, cross-referenced |
| `UTF-8/16/32` packed three atomic facts into one entry | 5 — length discipline | Split into three standalone entries |
| `De Morgan's Law` bundled both laws with no discriminator between them | 3, 5 — missing discriminator, length | Split into First Law / Second Law, each naming what distinguishes it from the other |
| `Number System` and `Positional Number System` both used undefined "face value" | 2 — silent dependency on undefined term | Added a standalone `Face Value` entry; merged `Positional Number System` into `Number System` and `Positional Value` (was pure duplication) |
| ASCII / ISCII / Unicode entries described each in isolation | 3 — missing discriminator for a classic confusable trio | Added explicit "narrower/wider than" clauses cross-linking all three |
| MSB / LSB, Tautology / Fallacy defined independently | 3 — missing discriminator | Added "opposite of / opposite end from" clause to each |
| No entry existed for operator precedence, despite it being a named exam trap in NOTES | — (coverage gap) | Added `Operator Precedence (Boolean)` |
| Every entry | 4 (missing traceability) | Added a trailing `§` NOTES-section pointer |
