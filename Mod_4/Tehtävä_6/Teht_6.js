
const jokeForm = document.getElementById('jokeForm');
const resultsContainer = document.getElementById('results');

jokeForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent the form from reloading the page


    const searchInput = document.getElementById('searchInput').value;

    resultsContainer.innerHTML = '';

    try {
        const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${searchInput}`);
        const data = await response.json();

        if (data.result && data.result.length > 0) {

            data.result.forEach(joke => {
                const article = document.createElement('article');
                const paragraph = document.createElement('p');
                paragraph.textContent = joke.value; // Add the joke text
                article.appendChild(paragraph);
                resultsContainer.appendChild(article);
            });
        } else {

            resultsContainer.innerHTML = '<p>No jokes found. Try another keyword!</p>';
        }
    } catch (error) {

        resultsContainer.innerHTML = '<p>Something went wrong. Please try again later.</p>';
        console.error('Error fetching jokes:', error);
    }
});