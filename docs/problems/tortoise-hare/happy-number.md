# Happy number

**Topic:** [Tortoise and hare problems](index.md) · **Pattern:** [Tortoise and hare](../../code-patterns/tortoise-hare.md)

## Problem

Write `f(n)` = sum of squares of digits of `n` in base 10. Starting from a positive integer `n`, repeatedly replace `n` with `f(n)`.

Return `True` if you eventually reach `1`, otherwise `False` (an endless loop without hitting `1`).

## Examples

**Example 1**

- `n = 19` → `1^2 + 9^2 = 82` → `68` → `100` → `1` → `True`

**Example 2**

- `n = 2` enters a cycle that never hits `1` → `False`

## Approach (beginner friendly)

The sequence is deterministic. Either it reaches `1`, or it **enters a cycle**. That is the same shape as linked list cycle detection: `slow = f(slow)`, `fast = f(f(fast))` (or apply `f` twice per step). If `fast` hits `1`, happy; if `slow == fast` before that, a cycle without `1`.

## Solution (Python)

```python
def next_num(n: int) -> int:
    total = 0
    while n:
        d = n % 10
        total += d * d
        n //= 10
    return total


def is_happy(n: int) -> bool:
    slow, fast = n, next_num(n)
    while fast != 1 and slow != fast:
        slow = next_num(slow)
        fast = next_num(next_num(fast))
    return fast == 1


assert is_happy(19) is True
assert is_happy(2) is False
```

## Complexity

- **Time:** `O(log n)` per step on digit length; bounded small constants for 32-bit inputs in practice.
- **Space:** `O(1)`.
