function reverseString(str) {
  // type your code here

  let newStr = [];

  for (let i = str.length-1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
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

//// Second Time /////
// I want to console log reversed word using iteration
// First, create empty variable to store iterated letter
// Second, iterate word from last length then add to above variable
// Then, return variable

//// FIrst Time /////
//// I want to input reversed letters 1 by 1
//// First, create empty variable to store iterated letters
//// Iterate from last length-1, until equal to 0, decrement
//// Add iterated letters to variable
//// Then, return variable

// function reverseString(str) {
//   // type your code here

//   let newString = "";

//   for (let i = str.length - 1; i >= 0; i--) {
//     newString += str[i];
//   }

//   return newString;

//   // let newStr = str.split("").reverse().join("");

//   // return newStr
// }
