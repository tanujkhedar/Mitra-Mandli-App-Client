import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/Auth.slice.js"

export const store = configureStore(
    {
        reducer : {
            auth : authReducer
        }
    }
);