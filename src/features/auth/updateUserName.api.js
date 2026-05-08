import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateUserName = createAsyncThunk(
    "auth/updateUserName",
    async (data, thunkApi) => {
        try {
            const response = await api.patch('api/v1/user/updateusername', data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || 'Update user name failed');
        }
    }
);