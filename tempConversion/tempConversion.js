const ftoc = function(temp) {
  return +((temp - 32) * (5/9)).toFixed(1);
}

const ctof = function(temp) {
  return +((temp / (5/9)) + 32).toFixed(1);
}

module.exports = {
  ftoc,
  ctof
}
