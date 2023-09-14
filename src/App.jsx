import React from 'react'
import { TaskList } from './taskList'
import TaskForm from './TaskForm';
import { tareas } from './task'
import { useState, useEffect } from 'react';

function App() {

  const [task, settask] = useState([]);

  useEffect(() => {
    settask(tareas)
  }, []);

  function createTas(title,descr){
    if(title == "" || descr == "") {
      return alert("Ambos campos son requeridos");
    }
    settask([...task, {
      id:task.length + 1 ,
      title: title,
      description: descr
    } ])
  }

  function eliminarTask(Id){
      settask(task.filter(task => task.id !== Id))
    }

  return (
    <main className='bg-gray-300 h-screen'>
      <TaskForm createTask={createTas}/>
      <TaskList eliminarTask={eliminarTask} task={task}/>
    </main>
  )
}

export default App
