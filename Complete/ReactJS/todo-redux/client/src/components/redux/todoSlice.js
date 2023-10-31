import React from 'react';
import { createSlice } from '@reduxjs/toolkit';

export const todoSlice = createSlice({
    name: "todo",
    initialState: [
        {
            id: 1,
            title: 'First take',
            completed: false
        },{
            id: 2,
            title: "Second task",
            completed: false
        }],
    reducers: {
        addTodo : (state, actions) => {
            state.push(actions.payload)
        }, 
        removeTodo : (state, actions) => {
            return state.filter((el) =>{
                return el.id !== actions.payload
            })
        },
        toggleVerified: (state, actions) => {
            state.completed = !state.completed
        },
        checkTodo : (state, actions) => {
            state.map((e) => {
                if(e.id === actions.payload) {
                    return e.completed = !e.completed
                }
            })
        }
    }

});

export const { addTodo, removeTodo, toggleVerified, checkTodo } = todoSlice.actions;
export default todoSlice.reducer;
