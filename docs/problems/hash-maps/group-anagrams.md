# Group anagrams

**Topic:** [Hash maps](index.md) · **Pattern:** [Frequency maps](../../hash-tables/frequency-maps.md)

## Problem

Given a list of strings, **group** words that are anagrams of each other. Order of groups and words inside a group does not matter.

## Examples

**Example 1**

- Input: `["eat", "tea", "tan", "ate", "nat", "bat"]`
- Output: `[["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]` (grouping equivalent)
- Explanation: Same letters ⇒ same group: `eat`, `tea`, `ate` share `a,e,t`; `tan` and `nat` share `a,n,t`; `bat` is alone.

**Example 2**

- Input: `[""]`
- Output: `[[""]]`
- Explanation: One empty string forms a single group.

## Approach (beginner friendly)

Use a **canonical key** per word: sorted letters (simple) or a tuple of 26 counts (faster for long words). Bucket words by that key in a dictionary.

## Solution (Python)

```python
from collections import defaultdict


def group_anagrams(strs: list[str]) -> list[list[str]]:
    buckets: defaultdict[str, list[str]] = defaultdict(list)
    for w in strs:
        buckets["".join(sorted(w))].append(w)
    return list(buckets.values())


out = group_anagrams(["eat", "tea", "tan", "ate", "nat", "bat"])
assert {tuple(sorted(g)) for g in out} == {
    ("bat",),
    ("nat", "tan"),
    ("ate", "eat", "tea"),
}
assert group_anagrams([""]) == [[""]]
```

## Complexity

- **Time:** `O(n * k log k)` if sorting each word of length `k`; count-key is `O(n * k)`.
- **Space:** `O(n * k)` for keys and output.
