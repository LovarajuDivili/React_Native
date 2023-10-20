import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IntialState } from "./type";
import { BASE_URL } from "../../../api/request";
import request from "../../../api/request";

export const test = createAsyncThunk(
  "fetch/test",
  async () => {
    const response = await request({
      method: "GET",
      
      url: `${BASE_URL}/test`,
    });
    return response;
  }
);

export const initialState: IntialState = {
  isAuthenticated: false,
  //isAuthenticated: true,
  isLoading: true,
  sampleData: {
    data: [],
    status: "loading",
    error: "",
  }
};
const DataSlice = createSlice({
  initialState: initialState,
  name: "test",
  reducers: {
    logintoHome: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers(builder) {
    builder
    .addCase(test.pending, (state) => {
      state.sampleData.status = "loading";
      state.sampleData.data = [];
      state.sampleData.error = "";
    })
    .addCase(test.fulfilled, (state, action) => {
      state.sampleData.status = "loaded";
      state.sampleData.data = action.payload.log_data;
      state.sampleData.error = "";
    })
    .addCase(test.rejected, (state) => {
      state.sampleData.status = "loadingError";
      state.sampleData.data = [];
      state.sampleData.error = "error";
    })
    

  },
});

export default DataSlice;
export const { logintoHome,isLoading} =DataSlice.actions;






















