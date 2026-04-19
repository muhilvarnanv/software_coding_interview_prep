# Valid anagram

**Topic:** [Two-pass problems](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Given two strings `s` and `t`, return `True` if `t` is an **anagram** of `s` (same multiset of characters with the same frequencies), else `False`.

Assume lowercase English letters unless your interviewer says otherwise.

## Examples

**Example 1**

- `s = "anagram"`, `t = "nagaram"` → `True`
- Explanation: Both strings use the same letters the same number of times (three `a`s, two `n`s, one `g`, one `r`, one `m`), just in a different order.

**Example 2**

- `s = "rat"`, `t = "car"` → `False`
- Explanation: `rat` has one `t`, but `car` has one `c` instead, so the letter counts do not match.

## Approach (beginner friendly)

**Pass 1:** count letters in `s` (increment buckets in a plain dict or a `Counter`).

**Pass 2:** walk `t` and decrement buckets. If a character is missing from the map, or any bucket goes **negative**, `t` cannot match `s`. With equal lengths, finishing pass 2 without failure means every count is **zero** (you do not need an extra “all zero” scan unless you prefer it for clarity).

Sorting both strings also works (`O(n log n)`), but the **two-pass counting** template is linear time.

## Solution (Python)

### Explicit dictionary (two passes)

```python
def is_anagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False

    freq: dict[str, int] = {}
    for ch in s:
        freq[ch] = freq.get(ch, 0) + 1

    for ch in t:
        if ch not in freq:
            return False
        freq[ch] -= 1
        if freq[ch] < 0:
            return False

    return True


assert is_anagram("anagram", "nagaram") is True
assert is_anagram("rat", "car") is False
```

The same assertions hold for the `Counter` versions below (identical behavior).

### `collections.Counter` (shorter abstraction)

Same multiset check, expressed as “count `s`, count `t`, compare”:

```python
from collections import Counter


def is_anagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    return Counter(s) == Counter(t)
```

### Previous variant: `Counter` + decrement on `t` + `all(...)`

This is the same decrement idea as the dict version, but starts from `Counter(s)` and ends with an explicit “every bucket zero” check (redundant when lengths are equal and the loop completes, but some readers like the explicit invariant):

```python
from collections import Counter


def is_anagram(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    counts = Counter(s)
    for ch in t:
        counts[ch] -= 1
        if counts[ch] < 0:
            return False
    return all(v == 0 for v in counts.values())
```

## Complexity

- **Time:** `O(n)` over the lengths.
- **Space:** `O(1)` if alphabet is bounded (26 buckets), else `O(unique)`.
