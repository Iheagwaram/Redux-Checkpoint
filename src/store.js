import { configureStore, createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    addTask: (state, action) => {
      state.push({ id: Date.now(), description: action.payload, isDone: false });
    },
    toggleTask: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) task.isDone = !task.isDone;
    },
    editTask: (state, action) => {
      const task = state.find(task => task.id === action.payload.id);
      if (task) task.description = action.payload.description;
    }
  }
});

export const { addTask, toggleTask, editTask } = tasksSlice.actions;
export const store = configureStore({ reducer: { tasks: tasksSlice.reducer } });