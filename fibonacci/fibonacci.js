const fibonacci = function() {
  // sample sequence: 1,1,2,3,5,8,13,21,34,56,90,146,236,382
  let num = +arguments[0];
  if (num < 0) return "OOPS";
  let a = 0;
  let b = 1;
  let c = 0;
  for (let i = 0; i < num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  return a;
}

module.exports = fibonacci
