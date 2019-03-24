const Stack = require("./Stack");

function TowerOfHanoi (discCount) {
    this.tower1 = new Stack(discCount);
    this.tower2 = new Stack(discCount);
    this.tower3 = new Stack(discCount);

    var noOfDiscs = discCount;
    while (noOfDiscs-- > 0) {
        this.tower1.push("Disc");
    }

    console.log("### T1.count : "+this.tower1.count()+", T2.count : "+this.tower2.count()+", T31.count : "+this.tower3.count());

    this.solvePuzzle (discCount, "A", "C", "B");

    console.log("@@@ T1.count : "+this.tower1.count()+", T2.count : "+this.tower2.count()+", T31.count : "+this.tower3.count());
}

TowerOfHanoi.prototype.solvePuzzle = function (discCount, source, destination, buffer) {

    if (discCount >= 1) {
        this.solvePuzzle(discCount-1, source, buffer, destination);

        console.log("discCount : "+discCount+", source : "+source+", dest : "+ destination+", buff : "+ buffer);

        var str = "Move disc from ";

        var poppedElement = "";
        if (source === "A") {
            poppedElement = this.tower1.pop();
            str+="A to ";
        }
        else if (source === "B") {
            poppedElement = this.tower2.pop();
            str+="B to ";
        }
        else if (source === "C") {
            poppedElement = this.tower3.pop();
            str+="C to ";
        }

        if (buffer === "A") {
            this.tower1.push(poppedElement);
            str+=" A ";
        }
        else if (buffer === "B") {
            this.tower2.push(poppedElement);
            str+=" B ";
        }
        else if (buffer === "C") {
            this.tower3.push(poppedElement);
            str+=" C ";
        }

        console.log("str : "+str);
        console.log("$$$ T1.count : "+this.tower1.count()+", T2.count : "+this.tower2.count()+", T31.count : "+this.tower3.count());

        this.solvePuzzle(discCount-1, buffer, destination, source);
    }
    return;
}

module.exports = TowerOfHanoi;

