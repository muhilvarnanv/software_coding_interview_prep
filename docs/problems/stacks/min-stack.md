# Min stack

**Topic:** [Stacks](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Design a stack supporting `push`, `pop`, `top`, and retrieving the **minimum** element—all in amortized `O(1)` time.

## Examples

**Example 1**

- Push `[-2, 0, -3]`, get min → `-3`, pop, get min → `0`
- Explanation: After pushing `-3`, it is the smallest. Popping removes `-3`, so the smallest remaining is `0`.

**Example 2**

- Push `[5]`, min is `5`; push `3`, min is `3`; push `7`, min stays `3`.
- Explanation: The auxiliary min-stack always mirrors the smallest value reachable at the current depth.

## Approach (beginner friendly)

Keep a second stack **mins** where each entry is the minimum for all values **up to** the current main stack size. On `push`, append `min(val, mins[-1])` (or `val` if empty). On `pop`, pop both stacks.

## Solution (Python)

```python
class MinStack:
    def __init__(self) -> None:
        self.stack: list[int] = []
        self.mins: list[int] = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        self.mins.append(val if not self.mins else min(val, self.mins[-1]))

    def pop(self) -> None:
        self.stack.pop()
        self.mins.pop()

    def top(self) -> int:
        return self.stack[-1]

    def get_min(self) -> int:
        return self.mins[-1]


ms = MinStack()
ms.push(-2)
ms.push(0)
ms.push(-3)
assert ms.get_min() == -3
ms.pop()
assert ms.get_min() == -2
```

## Complexity

- **Time:** `O(1)` per operation amortized.
- **Space:** `O(n)` for the two stacks.
