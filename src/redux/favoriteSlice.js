import { createSlice } from "@reduxjs/toolkit";

// Load favorites from localStorage or initialize as an empty array
const initialFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: initialFavorites,
  reducers: {
    addToFavorites: (state, action) => {
      state.push(action.payload);
      // Save to localStorage when a new favorite is added
      localStorage.setItem("favorites", JSON.stringify(state));
    },
    removeFromFavorites: (state, action) => {
      state = state.filter((fact) => fact !== action.payload);
      // Save to localStorage when a favorite is removed
      localStorage.setItem("favorites", JSON.stringify(state));
      return state;
    },
  },
});

export const { addToFavorites, removeFromFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
