import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/managers/";

// Fetch all managers
export const fetchManagers = createAsyncThunk(
  "managers/fetchManagers",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Add a new manager with file upload
export const addManager = createAsyncThunk(
  "managers/addManager",
  async (managerData, thunkAPI) => {
    try {
      const res = await axios.post(API_URL, managerData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Update a manager (Edit lastDate, status, or any field)
export const updateManager = createAsyncThunk(
  "managers/updateManager",
  async ({ id, managerData }, thunkAPI) => {
    try {
      const res = await axios.put(`${API_URL}${id}`, managerData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

// Delete a manager
export const deleteManager = createAsyncThunk(
  "managers/deleteManager",
  async (id, thunkAPI) => {
    try {
      await axios.delete(`${API_URL}${id}`);
      return id; // return deleted manager id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const managerSlice = createSlice({
  name: "managers",
  initialState: {
    managers: [],
    isLoading: false,
    isError: false,
    message: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Managers
      .addCase(fetchManagers.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchManagers.fulfilled, (state, action) => {
        state.isLoading = false;
        state.managers = action.payload;
      })
      .addCase(fetchManagers.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Add Manager
      .addCase(addManager.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addManager.fulfilled, (state, action) => {
        state.isLoading = false;
        state.managers.push(action.payload);
      })
      .addCase(addManager.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Update Manager
      .addCase(updateManager.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateManager.fulfilled, (state, action) => {
        state.isLoading = false;
        state.managers = state.managers.map((m) =>
          m._id === action.payload._id ? action.payload : m
        );
      })
      .addCase(updateManager.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
          // Delete Manager
    .addCase(deleteManager.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(deleteManager.fulfilled, (state, action) => {
      state.isLoading = false;
      state.managers = state.managers.filter((m) => m._id !== action.payload);
    })
    .addCase(deleteManager.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload;
    });    
  },
});

export default managerSlice.reducer;
