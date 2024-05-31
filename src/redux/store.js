
import { configureStore } from '@reduxjs/toolkit';
import toDoSlice from './Slice/toDoSlice';

export const store = configureStore({
  reducer: {
    todos: toDoSlice,
  },
});