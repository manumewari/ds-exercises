
const checkPalindrome = (value) => {
    if (value !== null && value.trim() != "") {
        let startIndex = 0;
        let endIndex = value.length - 1;

        while (startIndex <= endIndex) {
            if(value[startIndex] !== value[endIndex]) {
                return false;
            }
            startIndex ++;
            endIndex --;
        }
        return true;
    }
    return false;
}

module.exports = checkPalindrome;
