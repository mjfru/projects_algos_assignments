//! Strings To Do 1
/*
Write functions using the JavaScript language for all challenges.
Use only a single JavaScript file for this assignment. 
Do not use built-in methods (unless otherwise instructed). 
(.length is a property, and is allowed.)
*/

//! Remove Blanks
/* Create a function that, given a string, returns all of that string’s contents, but without blanks. 

? Examples:
removeBlanks(" Pl ayTha tF u nkyM usi c ") => "PlayThatFunkyMusic"
removeBlanks("I can not BELIEVE it's not BUTTER") => "IcannotBELIEVEit'snotBUTTER"
*/

//? Solution:
let removeBlanks = (word) => {
  // Make an empty string to be added to if the conditions are met:
  revisedWord = '';
  // Standard for loop to go through each letter in the given word:
  for (let i = 0; i < word.length; i++) {
    // If the value of the index the loop is on ISN'T blank, add it to the revisedWord variable
    if (word[i] !== ' ') {
      revisedWord += word[i];
    }
  }
  return revisedWord;
}

//? Tests:
console.log("~~~~~~~~~ Remove Blanks ~~~~~~~~~")
console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));
console.log(removeBlanks("I can not BELIEVE it's not BUTTER"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

//! Get Digits
/* 
Create a JavaScript function that given a string, returns the integer made from the string’s digits. 
You are allowed to use isNaN() and Number().

? Examples:
getDigits("abc8c0d1ngd0j0!8") => 801008
getDigits("0s1a3y5w7h9a2t4?6!8?0") => 1357924680
*/

//? Solution:
let getDigits = (input) => {
  let digitsOnly = '';
  for (i = 0; i < input.length; i++) {
    // This was the only tricky thing to wrap my head around because of the double-negatives
    // If the index of the input is a not...not a number...add it to the digits only.
    // Essentially, if it's a number, add it.
    if (!isNaN(input[i])) {
      digitsOnly += input[i]
    }
  }
  return digitsOnly;
}

console.log("~~~~~~~~~~ Digits Only ~~~~~~~~~~");
console.log(getDigits("abc8c0d1ngd0j0!8"));
console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")

//! Acronyms
/*
Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). 
You are allowed to use .split() and .toUpperCase().

? Examples:
acronym(" there's no free lunch - gotta pay yer way. ") => "TNFL-GPYW". 
acronym("Live from New York, it's Saturday Night!") => "LFNYISN".
*/

let makeAcronym = (phrase) => {
  let acronym = '';
  // Split the phrase into indexes of an array, seperating them out by the space between words.
  let newArray = phrase.split(' ');
  for (let i = 0; i < newArray.length; i++) {
    // Checking if the the value of the iterator isn't a blank space
    if (newArray[i] !== "") {
      // If it's not, append the first letter [0] of the word [i] we're iterating on to the acronym
      acronym += newArray[i][0];
    }
  }
  // Make it a proper acronym and capitalize it.
  return acronym.toUpperCase();
}

console.log("~~~~~~~~~~ Make Acronym ~~~~~~~~~")
console.log(makeAcronym(" there's no free lunch - gotta pay yer way. "))
console.log(makeAcronym("Live from New York, it's Saturday Night!"))
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")


//! Count Non-Spaces
/*
Create a function that, given a string, returns the number of non-space characters found in the string. 

? Examples:
countNonSpaces("Honey pie, you are driving me crazy") => 29
countNonSpaces("Hello world !") => 11
*/

let countNonSpaces = (string) => {
  // Initialize a counter at 0
  let counter = 0;
  for (let i = 0; i < string.length; i++)
    if (string[i] !== " ") {
      // If the index isn't a space, increment the counter by 1.
      counter += 1;
    }
    return counter;
}

console.log("~~~~~~~~ Count Non-Spaces ~~~~~~~");
console.log(countNonSpaces("Honey pie, you are driving me crazy"));
console.log(countNonSpaces("Hello world !"));
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

//! Remove Shorter Strings
/*
Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

? Examples:
removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4) => ['Good morning', 'sunshine', 'Earth', 'says', 'hello']
removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3) => ['There', 'bug', 'the', 'system']
*/

let removeShorterStrings = (array, minimum) => {
  let validStrings = []
  for (let i = 0; i < array.length; i++) {
    if (array[i].length >= minimum) {
      // If the word, [i] has a longer length than the provided minimum integer
      // Push / add the word to the valid strings array
      validStrings.push(array[i]);
    }
  }
  return validStrings;
}

console.log("~~~~~ Remove Shorter Strings ~~~~");
console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3))
console.log(removeShorterStrings(['Good morning', 'sunshine', 'the', 'Earth', 'says', 'hello'], 4))
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");