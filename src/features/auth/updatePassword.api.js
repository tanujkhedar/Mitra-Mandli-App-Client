import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../app/Api';

export const updatePassword = createAsyncThunk(
    'auth/updatePassword',
    async (data, thunkApi) => {
        try {
            const response = await api.patch('api/v1/user/updatepassword', data);
            return response.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.response?.data || 'Update password failed');
        }
    }
);