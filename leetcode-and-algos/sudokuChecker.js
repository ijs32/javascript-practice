// SUDOKU BOARDS //
///////////////////////////////////////////////////////////////////////////////////////////

let puzzle = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [2, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];
let puzzleTwo = [
  [8, 9, 5, 7, 4, 2, 1, 3, 6],
  [8, 7, 1, 9, 6, 3, 4, 8, 5],
  [4, 6, 3, 5, 8, 1, 7, 9, 2],

  [9, 3, 4, 6, 1, 7, 2, 5, 8],
  [5, 1, 7, 2, 3, 8, 9, 6, 4],
  [6, 8, 2, 4, 5, 9, 3, 7, 1],

  [1, 5, 9, 8, 7, 4, 6, 2, 3],
  [7, 4, 6, 3, 2, 5, 8, 1, 9],
  [3, 2, 8, 1, 9, 6, 5, 4, 7],
];

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

function getRow(puzzle, rowIndex) {
  return puzzle[rowIndex]; // pick out a row
}
function getColumn(puzzle, columnIndex) {
  // these two functions dont matter but they were apart
  let column = []; // of the problem so theyre here
  for (let i = 0; i < puzzle.length; i++) {
    column.push(puzzle[i][columnIndex]); // grab a column
  }
  return column;
}
function getSection(puzzle, i, i2) {
  var index;
  var limit;
  var index2;
  var limit2;
  // setting limits and index positions for the for loop based on subsection
  if (i === 0 && i2 === 0) {
    index = 0;
    limit = 3;
    index2 = 0;
    limit2 = 3;
  } else if (i === 1 && i2 === 0) {
    index = 0;
    limit = 3;
    index2 = 3;
    limit2 = 6;
  } else if (i === 2 && i2 === 0) {
    index = 0;
    limit = 3;
    index2 = 6;
    limit2 = 9;
  } else if (i === 0 && i2 === 1) {
    index = 3;
    limit = 6;
    index2 = 0;
    limit2 = 3;
  } else if (i === 1 && i2 === 1) {
    index = 3;
    limit = 6;
    index2 = 3;
    limit2 = 6;
  } else if (i === 2 && i2 === 1) {
    index = 3;
    limit = 6;
    index2 = 6;
    limit2 = 9;
  } else if (i === 0 && i2 === 2) {
    index = 6;
    limit = 9;
    index2 = 0;
    limit2 = 3;
  } else if (i === 1 && i2 === 2) {
    index = 6;
    limit = 9;
    index2 = 3;
    limit2 = 6;
  } else if (i === 2 && i2 === 2) {
    index = 6;
    limit = 9;
    index2 = 6;
    limit2 = 9;
  }

  let subSection = [];
  i = index;
  while (i < limit) {
    i2 = index2;
    while (i2 < limit2) {
      subSection.push(puzzle[i][i2]); // these loops pick out a subsection
      i2++;
    }
    i++;
  }
  return subSection;
}

function includes1to9(subSection) {
  subSection = subSection.sort(); // order the subsection to make counting easier
  let count = 0; // start count at 0
  for (let i = 0; i < subSection.length; i++) {
    if (i + 1 === subSection[i]) {
      count++; //everytime i matches up with subsection[i] add 1 to count
    }
  }
  return count === 9; // since each subsection should contain 9 numbers count should equal 9
} // if the subsection has all numbers 1-9

function sudokuIsValid(puzzle) {
  let count = 0;
  for (let i = 0; i <= 2; i++) {
    for (let i2 = 0; i2 <= 2; i2++) {
      if (includes1to9(getSection(puzzle, i, i2))) {
        // this calls the function includes1to9 and gives it all
        count++; // of the different subsections as the for loop continues, the conditional logic checks if true
      } // if so, it adds 1 to count
    }
  }
  return count === 9; // like before, there are 9 subsections so 9 truthys should be counted
}

// console.log(getSection(puzzle, 2, 2));
// console.log(includes1to9(getSection(puzzle, 2, 2))); //
console.log(sudokuIsValid(puzzle));
