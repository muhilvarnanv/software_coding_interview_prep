# Different ways to add parentheses

**Topic:** [Recursion](index.md) · **Pattern:** [Big-O](../../time-space-complexity/big-o.md)

## Problem

Given a string of digits and `+ - *` operators (valid expression), return **all possible results** from inserting parentheses in every structurally distinct way.

## Examples

**Example 1**

- Input: `"2-1-1"`
- Output: `[0, 2]` (order may vary)
- Explanation: Grouping `(2-1)-1 = 0` vs `2-(1-1) = 2`.

**Example 2**

- Input: `"2*3-4*5"`
- Output: `[-34, -14, -10, -10, 10]` (multiset of outcomes)
- Explanation: Different parenthesizations change evaluation order and therefore the numeric outcomes.

## Approach (beginner friendly)

For each operator position, recursively solve **left** and **right** substrings, then combine every pair with that operator. Base case: pure integer string.

## Solution (Python)

```python
def diff_ways_to_compute(expression: str) -> list[int]:
    if expression.isdigit():
        return [int(expression)]
    out: list[int] = []
    for i, ch in enumerate(expression):
        if ch in "+-*":
            left = diff_ways_to_compute(expression[:i])
            right = diff_ways_to_compute(expression[i + 1 :])
            for a in left:
                for b in right:
                    if ch == "+":
                        out.append(a + b)
                    elif ch == "-":
                        out.append(a - b)
                    else:
                        out.append(a * b)
    return out


assert set(diff_ways_to_compute("2-1-1")) == {0, 2}
assert sorted(diff_ways_to_compute("2*3-4*5")) == sorted([-34, -14, -10, -10, 10])
```

## Complexity

- **Time:** Catalan-sized—roughly exponential in the number of operators.
- **Space:** recursion stack plus output lists.
