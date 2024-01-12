import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddTask from "./components/addTask";


function App() {
  return (
    <>
    
    <div className="basic"> 
    
      <h1>Todo Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddTask/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
    </>
  );
}

export default App;
