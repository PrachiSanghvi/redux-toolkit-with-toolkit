import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  value: {
    dark: {
      foreground: "#fff",
      background: "#333"
    },
    light: {
      foreground: "#333",
      background: "#f9f5f5"
    },
    activeTheme: "dark"
  }
};

/* The createSlice function automatically generates action creators and
  action types based on the names of the reducer functions you provide */
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state?.tasks?.push({ id: Date.now(), text: action.payload });
    },
    deleteTodo: (state, action) => {
      state.tasks = state?.tasks?.filter((task) => task.id !== action.payload);
    },
  },
});

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state,action) => {
      state.value.activeTheme = action.payload;
    }
  }
})

export const { addTodo, deleteTodo } = todoSlice.actions;
export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;