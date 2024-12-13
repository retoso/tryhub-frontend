import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Dashboard.css";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";

// Dados para o gráfico
const data = [
  { name: "Aéreo", vendas: 54000 },
  { name: "Hotel", vendas: 21000 },
  { name: "Carro", vendas: 9000 },
  { name: "Seguro", vendas: 6000 },
  { name: "Diversos", vendas: 2780 },
];

const Dashboard = () => {
  const username = "Admin";
  const lastUpdate = new Date("12/12/2024 14:00"); // Última atualização fixa

  // Função que calcula o tempo restante
  const calculateTimeLeft = () => {
    const now = new Date();
    const diff = lastUpdate.getTime() + 30 * 60 * 1000 - now.getTime(); // 30 minutos em ms
    if (diff <= 0) {
      return { minutes: 0, seconds: 0 };
    }
    const minutes = Math.floor(diff / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (newTimeLeft.minutes === 0 && newTimeLeft.seconds === 0) {
        clearInterval(timer);
      }
    }, 1000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(timer);
  }, [lastUpdate]); // Dependência para recalcular a contagem ao alterar a última atualização


  return (
    <div className="dashboard">
      {/* Menu Master */}
      <div className="menu-master">
        <div className="menu-links">
          <Link to="/Aereo">Aéreo</Link>
          <Link to="/Hotel">Hotel</Link>
          <Link to="/Carro">Carro</Link>
          <Link to="/Seguro">Seguro</Link>
          <Link to="/Diversos">Diversos</Link>
        </div>
        <div className="menu-info">
          <p><b>Última atualização: {lastUpdate.toLocaleString()}</b></p>
          <p>
            <b>
              Contagem regressiva:{" "}
              {timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
            </b>
          </p>
          <div className="user-info">
            <span>{username}</span>
            <button>Sair</button>
          </div>
        </div>
      </div>

      <h1>Bem-vindo ao Tryhub</h1>

      {/* Cards de resumo */}
      <div className="dashboard-cards">
        <div className="card card-total-vendas">
          <img src="/icons/sales.png" alt="Total de Vendas" />
          <h3>Total de Vendas</h3>
          <p>R$ 10.000</p>
          <p>20 vendas</p>
        </div>
        <div className="card card-canceladas">
          <img src="/icons/canceled.png" alt="Vendas Canceladas" />
          <h3>Vendas Canceladas</h3>
          <p>5</p>
        </div>
        <div className="card card-fechadas">
          <img src="/icons/closed.png" alt="Vendas Fechadas" />
          <h3>Vendas Fechadas</h3>
          <p>R$ 2.000</p>
          <p>5 vendas</p>
        </div>
        <div className="card card-abertas">
          <img src="/icons/open.png" alt="Vendas Abertas" />
          <h3>Vendas Abertas</h3>
          <p>R$ 1.500</p>
          <p>4 vendas</p>
        </div>
        <div className="card card-nao-encontradas">
          <img src="/icons/not-found.png" alt="Vendas Não Encontradas" />
          <h3 >Vendas Não Encontradas</h3>
          <p>R$ 2.500</p>
          <p>7 vendas</p>
        </div>
      </div>

      {/* Gráfico de vendas */}
      <div className="dashboard-charts">
        <h2>Gráfico de Vendas</h2>
        <BarChart width={600} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="vendas" fill="#8884d8" />
        </BarChart>
      </div>

    </div>
  );
};

export default Dashboard;
