// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};

  for (let char of str) {
    charMap[char] = charMap[char]++ || 1;
  }
  console.log("CHHHHHHHHR" + JSON.stringify(charMap));
  return Object.keys(charMap).find(
    key => charMap[key] === Math.max(...Object.values(charMap))
  );
}

module.exports = maxChar;
