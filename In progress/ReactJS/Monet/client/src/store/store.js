import { configureStore } from '@reduxjs/toolkit';
import statusReducer from '../features/statusSlice';

export const store = configureStore({
    reducer: {
        status: statusReducer
    }
});