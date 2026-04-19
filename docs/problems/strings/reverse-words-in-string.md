# Reverse words in a string

**Topic:** [Strings](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

Given a string `s`, return the words in **reverse order**, single spaces between words, **no** leading or trailing spaces. Words are maximal substrings without space.

## Examples

**Example 1**

- Input: `s = "the sky is blue"`
- Output: `"blue is sky the"`
- Explanation: Word order flips; spaces stay single between words.

**Example 2**

- Input: `s = "  hello world  "`
- Output: `"world hello"`
- Explanation: Extra spaces on the ends are removed; only the two words remain, reversed.

## Approach (beginner friendly)

`split()` without arguments splits on any run of whitespace and drops empties. Reverse the list and `join` with a single space.

## Solution (Python)

```python
def reverse_words(s: str) -> str:
    return " ".join(s.split()[::-1])


assert reverse_words("the sky is blue") == "blue is sky the"
assert reverse_words("  hello world  ") == "world hello"
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(n)` for the list of words (output size).
