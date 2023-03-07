import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useEffect, useState } from "react";
import supabase from "../supabase/client";

function Home() {
  const [showTaskDone, setShowTaskDone] = useState(false);
  return (
    <>
      <div className="w-fit mx-auto">
        <button
          className="bg-red-400 text-white rounded px-3 py-1 mb-2 mr-2 place-self-center"
          onClick={() => supabase.auth.signOut()}
        >
          {" "}
          Cerrar Sesion
        </button>
        <button
          className="bg-green-700 text-white rounded px-3 py-1 mb-2 place-self-center"
          onClick={() => setShowTaskDone(!showTaskDone)}
        >
          {" "}
          {showTaskDone ? "Tareas sin hacer" : "Tareas Hechas"}
        </button>
      </div>
      <TaskForm />
      <TaskList done={showTaskDone} />
    </>
  );
}

export default Home;
