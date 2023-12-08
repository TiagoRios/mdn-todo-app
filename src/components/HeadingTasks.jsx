import React from 'react';
import { useSelector } from 'react-redux';

import FILTER_MAP from '../util/filterMap';

function HeadingTasks({ listHeadingRef }) {
  const filtro = useSelector((state) => state.filtro.name);
  const tarefas = useSelector((state) => state.tarefas);

  const tarefasFiltradas = tarefas.filter(FILTER_MAP[filtro]);
  const tasksNoun = tarefasFiltradas.length !== 1 ? 'tasks' : 'task';
  const headingText = `${tarefasFiltradas.length} ${tasksNoun} remaining`;

  return (
    <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
      {headingText}
    </h2>
  );
}

export default HeadingTasks;
