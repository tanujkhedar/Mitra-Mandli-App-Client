import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";

export const updateUsername = createAsyncThunk(
    "auth/updateUsername",
    async (data, thunkApi) => {
        try {
            const response = await api.patch('/user/updateusername', data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || 'Update user name failed');
        }
    }
);