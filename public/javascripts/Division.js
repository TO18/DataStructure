function division(dividendInt, divisorInt) {
    let resultString = '', latestDividendString = '', dividendCharIndex = 0, dividendString = dividendInt.toString()

    if (divisorInt === 0) return 'you can\' divide by 0'

    while (latestDividendString !== '0' || (dividendCharIndex < dividendString.length)) {
        latestDividendString += (dividendCharIndex >= dividendString.length)? '0': dividendString.charAt(dividendCharIndex)
        console.log('latestDividendString: ' + latestDividendString)

        const remainder = Number(latestDividendString) % divisorInt
        const resultDigitInt = (Number(latestDividendString) - remainder) / divisorInt
        console.log('resultDigitInt: ' + resultDigitInt)

        if (dividendCharIndex === dividendString.length) resultString += '.'
        resultString += resultDigitInt.toString()
        console.log('resultString: ' + resultString)

        latestDividendString = (Number(latestDividendString) - (divisorInt * resultDigitInt)).toString()
        console.log('latestDividendString: ' + latestDividendString)

        if (resultString.includes('.')) {
            const resultStringDecimal = resultString.split('.')[1]
            console.log('resultStringDecimal: ' + resultStringDecimal)
            if (resultStringDecimal.length > 6 && resultStringDecimal.charAt(resultStringDecimal.length - 1) !== '0') latestDividendString = '0'
        }

        dividendCharIndex++
    }

    return (Number(resultString))
}

console.log(division(12, 15))
console.log(division(17, 15))
console.log(division(19, 15))
console.log(division(19, 0))
console.log(division(0, 19))
console.log(division(15, 5))
console.log(division(5, 100000000000005))
console.log(division(100000000000000005, 5))