function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

Node.prototype.add = function(value){
    if(value <= this.data){
        if(this.left === null){
            this.left = new Node(value);
            return;
        } else {
            return this.left.add(value);
        }
    } else {
        if(this.right === null){
            this.right = new Node(value);
            return;
        } else {
            return this.right.add(value);
        }
    }
}

Node.prototype.printInOrder = function(){
    const resultArray = [];
    this.printInOrderKernel(resultArray);
    console.log(resultArray);
}

Node.prototype.printInOrderKernel = function(resultArray){
    if(this.left !== null){
        this.left.printInOrderKernel(resultArray)
    }

    resultArray.push(this.data)

    if(this.right !== null){
        this.right.printInOrderKernel(resultArray);
    }
}

Node.prototype.printPreOrder = function() {
    const resultArray = [];
    this.printPreOrderKernel(resultArray);
    console.log(resultArray);
}

Node.prototype.printPreOrderKernel = function(resultArray) {
    resultArray.push(this.data);

    if(this.left !== null){
        this.left.printInOrderKernel(resultArray);
    }
    if(this.right !== null){
        this.right.printInOrderKernel(resultArray);
    }
}

Node.prototype.printPostOrder = function() {
    const resultArray = [];
    this.printPostOrderKernel(resultArray);
    console.log(resultArray);
}

Node.prototype.printPostOrderKernel = function(resultArray) {
    if(this.left !== null){
        this.left.printPostOrderKernel(resultArray);
    }
    if(this.right !== null){
        this.right.printPostOrderKernel(resultArray);
    }
    resultArray.push(this.data);
}

// "Main Method"
const bst = new Node(10);
bst.add(4); 
bst.add(13);
console.log('In Order:')
bst.printInOrder();
console.log('Pre Order')
bst.printPreOrder();
console.log('Post Order')
bst.printPostOrder();
