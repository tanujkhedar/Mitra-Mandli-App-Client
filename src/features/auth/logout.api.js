import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";
import toast from "react-hot-toast";

export const logout = createAsyncThunk(
  "auth/logout",
  async (_, thunkApi) => {
    try {
        const response = await api.post("/user/logout");
        toast.success(response.data?.message || "logout Successful")
        return response.data;
    } catch (error) {
        toast.error(error.response?.data?.message);
        return thunkApi.rejectWithValue(error.response?.data); 
    }
  }
);