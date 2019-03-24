const Stack = require("./Stack");

function TowerOfHanoi (discCount) {
    this.discCount = discCount;
    this.towerA = new Stack(discCount);
    this.towerB = new Stack(discCount);
    this.towerC = new Stack(discCount);

    var noOfDiscs = discCount;
    while (noOfDiscs > 0) {
        this.towerA.push("Disc"+(noOfDiscs--));
    }
}

TowerOfHanoi.prototype.startMovingDiscs = function () {

    this.solvePuzzle (this.discCount, this.towerA, this.towerC, this.towerB);
}

TowerOfHanoi.prototype.solvePuzzle = function (discCount, towerA, towerB, towerC) {

    if (discCount >= 1) {

        this.solvePuzzle(discCount-1, towerA, towerC, towerB);

        var poppedElement = towerA.pop();

        towerB.push(poppedElement);

        this.solvePuzzle(discCount-1, towerC, towerB, towerA);
    }
}

module.exports = TowerOfHanoi;

