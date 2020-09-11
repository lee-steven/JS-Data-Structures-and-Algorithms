/**
 * Constructs a Binary Search Tree and its root with the given value.
 * @param {*} data - The value of the root node.
 */
function BSTNode(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

/**
 * Adds the given value to the tree.
 * @param {*} value - The element to be added to the tree.
 */
BSTNode.prototype.add = function(value){
    if(value <= this.data){
        if(this.left === null){
            this.left = new BSTNode(value);
            return;
        } else {
            return this.left.add(value);
        }
    } else {
        if(this.right === null){
            this.right = new BSTNode(value);
            return;
        } else {
            return this.right.add(value);
        }
    }
}

BSTNode.prototype.delete = function(value){

}

/**
 * Get the current size of the binary search tree.
 * @return {number} The size of the binary search tree.
 */
BSTNode.prototype.size = function(){
    let total = 1;
    if(this.left !== null){
        total += this.left.size();
    }
    if(this.right !== null){
        total += this.right.size();
    }

    return total;
}

/**
 * Checks to see if given input is inside the binary search tree.
 * @param {*} value - The value to be looked for.
 * @return {boolean} - True if given value is in the tree, False otherwise.
 */
BSTNode.prototype.contains = function(value) {
    if(this.data === value) return true;
 
    if(value < this.data && this.left !== null){
        return this.left.contains(value);
    } else if(value > this.data && this.right !== null){
        return this.right.contains(value);
    }
    return false;
}

/**
 * Prints the tree in order.
 */
BSTNode.prototype.printInOrder = function(){
    const resultArray = [];
    this.printInOrderKernel(resultArray);
    console.log(resultArray);
}

BSTNode.prototype.printInOrderKernel = function(resultArray){
    if(this.left !== null){
        this.left.printInOrderKernel(resultArray)
    }

    resultArray.push(this.data)

    if(this.right !== null){
        this.right.printInOrderKernel(resultArray);
    }
}

/**
 * Prints the tree pre order.
 */
BSTNode.prototype.printPreOrder = function() {
    const resultArray = [];
    this.printPreOrderKernel(resultArray);
    console.log(resultArray);
}

BSTNode.prototype.printPreOrderKernel = function(resultArray) {
    resultArray.push(this.data);

    if(this.left !== null){
        this.left.printInOrderKernel(resultArray);
    }
    if(this.right !== null){
        this.right.printInOrderKernel(resultArray);
    }
}

/**
 * Prints the tree post order.
 */
BSTNode.prototype.printPostOrder = function() {
    const resultArray = [];
    this.printPostOrderKernel(resultArray);
    console.log(resultArray);
}

BSTNode.prototype.printPostOrderKernel = function(resultArray) {
    if(this.left !== null){
        this.left.printPostOrderKernel(resultArray);
    }
    if(this.right !== null){
        this.right.printPostOrderKernel(resultArray);
    }
    resultArray.push(this.data);
}

// "Main Method"
const bst = new BSTNode(10);
bst.add(4); 
bst.add(13);
bst.add(6);
console.log('In Order:')
bst.printInOrder();
console.log('Pre Order')
bst.printPreOrder();
console.log('Post Order')
bst.printPostOrder();
console.log(bst.size());
console.log(bst.contains(1));