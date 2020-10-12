class Stack {
  constructor() {
    this.top = null;
  }

  push(data) {
    if (this.top === null) {
      this.top = new _Node(data, null);
      return this.top;
    }
    const node = new _Node(data, this.top);
    this.top = node;
    return this.top;
  }

  pop() {
    const node = this.top;
    if (node === null) {
      this.top = null;
      return null
    }
    else {
      this.top = node.next;
      return node.data;
    }
  }
}

class _Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

function peek(stack) {
  if (stack.top) {
    return stack.top.data;
  }
  return null;
}

function isEmpty(stack) {
  return stack.top === null;
}

function display(stack) {
  let node = stack.top;
  while (node) {
    console.log(node.data);
    node = node.next;
  }
  return;
}

function isPalindrome(str) {
  str = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  const stack = new Stack();

  for (let i = 0; i < str.length; i++) {
    stack.push(str.charAt(i));
  }

  // Compare second half to first
  for (let i = 0; i < str.length / 2; i++) {
    if (stack.pop() !== str.charAt(i)) {
      return false;
    }
  }

  return true;
}

function parenthesesMatch1(s) {
  const stack = new Stack();

  for (let i=0; i<s.length; i++) {
    const char = s.charAt(i);
    if (char === '(') {
      stack.push(char);
    }
    else if (char === ')') {
      const candidate = peek(stack);
      if (!candidate) {
        return false;
      }
      stack.pop();
    }
  }

  if(peek(stack)) {
    return false;
  }
  return true;
}

function parenthesesMatch2(s) {
  const stack = new Stack();

  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  }

  const openBrackets = Object.keys(brackets);
  const closeBrackets = Object.values(brackets);

  for (let i = 0; i<s.length; i++) {
    const char = s.charAt(i);
    if(openBrackets.includes(char)) {
      stack.push(char);
    }
    else if (closeBrackets.includes(char)) {
      const candidate = peek(stack);
      if(brackets[candidate] !== char) {
        return false;
      }
      stack.pop();
    }
  }

  if(peek(stack)) {
    return false;
  }
  return true;
}

function parenthesesMatch3(s) {
  const stack = new Stack();

  const brackets = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  const openBrackets = Object.keys(brackets);
  const closeBrackets = Object.values(brackets);

  const quotes = ['"', "'"];

  let inQuotes = false;

  for (let i = 0; i<s.length; i++) {
    const char = s.charAt(i);

    if(quotes.includes(char)) {
      if (inQuotes) {
        const candidate = peek(stack);
        if (candidate === char) {
          stack.pop();
          inQuotes = false;
        }
      }
      else {
        stack.push(char);
        inQuotes = true;
      }
    }
    else if (openBrackets.includes(char) && !inQuotes) {
      stack.push(char);
    }
    else if (closeBrackets.includes(char) && !inQuotes) {
      const candidate = peek(stack);
      if (brackets[candidate] !== char) {
        return false;
      }
      stack.pop();
    }
  }

  if(peek(stack)) {
    return false;
  }
  return true;
}

function sortStack(stackIn) {
  let newStack = new Stack();
  while(!isEmpty(stackIn)) {
    let temp = originalStack.pop();
    while (!isEmpty(newStack) && (peek(newStack) > temp)) {
      stackIn.push(newStack.pop());
    }
    newStack.push(temp);
  }
  while(!isEmpty(newStack)) {
    originalStack.push(newStack.pop());
  }
}

function main() {
  let starTrek = new Stack();
  starTrek.pop(); // Checking pop works on null
  starTrek.push('Kirk');
  starTrek.push('Spock');
  starTrek.push('McCoy');
  starTrek.push('Scotty');
  console.log(starTrek);
  console.log(peek(starTrek));
  console.log(isEmpty(starTrek));
  starTrek.pop();
  display(starTrek);
  console.log(isPalindrome("dad"));
  console.log(isPalindrome("A man, a plan, a canal: Panama"));
  console.log(isPalindrome("1001"));
  console.log(isPalindrome("Tauhida"));
  console.log(parenthesesMatch1('This has ( parentheses matching )'))
  console.log(parenthesesMatch1('This has ( parentheses not matching'))
  console.log(parenthesesMatch2('This has ( parentheses matching and brackets [ ok ] and curly { } )'))
  console.log(parenthesesMatch2('This has ( parentheses not matching o and no brackets []]'))
  console.log(parenthesesMatch3('This has ( parentheses matching and brackets [ ok ] and curly { } ) o also double "quotes are nice fake brackets ]"'))
  console.log(parenthesesMatch3('This has ( parentheses not matching o and no brackets []] and string fail "'))
}

main();