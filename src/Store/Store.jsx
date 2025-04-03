import { configureStore } from "@reduxjs/toolkit";
import toDoReducer from "../Components /createSlice";

export const store = configureStore({
  reducer: {
    toDo: toDoReducer,
  },
});

export default store;
