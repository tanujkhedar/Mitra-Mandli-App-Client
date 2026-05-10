import { createSlice } from '@reduxjs/toolkit';
import { createPost } from './createPost.api.js';
import { getCurrentUserAllPost } from './getCurrentUserAllPost.api.js';

export const postSlice = createSlice({
    name: 'post',
    initialState: {
        posts: null,
        loading: false,
        responseMessage: null,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createPost.pending, (state) => {
                state.loading = true;
                state.responseMessage = null;
                state.error = null;
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.loading = false;
                state.responseMessage = action.payload.message;
                state.posts = action.payload.data;
            })
            .addCase(createPost.rejected, (state, action) => {
                state.loading = false;
                state.responseMessage = null;
                state.error = action.payload?.message || 'Failed to create post';
            })
            .addCase(getCurrentUserAllPost.pending, (state) => {
                state.loading = true;
                state.responseMessage = null;
                state.error = null;
            })
            .addCase(getCurrentUserAllPost.fulfilled, (state, action) => {
                state.loading = false;
                state.responseMessage = action.payload?.message || 'Posts retrieved successfully';
                state.posts = action.payload.data;
            })
            .addCase(getCurrentUserAllPost.rejected, (state, action) => {
                state.loading = false;
                state.responseMessage = null;
                state.error = action.payload?.message || 'Failed to get user posts';
            });
    }
});

export default postSlice.reducer;