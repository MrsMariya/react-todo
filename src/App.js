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

  const setUpdate=(label, taskId)=>{
  const setUp = tasks.map((task)=> task.id===taskId ? { ...task, label } : task )
  setTasks(setUp)
  }
      
    return (
      <div className="container">
        <PostForm newTask={newTask} />
        <PostList
          tasks={tasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
          setUpdate={setUpdate}
        />
         <footer>
          <a className='link' href={'https://github.com/MrsMariya'}>MrsMariya</a>
          <h4>2022</h4>
        </footer>
      </div>
    );
  }



