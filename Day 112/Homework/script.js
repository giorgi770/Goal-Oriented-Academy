// Selecting HTML elements
const cryptoInput = document.getElementById("cryptoInput");
const searchBtn = document.getElementById("searchBtn");
const cryptoDisplay = document.getElementById("cryptoDisplay");

// Fetch crypto data using CoinGecko API
const fetchCryptoData = async (crypto) => {
  try {
    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`);
    if (!response.ok) throw new Error("Cryptocurrency not found");
    const data = await response.json();
    renderCryptoData(data[0]);
  } catch (error) {
    console.error("Error fetching crypto data:", error);
    cryptoDisplay.innerHTML = `<p class="error">Could not fetch data. Please try again.</p>`;
  }
};

// Render crypto data to the page
const renderCryptoData = (data) => {
  if (!data) return;
  cryptoDisplay.innerHTML = `
    <div class="crypto-info">
      <h2>${data.name}</h2>
      <p>Price: $${data.current_price.toLocaleString()}</p>
      <p>Market Cap: $${data.market_cap.toLocaleString()}</p>
      <p>24h Change: ${data.price_change_percentage_24h.toFixed(2)}%</p>
    </div>
  `;
};

// Event listener for the search button
searchBtn.addEventListener("click", () => {
  const crypto = cryptoInput.value.trim().toLowerCase();
  if (crypto) fetchCryptoData(crypto);
});

// Optional: Refresh data every 10 seconds (for the entered cryptocurrency)
let intervalId;
cryptoInput.addEventListener("input", () => {
  clearInterval(intervalId); // Clear previous interval on new input
});
searchBtn.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = setInterval(() => {
    const crypto = cryptoInput.value.trim().toLowerCase();
    if (crypto) fetchCryptoData(crypto);
  }, 10000); // Refresh every 10 seconds
});
