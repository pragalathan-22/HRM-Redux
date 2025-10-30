import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "http://localhost:5000/api/managers";

// ---------------- FETCH ALL ----------------
export const fetchManagers = createAsyncThunk(
  "managers/fetchManagers",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get(API_URL);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// ---------------- ADD ----------------
export const addManager = createAsyncThunk(
  "managers/addManager",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post(API_URL, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return handleError(err, thunkAPI);
    }
  }
);


// ---------------- UPDATE ----------------
export const updateManager = createAsyncThunk(
  "managers/updateManager",
  async ({ id, formData }, thunkAPI) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

// ---------------- DELETE ----------------
export const deleteManager = createAsyncThunk(
  "managers/deleteManager",
  async (id, thunkAPI) => {
    try {
      const res = await axios.delete(`${API_URL}/${id}`);
      return res.data.id;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || err.message);
    }
  }
);

//---------------- SLICE ----------------
const initialState = {
  managers: [],
  isLoading: false,
  isError: false,
  message: "",
};

const managerSlice = createSlice({
  name: "managers",
  initialState,
  reducers: {
    clearMessage: (state) => {
      state.message = "";
      state.isError = false;
    },
  },
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchManagers.pending, (state) => { state.isLoading = true; state.isError = false; state.message = ""; })
      .addCase(fetchManagers.fulfilled, (state, action) => { state.isLoading = false; state.managers = action.payload; })
      .addCase(fetchManagers.rejected, (state, action) => { state.isLoading = false; state.isError = true; state.message = action.payload; })
      // Add
      .addCase(addManager.pending, (state) => { state.isLoading = true; state.isError = false; state.message = ""; })
      .addCase(addManager.fulfilled, (state, action) => {
  state.isLoading = false;
  // Your backend sends { message, manager }
  if (action.payload?.manager) {
    state.managers.push(action.payload.manager);
  }
  state.message = action.payload?.message || "Manager added successfully!";
})

      .addCase(addManager.rejected, (state, action) => { state.isLoading = false; state.isError = true; state.message = action.payload; })
      // Update
      .addCase(updateManager.pending, (state) => { state.isLoading = true; state.isError = false; state.message = ""; })
      .addCase(updateManager.fulfilled, (state, action) => {
  state.isLoading = false;
  const updated = action.payload.updatedManager || action.payload.manager || action.payload;
  state.managers = state.managers.map(m =>
    String(m._id) === String(updated._id) ? updated : m
  );
  state.message = action.payload?.message || "Manager updated successfully!";
})

      .addCase(updateManager.rejected, (state, action) => { state.isLoading = false; state.isError = true; state.message = action.payload; })
      // Delete
      .addCase(deleteManager.pending, (state) => { state.isLoading = true; state.isError = false; state.message = ""; })
.addCase(deleteManager.fulfilled, (state, action) => {
  state.isLoading = false;
  const id = action.payload?.id || action.payload?.managerId || action.payload;
  state.managers = state.managers.filter(m => String(m._id) !== String(id));
  state.message = action.payload?.message || "Manager deleted!";
})

      .addCase(deleteManager.rejected, (state, action) => { state.isLoading = false; state.isError = true; state.message = action.payload; });
  },
});

export const { clearMessage } = managerSlice.actions;
export default managerSlice.reducer;
