# Computer Science | Chapter 06 | Strings in Python | GLOSSARY

> Fast, unambiguous lookup only — one to two sentences per entry, every entry airtight on its own, no worked examples or reasoning (that's NOTES's job). `§` codes point back to `CS08-STRINGS-NOTES.md` using the numbering key defined at the top of that file. Audited against the five airtightness checks (no circularity, no undefined dependency, confusable-pair discriminators stated, polysemy flagged, one-two sentence limit) — see the Audit Log at the bottom for what changed and why.

## Core Concepts

| Term | Definition | § |
| --- | --- | --- |
| **Sequence** | An orderly collection of items where each item is indexed by an integer. `String`, `List`, and `Tuple` are sequence types; `Dictionary` is a *mapping*, not a sequence, and is not indexed the same way. | §8.1 |
| **String** | A sequence made up of one or more Unicode characters, enclosed in single, double, or triple quotes. | §8.1–§8.2 |
| **Character** | A single letter, digit, whitespace character, or symbol. Python has no separate character type — a string of length one *is* a character, and is therefore also a substring of length one. | §8.1 |
| **Unicode** | The character-encoding standard Python strings use internally, covering letters, digits, symbols, and whitespace across virtually all scripts. | §8.2 |
| **Ordinal value** *(= ASCII value in this chapter's range)* | The integer code-point a character maps to, e.g. `ord('A')` is `65`. String comparison operators (`<`, `>`, …) compare these values position by position — not the "alphabetical" order a human would use by default. | §8.3.4 |
| **Immutable** | A property of an object whose contents cannot be changed after creation — only replaced wholesale. Strings, tuples, and numbers are immutable in Python; `str[i] = x` always raises `TypeError`. | §8.2.3, PTP-2 |
| **Mutable** | A property of an object whose contents *can* be changed in place after creation, without creating a new object — the opposite of immutable. Lists, sets, and dictionaries are mutable; strings are not, however similar a "modifying" method call may look. | §8.2.3 |
| **Indexing** | Accessing one character of a string by its integer position in square brackets, e.g. `str[3]`. An out-of-range integer index raises `IndexError` — unlike slicing, which never does (see Slicing). | §8.2.2, PTP-3 |
| **Positive index** | An index counted from the left: `0` for the first character, `n-1` for the last, where `n = len(str)`. | §8.2.2 |
| **Negative index** | An index counted from the right: `-1` for the last character, `-n` for the first, where `n = len(str)`. | §8.2.2 |
| **Slicing** | Extracting a substring with `str[start:end:step]`, where `end` is always excluded. An out-of-range bound is silently truncated and never raises `IndexError` — the sharpest difference from plain indexing (see Indexing). | §8.3.5, PTP-3 |
| **Substring** | Any contiguous run of characters taken from within a string — the result of a slice, or what a search method (`find()`, `count()`, …) looks for. | §8.3.5, §8.5c |
| **Traversal** | Visiting every character of a string in order, one at a time, using a `for` loop (fixed pass, no early exit) or a `while` loop (explicit condition tracked by hand). | §8.4 |
| **Concatenation** | Joining two strings into a new string with the `+` operator. Only valid between two strings — `+` between a `str` and an `int` is always `TypeError`, unlike numeric `+`. | §8.3.1, PTP-5 |
| **Repetition** | Building a new string by repeating a given string a set integer number of times with the `*` operator; one operand must be `str`, the other `int`. | §8.3.2 |
| **Membership operator** | `in` (`True` if the left string occurs as a substring of the right) or `not in` (its negation). Both operands must be strings, and the test is case-sensitive. | §8.3.3 |
| **Escape sequence** | A backslash-prefixed sequence (`\'`, `\"`, `\\`, `\n`, `\t`) inside a string literal, representing one special character — it counts as a single character toward `len()`, not two. | §8.2.1 |
| **Multiline string** | A string created with triple quotes (`'''...'''` or `"""..."""`) that spans more than one source line. The embedded line break is a real `\n` character and is counted by `len()` like any other character. | §8.2.1, PTP-8 |
| **Empty string** | A string with zero characters, written `''` or `""`; a valid string whose `len()` is `0`. | §8.2 |
| **Palindrome** | A string that reads identically forwards and backwards, e.g. `'kanak'`. | §8.6g |
| **Method chaining** | Calling one string method directly on the result of another, e.g. `s.upper().lower()` — legal because every method returns a value (string, `bool`, or `int`) the next call can act on. Whichever call is *last* in the chain decides the final result. | §8.5e |
| **Adjacent-literal concatenation** | Two quoted string literals written back to back in source code, with no operator between them, join automatically into one string — `"Good " " Morning"` becomes `"Good  Morning"`. Works only for literal quotes side by side, never for variables (`str1 str2` with no `+` is `SyntaxError`). | §8.3.1 |

## Errors You Will Meet in This Chapter

| Error | When it is raised | Example trigger | § |
| --- | --- | --- | --- |
| **`IndexError`** | A plain (non-slice) integer index falls outside the valid range `-n` to `n-1`. Never raised by slicing — see Slicing. | `str1[15]` on a 12-character string | §8.2.2, PTP-3 |
| **`TypeError`** | An index is not an integer; or `+`/`*` is used with a type combination Python doesn't define for it (`str` with `int` for `+`; two `str` operands for `*`); or an index-assignment is attempted on a string. | `str1[1.5]`; `2 + 'book'`; `'3' * '5'`; `str1[1] = 'a'` | §8.2.2, §8.2.3, §8.3.1, §8.3.2, PTP-5 |
| **`ValueError`** | `str.index()` or `str.rindex()` is called with a substring that does not exist in the string — unlike `find()`/`rfind()`, which return `-1` instead. | `'Hello'.index('Hi')` | §8.5c, PTP-4 |
| **`SyntaxError`** | A string literal contains both quote styles with neither one escaped. | `d = "She said, "I'll call you.""` | §8.2.1 |

## Operators

| Operator | Name | Effect | § |
| --- | --- | --- | --- |
| `+` | Concatenation | Joins two strings; `TypeError` if either operand isn't a string — see Concatenation. | §8.3.1 |
| `*` | Repetition | Repeats a string `n` times; needs one `str` operand and one `int` operand — see Repetition. | §8.3.2 |
| `in` | Membership (positive) | `True` if the left string is a substring of the right string. | §8.3.3 |
| `not in` | Membership (negative) | `True` if the left string is **not** a substring of the right string. | §8.3.3 |
| `>` `<` `>=` `<=` `==` `!=` | Comparison | Compares two strings by ordinal value, character by character, stopping at the first mismatch; case-sensitive. | §8.3.4 |
| `[ ]` | Indexing | Retrieves one character by integer position; out-of-range raises `IndexError` — see Indexing. | §8.2.2 |
| `[ : : ]` | Slicing | Extracts a substring by `start:end:step`; out-of-range bounds truncate silently — see Slicing. | §8.3.5 |

## Built-in Functions

| Function | Definition | § |
| --- | --- | --- |
| `len(str)` | Returns the number of characters in `str`, counting each escape sequence as one character. | §8.5a |
| `ord(char)` | Returns the Unicode/ASCII ordinal (an `int`) of a single-character string — the inverse of `chr()`. | §8.5a |
| `chr(number)` | Returns the single character (a `str`) for a given Unicode/ASCII ordinal — the inverse of `ord()`. | §8.5a |

## String Methods

| Method | Category | Definition | § |
| --- | --- | --- | --- |
| `capitalize()` | Case conversion | Returns a copy with **only the first character** of the whole string uppercased and every other character lowercased — contrast `title()`, which does this per word. | §8.5a |
| `title()` | Case conversion | Returns a copy with the first letter of **every word** uppercased and the rest of each word lowercased — contrast `capitalize()`, which touches only the string's very first character. | §8.5a |
| `lower()` | Case conversion | Returns a copy with every letter forced to lowercase, regardless of its current case. | §8.5a |
| `upper()` | Case conversion | Returns a copy with every letter forced to uppercase, regardless of its current case. | §8.5a |
| `swapcase()` | Case conversion | Returns a copy with every letter's *existing* case flipped — unlike `lower()`/`upper()`, the result depends on what each character's case already was. | §8.5a |
| `isalpha()` | Testing | `True` only if the string is non-empty and every character is a letter (no digits, spaces, or symbols). | §8.5b |
| `isdigit()` | Testing | `True` only if the string is non-empty and every character is a digit. | §8.5b |
| `isalnum()` | Testing | `True` only if the string is non-empty and every character is a letter *or* a digit — the union of what `isalpha()` and `isdigit()` each test alone. | §8.5b |
| `isspace()` | Testing | `True` only if the string is non-empty and every character is whitespace. | §8.5b |
| `islower()` | Testing | `True` if the string is non-empty, has at least one cased character, and every cased character is lowercase. | §8.5b |
| `isupper()` | Testing | Same condition as `islower()`, with "uppercase" in place of "lowercase". | §8.5b |
| `istitle()` | Testing | `True` if the string is non-empty and already title-cased — the first letter of every word uppercase, the rest of each word lowercase. | §8.5b |
| `find(sub, start, end)` | Search | Returns the lowest index of `sub` within the given range, or `-1` if not found — never raises an error. Contrast `index()` (raises instead of returning `-1`) and `rfind()` (searches from the right). | §8.5c, PTP-4 |
| `rfind(sub, start, end)` | Search | Like `find()`, but returns the **highest** (rightmost) index of `sub`, or `-1` if not found. *(Not taught in either source textbook's body text — added to close a gap left by an NCERT exercise that uses it.)* | §8.5c |
| `index(sub, start, end)` | Search | Same search as `find()`, but **raises `ValueError`** instead of returning `-1` when `sub` is not found. | §8.5c, PTP-4 |
| `rindex(sub, start, end)` | Search | Same search as `rfind()`, but raises `ValueError` instead of returning `-1` — to `rfind()` what `index()` is to `find()`. *(Not taught in either source textbook.)* | §8.5c |
| `count(sub, start, end)` | Search | Returns the number of non-overlapping occurrences of `sub` within the given range. | §8.5c |
| `startswith(sub)` | Search | `True` if the string begins with `sub`, else `False`. | §8.5c |
| `endswith(sub)` | Search | `True` if the string ends with `sub`, else `False`. | §8.5c |
| `replace(old, new)` | Modify | Returns a copy with every occurrence of `old` replaced by `new`. | §8.5d |
| `strip([chars])` | Modify | Returns a copy with matching characters removed from **both** ends (default: whitespace). `chars` is a *set* of characters to strip, not a literal prefix/suffix, so their order inside it never matters. | §8.5d |
| `lstrip([chars])` | Modify | Same as `strip()`, restricted to the **left** end only. | §8.5d |
| `rstrip([chars])` | Modify | Same as `strip()`, restricted to the **right** end only. | §8.5d |
| `split(sep, maxsplit)` | Modify | Returns a `list` of substrings cut at `sep` (default: any whitespace) — the inverse operation of `join()`. | §8.5d |
| `join(sequence)` | Modify | Returns a single string formed by inserting the calling string between every element of `sequence` — the inverse operation of `split()`. | §8.5d |
| `partition(sep)` | Modify | Returns a 3-tuple `(before, sep, after)` split at the *first* occurrence of `sep`; if `sep` isn't found, returns `(whole_string, '', '')`. | §8.5d |

## Audit Log — what changed in the strict pass, and why

| Change | Check that required it |
| --- | --- |
| Removed the **"Locker analogy"** entry entirely | Not an exam-answerable term — it's a NOTES-level mnemonic, not a lookup target. A glossary entry must be something "define X" could plausibly ask for. |
| Added the `IndexError`-vs-`Indexing`/`Slicing` cross-reference to all three entries | Check 3 — Indexing and Slicing are an explicitly flagged confusable pair (PTP-3) whose entries previously stated facts but not the discriminator. |
| Added the `find()`/`rfind()`/`index()`/`rindex()` cross-references to all four entries | Check 3 — this four-way cluster is the chapter's densest confusable set (PTP-4); each entry now names what distinguishes it from its nearest neighbour instead of standing alone. |
| Added the whole-string-vs-per-word contrast to `capitalize()` and `title()` | Check 3 — a real, exam-relevant confusable pair (same-looking case-conversion methods, different scope) that wasn't previously discriminated in either entry. |
| Tightened `strip()` to one sentence plus a `§` pointer instead of a full explanation | Check 5 — the character-set clarification is essential (so it stays), but the reasoning belongs in NOTES §8.5d, not spelled out twice. |
| Added `§` codes to every single entry | Cross-reference rule — GLOSSARY may carry `§` back to NOTES; previously only about half the entries did. |
| Added inverse-pair notes to `ord()`/`chr()` and `split()`/`join()` | Check 3 — these are natural discriminator pairs even though NOTES doesn't flag them as a "trap"; stating the inverse relationship in one clause is airtight and costs nothing. |

## Source Note

Terms whose `§` lands in `§8.2.1`, `§8.3.4`, or that name `capitalize()`/`swapcase()`/`partition()`/`isalnum()`/`isspace()`/`istitle()`/`ord()`/`chr()` are drawn from the supplementary source, *Computer Science with Python–XI*, Chapter 7. Everything else traces to NCERT Chapter 8, the primary source. `rfind()`/`rindex()` are marked as gap-fill additions — required by an NCERT exercise but taught in neither textbook's body text. No genuine term-*definition* conflict exists between the two sources for this chapter (both agree on every concept covered here); the one discrepancy on record — a worked-example output mismatch in NOTES §8.6h — is a printed-answer/OCR artifact, not a definitional disagreement, and is flagged in NOTES rather than here.
