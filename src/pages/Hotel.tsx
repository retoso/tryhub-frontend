import React, { useState } from "react";
import "../css/Hotel.css"; 

const Hotel = () => {
  // Exemplo de dados simulados
  const data = [
    { id: 1, data: "2024-12-10", fornecedor: "B2B", status: "Confirmado" },
    { id: 2, data: "2024-12-09", fornecedor: "TREND", status: "Cancelado" },
    { id: 3, data: "2024-12-08", fornecedor: "OMNIBEES", status: "Pendente" },
  ];

 
  const [filterDate, setFilterDate] = useState("");
  const [filterCompany, setFilterCompany] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [showFilters, setShowFilters] = useState(false); 

  
  const filteredData = data.filter((item) => {
    const matchesDate = filterDate ? item.data.includes(filterDate) : true;
    const matchesCompany = filterCompany
      ? item.fornecedor.includes(filterCompany)
      : true;
    const matchesStatus = filterStatus ? item.status === filterStatus : true;

    return matchesDate && matchesCompany && matchesStatus;
  });

  return (
    <div className="hotel">
      <h1>Reservas de Hoteis</h1>

      {/* Botão para mostrar/ocultar filtros */}
      <button
        className="hotel-filter-btn"
        onClick={() => setShowFilters(!showFilters)} 
      >
        {showFilters ? "Fechar Filtros" : "Abrir Filtros"}
      </button>

      {/* Filtros (visíveis apenas se showFilters for true) */}
      {showFilters && (
        <div className="hotel-filters">
          <label>
            Data:
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </label>
          <label>
            fornecedor:
            <select
              value={filterCompany}
              onChange={(e) => setFilterCompany(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="B2B">B2B</option>
              <option value="TREND">TREND</option>
              <option value="OMNIBEES">OMNIBEES</option>
            </select>
          </label>
          <label>
            Status:
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
            >
              <option value="">Todos</option>
              <option value="Confirmado">Confirmado</option>
              <option value="Cancelado">Cancelado</option>
              <option value="Pendente">Pendente</option>
            </select>
          </label>
        </div>
      )}

      {/* Tabela de resultados */}
      <table className="hotel-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>fornecedor</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.data}</td>
              <td>{item.fornecedor}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Hotel;
