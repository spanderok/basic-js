

module.exports = function countCats(matrix) {
  let i;
   let count = 0;
   for (i = 0; i < matrix.length; ++i) {
     let j;
     for (j=0; j < matrix[i].length; ++j){
      if(matrix[i][j]=== '^^'){
       ++count;
     }
   }
  }
  
   return count;
  // remove line with error and write your code here
};
