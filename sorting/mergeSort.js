const mergeSort = (arr) => {
    if(arr && Array.isArray(arr)) {
        const len = arr.length;

        if(len <= 1) {
            return arr;
        }

        const mid = len / 2;

        const leftHalf = arr.slice(0, mid);
        const rightHalf = arr.slice(mid);

        const leftSorted = mergeSort(leftHalf);
        const rightSorted = mergeSort(rightHalf);

        return merge(leftSorted, rightSorted);
    }
}

const merge = (leftArray, rightArray) => {
    let result = [];
    const totalLength = leftArray.length + rightArray.length;
    let leftIndex = 0;
    let rightIndex = 0;

    while (result.length < totalLength) {

        if (leftIndex === leftArray.length) {
            result = result.concat(rightArray.slice(rightIndex));
        }
        else if (rightIndex === rightArray.length) {
            result = result.concat(leftArray.slice(leftIndex));
        }
        else if (leftArray[leftIndex] <= rightArray[rightIndex]) {
            result.push(leftArray[leftIndex++]);
        }
        else {
            result.push(rightArray[rightIndex++]);
        }
    }
    return result;
}

module.exports = mergeSort;
