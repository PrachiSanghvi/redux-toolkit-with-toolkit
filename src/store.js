import { configureStore } from "@reduxjs/toolkit";
import { todoSlice } from "./features/todo/todoSliceReducer.js";
import themeSlices from "./features/todo/todoSliceReducer.js";


const store = configureStore({
  reducer: {
    todo: todoSlice,
    theme: themeSlices
  },
});

export default store;