import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateCommonDetails = createAsyncThunk(
    "auth/updateCommonDetails",
    async (data, thunkApi) => {
        try {
            const response = await api.put('api/v1/user/updatedetails', data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || 'Update common details failed');
        }
    }
);