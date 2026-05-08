import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "../../app/Api.js";

export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async (userData, thunkApi) => {
        try {
            const response = await api.post(
                '/api/v1/user/login', 
                userData, 
                {
                    withCredentials : true,
                    
                }
            )

            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || "Login Failed");    
        }
    }
)