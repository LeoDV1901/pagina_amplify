import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './User.css'

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  
  useEffect(() => {
    axios.get('http://127.0.0.1:5000/users/')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return <p className="loading">Cargando...</p>;
  if (error) return <p className="error">Error: {error}</p>;

  // Filtrar usuarios según el término de búsqueda
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-container">
      <h2 className="title">Usuarios</h2>
      
      {/* Barra de búsqueda */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar por nombre, email o apellido"
          value={searchTerm}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      {/* Lista de usuarios */}
      <ul className="user-list">
        {filteredUsers.length === 0 ? (
          <li>No se encontraron resultados</li>
        ) : (
          filteredUsers.map((user) => (
            <li key={user.id} className="user-item">
              <div className="user-info">
                <p><strong>Nombre:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Apellido:</strong> {user.last_name}</p>
              </div>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Users;
