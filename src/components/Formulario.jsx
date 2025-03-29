import React, { useState } from 'react';
import './UserForm.css';  // Asegúrate de crear este archivo CSS o incluir los estilos dentro del componente

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    lastName: ''  // El estado sigue con "lastName"
  });

  // Manejador de cambios para actualizar el estado del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Manejador de envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Crear los datos del usuario a partir del estado del formulario
    const userData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      last_name: formData.lastName  // Cambiar "lastName" a "last_name" aquí
    };

    try {
      const response = await fetch('http://18.222.228.154/users/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData), // Enviar datos con last_name
      });

      // Si la respuesta es exitosa
      if (response.ok) {
        const result = await response.json();
        console.log('Usuario creado:', result);
        alert('Usuario creado con éxito');
      } else {
        console.log('Error al crear el usuario:', response.statusText);
        alert('Hubo un error al crear el usuario');
      }
    } catch (error) {
      console.error('Error de red:', error);
      alert('Hubo un error de conexión');
    }
  };

  return (
    <div className="form-container">
      <h2>Formulario de Usuario</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>


        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </div>
  );
};

export default UserForm;
