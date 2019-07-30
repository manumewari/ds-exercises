const BinaryTree = require("./BinaryTree");

let checkMirrorImage = (tree1, tree2) => {
    let isMirrorImage = true;
    checkIfMirrorImage = (tree1, tree2)=> {
        isMirrorImage = isMirrorImage && ((tree1 && tree2) || (!tree1 && !tree2));
        isMirrorImage = isMirrorImage && (tree1.value === tree2.value);

        if(isMirrorImage) {
            checkMirrorImage(tree1.left, tree2.right);
            checkMirrorImage(tree1.right, tree2.left);
        }

        return;
    }
    return isMirrorImage;
}

module.exports = checkMirrorImage;

