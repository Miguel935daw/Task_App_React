import { useNavigate } from "react-router-dom";

function Confirmation() {
  const navigate = useNavigate();
  <div className="max-w-md mx-auto">
    <h1>Has sido registrado con éxito, puedes volver al inicio de sesión.</h1>
    <button
      className="bg-indigo-500 px-3 py-1 text-white mr-1 rounded m-2"
      onClick={() => navigate("/Task_App_React/Login")}
    >
      Volver a Iniciar Sesión
    </button>
  </div>;
}
export default Confirmation;
