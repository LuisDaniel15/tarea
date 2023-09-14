import React from 'react'
import { useState } from 'react'

function TaskForm({ createTask }) {
    const [title, setnuevo] = useState("")
    const [descr, setDescr] = useState("")

    const clk = (e) => {
        e.preventDefault();
        createTask(title, descr);
        setDescr("");
        setnuevo("");
    }
    return (
        <div className='bg-slate-400 max-w-md mx-auto rounded-md p-4' >
            <form onSubmit={clk}>
                <input autoFocus type="text" placeholder='Titulo de tu tarea'
                    onChange={(e) => { setnuevo(e.target.value) }}
                    value={title}
                    required
                    className='w-full bg-slate-500 rounded-md py-2 mb-1 px-2'
                />
                <textarea cols="10" rows="2"
                    onChange={(e) => {
                        setDescr(e.target.value)
                    }}
                    value={descr}
                    required
                    className='w-full bg-slate-500 rounded-md py-2 px-2'
                    placeholder='Descripcion'>

                </textarea>

                <div className='flex justify-center items-center w-auto h-14'>
                    <button
                        className='bg-red-700 px-2 rounded-md border-2 text-gray-100 h-8'
                    >Guarda</button>
                </div>

            </form>
        </div>
    )
}

export default TaskForm