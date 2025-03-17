import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  list: [
    { content: "Content1", completed: false },
    { content: "Content2", completed: false },
  ],
  heading: "To Do List",
};

const toDoSlice = createSlice({
  name: "ToDoList", // A slice of state
  initialState,
  reducers: {
    // Add a new item to the list
    addToDo: (state, action) => {
      state.list.push({ content: action.payload, completed: false });
    },

    // Remove an item from the list
    removeToDo: (state, action) => {
      state.list = state.list.filter((item) => item.content !== action.payload);
    },

    // Edit an item in the list
    editToDo: (state, action) => {
      const { index, newValue } = action.payload;
      if (state.list[index] !== undefined) {
        state.list[index].content = newValue;
      }
    },

    // Mark an item as completed
    markedCompleted: (state, action) => {
      const todo = state.list.find((todo) => todo.content === action.payload);

      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addToDo, removeToDo, editToDo, markedCompleted } =
  toDoSlice.actions;
export default toDoSlice.reducer;
