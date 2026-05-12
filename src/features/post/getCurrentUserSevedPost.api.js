import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";

export const getCurrentUserSevedPost = createAsyncThunk(
    'post/getCurrentUserSevedPost',
    async (_, thunkApi) => {
        try {
            const response = await api.get('/collection/get');
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data);
        }
    }
);