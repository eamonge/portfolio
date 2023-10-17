import { createSlice } from '@reduxjs/toolkit';

export const completionSlice = createSlice({
    name: "completion",
    initialState:
    [
        {
            id: 1,
            title: "A",
            completed: false
        },
        {
            id: 2,
            title: "B",
            completed: false
        },
        {
            id: 3,
            title: "C",
            completed: false
        }
    ],
    reducers: {
        toggleVerified: (state) => {
            state.completed = !state.completed
        }, 
        removeTodo : (state, actions) => {
            return state.filter((el) =>{
                return el.id !== actions.payload
            })
        }
    }

});

export const { isTrue, isFalse, toggleVerified, removeTodo } = completionSlice.actions;

export default completionSlice.reducer;