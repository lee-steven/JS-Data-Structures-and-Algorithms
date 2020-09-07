const Node = require('./Node')

/**
 * Constructs an empty Singly Linked List.
 * @constructor
 */
function SinglyLinkedList() {
    this.head = null;
    this.count = 0;
}

/**
 * Get the size of the list.
 * @return {number} The size of the list.
 */
SinglyLinkedList.prototype.size = function() {
    return this.count;
}

/**
 * Checks if input exists in the list.
 * @param {*} data - The element we are looking for.
 * @return {boolean} True if list does contain the data, False otherwise.
 */
SinglyLinkedList.prototype.contains = function(data){
    let currNode = this.head;
    while(currNode !== null) {
        if(currNode.data === data) {
            return true;
        }
        currNode = currNode.next;
    }
    return false;
}

/**
 * Adds element to the end of the list.
 * @param {*} data 
 */
SinglyLinkedList.prototype.add = function(data) {
    if(this.head === null) {
        this.head = new Node(data);
        this.count++;
        return;
    } 

    let currNode = this.head;
    while(currNode.next !== null) { 
        currNode = currNode.next;
    }
    currNode.next = new Node(data);
    this.count++;
}

/**
 * Adds element to specified index to the list.
 * @param {*} data 
 * @param {number} index - Index where we want to add element.
 */
SinglyLinkedList.prototype.addAtIndex = function(data, index) {
    if(index < 0) {
        console.error('Error: Please provide a valid index');
        return;
    }
    if(index > this.count - 1){
        this.add(data);
        return;
    }
 
    if(index === 0) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.count++;
        return;
    }

    let currNode = this.head;

    for(let i = 0; i < index - 1; i++){
        currNode = currNode.next;
    }
    const newNode = new Node(data);
    newNode.next = currNode.next;
    currNode.next = newNode;
    this.count++;
}

/**
 * Removes element from beginning of the list.
 * @return {*} The removed element.
 */
SinglyLinkedList.prototype.remove = function() {
    const removedElement = this.head.data;
    this.head = this.head.next;
    this.count--;
    return removedElement;
}

/**
 * Removes element from specified index.
 * @param {number} index - The index. 
 */
SinglyLinkedList.prototype.removeAtIndex = function(index) {
    if(index < 0 || index > this.count - 1) {
        console.error('Error: Please provide a valid index');
        return;
    }
    if(index === 0) {
        this.remove(); 
        return; 
    }

    let currNode = this.head;

    for(let i = 0; i < index - 1; i++){
        currNode = currNode.next;
    }
    currNode.next = currNode.next.next;
    this.count--;
}

/**
 * Clears the entire list.
 */
SinglyLinkedList.prototype.clear = function() {
    this.head = null;
    this.count = 0;
}

/**
 * Returns the element at the beginning of the list.
 * @return {*} The element at the beginning of the list.
 */
SinglyLinkedList.prototype.peek = function() {
    return this.head.data;
}

/**
 * Prints the list in a readable form.
 */
SinglyLinkedList.prototype.print = function() {
    let currNode = this.head;
    let printedList = '';
    while(currNode !== null) {
        printedList += `${currNode.data} -> `;
        currNode = currNode.next;
    }
    printedList += 'null';
    console.log(printedList);
}

// "Main Method"
let list = new SinglyLinkedList(2);
list.add(1);
list.add(2);
list.add(3);
list.addAtIndex(4, 1);
list.print();
list.clear();

list.add(10);
list.add(3);
list.add(93);
console.log(list.contains(3));
console.log(list.contains(100));
console.log(list.peek());
list.print();
list.remove();
list.removeAtIndex(100);
list.removeAtIndex(1);
list.print();
console.log(list.size());