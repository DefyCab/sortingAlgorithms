const string = "Jag heter Love Bellinder"

// split adn reverse a string

let splitString = string.split("")

let splitReversedString = splitString.reverse()

let joinedReversedString = splitReversedString.join("")

console.log(joinedReversedString)

// palindrome challenge

// Problems: function is case sensitive
function isPalindrome(str) {
  const reversedString = str.split("").reverse().join("")
  if (str === reversedString) {
    return `${str} is a palindrome`
  } else {
    return `${str} is NOT a palindrome`
  }
}

console.log(isPalindrome("abba"))

function findLongestWord(sentence) {
  let sentenceNoDots = sentence.replaceAll(".", " ")
  const words = sentenceNoDots.split(" ")
  let longestWord = ""
  let counter = 0

  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word
      console.log(longestWord)
    }
    counter++
  }
  return longestWord
}

const sentenceToBeTested =
  "Love är ett vackert namn som finns i sagorna. Jag vet inte varför det skulle vara så egendomligt"

console.log(findLongestWord(sentenceToBeTested))
