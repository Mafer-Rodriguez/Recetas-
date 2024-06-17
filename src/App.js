import React, { useState } from 'react';
import './App.css';


const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [currentSection, setCurrentSection] = useState('welcome');

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'entradas':
        return <div className={darkTheme ? 'dark' : ''}>Entradas</div>;
      case 'postres':
        return <div className={darkTheme ? 'dark' : ''}>Postres</div>;
      case 'bebidas':
        return <div className={darkTheme ? 'dark' : ''}>Bebidas</div>;
      case 'recetas':
        return <div className={darkTheme ? 'dark' : ''}>Recetas</div>;
      default:
        return (
          <div className={darkTheme ? 'dark' : ''}>
            <h1>Bienvenido</h1>
            <p>Esta página te ayudará a encontrar las mejores recetas de cocina.</p>
            <img src={require('./imagenes/imagen.jpeg')} alt="Comida" />
            <div className={`reviews ${darkTheme ? 'dark' : ''}`}>
              <h2>Reseñas</h2>
              
              <p>"Esta página es increíble para encontrar recetas!" - Mafer</p>
              <p>"Me encanta la variedad de recetas que tienen." - Maricruz</p>
              <p>"Me encanta cocinar, gracias por darme una buena razon para estar feliz." - Erasmo</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className={darkTheme ? 'App dark' : 'App'}>
      <header>
        <nav>
          <ul>
            <li onClick={() => setCurrentSection('entradas')}>Entradas</li>
            <li onClick={() => setCurrentSection('postres')}>Postres</li>
            <li onClick={() => setCurrentSection('bebidas')}>Bebidas</li>
            <li onClick={() => setCurrentSection('recetas')}>Recetas</li>
            <li onClick={() => setCurrentSection('welcome')}>Bienvenido</li>
          </ul>
        </nav>
        <button onClick={toggleTheme}>
          {darkTheme ? 'Tema Claro' : 'Tema Oscuro'}
        </button>
      </header>
      <main>
        {renderSection()}
      </main>
      <footer>
        <p className={darkTheme ? 'dark' : ''}>&copy; 2023 Food Website. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default App;
