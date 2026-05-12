import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";

export const getFeedReels = createAsyncThunk(
    'post/getFeedReels',
    async (_, thunkApi) => {
        try {
            const response = await api.get('/post/feedreels');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data)
        }
    }
)