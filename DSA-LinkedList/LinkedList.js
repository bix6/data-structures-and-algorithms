class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while(tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  insertBefore(item, key) {
    if (this.head == null) {
      return ;
    }
    if (this.head.value == key) {
      this.insertFirst(item);
      return;
    }
    let prevNode = null;
    let currNode = this.head;
    while (currNode !== null && currNode.value !==key) {
      prevNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Node not found');
      return;
    }
    prevNode.next = new _Node(item, currNode);
  }

  insertAfter(item, key) {
    let tempNode = this.head;
    while (tempNode !== null && tempNode.value !== key) {
      tempNode = tempNode.next;
    }
    if (tempNode !== null) {
      tempNode.next = new _Node(item, tempNode.next);
    }
  }

  insertAt(item, pos) {
    if (pos < 0) {
      throw new Error('Position error');
    }
    if (pos === 0) {
      this.insertFirst(item);
    }
    else {
      const node = this._findNthElement(pos - 1);
      const newNode = new _Node(item, null);
      newNode.next = node.next;
      node.next = newNode;
    }
  }

  _findNthElement(pos) {
    let node = this.head;
    for (let i=0; i<pos; i++) {
      node = node.next;
    }
    return node;
  }

  find(item) {
    let currNode = this.head;
    if (!this.head) {
      return null;
    }
    while (currNode.value !== item) {
      if (currNode.next === null) {
        return null;
      }
      else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove (item) {
    if (!this.head) {
      return null;
    }
    //If node is the head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    let currNode = this.head;
    let previousNode = this.head;

    while ((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }
    if (currNode === null) {
      console.log('Item not found');
      return;
    }
    previousNode.next = currNode.next;
  }
}

class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

function displayList(list) {
  let currNode = list.head;
  while (currNode !== null) {
    console.log(currNode.value);
    currNode = currNode.next;
  }
}

function size(list) {
  let counter = 0;
  let currNode = list.head;
  if (!currNode) {
    return counter;
  }
  else {
    counter ++;
  }
  while (!(currNode.next == null)) {
    counter ++;
    currNode = currNode.next;
  }
  return counter;
}

function isEmpty(list) {
  let currNode = list.head;
  if (!currNode) {return true;}
  else {return false;}
}

function findPrevious(list, item) {
  let currNode = list.head;
  while((currNode !== null) && (currNode.next.value !== item)) {
    currNode = currNode.next;
  }
  return currNode;
}

function findLast(list) {
  if (list.head === null) {
    return 'empty list';
  }
  let tempNode = list.head;
  while(tempNode.next !== null) {
    tempNode = tempNode.next;
  }
  return tempNode;
}

function reverse(list) {
  let reversedPart = null;
  let current = list.head;

  while (current !== null) {
    let savedNode = current.next;
    current.next = reversedPart;
    reversedPart = current;
    current = savedNode;
  }

  list.head = reversedPart;
  return list;
}

// Node is the first item in the list
// This function doesn't seem to work
function reverseList(node) {
  if (node == null) {
    return null;
  }
  if (node.next == null) {
    return null;
  }
  const secondElem = node.next;
  node.next = null;
  const reverseRest = reverseList(secondElem);
  secondElem.next = node;
  return reverseRest;
}

function thirdFromEnd(list) {
  let thirdEnd = list.head;
  let end = list.head.next.next.next;
  while (end !== null) {
    thirdEnd = thirdEnd.next;
    end = end.next;
  }
  return thirdEnd.value;
}

function middleOfList(list) {
  let end = list.head;
  let middle = list.head;
  while (end !== null && end.next !==null) {
    end = end.next.next;
    middle = middle.next;
  }
  // Middle was advanced at half speed
  return middle.value;
}

function findCycle(list) {
  let fast = list.head;
  let slow = list.head;

  while(slow !== null && fast !==null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      console.log('Found Cycle');
      return;
    }
  }

  console.log('No Cycle');
}

function main() {
  let SLL = new LinkedList();
  const things = ['Apollo', 'Boomer', 'Helo', 'Husker', 'Starbuck'];
  things.forEach(thing => {
    SLL.insertLast(thing);
  })
  SLL.insertLast('Tauhida');
  SLL.remove('Husker');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');
  displayList(SLL);
  console.log(size(SLL));
  console.log(isEmpty(SLL));
  console.log(findPrevious(SLL, 'Boomer'));
  console.log(findLast(SLL));
  displayList(reverse(SLL));
  // displayList(reverseList(SLL.head));
  console.log(thirdFromEnd(SLL))
  findCycle(SLL);
}

main();