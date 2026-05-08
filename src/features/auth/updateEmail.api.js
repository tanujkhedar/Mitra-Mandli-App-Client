import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateEmail = createAsyncThunk(
    "auth/updateEmail",
    async (data, thunkApi) => {
        try {
            const response = await api.patch('api/v1/user/updateemail', data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || 'Update email failed');
        }
    }
);