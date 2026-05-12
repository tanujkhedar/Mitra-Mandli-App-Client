import toast from "react-hot-toast";
import { api } from "../../app/Api"
import { createAsyncThunk } from "@reduxjs/toolkit";

export const deleteAccount = createAsyncThunk(
  "auth/deleteAccount",
  async (data, thunkApi) => {
    try {
        const response = await api.delete("/user/delete", {
            data : data
        });

        toast.success(response.data?.message || "user deleted Successful")
        return response.data;
    } catch (error) {
        toast.error(error.response?.data?.message);
        return thunkApi.rejectWithValue(error.response?.data);
    }
  }
);