import { FILTER_MAP } from "../util/filterMap";

export default function HeadingTasks({ tasks, filter, listHeadingRef }) {

    const taskList = tasks.filter(FILTER_MAP[filter])
    const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
    const headingText = `${taskList.length} ${tasksNoun} remaining`;

    return (
        <h2 id="list-heading" tabIndex="-1" ref={listHeadingRef}>
            {headingText}
        </h2>
    )
}