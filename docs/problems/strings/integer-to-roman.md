# Integer to Roman

**Topic:** [Strings](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

Convert an integer in `[1, 3999]` to a Roman numeral string.

## Examples

**Example 1**

- Input: `3749`
- Output: `"MMMDCCXLIX"`
- Explanation: `3000` is `MMM`, `700` is `DCC`, `40` is `XL`, `9` is `IX`, concatenated.

**Example 2**

- Input: `58`
- Output: `"LVIII"`
- Explanation: `50` is `L`, then eight `I`s: `L` + `VIII`.

## Approach (beginner friendly)

List value-symbol pairs from largest to smallest (include subtractive pairs like `900 → CM`). While `num >= value`, append the symbol and subtract.

## Solution (Python)

```python
def int_to_roman(num: int) -> str:
    pairs = [
        (1000, "M"),
        (900, "CM"),
        (500, "D"),
        (400, "CD"),
        (100, "C"),
        (90, "XC"),
        (50, "L"),
        (40, "XL"),
        (10, "X"),
        (9, "IX"),
        (5, "V"),
        (4, "IV"),
        (1, "I"),
    ]
    out: list[str] = []
    for v, sym in pairs:
        while num >= v:
            out.append(sym)
            num -= v
    return "".join(out)


assert int_to_roman(3749) == "MMMDCCXLIX"
assert int_to_roman(58) == "LVIII"
```

## Complexity

- **Time:** `O(1)` — bounded symbol count for `num <= 3999`.
- **Space:** `O(1)` output length is bounded.
