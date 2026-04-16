# Find all anagrams in a string

**Topic:** [Sliding window problems](index.md) · **Pattern:** [Sliding window](../../code-patterns/sliding-window.md)

## Problem

Given two strings `s` and `p`, return **all start indices** in `s` where an **anagram** of `p` begins. An anagram is a permutation of the same multiset of characters.

Return indices in **any order** (sorted ascending is fine).

## Examples

**Example 1**

- Input: `s = "cbaebabacd"`, `p = "abc"`
- Output: `[0, 6]`
- Explanation: Anagrams of `"abc"` start at index `0` (`"cba"`) and index `6` (`"bac"`).

**Example 2**

- Input: `s = "abab"`, `p = "ab"`
- Output: `[0, 1, 2]`

## Approach (beginner friendly)

`p` has fixed length `m`. Any anagram of `p` inside `s` must sit inside a **window of length exactly `m`**.

Compare **character counts**:

1. Count letters in `p` → `need`.
2. Slide a window of length `m` along `s`, maintaining counts of the current window → `window`.
3. Whenever `window == need`, record the start index.

Updating counts when the window slides by one: **remove** the char leaving the left edge, **add** the char entering the right edge — **O(1)** per step.

## Solution (Python)

```python
from collections import Counter


def find_anagrams(s: str, p: str) -> list[int]:
    m, n = len(p), len(s)
    if m > n:
        return []

    need = Counter(p)
    window = Counter(s[:m])
    out: list[int] = []

    if window == need:
        out.append(0)

    for right in range(m, n):
        left_char = s[right - m]
        right_char = s[right]

        window[right_char] = window.get(right_char, 0) + 1

        window[left_char] -= 1
        if window[left_char] == 0:
            del window[left_char]

        if window == need:
            out.append(right - m + 1)

    return out


assert find_anagrams("cbaebabacd", "abc") == [0, 6]
assert find_anagrams("abab", "ab") == [0, 1, 2]
```

**Note:** For production or very long strings, compare counts with a “how many letters match” counter instead of full `Counter` equality each time; for interviews, `Counter` equality is often acceptable if you mention the optimization.

## Complexity

- **Time:** `O(n)` over `s` with alphabet-sized comparisons if optimized; `Counter` compare adds overhead but still linear in practice for small alphabets.
- **Space:** `O(1)` for bounded alphabet (store at most 26–52 counters).
