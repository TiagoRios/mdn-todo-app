import React from 'react';

import FILTER_MAP from '../util/filterMap';
import Todo from '../components/Todo';

function TodoList({
  deleteTask,
  editTask,
  filter,
  tasks,
  toggleTaskCompleted,
}) {
  return (
    <ul
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      { tasks
        .filter(FILTER_MAP[filter])
        .map((task) => (
          <Todo
            completed={task.completed}
            deleteTask={deleteTask}
            editTask={editTask}
            id={task.id}
            key={task.id}
            name={task.name}
            toggleTaskCompleted={toggleTaskCompleted}
          />
        )) }
    </ul>
  );
}

export default TodoList;
