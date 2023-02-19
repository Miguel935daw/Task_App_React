import { useState, useEffect } from "react";
import Login from "./Components/Login";
import Register from "./Components/Register"
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import supabase from "./supabase/client";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log(session);
      if (!session) {
        navigate("/Task_App_React/Login");
      } else {
        navigate("/Task_App_React");
      }
    });
  }, []);

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <Routes>
          <Route path="/Task_App_React" element={<Home />}></Route>
          <Route path="/Task_App_React/Register" element={<Register />}></Route>
          <Route path="/Task_App_React/Login" element={<Login />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
