
document.getElementById("generate").onclick = function () {


var generatePassword = ""

var passwordLength = prompt( "How long do you want the password to be?", "must be between 8-128 characters" )
  if( passwordLength < 8 ) {var passwordLength = alert( "Password must be longer" )};
  if( passwordLength > 128 ) {var passwordLength = alert( "Password must be shorter")};
  if( passwordLength > 8 && passwordLength > 128 ); 
var hasUpper = confirm( "Do you want to allow uppercase?")
var hasLower = confirm( "Do you want to allow lowercase?" )
var hasNumbers = confirm( "Do you want to allow numbers?" )
var hasSymbols = confirm( "Do you want to allow symbols?" )

var finalCharSet = " "
  if( hasUpper ) finalCharSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if( hasLower ) finalCharSet += "abcdefghijklmnopqrstuvwxyz"
  if( hasNumbers ) finalCharSet += "0123456789"
  if( hasSymbols ) finalCharSet += "!@#$%^&*()"

console.log( `Our final character set: ${finalCharSet}`)
  for( var i=0; i<passwordLength; i++){
    var selectedChar = parseInt( Math.random()*finalCharSet.length )
    generatePassword += finalCharSet[selectedChar]
  }

  console.log( `Our generated password: ${generatePassword}` )

  document.getElementById( "password" ).
  innerHTML = generatePassword;
}