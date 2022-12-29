function reverseString(str) {
  // type your code here
  let splitted = str.split("");
  let i = [];
  for (let i = 0; i < str.length; i++) {
    // console.log(splitted[i]);
    return splitted[i];
  }
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
