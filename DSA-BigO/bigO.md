**1. What is the Big O for this?**

1. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog, preferably of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You stand up and yell out, who here has a golden retriever and would like to be a playdate for my golden. Someone yells - "I do, be happy to bring him over"

- Constant time O(1); regardless of input you find your dog after 1 call

2. Determine the Big O for the following algorithm: You are sitting in a room with 15 people. You want to find a playmate for your dog who is of the same breed. So you want to know if anyone out of the 15 people have the same breed as your dog. You start with the first person and ask him if he has a golden retriever. He says no, then you ask the next person, and the next, and the next until you find someone who has a golden or there is no one else to ask.

- Linear time O(n); best case O(1) but worst case you have to ask every person so O(n)

**2. Even or odd**

- What is the Big O?

```
function isEven(value) {
    if (value % 2 === 0) {
        return true;
    }
    else
        return false;
    }
}
```

- Constant time O(1); input is always a single value with 1 constant time operation needed to solve

**3. Are you here?**

- What is the big O?

```
function areYouHere(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        const el1 = arr1[i];
        for (let j = 0; j < arr2.length; j++) {
            const el2 = arr2[j];
            if (el1 === el2) return true;
        }
    }
    return false;
}
```

- Polynomial time O(n^2); double for loop with a few constant time ops

**4. Doubler**

```
function doubleArrayValues(array) {
    for (let i = 0; i < array.length; i++) {
        array[i] *= 2;
    }
    return array;
}
```

- Linear time O(n); loop through entire array once performing a constant time op

**5. Naive Search**

```
function naiveSearch(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            return i;
        }
    }
}
```

- Linear time O(n); loop through entire array once performing constant time op

**6. Creating pairs**

```
function createPairs(arr) {
    for (let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            console.log(arr[i] + ", " +  arr[j] );
        }
    }
}
```

- Polynomial time O(n^2); double for loop with a constant time op

**7. Compute the sequence**

- What does the alg do? What is the runtime complexity?

```
function compute(num) {
    let result = [];
    for (let i = 1; i <= num; i++) {

        if (i === 1) {
            result.push(0);
        }
        else if (i === 2) {
            result.push(1);
        }
        else {
            result.push(result[i - 2] + result[i - 3]);
        }
    }
    return result;
}
```

- Stores the fibonacci sequence in an array for num passes
- Linear time O(n); loop through an array once with a bunch of constant time ops.

**8. An efficient search**

- Assume input `array` is sorted; what is the big O?

```
function efficientSearch(array, item) {
    let minIndex = 0;
    let maxIndex = array.length - 1;
    let currentIndex;
    let currentElement;

    while (minIndex <= maxIndex) {
        currentIndex = Math.floor((minIndex + maxIndex) / 2);
        currentElement = array[currentIndex];

        if (currentElement < item) {
            minIndex = currentIndex + 1;
        }
        else if (currentElement > item) {
            maxIndex = currentIndex - 1;
        }
        else {
            return currentIndex;
        }
    }
    return -1;
}
```

- Log time O(log(n)); splits the input in half each pass

**9. Random element**

```
function findRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}
```

- Constant time O(1); performs constant time ops to return a single value on the first pass

**10. What am i?**

- What does the alg do? What is the Big O?

```
function isWhat(n) {
    if (n < 2 || n % 1 !== 0) {
        return false;
    }
    for (let i = 2; i < n; ++i) {
        if (n % i === 0) return false;
    }
    return true;
}
```

- Return false is 1 or 2; not sure when mod 1 is not 0 so not sure about that return
- Then it loops through from 2 to n looking for n and i to have a module 0
- Otherwise returns true
- Searching for prime numbers
- Linear time O(n); traverses entire array worst case
