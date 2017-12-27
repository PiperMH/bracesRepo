/* 1.Create parent function called 'Braces' that takes one parameter called 'values'.
    a.If balanced push YES to result array
    b.If not balanced return NO to result array
   2.Create function called 'balanceChecked' to check if current string's braces are balanced.
    a.Take string and check each character.
    b.If current character matches an index of the 'openingBraces' array push to temp array 'stack'.
    c.If current character matches an index of the 'closingBraces' determine corresponding brace.
    d.Pop character from 'stack', if not equal to corresponding bracket return false. 
*/

//Parent Function 'Braces' with 'values' as the parameter
function braces(values) {
  //Variable Declaration
  var result = []; //araay that holds results of function
  var input = values;//variable that holds input

  for (var i = 0; i < input.length; i++) {
    //statement takes first string of array and checks to see if it balanced
    if (balanceChecked(values[i])) {
      //If string is balanced push YES to result array
      result.push('YES');
    } else {
      //If string is not balanced push NO to result array
      result.push('NO');
    }
  }
  //returns arrays
  return result;
}

//Balance checking function. Str is input from initial array "values"
function balanceChecked(str) {
  //Declared Variables
  var stack = []; //array that temporarily holds brackets 
  var input = str; //variable that holds current word

  var openingBrackets = ['[', '{', '(']; //array holding opening brackets
  var closingBrackets = [']', '}', ')']; //array holding closing blackets

  for (var i = 0; i < input.length; i++) {
   var currentCh = input[i]; //variable that stores current character of current word

    if (openingBrackets.indexOf(currentCh) >= 0) { //if the current character matches an index of "openingBraces" push to stack
      stack.push(currentCh);
    } else if (closingBrackets.indexOf(currentCh) >= 0) { //if current character matches an index of "closingBraces"

      var matchingBracket = openingBrackets[closingBrackets.indexOf(currentCh)];//variable defining the matching brace
      if (stack.pop() !== matchingBracket) { //if popped brace does not match corresponding closing brace
        return false; //return false
      }
    } else {
      // Ignore the characters which do not match valid Brackets symbol
      continue;
    }
  }
  return (stack.length === 0);
}

//Test Variables 
var i1 = [
    "(matches)", "{matches}", "[matches]"
];

var i2 = [
  "]{no}[", "{[no}]", "[{no)]"
];

//logging results in console
alert("Please open console to view results of the 'braces function'")
console.log( i1 + " returns: " + braces(i1)); // ["YES","YES","YES"]
console.log( i2 + " returns: " + braces(i2)); // ["NO","NO","NO"]