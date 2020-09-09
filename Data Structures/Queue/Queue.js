/**
 * Constructs an empty queue.
 */
function Queue (){
    this.count = 0;
    this.queue = [];
}

/**
 * Adds an element to the queue.
 * @param {*} data - The element to be added to the queue.
 */
Queue.prototype.add = function(data) {
    this.queue.push(data);
    this.count++;
}

/**
 * Removes the element at the head of the queue.
 * @returns {*} The element that's been removed.
 */
Queue.prototype.remove = function() {
    if(this.count > 0) {
        this.count--;
        return this.queue.shift();
    }
    return null;
}

/**
 * Returns the element at the head of the queue.
 * @returns {*} The element at the head of the queue.
 */
Queue.prototype.peek = function(){
    return this.count !== 0 ? this.queue[0] : null;
}

// "Main Method"
const queue = new Queue();
queue.add(2);
queue.add(10);
queue.add(4);
console.log(queue.remove());
console.log(queue.peek());