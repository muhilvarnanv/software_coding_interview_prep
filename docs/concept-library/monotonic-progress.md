# Monotonic progress

In interview-style algorithms, **monotonic progress** usually means your scan **moves through the data in one direction**—for example, pointer indices only **increase** (or only decrease along a fixed traversal), instead of jumping backward and forth arbitrarily.

## Why interviewers care

When `left` and `right` (or similar boundaries) **never move backward** along the array or string, each position enters and leaves the active region a **bounded number of times** (often once or twice). That is the usual argument for **O(n)** time with **O(1)** extra work per step—classic **amortized** linear scans.

This is *not* always the same as the mathematical meaning of a **monotonic sequence** (each element ≥ the previous). Here “monotonic” is closer to **monotone scanning**: the algorithm’s **state** advances monotonically along the index line.

## Typical picture

- **Sliding window / two pointers:** `right` walks forward; when you shrink the window, `left` also walks forward—never to a smaller index. The “frontier” of the window slides **forward** through the input.

## Used in these notes

- **[Sliding window — when to use it](../code-patterns/sliding-window.md#monotonic-progress)** — monotonic progress as a signal that the pattern fits.
