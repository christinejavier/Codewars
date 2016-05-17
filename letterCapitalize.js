function LetterCapitalize(str) {
  str = str.split(" ").map(capital).join(" ");
  return str;
}

function capital(word){
  var firstLet = word.charAt(0).toUpperCase();
  var remainingLets = word.substr(1);
  return firstLet + remainingLets;
}
