import React from "react";
import Todo from "../components/Todo";
import { FILTER_MAP } from "../App";

export default function TaskList({ tasks, filter, toggleTaskCompleted, deleteTask, editTask }) {
    return (
        <ul
            className="todo-list stack-large stack-exception"
            aria-labelledby="list-heading">
            {
                tasks
                    .filter(FILTER_MAP[filter])
                    .map((task) => (
                        <Todo
                            id={task.id}
                            name={task.name}
                            completed={task.completed}
                            key={task.id}
                            toggleTaskCompleted={toggleTaskCompleted}
                            deleteTask={deleteTask}
                            editTask={editTask}
                        />
                    ))
            }
        </ul>
    )
}