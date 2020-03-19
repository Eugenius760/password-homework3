// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
    var lwrCase = "abcdefghijklmnopqrstuvwxyz"
    var uprCase = "ABDCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numChar = "1234567890"
    var specChar = "!@#$%^&*?"
    /****
     * WRITE YOUR CODE HERE
     */
    alert("I am in generate password");
  
    return "sometext";
  }
  
  //////////////////////////////////////////////////////////////
  // DO NOT TOUCH THE CODE BELOW
  //////////////////////////////////////////////////////////////
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