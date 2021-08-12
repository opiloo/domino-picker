// I want to create an app 
// Which picks a random domino for the user

// I want my Javascript to be able to PICK
// Any DOMINO element, how?

// Anything sort of array-like into an array
// Use Array.from() to convert it into an array
// Nodelist 

function getRandomNumber (min, max) { // min and max included 
    // SOURCE: https://stackoverflow.com/a/7228322/1034856
    // LICENSE: https://creativecommons.org/licenses/by-sa/4.0/
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let dominoList = document.querySelectorAll(".domino-list > li")
console.log(dominoList)

let firstIndex = 0
let lastIndex = dominoList.length - 1
let randomIndex = getRandomNumber(firstIndex, lastIndex)
// I want a random number between firstIndex and lastIndex

let randomDominoElement = dominoList[randomIndex]
console.log(randomDominoElement)


randomDominoElement.classList.add("selected")

