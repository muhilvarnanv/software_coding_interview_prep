# Best time to buy and sell stock

**Topic:** [Arrays](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

You are given an array `prices` where `prices[i]` is the stock price on day `i`. Pick one buy day and one later sell day to **maximize** `sell - buy`. If no positive profit exists, return `0`.

## Examples

**Example 1**

- Input: `prices = [7, 1, 5, 3, 6, 4]`
- Output: `5`
- Explanation: The best move is buy at `1` and sell at `6`, profit `5`. Buying at `7` never helps because nothing after it is higher by enough to beat `5`.

**Example 2**

- Input: `prices = [7, 6, 4, 3, 1]`
- Output: `0`
- Explanation: Each day is cheaper than the day before, so every buy-sell pair loses money; the maximum profit is `0`.

## Approach (beginner friendly)

Walk the days in order. Remember the **lowest price so far**. Each day, pretend you sell today: profit is `today - lowest_so_far`. Keep the maximum of that value.

## Solution (Python)

```python
def max_profit(prices: list[int]) -> int:
    best = 0
    lo = prices[0]
    for p in prices[1:]:
        best = max(best, p - lo)
        lo = min(lo, p)
    return best


assert max_profit([7, 1, 5, 3, 6, 4]) == 5
assert max_profit([7, 6, 4, 3, 1]) == 0
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
