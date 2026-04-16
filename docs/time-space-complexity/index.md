# Time & space complexity

Interviewers often ask you to state the **time** and **space** complexity of your solution. Getting this right shows you can reason about scale, not just write code that passes a few tests.

## What to internalize

- **Big-O** describes how cost grows with input size \(n\) as \(n\) gets large—constants and lower-order terms are dropped.
- **Time** usually counts primitive steps or “dominant” operations (comparisons, assignments, hash lookups as O(1) expected).
- **Space** includes extra structures you allocate (not always the input itself unless you copy it).

## Pages in this topic

- **[Big-O basics](big-o.md)** — common classes and how to read a loop nest.

## Interview tip

After you sketch an approach, say complexity **out loud** before optimizing. If you are unsure, give a tight bound (“at most O(n²) because of nested loops over n”) and what would improve it.
