import { configureStore } from "@reduxjs/toolkit";
import searchReducers from "./features/search/searchSlice";

const store = configureStore({
    reducer: {
        search: searchReducers,
    },
});

export default store;