# Valid parentheses

**Topic:** [Stacks](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Given a string of `(`, `)`, `{`, `}`, `[` and `]`, return whether every bracket is **matched** and **nested** correctly.

## Examples

**Example 1**

- Input: `"()"`
- Output: `True`
- Explanation: One pair closes immediately in the right order.

**Example 2**

- Input: `"(]"`
- Output: `False`
- Explanation: `(` expects `)`, but `]` appears, so the string is invalid.

## Approach (beginner friendly)

Use a **stack** of expected closing characters. On an opener, push the matching closer. On a closer, pop and check it matches.

## Solution (Python)

```python
def is_valid(s: str) -> bool:
    stack: list[str] = []
    pair = {")": "(", "}": "{", "]": "["}
    for ch in s:
        if ch in "({[":
            stack.append(ch)
        else:
            if not stack or stack[-1] != pair[ch]:
                return False
            stack.pop()
    return not stack


assert is_valid("()") is True
assert is_valid("(]") is False
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(n)` for the stack.
