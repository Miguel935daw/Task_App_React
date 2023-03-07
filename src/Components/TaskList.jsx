import TaskCard from "./TaskCard";
import { useContext, useEffect } from "react";
import { TaskContext } from "../Context/TaskContext";

function TaskList(done = false) {
  const { tasks, getTasks } = useContext(TaskContext);

  useEffect(() =>{
    getTasks(done)
  },[done])

  if (tasks.length === 0) {
    return <h1 className="text-white text-4xl font-bold text-center">No hay tareas aún</h1>;
  }

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
