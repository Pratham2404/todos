import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './getTasks.css'

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch the list of tasks when the component mounts
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/getAllTasks'); 
        setTasks(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []); // Empty dependency array ensures that the effect runs only once when the component mounts

  return (
    <div>
      <h2>Task List</h2>
      <ul>
      
        {tasks.map((task) => (
          <li  key={task.id}>
          <div className='task'>
            <strong>title:{task.title}</strong>
            <span>content:{task.content}</span>
            <span>Status: {task.currStatus}</span>
            <span>Start Date: {task.startDate}</span>
            <span>End Date: {task.endDate}</span>
            
            <div className='btn-1'>
            <button className='btn-2'>Edit task</button>
            <button className='btn-2'>Delete task</button>
            <button className='btn-2'>Start task</button>
            <button className='btn-2'>End task</button>
            </div>
            </div>
          </li>
        ))}
       
      </ul>
    </div>
  );
};

export default TaskList;
