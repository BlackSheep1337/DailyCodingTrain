const sortAlpha = (str) => str.split('').sort((a, b) => b < a).join('');

console.log(sortAlpha('webmaster'));
console.log(sortAlpha('javascript'));

const vowelsCount = (str) => {
  const vowel = str.split('');
  let count = 0;
  for (let i = 0; i < vowel.length; i += 1) {
    if (vowel[i].match(/[aeiou]/ig)) {
      count += 1;
    } 
  }
  return count;
}

console.log(vowelsCount('abceiu'));


function convertCoins(money, coins=[25, 10, 5, 2, 1]) {
  const inputCoin = money.split('').splice(-2).join('');
  let parsedMoney = parseFloat(inputCoin);
  const totalCoins = [];
  for (let i = 0; i < coins.length; i += 1) {
    const thisCoinNum = Math.floor(parsedMoney / coins[i]);
    for (let j = 0; j < thisCoinNum; j += 1) {
      totalCoins.push(coins[i])
    } 
    parsedMoney -= coins[i] * thisCoinNum;
  }

  return totalCoins;
}
console.log(Math.floor(1 * 1))

console.log(convertCoins('R$46'));

const stracktedChar = (str) => {
  return [...new Set(str.split(''))];
}

console.log(stracktedChar('aafefass'))

function firstNonRepeat(str) {
  for (let i = 0; i < str.length; i += 1) {
    let char = str[i];
    if(str.indexOf(char) == i && str.indexOf(char, i + 1) === -1) {
      return char;
    }
  }
  return "_";
}

console.log(firstNonRepeat('aaabcddbk'))


function abbrevName(name){
  const s = name.split(' ');
  return `${s[0].charAt(0)}.${s[1].charAt(0)}`;
}

console.log(abbrevName("Sam Harris"), 'TobeIqual', "S.H");

const resumed = (str) =>

console.log(resumed("Sam Harris"), 'TobeIqual', "S.H");

var arr = ['a', 'b', 'c', 'd', 'e'];

function first(arr, n) {
  return arr.slice(0, n)
}


console.log(first(arr, 5),'toBe', ['a'])

const obj = {a: 1, b: 2, c: 3};

console.log(JSON.stringify(obj));