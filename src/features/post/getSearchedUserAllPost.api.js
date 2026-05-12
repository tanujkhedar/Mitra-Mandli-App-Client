import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";

export const getSearchedUserAllPost = createAsyncThunk(
    'post/getSearchedUserAllPost',
    async (userName, thunkApi) => {
        try {
            const response = await api.get(`/post/getall/${userName}`);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data);
        }
    }
);