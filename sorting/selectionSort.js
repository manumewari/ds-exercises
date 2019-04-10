const selectionSort = (arr) => {
    if (arr !== null) {
        let len = arr.length;

        let temp;
        while (--len >= 0) {
            let biggestNumberIndex = 0;
            for (let j = 1; j<=len; j++) {
                if(arr[biggestNumberIndex] < arr[j]) {
                    biggestNumberIndex = j;
                }
            }
            temp = arr[len];
            arr[len] = arr[biggestNumberIndex];
            arr[biggestNumberIndex] = temp;
        }
    }

    return arr;
}

module.exports = selectionSort;
