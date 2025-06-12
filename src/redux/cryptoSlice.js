import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const fetchAllCoins = createAsyncThunk(
  "crypto/fetchAllCoins",
  async (page) => {
    const response = await axios.get(`${API_URL}/coins`, { params: { page } });
    
    const updatedCoins = response.data.map((coin) => ({
      ...coin,
      current_price_inr: coin.current_price_inr ?? 0, // Fetch INR directly
    }));

    return updatedCoins;
  }
);

export const fetchCoinDetails = createAsyncThunk(
  "crypto/fetchCoinDetails",
  async (id) => {
    const response = await axios.get(`${API_URL}/coin/${id}`);
    
    return {
      ...response.data,
      market_data: {
        ...response.data.market_data,
        current_price: {
          ...response.data.market_data.current_price,
          inr: response.data.market_data.current_price?.inr ?? 0, // Fetch INR directly
        },
      },
    };
  }
);

export const fetchCoinHistory = createAsyncThunk(
  "crypto/fetchCoinHistory",
  async ({ id, days }) => {
    const response = await axios.get(`${API_URL}/coin/${id}/history`, { params: { days } });
    return response.data;
  }
);

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    allCoins: [],
    selectedCoin: null,
    coinHistory: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCoins.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllCoins.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allCoins = action.payload;
      })
      .addCase(fetchAllCoins.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchCoinDetails.fulfilled, (state, action) => {
        state.selectedCoin = action.payload;
      })
      .addCase(fetchCoinHistory.fulfilled, (state, action) => {
        state.coinHistory = action.payload;
      });
  },
});

export default cryptoSlice.reducer;
