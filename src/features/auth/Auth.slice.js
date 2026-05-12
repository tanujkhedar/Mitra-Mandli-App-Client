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
    pending: false,
    getPending: true
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.getPending = true;
      })

      .addCase(getUser.fulfilled, (state, action) => {
        state.getPending = false;
        state.user = action.payload.data;
        state.isAuth = true;
      })

      .addCase(getUser.rejected, (state, action) => {
        state.getPending = false;
        state.user = null;
        state.isAuth = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.pending = true;
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
      })
      .addCase(registerUser.pending, (state) => {
        state.pending = true;
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
      })

      .addCase(logout.pending, (state) => {
        state.pending = true;
      })

      .addCase(logout.fulfilled, (state) => {
        state.pending = false;
        state.user = null;
        state.isAuth = false;
      })

      .addCase(logout.rejected, (state, action) => {
        state.pending = false;
      })

      .addCase(updateAvtar.pending, (state) => {
        state.pending = true;
      })

      .addCase(updateAvtar.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(updateAvtar.rejected, (state, action) => {
        state.pending = false;
      })

      .addCase(updateEmail.pending, (state) => {
        state.pending = true;
      })

      .addCase(updateEmail.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(updateEmail.rejected, (state, action) => {
        state.pending = false;
      })

      .addCase(updatePassword.pending, (state) => {
        state.pending = true;
      })

      .addCase(updatePassword.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(updatePassword.rejected, (state, action) => {
        state.pending = false;
      })

      .addCase(updateUsername.pending, (state) => {
        state.pending = true;
      })

      .addCase(updateUsername.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(updateUsername.rejected, (state, action) => {
        state.pending = false;
      })

      .addCase(updateCommonDetails.pending, (state) => {
        state.pending = true;
      })

      .addCase(updateCommonDetails.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(updateCommonDetails.rejected, (state, action) => {
        state.pending = false;
      })

      .addCase(deleteAccount.pending, (state) => {
        state.pending = true;
      })

      .addCase(deleteAccount.fulfilled, (state) => {
        state.pending = false;
        state.user = null;
        state.isAuth = false;
      })

      .addCase(deleteAccount.rejected, (state, action) => {
        state.pending = false;
      })

      .addCase(deleteAvatar.pending, (state) => {
        state.pending = true;
      })

      .addCase(deleteAvatar.fulfilled, (state, action) => {
        state.pending = false;
        state.user = action.payload.data;
      })

      .addCase(deleteAvatar.rejected, (state, action) => {
        state.pending = false;
      })
  }
});

export default AuthSlice.reducer