const arrayOfGreaterThanTen = [[1, 9], [2, 8], [2, 9], [3, 7], [3, 8], [3, 9], [4, 6], [4, 7], [4, 8], [4, 9],
[5, 5], [5, 6], [5, 7], [5, 8], [5, 9], [6, 4], [6, 5], [6, 6], [6, 7], [6, 8], [6, 9], [7, 3], [7, 4], [7, 5],
[7, 6], [7, 7], [7, 8], [7, 9], [8, 2], [8, 3], [8, 4], [8, 5], [8, 6], [8, 7], [8, 8], [8, 9], [9, 1], [9, 2],
[9, 3], [9, 4], [9, 5], [9, 6], [9, 7], [9, 8], [9, 9]];

const arrayOfLessThanTen = [[1, 1], [1, 2], [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [2, 1],
[2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [3, 1], [3, 2], [3, 3], [3, 4], [3, 5], [3, 6], [4, 1],
[4, 2], [4, 3], [4, 4], [4, 5], [5, 1], [5, 2], [5, 3], [5, 4], [6, 1], [6, 2], [6, 3], [7, 1], [7, 2], [8, 1]];


export const carryNonCarryProblemGenerator = (digits, numberOfProblems, operationCheck) => {
  const firstAddendArray = [], secondAddendArray = [];
  const length = operationCheck == "Carry" ? (arrayOfGreaterThanTen.length) : (arrayOfLessThanTen.length);
  const array = operationCheck == "Carry" ? arrayOfGreaterThanTen : arrayOfLessThanTen;

  for (let i = 0; i < numberOfProblems; i++) {
    let firstAddend = "";
    let secondAddend = "";

    for (let j = 0; j < digits; j++) {
      const randomIndex = Math.floor(Math.random() * length);
      firstAddend = firstAddend + array[randomIndex][0];
      secondAddend = secondAddend + array[randomIndex][1];
    }
    firstAddendArray.push(parseInt(firstAddend));
    secondAddendArray.push(parseInt(secondAddend));
  }
  // console.log(firstAddendArray);
  // console.log(secondAddendArray);
  return [firstAddendArray, secondAddendArray];

}

export const mixedProblemGenerator = (numberOfProblems, upperRange,startRangeByuser) => { 
  const firstAddendArray = [], secondAddendArray = [];
  for (let i = 0; i < numberOfProblems; i++) {
    const firstAddend = Math.floor(Math.random() * (upperRange - startRangeByuser - 1)) + startRangeByuser;
    const secondAddend = Math.floor(Math.random() * (upperRange - startRangeByuser - 1)) + startRangeByuser;
    firstAddendArray.push(parseInt(firstAddend));
    secondAddendArray.push(parseInt(secondAddend));
  }
  // console.log(firstAddendArray);
  // console.log(secondAddendArray);
  return [firstAddendArray, secondAddendArray];
}


