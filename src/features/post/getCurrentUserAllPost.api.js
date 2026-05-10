import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api.js";

export const getCurrentUserAllPost = createAsyncThunk(
    "post/getCurrentUserAllPost",
    async (_, thunkApi) => {
        try {
            const response = await api.get("/post/getall");
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data);
        }
    }
);