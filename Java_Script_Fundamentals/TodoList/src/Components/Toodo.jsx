import React, { useState } from 'react';
import './Toodo.css'; 

const Toodo = () => {
  const [tooDo,setTooDo] = useState([])
  const [task , setTask] = useState("")

  const HandleTask = (e) => {
    setTask(e.target.value);
    
  }

  const Submit = (e) => {
    e.preventDefault();
    if (task.trim() !== ''){// tirm to remove whitespaces(tabs , spaces , and newLines) from both the beginningand the end of a string.
    setTooDo([...tooDo, task]);
    setTask('');
    }
    
  };

  const handleDeleteTask = (index) => {_
    const updatedTasks = tooDo.filter((_, i) => i !== index);//_ (underscore) is a common convention used to signify that the first argument is not needed in the current context.

    setTooDo(updatedTasks);
  };

  return (
    <>
    <form onSubmit = {Submit}> 
      <input onChange={HandleTask} type="text" placeholder='Get MERN black belt.' />
      <button type='submit' >Add</button>
    </form>
    <ul>
      {
      tooDo.map((task , index) => {
        return <li key={index}>{task} <button onClick={() =>handleDeleteTask(index)}>DELETE</button></li> 
      })}
    </ul>

    </>
  )




}

export default Toodo;
