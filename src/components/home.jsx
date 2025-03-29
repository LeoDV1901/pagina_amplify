import React from 'react';
import './Login.css'; // Usa los mismos estilos que Login.jsx

const Home = () => {
  return (
    <div className="login-container">
      <h1>Bienvenido a Nuestra Página</h1>
      <p>Explora nuestro sitio y descubre contenido interesante.</p>

      <div className="form-group">
        <h2>Sección Destacada</h2>
        <p>
          Aquí puedes colocar información relevante sobre tu sitio. 
          Puedes hablar sobre productos, servicios o cualquier cosa que desees.
        </p>
      </div>

      <button className="submit-btn" onClick={() => alert('¡Gracias por visitarnos!')}>
        Explorar Más
      </button>
    </div>
  );
};

export default Home;
