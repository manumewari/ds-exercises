class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(newValue) {
        if (newValue <= this.value) {
            if(this.left) {
                this.left.insert(newValue);
            }
            else {
                this.left = new BinaryTree(newValue);
            }
        }
        else {
            if(this.right) {
                this.right.insert(newValue);
            }
            else {
                this.right = new BinaryTree(newValue);
            }
        }
        return this;
    }

    contains(value) {
        if(this.value === value) {
            return true;
        }
        else if (value < this.value && this.left) {
            return this.left.contains(value);
        }
        else if(this.right) {
            return this.right.contains(value);
        }
        else {
            return false;
        }
    }

    traverseDepthFirstInOrder() {
        let traversalResult = [];

        let traverse = (node) => {
            if(!node) {
                return;
            }
            traversalResult.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }

        traverse(this);
        return traversalResult;
    }

    traverseDepthFirstPreOrder() {
        let traversalResult = [];

        let traverse = (node) => {
            if(!node) {
                return;
            }
            traverse(node.left);
            traversalResult.push(node.value);
            traverse(node.right);
        }

        traverse(this);

        return traversalResult;
    }

    traverseDepthFirstPostOrder() {
        let traversalResult = [];

        let traverse = (node) => {
            if(!node) {
                return;
            }
            traverse(node.left);
            traverse(node.right);
            traversalResult.push(node.value);
        }

        traverse(this);

        return traversalResult;
    }

    traverseBreadthFirst() {
        let orderQueue = [this];
        let traversalResult = [];

        let traverse = (node) => {
            while(orderQueue.length && orderQueue.length > 0) {
                const node = orderQueue.shift();
                traversalResult.push(node.value);

                node.left && orderQueue.push(node.left);
                node.right && orderQueue.push(node.right);
            }
        }
        traverse(this);

        return traversalResult;
    }

    checkIfFull() {

        let ifFull = true;
        let check = (node) => {
            if ((node.left && !node.right) || (!node.left && node.right)) {
                ifFull = false;
                return;
            }
            ifFull && node.left && check(node.left);
            ifFull && node.right && check(node.right);
            return;
        }
        check(this);
        return ifFull;
    }

    checkIfBalanced() {
        let minHeight = 0;
        let maxHeight = 0;

        let check = (node, height) => {
            if(!node.left && !node.right) {
                if(minHeight===0 || minHeight > height) {
                    minHeight = height;
                }
                if(maxHeight < height) {
                    maxHeight = height;
                }
                return;
            }
            else if ((node.left || node.right) && ++height) {
                node.left && check(node.left, height);
                node.right && check(node.right, height);
            }
            return;
        }

        check(this, 0);

        return ((maxHeight-minHeight)===1);
    }
}

module.exports = BinaryTree;
