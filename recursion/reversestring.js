const reverseString = (value) => {
    const len = value.length;
    if(len === 0) {
        return "";
    }

    return value[len-1] + reverseString(value.substr(0, len-1));
}

module.exports = reverseString;