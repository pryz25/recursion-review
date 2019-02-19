// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //find overarching data structure (e.g., array, object) to parse
  // call relevant function to begin parsing that type

  var grabber = function (str) {
    let firstChar = str[0];
    if (firstChar === '{') {return str.slice(0, str.indexOf('}')+1)}
    if (firstChar === '[') {return str.slice(0, str.indexOf(']')+1)}
    if (firstChar === '"') {return str.slice(0, str.indexOf('"')+1)}
    return str.indexOf(',') > str.indexOf(':')? str.slice(0, str.indexOf(',')) : str.slice(0, str.indexOf(':'))
    }
    // use first character to find end character....
      // arr ]
      // obj }
      // str ""
      // else comma, colon, or end of length
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
