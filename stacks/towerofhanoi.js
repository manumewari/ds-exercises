const Stack = require("./Stack");

function TowerOfHanoi (discCount) {
    this.discCount = discCount;
    this.towerA = new Stack(discCount);
    this.towerB = new Stack(discCount);
    this.towerC = new Stack(discCount);

    var noOfDiscs = discCount;
    while (noOfDiscs-- > 0) {
        this.towerA.push("Disc");
    }
}

TowerOfHanoi.prototype.startMovingDiscs = function () {

    this.solvePuzzle (this.discCount, "A", "C", "B");
}

TowerOfHanoi.prototype.solvePuzzle = function (discCount, source, destination, buffer) {

    if (discCount >= 1) {

        this.solvePuzzle(discCount-1, source, buffer, destination);

        var poppedElement = "";
        if (source === "A") {
            poppedElement = this.towerA.pop();
        }
        else if (source === "B") {
            poppedElement = this.towerB.pop();
        }
        else if (source === "C") {
            poppedElement = this.towerC.pop();
        }

        if (destination === "A") {
            this.towerA.push(poppedElement);
        }
        else if (destination === "B") {
            this.towerB.push(poppedElement);
        }
        else if (destination === "C") {
            this.towerC.push(poppedElement);
        }

        this.solvePuzzle(discCount-1, buffer, destination, source);
    }
    return;
}

module.exports = TowerOfHanoi;

