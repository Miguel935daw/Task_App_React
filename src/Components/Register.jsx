import { useEffect, useState } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-blue-300 p-10 mb-4">
        <h1 className="text-2xl font-bold text-white mb-3">Registrarse</h1>
        <label htmlFor="email" className="text-white font-bold">
          Correo Electrónico
        </label>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          type="email"
          name="email"
          placeholder="youremail@site.com"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password" className="text-white font-bold">
          Contraseña
        </label>
        <input
          className="bg-slate-300 p-3 w-full mb-2"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          <button className="bg-indigo-500 px-3 py-1 text-white mr-1 rounded">
            Registrarse
          </button>
          <button
            className="bg-indigo-500 px-3 py-1 text-white mr-1 rounded "
            onClick={() => navigate("/Task_App_React/Login")}
          >
            Volver a Iniciar Sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
