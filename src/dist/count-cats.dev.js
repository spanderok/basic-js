"use strict";

module.exports = function countCats(matrix) {
  var i;
  var count = 0;

  for (i = 0; i < matrix.length; ++i) {
    var j = void 0;

    for (j = 0; j < matrix[i].length; ++j) {
      if (matrix[i][j] === '^^') {
        ++count;
      }
    }
  }

  return count; // remove line with error and write your code here
};