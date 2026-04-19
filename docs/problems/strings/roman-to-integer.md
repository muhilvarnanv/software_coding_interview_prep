# Roman to integer

**Topic:** [Strings](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

Convert a valid Roman numeral string to an integer. Subtractive pairs like `IV` (`4`) and `IX` (`9`) are allowed.

## Examples

**Example 1**

- Input: `"III"`
- Output: `3`
- Explanation: `I + I + I = 3`.

**Example 2**

- Input: `"MCMXCIV"`
- Output: `1994`
- Explanation: `M=1000`, `CM=900`, `XC=90`, `IV=4`, sum `1994`.

## Approach (beginner friendly)

Scan left to right. If the current symbol is **smaller** than the **next** symbol, subtract the current value (subtractive case); otherwise add it.

## Solution (Python)

```python
def roman_to_int(s: str) -> int:
    vals = {"I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000}
    total = 0
    for i, ch in enumerate(s):
        v = vals[ch]
        if i + 1 < len(s) and v < vals[s[i + 1]]:
            total -= v
        else:
            total += v
    return total


assert roman_to_int("III") == 3
assert roman_to_int("MCMXCIV") == 1994
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)`.
