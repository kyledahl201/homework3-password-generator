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
var numbers = [
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'
]

//function to ask user for password inputs

function getPasswordChoices() {
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

  var useUpperCase = confirm(
    "Click OK to use upper case letters in your password."
  );

  // variable to store answer if using lowercase letters 
  var useLowerCase = confirm(
    "Click OK to use lower case letters in your password."
  );

  // variable to store answer if using numbers 
  var useNumbers = confirm(
    "Click OK to use numbers in your password."
  );

  // conditional to make sure user selected one choice of characters 

  if (
    useLowerCase === false &&
    useNumbers === false &&
    useSpecialCharacters === false &&
    useUpperCase === false 
  ) {
    alert("Yous select at least one character input!");
    return;
  }



  //object to store user choices as variable 

  var passwordChoices = {
    length: length,
    useLowerCase: useLowerCase,
    useUpperCase: useUpperCase,
    useSpecialCharacters: useSpecialCharacters,
    useNumbers: useNumbers
  }

  return passwordChoices;

}



// function for generating random element from an array

function getRandom(arr) {
  var randGen = math.floor(math.random() * arr.length);
  var randElement = arr[randGen];

  return randElement;

}

// function to generate password form user choices 

function generatePassword() {
  var choices = getPasswordChoices();
}

//variable to store passsword generated 

var result = [];

// array to store types of characters used 

var = possibleCharacters [];


//array to make sure each character will get used once 

var = useCharacterOnce = [];

// conditional statement to concatinate choices into password

//for loop to iterate over length of password chosen and select random possible choices

// make sure at least one guarunteed character is in 

// turn result into string and pass into variable 









//reference #generate 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
