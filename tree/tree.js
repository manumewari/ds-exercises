
class Tree {
    constructor (value) {
        this.value = value;
        this.children = [];
    }

    addChild(value) {
        const child = new Tree(value);
        this.children.push(child);
        return child;
    }

    contains(value) {
        if (this.value === value) {
            return true;
        }
        const len = this.children.length;
        for (let i=0; i<len; i++) {
            if (this.children[i].contains(value)) {
                return true;
            }
        }
        return false;
    }

    depthFirstTraversal() {
        let output = [];

        let traverse = (node) => {
            output.push(node.value);
            const len = node.children.length;
            for (let i=0; i<len; i++) {
                traverse(node.children[i]);
            }
        }

        traverse(this);
        return output;
    }
}

module.exports = Tree;
