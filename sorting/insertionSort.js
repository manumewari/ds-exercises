const insertionSort = (arr) => {
    if(arr && Array.isArray(arr)) {
        const len = arr.length;
        for(let i=1; i<len; i++) {
            let j=i;
            let currentNumber = arr[i];
            while( --j>=0 && arr[j] > currentNumber) {
                arr[j+1] = arr[j];
            }
            arr[j+1] = currentNumber;
        }
    }
    return arr;
}

module.exports = insertionSort;
