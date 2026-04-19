# Daily temperatures

**Topic:** [Stacks](index.md) · **Pattern:** [Two-pass](../../code-patterns/two-pass.md)

## Problem

Given daily temperatures, return an array where answer[i] is how many days you wait after day `i` for a **warmer** temperature; `0` if none.

## Examples

**Example 1**

- Input: `[73, 74, 75, 71, 69, 72, 76, 73]`
- Output: `[1, 1, 4, 2, 1, 1, 0, 0]`
- Explanation: From day `0` (`73`), the next warmer day is tomorrow (`74`) → wait `1`. From day `2` (`75`), you wait until index `6` (`76`), four days later.

**Example 2**

- Input: `[30, 60, 90]`
- Output: `[1, 1, 0]`
- Explanation: Each day sees warmth the next day except the last, which never warms.

## Approach (beginner friendly)

Keep a **stack of indices** with decreasing temperatures. When today is warmer than `stack[-1]`, pop and set answer for that index to `today_index - popped_index`.

## Solution (Python)

```python
def daily_temperatures(temps: list[int]) -> list[int]:
    n = len(temps)
    ans = [0] * n
    stack: list[int] = []
    for i, t in enumerate(temps):
        while stack and temps[stack[-1]] < t:
            j = stack.pop()
            ans[j] = i - j
        stack.append(i)
    return ans


assert daily_temperatures([73, 74, 75, 71, 69, 72, 76, 73]) == [1, 1, 4, 2, 1, 1, 0, 0]
assert daily_temperatures([30, 60, 90]) == [1, 1, 0]
```

## Complexity

- **Time:** `O(n)` — each index pushed and popped once.
- **Space:** `O(n)` for the stack.
