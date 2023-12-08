/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import FilterButtonList from './containers/FilterButtonList';
import Form from './containers/Form';
import HeadingTasks from './components/HeadingTasks';
import TodoList from './containers/TodoList';
import usePrevious from './hooks/customHooks';

function App() {
  const taskList = useSelector((state) => state.tarefas);
  const [filter, setFilter] = useState('All');

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(taskList.length);

  useEffect(() => {
    if (taskList.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [taskList.length, prevTaskLength]);

  return (
    <div className="todoapp stack-large">
      <Form />

      <FilterButtonList
        filter={filter}
        setFilter={setFilter}
      />

      <HeadingTasks
        filter={filter}
        listHeadingRef={listHeadingRef}
      />

      <TodoList
        filter={filter}
      />

    </div>
  );
}

export default App;
