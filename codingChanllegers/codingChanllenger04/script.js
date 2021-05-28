const isLeapYear = (year) => year % 4 === 0;

console.log(isLeapYear(2014));


const obj1 = {a: 1, b: 2, c: 3}
const obj2 = {a: 1, b: 2, c: 4}
const obj3 = {a: 1, b: 2, f: 3}

//hardWay
const isEqualHardWay = (a, b) => {
  //transform property names in array;
  const aProp = Object.keys(a);
  const bProp = Object.keys(b);

  //checks if both has same length
  if (aProp.length !== bProp.length) {
    return false;
  }

  //get the current name and save it in an variable
  for (let i = 0; i < aProp.length; i += 1) {
    let propName = aProp[i];

    //test if the current name is different in both objects
    if (a[propName] !== b[propName]) {
      return false;
    }
  }

  //if we made it so far, return true
  return true;
}
console.log(isEqualHardWay(obj1, obj2));


const isEqualEasyWay = (a, b) => console.log(Object.keys(a).every((key) => b[key]));
isEqualEasyWay(obj1, obj2);

const twoDArray = (str) => str.split('\n').map((row) => row.split(','));

const str = `abc, def, ghi
jkl, mno, pqr
stu vwx yza`;
console.log(twoDArray(str))


const createHexNum = () => Math.floor(Math.random() * 16).toString(16);

const getHexColor = () => '#' + Array.from({length: 6}).map((createHexNum)).join('');

console.log(getHexColor());
console.log(getHexColor());
console.log(getHexColor());


const isEveryElem = (arr, fn) => {
  for (let i = 0; i < arr.length; i += 1) {
    if (!fn(arr[i])) {
      return false;
    }
  }
  return true;
}

console.log(isEveryElem([1,2,3,4,5], (x) => x > 3));
console.log(isEveryElem([1,2,3,4,5], (x) => x > 0));
console.log(isEveryElem([1,2,3,4,5], (x) => x > 2));