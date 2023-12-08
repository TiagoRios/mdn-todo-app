import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addTarefa } from '../redux/todoSlice';

function Form() {
  const [name, setName] = useState('');
  const myDispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    if (!name.trim()) {
      return;
    }

    myDispatch(addTarefa({ name }));
    setName('');
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <span className="label__lg" htmlFor="new-todo-input">
          What needs to be done?
        </span>
      </h2>

      <input
        autoComplete="off"
        className="input input__lg"
        id="new-todo-input"
        name="new-todo-input"
        onChange={handleChange}
        type="text"
        value={name}
      />

      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
