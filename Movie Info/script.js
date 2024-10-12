const apiKey = 'Put your API Key here'; // Replace with your OMDB API key
const movieInfo = document.getElementById('movie-info');

async function searchMovie() {
    const movieTitle = document.getElementById('movie-input').value;
    if (movieTitle === '') {
        alert('Please enter a movie title');
        return;
    }

    try {
        const response = await fetch(`https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`);
        const data = await response.json();

        if (data.Response === 'False') {
            movieInfo.innerHTML = `<p>Movie not found. Please try another search.</p>`;
            movieInfo.style.display = 'block';
            return;
        }

        displayMovieDetails(data);
    } catch (error) {
        console.error('Error fetching movie data:', error);
    }
}

function displayMovieDetails(data) {
    movieInfo.innerHTML = `
        <div class="clearfix">
            <img src="${data.Poster}" alt="Movie Poster">
            <h2>${data.Title} (${data.Year})</h2>
            <p><strong>Rating:</strong> ${data.imdbRating}</p>
            <p><strong>Box Office:</strong> ${data.BoxOffice || 'N/A'}</p>
            <p><strong>Plot:</strong> ${data.Plot}</p>
        </div>
    `;

    movieInfo.style.display = 'block';
}



//Made By Ajinesh Pratap Singh
