# Longest common prefix

**Topic:** [Strings](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

Given an array of strings, return the longest prefix that appears at the **start** of **every** string. If none, return `""`.

## Examples

**Example 1**

- Input: `["flower", "flow", "flight"]`
- Output: `"fl"`
- Explanation: First letters are all `f`, next letters are all `l`; the third letters differ (`o` vs `i`), so the shared prefix stops at length `2`.

**Example 2**

- Input: `["dog", "racecar", "car"]`
- Output: `""`
- Explanation: First characters already disagree (`d` vs `r` vs `c`), so the longest common prefix is empty.

## Approach (beginner friendly)

Use the first string as a template. For each position `i`, check that every other string has the same character at `i`. Stop at the first mismatch or when any string ends.

## Solution (Python)

```python
def longest_common_prefix(strs: list[str]) -> str:
    if not strs:
        return ""
    base = strs[0]
    for i, ch in enumerate(base):
        for w in strs[1:]:
            if i == len(w) or w[i] != ch:
                return base[:i]
    return base


assert longest_common_prefix(["flower", "flow", "flight"]) == "fl"
assert longest_common_prefix(["dog", "racecar", "car"]) == ""
```

## Complexity

- **Time:** `O(n * m)` where `m` is max length, `n` is number of strings.
- **Space:** `O(1)` extra besides the output slice.
