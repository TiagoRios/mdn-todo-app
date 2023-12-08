import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const todoSlice = createSlice({
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

    deletarTarefa: (state, action) => state.filter((todo) => todo.id !== action.payload.id),

    editTarefa: (state, action) => {
      const editedTarefa = state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, name: action.payload.name };
        }

        return todo;
      });

      return editedTarefa;
    },

    // function editTask(id, newName) {
    //   const editedTaskList = taskList.map((task) => {
    //     if (id === task.id) {
    //       return { ...task, name: newName };
    //     }

    //     return task;
    //   });

    //   setTaskList(editedTaskList);
    // }

    toggleTarefaCompleta: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload.id);
      // eslint-disable-next-line no-param-reassign
      state[index].completed = action.payload.completed;
    },
  },
});

export const {
  addTarefa,
  deletarTarefa,
  editTarefa,
  toggleTarefaCompleta,
} = todoSlice.actions;

export default todoSlice.reducer;
