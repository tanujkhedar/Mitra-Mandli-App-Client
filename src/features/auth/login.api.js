import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../app/Api.js";
import toast from "react-hot-toast";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData, thunkApi) => {
        try {
            const response = await api.post(
                '/user/login', 
                userData,
            )

            toast.success(response.data?.message || "login Successful");

            return response.data;
        } catch (error) {
            toast.error(error.response?.data?.message);
            return thunkApi.rejectWithValue(error.response?.data);    
        }
    }
)