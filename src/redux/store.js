import { configureStore } from '@reduxjs/toolkit';
import tarefaReducer from './tarefaSlice';

export default configureStore({
  reducer: {
    tarefas: tarefaReducer,
  },
});
