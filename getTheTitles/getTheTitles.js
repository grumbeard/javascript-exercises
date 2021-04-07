const getTheTitles = function() {
  const array = arguments[0];
  // Each element in array represents a single book with a title and author
  // Map over each element to obtain just the titles
  return array.map(book => book.title);
}

module.exports = getTheTitles;
