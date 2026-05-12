import { createSlice } from '@reduxjs/toolkit';
import { createPost } from './createPost.api.js';
import { getCurrentUserAllPost } from './getCurrentUserAllPost.api.js';
import toast from 'react-hot-toast';
import { getSearchedUserAllPost } from './getSearchedUserAllPost.api.js';
import { getFeedPost } from './getFeedPost.api.js';
import { getFeedReels } from './getFeedReels.api.js';
import { getCurrentUserSevedPost } from './getCurrentUserSevedPost.api.js';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        authPost: {
            post: [],
            savedPost : []
        },
        feedPost: [],
        feedReels: [],
        userPost: [],
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false;
                toast.success(action.payload.message);
            })
            .addCase(createPost.rejected, (state, action) => {
                state.loading = false;
                toast.error(action.payload?.message || 'Failed to create post');
            })
            .addCase(getCurrentUserAllPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCurrentUserAllPost.fulfilled, (state, action) => {
                state.loading = false;
                toast.success(action.payload?.message || 'Posts retrieved successfully');
                state.authPost.post = action.payload.data;
            })
            .addCase(getCurrentUserAllPost.rejected, (state, action) => {
                state.loading = false;
                toast.error(action.payload?.message || 'Failed to get user posts');
            })
            .addCase(getCurrentUserSevedPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(getCurrentUserSevedPost.fulfilled, (state, action) => {
                state.loading = false;
                toast.success(action.payload?.message || 'Posts retrieved successfully');
                state.authPost.savedPost = action.payload.data;
            })
            .addCase(getCurrentUserSevedPost.rejected, (state, action) => {
                state.loading = false;
                toast.error(action.payload?.message || 'Failed to get user saved posts');
            })
            .addCase(getSearchedUserAllPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(getSearchedUserAllPost.fulfilled, (state, action) => {
                state.loading = false;
                toast.success(action.payload?.message || 'Posts retrieved successfully');
                state.userPost = action.payload.data;
            })
            .addCase(getSearchedUserAllPost.rejected, (state, action) => {
                state.loading = false;
                toast.error(action.payload?.message || 'Failed to get user posts');
            })
            .addCase(getFeedPost.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFeedPost.fulfilled, (state, action) => {
                state.loading = false;
                toast.success(action.payload?.message || 'Posts retrieved successfully');
                state.feedPost = action.payload.data;
            })
            .addCase(getFeedPost.rejected, (state, action) => {
                state.loading = false;
                toast.error(action.payload?.message || 'Failed to get user posts');
            })
            .addCase(getFeedReels.pending, (state) => {
                state.loading = true;
            })
            .addCase(getFeedReels.fulfilled, (state, action) => {
                state.loading = false;
                toast.success(action.payload?.message || 'Posts retrieved successfully');
                state.feedReels = action.payload.data;
            })
            .addCase(getFeedReels.rejected, (state, action) => {
                state.loading = false;
                toast.error(action.payload?.message || 'Failed to get user posts');
            })
    }
});

export default postSlice.reducer;