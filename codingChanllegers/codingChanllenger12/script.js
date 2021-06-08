/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */
const para = document.querySelector('p');

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/


para.innerHTML = para.innerHTML
    .split(' ')
    .map(x => x.length > 8 ? `<span style='background:yellow">${x}</span>` : x)
    .join('');

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSimblin);  
}

function createElements(para) {
  const ank = document.createElement('a');
  const span = document.createElement('span');
  ank.href = 'https://forcemipsum.com/';
  ank.target = "_blank";
  span.innerHTML = 'Link reference';
  ank.appendChild(span);
  insertAfter(para, ank);
}
createElements(para);

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/
para.innerHTML = para.innerHTML.split(' ').join('</p><p>') + '</p>';

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/
const countWords = (para) => {
  const span = document.createElement('span');
  span.innerHTML = `total worlds are ${para.innerHTML.length}`
  document.querySelector('h1').insertAdjacentHTML('afterend', span.innerHTML);
}
countWords(para);

/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/

para.innerHTML = para.innerHTML
  .replace(/'?'/ig, '🤔')
  .replace(/!/ig,'😲')