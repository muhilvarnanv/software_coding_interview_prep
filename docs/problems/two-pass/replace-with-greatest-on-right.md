# Replace elements with greatest element on right side

**Topic:** [Two-pass problems](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Given an integer array `nums`, return an array `answer` where `answer[i]` is the **maximum** among `nums[i+1], nums[i+2], ..., nums[n-1]`. For the last element, use `-1` (no elements to the right).

## Examples

**Example 1**

- `nums = [17, 18, 5, 4, 6, 1]`
- Output: `[18, 6, 6, 6, 1, -1]`
- Explanation: At index `0`, everything to the right tops out at `18`. At index `1`, the best to the right is `max(5,4,6,1)=6`, and that pattern continues until the last slot, which has no neighbors to the right so the answer is `-1`.

**Example 2**

- `nums = [400]`
- Output: `[-1]`
- Explanation: A single element has no values on its right side, so the rule returns `-1`.

## Approach (beginner friendly)

You cannot know “max to the right of `i`” until you have scanned **everything right of `i`**.

**Pass 1 (right to left):** build `suffix_max[i]` = maximum among `nums[i+1], …, nums[n-1]`. The last index has nothing to the right, so `suffix_max[n-1] = -1`. For each `i` leftward, `suffix_max[i] = max(nums[i + 1], suffix_max[i + 1])` — the bigger of “the immediate neighbor on the right” and “everything that was already to the right of that neighbor.”

**Pass 2 (left to right):** copy `suffix_max` into the answer array (you could also `return suffix_max` after pass 1; the second loop is only to separate “compute suffix” from “emit answer” if you like that shape).

A different one-pass-from-the-right variant keeps a single `running_max` and fills the answer in one reverse scan with **`O(1)`** extra space; this page uses the explicit **suffix table** instead.

## Solution (Python)

```python
def replace_elements(nums: list[int]) -> list[int]:
    n = len(nums)

    suffix_max = [0] * n
    suffix_max[n - 1] = -1

    for i in range(n - 2, -1, -1):
        suffix_max[i] = max(nums[i + 1], suffix_max[i + 1])

    answer = [0] * n
    for i in range(n):
        answer[i] = suffix_max[i]

    return answer


assert replace_elements([17, 18, 5, 4, 6, 1]) == [18, 6, 6, 6, 1, -1]
assert replace_elements([400]) == [-1]
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(n)` for `suffix_max` (plus `answer`, which is required output anyway). You can drop `answer` and `return suffix_max` after pass 1 to save one pass and one array alias.
