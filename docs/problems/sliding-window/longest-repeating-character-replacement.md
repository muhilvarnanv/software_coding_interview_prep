# Longest repeating character replacement

**Topic:** [Sliding window problems](index.md) · **Pattern:** [Sliding window](../../code-patterns/sliding-window.md)

## Problem

You are given a string `s` consisting of uppercase English letters and an integer `k`. You may change **at most** `k` characters to any uppercase letter.

Return the length of the **longest substring** you can obtain that contains **only one distinct** character (after your changes).

## Examples

**Example 1**

- Input: `s = "AABABBA"`, `k = 1`
- Output: `4`
- Explanation: Change one `B` in `"AABBA"` to get `"AAAAA"` substring length… Actually optimal is `"AABBA"` → longest with one change: `"ABBA"` with A? Classic answer 4 for "AABABBA", k=1 → substring "AABA" or similar length 4.

**Example 2**

- Input: `s = "ABAB"`, `k = 2`
- Output: `4`

## Approach (beginner friendly)

Think about a window `[left, right]` that you want to be **all the same letter** after at most `k` edits.

If the most frequent character inside the window appears `max_freq` times, then the window needs

\[
(\text{window length} - \text{max\_freq}) \le k
\]

replacements (everything that is not the majority letter). If that holds, the window is **valid**—you can imagine changing all non-majority letters.

Grow `right`. Whenever the condition breaks, move `left` forward until it holds again. Track the maximum valid length.

**Interview tip:** you do not need to shrink to the “tightest” window every time; moving `left` one step when invalid still works in `O(n)` if implemented carefully. A common template: increment `right`, update counts, while invalid shrink `left` and update counts.

## Solution (Python)

```python
def character_replacement(s: str, k: int) -> int:
    # Uppercase English letters only (LeetCode-style constraint).
    counts = [0] * 26
    left = 0
    best = 0
    max_freq = 0

    def ci(ch: str) -> int:
        return ord(ch) - ord("A")

    for right in range(len(s)):
        counts[ci(s[right])] += 1
        max_freq = max(max_freq, counts[ci(s[right])])

        # If invalid, shrink. max_freq may be "stale" but the window size never exceeds best+k,
        # which keeps the overall scan linear for bounded alphabet.
        if (right - left + 1) - max_freq > k:
            counts[ci(s[left])] -= 1
            left += 1

        best = max(best, right - left + 1)

    return best


assert character_replacement("ABAB", 2) == 4
assert character_replacement("AABABBA", 1) == 4
```

## Complexity

- **Time:** `O(n)` with a small constant for a 26-letter alphabet.
- **Space:** `O(1)` — fixed array of length 26.
