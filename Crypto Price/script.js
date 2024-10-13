// CoinGecko API URL for fetching cryptocurrency prices
const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin,solana,cardano,shiba-inu,avalanche-2,terra-luna,terra-luna-classic,xrp,litecoin,binancecoin,polygon,dash&vs_currencies=usd';

// Function to fetch cryptocurrency prices
async function fetchCryptoPrices() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Update the prices in the HTML
        document.getElementById('btc-price').innerText = data.bitcoin.usd.toFixed(2);
        document.getElementById('eth-price').innerText = data.ethereum.usd.toFixed(2);
        document.getElementById('doge-price').innerText = data.dogecoin.usd.toFixed(4);
        document.getElementById('sol-price').innerText = data.solana.usd.toFixed(2);
        document.getElementById('ada-price').innerText = data.cardano.usd.toFixed(2);
        document.getElementById('shib-price').innerText = data['shiba-inu'].usd.toFixed(8);
        document.getElementById('avax-price').innerText = data['avalanche-2'].usd.toFixed(2);
        document.getElementById('lunc-price').innerText = data['terra-luna-classic'].usd.toFixed(8);
        document.getElementById('xrp-price').innerText = data.xrp.usd.toFixed(2);
        document.getElementById('ltc-price').innerText = data.litecoin.usd.toFixed(2);
        document.getElementById('bnb-price').innerText = data.binancecoin.usd.toFixed(2);
        document.getElementById('matic-price').innerText = data.polygon.usd.toFixed(2);
        document.getElementById('dash-price').innerText = data.dash.usd.toFixed(2);
    } catch (error) {
        console.error('Error fetching cryptocurrency prices:', error);
    }
}

// Fetch the prices immediately when the page loads
fetchCryptoPrices();

// Set an interval to update prices every 60 seconds (60000 milliseconds)
setInterval(fetchCryptoPrices, 60000);
