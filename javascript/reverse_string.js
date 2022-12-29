function reverseString(str) {
  // type your code here

  // let reveresed = str.split("").reverse().join("");
  // return reveresed

  // Create empty string to store iterated letter
  let newStr = "";

  // Iterate from last letter (last length - 1); until 0; decrement
  for (let i = str.length-1; i >= 0; i--) {
    // Add iterated letter to empty string
    newStr += str[i];
  }

  // Return new string!
  return newStr
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

///// I want to print string from the last length to first length
///// First, separate string
///// Then, iterate backward

// And a written explanation of your solution
