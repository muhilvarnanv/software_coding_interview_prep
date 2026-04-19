# Coin change

**Topic:** [Dynamic programming](index.md) · **Pattern:** [Prefix sum](../../code-patterns/prefix-sum.md)

## Problem

Given coin denominations (positive) and an `amount`, return the **fewest** coins to make `amount`, or `-1` if impossible. You may use each coin unlimited times.

## Examples

**Example 1**

- Input: `coins = [1, 2, 5]`, `amount = 11`
- Output: `3`
- Explanation: `5 + 5 + 1` uses three coins; you cannot beat `3`.

**Example 2**

- Input: `coins = [2]`, `amount = 3`
- Output: `-1`
- Explanation: Odd amounts cannot be built from only even `2`s.

## Approach (beginner friendly)

`dp[s]` = min coins for sum `s`. Initialize `dp[0]=0`, others infinity. For each sum, try every coin `c` with `dp[s] = min(dp[s], dp[s-c]+1)` when `s>=c`.

## Solution (Python)

```python
def coin_change(coins: list[int], amount: int) -> int:
    inf = amount + 1
    dp = [inf] * (amount + 1)
    dp[0] = 0
    for s in range(1, amount + 1):
        for c in coins:
            if c <= s:
                dp[s] = min(dp[s], dp[s - c] + 1)
    return -1 if dp[amount] > amount else dp[amount]


assert coin_change([1, 2, 5], 11) == 3
assert coin_change([2], 3) == -1
```

## Complexity

- **Time:** `O(amount * len(coins))`.
- **Space:** `O(amount)`.
