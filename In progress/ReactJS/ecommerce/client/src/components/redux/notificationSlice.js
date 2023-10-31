import { createSlice } from '@reduxjs/toolkit';

export const notificationSlice = createSlice({
    name: "notification",
    initialState: {
        notificationCount: 89
    },
    reducers: {
        addNotification: (state, actions) => {
            state.push(actions.payload)
        },
        removeNotification: (state) => {
            state.notificationCount -= 1;
        },
        incrementByAmount: (state, action) => {
          state.value += action.payload
        }
        // },
        // checkNotification : (state, actions) => {
        //     state.map((e) => {
        //         if(e.notificationCount === actions.payload) {
        //             return e.notificationCount = !e.notificationCount
        //         }
        //     })
        // }
    }
});

export const { addNotification, removeNotification, incrementByAmount } = notificationSlice.actions;
export default notificationSlice.reducer;