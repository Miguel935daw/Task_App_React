import { useState, useContext } from "react";
import { TaskContext } from "../Context/TaskContext";
import supabase from "../supabase/client";
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createTask } = useContext(TaskContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="w-fit mx-auto">
        <button
          className="bg-red-400 text-white rounded px-3 py-1 mb-2 place-self-center"
          onClick={() => supabase.auth.signOut()}
        >
          {" "}
          Cerrar Sesion
        </button>
      </div>

      <form onSubmit={handleSubmit} className="bg-blue-300 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu Tarea</h1>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
          placeholder="Escribe el título de la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          required
          className="bg-slate-300 p-3 w-full mb-2"
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />
        <button className="bg-indigo-500 px-3 py-1 text-white rounded mr-2">
          Guardar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
