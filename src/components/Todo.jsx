import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import usePrevious from '../hooks/customHooks';

import {
  deletarTarefa,
  editTarefa,
  toggleTarefaCompleta,
} from '../redux/todoSlice';

function Todo({ task }) {
  const myDispatch = useDispatch();
  const [newName, setNewName] = useState('');
  const [isEditing, setEditing] = useState(false);

  const editButtonRef = useRef(null);
  const editFieldRef = useRef(null);

  const wasEditing = usePrevious(isEditing);

  useEffect(() => {
    if (!wasEditing && isEditing) {
      editFieldRef.current.focus();
    } else if (wasEditing && !isEditing) {
      editButtonRef.current.focus();
    }
  }, [wasEditing, isEditing]);

  function handleChange(e) {
    setNewName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (!newName.trim()) {
      return;
    }

    myDispatch(editTarefa({ id: task.id, name: newName }));

    setNewName('');
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={task.id}>
          New name for
          {' '}
          {task.name}
        </label>

        <input
          className="todo-text"
          id={task.id}
          onChange={handleChange}
          ref={editFieldRef}
          type="text"
          value={newName}
        />
      </div>

      <div className="btn-group">
        <button
          className="btn todo-cancel"
          onClick={() => setEditing(false)}
          type="button"
        >
          Cancel
          <span className="visually-hidden">
            renaming
            {' '}
            {task.name}
          </span>
        </button>

        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">
            new name for
            {' '}
            {task.name}
          </span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          defaultChecked={task.completed}
          id={task.id}
          onChange={() => myDispatch(toggleTarefaCompleta(
            { id: task.id, completed: !task.completed },
          ))}
          type="checkbox"
        />
        <label className="todo-label" htmlFor={task.id}>
          {task.name}
        </label>
      </div>
      <div className="btn-group">
        <button
          className="btn"
          onClick={() => setEditing(true)}
          ref={editButtonRef}
          type="button"
        >
          Edit
          {' '}
          <span className="visually-hidden">{task.name}</span>
        </button>

        <button
          type="button"
          className="btn btn__danger"
          onClick={() => myDispatch(deletarTarefa({ id: task.id }))}
        >
          Delete
          {' '}
          <span className="visually-hidden">{task.name}</span>
        </button>
      </div>
    </div>
  );

  return (
    <li className="todo">
      { isEditing ? editingTemplate : viewTemplate }
    </li>
  );
}

export default Todo;
