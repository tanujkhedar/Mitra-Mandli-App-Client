import { createAsyncThunk } from "@reduxjs/toolkit";
import {api}  from '../../app/Api.js'
import toast from "react-hot-toast";

export const getUser = createAsyncThunk(
    'auth/getuser',
    async (_,thunkApi) => {
        try {
            const response = await api.get('/user/get');
            toast.success(response.data?.message || "user fetch Successfully");
            return response.data;
        } catch (error) {
            toast.error(error.response?.data?.message);
            return thunkApi.rejectWithValue(error.response?.data);
        }
    }
)