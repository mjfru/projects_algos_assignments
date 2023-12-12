//! Fronts
/*
Use classes, attributes, and methods in the JavaScript language for all challenges. 
Use only a single JavaScript file for this assignment.
All examples are done in order, starting with a new instance of the SLL class.
*/

//? Add Front
// * Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SLL {
  constructor() {
    this.head = null;
  }
  addFront(value) {
    let new_node = new Node(value);
    // If there's no head (falsey), this new_node becomes the head
    if(!this.head) {
      this.head = new_node; }
      else {
        // If there IS a head, this shift things in the list to allow space for our new_node at the front
        new_node.next = this.head;
        this.head = new_node;
      }
      return this.head;
    }
  removeFront() {
    // If there's nothing to remove...
    if (!this.head) {
      return null;
    } else {
      // Store the current head in the removedHead variable
      let removedHead = this.head;
      // Shift the list to assign a new head
      this.head = this.head.next;
      return removedHead;
    }
  }

  // Renamed to avoid confusion
  getFront() {
    if(!this.head) {
      return null;
    } else {
      return this.head.data;
    }
  }
}

// Add Front Cases:
let SLL1 = new SLL();
SLL1.addFront(18);
console.log(SLL1);
SLL1.addFront(5);
console.log(SLL1);
SLL1.addFront(73);
console.log(SLL1);

// Remove Front Cases:
SLL1.removeFront();
console.log(SLL1);
SLL1.removeFront();
console.log(SLL1);

// Get Front Cases:
console.log("Head is" + " " + SLL1.getFront());
SLL1.removeFront();
console.log("Head is" + " " + SLL1.getFront());


// console.log("Head is" + " " + SLL1.getFront());
/* 
Examples:
SLL1 = new SLL()
SLL1.addFront(18) => Node { data: 18, next: null }
SLL1.addFront(5) => Node { data: 5, next: Node { data: 18, next: null } }
SLL1.addFront(73) => Node { data: 73, next: Node { data: 5, next: Node { data: 18, next: null } } }
*/

//? Remove Front
//* Write a method to remove the head node and return the new list head node. If the list is empty, return null.

/*
Examples:
SLL1.removeFront() => Node { data: 5, next: Node { data: 18, next: null } }
SLL1.removeFront() => Node { data: 18, next: null }
*/

//? Front
//* Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.

/*
Examples:
SLL1.front() => 18
SLL1.removeFront() => null
SLL1.front() => null
*/