import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";
import toast from "react-hot-toast";


export const updateAvtar = createAsyncThunk(
    'auth/updateAvtar',
    async (data, thunkApi) => {
        try {
            const response = await api.patch('/user/updateavatar', data);
            toast.success(response.data?.message || "avatar updated Successfully");
            return response.data;
        } catch (error) {
            toast.error(error.response?.data?.message);
            return thunkApi.rejectWithValue(error.response?.data);
        }
    }
);