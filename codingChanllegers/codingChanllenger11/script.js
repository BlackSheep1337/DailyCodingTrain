const para = document.querySelector('p');

function sublimeYellow8LengthWords(para) {
  para.innerHTML = para.innerText.split(' ').map((w) => (w.length > 8 ? `<span style="background-color: yellow">${w}</span>"` : w)).join(' ');
}
sublimeYellow8LengthWords(para);

function createSourceText(para) {
  const a = document.createElement('a');
  a.href = 'https://forcemipsum.com/';
  a.target ="_blank";
  a.innerHTML = `<span>Text source</span>`;
  para.appendChild(a);
}
createSourceText(para);

function newPara(para) {
  para.innerHTML = para.innerHTML.split('.').join('</p><p>') + '</p>';
}

newPara(para);

function countPara(para) {
  const words = para.innerHTML.split(' ').length;
  const elem = document.createElement('span');
  elem.innerHTML = `${words} words`;
  document.body.insertBefore(elem, para);
}
countPara(para);

function replaceMarks() {
  Array.from(document.querySelectorAll('p')).forEach((word) => {
    return word.innerHTML = word.innerHTML.replace(/\?/g, '🤔')
    .replace(/\!/g, '😲')
  })
}
replaceMarks();

/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01 c/
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/



/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
