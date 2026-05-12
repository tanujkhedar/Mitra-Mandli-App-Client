import toast from "react-hot-toast";
import { api } from "../../app/Api"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteAvatar = createAsyncThunk(
  "auth/deleteAvatar",
  async (_, thunkApi) => {
    try {
        const responae = await api.delete("/user/deleteavatar");
        toast.success(response.data?.message || "avatar deleted Successfully")
        return responae.data;
    } catch (error) {
        toast.error(error.response?.data?.message);
        return thunkApi.rejectWithValue(error.response?.data);
    }
  }
);