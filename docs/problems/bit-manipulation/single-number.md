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

XOR every value in order. That is the same idea as folding with `functools.reduce` and `operator.xor`—both cancel pairs and leave the unique element—only the explicit loop is easier to walk through out loud.

```python
def single_number(nums):
    result = 0
    for num in nums:
        result ^= num
    return result


# Example 1: nums = [2, 2, 1] → 1
assert single_number([2, 2, 1]) == 1

# Example 2: nums = [4, 1, 2, 1, 2] → 4
assert single_number([4, 1, 2, 1, 2]) == 4
```

Same result with the standard library (more compact, same XOR fold):

```python
from functools import reduce
import operator

assert reduce(operator.xor, [2, 2, 1]) == 1
assert reduce(operator.xor, [4, 1, 2, 1, 2]) == 4
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
