import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";

export const updateEmail = createAsyncThunk(
    "auth/updateEmail",
    async (data, thunkApi) => {
        try {
            const response = await api.patch('/user/updateemail', data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || 'Update email failed');
        }
    }
);