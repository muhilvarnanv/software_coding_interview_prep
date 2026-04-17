# Longest repeating character replacement

**Topic:** [Sliding window problems](index.md) · **Pattern:** [Sliding window](../../code-patterns/sliding-window.md)

## Problem

You are given a string `s` consisting of uppercase English letters and an integer `k`. You may change **at most** `k` characters to any uppercase letter.

Return the length of the **longest substring** you can obtain that contains **only one distinct** character (after your changes).

## Examples

**Example 1**

- Input: `s = "AABABBA"`, `k = 1`
- Output: `4`
- Explanation: One substring of length 4 is `"AABA"` (change the middle `B` to `A`).

**Example 2**

- Input: `s = "ABAB"`, `k = 2`
- Output: `4`

## Approach (beginner friendly)

Think about a window `[left, right]` that you want to be **all the same letter** after at most `k` edits.

If the most frequent character inside the window appears `max_freq` times, then the window needs

\[
(\text{window length} - \text{max\_freq}) \le k
\]

replacements (everything that is not the majority letter). If that holds, the window is **valid**.

Grow `right` each step. When the inequality fails, advance `left` once and drop `s[left]` from the counts. Track the maximum window length.

**Interview notes**

- `max_freq` does **not** have to decrease when you shrink; it can be a **stale** upper bound. That is fine: you never falsely accept an invalid window, and the algorithm stays linear.
- A frequency **dict** works for any alphabet; a length-26 array is a common micro-optimization when `s` is uppercase `A`–`Z` only.

## Solution (Python)

```python
def characterReplacement(s: str, k: int) -> int:
    count = {}
    left = 0
    max_freq = 0
    res = 0

    for right in range(len(s)):
        # Step 1: include current char
        count[s[right]] = count.get(s[right], 0) + 1

        # Step 2: update max frequency
        max_freq = max(max_freq, count[s[right]])

        # Step 3: check if window is invalid
        if (right - left + 1) - max_freq > k:
            count[s[left]] -= 1
            left += 1

        # Step 4: update result
        res = max(res, right - left + 1)

    return res


assert characterReplacement("ABAB", 2) == 4
assert characterReplacement("AABABBA", 1) == 4
```

## Complexity

- **Time:** `O(n)` — `right` and `left` each move at most `n` steps.
- **Space:** `O(min(n, |\Sigma|))` for the frequency map (at most one entry per distinct character in the window; for uppercase English letters, `O(26)` which is `O(1)` extra).
