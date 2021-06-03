// const animal = 'ALLigator';
// const vowel = 'abcdefghijklmnopqrstuvwxyz'.split('');
// console.log(vowel);

// console.log(vowel.test(/[a-z]/i) ? 'small' : 'wide');


// var array1 = [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true ];

// const result = array1.reduce((acc, cur) => acc + (cur ? 1 : 0), 0)
// console.log(result);

// console.log(Math.floor(Math.random() * 15));
// random(0, 15);
const myNum = [50, 20, 30, 2, 5, 7];

const randomArr = Array.from({length: 6}).map(() => (Math.floor(Math.random() * 60)))
  .reduce((acc,current) => myNum.includes(current) ? acc + 1 : acc ,0);


console.log(randomArr);