const Node = require('./Node');

/**
 * Constructs an empty Doubly Linked List. 
 */
function DoublyLinkedList() {
    this.head = null;
    this.tail = null;
    this.count = 0;
}

/**
 * Get the size of the list.
 * @return {number} The size of the list.
 */
DoublyLinkedList.prototype.size = function() {
    return this.count;
}

/**
 * Checks if input exists in the list.
 * @param {*} data - The element we are looking for.
 * @return {boolean} True if list does contain the data, False otherwise.
 */
DoublyLinkedList.prototype.contains = function(data){
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
DoublyLinkedList.prototype.add = function(data) {
    if(this.head === null) {
        this.head = new Node(data);
        this.count++;
        return;
    } 

    let currNode = this.head;
    while(currNode.next !== null) { 
        currNode = currNode.next;
    }
    let newNode = new Node(data);
    currNode.next = newNode; 
    newNode.prev = currNode;
    this.tail = newNode;
    this.count++;
}

/**
 * Adds element to specified index to the list.
 * @param {*} data 
 * @param {number} index - Index where we want to add element.
 */
DoublyLinkedList.prototype.addAtIndex = function(data, index) {
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
        this.head.prev = newNode;
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
    newNode.prev = currNode;
    currNode.next.prev = newNode;
    currNode.next = newNode;
    this.count++;
    //TODO update tail if added to end of list
}

/**
 * Removes element from beginning of the list.
 * @return {*} The removed element.
 */
DoublyLinkedList.prototype.remove = function() {
    const removedElement = this.head.data;
    this.head = this.head.next;
    this.head.prev = null;
    this.count--;
    return removedElement;
}

/**
 * Removes element from specified index.
 * @param {number} index - The index. 
 */
DoublyLinkedList.prototype.removeAtIndex = function(index) {
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
    if(index === this.count - 1){
        currNode.next = null;
        this.tail = currNode;
    } else {
        currNode.next = currNode.next.next;
        currNode.next.prev = currNode;
    }
    this.count--;
}

/**
 * Clears the entire list.
 */
DoublyLinkedList.prototype.clear = function() {
    this.head = null;
    this.tail = null;
    this.count = 0;
}

/**
 * Returns the element at the beginning of the list.
 * @return {*} The element at the beginning of the list.
 */
DoublyLinkedList.prototype.peekFront = function() {
    return this.head.data;
}

/**
 * Returns the element at the end of the list.
 * @return {*} The element at the end of the list.
 */
DoublyLinkedList.prototype.peekBack = function() {
    return this.tail.data;
}

/**
 * Prints the list in a readable form.
 */
DoublyLinkedList.prototype.print = function() {
    let currNode = this.head;
    let printedList = '';
    while(currNode !== null) {
        printedList += `${currNode.data} -> `;
        currNode = currNode.next;
    }
    printedList += 'null';
    console.log('Normal:', printedList);

    
    let backwardList = '';
    currNode = this.tail;
    while(currNode !== null){
        backwardList += `${currNode.data} -> `
        currNode = currNode.prev;
    }
    backwardList += 'null';
    console.log('Reversed:', backwardList) 
}

// "Main Method"
let list = new DoublyLinkedList();
list.add(2);
list.add(5);
list.addAtIndex(4, 2);
console.log(list.size());
list.print();
list.removeAtIndex(2);
list.print();
console.log(list.peekFront());
console.log(list.peekBack());