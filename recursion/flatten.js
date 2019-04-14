const flatten = (arr) => {
    let flattenArray = [];
    arr.forEach((item) => {
        if (Array.isArray(item)) {
            flattenArray = flattenArray.concat(flatten(item));
        }
        else {
            flattenArray.push(item);
        }
    });
    return flattenArray;
}

module.exports = flatten;
