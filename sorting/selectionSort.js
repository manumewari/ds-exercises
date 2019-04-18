const selectionSort = (arr) => {
    if (arr && Array.isArray(arr)) {
        let index = arr.length;

        while (--index >= 0) {
            let biggestNumberIndex = 0;
            for (let j = 1; j<=index; j++) {
                if(arr[biggestNumberIndex] < arr[j]) {
                    biggestNumberIndex = j;
                }
            }
            [arr[index], arr[biggestNumberIndex]] = [arr[biggestNumberIndex], arr[index]];
        }
    }

    return arr;
}

module.exports = selectionSort;
