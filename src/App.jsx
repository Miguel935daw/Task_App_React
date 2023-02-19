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
        navigate("/PruebaReact/Login");
      } else {
        navigate("/PruebaReact");
      }
    });
  }, []);

  return (
    <main className="bg-zinc-900 h-screen">
      <div className="container mx-auto p-10">
        <Routes>
          <Route path="/PruebaReact" element={<Home />}></Route>
          <Route path="/PruebaReact/Register" element={<Register />}></Route>
          <Route path="/PruebaReact/Login" element={<Login />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
