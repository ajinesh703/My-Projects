// Replace 'YOUR_API_KEY' with your Alpha Vantage API key
const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://www.alphavantage.co/query";

document.getElementById("fetchButton").addEventListener("click", () => {
  const stockSymbol = document.getElementById("stockSymbol").value.toUpperCase();
  const stockDataDiv = document.getElementById("stockData");
  const errorDiv = document.getElementById("error");

  // Hide previous data and errors
  stockDataDiv.classList.add("hidden");
  errorDiv.classList.add("hidden");

  if (stockSymbol === "") {
    errorDiv.textContent = "Please enter a stock symbol!";
    errorDiv.classList.remove("hidden");
    return;
  }

  fetch(`${BASE_URL}?function=OVERVIEW&symbol=${stockSymbol}&apikey=${API_KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (Object.keys(data).length === 0) {
        throw new Error("Invalid stock symbol or data not available.");
      }

      // Populate stock data
      document.getElementById("companyName").textContent = data.Name || "N/A";
      document.getElementById("stockPrice").textContent = data["50DayMovingAverage"] || "N/A";
      document.getElementById("peRatio").textContent = data.PERatio || "N/A";
      document.getElementById("weekLow").textContent = data["52WeekLow"] || "N/A";
      document.getElementById("weekHigh").textContent = data["52WeekHigh"] || "N/A";
      document.getElementById("marketCap").textContent = data.MarketCapitalization || "N/A";

      stockDataDiv.classList.remove("hidden");
    })
    .catch((error) => {
      errorDiv.textContent = error.message;
      errorDiv.classList.remove("hidden");
    });
});
