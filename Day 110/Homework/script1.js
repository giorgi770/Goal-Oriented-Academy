// Define your API key here
const apiKey = 'b7933d74'; 

// Get DOM elements
const searchButton = document.getElementById('searchButton');
const movieInput = document.getElementById('movieInput');
const movieDetails = document.getElementById('movieDetails');
const errorMessage = document.getElementById('errorMessage');
const movieTitle = document.getElementById('movieTitle');
const moviePoster = document.getElementById('moviePoster');
const movieYear = document.getElementById('movieYear');
const moviePlot = document.getElementById('moviePlot');
const movieRating = document.getElementById('movieRating');

// Function to fetch movie data
async function fetchMovie() {
    const movieName = movieInput.value;
    if (!movieName) return;

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movieName)}&apikey=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "False") {
            showError();
        } else {
            displayMovie(data);
        }
    } catch (error) {
        console.error("Error fetching the movie data:", error);
        showError();
    }
}

// Function to display movie data
function displayMovie(data) {
    movieDetails.classList.remove('hidden');
    errorMessage.classList.add('hidden');

    movieTitle.textContent = data.Title;
    moviePoster.src = data.Poster !== "N/A" ? data.Poster : 'default_poster.jpg';
    movieYear.textContent = `Year: ${data.Year}`;
    moviePlot.textContent = `Plot: ${data.Plot}`;
    movieRating.textContent = `IMDb Rating: ${data.imdbRating}`;
}

// Function to show an error message
function showError() {
    errorMessage.classList.remove('hidden');
    movieDetails.classList.add('hidden');
}

// Add event listener to the search button
searchButton.addEventListener('click', fetchMovie);
