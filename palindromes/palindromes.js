const palindromes = function() {
  const string = arguments[0];
  charArr = string.match(/\w{1}/g);
  for (let i = 0; i <= (charArr.length /2); i++) {
    let charX = charArr[i].toLowerCase();
    let charY = charArr[charArr.length - i - 1].toLowerCase();
    if (charX != charY) return false;
  }
  return true;
}

module.exports = palindromes
