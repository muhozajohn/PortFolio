import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import searchService from "../../services/search.services";

const initialState = {
  search: [],
  loading: false,
  error: null,
};

// get all search

export const getAllSearch = createAsyncThunk(
  "search/getAllSearch",
  async () => {
    const response = await searchService.getAll();
    return response.data.results;
  }
);

// create Sliced

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllSearch.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllSearch.fulfilled, (state, action) => {
        state.loading = false;
        state.search = action.payload;
      })
      .addCase(getAllSearch.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// selectors

export const selectSearch = (state) => state.search.search;
export const selectSearchLoading = (state) => state.search.loading;
export const selectSearchError = (state) => state.search.error;

export default searchSlice.reducer;
