const newStr = (str) => str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(newStr('Ale'));

const firstHalf = (str) => str.slice(0, str.length / 2) 

console.log(firstHalf('alexand'));

const firstLetter = (str1, str2) => str1.slice(1) + str2.slice(1);

console.log(firstLetter('string1', 'string2'));

const nearsToHundred = (value1, value2) => {
  if (!value1 || !value2 || value1 > 100 || value2 > 100) return 'Invalid Valor';
  else return (value1 - 100) > (value2 - 100) ? value1 : value2;
}

console.log(nearsToHundred('20', '0'));
console.log(nearsToHundred('80', '20'));
console.log(nearsToHundred('50', '100'));
console.log(nearsToHundred('50', '120'));


function checkOcurrence(str, char) {
  const cur = str.match(new RegExp(char, 'ig')).length;
  return cur >= 2 && cur <= 4;
} 

console.log(checkOcurrence('ho', 'o'));
console.log(checkOcurrence('hoo', 'o'));
console.log(checkOcurrence('hooo', 'o'));