
function isThisPrime(a) {
    let counter = 2
    let result = true
    while (counter < a) {
        if (a % counter == 0) {
            result = false
            counter = a
        } else {
            result = true
            // writeToScreen(counter)
            // setTimeout(writeToScreen(counter), 1000)
            counter++
        }
    }
    return result
}



//This function is not working yet.
function findTheNextPrime(a) {
    let i = 1
    let foundIt = false
    while (foundIt = false){
        let counter = 2
        
    }
    foundIt = true
    let result = a + i
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
    const numberToDisplay = document.createTextNode(number + ", ")
    primeNumbersDiv.appendChild(numberToDisplay)
    // primeNumbersDiv.textContent += number + ", "

    // primeNumbersDiv.appendChild(number + ", ")
    // document.write(number + ", ")
}


let quantityOfPrimeNumbers = prompt("How many prime numbers would you like to calculate?")
listThisManyPrimeNumbers(quantityOfPrimeNumbers)
