# Recent calls

**Topic:** [Queues](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Implement `ping(t)` where `t` increases. Return how many pings happened in the **inclusive** window `[t - 3000, t]`.

## Examples

**Example 1**

- `ping(1)` → `1`, `ping(100)` → `2`, `ping(3001)` → `3`, `ping(3002)` → `3`
- Explanation: The first three calls are all within `3000` ms of each other. At `3002`, the call at time `1` is **outside** `[3002-3000, 3002] = [2, 3002]`, so it drops and the count stays `3`.

**Example 2**

- `ping(0)` then `ping(3000)` → `2`
- Explanation: Both timestamps lie in `[0, 3000]`, so both count.

## Approach (beginner friendly)

Store timestamps in a **queue**. After each `ping`, pop from the front while `front < t - 3000`. Return the queue length.

## Solution (Python)

```python
from collections import deque


class RecentCounter:
    def __init__(self) -> None:
        self.q: deque[int] = deque()

    def ping(self, t: int) -> int:
        self.q.append(t)
        while self.q[0] < t - 3000:
            self.q.popleft()
        return len(self.q)


rc = RecentCounter()
assert rc.ping(1) == 1
assert rc.ping(100) == 2
assert rc.ping(3001) == 3
assert rc.ping(3002) == 3
```

## Complexity

- **Time:** amortized `O(1)` per ping (each timestamp enters and leaves once).
- **Space:** `O(w)` where `w` is pings in the sliding window (bounded by practical call rate).
