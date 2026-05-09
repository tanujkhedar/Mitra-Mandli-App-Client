import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";


export const updateAvtar = createAsyncThunk(
    'auth/updateAvtar',
    async (data, thunkApi) => {
        try {
            const response = await api.patch('/user/updateavatar', data);

            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || 'Update avatar failed')
        }
    }
);