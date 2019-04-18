
class Tree {
    constructor (value) {
        this.value = value;
        this.children = [];
    }

    addChild(newValue) {
        const child = new Tree(newValue);
        this.children.push(child);
        return child;
    }

    contains(value) {
        if (this.value === value) {
            return true;
        }
        return this.children.find(child => child.contains(value));
    }

    depthFirstTraversal() {
        let output = [];

        let traverse = (node) => {
            output.push(node.value);
            node.children.forEach(child => traverse(child));
        }

        traverse(this);
        return output;
    }
}

module.exports = Tree;
