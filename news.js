const apiKey = '07e21e427c1343a283e962556fc6bcd7'; // Replace with your NewAPI keys 
const apiUrl = 'https://newsapi.org/v2/top-headlines?';
const newsContainer = document.getElementById('newsContainer');
const searchInput = document.getElementById('searchInput');
const categorySelect = document.getElementById('categorySelect');
const loadMoreBtn = document.getElementById('loadMoreBtn');

let currentPage = 1;
let currentSearchTerm = '';
let currentCategory = 'all';

// Fetch news articles from API
async function fetchNews(searchTerm = '', category = 'all', page = 1) {
    let url = `${apiUrl}country=us&pageSize=6&page=${page}&apiKey=${apiKey}`;

    if (searchTerm) {
        url += `&q=${searchTerm}`;
    }

    if (category !== 'all') {
        url += `&category=${category}`;
    }

    const res = await fetch(url);
    const data = await res.json();
    return data.articles;
}

// Display news articles in the DOM
function displayNews(articles) {
    articles.forEach(article => {
        const newsEl = document.createElement('div');
        newsEl.classList.add('news-article');
        newsEl.innerHTML = `
            <img src="${article.urlToImage || 'https://via.placeholder.com/300x200'}" alt="${article.title}">
            <h3>${article.title}</h3>
            <p>${article.description || 'No description available.'}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(newsEl);
    });
}

// Load initial set of articles
async function loadNews() {
    const articles = await fetchNews(currentSearchTerm, currentCategory, currentPage);
    displayNews(articles);
}

// Load more articles when "Load More" button is clicked
loadMoreBtn.addEventListener('click', async () => {
    currentPage++;
    const articles = await fetchNews(currentSearchTerm, currentCategory, currentPage);
    displayNews(articles);
});

// Filter by search term
searchInput.addEventListener('input', async (e) => {
    currentSearchTerm = e.target.value;
    currentPage = 1;
    newsContainer.innerHTML = ''; // Clear previous articles
    await loadNews();
});

// Filter by category
categorySelect.addEventListener('change', async (e) => {
    currentCategory = e.target.value;
    currentPage = 1;
    newsContainer.innerHTML = ''; // Clear previous articles
    await loadNews();
});

// Initial load
loadNews();
