import { createSlice } from "@reduxjs/toolkit";
const initialsState = [
  { id: 1, value: 0 },
  { id: 2, value: 0 },
];

const countersSlice = createSlice({
  name: "counter",
  initialsState,
  reducers: {
    increment: (state, action) => {
      const index = state.findIndex((counter) => counter.id === action.payload);
      state[index].value++;
    },
    decrement: (state, action) => {
      const index = state.findIndex((counter) => counter.id === action.payload);
      state[index].value--;
    },
  },
});

export const { increment, decrement } = countersSlice.actions;
export default countersSlice.reducer;
