import React, { useState } from "react";
import "../css/Aereo.css"; 

const Aereo = () => {
  // Exemplo de dados simulados
  const data = [
    { id: 1,rloc:"XYZ123", data: "2024-12-10", companhia: "GOL", status: "Confirmado" },
    { id: 2,rloc:"ABC789", data: "2024-12-09", companhia: "Latam", status: "Cancelado" },
    { id: 3,rloc:"321YYY", data: "2024-12-08", companhia: "Azul", status: "Pendente" },
  ];

 
  const [filterDate, setFilterDate] = useState("");
  const [filterCompany, setFilterCompany] = useState("");
  const [filterStatus, setFilterStatus] = useState("");
  const [showFilters, setShowFilters] = useState(false); 

  
  const filteredData = data.filter((item) => {
    const matchesDate = filterDate ? item.data.includes(filterDate) : true;
    const matchesCompany = filterCompany
      ? item.companhia.includes(filterCompany)
      : true;
    const matchesStatus = filterStatus ? item.status === filterStatus : true;

    return matchesDate && matchesCompany && matchesStatus;
  });

  return (
    <div className="aereo">
      <h1>Reservas de Aéreo</h1>

      {/* Botão para mostrar/ocultar filtros */}
      <button
        className="aereo-filter-btn"
        onClick={() => setShowFilters(!showFilters)} 
      >
        {showFilters ? "Fechar Filtros" : "Abrir Filtros"}
      </button>

      {/* Filtros (visíveis apenas se showFilters for true) */}
      {showFilters && (
        <div className="aereo-filters">
          <label>
            Data:
            <input
              type="date"
              value={filterDate}
              onChange={(e) => setFilterDate(e.target.value)}
            />
          </label>
          <label>
            Companhia:
            <select
              value={filterCompany}
              onChange={(e) => setFilterCompany(e.target.value)}
            >
              <option value="">Todas</option>
              <option value="GOL">GOL</option>
              <option value="Latam">Latam</option>
              <option value="Azul">Azul</option>
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
      <table className="aereo-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Rloc</th>
            <th>Data Emissao</th>
            <th>Companhia</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.rloc}</td>
              <td>{item.data}</td>
              <td>{item.companhia}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Aereo;
