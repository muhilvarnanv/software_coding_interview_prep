# Valid palindrome

**Topic:** [Two pointers problems](index.md) · **Pattern:** [Two pointers](../../code-patterns/two-pointer.md)

## Problem

Given a string `s`, return `True` if it reads the same forward and backward **after**:

- converting uppercase letters to lowercase, and
- removing **all** characters that are not letters or digits.

## Examples

**Example 1**

- Input: `s = "A man, a plan, a canal: Panama"`
- Output: `True`
- Explanation: Alphanumeric letters spell `amanaplanacanalpanama`.

**Example 2**

- Input: `s = "race a car"`
- Output: `False`

## Approach (beginner friendly)

Palindromes match **symmetric pairs**: first vs last, second vs second-to-last, and so on.

Use `left` starting at `0` and `right` at `n - 1`. Skip anything that is not alphanumeric. Compare the two letters in lower case. If they differ, return `False`. If pointers cross, return `True`.

This is the classic **opposite ends** two-pointer pattern without sorting—just symmetry.

## Solution (Python)

```python
def is_palindrome(s: str) -> bool:
    def alnum(ch: str) -> bool:
        return ("a" <= ch <= "z") or ("A" <= ch <= "Z") or ("0" <= ch <= "9")

    left, right = 0, len(s) - 1

    while left < right:
        while left < right and not alnum(s[left]):
            left += 1
        while left < right and not alnum(s[right]):
            right -= 1

        if s[left].lower() != s[right].lower():
            return False

        left += 1
        right -= 1

    return True


assert is_palindrome("A man, a plan, a canal: Panama") is True
assert is_palindrome("race a car") is False
```

## Complexity

- **Time:** `O(n)` — each character is touched a constant number of times.
- **Space:** `O(1)` if you only compare in place (no copied string).
