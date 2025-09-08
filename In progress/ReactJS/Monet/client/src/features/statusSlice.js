import { createSlice } from '@reduxjs/toolkit';

const LS_STATUS = "status";
const LS_START = "startTime";
const LS_HISTORY = "statusHistory"; // persistance

// Load persisted values
const savedStatus = localStorage.getItem(LS_STATUS) || "";
const savedStart = Number(localStorage.getItem(LS_START)) || null;
const savedHistory = JSON.parse(localStorage.getItem(LS_HISTORY)|| "[]");

const initialState = {
  status: savedStatus,
  startTime: savedStart, // When current status started
  elapsed: 0, // store elapsed time globally,
  history: savedHistory, // Log of { status, startTime, endTime }
};

const statusSlice = createSlice({
  name: "status",
  initialState,
  reducers: {
    setStatus: (state, action) => {
      const now = Date.now();

      if (state.status && state.startTime) {
        state.history.push({
          status: state.status,
          startTime: state.startTime,
          endTime: now
        });
      }

      //Set new status
      state.status = action.payload;
      state.startTime = now;
      state.elapsed = 0;

      //Persist the values
      localStorage.setItem(LS_STATUS, state.status);
      localStorage.setItem(LS_START, state.startTime.toString());
      localStorage.setItem(LS_HISTORY, JSON.stringify(state.history));
    },
    clearStatus: (state) => {
      const now = Date.now();

      //Close current status before clearing
      if(state.status && state.startTime) {
        state.history.push({
          status: state.status,
          startTime: state.startTime,
          endTime: now,
        });
      };

      //Reset state
      state.status = "";
      state.startTime = null;
      state.elapsed = 0;

      //Persist values
      localStorage.removeItem(LS_HISTORY);
      localStorage.removeItem(LS_START);
      // localStorage.removeItem(LS_HISTORY, JSON.stringify(state.history));
      localStorage.removeItem(LS_HISTORY);
    },
    setElapsed: (state, action) => {
      state.elapsed = action.payload;
    },
    resetHistory: (state) => {
      state.history = [];
      localStorage.removeItem(LS_HISTORY);
    }
  },
});

export const { setStatus, setElapsed, clearStatus, resetHistory } = statusSlice.actions;
export default statusSlice.reducer;