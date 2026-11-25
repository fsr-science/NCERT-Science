# Computer Science | Chapter 08 | Tuples and Dictionary | GLOSSARY

**Branch:** Strings, Lists, Tuples & Dictionaries · **Level:** Class XI (CBSE) · **Assumes:** Python 3.x

> [!info] How to use this file
> This is the **GLOSSARY** of the CS08-TUPLES_AND_DICTIONARY triad — fast, unambiguous lookup of one term, nothing else. It does not explain *why* anything is true (that's `CS08-TUPLES_AND_DICTIONARY-NOTES.md`) and it is not a revision read (that's `CS08-TUPLES_AND_DICTIONARY-CNOTES.md`). Every entry is audited to be self-contained: one to two sentences, no circular wording, and the one distinguishing fact for any term with a known confusable partner. Terms are alphabetical, not in chapter order. Each entry closes with a `§` pointing to the NOTES section that explains it in full; where the textbook's own wording is wrong or imprecise, the entry gives the corrected version and `§10.16` lists the discrepancy. Terms already defined in CS07 (`List`, `Index`, `Slice`, `Shallow copy`, `Deep copy`, `Reference`) keep those definitions here.

---

**Alias (dictionary)** — What `d2 = d1` produces: `d2` becomes another *name* for the same dictionary object, not a copy, so a change through either name shows in both. Contrast with `copy()` / `dict(d1)`, which build a second, separate dictionary. *§10.14.1*

**`any()`** — Built-in function returning `True` if **at least one element is true-valued** (not `0`, `0.0`, `''`, `None`, `False` or empty), and `False` for an empty tuple; `any((0,))` is `False`. It is *not* a test for "has at least one item" (a textbook misstatement). *§10.5, §10.16*

**`clear()`** — Dictionary method that removes every item, leaving `{}`; the dictionary still exists. Unlike `del d`, which removes the *name* itself. *§10.12*

**Concatenation (tuple)** — Joining two tuples end to end with `+`, producing a **new** tuple; both operands must be tuples, or `TypeError` results.
```python
(1,2) + (3,)   #→ (1, 2, 3)
```
*§10.4.2*

**Comparison (of tuples)** — Comparing two tuples with `<`, `>`, `==`, `!=`, `<=`, `>=` proceeds element by element, left to right, and stops at the **first pair that differs**; a tuple that is a prefix of another is the smaller. Ordering comparisons between incomparable element types raise `TypeError`, but `==` between mismatched types is just `False`. *§10.4.5*

**`copy()` (dictionary)** — Dictionary method returning a new, independent **shallow** copy: only the outer dictionary is duplicated, so a mutable value inside (a list) stays shared. Contrast with alias (`d2 = d1`), which copies nothing. *§10.14.1*

**`count()` (tuple)** — Tuple method returning how many times a value occurs in the tuple; returns `0`, never an error, if the value is absent. One of only two tuple methods, the other being `index()`. *§10.5*

**`del` (on a tuple or dictionary)** — Statement, not a method. `del t` removes a whole tuple (its name vanishes, so later use raises `NameError`); `del d[key]` removes one dictionary item by key and returns nothing. A tuple's individual elements can never be deleted. *§10.7, §10.12*

**Dictionary** — A mutable collection of **key-value pairs** written in curly braces `{ }`, reached by key rather than by position; keys are unique and hashable, values may be of any type and may repeat. The textbook calls it "unordered"; since Python 3.7 it keeps insertion order, but it is not a sequence. *§10.9*

**`dict()`** — Built-in constructor. `dict()` builds an empty dictionary; `dict(d)` builds a shallow copy of `d`; `dict([[k, v], …])` builds one from a list of pairs. *§10.9.1*

**Element (tuple)** — One individual value making up a tuple; a tuple's elements are comma-separated, usually inside parentheses `( )`. *§10.1*

**`fromkeys()`** — Method (called as `dict.fromkeys(keys, value)`) that builds a **new** dictionary from a collection of keys, giving every key the same `value` (`None` if omitted). It does not edit an existing dictionary, and a mutable `value` such as `[]` is shared by all keys. *§10.14, §10.16*

**`get()`** — Dictionary method `d.get(key, default)` returning the value for `key`, or `default` (`None` if omitted) when `key` is absent; it never raises `KeyError` and never inserts. Contrast with `d[key]` (raises) and `setdefault()` (inserts). *§10.14*

**Hashable / Unhashable** — A value is *hashable* (usable as a dictionary key) only if it is immutable all the way down: numbers, strings, and tuples whose elements are all hashable. A list is **unhashable**, and so is a tuple that contains one — `{(1,[2]): 'a'}` raises `TypeError: unhashable type: 'list'`. *§10.9*

**Heterogeneous** — Describes a tuple (or list) holding values of more than one data type at once, e.g. `('hello', 1, 6.5)`. *§10.1*

**Immutable** — Cannot be changed in place after creation. A tuple's slots cannot be reassigned, though a mutable object *held inside* the tuple (a list) can still be modified. Contrast with mutable (list, dictionary). *§10.1.1*

**`in` / `not in` (tuple, dictionary)** — Membership operators returning a bool. On a tuple they test whether an **element** is present; on a dictionary they test **keys** only, never values. *§10.4.4, §10.13*

**`index()` (tuple)** — Tuple method `t.index(value[, start[, end]])` returning the position of the **first** occurrence of `value`. Raises `ValueError` if `value` is absent. *§10.5*

**`items()`** — Dictionary method returning a **view** of the `(key, value)` tuples; each pass of `for k, v in d.items()` unpacks one pair. Not a list, despite the textbook's wording. *§10.13, §10.14*

**Item (dictionary)** — One key-value pair of a dictionary. The same thing as a *key-value pair*. *§10.9*

**Key** — The unique, hashable label by which a value is stored and found in a dictionary; keys are case-sensitive, and equal keys (`1`, `1.0`, `True`) count as the same key. *§10.9*

**Key-value pair** — One association in a dictionary, written `key: value`, in which the key identifies the value. *§10.9*

**`KeyError`** — The runtime error raised when a dictionary is asked for a key it does not hold — `d['Aman']`, `del d['fri']`, `d.pop('x')`, or `popitem()` on an empty dictionary. Distinct from `IndexError` (bad position) and `ValueError` (value not found). *§10.10, §10.12*

**`keys()`** — Dictionary method returning a **view** of the keys; the view follows later changes to the dictionary. Wrap in `list(...)` for a real list. *§10.14*

**`len()`** — Built-in function returning the number of elements of a tuple, or the number of key-value pairs of a dictionary. A nested tuple counts as one element. *§10.5, §10.14*

**Mapping** — A structure that associates each key with one value; a Python dictionary is the mapping type. Contrast with a sequence (tuple, list, string), which is addressed by integer position. *§10.9*

**`max()` / `min()`** — Built-in functions returning the largest / smallest element. On a tuple the elements must be mutually comparable (`int` with `float` is fine, `str` with `int` is a `TypeError`); on a dictionary they work on the **keys**, so `max(d)` is the largest key, not the key with the largest value (that is `max(d, key=d.get)`). *§10.5, §10.14*

**Nested tuple** — A tuple that contains another tuple as one of its elements, e.g. `((0,1,2,3), ('python','book'))`; the inner tuples are **not** merged into the outer. Reached with two indices, `t[i][j]`. *§10.2*

**Packing** — Forming a tuple from individual values, e.g. `t = 10, 5, 2`. The reverse of unpacking. *§10.6*

**`pop()` (dictionary)** — Dictionary method `d.pop(key[, default])` that removes `key` and **returns its value**; raises `KeyError` for a missing key unless a default is given. Contrast with `popitem()`, which returns a `(key, value)` tuple. *§10.12*

**`popitem()`** — Dictionary method that removes and returns the **last-inserted** `(key, value)` pair as a tuple; raises `KeyError` on an empty dictionary. *§10.14*

**Repetition (tuple)** — Repeating a tuple's elements with `*` and an integer, producing a **new** tuple; tuple × tuple raises `TypeError`.
```python
(1,2) * 2   #→ (1, 2, 1, 2)
```
*§10.4.3*

**`setdefault()`** — Dictionary method `d.setdefault(key[, default])` returning the value of `key`; if `key` is absent it first **inserts** it with `default` (`None` if omitted). Contrast with `get()`, which never inserts. *§10.14*

**Singleton tuple** — A tuple with exactly one element, which must be written with a trailing comma: `(70,)`. Without it, `(70)` is just an integer and `('a')` is a string. *§10.1.2*

**Slice (tuple)** — A sub-tuple extracted with `t[start:stop:step]` — `start` included, `stop` excluded, `step` defaulting to `1`; a slice is always a tuple, and out-of-range bounds are clipped rather than raising `IndexError`. *§10.4.1*

**`sorted()`** — Built-in function returning a **new list**, sorted, from a tuple or from a dictionary's keys; the original tuple or dictionary is unchanged. Unlike `list.sort()`, which sorts a list in place. *§10.5, §10.14*

**`sum()`** — Built-in function returning the total of numeric elements of a tuple; on a dictionary it adds the **keys**. *§10.5*

**`TypeError`** — The runtime error raised when an operation meets an unsuitable type — e.g. `tuple + int`, `tuple * tuple`, item assignment on a tuple, `max` on mixed `str` and `int`, or an unhashable dictionary key. *§10.1.1, §10.4.2*

**Traversal** — Visiting every element of a tuple, or every key of a dictionary, once, typically with `for item in t:`, `for i in range(len(t)):` or `for k in d:`. *§10.3, §10.13*

**Tuple** — An immutable, ordered, heterogeneous sequence of comma-separated values, usually written in parentheses `( )`, e.g. `('Mango', 'Apple')`. Differs from a list in that its elements cannot be added, removed or replaced; it can be a dictionary key (if its elements are hashable), a list cannot. *§10.1*

**`tuple()`** — Built-in constructor. `tuple()` builds an empty tuple; `tuple(seq)` builds a tuple of a sequence's elements (`tuple('abc')` → `('a','b','c')`). `tuple(10)` is a `TypeError`. *§10.1.2*

**Tuple assignment** — Assigning several values to several names in one statement, e.g. `a, b = b, a`; the right-hand side is packed first, then unpacked, so the number of names must equal the number of values. *§10.6*

**Tuple display** — The textbook's name for writing a tuple out explicitly in parentheses, e.g. `tup1 = ('compsc', 2017)`. *§10.1.2*

**Unpacking** — Assigning each element of a tuple to its **own** separate variable, e.g. `x, y, z = (10, 5, 2)`; a count mismatch raises `ValueError`. The reverse of packing. *§10.6*

**`update()`** — Dictionary method `d1.update(d2)` that merges `d2` into `d1`: keys only in `d2` are added, keys in both take `d2`'s value, `d2` is unchanged, and `None` is returned. *§10.11*

**Value** — The data a dictionary key points to; unlike a key, a value may be of any type and may repeat. *§10.9*

**`ValueError`** — The runtime error raised when an operation gets the right type but an unsuitable value — `t.index(x)` for an absent `x`, or tuple unpacking with a mismatched count. Distinct from `KeyError` (missing dictionary key). *§10.5, §10.6*

**`values()`** — Dictionary method returning a **view** of the values (use `x in d.values()` to search values, since `in d` tests keys). *§10.13, §10.14*

**View object** — The live, read-only object returned by `keys()`, `values()` and `items()` (`dict_keys`, `dict_values`, `dict_items`); it reflects later changes to the dictionary and is not a list. *§10.14*
