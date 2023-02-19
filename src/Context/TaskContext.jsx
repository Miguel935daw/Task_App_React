import { createContext, useState, useEffect } from "react";
import supabase from "../supabase/client";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error, data } = await supabase
      .from("tasks")
      .select()
      .eq("user_id", user.id);
    if (data == undefined) {
      setTasks([
        {
          name: "Primera",
          desription: "asdasdasdasdasdasd",
          user_id: "b99cba2e-1ac3-4e4d-800c-e265b14af245",
        },
      ]);
    } else {
      setTasks(data);
    }
  };

  const createTask = async (taskName, taskDescription) => {
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error, data } = await supabase
        .from("tasks")
        .insert({
          name: taskName,
          description: taskDescription,
          user_id: user.id,
        })
        .select();

      setTasks([...tasks, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (taskId) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error, data } = await supabase
      .from("tasks")
      .delete()
      .eq("user_id", user.id)
      .eq("id", taskId);
    if (error) throw error;

    setTasks(tasks.filter((task) => task.id != taskId));
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        deleteTask,
        createTask,
        getTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}

export default TaskContext;
