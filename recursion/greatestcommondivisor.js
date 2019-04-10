const greatestCommonDivisor = (num1, num2) => {

    if(num1 === num2) {
        return num1;
    }
    else if(num1 > num2) {
      return greatestCommonDivisor(num1-num2, num2);
    }
    else {
        return greatestCommonDivisor(num1, num2-num1);
    }

}

module.exports = greatestCommonDivisor;
