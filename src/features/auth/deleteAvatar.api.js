import { api } from "../../app/Api"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteAvatar = createAsyncThunk(
  "auth/deleteAvatar",
  async (_, thunkApi) => {
    try {
        const responae = await api.delete("api/v1/user/deleteavatar");
        return responae.data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.response?.data);
    }
  }
);