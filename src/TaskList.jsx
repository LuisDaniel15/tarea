
export function TaskList({ task, eliminarTask }) {

    if (task.length == 0) {
        return <h1 className="text-4xl text-center text-white pt-6">Agrega una tarea</h1>
    }
    return (
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 p-4 gap-2 items-center w-auto m-auto md:w-[800px] lg:w-[1000px] xl:w-[1300px]">
            {task.map((task) => (
                <div key={task.id} className="bg-gray-800 rounded-lg p-1 w-[300px] m-auto mb-8">
                    <h1 className="text-3xl pb-2 text-white">{task.title}</h1>
                    <h3 className="text-white">{task.description}</h3>
                    <button className="hover:bg-red-400 bg-red-600 rounded-md p-1 mt-3"
                        onClick={() => { eliminarTask(task.id) }}
                    >Eliminar</button>
                </div>

            ))}
        </div>
    )
}
