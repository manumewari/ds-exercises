const Tree = require("./Tree");

test("if a value is searched in a tree which is present at the root node, contains() should return true", () => {
    const tree = new Tree(1); //Root node
    const branch1 = tree.addChild(2); //Level 1
    const branch2 = tree.addChild(3); //Level 1
    branch1.addChild(4); //Level 2
    branch1.addChild(5); //Level 2
    branch2.addChild(6); //Level 2
    branch2.addChild(7); //Level 2

    expect(tree.contains(1)).toBeTruthy();
});

test("if a value is searched in a tree which is not present in the tree, contains should return true", () => {
    const tree = new Tree(1); //Root node
    const branch1 = tree.addChild(2); //Level 1
    const branch2 = tree.addChild(3); //Level 1
    branch1.addChild(4); //Level 2
    branch1.addChild(5); //Level 2
    branch2.addChild(6); //Level 2
    branch2.addChild(7); //Level 2

    expect(tree.contains(11)).toBeFalsy();
});

test("if a value is searched in a tree which is present in the tree, contains() should return true", () => {
    const tree = new Tree(1); //Root node
    const branch1 = tree.addChild(2); //Level 1
    const branch2 = tree.addChild(3); //Level 1
    branch1.addChild(4); //Level 2
    branch1.addChild(5); //Level 2
    branch2.addChild(6); //Level 2
    branch2.addChild(7); //Level 2

    expect(tree.contains(7)).toBeTruthy();
});

test("test for depth first traversal", () => {
    const tree = new Tree(1); //Root node
    const branch1 = tree.addChild(2); //Level 1
    const branch2 = tree.addChild(3); //Level 1
    branch1.addChild(4); //Level 2
    branch1.addChild(5); //Level 2
    branch2.addChild(6); //Level 2
    branch2.addChild(7); //Level 2

    expect(tree.depthFirstTraversal()).toEqual([1,2,4,5,3,6,7]);
});

