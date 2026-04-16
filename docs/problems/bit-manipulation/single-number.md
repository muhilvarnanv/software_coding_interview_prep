# Single number (XOR)

**Topic:** [Bit manipulation problems](index.md) · **Pattern:** [Bit manipulation](../../code-patterns/bit-manipulation.md)

## Problem

Given a non-empty array where **every** element appears **twice** except for **one** element that appears once, find that single element.

## Examples

**Example 1**

- `nums = [2, 2, 1]` → `1`

**Example 2**

- `nums = [4, 1, 2, 1, 2]` → `4`

## Approach (beginner friendly)

XOR properties:

- `x ^ x = 0`
- `x ^ 0 = x`
- XOR is associative and commutative

So XORing **all** numbers cancels pairs and leaves the loner.

## Solution (Python)

```python
from functools import reduce
import operator


def single_number(nums: list[int]) -> int:
    return reduce(operator.xor, nums)


assert single_number([2, 2, 1]) == 1
assert single_number([4, 1, 2, 1, 2]) == 4
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
