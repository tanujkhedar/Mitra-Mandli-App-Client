import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api.js";

export const registerUser = createAsyncThunk(
    'auth/registerUser',
    async (userData, thunkApi) => {
        try {
            const response = await api.post('/user/register', userData);

            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data)
        }
    }
)