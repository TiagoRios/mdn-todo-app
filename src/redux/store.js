import { configureStore } from '@reduxjs/toolkit';

import filtroReducer from './filtroSlice';
import tarefaReducer from './tarefaSlice';

export default configureStore({
  reducer: {
    filtro: filtroReducer,
    tarefas: tarefaReducer,
  },
});
