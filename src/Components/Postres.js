import React, { useEffect } from 'react';
import './Styles.css'; // Asegúrate de tener tus estilos CSS importados correctamente

const postres = [
    {
        Nombre: "Mousse de Chocolate",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScdxKXVM26chcSwtwiE4zZpenEMXtVd6aAZA&s",
        Ingredientes: [
            "200g de chocolate negro",
            "4 huevos separados",
            "100ml de crema de leche",
            "2 cucharadas de azúcar",
            "1 cucharadita de esencia de vainilla"
        ],
        Instrucciones: "Derrite el chocolate en el microondas. Deja enfriar un poco. Bate las yemas con el azúcar hasta que estén cremosas. Agrega el chocolate derretido y la esencia de vainilla. Bate la crema de leche hasta que forme picos suaves. Incorpora la crema batida a la mezcla de chocolate y yemas. Bate las claras a punto de nieve y mezcla con cuidado. Refrigera por 4 horas antes de servir."
    },

    {
        Nombre: "Cheesecake",
        Imagen: "https://peopleenespanol.com/thmb/8vzve3hmeCgC-SVqkvAmuXnMMBE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/cheesecake-facil-con-leche-condensada-2000-4160526441114bf3ad8f3409586a2c8a.jpg",
        Ingredientes: [
            " Queso crema",
            "galletas tipo digestive", 
            "mantequilla", 
            "azúcar", 
            "huevos", 
            "extracto de vainilla"
        ],
        Instrucciones: "Triturar las galletas y mezclar con mantequilla derretida para la base. Batir el queso crema con azúcar, huevos y vainilla. Verter sobre la base de galleta y hornear. Enfriar antes de servir."
    },

    {
        Nombre: "Flan de Caramelo",
        Imagen: "https://www.goya.com/media/3646/flan-de-queso-caramel-topped-cream-cheese-custard.jpg?quality=80",
        Ingredientes: [
            "Leche",
            "huevos",
            "azúcar", 
            "esencia de vainilla", 
            "caramelo líquido"
        ],
        Instrucciones: "Batir huevos con azúcar y vainilla. Calentar leche y añadir a la mezcla de huevos. Verter caramelo en moldes, añadir la mezcla y hornear a baño María."
    },

    {
        Nombre: "Fresas con Crema",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxhCV8qHkkW-6UQikkaheoK_U08bnDt9se2g&s",
        Ingredientes: [
            "Fresas frescas, lavadas y cortadas en rodajas", 
            "Crema batida",
           "Azúcar al gusto",
            "Esencia de vainilla",
            "Hojas de menta fresca para decorar"
        ],
        Instrucciones: "Corta las fresas y espolvorea azúcar al gusto. Deja reposar las fresas unos minutos para que suelten jugo. Bate crema hasta formar picos suaves. Coloca las fresas en copas y cubre con crema batida. Opcional: decora con hojas de menta fresca. Sirve inmediatamente y disfruta."
    },
];

const Postres = () => {
    useEffect(() => {
        cargarPostres();
    }, []);

    const cargarPostres = () => {
        return (
            <div id="postres-container" className="postres-container">
                {postres.map((postre, index) => (
                    <div key={index} className="postre">
                        <img src={postre.Imagen} alt={postre.Nombre} />
                        <h2>{postre.Nombre}</h2>
                        <h3>Ingredientes:</h3>
                        <ul>
                            {postre.Ingredientes.map((ingrediente, i) => (
                                <li key={i}>{ingrediente}</li>
                            ))}
                        </ul>
                        <h3>Instrucciones:</h3>
                        <ul>
                            {postre.Instrucciones.split('. ').map((instruccion, i) => (
                                <li key={i}>{instruccion}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    const estadoTitulo = document.createElement('h3');
    estadoTitulo.textContent = 'Estado:';
    postreDiv.appendChild(estadoTitulo);

    const estado = document.createElement('p');
    estado.textContent = postre.Estado;
    postreDiv.appendChild(estado);

    const botonesDiv = document.createElement('div');
    botonesDiv.className = 'botones';

    const btnYaLoHice = document.createElement('button');
    btnYaLoHice.textContent = 'Ya lo hice';
    btnYaLoHice.onclick = () => cambiarEstado(postre, 'Ya lo hice');
    botonesDiv.appendChild(btnYaLoHice);

    const btnPendiente = document.createElement('button');
    btnPendiente.textContent = 'Pendiente';
    btnPendiente.onclick = () => cambiarEstado(postre, 'Pendiente');
    botonesDiv.appendChild(btnPendiente);

    const btnPorHacer = document.createElement('button');
    btnPorHacer.textContent = 'Por hacer';
    btnPorHacer.onclick = () => cambiarEstado(postre, 'Por hacer');
    botonesDiv.appendChild(btnPorHacer);

    postreDiv.appendChild(botonesDiv);

    container.appendChild(postreDiv);
}

document.addEventListener('DOMContentLoaded', cargarPostres);





export default Postres;
