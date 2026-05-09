import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./login.api.js";
import { logout } from "./logout.api.js";
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
    responseMessage: null,
    error: null,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.pending = true;
        state.responseMessage = null;
        state.error = null;
      })

      .addCase(getUser.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.isAuth = true;
        state.responseMessage = action.payload?.message || "User fetched successfully";
      })

      .addCase(getUser.rejected, (state, action) => {
        state.pending = false;
        state.user = null;
        state.isAuth = false;
        state.error = action.payload.message || "Auth failed";
        state.responseMessage = null;
      })
      .addCase(loginUser.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.responseMessage = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.isAuth = true;
        state.responseMessage = action.payload?.message || "Login successful";
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.pending = false;
        state.user = null;
        state.isAuth = false;
        state.error = action.payload.message || "Login failed";
        state.responseMessage = null;
      })
      .addCase(registerUser.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.responseMessage = null;
      })

      .addCase(registerUser.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.isAuth = true;
        state.responseMessage = action.payload?.message || "Registration successful";
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.pending = false;
        state.user = null;
        state.isAuth = false;
        state.error = action.payload.message || "SignUp failed";
        state.responseMessage = null;
      })

      .addCase(logout.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.responseMessage = null;
      })

      .addCase(logout.fulfilled, (state) => {
        state.pending = false;
        state.user = null;
        state.isAuth = false;
        state.responseMessage = action.payload?.message || "Logout successful";
      })

      .addCase(logout.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Logout failed";
        state.responseMessage = null;
      })

      .addCase(updateAvtar.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.responseMessage = null;
      })

      .addCase(updateAvtar.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.responseMessage = action.payload?.message || "Avatar updated successfully";
      })

      .addCase(updateAvtar.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Update avatar failed";
        state.responseMessage = null;
      })

      .addCase(updateEmail.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.responseMessage = null;
      })

      .addCase(updateEmail.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.responseMessage = action.payload?.message || "Email updated successfully";
      })

      .addCase(updateEmail.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Update email failed";
        state.responseMessage = null;
      })

      .addCase(updatePassword.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.responseMessage = null;
      })

      .addCase(updatePassword.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.responseMessage = action.payload?.message || "Password updated successfully";
      })

      .addCase(updatePassword.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Update password failed";
        state.responseMessage = null;
      })

      .addCase(updateUsername.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.responseMessage = null;
      })

      .addCase(updateUsername.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.responseMessage = action.payload?.message || "Username updated successfully";
      })

      .addCase(updateUsername.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Update username failed";
        state.responseMessage = null;
      })

      .addCase(updateCommonDetails.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.responseMessage = null;
      })

      .addCase(updateCommonDetails.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.responseMessage = action.payload?.message || "Common details updated successfully";
      })

      .addCase(updateCommonDetails.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Update details failed";
        state.responseMessage = null;
      })

      .addCase(deleteAccount.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.responseMessage = null;
      })

      .addCase(deleteAccount.fulfilled, (state) => {
        state.pending = false;
        state.user = null;
        state.isAuth = false;
        state.responseMessage = action.payload?.message || "Account deleted successfully";
      })

      .addCase(deleteAccount.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Delete account failed";
        state.responseMessage = null;
      })

      .addCase(deleteAvatar.pending, (state) => {
        state.pending = true;
        state.error = null;
        state.responseMessage = null;
      })

      .addCase(deleteAvatar.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
        state.responseMessage = action.payload?.message || "Avatar deleted successfully";
      })

      .addCase(deleteAvatar.rejected, (state, action) => {
        state.pending = false;
        state.error = action.payload.message || "Delete avatar failed";
        state.responseMessage = null;
      })
  }
});

export default AuthSlice.reducer