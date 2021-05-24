const isHundred = (n1, n2) => n1 === 100 || n2 === 100 || (n1 + n2) === 100;


console.log(isHundred(100, 0));
console.log(isHundred(0, 100));
console.log(isHundred(50, 50));
console.log(isHundred(20, 50));


const getExtension = (file) => file.slice(file.lastIndexOf('.'));


console.log(getExtension('index.html'));
console.log(getExtension('file.name.js'));


const replaceChar = (str)  => str.split('')
  .map((char) => String.fromCharCode(char.charCodeAt(0) + 1)).join(''); 

console.log(replaceChar('abcdxyz'));

function currentDate(date = new Date) {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

console.log(currentDate());

const addNew = (str) => str.match('New!') ? str : `New! ${str}`;

console.log(addNew('Car'));
