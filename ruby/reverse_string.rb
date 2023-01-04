def reverse_string(str)
  # type your code in here

  ### Using while method

  # Varilable to store iterated letter
  newStr = ""

  # While i is less than string length (5), in other words,
  # while i is less than 5, add iterated letter in front of exsiting letter
  # increment i
  i = 0
  while i < str.length
    newStr = str[i] + newStr
    i += 1
  end

  return newStr

  

  ### Using .each method

  ## Split str and create empty variable to store letters
  # newStr = str.split("")
  # reversedStr = []

  ## Iterate each letter and add in front of previous letter
  # newStr.each do |s| 
  #   reversedStr.unshift(s)
  # end

  # return reversedStr.join("")

  ### Using .reverse method
  # newStr = str.split("").reverse().join("")
  # return newStr
  
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'ih'"
  puts "=>", reverse_string('hi')

  puts

  puts "Expecting: 'ybabtac'"
  puts "=>", reverse_string('catbaby')

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
## I want to input reveresed string

## First, create variable and split string 
## Then, iterate each letter AND ADD LETTER IN FRONT OF PREVIOUS LETTER

# And a written explanation of your solution