const Validation = (s: string) => {
  const rows = s.trim().split("\n");
  const matrix = rows.map((row) =>
    row
      .trim()
      .split(" ")
      .map((cell) => parseInt(cell))
  );
  const numRows = rows.length;

  // Validate num of row and column
  if (numRows === 0 || numRows !== matrix[0].length) {
    return false;
  }

  // Validate integer only
  for (const row of matrix) {
    if (row.length !== numRows) {
      return false;
    }
    for (const cell of row) {
      if (isNaN(cell)) {
        return false;
      }
    }
  }
  // Validate symmetry
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < i; j++) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false;
      }
    }
  }
  return true;
};

export default Validation;
