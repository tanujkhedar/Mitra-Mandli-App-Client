import { createAsyncThunk } from "@reduxjs/toolkit";
import {api}  from '../../app/Api.js'

export const getUser = createAsyncThunk(
    'auth/getuser',
    async (_,thunkApi) => {
        try {
            const response = await api.get('/api/v1/user/get');

            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data);
        }
    }
)