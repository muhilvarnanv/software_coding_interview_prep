# Two pointers

**Two pointers** usually means maintaining two indices into an array (or string) and moving them based on a rule until you find an answer or exhaust the structure.

## When it tends to work

- **Sorted** data where moving left/right increases or decreases a “sum” or comparison outcome.
- **Partitioning** problems where elements need to be grouped relative to a pivot or condition.

## Sketch: opposite ends on sorted array (pair sum)

Given sorted `a` and target `t`, find if any pair sums to `t`:

- Put `left = 0`, `right = len(a) - 1`.
- If `a[left] + a[right] == t`, done.
- If sum is too small, `left++`; if too large, `right--`.
- **Time** O(n), **space** O(1) extra.

## What to add next

Paste a problem you solved with two pointers and note the **invariant** (what stays true as pointers move). That invariant is what interviewers like to hear.
