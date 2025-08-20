import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../features/counter/searchSlice';

export const store = configureStore({
    reducer: {
        search: searchReducer
    }
})