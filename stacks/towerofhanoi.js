const Stack = require("./Stack");

class TowerOfHanoi {
    constructor(discCount) {
        this.discCount = discCount;
        this.towerA = new Stack(discCount);
        this.towerB = new Stack(discCount);
        this.towerC = new Stack(discCount);

        let noOfDiscs = discCount;
        while (noOfDiscs > 0) {
            this.towerA.push("Disc"+(noOfDiscs--));
        }
    }

    startMovingDiscs() {

        this.solvePuzzle (this.discCount, this.towerA, this.towerC, this.towerB);
    }

    solvePuzzle(discCount, towerA, towerB, towerC) {

        if (discCount >= 1) {

            this.solvePuzzle(discCount-1, towerA, towerC, towerB);

            let poppedElement = towerA.pop();

            towerB.push(poppedElement);

            this.solvePuzzle(discCount-1, towerC, towerB, towerA);
        }
    }
}

module.exports = TowerOfHanoi;

