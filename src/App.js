import { useState } from 'react';
import { PostForm } from './components/postForm';
import { PostList } from './components/postList';



 
  
  export default function App() {
       
    const uniqueId = () => Math.floor(Math.random() * Date.now());
    const [tasks, setTasks] = useState([]);
  
    const completeTask = (taskId) => {
      const updatedTasks = tasks.map((task) => {
        const completed = !task.completed;
        return task.id === taskId ? { ...task, completed } : task;
      });
      setTasks(updatedTasks);
    };
  
    const deleteTask = (taskId) => {
      setTasks(tasks.filter(({ id }) => taskId !== id));
    };
  
    const newTask = (label) => {
      const newTask = {
        id: uniqueId(),
        completed: false,
        label,
      };
      setTasks([...tasks, newTask]);
    };
  
    return (
      <div className="container">
        <PostForm newTask={newTask} />
        <PostList
          tasks={tasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </div>
    );
  }



