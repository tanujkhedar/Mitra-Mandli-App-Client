import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api.js";

export const createPost = createAsyncThunk(
    'post/createPost',
    async (data, thunkApi) => {
        try {
            const response = await api.post('/post/upload', data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data);
        }
    }
);