import React, { useEffect, useRef, useState } from 'react';
import { nanoid } from 'nanoid';

import FilterButtonList from './containers/FilterButtonList';
import Form from './containers/Form';
import HeadingTasks from './components/HeadingTasks';
import TodoList from './containers/TodoList';
import usePrevious from './hooks/customHooks';

function App({ tasks }) {
  const [taskList, setTaskList] = useState(tasks);
  const [filter, setFilter] = useState('All');

  const listHeadingRef = useRef(null);
  const prevTaskLength = usePrevious(taskList.length);

  useEffect(() => {
    if (taskList.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [taskList.length, prevTaskLength]);

  function toggleTaskCompleted(id) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setTaskList(updatedTasks);
  }

  function deleteTask(id) {
    const remainingTasks = taskList.filter((task) => id !== task.id);

    setTaskList(remainingTasks);
  }

  function editTask(id, newName) {
    const editedTaskList = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, name: newName };
      }

      return task;
    });

    setTaskList(editedTaskList);
  }

  function addTask(name) {
    const newTask = {
      id: `todo-${nanoid()}`,
      name,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
  }

  return (
    <div className="todoapp stack-large">
      <Form
        addTask={addTask}
      />

      <FilterButtonList
        filter={filter}
        setFilter={setFilter}
      />

      <HeadingTasks
        filter={filter}
        listHeadingRef={listHeadingRef}
        tasks={taskList}
      />

      <TodoList
        deleteTask={deleteTask}
        editTask={editTask}
        filter={filter}
        tasks={taskList}
        toggleTaskCompleted={toggleTaskCompleted}
      />

    </div>
  );
}

export default App;
