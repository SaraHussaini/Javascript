'use strict';


async function fetchRandomJoke() {
  try {
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const jokeData = await response.json();
    console.log(jokeData.value); // Tulostaa vain vitsin
  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}

fetchRandomJoke();