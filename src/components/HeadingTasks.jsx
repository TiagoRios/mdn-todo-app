import React from 'react';

import FILTER_MAP from '../util/filterMap';

function HeadingTasks({ filter, listHeadingRef, tasks }) {
  const taskList = tasks.filter(FILTER_MAP[filter]);
  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  return (
    <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
      {headingText}
    </h2>
  );
}

export default HeadingTasks;
