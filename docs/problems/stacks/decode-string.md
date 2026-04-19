# Decode string

**Topic:** [Stacks](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

An encoded string uses patterns `k[encoded_string]` meaning repeat the inner string `k` times. Decode fully (digits are `0-9`, brackets balanced).

## Examples

**Example 1**

- Input: `"3[a]2[bc]"`
- Output: `"aaabcbc"`
- Explanation: `a` repeats `3` times → `aaa`; `bc` repeats `2` times → `bcbc`; concatenate.

**Example 2**

- Input: `"3[a2[c]]"`
- Output: `"accaccacc"`
- Explanation: Inner `a2[c]` expands to `acc`; that whole block repeats three times.

## Approach (beginner friendly)

Scan with a stack of `(prefix_string, repeat_count)`. On `[`, push current string and number; on `]`, pop and append `count * built_inner`.

## Solution (Python)

```python
def decode_string(s: str) -> str:
    stack: list[tuple[str, int]] = []
    cur = ""
    num = 0
    for ch in s:
        if ch.isdigit():
            num = num * 10 + int(ch)
        elif ch == "[":
            stack.append((cur, num))
            cur, num = "", 0
        elif ch == "]":
            prev, k = stack.pop()
            cur = prev + k * cur
        else:
            cur += ch
    return cur


assert decode_string("3[a]2[bc]") == "aaabcbc"
assert decode_string("3[a2[c]]") == "accaccacc"
```

## Complexity

- **Time:** `O(output length)` in the expanded string size.
- **Space:** `O(n)` for the stack and builders.
