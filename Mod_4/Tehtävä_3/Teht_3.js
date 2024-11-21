// Simulated TV Show data from a search result
document.getElementById('searchForm').addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = document.getElementById('query').value.trim();
  const output = document.getElementById('output');

  if (!query) {
    output.textContent = 'Please enter a valid TV series name.';
    return;
  }

  // Hakee tiedot TVMaze API:lta
  const url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(query)}`;

  try {

    const response = await fetch(url);

    if (!response.ok) throw new Error('Network response was not ok.');

    const data = await response.json();

    console.log(data);
    // Call the render function with the example data
    renderTVShows(data);

    // Muotoilee ja näyttää JSON-datan
    if (data.length > 0) {
      output.textContent = JSON.stringify(data, null, 2);
    } else {
      output.textContent = 'No results found.';
    }
  } catch (error) {
    output.textContent = `An error occurred: ${error.message}`;
  }
});

// Function to render TV show results
function renderTVShows(shows) {
    const resultsContainer = document.getElementById('results');

    // Clear previous results
    resultsContainer.innerHTML = '';

    // Loop through each show and create HTML structure
    shows.forEach(tvShow => {
        const { name, url, image, summary } = tvShow.show;

        // Create an article element for each show
        const article = document.createElement('article');

        // Create and append <h2> for the show name
        const title = document.createElement('h2');
        title.textContent = name;
        article.appendChild(title);

        // Create and append <a> for the URL
        const link = document.createElement('a');
        link.href = url;
        link.target = "_blank"; // Opens the link in a new tab
        link.textContent = "More Details";
        article.appendChild(link);

        // Create and append <img> for the medium image (if available)
        if (image?.medium) {
            const img = document.createElement('img');
            img.src = image.medium;
            img.alt = name; // Use the show name for the alt text
            article.appendChild(img);
        }

        // Create and append <div> for the summary
        const summaryDiv = document.createElement('div');
        summaryDiv.innerHTML = summary; // Safely inserts the HTML string
        article.appendChild(summaryDiv);

        // Append the article to the results container
        resultsContainer.appendChild(article);
    });
}


