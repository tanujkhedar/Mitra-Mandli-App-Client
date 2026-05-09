import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";

export const updateCommonDetails = createAsyncThunk(
    "auth/updateCommonDetails",
    async (data, thunkApi) => {
        try {
            const response = await api.put('/user/updatedetails', data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || 'Update common details failed');
        }
    }
);