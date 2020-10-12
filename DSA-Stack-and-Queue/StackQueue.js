/*
Queue Implementation using Stack
A common way to implement a queue is to use a doubly linked list. 
Using the concept of queue in mind, implement a queue using 2 stacks and no other data structure. 
(You are not allowed to use a doubly linked list or array. Use the stack implementation 
with Linked list from your today’s reading material)
*/

class Queue {
  constructor() {
      //this.top = null;
      this.oldStack = new Stack();
      this.newStack = new Stack();
  }
  eneque(item) {
      this.oldStack.push(item);
  }
 
  dequeue() {
      this._reverseElement();
      return this.newStack.pop();
  }
  peek() {
      this._reverseElement();
      return this.newStack.peek();
  };
  _reverseElement(){
      if(isEmpty(this.newStack)){
          while(!isEmpty(this.oldStack)){
              this.newStack.push(this.oldStack.pop());
          }
      }
  }
}

function squareDance(queue) {
  const spareMen = new Queue();
  const spareWomen = new Queue();

  const pairs = new Queue();

  let personA, personB;
  while (personA = queue.dequeue()) {
      if (personA.gender === 'male') {
          if (personB = spareWomen.dequeue()) {
              pairs.enqueue([personA, personB]);
          }
          else {
              spareMen.enqueue(personA);
          }
      }

      else if (personA.gender === 'female') {
          if (personB = spareMen.dequeue()) {
              pairs.enqueue([personA, personB]);
          }
          else {
              spareWomen.enqueue(personA);
          }
      }
  }
  return pairs;
}

function ophidianBank() {
  const queue = new Queue();
  // Assumption: New people join the queue at the same rate they are seen

  for (var i=0; i<100; i++) {
      console.log('Person joined line');
      queue.enqueue({
          angriness: 0 // How fed up the person is with doing their paperwork
      });

      const person = queue.dequeue();
      if (Math.random() < 0.25) {
          console.log(`Person with angriness ${person.angriness} sent to the back`);
          person.angriness++;
          queue.enqueue(person);
      }
      else {
          console.log(`Person with angriness ${person.angriness} processed`);
      }
  }
}