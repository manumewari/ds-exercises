const recursiveMultiplier = (arr, num) => {
    if(arr.length === 0) {
        return arr;
    }
    let lastElement = arr.pop();
    recursiveMultiplier(arr, num);

    arr.push(lastElement * num);

    return arr;
}

module.exports = recursiveMultiplier;
