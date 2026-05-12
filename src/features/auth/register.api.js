import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api.js";
import toast from "react-hot-toast";

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, thunkApi) => {
        try {
            const response = await api.post('/user/register', userData);
            toast.success(response.data?.message || "user creation Successful");
            return response.data
        } catch (error) {
            toast.error(error.response?.data?.message);
            return thunkApi.rejectWithValue(error.response?.data);
        }
    }
)