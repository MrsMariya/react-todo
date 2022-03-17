import React from 'react';

export const PostList = ({
  tasks,
  completeTask,
  deleteTask,
  setUpdate,
}) => { tasks.sort((a, b) => a.completed - b.completed);
 
   return (
    <div>
      {tasks.map(({ label, completed, id }) => (
        <div key={id} className={`task ${completed && 'task--completed'}`}>
          <button
            className="task__complete-button"
            onClick={() => completeTask(id)}
          />
          <p className="task__label">
            <input className="task__input"  key={id} type={"text"} value={label} onChange={e=> setUpdate(e.target.value, id)} />
            
          </p>
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
