import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./login.api.js";
import { registerUser } from "./register.api.js";
import { getUser } from "./getUser.api.js";

export const AuthSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    isAuth: false,
    pending: false,
    error: null,
  },

  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuth = false;
      state.error = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.pending = true;
        state.error = null;
      })

      .addCase(getUser.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.isAuth = true;
      })

      .addCase(getUser.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Auth failed";
      })
      .addCase(loginUser.pending, (state) => {
        state.pending = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.isAuth = true;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Login failed";
      })
      .addCase(registerUser.pending, (state) => {
        state.pending = true;
        state.error = null;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.isAuth = true;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "SignUp failed";
      });
  },
});

export const logout = AuthSlice.actions
export default AuthSlice.reducer