const moviesData = [
    // English
    { name: "Inception", duration: 148, rating: 88, language: "English", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQovCe0H45fWwAtV31ajOdXRPTxSsMQgPIQ3lcZX_mAW0jXV3kH" },
    { name: "Interstellar", duration: 169, rating: 87, language: "English", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oW0XQlu1lo1G_49M-YwGzKR6rUg-CtflZj07HfbT8d2GwKWg" },
    { name: "The Dark Knight", duration: 152, rating: 91, language: "English", poster: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkUywIUXDjHSQJIaNHYVs08osgBpF5Ot-xmB_omyEZeeRP9Xug" },
    { name: "Avengers: Endgame", duration: 181, rating: 84, language: "English", poster: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRXef9DJnZiq5az0UnjkmvkQufOQ5MFnF7HATYRUXN913swRuH1" },
    { name: "Spider-Man: Into the Spider-Verse", duration: 117, rating: 84, language: "English", poster: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR7lwIPrJJySz-YBguA6CZYb5uGnHy2iAZEi0ZI3MtOGufwHLIx" },
    { name: "The Matrix", duration: 136, rating: 87, language: "English", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmrWMRpNRVrOlvlbjq2FfVvcP0l8l1EB8NjkhcyFc4mNM4d-JNjyUNtWJR6BDHCEi1nZojudne0d_N&s=10&ec=121643139" },
    { name: "Gladiator", duration: 155, rating: 85, language: "English", poster: "https://upload.wikimedia.org/wikipedia/en/f/fb/Gladiator_%282000_film_poster%29.png" },
    { name: "The Godfather", duration: 175, rating: 92, language: "English", poster: "https://upload.wikimedia.org/wikipedia/en/1/1c/Godfather_ver1.jpg" },
    { name: "Forrest Gump", duration: 142, rating: 88, language: "English", poster: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg" },

    // Telugu
    { name: "RRR", duration: 186, rating: 82, language: "Telugu", poster: "https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg" },
    { name: "Baahubali: The Beginning", duration: 159, rating: 80, language: "Telugu", poster: "https://upload.wikimedia.org/wikipedia/en/5/5f/Baahubali_The_Beginning_poster.jpg" },
    { name: "Eega", duration: 145, rating: 77, language: "Telugu", poster: "https://images.justwatch.com/poster/16969947/s166/eega.avif" },
    { name: "Pushpa: The Rise", duration: 175, rating: 76, language: "Telugu", poster: "https://m.media-amazon.com/images/S/pv-target-images/94e59e9b1d60c5568b43bf5b1c62e8f556654508d2f0fa81424b479b22459338.jpg" },
    { name: "Arjun Reddy", duration: 187, rating: 81, language: "Telugu", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTjTUffc15iBB4WFj7ayVXWPdH9QSuxDZoJF6MXsbdNBwLU8M864V8D7vrOlkw833ptVT0aGlbXNbYew&s=10&ec=121643139" },
    { name: "Baahubali 2: The Conclusion", duration: 167, rating: 85, language: "Telugu", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT42kc9H6S0q8n1a1eKrEkbYhx5L4SlE6b11wfVoi_lCAesiA-lsVCi0CqQg9KdEgwJJVmC04S-mu0KFw&s=10&ec=121643139" },
    { name: "Jersey", duration: 157, rating: 85, language: "Telugu", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBagGWwfc9xz7lzW3qmyyHVAfbLKoD7zsXHnVu6D7DuE0mF-hv9D4Yohb7W4CvJYR9W6yjEdELe1o-lA&s=10&ec=121643139" },
    { name: "Mahanati", duration: 177, rating: 85, language: "Telugu", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG23--z1SxD2Jcw-djVrRA6TQroultBZOfOnb3HYCHAV29LbkhfaolUbMCqd6RR6ZhOf8CyhZfH6OjQA&s=10&ec=121643139" },
    { name: "Ala Vaikunthapurramuloo", duration: 165, rating: 73, language: "Telugu", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrDFNA-RxwDlUK7kD3pYzosyUU9dJzmy982VgQMy2bYF1Rm5bV9NEdUH1wJlRWyWx1gXa7xnRZJk5tw&s=10&ec=121643139" },

    // Hindi
    { name: "Dangal", duration: 161, rating: 83, language: "Hindi", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA8u6ng1-tbZ3sRRXza-Uuy-H0pTvGdVNMREE2XI036Qe0djeASfeACkzooE3XmnF-8jlS3iuWoTtB62QvMVqcWMK6gUd5If5_1OzM8KoJGP3L1Zg&s=10&ec=121643139" },
    { name: "3 Idiots", duration: 171, rating: 84, language: "Hindi", poster: "https://bcomber.org/wp-content/uploads/2021/10/Screen-Shot-2021-10-26-at-6.48.45-AM.png" },
    { name: "Sholay", duration: 204, rating: 81, language: "Hindi", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvOZn9IlBGsszNZq8cSLde2Q4w5ElQieU4-PqyuqKeeRn5nZ22QNk7ljG3eDqh4DNxgO8SE4MRMgxq&s=10&ec=121643139" },
    { name: "PK", duration: 153, rating: 81, language: "Hindi", poster: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_QL75_UY281_CR2,0,190,281_.jpg" },
    { name: "Lagaan", duration: 224, rating: 81, language: "Hindi", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBtlrnv89nZVTiEnmQKpWwfCfArOtZBgDv3UqplHWMVxuHrolVaSaejdm1sj92iNjS_raPkSNQmFJJOsIsjC1fyCWkacLUwpo1xJxVeEuPw2om6A&s=10&ec=121643139" },
    { name: "Taare Zameen Par", duration: 165, rating: 83, language: "Hindi", poster: "https://upload.wikimedia.org/wikipedia/en/b/b4/Taare_Zameen_Par_Like_Stars_on_Earth_poster.png" },
    { name: "Andhadhun", duration: 139, rating: 82, language: "Hindi", poster: "https://m.media-amazon.com/images/I/71Zk8KSESoL._AC_UF1000,1000_QL80_.jpg" }
];

const movieGrid = document.getElementById('movie-grid');
const languageFilter = document.getElementById('language-filter');
const movieCountEl = document.getElementById('movie-count');
const recommendBtn = document.getElementById('recommend-btn');
const totalTimeInput = document.getElementById('total-time');

const resultWrapper = document.getElementById('result-wrapper');
const recommendedGrid = document.getElementById('recommended-grid');
const maxRatingDisplay = document.getElementById('max-rating-display');
const timeUsedDisplay = document.getElementById('time-used-display');
const closeResultsBtn = document.getElementById('close-results-btn');

let currentMovies = [...moviesData];

function renderMovieCard(movie, container) {
    const card = document.createElement('div');
    card.className = 'movie-card';

    card.innerHTML = `
        <div class="movie-poster" style="background-image: url('${movie.poster}')">
            <div class="movie-overlay">
                <span class="movie-rating">★ ${(movie.rating / 10).toFixed(1)}</span>
            </div>
        </div>
        <div class="movie-content">
            <h3 class="movie-title">${movie.name}</h3>
            <div class="movie-meta">
                <span class="movie-duration">${movie.duration} min</span>
                <span class="movie-language">${movie.language}</span>
            </div>
        </div>
    `;
    container.appendChild(card);
}

function renderGrid(moviesToRender) {
    movieGrid.innerHTML = '';
    moviesToRender.forEach(movie => renderMovieCard(movie, movieGrid));
    movieCountEl.textContent = `${moviesToRender.length} movies`;
}

// Initial Render
renderGrid(currentMovies);

// Filter Handling
languageFilter.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    if (selectedLang === 'All') {
        currentMovies = [...moviesData];
    } else {
        currentMovies = moviesData.filter(m => m.language === selectedLang);
    }
    renderGrid(currentMovies);
});

closeResultsBtn.addEventListener('click', () => {
    resultWrapper.classList.add('hidden');
});

// Recommendations Logic
recommendBtn.addEventListener('click', async () => {
    const totalTime = parseInt(totalTimeInput.value, 10);

    if (!totalTime || totalTime <= 0) {
        alert('Please enter a valid available time in minutes.');
        return;
    }

    if (currentMovies.length === 0) {
        alert('No movies available in the selected language.');
        return;
    }

    try {
        recommendBtn.textContent = 'Computing...';
        recommendBtn.classList.add('loading');
        recommendBtn.disabled = true;

        const response = await fetch('/recommend', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ totalTime, movies: currentMovies })
        });

        if (!response.ok) {
            throw new Error('Failed to fetch recommendations');
        }

        const data = await response.json();
        displayRecommendations(data);

    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while calculating recommendations.');
    } finally {
        recommendBtn.textContent = 'Get Recommendations';
        recommendBtn.classList.remove('loading');
        recommendBtn.disabled = false;
    }
});

function displayRecommendations(data) {
    resultWrapper.classList.remove('hidden');

    // Update stats
    maxRatingDisplay.innerHTML = `${(data.totalRating / 10).toFixed(1)} <span class="unit">/ 10</span>`;
    timeUsedDisplay.innerHTML = `${data.totalTimeUsed} <span class="unit">min</span>`;

    recommendedGrid.innerHTML = '';

    if (data.selectedMovies.length === 0) {
        recommendedGrid.innerHTML = '<div class="empty-msg">No movies fit in the given time!</div>';
        return;
    }

    data.selectedMovies.forEach(movieName => {
        const movie = currentMovies.find(m => m.name === movieName);
        if (movie) {
            renderMovieCard(movie, recommendedGrid);
        }
    });

    // Smooth scroll to results
    resultWrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
