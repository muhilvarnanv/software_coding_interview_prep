# Relative sort array

**Topic:** [Two-pass problems](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Given two arrays `arr1` and `arr2`, the elements of `arr2` are **distinct** and each appears in `arr2` in a fixed order.

Sort the elements of `arr1` such that the relative ordering of items **only in `arr2`** matches the order in `arr2`. Elements **not** in `arr2` should be placed at the end in **ascending** order.

## Examples

**Example 1**

- `arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19]`, `arr2 = [2, 1, 4, 3, 9, 6]`
- Output: `[2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]`
- Explanation: First emit all `2`s, then the one `1`, then `4`, then both `3`s, then `9`, then `6`, following `arr2`. Values not listed in `arr2` (`7` and `19`) go at the end in ascending order.

**Example 2**

- `arr1 = [28, 6, 22, 8, 44, 17]`, `arr2 = [22, 28, 8, 6]`
- Output: `[22, 28, 8, 6, 17, 44]`
- Explanation: Order the `arr2` keys as they appear (`22`, `28`, `8`, `6`). Append leftover values sorted: `17` then `44`.

## Approach (beginner friendly)

**Pass 1:** count frequencies in `arr1` with a hash map.

**Pass 2:** walk values in `arr2` order, draining counts from the map into the answer. Append remaining keys sorted ascending.

This is a classic **two-phase counting** pattern.

## Solution (Python)

```python
from collections import Counter


def relative_sort_array(arr1: list[int], arr2: list[int]) -> list[int]:
    counts = Counter(arr1)
    out: list[int] = []

    for x in arr2:
        out.extend([x] * counts.pop(x, 0))

    rest = sorted(counts.elements())
    out.extend(rest)
    return out


assert relative_sort_array(
    [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]
) == [2, 2, 2, 1, 4, 3, 3, 9, 6, 7, 19]

assert relative_sort_array([28, 6, 22, 8, 44, 17], [22, 28, 8, 6]) == [22, 28, 8, 6, 17, 44]
```

## Complexity

- **Time:** `O(n + m + U log U)` where `U` is number of distinct values not in `arr2` (sorting remainder).
- **Space:** `O(n)` for counts.
