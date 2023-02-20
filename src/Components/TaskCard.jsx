import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskCard({ task }) {
  const { deleteTask } = useContext(TaskContext);
  return (
    <div className="bg-gray-800 text-blue-400 p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{task.name}</h1>
      <p className="text-white text-lg">{task.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-300 text-white"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
    </div>
  );
}

export default TaskCard;
