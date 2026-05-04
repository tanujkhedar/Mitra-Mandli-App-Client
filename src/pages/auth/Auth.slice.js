import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name : "auth",
  initialState : {
    user : null,
    isAuth : false
  },
  reducers : {
    logout : (state) => {
      state.user = null;
      state.isAuth = false;
    },
    login : (state, action) => {}
  }
})