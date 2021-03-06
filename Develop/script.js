
var length;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Space is for the Uppercase conversion
space = [];

var toUpper = function (x) {
  return x.toUpperCase();
};

alpha2 = alpha.map(toUpper);


// Assignment code here
var generatePassword = function(){
    var length = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
    if (!length) {
      alert("This needs a value");
      writePassword();
    } else if (length < 8 || length > 128) {
      length = parseInt(alert("you must choose between 8 and 128"))
      writePassword();
    } else {
      // Continues once user input is validated
      confirmNumber = confirm("Will this contain numbers?");
      confirmCharacter = confirm("Will this contain special characters?");
      confirmUppercase = confirm("Will this contain Uppercase letters?");
      confirmLowercase = confirm("Will this contain Lowercase letters?");
  };
     // Else if for 4 negative options
     if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
      choices = alert("You must choose a criteria!");
      //   generatePassword() - This loops it, but makes it impossible to refresh the page

  }
  // First if statement that uses user input prompts to determine choices
  // Else if for 4 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {
      choices = character.concat(number, alpha, alpha2);
  }
  // Else if for 3 positive options
  else if (confirmCharacter && confirmNumber && confirmUppercase) {
      choices = character.concat(number, alpha2);
  }
  else if (confirmCharacter && confirmNumber && confirmLowercase) {
      choices = character.concat(number, alpha);
  }
  else if (confirmCharacter && confirmLowercase && confirmUppercase) {
      choices = character.concat(alpha, alpha2);
  }
  else if (confirmNumber && confirmLowercase && confirmUppercase) {
      choices = number.concat(alpha, alpha2);
  }
  // Else if for 2 positive options 
  else if (confirmCharacter && confirmNumber) {
      choices = character.concat(number);
  } else if (confirmCharacter && confirmLowercase) {
      choices = character.concat(alpha);
  } else if (confirmCharacter && confirmUppercase) {
      choices = character.concat(alpha2);
  }
  else if (confirmLowercase && confirmNumber) {
      choices = alpha.concat(number);
  } else if (confirmLowercase && confirmUppercase) {
      choices = alpha.concat(alpha2);
  } else if (confirmNumber && confirmUppercase) {
      choices = number.concat(alpha2);
  }
  // Else if for 1 positive option
  else if (confirmCharacter) {
      choices = character;
  }
  else if (confirmNumber) {
      choices = number;
  }
  var password = [];

  for (var i = 0; i < length; i++) {
    var pickChoices = choices[Math.floor(Math.random() * choices.length)];
    password.push(pickChoices);
}
    // This joins the password array and converts it to a string
    // Worked with a tutor to incorporate this option
    var ps = password.join("");
    UserInput(ps);
    return ps;

}
function UserInput(ps) {
  document.querySelector("#password").textContent = ps;
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword)

