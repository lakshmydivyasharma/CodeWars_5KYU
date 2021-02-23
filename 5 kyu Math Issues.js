https://www.codewars.com/kata/5267faf57526ea542e0007fb/train/javascript

5 kyu
Math Issues
1803388% of 6627,168 of 7,286BattleRattle2 Issues Reported
JavaScript
Node v8.1.3
VIM
EMACS
Instructions
Output
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

Math.round()
Math.ceil()
Math.floor()

Math.round = function(number) {
  return number - parseInt(number) >= 0.5
    ? parseInt(number) + 1
    : parseInt(number);
};

Math.ceil = function(number) {
  return parseInt(number) === number ? number : parseInt(number) + 1;
};

Math.floor = function(number) {
  return parseInt(number);
};
