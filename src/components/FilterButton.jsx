import React from 'react';

function FilterButton({ isPressed, name, setFilter }) {
  return (
    <button
      aria-pressed={isPressed}
      className="btn toggle-btn"
      onClick={() => setFilter(name)}
      type="button"
    >
      <span className="visually-hidden">Show </span>
      <span>{name}</span>
      <span className="visually-hidden"> tasks</span>
    </button>
  );
}

export default FilterButton;
