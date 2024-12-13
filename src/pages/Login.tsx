import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import { loginUser, registerUser } from "../services/UserService";

const Login = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Nome para o cadastro
  const [isRegister, setIsRegister] = useState(false); // Alterna entre login e cadastro
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = loginUser(username, password);
    if (user) {
      alert(`Bem-vindo, ${user.name}!`);
      navigate("/dashboard");
    } else {
      alert("Usuário ou senha inválidos!");
    }
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    const result = registerUser(username, password, name);
    if (result.success) {
      alert(result.message);
      setIsRegister(false); // Voltar para a tela de login
    } else {
      alert(result.message);
    }
  };

  return (
    <div className="login-container">
      <h1>{isRegister ? "Cadastro" : "Login"}</h1>
      <form onSubmit={isRegister ? handleRegister : handleLogin}>
        {isRegister && (
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
        )}
        <label>
          Usuário:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          Senha:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">{isRegister ? "Cadastrar" : "Entrar"}</button>
      </form>
      <p>
        {isRegister ? "Já possui uma conta?" : "Não possui uma conta?"}{" "}
        <button onClick={() => setIsRegister(!isRegister)}>
          {isRegister ? "Faça login" : "Cadastre-se"}
        </button>
      </p>
    </div>
  );
};

export default Login;
