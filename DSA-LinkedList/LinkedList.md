1. Create a linked list class with functions insertFirst, insertLast, remove, find

2. Create a singly linked list

- Also create insertBefore(), insertAfter(), insertAt()

3. Create supplemental functions

- display, size, isEmpty, findPrevious, findLast

4. Mystery program

- What is this function doing?

```
function WhatDoesThisProgramDo(lst) {
    let current = lst.head;
    while (current !== null) {
        let newNode = current;
        while (newNode.next !== null) {
            if (newNode.next.value === current.value) {
                newNode.next = newNode.next.next;
            }
            else {
                newNode = newNode.next;
            }
        }
        current = current.next;
    }
}
```

- Removes duplicate values without preserving list order
- Double while loop so O(n^2)

5. Reverse a list

- Reverse a list with O(n)
- Create a regular algo and a recursive algo

6. 3rd from end

- Find 3rd elem from end but don't use a length prop

7. Middle of list

- Find middle elem without using length prop or size() func

8. Cycle in a list

- Write a program to test whether a linked list has a cycle (whether a node points to an earlier node)
