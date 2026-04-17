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

1. Count letters in `p` → `p_count`.
2. Walk `s` with `right`, growing `window` with `Counter`.
3. When the window is longer than `m`, shrink from the **left**: decrement (and drop zero counts) until the window has length `m` again.
4. Whenever `window == p_count`, append `left` (the window’s start index).

Each step only **adds** one character on the right and sometimes **removes** one on the left — **O(1)** amortized per index.

## Solution (Python)

```python
from collections import Counter


def find_anagrams(s: str, p: str) -> list[int]:
    if len(p) > len(s):
        return []

    p_count = Counter(p)
    window = Counter()

    result: list[int] = []
    left = 0

    for right in range(len(s)):
        # expand window
        window[s[right]] += 1

        # keep window size == len(p)
        if right - left + 1 > len(p):
            window[s[left]] -= 1
            if window[s[left]] == 0:
                del window[s[left]]
            left += 1

        # check match
        if window == p_count:
            result.append(left)

    return result


assert find_anagrams("cbaebabacd", "abc") == [0, 6]
assert find_anagrams("abab", "ab") == [0, 1, 2]
```

**Note:** For production or very long strings, compare counts with a “how many letters match” counter instead of full `Counter` equality each time; for interviews, `Counter` equality is often acceptable if you mention the optimization.

## Complexity

- **Time:** `O(n)` over `s` with alphabet-sized comparisons if optimized; `Counter` compare adds overhead but still linear in practice for small alphabets.
- **Space:** `O(1)` for bounded alphabet (store at most 26–52 counters).
