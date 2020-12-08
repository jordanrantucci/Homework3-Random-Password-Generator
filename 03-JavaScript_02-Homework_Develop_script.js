// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() { 

//Character option variables
  var capitalLetter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numberChoice = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialCharacter = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", "=", "?", "<", ">", "/"]

// Empty Array for future generated password use

  var newCapitalLetter = [];
  var newLowerCase = [];
  var newNumberChoice = [];
  var newSpecialCharacter = [];
  var passwordResult = [];
  var newPassResult = [];


//Password length
var passwordLength = prompt("How many characters would you like your password to be? This must be a length between 8 and 128.");
//Confirm the password length is within the set parameters 
if(passwordLength < 8 || passwordLength > 128) {
    alert("Password must be between 8 and 128 characters.")
    return generatePassword();
}
//Password character selectors, the next steps of the prompts
else {
  var passwordUppercase = confirm ("Do you want to use capital letters in your password? Click 'OK' for yes and 'cancel' for no.");
  var passwordLowercase = confirm ("Do you want lowercase letters in your password? Click 'OK' for yes and 'cancel' for no.");
  var passwordNumber = confirm ("Do you want numbers included in your password? Click 'OK' for yes and 'cancel' for no.");
  var passwordSpecialCharacter = confirm ("Do you want to use special characters in your password? Click OK for yes and cancel for no.");
}

// console loggin to check results of confirmation 
console.log(passwordUppercase, passwordLowercase, passwordNumber, passwordSpecialCharacter);

//if capital letters were chosen 
if (passwordUppercase === true) { 
  for (i=0; i < passwordLength; i++){//making the selection the correct length
    var randomCap = Math.floor(Math.random() * capitalLetter.length); //this will randomize the charactes
    newCapitalLetter.push(capitalLetter[randomCap]); //inserting the random character into the empty array
    passwordResult.push(newCapitalLetter); //inserting the random character into the final password result
  }
}

  // if lowercase letters were chosen
  if (passwordLowercase === true) {
    for (i=0; i < passwordLength; i++){
      var randomLower = Math.floor(Math.random() * lowerCase.length);
      newLowerCase.push(lowerCase[randomLower]);
      passwordResult.push(newLowerCase);
    }
  }
  //if numbers were chosen 
  if(passwordNumber === true) {
    for (i=0; i < passwordLength; i++){
      var randomNumber = Math.floor(Math.random() * numberChoice.length);
      newNumberChoice.push(numberChoice[randomNumber]);
      passwordResult.push(newNumberChoice);
    }
  }
  //if special characters were chosen
  if(passwordSpecialCharacter === true) {
    for (i=0; i < passwordLength; i++){
      var randomCharacter = Math.floor(Math.random() * specialCharacter.length);
      newSpecialCharacter.push(specialCharacter[randomCharacter]);
      passwordResult.push(newSpecialCharacter);
    }
  }
  //random password generation after all cases are selected
  for(i = 0; i < passwordLength; i++)//this will make the password the correct length
   {var randomPassword = Math.floor(Math.random() * passwordResult.length); //randomizing length
    var randomIndex = Math.floor(Math.random() * passwordLength);
    newPassResult.push(passwordResult[randomPassword][randomIndex]); //creating the password with results from the chosen characters
  }
  return newPassResult.join(""); //returns new password as a string in the box
  }

  
  