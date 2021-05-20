
async function getRaibowImg() {
  const url = 'https://www.collinsdictionary.com/images/full/rainbow_274343975_1000.jpg'
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    appendImg(blob);
  } catch (e) {
    console.log('Something goes wrong: ' + e);
  }
}
getRaibowImg();

async function fetchGnomes() {
  const url = 'https://images.colorfulimages.com/catalog/product/450x450/613795/rainbow-name-poem-print.jpg';
  try {
    const response = await fetch(url);
    const blob = await response.blob();
    appendImg(blob);
  } catch (e) {
    console.error(`Something goes wrong error: ${e}`);
  }
}
fetchGnomes();

async function fetchPoem() {
  const url = 'https://poetrydb.org/author,title/Shakespeare;Sonnet';
  try {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    appendPoem(json);
  } catch (e) {
      console.error(e);
  }
}

fetchPoem();

function appendPoem(data) {
  data.forEach((poem) => {
    const line = document.createElement('p');
    line.innerHTML = poem.lines;
    document.getElementById('poemContainer').appendChild(line);
  })
}

function appendImg(url) {
  const img = document.createElement('img');
  const imgContainer = document.getElementById('imagesContainer');
  img.src = URL.createObjectURL(url);
  img.style.width = '500px';
  imgContainer.appendChild(img);
}