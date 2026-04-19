# Rotate array

**Topic:** [Arrays](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

Rotate `nums` to the **right** by `k` steps. Modify the array **in place** with `O(1)` extra space.

## Examples

**Example 1**

- Input: `nums = [1, 2, 3, 4, 5, 6, 7]`, `k = 3`
- After: `[5, 6, 7, 1, 2, 3, 4]`
- Explanation: The last three numbers move to the front; the first four shift right, which is what “rotate right by `3`” means.

**Example 2**

- Input: `nums = [-1, -100, 3, 99]`, `k = 2`
- After: `[3, 99, -1, -100]`
- Explanation: Rotating right once gives `[-100, 3, 99, -1]`; doing it again moves `99` and `3` to the front in that order.

## Approach (beginner friendly)

Use three reverses: reverse the whole array, reverse the first `k` elements, reverse the rest. That moves the tail block to the head without a second array.

## Solution (Python)

```python
def rotate(nums: list[int], k: int) -> None:
    n = len(nums)
    k %= n

    def rev(i: int, j: int) -> None:
        while i < j:
            nums[i], nums[j] = nums[j], nums[i]
            i += 1
            j -= 1

    rev(0, n - 1)
    rev(0, k - 1)
    rev(k, n - 1)


a = [1, 2, 3, 4, 5, 6, 7]
rotate(a, 3)
assert a == [5, 6, 7, 1, 2, 3, 4]

b = [-1, -100, 3, 99]
rotate(b, 2)
assert b == [3, 99, -1, -100]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` extra.
