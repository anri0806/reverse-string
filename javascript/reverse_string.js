function reverseString(str) {
  // type your code here

  let newString = "";

  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;

  // let newStr = str.split("").reverse().join("");

  // return newStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
//// I want to input reversed letters 1 by 1
//// First, create empty variable to store iterated letters
//// Iterate from last length-1, until equal to 0, decrement
//// Add iterated letters to variable
//// Then, return variable

// And a written explanation of your solution
