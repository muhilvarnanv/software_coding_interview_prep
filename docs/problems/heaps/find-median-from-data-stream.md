# Find median from data stream

**Topic:** [Heaps](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Design a data structure supporting `addNum(num)` and `findMedian()`. After each add, the median is the middle value (average of two middles if count is even).

## Examples

**Example 1**

- Add `1`, median `1.0`; add `2`, median `1.5`; add `3`, median `2.0`
- Explanation: Values sorted are `[1]`, then `[1,2]`, then `[1,2,3]`; medians follow the definition for odd/even sizes.

**Example 2**

- Add `5`, add `15`, median `10.0`
- Explanation: Even count: average of `5` and `15`.

## Approach (beginner friendly)

Keep **two heaps**: a **max-heap** for the lower half (store negatives in Python) and a **min-heap** for the upper half. Balance sizes so lower has equal or one more element than upper. Median comes from the tops of one or both heaps.

## Solution (Python)

```python
import heapq


class MedianFinder:
    def __init__(self) -> None:
        self.low: list[int] = []  # max-heap via negatives
        self.high: list[int] = []  # min-heap

    def add_num(self, num: int) -> None:
        heapq.heappush(self.low, -num)
        heapq.heappush(self.high, -heapq.heappop(self.low))
        if len(self.high) > len(self.low):
            heapq.heappush(self.low, -heapq.heappop(self.high))

    def find_median(self) -> float:
        if len(self.low) > len(self.high):
            return float(-self.low[0])
        return (-self.low[0] + self.high[0]) / 2


mf = MedianFinder()
mf.add_num(1)
assert mf.find_median() == 1.0
mf.add_num(2)
assert mf.find_median() == 1.5
mf.add_num(3)
assert mf.find_median() == 2.0
```

## Complexity

- **Time:** `O(log n)` per `add_num`, `O(1)` for `find_median`.
- **Space:** `O(n)`.
