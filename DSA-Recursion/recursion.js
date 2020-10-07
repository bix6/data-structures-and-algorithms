"use strict";

/* 1. Counting Sheep
Write a recursive function that counts how many sheep jump over the fence.
Input: Number: 3
Output: String: 
    3: Another sheep jumps over the fence
    2: Another sheep jumps over the fence
    1: Another sheep jumps over the fence
    All sheep jumped over the fence
Forward Phase Input: n-1
Backward Phase Output: String + Returned String
*/
function countSheep(count) {
  return count === 0
    ? "All sheep jumped over the fence"
    : `${count}: Another sheep jumps over the fence\n` + countSheep(--count);
}

function countSheepClicked() {
  $(".count-sheep").on("submit", function (event) {
    event.preventDefault();
    const sheepCount = parseInt($("#sheep-count").val());
    console.log(`Counting ${sheepCount} sheep...`);
    console.log(countSheep(sheepCount));
  });
}

/* 2. Power Calculator
Write a function that takes two integers: a base and an exponent.
Return the base raised to the exponent.
Only allow exponents >= 0 (this is handled in the input min value)
Input: Two Integers base,exponent : 10,2
Output: Integer: 100
Forward Phase Input: base, exponent - 1
Backward Phase Output: base * returned number
*/
function powerCalculator(base, exponent) {
  return exponent === 0 ? 1 : base * powerCalculator(base, --exponent);
}

function powerCalculatorClicked() {
  $(".power-calculator").on("submit", function (event) {
    event.preventDefault();
    const powerBase = parseInt($("#power-base").val());
    const powerExponent = parseInt($("#power-exponent").val());
    console.log(`Calculating ${powerBase}^${powerExponent}...`);
    console.log(powerCalculator(powerBase, powerExponent));
  });
}

/* 3. Reverse String
Write a function that reverses a string.
Input: String: Bill
Output: String: lliB
Forward Phase Input: string - 1
Backward Phase Output: returned string + string[0]
*/
function reverseString(stringIn) {
  return stringIn.length === 1
    ? stringIn[0]
    : reverseString(stringIn.slice(1)) + stringIn[0];
}

function reverseStringClicked() {
  $(".reverse-string").on("submit", function (event) {
    event.preventDefault();
    const stringIn = $("#reverse-string").val();
    console.log(`Reversing \"${stringIn}\"...`);
    console.log(reverseString(stringIn));
  });
}

/* 4. nth Triangular Number
Calculate the nth triangular number; count the objects that can form an equilaterla triangle
Equal to sum of n natural numbers from 1 to 1 = 1,3,6,10,15,21,28,36,45...
Input: Integer: 3
Output: Integer: 6
Forward Phase Input: n-1
Backward phase output: n + returned int
*/
function nthTriangularNumber(n) {
  return n === 1 ? 1 : n + nthTriangularNumber(--n);
}

function nthTriangularNumberClicked() {
  $(".nth-triangular-number").on("submit", function (event) {
    event.preventDefault();
    const n = parseInt($("#nth-number").val());
    console.log(`Calculating Triangular Number for n=${n}...`);
    console.log(nthTriangularNumber(n));
  });
}

/* 5. String Splitter
Split a string based on a separator
Input: String: 02/20/2020
Output: Array: ["02", "20", "2020"]
Forward Phase Input: String, Separator
Backward Phase Output: Concat each mini string to the array
*/
function stringSplitter(stringIn, separator) {
  const index = stringIn.indexOf(separator);
  if (index === -1) {
    return [stringIn];
  }
  return [stringIn.slice(0, index)].concat(
    stringSplitter(stringIn.slice(index + separator.length), separator)
  );
}

function stringSplitterClicked() {
  $(".string-splitter").on("submit", function (event) {
    event.preventDefault();
    const stringIn = $("#string-splitter").val();
    const separator = $("#separator").val();
    console.log(`Splitting "${stringIn}" with "${separator}"...`);
    console.log(stringSplitter(stringIn, separator));
  });
}

/* 6. Fibonacci
Print the Fibonacci sequence
Each number is the sum of the preceding 2
1, 1, 2, 3, 5, 8, 13
Input: Integer: 7
Output: Sum: 13
Forward Phase Input: n - 1, n - 2
Backward Phase Output: fib(n-1) + fib(n-2)
*/
function fibonacci(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciClicked() {
  $(".fibonacci").on("submit", function (event) {
    event.preventDefault();
    const n = parseInt($("#fibonacci").val());
    console.log(`Calculating fibonacci for n=${n}...`);
    console.log(fibonacci(n));
  });
}

/* 7. Factorial
Find the factorial of a given number
5! = 5 * 4 * 3 * 2 * 1 = 120
Input: Integer: 5
Output: Factorial: 120
Forward Phase Input: n-1
Backward Phase Output: n * factorial(n-1)
*/
function factorial(n) {
  return n === 1 ? 1 : n * factorial(n - 1);
}

function factorialClicked() {
  $(".factorial").on("submit", function (event) {
    event.preventDefault();
    const n = parseInt($("#factorial").val());
    console.log(`Calculating ${n}!...`);
    console.log(factorial(n));
  });
}

/* 8. Find a way out of the maze
Input: Array of Arrays
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
Output: Path from top left to 'e': RRDD
Forward Phase Input: maze, curPos, dir
Backward Phase Output: dir + returnedDir
*/
function solveMaze(maze, pos = [0, 0], dir = "") {
  const r = pos[0];
  const c = pos[1];
  const mazeVal = maze[r][c];

  if (mazeVal === "*") {
    return null;
  } else if (mazeVal === "e") {
    return dir;
  }

  // val is ' '
  const rMax = maze.length - 1;
  const cMax = maze[0].length - 1;
  let solution = null;

  // go right
  if (c < cMax && dir != "L") {
    solution = solveMaze(maze, [r, c + 1], "R");
  }
  // go down
  if (!solution && r < rMax && dir != "U") {
    solution = solveMaze(maze, [r + 1, c], "D");
  }
  // go left
  if (!solution && c > 0 && dir != "R") {
    solution = solveMaze(maze, [r, c - 1], "L");
  }
  // go up
  if (!solution && r > 0 && dir != "D") {
    solution = solveMaze(maze, [r - 1, c], "U");
  }

  // return solution
  if (solution) {
    return dir + solution;
  } else {
    return null;
  }
}

function solveMazeClicked() {
  $(".solve-maze").on("submit", function (event) {
    event.preventDefault();
    const mazeChoice = parseInt($("#solve-maze").val());
    const mazes = [
      [
        [" ", " ", " "],
        [" ", "*", " "],
        [" ", " ", "e"],
      ],
      [
        [" ", " ", " ", "*", " ", " ", " "],
        ["*", "*", " ", "*", " ", "*", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", "*", "*", "*", "*", "*", " "],
        [" ", " ", " ", " ", " ", " ", "e"],
      ],
      [
        [" ", " ", " ", "*", " ", " ", " "],
        ["*", "*", " ", "*", " ", "*", " "],
        [" ", " ", " ", "*", " ", " ", " "],
        [" ", "*", "*", "*", " ", "*", " "],
        [" ", " ", " ", " ", " ", "*", "e"],
      ],
    ];
    console.log(`Solving maze ${mazeChoice}...`);
    for (let i = 0; i < mazes[mazeChoice].length; i++) {
      console.log(mazes[mazeChoice][i]);
    }
    console.log(solveMaze(mazes[mazeChoice]));
  });
}

/* 9. Find all the ways out of the maze
Input: Array of Arrays
let mySmallMaze = [
    [' ', ' ', ' '],
    [' ', '*', ' '],
    [' ', ' ', 'e']
];
Output: Path from top left to 'e': RRDD
Forward Phase Input: maze, curPos, dir
Backward Phase Output: dir + returnedDir
*/
// TODO
const solveAllMazes = function (
  maze,
  row,
  col,
  position = 0,
  direction = "S",
  path = []
) {
  if (col < 0 || row < 0) {
    return;
  }
  if (col >= maze[0].length || row >= maze.length) {
    return;
  }

  path[position] = direction;
  position++;

  if (maze[row][col] === "e") {
    PrintPath(path);
    return;
  }

  if (maze[row][col] === " ") {
    // Current cell free; mark as visited
    maze[row][col] = "v";
    solveAllMazes(maze, position, row, col - 1, "L", path); // left
    solveAllMazes(maze, position, row - 1, col, "U", path); // up
    solveAllMazes(maze, position, row, col + 1, "R", path); // right
    solveAllMazes(maze, position, row + 1, col, "D", path); // down
    // Mark current cell as free
    maze[row][col] = " ";
  }
  // Remove final direction from path
  position--;
};

function PrintPath(path) {
  console.log("Found path: ", path);
}

function solveAllMazesClicked() {
  $(".solve-all-mazes").on("submit", function (event) {
    event.preventDefault();
    const mazeChoice = parseInt($("#solve-all-mazes").val());
    const mazes = [
      [
        [" ", " ", " "],
        [" ", "*", " "],
        [" ", " ", "e"],
      ],
      [
        [" ", " ", " ", "*", " ", " ", " "],
        ["*", "*", " ", "*", " ", "*", " "],
        [" ", " ", " ", " ", " ", " ", " "],
        [" ", "*", "*", "*", "*", "*", " "],
        [" ", " ", " ", " ", " ", " ", "e"],
      ],
      [
        [" ", " ", " ", "*", " ", " ", " "],
        ["*", "*", " ", "*", " ", "*", " "],
        [" ", " ", " ", "*", " ", " ", " "],
        [" ", "*", "*", "*", " ", "*", " "],
        [" ", " ", " ", " ", " ", "*", "e"],
      ],
    ];
    console.log(`Solving maze ${mazeChoice}...`);
    for (let i = 0; i < mazes[mazeChoice].length; i++) {
      console.log(mazes[mazeChoice][i]);
    }
    const solutions = solveAllMazes(mazes[mazeChoice], 0, 0);
    console.log(solutions);
    /* TODO
        for (let i = 0; i < solutions.length; i++) {
            console.log(solutions[i]);
        }
        */
  });
}

function anagramSolver(prefix, stringIn) {
  if (stringIn.length <= 1) {
    console.log(`The anagram is ${prefix}${stringIn}`);
  } else {
    for (let i = 0; i < stringIn.length; i++) {
      let currentLetter = stringIn.substring(i, i + 1);
      let previousLetters = stringIn.substring(0, i);
      let afterLetters = stringIn.substring(i + 1);
      anagramSolver(prefix + currentLetter, previousLetters + afterLetters);
    }
  }
}

function anagramSolverClicked() {
  $(".anagram").on("submit", function (event) {
    event.preventDefault();
    const wordIn = String($("#anagram").val());
    console.log(`Calculating anagrams for ${wordIn}`);
    anagramSolver("", wordIn);
  });
}

let organization = {
  Zuckerberg: {
    Schroepfer: {
      Bosworth: {
        Steve: {},
        Kyle: {},
        Andra: {},
      },
      Zhao: {
        Richie: {},
        Sofia: {},
        Jen: {},
      },
      Badros: {
        John: {},
        Mike: {},
        Pat: {},
      },
      Parikh: {
        Zach: {},
        Ryan: {},
        Tes: {},
      },
    },
    Schrage: {
      VanDyck: {
        Sabrina: {},
        Michelle: {},
        Josh: {},
      },
      Swain: {
        Blanch: {},
        Tom: {},
        Joe: {},
      },
      Frankovsky: {
        Jasee: {},
        Brian: {},
        Margaret: {},
      },
    },
    Sandberg: {
      Goler: {
        Eddie: {},
        Julie: {},
        Annie: {},
      },
      Hernandez: {
        Rowi: {},
        Inga: {},
        Morgan: {},
      },
      Moissinac: {
        Amy: {},
        Chuck: {},
        Vinni: {},
      },
      Kelley: {
        Eric: {},
        Ana: {},
        Wes: {},
      },
    },
  },
};

function traverse(data, depth = 0) {
  let indent = " ".repeat(depth * 4);
  Object.keys(data).forEach((key) => {
    console.log(indent + key);
    traverse(data[key], depth + 1);
  });
}

function traverseClicked() {
  $(".traverse").on("submit", function (event) {
    event.preventDefault();
    console.log("traversing organization:");
    console.log(organization);
    traverse(organization);
  });
}

function toBinary(input) {
  if (input <= 0) {
    return "";
  }
  let binary = Math.floor(input % 2);
  return toBinary(Math.floor(input / 2)) + binary;
}

function toBinaryClicked() {
  $(".binary").on("submit", function (event) {
    event.preventDefault();
    const n = parseInt($("#binary").val());
    console.log(`Calculating Binary of ${n}...`);
    console.log(toBinary(n));
  });
}

function main() {
  countSheepClicked();
  powerCalculatorClicked();
  reverseStringClicked();
  nthTriangularNumberClicked();
  stringSplitterClicked();
  fibonacciClicked();
  factorialClicked();
  solveMazeClicked();
  solveAllMazesClicked();
  anagramSolverClicked();
  traverseClicked();
  toBinaryClicked();
}

$(main);
