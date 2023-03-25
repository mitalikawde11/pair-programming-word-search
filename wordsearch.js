// Word search - pair programming with group partner x-saim


const transpose = function(matrix) {
  // create an empty array that will hold the transposed matrix.
  let newMatrix = [];
  //loop through the elements in the first row of the input
  //matrix, and for each element, push an empty array onto the newMatrix array
  for (let i =  0; i < matrix[0].length; i++) {
    newMatrix.push([]);
  }
  //loop through each row in the input matrix
  for (let row = 0; row < matrix.length; row++) {
    //loop through each element in the current row of the input matrix
    for (let col = 0; col < matrix[row].length; col++) {
      //value of new matrix is swapped version of input matrix
      newMatrix[col][row]  = matrix[row][col];
    }
  }
  return newMatrix;
};

const wordSearch = (letters, word) => { 
  if (!letters.length) {
    return undefined;
  } 
    
  // horizontal search for word
  const horizontalJoin = letters.map(ls => ls.join(''))
  for (l of horizontalJoin) {
    if (l.includes(word)) return true
  }

  let newMatrix = transpose(letters);
  // vertical search for word
  const verticalJoin = newMatrix.map(ls => ls.join(''));
  for (const l of verticalJoin) {
    if (l.includes(word)) return true;
  }

  return false;
}

module.exports = wordSearch