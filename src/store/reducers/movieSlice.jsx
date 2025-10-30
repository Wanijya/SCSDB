import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    loadmovies: (state, action) => {
      state.info = action.payload;
    },
    removemovie: (state, action) => {
      state.info = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loadmovies, removemovie } = movieSlice.actions;

export default movieSlice.reducer;
