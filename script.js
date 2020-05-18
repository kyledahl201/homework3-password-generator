// Assignment Code
var generateBtn = document.querySelector("#generate");

// write variable arrays for password inputs

//array of lower case letters
var lowerCase = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]
var upperCase = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' 
]
var specialCharacters [
  '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=' 
]

//function to ask user for password inputs

function getPassword() {
  //variable for user's password length
  var length = parseInt(
    prompt("How long would you like your password to be?")
  );

  //make sure password is a number with isnan

  if (isNaN(length) === true) {
    alert("Write a number for length please!");
    return;
  }



}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
