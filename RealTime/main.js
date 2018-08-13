let listThisMany = prompt ("How many prime numbers would you like to calculate?")

let destination = document.getElementById('primeNumbersDiv')
function displayToPage (a){
    let text = document.createTextNode(a + ", ");
    let span = document.createElement('span');
    span.appendChild(text);
    primeNumbersDiv.appendChild(span)
}
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

let primeNumber = 1
for (let i = 1; i < listThisMany; i++){
    displayToPage(primeNumber);
    primeNumber = findTheNextPrime(primeNumber)
}