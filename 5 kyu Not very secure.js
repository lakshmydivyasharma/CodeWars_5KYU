https://www.codewars.com/kata/526dbd6c8c0eb53254000110/train/javascript

5 kyu
Not very secure
1293375% of 1,3673,318 of 12,078mayrsascha2 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

At least one character ("" is not valid)
Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
No whitespaces / underscore


function alphanumeric(string) {
  return /[a-zA-Z0-9]/g.test(string) && !/[\s_!]/.test(string);
}
