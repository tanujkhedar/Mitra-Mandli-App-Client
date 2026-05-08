import { api } from "../../app/Api"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteAccount = createAsyncThunk(
  "auth/deleteAccount",
  async (data, thunkApi) => {
    try {
        const response = await api.delete("/api/v1/user/delete", {
            data : data
        });
        return response.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response.data);
    }
  }
);