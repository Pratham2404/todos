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

  const handleDelete = async (taskID) =>{
    try {
      if(window.confirm("Are you sure to delete this??")){
        await fetch(`http://localhost:8000/api/deleteTask/${taskID}`,
              {
                method:'DELETE',
                headers : {
                  'content-Type': 'application/json'
              }
              })
            }
          console.log("Successfully deleted");
          const response = await axios.get('http://localhost:8000/api/getAllTasks'); 
          setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
    
  }

  const handleStart = async (taskID) =>{
    try {
      await fetch(`http://localhost:8000/api//startTask/${taskID}`,
      {
        method : 'PUT',
        headers : {
          'content-Type':'application/json'
        }
      })
          const response = await axios.get('http://localhost:8000/api/getAllTasks'); 
          setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleEnd = async (taskID) =>{
    try {
      await fetch(`http://localhost:8000/api//endTask/${taskID}`,
      {
        method : 'PUT',
        headers : {
          'content-Type':'application/json'
        }
      })
          const response = await axios.get('http://localhost:8000/api/getAllTasks'); 
          setTasks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h2>Task List</h2>
      <ul className='bullet'>
      
        {tasks.map((task) => (
          <li  key={task.id}>
          <div className='task'>
            <strong>Title:{task.title}</strong>
            <span>ID: {task.id}</span>
            <span>Content:{task.content}</span>
            <span>Status: {task.currStatus}</span>
            <span>Start Date: {task.startDate}</span>
            <span>End Date: {task.endDate}</span>
            
            <div className='btn-1'>
            <button className='btn-2' style={{background:'lightblue', appearance:'primary'}}>Edit task</button>
            <button className='btn-2' style={{background:'red', appearance:'primary'}} onClick={()=> handleDelete(task.id)}>Delete task</button>
            <button className='btn-2' style={{background:'yellow', appearance:'primary'}} onClick={()=> handleStart(task.id)}>Start task</button>
            <button className='btn-2' style={{background:'green', appearance:'primary'}} onClick={()=> handleEnd(task.id)}>End task</button>
            </div>
            </div>
          </li>
        ))}
       
      </ul>
    </div>
  );
};

export default TaskList;
