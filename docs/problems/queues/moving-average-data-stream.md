# Moving average from data stream

**Topic:** [Queues](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Given window size `k`, each call `next(val)` ingests a new integer and returns the **average** of the last `k` values (or all values if fewer than `k` so far).

## Examples

**Example 1**

- `k = 3`, stream `1, 10, 3, 5`
- Outputs: `1.0`, `5.5`, `4.666...`, `6.0`
- Explanation: After `1,10,3` the window average is `(1+10+3)/3`. After `5` arrives, drop `1` and average `(10+3+5)/3 = 6`.

**Example 2**

- `k = 1`, any `next(x)` returns `float(x)`
- Explanation: A window of size `1` is just the latest number.

## Approach (beginner friendly)

Keep a **deque** of at most `k` numbers and a running **sum**. On each `next`, append value, add to sum; if length exceeds `k`, subtract the leftmost popped value.

## Solution (Python)

```python
from collections import deque


class MovingAverage:
    def __init__(self, size: int) -> None:
        self.k = size
        self.q: deque[int] = deque()
        self.total = 0

    def next(self, val: int) -> float:
        self.q.append(val)
        self.total += val
        if len(self.q) > self.k:
            self.total -= self.q.popleft()
        return self.total / len(self.q)


ma = MovingAverage(3)
assert abs(ma.next(1) - 1.0) < 1e-9
assert abs(ma.next(10) - 5.5) < 1e-9
assert abs(ma.next(3) - 14 / 3) < 1e-9
assert abs(ma.next(5) - 6.0) < 1e-9
```

## Complexity

- **Time:** `O(1)` per `next`.
- **Space:** `O(k)` for the deque.
