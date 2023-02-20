import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import { useEffect } from "react";
import supabase from "../supabase/client";

function Home() {

    return (
      <>
        <TaskForm />
        <TaskList />
      </>
    );
  }


export default Home;
