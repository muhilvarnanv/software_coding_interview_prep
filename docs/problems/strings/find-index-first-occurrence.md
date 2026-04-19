# Find the index of the first occurrence in a string

**Topic:** [Strings](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

Given strings `haystack` and `needle`, return the **lowest** index in `haystack` where `needle` occurs as a contiguous substring, or `-1` if it never occurs. If `needle` is empty, return `0` (common convention).

## Examples

**Example 1**

- Input: `haystack = "sadbutsad"`, `needle = "sad"`
- Output: `0`
- Explanation: `"sad"` starts at index `0`.

**Example 2**

- Input: `haystack = "leetcode"`, `needle = "leeto"`
- Output: `-1`
- Explanation: `"leeto"` never appears as a contiguous substring inside `leetcode`.

## Approach (beginner friendly)

Try each start index `i` where a match could fit (`i + len(needle) <= len(haystack)`). Compare the slice to `needle`. This is the simple `O(n * m)` interview baseline; mention KMP only if the interviewer pushes for linear time.

## Solution (Python)

```python
def str_str(haystack: str, needle: str) -> int:
    if not needle:
        return 0
    n, m = len(haystack), len(needle)
    for i in range(n - m + 1):
        if haystack[i : i + m] == needle:
            return i
    return -1


assert str_str("sadbutsad", "sad") == 0
assert str_str("leetcode", "leeto") == -1
```

## Complexity

- **Time:** `O(n * m)` in the worst case for this version.
- **Space:** `O(1)`.
