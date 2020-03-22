// Write a function that takes user input and creates a password
// based on that input and returns it
function generatePassword() {
    var charCh = "abcdefghijklmnopqrstuvwxyzABDCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*?";

    var password = ""

    for (i = 0; i <= 8; i++) {
        password = password + charCh.charAt(Math.floor(Math.random() * Math.floor(charCh.length - 1)));
    }


    /****
     * WRITE YOUR CODE HERE
     */
    alert("Generate Password");
  
    return password;
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