import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../Features/counters/countersSlice";
const store = configureStore({
  reducer: {
    counter: countersReducer,
  },
});
export default store;
