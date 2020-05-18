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

  //conditional to check if length is between 8 and 128 characters

  if (length < 8 || length > 128) {
    alert("Please choose a password between 8 and 128 characters in length.");
    return;
  }

  // variable to store answer if special characters are to be used
  var useSpecialCharacters = confirm(
    "Click OK to use special characters in your password.");
  

  // variable to store answer if using uppercase letters 

  var useUpperCase = confirm (
    "Click OK to use Upper Case letters in your password."
  );

  // variable to store answer if using lowercase letters 
  var useLowerCase = confirm (
    "Click OK to use Lower Case letters in your password."
  );

  // conditional to make sure user selected one choice of characters 

  //object to store user choices as variable 

  // function for generating random element from an array

  // function to generate password form user choices 

  //variable to store passsword generated 

  // array to store types of characters used 

  //array to make sure each character will get used once 

  // conditional statement to concatinate choices into password

  //for loop to iterate over length of password chosen and select random possible choices

  // make sure at least one guarunteed character is in 

  // turn result into string and pass into variable 

 

 



}

//reference #generate 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
