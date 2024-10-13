// Replace this with your News API key
const API_KEY = 'fetch your api key here';
const newsContainer = document.getElementById('news-container');

// Sentiment thresholds
const POSITIVE_THRESHOLD = 0.6;
const NEGATIVE_THRESHOLD = 0.4;

// Default category
let currentCategory = 'general'; // All news initially

// Function to fetch news based on the selected category
async function fetchNews(category) {
  const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.articles;
}

// Function to analyze sentiment using TensorFlow.js
async function analyzeSentiment(text) {
  const model = await toxicity.load(0.7);
  const predictions = await model.classify([text]);

  let sentimentScore = 0;
  predictions.forEach(prediction => {
    if (prediction.label === 'toxicity') {
      sentimentScore = prediction.results[0].probabilities[1]; // Toxicity probability
    }
  });
  return sentimentScore;
}

// Function to display news
async function displayNews() {
  const articles = await fetchNews(currentCategory);
  newsContainer.innerHTML = ''; // Clear the container before adding new articles

  for (const article of articles) {
    const sentimentScore = await analyzeSentiment(article.title);
    const sentiment = getSentimentCategory(sentimentScore);

    // Add the news article to the container
    const articleDiv = document.createElement('div');
    articleDiv.className = `news-article ${sentiment}`;
    articleDiv.innerHTML = `
      <h3>${article.title}</h3>
      <p>${article.description || 'No description available'}</p>
      <p><strong>Sentiment: ${sentiment}</strong></p>
    `;

    newsContainer.appendChild(articleDiv);
  }
}

// Get sentiment category based on the sentiment score
function getSentimentCategory(score) {
  if (score >= POSITIVE_THRESHOLD) return 'positive';
  if (score <= NEGATIVE_THRESHOLD) return 'negative';
  return 'neutral';
}

// Filter news based on sentiment
document.getElementById('positive-news').addEventListener('click', () => {
  filterNews('positive');
});

document.getElementById('neutral-news').addEventListener('click', () => {
  filterNews('neutral');
});

document.getElementById('negative-news').addEventListener('click', () => {
  filterNews('negative');
});

function filterNews(sentiment) {
  const articles = document.querySelectorAll('.news-article');
  articles.forEach(article => {
    if (!sentiment || article.classList.contains(sentiment)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
}

// Category buttons to fetch news for different categories
document.getElementById('all-news').addEventListener('click', () => {
  currentCategory = 'general';
  displayNews();
});

document.getElementById('sports-news').addEventListener('click', () => {
  currentCategory = 'sports';
  displayNews();
});

document.getElementById('science-news').addEventListener('click', () => {
  currentCategory = 'science';
  displayNews();
});

document.getElementById('finance-news').addEventListener('click', () => {
  currentCategory = 'business'; // Business is typically used for finance
  displayNews();
});

document.getElementById('politics-news').addEventListener('click', () => {
  currentCategory = 'politics';
  displayNews();
});

document.getElementById('stokes-news').addEventListener('click', () => {
    currentCategory = 'stokes';
    displayNews();
});

document.getElementById('jobs-news').addEventListener('click', () => {
    currentCategory = 'jobs';
    displayNews();
});

document.getElementById('cricket-news').addEventListener('click', () => {
    currentCategory = 'cricket';
    displayNews();
});

document.getElementById('geopolitics-news').addEventListener('click', () => {
  currentCategory = 'general'; // There's no direct "geopolitics" category in News API, so we use general
  displayNews();
});

// Initial display of news (default to all
