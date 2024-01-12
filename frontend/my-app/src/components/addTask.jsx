import React, { useState } from 'react';
import axios from 'axios';
import './addTask.css'
import TaskList from './getTasks';

const AddTask = () => {
  const [taskData, setTaskData] = useState({
    id: '',
    title: '',
    content: '',
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData({
      ...taskData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/addTask', taskData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error adding task. Please try again.');
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className='form'>
        <label className='id'>
          ID:
          <input type="number" name="id" value={taskData.id} onChange={handleChange} required />
        </label>
        <br />
        <label className='title'>
          Title:
          <input type="text" name="title" value={taskData.title} onChange={handleChange} required />
        </label>
        <br />
        <label className='content'>
          Content:
          <textarea name="content" value={taskData.content} onChange={handleChange} required />
        </label>
        <br />
      </form>
      <button  className= 'btn' type="submit">Add Task</button>
      {message && <p>{message}</p>}
      <TaskList/>
    </div>
  );
};

export default AddTask;



// import React, { useState } from 'react';
// import { useNavigate } from "react-router-dom";



// const AddTask = ({ onAddTask }) => {
//   const [title, setTitle] = useState('');
//   const [content, setContent] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onAddTask({ title, content });
//     setTitle('');
//     setContent('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="title">Title:</label>
//       <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
//       <label htmlFor="content">Content:</label>
//       <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} required></textarea>
//       <button type="submit">Add Task</button>
//     </form>
//   );
// };

// export default AddTask;