# Last stone weight

**Topic:** [Heaps](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Start with a list of positive stone weights. Repeatedly pick the two **heaviest** stones `x >= y`: smash them into `x - y` (or remove both if equal). Return the weight of the last remaining stone, or `0` if none remain.

## Examples

**Example 1**

- Input: `[2, 7, 4, 1, 8, 1]`
- Output: `1`
- Explanation: Repeated smashes reduce the multiset until a single stone of weight `1` remains (standard LeetCode trace).

**Example 2**

- Input: `[1]`
- Output: `1`
- Explanation: With one stone, no smashes happen.

## Approach (beginner friendly)

Use a **max-heap** by storing negatives in Python’s `heapq`. Pop twice, push back `-(abs(x)-abs(y))` if nonzero.

## Solution (Python)

```python
import heapq


def last_stone_weight(stones: list[int]) -> int:
    heap = [-s for s in stones]
    heapq.heapify(heap)
    while len(heap) > 1:
        x = -heapq.heappop(heap)
        y = -heapq.heappop(heap)
        if x != y:
            heapq.heappush(heap, -(x - y))
    return -heap[0] if heap else 0


assert last_stone_weight([2, 7, 4, 1, 8, 1]) == 1
assert last_stone_weight([1]) == 1
```

## Complexity

- **Time:** `O(n log n)` for heap operations.
- **Space:** `O(n)`.
