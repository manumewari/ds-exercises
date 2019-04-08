
const checkPalindromeIgnoreNonAlphanumeric = (value) => {
    if (value !== null && value.trim() != "") {
        value = value.toLowerCase().split("").filter((element) => {
            return (element !== " " && isAlphaNum(element));
    });
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
};

var isAlphaNum = (str) => {
    return ( (str >= 0 && str <= 9) || (str >= "a" && str <= "z") || (str >= "A" && str <= "Z"));
}

module.exports = checkPalindromeIgnoreNonAlphanumeric;