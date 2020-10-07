// 5. URLify a string
function URLify(str) {
  console.log("URLifying: ", str);
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    const curVal = str[i];
    if (curVal === " ") {
      newStr += "%20";
    } else {
      newStr += curVal;
    }
  }
  console.log("URLified: ", newStr);
}

URLify(
  "This is a great string and it even has a double  space and a triple   wow"
);

// 6. Filtering an array
function filter(arr) {
  console.log("Filtering: ", arr);
  let newArr = [];
  arr.forEach((item) => {
    if (item >= 5) {
      newArr.push(item);
    }
  });
  console.log("Filtered: ", newArr);
}

filter([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 5, 6, -4]);

// 7. Max sum in the array
function maxSum(arr) {
  console.log("Max Summing: ", arr);
  let maxEndingHere = 0;
  let maxSoFar = 0;
  for (let i = 0; i < arr.length; i++) {
    let curVal = arr[i];
    maxEndingHere = Math.max(0, maxEndingHere + curVal);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  console.log("Max Summed: ", maxSoFar);
}

maxSum([4, 6, -3, 5, -2, 1]);
maxSum([-10, 5, -10, 10, -20, 3]);

// 8. Merge arrays
function mergeArrays(arr1, arr2) {
  console.log("Merging: ", arr1, " and ", arr2);
  let i1 = 0;
  let i2 = 0;
  let newArr = [];
  while (i1 < arr1.length && i2 < arr2.length) {
    const arr1Val = arr1[i1];
    const arr2Val = arr2[i2];
    if (arr1Val <= arr2Val) {
      newArr.push(arr1Val);
      i1++;
    } else {
      newArr.push(arr2Val);
      i2++;
    }
  }
  // Loop through whichever one wasn't completely emptied above
  while (i1 < arr1.length) {
    newArr.push(arr1[i1]);
    i1++;
  }
  while (i2 < arr2.length) {
    newArr.push(arr2[i2]);
    i2++;
  }
  console.log("Merged: ", newArr);
}

mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]);

// 9. Remove characters
function removeChars(str, chars) {
  console.log("Removing chars: ", chars, " From: ", str);
  let newStr = "";
  let charArray = [];
  for (let i = 0; i < chars.length; i++) {
    charArray.push(chars[i]);
  }
  for (let i = 0; i < str.length; i++) {
    const curVal = str[i];
    let addChar = true;
    charArray.forEach((char) => {
      if (char === curVal) {
        addChar = false;
      }
    });
    if (addChar) {
      newStr += curVal;
    }
  }
  console.log("Remove chars: ", newStr);
}

removeChars("Battle of the Vowels: Hawaii vs. Grozny", "aeiou");

// 10. Products
function products(arr) {
  console.log("Calculating products of: ", arr);
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let prod = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) {
        // skip
      } else {
        prod *= arr[j];
      }
    }
    newArr[i] = prod;
  }
  console.log("Calculated products: ", newArr);
}

products([1, 3, 9, 4]);

// 11. 2D Array
function zeroRowsColumns(mat) {
  console.log("Zeroing: ", mat);
  const zeroRows = [];
  const zeroCols = [];

  for (let i = 0; i < mat.length; i++) {
    let row = mat[i];
    for (let j = 0; j < row.length; j++) {
      const item = row[j];
      if (item === 0) {
        zeroRows[i] = true;
        zeroCols[j] = true;
      }
    }
  }

  for (let i = 0; i < mat.length; i++) {
    let row = mat[i];
    for (let j = 0; j < row.length; j++) {
      if (zeroRows[i] || zeroCols[j]) {
        row[j] = 0;
      }
    }
  }
  console.log("Zeroed: ", mat);
}

zeroRowsColumns([
  [1, 0, 1, 1, 0],
  [0, 1, 1, 1, 0],
  [1, 1, 1, 1, 1],
  [1, 0, 1, 1, 1],
  [1, 1, 1, 1, 1],
]);

// 12. String rotation
function strRotation(string1, string2) {
  console.log((string2 + string2).indexOf(string1) != -1);
}

strRotation("amazon", "azonma");
strRotation("amazon", "azonam");
