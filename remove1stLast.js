function array(str){
  var unwantedChars = /\W/g
  str = str.replace(unwantedChars, "");
  var secondToLastChar = str.length - 2;
  if (str.length < 3) {
    return null;
  }
  else {
    str = str.substr(1, secondToLastChar);
    var lastNeededChar = str[str.length - 1];
    if (str.length === 1) {
      return str;
    }
    str = str.split("");
    for (var i = 0; i < str.length - 1; i++) {
      str[i] = str[i] + ",";
    }
    str = str.join("");
    return str;
  }
}


console.log(array('1, 2, 3, 4, 5, 6'));
// Test.describe("Tests", function(){
//
// Test.assertEquals(array(''), null);
// Test.assertEquals(array('1'), null);
// Test.assertEquals(array('1, 3'), null);
// Test.assertEquals(array('1,2,3'), '2');
//
// });
