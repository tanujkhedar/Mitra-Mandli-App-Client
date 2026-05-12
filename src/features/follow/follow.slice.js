import { createSlice } from "@reduxjs/toolkit";
import { isFollowingByCurrentUser } from "./isFollowingByCurrentUser.api";
import { updateFollow } from "./updateFollow.api";

export const followSlice = createSlice({
    name: 'follow',
    initialState : {
        authUser: {
            follower: [],
            following: []
        },
        searchedUser: {
            follower: [],
            following: []
        },
        isFollow: [],
        loading: false
    },
    reducers: {},
    // extraReducers: (builder) => {
    //     builder
    //     .addCase(isFollowingByCurrentUser.pending, (state) => {
    //         state.loading = true
    //     })
    //     .addCase(isFollowingByCurrentUser.fulfilled, (state, action) => {
    //         state.loading = false
    //         state.isFollow = action.payload?.data;
    //     })
    //     .addCase(isFollowingByCurrentUser.rejected, (state) => {
    //         state.loading = false
    //     })
    //     .addCase(updateFollow.pending, (state) => {
    //         state.loading = true
    //     })
    //     .addCase(updateFollow.fulfilled, (state, action) => {
    //         state.loading = false
    //         state.isFollow = action.payload?.data;
    //     })
    //     .addCase(updateFollow.rejected, (state) => {
    //         state.loading = false
    //     })
        
    // }
});

export default followSlice.reducer;