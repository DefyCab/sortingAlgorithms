const string = "Jag heter Love Bellinder"

// split adn reverse a string

let splitString = string.split("")

let splitReversedString = splitString.reverse()

let joinedReversedString = splitReversedString.join("")

console.log(joinedReversedString)

// palindrome challenge

// function is case sensitive
function isPalindrome(str) {
    const reversedString = str.split("").reverse().join("")
    if(str === reversedString) {
        return `${str} is a palindrome` 
    } else {
        return `${str} is NOT a palindrome`
    }
}

console.log(isPalindrome("abba"))