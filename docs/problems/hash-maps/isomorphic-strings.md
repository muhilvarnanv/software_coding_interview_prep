# Isomorphic strings

**Topic:** [Hash maps](index.md) · **Pattern:** [Frequency maps](../../hash-tables/frequency-maps.md)

## Problem

Given strings `s` and `t` of the **same length**, return `True` if characters can be replaced one-for-one so `s` becomes `t` (a **bijection** between letters of `s` and letters of `t`).

## Examples

**Example 1**

- Input: `s = "egg"`, `t = "add"`
- Output: `True`
- Explanation: Map `e → a` and `g → d` consistently; `egg` becomes `add`.

**Example 2**

- Input: `s = "foo"`, `t = "bar"`
- Output: `False`
- Explanation: `o` would need to map to both `a` and `r`, which breaks the one-to-one rule.

## Approach (beginner friendly)

Walk pairs `(a, b)`. Keep `map_s_to_t` and `map_t_to_s`. If `a` already maps to a different letter than `b`, or `b` already maps to a different `a`, return `False`.

## Solution (Python)

```python
def is_isomorphic(s: str, t: str) -> bool:
    if len(s) != len(t):
        return False
    st: dict[str, str] = {}
    ts: dict[str, str] = {}
    for a, b in zip(s, t):
        if a in st and st[a] != b:
            return False
        if b in ts and ts[b] != a:
            return False
        st[a] = b
        ts[b] = a
    return True


assert is_isomorphic("egg", "add") is True
assert is_isomorphic("foo", "bar") is False
```

## Complexity

- **Time:** `O(n)`.
- **Space:** `O(1)` if alphabet is bounded (at most a few dozen map entries).
