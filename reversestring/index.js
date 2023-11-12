// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// node inspect index.js

function reverse(str) {
  // debugger;
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

// reverse("hello");

module.exports = reverse;

// function reverse(str) {
//   return str.split("").reverse().join("");
// }

// function reverse(str) {
//   let reversed = "";

//   for (let ch of str) {
//     reversed = ch + reversed;
//   }
//   return reversed;
// }
