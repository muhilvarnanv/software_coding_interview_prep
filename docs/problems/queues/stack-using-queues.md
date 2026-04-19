# Implement stack using queues

**Topic:** [Queues](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Implement LIFO `push`, `top`, `pop`, `empty` using only **queue** operations (`enqueue` at back, `dequeue` from front, `peek` front, `size`).

## Examples

**Example 1**

- `push(1)`, `push(2)`, `top()` → `2`, `pop()` → `2`, `empty()` → `False`
- Explanation: Stack top must be the newest item `2` after the second push.

**Example 2**

- After another `pop()`, `empty()` is `True`.
- Explanation: Removing the only remaining element leaves the structure empty.

## Approach (beginner friendly)

Use **one queue**. On `push`, enqueue `x`, then rotate by moving `size-1` elements from front to back so `x` sits at the **front** (top of stack).

## Solution (Python)

```python
from collections import deque


class MyStack:
    def __init__(self) -> None:
        self.q: deque[int] = deque()

    def push(self, x: int) -> None:
        self.q.append(x)
        for _ in range(len(self.q) - 1):
            self.q.append(self.q.popleft())

    def pop(self) -> int:
        return self.q.popleft()

    def top(self) -> int:
        return self.q[0]

    def empty(self) -> bool:
        return len(self.q) == 0


s = MyStack()
s.push(1)
s.push(2)
assert s.top() == 2
assert s.pop() == 2
assert not s.empty()
```

## Complexity

- **Time:** `push` is `O(n)`; `pop/top` are `O(1)`.
- **Space:** `O(n)` for the queue.
