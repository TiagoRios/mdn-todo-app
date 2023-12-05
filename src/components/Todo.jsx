import React, { useEffect, useRef, useState } from 'react';

import usePrevious from '../hooks/customHooks';

function Todo({
  completed,
  editTask,
  deleteTask,
  id,
  name,
  toggleTaskCompleted,
}) {
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

    editTask(id, newName);

    setNewName('');
    setEditing(false);
  }

  const editingTemplate = (
    <form className="stack-small" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="todo-label" htmlFor={id}>
          New name for
          {' '}
          {name}
        </label>

        <input
          className="todo-text"
          id={id}
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
            {name}
          </span>
        </button>

        <button type="submit" className="btn btn__primary todo-edit">
          Save
          <span className="visually-hidden">
            new name for
            {' '}
            {name}
          </span>
        </button>
      </div>
    </form>
  );

  const viewTemplate = (
    <div className="stack-small">
      <div className="c-cb">
        <input
          defaultChecked={completed}
          id={id}
          onChange={() => toggleTaskCompleted(id)}
          type="checkbox"
        />
        <label className="todo-label" htmlFor={id}>
          {name}
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
          <span className="visually-hidden">{name}</span>
        </button>

        <button
          type="button"
          className="btn btn__danger"
          onClick={() => deleteTask(id)}
        >
          Delete
          {' '}
          <span className="visually-hidden">{name}</span>
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
