'use strict';

async function fetchTVShows(query) {
  try {
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const shows = await response.json();
    displayShows(shows);
  } catch (error) {
    console.error('Fetch error:', error);
  }
}

function displayShows(shows) {
  const resultsContainer = document.getElementById('results');
  resultsContainer.innerHTML = ''; // Tyhjennetään aiemmat tulokset

  shows.forEach(show => {
    const showData = show.show;

    const imageUrl = showData.image ? showData.image.medium : 'https://via.placeholder.com/210x295?text=Not%20Found';

    const article = document.createElement('article');
    article.innerHTML = `
      <h2>${showData.name || 'No title available'}</h2>
      <img src="${imageUrl}" alt="${showData.name || 'No title available'}">
      <p>${showData.summary || 'No summary available'}</p>
    `;
    resultsContainer.appendChild(article);
  });
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = document.getElementById('query').value.trim();
  if (query) {
    fetchTVShows(query);
  }
});