
function towerOfHanoiRecur (discCount, source, destination, buffer) {
    if (discCount >= 1)
    {
        towerOfHanoiRecur (discCount-1, source, buffer, destination);

        console.log("Move disc from "+source+" to "+destination);

        towerOfHanoiRecur (discCount-1, buffer, destination, source);
    }

    return;
}

towerOfHanoiRecur (3, 'T1', 'T2', 'T3');

model.exports = towerOfHanoiRecur;

