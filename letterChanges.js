function LetterChanges(str) {
  str = str.split("").map(asciiConversion).join("");
  return str;
}

function asciiConversion(input){
  var vowels = /[aeiou]/g
  var letters = /\W/g
  var numbers = /[1-9]/g
  if (input.match(letters) || input.match(numbers)){
    return input;
  }
  var conversion = input.charCodeAt(0);
  conversion += 1;
  if(String.fromCharCode(conversion).match(vowels)){
    return String.fromCharCode(conversion).toUpperCase();
  }
  return String.fromCharCode(conversion);
}
