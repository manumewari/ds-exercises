const bubbleSort = (arr) => {

    if(arr !== null) {
        let len = arr.length;

        let temp = 0;
        for (let i=0; i<len; i++) {
            for (let j=0; j<len-i-1; j++) {
                if (arr[j] > arr[j+1]) {
                    temp = arr[j+1];
                    arr[j+1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
    }

    return arr;
}

module.exports = bubbleSort;
