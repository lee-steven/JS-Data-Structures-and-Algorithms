/**
 * Constructs an empty Stack.
 */
function Stack(){
    this.count = 0;
    this.stackArray = [];
}

/**
 * Get the current size of the stack.
 * @returns {number} The size of the stack.
 */
Stack.prototype.getSize = function(){
    return this.count;
}

/**
 * Checks to see if Stack is empty or filled.
 * @returns {boolean} True if stack is empty, False if not empty.
 */
Stack.prototype.isEmpty = function(){
    return this.count === 0 ? true : false;
}

/**
 * Adds an item to the stack.
 * @param {*} item - The item to be added to the stack.
 */
Stack.prototype.push = function(item){
    this.stackArray.push(item);
    this.count++;
}

/**
 * Removes the element at the top of the stack.
 */
Stack.prototype.pop = function(){
    this.count--;
    return this.stackArray.pop();
}

/**
 * Returns the element at the top of the stack.
 * @returns {*} The element present at the top of the stack. Returns -1 if stack is empty.
 */
Stack.prototype.peek = function(){
    return this.isEmpty() ? -1 : this.stackArray[this.count - 1];
}

// "Main Method"
const stack = new Stack();
console.log(stack.isEmpty());
stack.push(1);
console.log(stack.peek());
stack.push(3);
stack.push(2);
stack.push(100);
console.log(stack.peek());

stack.pop(); 
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.getSize());