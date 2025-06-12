import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
app.use(cors());

const COINGECKO_API = "https://api.coingecko.com/api/v3";
const CURRENCY_API = "https://api.exchangerate-api.com/v4/latest/USD"; // Example API

// Function to get real-time USD to INR conversion rate
const getExchangeRate = async () => {
  try {
    const response = await axios.get(CURRENCY_API);
    return response.data.rates.INR; // Extract INR conversion rate
  } catch (error) {
    console.error("Error fetching exchange rate:", error);
    return 87; // Fallback to a fixed value in case of an error
  }
};

// Get all coins with INR & USD prices
app.get("/api/coins", async (req, res) => {
  try {
    const { page = 1 } = req.query;
    
    // Fetch real-time exchange rate
    const USD_TO_INR = await getExchangeRate();

    const response = await axios.get(`${COINGECKO_API}/coins/markets`, {
      params: {
        vs_currency: "usd",  // Fetch in USD (INR will be calculated)
        order: "market_cap_desc",
        per_page: 25,
        page,
      },
    });

    const updatedCoins = response.data.map((coin) => ({
      ...coin,
      current_price_inr: coin.current_price ? (coin.current_price * USD_TO_INR) : 0,
    }));

    res.json(updatedCoins);
  } catch (error) {
    console.error("Error fetching coin data:", error);
    res.status(500).json({ error: "Error fetching coin data" });
  }
});

// Get coin details (for specific coin page)
app.get("/api/coin/:id", async (req, res) => {
  try {
    const { id } = req.params;
    
    // Fetch real-time exchange rate
    const USD_TO_INR = await getExchangeRate();

    const response = await axios.get(`${COINGECKO_API}/coins/${id}`);

    const updatedCoin = {
      ...response.data,
      market_data: {
        ...response.data.market_data,
        current_price: {
          ...response.data.market_data.current_price,
          inr: response.data.market_data.current_price.usd * USD_TO_INR,
        },
      },
    };

    res.json(updatedCoin);
  } catch (error) {
    console.error("Error fetching coin details:", error);
    res.status(500).json({ error: "Error fetching coin details" });
  }
});

// Get coin price history
app.get("/api/coin/:id/history", async (req, res) => {
  try {
    const { id } = req.params;
    const { days } = req.query;

    const response = await axios.get(`${COINGECKO_API}/coins/${id}/market_chart`, {
      params: { vs_currency: "usd", days },
    });

    res.json(response.data);
  } catch (error) {
    console.error("Error fetching coin history:", error);
    res.status(500).json({ error: "Error fetching coin history" });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
