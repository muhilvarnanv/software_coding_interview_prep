# Valid anagram

**Topic:** [Two-pass problems](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Given two strings `s` and `t`, return `True` if `t` is an **anagram** of `s` (same multiset of characters with the same frequencies), else `False`.

Assume lowercase English letters unless your interviewer says otherwise.

## Examples

**Example 1**

- `s = "anagram"`, `t = "nagaram"` → `True`

**Example 2**

- `s = "rat"`, `t = "car"` → `False`

## Approach (beginner friendly)

**Pass 1:** count letters in `s` (increment buckets).

**Pass 2:** walk `t` and decrement buckets. If any bucket goes negative, `t` has an extra letter. Afterward, all buckets must be zero.

Sorting both strings also works (`O(n log n)`), but the **two-pass counting** template is linear time.

## Solution (Python)

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


assert is_anagram("anagram", "nagaram") is True
assert is_anagram("rat", "car") is False
```

## Complexity

- **Time:** `O(n)` over the lengths.
- **Space:** `O(1)` if alphabet is bounded (26 buckets), else `O(unique)`.
