# Kth largest element in an array

**Topic:** [Heaps](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Return the **kth largest** element in an unsorted array (largest means `1st` largest is the max). Assume `1 <= k <= len(nums)`.

## Examples

**Example 1**

- Input: `nums = [3, 2, 1, 5, 6, 4]`, `k = 2`
- Output: `5`
- Explanation: Sorted descending is `6, 5, 4, ...`; the second entry is `5`.

**Example 2**

- Input: `nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]`, `k = 4`
- Output: `4`
- Explanation: The fourth largest distinct position in sorted order is `4` for this definition (LeetCode uses order statistics on values with duplicates).

## Approach (beginner friendly)

Keep a **min-heap** of size `k`. If the heap grows past `k`, pop the smallest inside it. After scanning all numbers, the heap’s smallest item is the kth largest overall.

## Solution (Python)

```python
import heapq


def find_kth_largest(nums: list[int], k: int) -> int:
    heap = nums[:k]
    heapq.heapify(heap)
    for x in nums[k:]:
        if x > heap[0]:
            heapq.heapreplace(heap, x)
    return heap[0]


assert find_kth_largest([3, 2, 1, 5, 6, 4], 2) == 5
assert find_kth_largest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4) == 4
```

## Complexity

- **Time:** `O(n log k)`.
- **Space:** `O(k)` for the heap.
