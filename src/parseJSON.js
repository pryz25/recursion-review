// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //run grabber function to determine first value to parse
  //determine type of that value
  //use function specific to that value type to parse that field
  //grab next value

  var grabber = function (str) {
    // values to handle : 
    // string y
    // number n
    // object y
    // array y
    // true n
    // false n
    // null n 
    let firstChar = str[0];
    let targetChar;
    if (firstChar === '{') {
      targetChar = str.slice(0, str.lastIndexOf('}') + 1);
      return parseObj(targetChar);
    } 
    if (firstChar === '[') {
      targetChar = str.slice(0, str.lastIndexOf(']') + 1);
      return parseArr(targetChar);
    } 
    if (firstChar === '"') {
      targetChar = str.slice(0, str.indexOf('"') + 1);
      return parseStr(targetChar);
    }
     return str.indexOf(',') > str.indexOf(':')? str.slice(0, str.indexOf(',')) : str.slice(0, str.indexOf(':'))
    }
    // use first character to find end character....
      // arr ]
      // obj }
      // str ""
      // else comma, colon, or end of length

  var parseObj = function(string) {
    let result = {};
    let firstKey = string.indexOf(':')
    if (firstKey) {
      let key = string.slice(1, firstKey);
      string = string.slice(firstKey+1);
      result[parseStr(key)] = grabber(string);
    }
      return result
  }

  var parseArr = function(string) {
    let result = []
    str = string.slice(1, string.length-1);
    result.concat(str.split(','));
    return result;
  }

  var parseStr = function(string) {

  }

  var parseNum = function(string) {

  }

  var parseOther = function(string) {

  }
  return grabber(json)

  /* Object Function
    set new variable object {}
    determine if object has key value pairs (Assess if there are colons present in the passed value)
      if so, call string function on first key and set to variable
      assess if value at property is 

  */

  /*
  Attempt at Grammar





  */
};
