import { createContext, useState, useEffect } from "react";
import supabase from "../supabase/client";

export const TaskContext = createContext();

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  const getTasks = async (done) => {
    console.log(done.done)
    const {
      data: { user },
    } = await supabase.auth.getUser();
    const { error, data } = await supabase
      .from("tasks")
      .select()
      .eq("user_id", user.id)
      .eq("done", done.done);
      setTasks(data);
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
          done: false,
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

  const doneTask = async (taskId) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error, data } = await supabase
      .from("tasks")
      .update({done: true})
      .eq("user_id", user.id)
      .eq("id", taskId);
    if (error) throw error;

    setTasks(tasks.filter((task) => task.id != taskId));
  };

  const unDoneTask = async (taskId) => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const { error, data } = await supabase
      .from("tasks")
      .update({done: false})
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
        doneTask,
        unDoneTask,
        getTasks,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );

}
export default TaskContext;
