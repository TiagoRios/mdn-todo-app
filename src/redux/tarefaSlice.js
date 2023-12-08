import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const tarefaSlice = createSlice({
  name: 'tarefas',

  initialState: [
    { id: `tarefa-${nanoid()}`, name: 'Eat', completed: true },
    { id: `tarefa-${nanoid()}`, name: 'Sleep', completed: false },
    { id: `tarefa-${nanoid()}`, name: 'Repeat', completed: false },
  ],

  reducers: {
    addTarefa: (state, action) => {
      const todo = {
        id: `tarefa-${nanoid()}`,
        name: action.payload.name,
        completed: false,
      };

      state.push(todo);
    },

    deleteTarefa: (state, action) => state.filter((todo) => todo.id !== action.payload.id),

    editTarefa: (state, action) => {
      const editedTarefa = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        }

        return todo;
      });

      return editedTarefa;
    },

    toggleTarefaCompleta: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      const a = { ...state[index], completed: action.payload.completed };
      state.splice(index, 1, a);
    },
  },
});

export const {
  addTarefa,
  deleteTarefa,
  editTarefa,
  toggleTarefaCompleta,
} = tarefaSlice.actions;

export default tarefaSlice.reducer;
