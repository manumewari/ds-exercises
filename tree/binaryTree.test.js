const BinaryTree = require("./BinaryTree");

test("contains() should return true if value is present in tree", ()=> {
    const binaryTree = new BinaryTree(12);
    binaryTree.insert(2);
    binaryTree.insert(3);
    binaryTree.insert(15);
    binaryTree.insert(13);

    expect(binaryTree.contains(2)).toBeTruthy();
});

test("contains() should return false if value is present in tree", ()=> {
    const binaryTree = new BinaryTree(12);
    binaryTree.insert(2);
    binaryTree.insert(3);
    binaryTree.insert(15);
    binaryTree.insert(13);

    expect(binaryTree.contains(22)).toBeFalsy();
});

test("traverseDepthFirstInOrder() should return elements as per In order traversal", ()=> {
    const binaryTree = new BinaryTree(12);
    binaryTree.insert(2);
    binaryTree.insert(3);
    binaryTree.insert(15);
    binaryTree.insert(13);
    binaryTree.insert(14);
    binaryTree.insert(1);
    binaryTree.insert(5);
    binaryTree.insert(4);
    binaryTree.insert(16);

    expect(binaryTree.traverseDepthFirstInOrder(binaryTree)).toEqual([12,2,1,3,5,4,15,13,14,16]);
});

test("traverseDepthFirstInOrder() should return elements as per Pre order traversal", ()=> {
    const binaryTree = new BinaryTree(12);

    binaryTree.insert(2);
    binaryTree.insert(3);
    binaryTree.insert(15);
    binaryTree.insert(13);
    binaryTree.insert(14);
    binaryTree.insert(1);
    binaryTree.insert(5);
    binaryTree.insert(4);
    binaryTree.insert(16);

    expect(binaryTree.traverseDepthFirstPreOrder(binaryTree)).toEqual([1,2,3,4,5,12,13,14,15,16]);
});

test("traverseDepthFirstInOrder() should return elements as per Post order traversal", ()=> {
    const binaryTree = new BinaryTree(12);

    binaryTree.insert(2);
    binaryTree.insert(3);
    binaryTree.insert(15);
    binaryTree.insert(13);
    binaryTree.insert(14);
    binaryTree.insert(1);
    binaryTree.insert(5);
    binaryTree.insert(4);
    binaryTree.insert(16);

    expect(binaryTree.traverseDepthFirstPostOrder(binaryTree)).toEqual([1,4,5,3,2,14,13,16,15,12]);
});

