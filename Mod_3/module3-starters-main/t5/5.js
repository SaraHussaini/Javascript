'use strict';

const picArray = [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    image: {
      large: 'img/pic1.jpg',
      medium: 'thumbnails/pic1.jpg',
    },
  },
  // Lisää muut objektit samalla tavalla...
];

// Hae <section>-elementti, johon artikkelit lisätään
const section = document.getElementById('pictures');

// Luo artikkelit picArray-datan perusteella
picArray.forEach((item) => {
  // Luo <article> ja lisää siihen luokka
  const article = document.createElement('article');
  article.className = 'card';

  // Luo otsikko
  const heading = document.createElement('h2');
  heading.textContent = item.title;

  // Luo figure
  const figure = document.createElement('figure');

  // Luo kuva
  const img = document.createElement('img');
  img.src = item.image.medium;
  img.alt = item.title;

  // Luo kuvateksti
  const figcaption = document.createElement('figcaption');
  figcaption.textContent = item.caption;

  // Lisää kuva ja kuvateksti figureen
  figure.appendChild(img);
  figure.appendChild(figcaption);

  // Luo kappale
  const paragraph = document.createElement('p');
  paragraph.textContent = item.description;

  // Lisää kaikki elementit artikkeliin
  article.appendChild(heading);
  article.appendChild(figure);
  article.appendChild(paragraph);

  // Lisää artikkeli section-elementtiin
  section.appendChild(article);
});
