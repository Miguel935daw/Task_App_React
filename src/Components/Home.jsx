import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useEffect } from "react";
import supabase from "../supabase/client";

function Home() {

    return (
      <>
        <TaskForm />
        <TaskList />
        <button className="bg-red-400" onClick={() => supabase.auth.signOut()}>
          {" "}
          Cerrar Sesion
        </button>
      </>
    );
  }


export default Home;
