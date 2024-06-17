import React, { useState } from 'react';
import '../App.css';
import Form from './Form'; // Asegúrate de que la ruta sea correcta
import Bebidas from './Bebidas'; // Importa el componente Bebidas
import Postres from './Postres';
import Entradas from './Entrada';

const Principal = () => {
    const [darkTheme, setDarkTheme] = useState(false);
    const [currentSection, setCurrentSection] = useState('welcome');

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    const renderSection = () => {
        switch (currentSection) {
            case 'entradas':
                return <Entradas />;
           
            case 'bebidas':
                return <Bebidas />; // Renderizar el componente Bebidas aquí
            case 'recetas':
                return <Form />; // Renderizar el componente Form aquí
            case 'postres':
                return <Postres />; // Renderizar el componente Bebidas aquí
            default:
                return (
                    <div className={darkTheme ? 'dark' : ''}>
                        <h1>Bienvenido</h1>
                        <p>Esta página te ayudará a encontrar las mejores recetas de cocina.</p>
                        <div className="content-container">
                            <img src="https://elviajerofeliz.com/wp-content/uploads/2020/09/comida-tipica-de-china.jpg" alt="Comida" className="left-image" />
                            <div className="right-content">
                                <div className={`reviews ${darkTheme ? 'dark' : ''}`}>
                                    <h2>Reseñas</h2>
                                    <div className="imagen-container">
                                        <img src="https://toppng.com/uploads/preview/ensando-especialmente-en-las-personas-con-movilidad-imagenes-de-personas-115628913400renbsc9lk.png" alt="Comida" className="round-image" />
                                        <p className="round-image-text">"Esta página es increíble para encontrar recetas!" - Mafer</p>
                                        <img src="https://th.bing.com/th/id/OIP.omVGoPzJk4emAICrhRalGQHaKt?rs=1&pid=ImgDetMain" alt="Comida" className="round-image" />
                                        <p className="round-image-text">"Me encanta la variedad de recetas que tienen." - Maricruz</p>
                                        <img src="https://www.lgpsmember.org/wp-content/uploads/Shutterstock_1656432556_DT2.jpg" alt="Comida" className="round-image" />
                                        <p className="round-image-text">"Me encanta cocinar, gracias por darme una buena razón para estar feliz." - Erasmo</p>
                                    </div>
                                </div>
                            </div>
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

export default Principal;
