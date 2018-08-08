let distination = document.getElementById('div1')
// I should write more comments
function displayToPage(a) {
    let text = document.createTextNode(a)
    let spanText = document.createElement('span')
    spanText.appendChild(text)
    distination.appendChild(spanText)
}

function displayToPageAddComma(a) {
    a = a + ', '
    displayToPage(a)
}

function splitA4DigitNumber(a) {
    let splitNumber = [0, 0, 0, 0]
    splitNumber[0] = Math.floor(a / 1000)
    splitNumber[1] = (Math.floor(a / 100)) % 10
    splitNumber[2] = (Math.floor(a / 10)) % 10
    splitNumber[3] = (Math.floor(a)) % 10
    return splitNumber
}

const zeroToNineteenWORDS = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
const tenPlaceWORDS = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninty']

function convertNumberToWord(a) {
    let word = ''
    let splitNumber = splitA4DigitNumber(a)
    let singlesPlace = splitNumber[3]
    let tensPlace = splitNumber[2]
    let hundredsPlace = splitNumber[1]
    let thousandsPlace = splitNumber[0]
    let twoLSDs = parseInt(tensPlace.toString() + singlesPlace.toString())
    let twoLSDsWord = ''
    let hundredsPlaceWord = ''
    let thousandsPlaceWord = ''
    if (twoLSDs < 10) {
        twoLSDsWord = zeroToNineteenWORDS[singlesPlace]
    }

    if (10 <= twoLSDs < 20) {
        twoLSDsWord = zeroToNineteenWORDS[twoLSDs]
    }

    if (twoLSDs < 100 && twoLSDs >= 20) {
        if (twoLSDs % 10 == 0) {
            twoLSDsWord = tenPlaceWORDS[tensPlace]
        } else {
            twoLSDsWord = tenPlaceWORDS[tensPlace] + " " + zeroToNineteenWORDS[singlesPlace]
        }
    }


    if (hundredsPlace !== 0) {
        hundredsPlaceWord = zeroToNineteenWORDS[hundredsPlace] + ' hundred '
    }

    if (thousandsPlace !== 0) {
        thousandsPlaceWord = zeroToNineteenWORDS[thousandsPlace] + ' thousand '
    }

    word = thousandsPlaceWord + hundredsPlaceWord + twoLSDsWord
    return word
}

function convertWordToNumber(a) {
    i = 1
    result = ""
    matchedYet = false
    while (matchedYet == false && i < 10000) {
        if (a == convertNumberToWord(i) || a + " " == convertNumberToWord(i)) {
            result = i
            matchedYet = true
        } else {
            i++
        }
    }
    return result
}
console.log(convertWordToNumber("one hundred"))


function isThisPrime(a) {
    let counter = 2
    let result = true
    while (counter < a) {
        if (a % counter == 0) {
            result = false
            counter = a
        } else {
            result = true
            counter++
        }
    }
    return result
}



function findTheNextPrime(a) {
    let i = 1
    let theNextPrime = 1
    let foundItYet = false
    while (foundItYet == false) {
        if (isThisPrime(a + i)) {
            theNextPrime = a + i
            foundItYet = true
        } else {
            i++
        }
    }

    return theNextPrime
}

let primeNumbersDiv = document.getElementById("primeNumbersDiv")
function listThisManyPrimeNumbers(a) {
    let counter = 1
    let primeCounter = 1
    while (counter <= a) {
        if (isThisPrime(primeCounter)) {
            writeToScreen(primeCounter)
            counter++
            primeCounter++
        } else {
            primeCounter++
        }
    }
}

function writeToScreen(number) {
    document.write(number + ", ")
}
function listThisManyPrimeNumbers(a) {
    let i = 1
    aPrimeNumber = 1
    theNextPrimeNumber = 1
    while (i <= a) {
        aPrimeNumber = theNextPrimeNumber
        writeToScreen(aPrimeNumber)
        theNextPrimeNumber = findTheNextPrime(aPrimeNumber)
        i++
    }
}


let quantityOfPrimeNumbers = prompt("How many prime numbers would you like to calculate?")
// let quantityOfPrimeNumbers = "two"
if (typeof quantityOfPrimeNumbers  == 'string') {
    quantityOfPrimeNumbers =  convertWordToNumber(quantityOfPrimeNumbers)
}
listThisManyPrimeNumbers(quantityOfPrimeNumbers)


