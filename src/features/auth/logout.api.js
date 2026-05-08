import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
        const response = await api.post("/api/v1/user/logout");
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data ||  "Logout failed" );
    }
  }
);