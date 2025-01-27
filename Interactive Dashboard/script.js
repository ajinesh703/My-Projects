// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Fetch Weather Data
const weatherContainer = document.getElementById('weather-data');

async function fetchWeather() {
    const apiKey = 'YOUR_API_KEY'; // Get it from OpenWeatherMap
    const city = 'New Delhi';
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    const data = await response.json();
    weatherContainer.innerHTML = `
        <p>City: ${data.name}</p>
        <p>Temperature: ${data.main.temp}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
    `;
}

fetchWeather();

// Stock Chart
const ctx = document.getElementById('stockChart').getContext('2d');
const stockChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'], // Example labels
        datasets: [
            {
                label: 'Stock Price',
                data: [120, 150, 170, 160, 180], // Example data
                borderColor: '#007bff',
                backgroundColor: 'rgba(0, 123, 255, 0.1)',
            },
        ],
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
        },
    },
});
