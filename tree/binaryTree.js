class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insert(value) {
        if (value <= this.value) {
            if(this.left) {
                this.left.insert(value);
            }
            else {
                this.left = new BinaryTree(value);

                console.log("LEFT side node created : "+value);
            }
        }
        else {
            if(this.right) {
                this.right.insert(value);
            }
            else {
                this.right = new BinaryTree(value);
                console.log("RIGHT side node created : "+value);
            }
        }
        return this;
    }

    contains (value) {
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

    traverseDepthFirstInOrder (node) {
        let traversalResult = [];

        let traverse = (node) => {
            if(!node) {
                return;
            }
            traversalResult.push(node.value);
            traverse(node.left);
            traverse(node.right);
        }

        traverse(node);
        return traversalResult;
    }

    traverseDepthFirstPreOrder (node) {
        let traversalResult = [];

        let traverse = (node) => {
            if(!node) {
                return;
            }
            traverse(node.left);
            traversalResult.push(node.value);
            traverse(node.right);
        }

        traverse(node);

        return traversalResult;
    }

    traverseDepthFirstPostOrder (node) {
        let traversalResult = [];

        let traverse = (node) => {
            if(!node) {
                return;
            }
            traverse(node.left);
            traverse(node.right);
            traversalResult.push(node.value);
        }

        traverse(node);

        return traversalResult;
    }
}

module.exports = BinaryTree;
