import { createSlice } from '@reduxjs/toolkit';

const filtroSlice = createSlice({
  name: 'filtro',

  initialState: {
    name: 'All',
  },

  reducers: {
    toggleFiltro: (state, action) => ({ ...state, name: action.payload.name }),
  },
});

export const { toggleFiltro } = filtroSlice.actions;

export default filtroSlice.reducer;
