import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import contactService from "../../services/contact.services";

const initialState = {
  contact: [],
  loading: false,
  error: null,
};

// create contact

export const createContact = createAsyncThunk(
  "contact/createContact",
  async ({ name, email, message }, { rejectWithValue }) => {
    try {
      const response = await contactService.create({ name, email, message });
      return response.data?.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.error);
    }
  }
);


// get all contact
export const getAllcontact = createAsyncThunk(
  "contact/getAllcontact",
  async () => {
    const response = await contactService.getAll();
    return response.data.data;
  }
);

// create Sliced

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // get all contact

      .addCase(getAllcontact.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAllcontact.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
      })
      .addCase(getAllcontact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // create contact

      .addCase(createContact.pending, (state) => {
        state.loading = true;
      })
      .addCase(createContact.fulfilled, (state, action) => {
        state.loading = false;
        state.contact = action.payload;
      })
      .addCase(createContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// selectors

export const selectcontact = (state) => state.contact.contact;
export const selectcontactLoading = (state) => state.contact.loading;
export const selectcontactError = (state) => state.contact.error;

export default contactSlice.reducer;
