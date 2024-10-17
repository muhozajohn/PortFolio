import { configureStore } from "@reduxjs/toolkit";
import contactReducers from "./features/contact/contactSlice";

const store = configureStore({
    reducer: {
        contact: contactReducers,
    },
});

export default store;