## All of these are in `array.js` and `main.js`

1. Implement an Array class from scratch

- Use `memory.js` to simulate memory

2. Explore the push() method

- length 1 cap 3 ptr 0
- length 6 cap 12 ptr 3
  - more memory gets allocated after filling up at 3 which moves the pointer over 3

3. Exploring the pop() method

- length 3 cap 12 ptr 3
  - we remove 3 elements from the array which decreases length by 3 but we don't reallocate so cap and ptr remain

4. Understanding more about how arrays work

- Our memory is a float64 array which causes the NaN (not a number) display
- Purpose of resize is to resize the array when it needs more space; it allocates a new, larger space in memory

## All of these are in `exercises.js`

5. URLify a string

- O(n) because it makes one pass through. I initially used concat and realized that was unnecessary and probably O(n) so instead I just += to the end of the string which should be a constant time assignment.

6. Filtering an array

- Remove all numbers less than 5 from an array. Don't use the built in `.filter()`
- O(n) because it loops through once. Everything else is constant time.

7. Max sum in the array

- Given an array with + and - integers, write an algo to find the largest sum in a continuous sequence
- [4, 6, -3, 5, -2, 1] returns 12
- O(n) because it loops through once.

8. Merge arrays

- Merge 2 sorted arrays together
- O(n) because it combines the arrays into one loop so really it's n1+n2 loops which is still n

9. Remove characters

- Delete characters from a string; don't use filter, split or join
- So starts O(c) since it loops through the chars then O(n*c) looping through the string with the nested char loop. So I guess `O(n*c)` but c should rarely be that long or there'd be no chars left so just O(n)?

10. Products

- Given an array, output an array where each index is the product of all numbers in the array except the index
- O(n^2) because double for loop

11. 2D Array

- Search through 2D array and set entire row/column to O when found
- O(n^2) becuase double loop

12. String rotation

- Given two strings, check if the second is a rotation of the first
