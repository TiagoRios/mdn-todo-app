import React from 'react';
import { useSelector } from 'react-redux';

import FILTER_MAP from '../util/filterMap';
import Todo from '../components/Todo';

// chamaria o filter do store
function TodoList({ filter }) {
  const tasks = useSelector((myStateStore) => myStateStore.tarefas);

  return (
    <ul
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading"
    >
      { tasks
        .filter(FILTER_MAP[filter])
        .map((task) => (
          <Todo
            key={task.id}
            task={task}
          />
        )) }
    </ul>
  );
}

export default TodoList;
