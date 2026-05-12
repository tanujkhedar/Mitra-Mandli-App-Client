import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";
import toast from "react-hot-toast";

export const updateEmail = createAsyncThunk(
    "auth/updateEmail",
    async (data, thunkApi) => {
        try {
            const response = await api.patch('/user/updateemail', data);
            toast.success(response.data?.message || "email update Successfully")
            return response.data;
        } catch (error) {
            toast.error(error.response?.data?.message);
            return thunkApi.rejectWithValue(error.response?.data);
        }
    }
);