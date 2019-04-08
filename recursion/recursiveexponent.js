const recursiveExponent = (value, exp) => {
    if(exp === 1) {
        return value;
    }
    else {
        return value * recursiveExponent(value, --exp);
    }
}

module.exports = recursiveExponent;