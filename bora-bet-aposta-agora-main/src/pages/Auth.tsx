import React, { useState } from "react";
import http from "../lib/http";
import { useNavigate } from "react-router-dom";

export default function Auth(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  async function handleSubmit(e: React.FormEvent){
    e.preventDefault();
    try {
      const data = await http.request("/auth/login", "POST", { email, password }, false);
      localStorage.setItem("token", data.token);
      nav("/dashboard");
    } catch(err){
      alert(err?.data?.message || "Erro ao logar");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={email} onChange={e=>setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e=>setPassword(e.target.value)} />
      <button type="submit">Entrar</button>
    </form>
  );
}
