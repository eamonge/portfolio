import { configureStore } from '@reduxjs/toolkit';
import completionReducer from './completion';
import todoReducer from './todoSlice';

export default configureStore({
    reducer: {
        completion: completionReducer,
        todo: todoReducer
    }
})