import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/Auth.slice.js"
import postReducer from "../features/post/post.slice.js";
import followReducer from "../features/follow/follow.slice.js";

export const store = configureStore(
    {
        reducer : {
            auth : authReducer,
            post : postReducer,
            follow: followReducer
        }
    }
);