import { useContext } from "react";
import { TaskContext } from "../Context/TaskContext";

function DoneButton(done) {
  const { doneTask, unDoneTask } = useContext(TaskContext);
  if (done.done) {
    return (
      <>
        <button
          className="bg-purple-500 px-2 py-1 rounded-md mt-4 hover:bg-purple-300 text-white"
          onClick={() => unDoneTask(done.id)}
        >
          Deshacer
        </button>
      </>
    );
  }
  return (
    <>
      <button
        className="bg-green-700 px-2 py-1 rounded-md mt-4 hover:bg-green-500 text-white"
        onClick={() => doneTask(done.id)}
      >
        Marcar como Hecha
      </button>
    </>
  );
}
export default DoneButton;
