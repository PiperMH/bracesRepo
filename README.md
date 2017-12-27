# bracesRepo
brace balancing challenge

*Design*
  -One main function (returns yes/no)
    -for loop to grab word
    -array to push yes/no to
  -One sub function (checks to see if balance)
    -for loop to grab character
    -array to temp hold character if brace
  -Test variables
  -Run function with variables and log to console

*Psuedo Code*
1.Create parent function called 'Braces' that takes one parameter called 'values'.
    a.If balanced push YES to result array
      i.balanceChecked returns true
    b.If not balanced return NO to result array
      i.balanceChecked returns false
2.Create function called 'balanceChecked' to check if current string's braces are balanced.
    a.Take string and check each character.
    b.If current character matches an index of the 'openingBraces' array push to temp array 'stack'.
    c.If current character matches an index of the 'closingBraces' determine corresponding brace.
    d.Pop character from 'stack', if not equal to corresponding bracket return false. 

