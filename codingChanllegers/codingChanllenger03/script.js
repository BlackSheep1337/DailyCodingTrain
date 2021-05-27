const findEvenNum = (arr) => arr.filter((number) => number % 2 === 0).length;


const findReturnEvenNum = (arr) => Array.from({length: arr}, (_, i) => i + 1);

console.log(findEvenNum(findReturnEvenNum(6)));


const sortInAscending = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
}

console.log(sortInAscending([1, 5, 4, 2, 3]));
console.log(sortInAscending([1, 2, 3, 4, 5]));

const largestEven = (arr) => {
  const array = arr.filter((num) => num % 2 === 0);
  return Math.max(...array);
}

console.log(largestEven([1, 2, 3, 4, 5, 6]));

const replaceFirstChar = (str) => str.replace(/\a/ig,'$');

console.log(replaceFirstChar('Al3xa2dre'));
console.log(replaceFirstChar('al3exandre'));
console.log(replaceFirstChar('le4xa1ndre'));
console.log(replaceFirstChar('e2xan5re'));
