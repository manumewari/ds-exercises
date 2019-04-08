const greatestcommondivisor = (num1, num2) => {

    if(num1 === num2) {
        return num1;
    }
    else if(num1 > num2) {
      return greatestcommondivisor(num1-num2, num2);
    }
    else {
        return greatestcommondivisor(num1, num2-num1);
    }

}

module.exports = greatestcommondivisor;
