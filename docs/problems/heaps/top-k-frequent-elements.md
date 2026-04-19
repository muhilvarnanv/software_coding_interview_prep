# Top K frequent elements

**Topic:** [Heaps](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Given an integer array and an integer `k`, return the `k` most frequent elements (any order is fine unless interviewer says otherwise).

## Examples

**Example 1**

- Input: `nums = [1, 1, 1, 2, 2, 3]`, `k = 2`
- Output: `[1, 2]` (order may vary)
- Explanation: `1` appears three times, `2` twice, `3` once—top two frequencies belong to `1` and `2`.

**Example 2**

- Input: `nums = [1]`, `k = 1`
- Output: `[1]`
- Explanation: Only one distinct value exists, so it is automatically in the top `1`.

## Approach (beginner friendly)

Count frequencies. Use a **min-heap** of size `k` on `(frequency, value)` so you evict the least frequent among the candidates.

## Solution (Python)

```python
import heapq
from collections import Counter


def top_k_frequent(nums: list[int], k: int) -> list[int]:
    counts = Counter(nums)
    heap: list[tuple[int, int]] = []
    for v, c in counts.items():
        if len(heap) < k:
            heapq.heappush(heap, (c, v))
        elif c > heap[0][0]:
            heapq.heapreplace(heap, (c, v))
    return [v for _, v in heap]


out = top_k_frequent([1, 1, 1, 2, 2, 3], 2)
assert set(out) == {1, 2}
assert top_k_frequent([1], 1) == [1]
```

## Complexity

- **Time:** `O(n log k)` with `n = len(nums)`.
- **Space:** `O(n)` for counts plus `O(k)` for the heap.
