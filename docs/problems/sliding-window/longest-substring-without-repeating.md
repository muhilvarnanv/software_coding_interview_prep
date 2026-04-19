# Longest substring without repeating characters

**Topic:** [Sliding window problems](index.md) · **Pattern:** [Sliding window](../../code-patterns/sliding-window.md)

## Problem

Given a string `s`, return the length of the **longest substring** that contains **no repeated** characters.

## Examples

**Example 1**

- Input: `s = "abcabcbb"`
- Output: `3`
- Explanation: `"abc"` is one longest substring without repeats.

**Example 2**

- Input: `s = "bbbbb"`
- Output: `1`
- Explanation: Every substring longer than one `b` would repeat `b`, so the best you can do is a single character, length `1`.

**Example 3**

- Input: `s = "pwwkew"`
- Output: `3`
- Explanation: `"wke"` (not `"pwke"` because that is a subsequence with a gap).

## Approach (beginner friendly)

Use a **variable-size window** `[left, right]` that always holds a substring with **unique** characters.

- Expand `right` one character at a time.
- If the new character **already exists inside** the window, move `left` **just past** the previous occurrence so the duplicate disappears.

Track the maximum window size you ever see. A dictionary stores **each character → last index** where you saw it (fast lookup and jump for `left`).

## Solution (Python)

```python
def length_of_longest_substring(s: str) -> int:
    last_index: dict[str, int] = {}
    left = 0
    best = 0

    for right, ch in enumerate(s):
        if ch in last_index and last_index[ch] >= left:
            left = last_index[ch] + 1
        last_index[ch] = right
        best = max(best, right - left + 1)

    return best


assert length_of_longest_substring("abcabcbb") == 3
assert length_of_longest_substring("bbbbb") == 1
assert length_of_longest_substring("pwwkew") == 3
```

## Complexity

- **Time:** `O(n)` — each index is visited by `right` once; `left` only moves forward.
- **Space:** `O(min(n, alphabet))` — at most one entry per distinct character in the window.
