# Shortest distance to a character

**Topic:** [Two-pass problems](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Given a string `s` and a character `c` that occurs in `s`, return an integer array `answer` of the same length where `answer[i]` is the **distance** from index `i` to the **closest** occurrence of `c` in `s`.

The distance between indices `i` and `j` is `abs(i - j)`.

## Examples

**Example 1**

- `s = "loveleetcode"`, `c = "e"`
- Output: `[3, 2, 0, 1, 0, 0, 1, 2, 2, 1, 0]`

**Example 2**

- `s = "aaab"`, `c = "b"`
- Output: `[3, 2, 1, 0]`

## Approach (beginner friendly)

From a single index `i`, the closest `c` could be **on the left** or **on the right**. One left-to-right scan only knows about **past** matches, not future ones—so you add a **second pass** right-to-left and take the **minimum** of the two candidate distances.

**Pass 1 (left → right):** keep the index of the latest seen `c` and set `answer[i] = i - last_c` (use a sentinel “far left” before any `c` appears so early indices still get a finite placeholder; the second pass fixes them).

**Pass 2 (right → left):** track the next `c` to the right and set `answer[i] = min(answer[i], next_c - i)`.

This is a clean **two-pass** template (not the same trick as a single **two-pointer** partition on one array).

## Solution (Python)

```python
def shortest_to_char(s: str, c: str) -> list[int]:
    n = len(s)
    answer = [0] * n

    prev = -10**9
    for i in range(n):
        if s[i] == c:
            prev = i
        answer[i] = i - prev

    prev = 10**9
    for i in range(n - 1, -1, -1):
        if s[i] == c:
            prev = i
        answer[i] = min(answer[i], prev - i)

    return answer


assert shortest_to_char("loveleetcode", "e") == [3, 2, 0, 1, 0, 0, 1, 2, 2, 1, 0]
assert shortest_to_char("aaab", "b") == [3, 2, 1, 0]
```

## Complexity

- **Time:** `O(n)` — two full scans of the string.
- **Space:** `O(1)` extra besides the output array (only a few index variables).
