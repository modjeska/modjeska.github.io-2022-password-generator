
// Query selectors
var generateBtn = document.querySelector("#generate");
var password = document.querySelector("#password");

// variables for upper and lowercase letters, numbers, and characters)
var lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
var uppercaseAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var optionsVariable = "";

// Event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Function that generates a random password in the "text area" box
function writePassword() {

    // Prevents the screen from refreshing when button is used
    event.preventDefault();

    // Clears previous password from screen
    password.value === "";
    var randomString = "";

    // Given password criterias
    var lowercase = confirm("Do you want your password to contain lowercase letters?");
    var uppercase = confirm("Do you want your password to contain uppercase letters?");
    var num = confirm("Do you want your password to contain numbers?");
    var specialChar = confirm("Do you want your password to contain special characters?");
    var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");

    // Function that verifies it's between 8 and 128 characters
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Your password is not between 8 characters and 128 characters. Please try again.");
        var passwordLength = prompt("Choose a password length of at least 8 characters and no more than 128 characters.");
    }

    // Sets rule that at least one option requires selection
    else if (lowercase === false && uppercase === false && num === false && specialChar === false) {
        alert("You must chose at least one password criteria.");
        var lowercase = confirm("Do you want your password to contain lowercase letters?");
        var uppercase = confirm("Do you want your password to contain uppercase letters?");
        var num = confirm("Do you want your password to contain numbers?");
        var specialChar = confirm("Do you want your password to contain special characters?");
    }

    // Uses selected options to create password
    if (lowercase) {
        optionsVariable += lowercaseAlphabet;
    }

    if (uppercase) {
        optionsVariable += uppercaseAlphabet;
    }

    if (num) {
        optionsVariable += numbers;
    }

    if (specialChar) {
        optionsVariable += specialCharacters;
    }

    // Generates a random password based on the criteria that have been selected
    for (var i = 0; i < passwordLength; i++) {
        // Continues to select a random character value from the string until it is the desired length
        randomString += optionsVariable.charAt(Math.floor(Math.random() * optionsVariable.length));
    }
    password.value = randomString;

}
