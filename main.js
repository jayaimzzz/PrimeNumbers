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

function listThisManyPrimeNumbers(a) {
    let counter = 1
    let primeCounter = 1
    while (counter <= a) {
        if (isThisPrime(primeCounter)) {
            document.write(primeCounter + ", ")
            counter++
            primeCounter++
        } else {
            primeCounter++
        }
    }
}
let quantityOfPrimeNumbers = prompt("How many prime numbers would you like to calculate?")
listThisManyPrimeNumbers(quantityOfPrimeNumbers)
