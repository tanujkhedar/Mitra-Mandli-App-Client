import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api";
import toast from "react-hot-toast";

export const updateCommonDetails = createAsyncThunk(
    "auth/updateCommonDetails",
    async (data, thunkApi) => {
        try {
            const response = await api.put('/user/updatedetails', data);
            toast.success(response.data?.message || "user details updated Successfuly")
            return response.data;
        } catch (error) {
            toast.error(error.response?.data?.message);
            return thunkApi.rejectWithValue(error.response?.data);
        }
    }
);