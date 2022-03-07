// Assignment code here
var charactersLower = "abcdefghijklmnopqrstuvwxyz"
var charactersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var charactersNumber= "1234567890"
var charactersSpecial= " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
var passChar;
var passwordChars = '';
const passwordText = []
const password = document.getElementById('password')
function characterGroups (){
  //var lowerCase =  window.confirm("Lowercase?");
  if (confirm("Press okay to add lowercase characters.")==true) {
    var passwordChars = passwordChars + charactersLower;
    console.log (passwordChars);
  };
  if (confirm("Press okay to add uppercase characters.") ==true) {
    var passwordChars = passwordChars + charactersUpper;
  };
  if (confirm("Press okay to add numbers characters.") == true)  {
    var passwordChars = passwordChars + charactersNumber;
  };
  if (confirm("Press okay to add special characters.") ==true) {
    var passwordChars = passwordChars + charactersSpecial;
    console.log (passwordChars);
  };
  if (passwordChars = null) {
    window.alert("Password needs at least one set of characters!")
  }
}
function query(){
var passChar = window.prompt("How many characters? (8-128)");

if (passChar >7 && passChar <128 ){
  console.log (passChar)
}

else {
  window.alert("password needs to be between 8 and 128 characters")
}

}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  for (let i=0; i < passChar; i++) {
//  const passwordText = []
  const character = passwordChars[Math.floor(math.random() * passChar)]
  passwordText.push(character)
  console.log (character)
  return passwordText.join('')
  }
  password.innerText = passwordText





  //  new Array(passChar).fill().map(() => String.fromCharCode(Math.random()*86+40)).join("")

 // var password = generatePassword();
 // var passwordText = document.querySelector("#password");
  //passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", query);
generateBtn.addEventListener("click", characterGroups);
generateBtn.addEventListener("click", writePassword);