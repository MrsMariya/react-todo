import React from 'react'

export const PostList = ({
  tasks,
  completeTask,
  deleteTask,
}) => { tasks.sort((a, b) => a.completed - b.completed);
  return (
    <div>
      {tasks.map(({ label, completed, id }) => (
        <div key={id} className={`task ${completed && 'task--completed'}`}>
          <button
            className="task__complete-button"
            onClick={() => completeTask(id)}
          />
          <p className="task__label">{label}</p>
          <button
            className="task__delete-button"
            onClick={() => deleteTask(id)}
          >
            🗑️
          </button>
        </div>
      ))}
    </div>
  );
}
