# Merge intervals

**Topic:** [Arrays](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

Given intervals `[start, end]`, merge all pairs that **overlap** (touching at an endpoint counts as overlapping for this problem). Return the merged list.

## Examples

**Example 1**

- Input: `[[1, 3], [2, 6], [8, 10], [15, 18]]`
- Output: `[[1, 6], [8, 10], [15, 18]]`
- Explanation: `[1, 3]` and `[2, 6]` overlap, so they merge into `[1, 6]`. The other intervals do not overlap their neighbors, so they stay as single pieces.

**Example 2**

- Input: `[[1, 4], [4, 5]]`
- Output: `[[1, 5]]`
- Explanation: The first interval ends where the second starts, so they chain into one continuous range `[1, 5]`.

## Approach (beginner friendly)

Sort by `start`. Compare each interval to the last one in your answer: if it starts **after** the last end, append a new interval; otherwise extend the last end to `max(last_end, this_end)`.

## Solution (Python)

```python
def merge_intervals(intervals: list[list[int]]) -> list[list[int]]:
    intervals.sort(key=lambda x: x[0])
    out: list[list[int]] = []
    for s, e in intervals:
        if not out or s > out[-1][1]:
            out.append([s, e])
        else:
            out[-1][1] = max(out[-1][1], e)
    return out


assert merge_intervals([[1, 3], [2, 6], [8, 10], [15, 18]]) == [[1, 6], [8, 10], [15, 18]]
assert merge_intervals([[1, 4], [4, 5]]) == [[1, 5]]
```

## Complexity

- **Time:** `O(n log n)` for sorting.
- **Space:** `O(n)` for the output.
