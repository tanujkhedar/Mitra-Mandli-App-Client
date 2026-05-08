import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./login.api.js";
import { registerUser } from "./register.api.js";
import { getUser } from "./getUser.api.js";
import { updateAvtar } from "./updateAvatar.api.js";
import { updateEmail } from "./updateEmail.api.js";
import { updatePassword } from "./updatePassword.api.js";
import { updateUsername } from "./updateUsername.api.js";
import { updateCommonDetails } from "./updateCommonDetails.api.js";
import { deleteAccount } from "./deleteAccount.api.js";
import { deleteAvatar } from "./deleteAvatar.api.js";

export const AuthSlice = createSlice({
  name: "auth",

  initialState: {
    user: null,
    isAuth: false,
    pending: true,
    error: null,
  },

  reducers: {},

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
        state.user = null;
        state.isAuth = false;
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
        state.user = null;
        state.isAuth = false;
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
        state.user = null;
        state.isAuth = false;
        state.error = action.payload.message || "SignUp failed";
      })

      .addCase(logout.pending, (state) => {
        state.pending = true;
        state.error = null;
      })

      .addCase(logout.fulfilled, (state) => {
        state.pending = false;
        state.user = null;
        state.isAuth = false;
      })

      .addCase(logout.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Logout failed";
      })

      .addCase(updateAvtar.pending, (state) => {
        state.pending = true;
        state.error = null;
      })

      .addCase(updateAvtar.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(updateAvtar.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Update avatar failed";
      })

      .addCase(updateEmail.pending, (state) => {
        state.pending = true;
        state.error = null;
      })

      .addCase(updateEmail.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(updateEmail.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Update email failed";
      })

      .addCase(updatePassword.pending, (state) => {
        state.pending = true;
        state.error = null;
      })

      .addCase(updatePassword.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(updatePassword.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Update password failed";
      })

      .addCase(updateUsername.pending, (state) => {
        state.pending = true;
        state.error = null;
      })

      .addCase(updateUsername.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(updateUsername.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Update username failed";
      })

      .addCase(updateCommonDetails.pending, (state) => {
        state.pending = true;
        state.error = null;
      })

      .addCase(updateCommonDetails.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(updateCommonDetails.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Update common details failed";
      })

      .addCase(deleteAccount.pending, (state) => {
        state.pending = true;
        state.error = null;
      })

      .addCase(deleteAccount.fulfilled, (state) => {
        state.pending = false;
        state.user = null;
        state.isAuth = false;
      })

      .addCase(deleteAccount.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Delete account failed";
      })

      .addCase(deleteAvatar.pending, (state) => {
        state.pending = true;
        state.error = null;
      })

      .addCase(deleteAvatar.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(deleteAvatar.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Delete avatar failed";
      })
  }
});

export const logout = AuthSlice.actions
export default AuthSlice.reducer