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



// //This function is not working yet.
// function findTheNextPrime(a) {
//     let i = 1
//     let foundIt = false
//     while (foundIt = false){
//         let counter = 2

//     }
//     foundIt = true
//     let result = a + i
// }

// let primeNumbersDiv = document.getElementById("primeNumbersDiv")
// function listThisManyPrimeNumbers(a) {
//     let counter = 1
//     let primeCounter = 1
//     while (counter <= a) {
//         if (isThisPrime(primeCounter)) {
//             writeToScreen(primeCounter)
//             counter++
//             primeCounter++
//         } else {
//             primeCounter++
//         }
//     }
// }

function writeToScreen(number) {
    const numberToDisplay = document.createTextNode(number + ", ")
    let primeNumbersDiv = document.getElementById("primeNumbersDiv")
    primeNumbersDiv.appendChild(numberToDisplay)
    // primeNumbersDiv.textContent += number + ", "

    // primeNumbersDiv.appendChild(number + ", ")
    // document.write(number + ", ")
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

function listThisManyPrimeNumbers(a) {
    let i = 1
    aPrimeNumber = 1
    theNextPrimeNumber = 1
    while (i <= a) {
        aPrimeNumber = theNextPrimeNumber
        // document.write(aPrimeNumber + ", ")
        writeToScreen(aPrimeNumber)
        theNextPrimeNumber = findTheNextPrime(aPrimeNumber)
        i++
    }
}



let quantityOfPrimeNumbers = 3
// let quantityOfPrimeNumbers = prompt("How many prime numbers would you like to calculate?")
listThisManyPrimeNumbers(quantityOfPrimeNumbers)