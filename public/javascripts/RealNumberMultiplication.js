function multiplyRealNumber (multiplied, multiplier) {
    const multipliedString = multiplied.toString(), multiplierString = multiplier.toString()

    let multipliedDenominatorInt = 1, multiplierDenominatorInt = 1
    const isMultipliedDecimal = (multipliedString.includes('.')), isMultiplierDecimal = (multiplierString.includes('.'))
    if (isMultipliedDecimal) {
        multipliedDenominatorInt = createDenominator(multipliedString.split('.')[1].length)
    }

    if (isMultiplierDecimal) {
        multiplierDenominatorInt = createDenominator(multiplierString.split('.')[1].length)
    }

    let multipliedInt = multiplied, multiplierInt = multiplier
    if (isMultipliedDecimal) {
        const multipliedArray = multipliedString.split('.')
        multipliedInt = Number((multipliedArray.length > 1) ? multipliedArray[0] + multipliedArray[1] : multipliedArray[0])
    }

    if (isMultiplierDecimal) {
        const multiplierArray = multiplierString.split('.')
        multiplierInt = Number((multiplierArray.length > 1) ? multiplierArray[0] + multiplierArray[1] : multiplierArray[0])
    }

    return ((multipliedInt * multiplierInt) / (multipliedDenominatorInt * multiplierDenominatorInt))
}

function createDenominator (length) {
    let denominatorString = '1'
    for (let count = 0; count < length; count++) {
        denominatorString += '0'
    }
    return (Number(denominatorString))
}

console.log(multiplyRealNumber(1, 3))
console.log(multiplyRealNumber(.1, .3))
console.log(multiplyRealNumber(-1, -3))
console.log(multiplyRealNumber(1, -3))
console.log(multiplyRealNumber(.1, 3))
console.log(multiplyRealNumber(1, .3))