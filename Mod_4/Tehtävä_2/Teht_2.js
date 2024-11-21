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
