import React from 'react';
import { useDispatch } from 'react-redux';

import { toggleFiltro } from '../redux/filtroSlice';

function FilterButton({ isPressed, name }) {
  const myDispatch = useDispatch();

  return (
    <button
      aria-pressed={isPressed}
      className="btn toggle-btn"
      onClick={() => myDispatch(toggleFiltro({ name }))}
      type="button"
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
