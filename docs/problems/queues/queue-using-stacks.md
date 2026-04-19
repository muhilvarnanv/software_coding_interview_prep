# Implement queue using stacks

**Topic:** [Queues](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Implement FIFO `push`, `pop`, `peek`, `empty` using only stack operations (`append` / `pop` at the end).

## Examples

**Example 1**

- `push(1)`, `push(2)`, `peek()` → `1`, `pop()` → `1`, `empty()` → `False`
- Explanation: Oldest element is `1`; `peek` and `pop` must expose `1` first even though `2` was pushed on top of the internal structure.

**Example 2**

- After popping all elements, `empty()` is `True`.
- Explanation: Once both stacks drain, the logical queue has no items.

## Approach (beginner friendly)

**Input stack** for `push`. **Output stack** for `pop/peek`: if output is empty, pour all of input into output (reverses order to FIFO).

## Solution (Python)

```python
class MyQueue:
    def __init__(self) -> None:
        self.inp: list[int] = []
        self.out: list[int] = []

    def push(self, x: int) -> None:
        self.inp.append(x)

    def pop(self) -> int:
        self._pour()
        return self.out.pop()

    def peek(self) -> int:
        self._pour()
        return self.out[-1]

    def empty(self) -> bool:
        return not self.inp and not self.out

    def _pour(self) -> None:
        if not self.out:
            while self.inp:
                self.out.append(self.inp.pop())


q = MyQueue()
q.push(1)
q.push(2)
assert q.peek() == 1
assert q.pop() == 1
assert not q.empty()
```

## Complexity

- **Time:** amortized `O(1)` per operation.
- **Space:** `O(n)` total elements.
