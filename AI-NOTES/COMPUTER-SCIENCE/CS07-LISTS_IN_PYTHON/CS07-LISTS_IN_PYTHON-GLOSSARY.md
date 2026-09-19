# Computer Science | Chapter 07 | Lists in Python | GLOSSARY

**Branch:** Strings, Lists, Tuples & Dictionaries · **Level:** Class XI (CBSE / NCERT) · **Assumes:** Python 3.x

> [!info] How to use this file
> This is the **GLOSSARY** of the CS09-LISTS triad — fast, unambiguous lookup of one term, nothing else. It does not explain *why* anything is true (that's `CS09-LISTS-NOTES.md`) and it is not a test (that's `CS09-LISTS-CNOTES.md`). Every entry is audited to be self-contained: one to two sentences, no circular wording, and the one distinguishing fact for any term with a known confusable partner. Terms are alphabetical, not in chapter order. Each entry closes with a `§` pointing to the NOTES section that explains it in full.

---

**Aliasing** — What `list2 = list1` produces: `list2` becomes another *name* for the same list object (see `Reference`), not an independent copy, so an edit through either name shows up in both. Contrast with a genuine copy — slicing, `list()`, or `.copy()` — which builds a second, separate object. *§9.6*

**`append(item)`** — List method that adds exactly **one** element to the end of a list; if `item` is itself a list, it is added as a single nested element, not merged in. Contrast with `extend()`, which adds each element of its argument individually.
```python
[10,20].append([30,40])   #→ [10, 20, [30, 40]]
```
*§9.4*

**Bubble Sort** — A sorting technique that repeatedly compares *adjacent* elements and swaps them if out of order, so the largest remaining value "bubbles" to the end of the unsorted portion every pass — unlike Insertion Sort, which instead slides one new element backward into place each pass. Needs `N-1` passes for `N` elements. *§9.8.1*

**`clear()`** — List method that removes every element, leaving `[]`. Takes no arguments and returns no value. *§9.4.1*

**Comparison (of lists)** — Comparing two lists with `==`, `!=`, `<`, `>`, `<=`, `>=` proceeds element by element, left to right, stopping at the first pair that differs; ordering comparisons between incomparable element types raise `TypeError`, but `==`/`!=` between mismatched types simply return `False`/`True`. This is *value* comparison, distinct from `is` (identity — see `is`). *§9.2.5*

**Concatenation** — Joining two lists end to end with the `+` operator, producing a **new** list; both operands must be lists, or `TypeError` results.
```python
[1,2] + [3,4]   #→ [1, 2, 3, 4]
```
*§9.2.1*

**`copy()` / `copy.copy()`** — Two ways to make a genuinely independent **shallow** copy of a list: the list's own `.copy()` method, or `copy.copy()` from Python's `copy` module. Equivalent in effect to `list1[:]` or `list(list1)` — see `Shallow copy`. *§9.6*

**`count(item)`** — List method returning how many times `item` occurs in the list, matching whole values including tuples or nested sub-lists. Returns `0`, never an error, if `item` is absent. *§9.4*

**Deep copy** — A copy that duplicates *every* nested level of a list, so no inner list is shared with the original — produced by `copy.deepcopy()`, unlike the ordinary copying methods, which only make a **shallow** copy. Beyond this chapter's built-in methods, but worth knowing exists. *§9.6*

**`del` statement** — Removes an element (`del list[i]`) or a whole slice (`del list[a:b]`) from a list by **position**; unlike `pop()`, it returns nothing, and unlike `remove()`, it needs the position rather than the value. It is a statement, not a method — no parentheses attach to the list name — and raises `IndexError` for a bad single index, though out-of-range slice bounds are simply clipped. *§9.4.1*

**Element** — One individual value making up a list; a list's values are written comma-separated inside square brackets `[ ]`. *§9.1*

**`extend(iterable)`** — List method that appends **each** element of the given iterable individually to the end of the list. Contrast with `append()`, which would add the whole iterable as one nested item.
```python
[10,20].extend([30,40])   #→ [10, 20, 30, 40]
```
*§9.4*

**Hashable / Unhashable** — A value is *hashable* (usable as a dictionary key, or stored in a `set`) only if it is immutable; a list is **unhashable**, since it is mutable, so `{[1,2]: 'a'}` raises `TypeError: unhashable type: 'list'`. A tuple, being immutable, is hashable and works fine as a key instead. *§9.1.2*

**Heterogeneous** — Describes a list that holds values of more than one data type at once, e.g. `[100, 23.5, 'Hello']` — something a string cannot do, since a string only ever holds characters. *§9.1*

**`id()`** — Built-in function returning an object's identity (effectively, its memory address) as an integer. Used to show whether two names refer to the *same* list object (aliasing) or to two different ones. *§9.7*

**Index** — The position of an element within a list: `0` for the first element counting from the start (**positive index**), or `-1` for the last element counting from the end (**negative index**). *§9.1.1*

**`index(item)`** — List method returning the position of the **first** occurrence of `item` in the list. Raises `ValueError` if `item` is not present — the same failure mode as `remove()`, since both search by value rather than by position. *§9.4*

**`IndexError`** — The runtime error raised when an ordinary index (not a slice) falls outside the valid range `-len(list)` to `len(list)-1` — e.g. `list1[15]` on a 6-element list, `list1.pop(99)`, or `del list1[99]`. *§9.1.1, §9.4.1*

**Indexing** — Accessing a single element of a list by its position, `list_name[index]`; unlike slicing, an out-of-range index always raises `IndexError`. *§9.1.1*

**`insert(index, item)`** — List method that inserts `item` into the list immediately *before* position `index`, shifting later elements one place to the right. *§9.4*

**Insertion Sort** — A sorting technique that, starting from index `1`, slides each new element backward past any larger elements already to its left, until it reaches its correct position — unlike Bubble Sort, which instead compares and swaps fixed adjacent pairs on every pass. **Adaptive**: does less work the more nearly-sorted the input already is. *§9.8.2*

**`is`** — Identity operator: `a is b` is `True` only when `a` and `b` are names for the exact same object in memory (i.e. one is an alias of the other), not merely when they hold equal values. Contrast with `==` (see `Comparison`) — two independently-built lists with identical contents give `==` → `True` but `is` → `False`. *§9.6*

**`len()`** — Built-in function returning the number of elements in a list. A nested list counts as one element of its outer list, regardless of how many items it holds internally. *§9.4, §9.5*

**List** — A mutable, ordered, heterogeneous sequence of values, written inside square brackets `[ ]` and separated by commas, e.g. `[10, 'a', 23.5]`. *§9.1*

**`list()`** — Built-in function/constructor. Called with no argument, builds an empty list (`list()` → `[]`); called with a sequence (a string, another list, etc.), builds a list of that sequence's elements (`list('abc')` → `['a','b','c']`). *§9.1.3*

**List comprehension** — A compact way to build a new list from an existing sequence in one line, e.g. `S = [i for i in L if i%2==0]` to collect only the even numbers of `L`. Mentioned here only as a preview; covered in full in a later chapter. *(beyond §9)*

**Long list** — Informal term for a list with many elements, typically built from a pattern — e.g. the squares of `0` to `25` — rather than typed out one by one. Not a distinct syntax; such a list is created exactly like any other list literal. *§9.1*

**Membership operator** — `in` (`True` if an element is present in the list) and `not in` (`True` if it is absent). *§9.2.3*

**`min()` / `max()`** — Built-in functions returning the smallest / largest element of a list. For a list of strings, comparison is by ASCII value, character by character, left to right — the same rule used to compare two lists (see `Comparison`). *§9.4*

**Mutable / Mutability** — The property that lets a list's contents be *changed after creation* — assigning to an index, or calling a method like `append()` or `sort()`, modifies the list in place rather than building a new one. Strings and tuples, by contrast, are *immutable*. *§9.1.2*

**Negative index** — An index counted from the **end** of the list: `-1` is the last element, `-2` the second-last, and so on. *§9.1.1*

**Nested list** — A list that contains another list as one of its elements, e.g. `[1, 2, [6, 7, 8], 4]`. Reached with two indices, `list1[i][j]` — `i` selects the nested list, `j` selects an element inside it. *§9.5*

**Pass (in sorting)** — One complete sweep through the (unsorted portion of the) list during a sorting algorithm; both Bubble Sort and Insertion Sort need `N-1` passes to fully sort `N` elements. Not to be confused with Python's `pass` statement (a no-op placeholder), an unrelated keyword from control structures. *§9.8*

**`pop([index])`** — List method that removes **and returns** the element at `index` (default: the last element) — the one deletion method, among `pop()` / `del` / `remove()`, that gives back the removed value. Raises `IndexError` for an out-of-range index. *§9.4.1*

**Positive index** — An index counted from the **start** of the list, beginning at `0` for the first element. *§9.1.1*

**Reference** — What a variable name holding a list actually stores: a pointer to the list object in memory, not the list's data itself. Passing a list to a function, or writing `list2 = list1`, copies the *reference*, not the underlying list (see `Aliasing`). *§9.6, §9.7*

**`remove(item)`** — List method that deletes the list's **first** occurrence of `item`, found by *value* — unlike `pop()`/`del`, which need the *position*, not the value. Raises `ValueError` if `item` is not present anywhere in the list. *§9.4.1*

**Repetition** — Repeating a list's elements a given number of times with the `*` operator, producing a **new** list, e.g. `[1,2] * 3` → `[1, 2, 1, 2, 1, 2]`. Multiplying a list *by another list* is undefined and raises `TypeError`. *§9.2.2*

**`reverse()`** — List method that reverses the order of a list's elements **in place**. *§9.4*

**Shallow copy** — A copy that duplicates only the *outer* list, leaving any nested list inside it still shared with the original — produced by slicing (`list1[:]`), `list(list1)`, `.copy()`, or `copy.copy()`. Contrast with `Deep copy`, which duplicates every nested level too. *§9.6*

**Slice / Slicing** — Extracting a sub-list with `list[start:stop:step]` — `start` included, `stop` excluded, `step` (default `1`) the stride. Unlike plain indexing, an out-of-range `start` or `stop` is silently clipped rather than raising an error. *§9.2.4*

**`sort()`** — List method that sorts the list's elements **in place** (ascending by default; `reverse=True` for descending) and returns `None` — unlike `sorted()`, which returns a new list instead. *§9.4*

**`sorted()`** — Built-in function that returns a **new**, sorted list built from the given list (or other iterable) — unlike `.sort()`, the original list is left completely unchanged. *§9.4*

**`sum()`** — Built-in function returning the total of a list's numeric elements. *§9.4*

**Swap** — Exchanging the positions of two elements, e.g. `a[j], a[j+1] = a[j+1], a[j]` — the core operation inside both Bubble Sort and Insertion Sort. *§9.8*

**Traversal** — Visiting every element of a list in turn, typically with `for item in list1:`, `for i in range(len(list1)):`, or a `while` loop. Deleting an element while traversing by index shifts every later element back by one, and can make a naive loop skip elements unless the loop counter is deliberately compensated. *§9.3, §9.4.1*

**`TypeError`** — The runtime error raised when an operation is applied to incompatible types — e.g. concatenating a list with a string, multiplying a list by another list, or ordering-comparing (`<`, `>`) elements of genuinely incomparable types. Distinct from `IndexError` (bad position) and `ValueError` (right type, value not found). *§9.2.1, §9.2.2, §9.2.5*

**`ValueError`** — The runtime error raised when a value-based operation cannot find what it is looking for — e.g. `list1.index(item)` or `list1.remove(item)` when `item` is not actually present in the list. Distinct from `IndexError`, which fires on a bad *position* rather than a missing *value*. *§9.4*