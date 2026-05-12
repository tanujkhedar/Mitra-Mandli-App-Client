import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";

export const getFeedPost = createAsyncThunk(
    'post/getFeedPost',
    async (_, thunkApi) => {
        try {
            const response = await api.get('/post/feedposts');
            // console.log("feed api:- ", response.data);
            
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data)
        }
    }
)