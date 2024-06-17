import React, { useEffect } from 'react';
import './Styles.css'; 

<header>
<h1>ENTRADA</h1>
</header>
const entradas = [
    {
        Nombre: "Bruschettas de Tomate y Albahaca",
        Imagen: "https://assets-global.website-files.com/602b89a194315cfeff504d81/621f94cd07dd8c4729190be9_60f71135a618a3140d58bfcc_shutterstock_222605983.png",
        Ingredientes: [
            "Pan baguette",
            "Tomates maduros",
            "Ajo",
            "Albahaca fresca",
            "Aceite de oliva virgen extra",
            "Sal y pimienta"
        ],
        Instrucciones: "Corta el pan en rebanadas y tuesta ligeramente. Mezcla tomates picados con ajo, albahaca, aceite de oliva, sal y pimienta. Coloca la mezcla sobre las rebanadas de pan y sirve."
    },

    {
        Nombre: "Croquetas de Jamón",
        Imagen: "https://i.ytimg.com/vi/ktv5vseGTSY/maxresdefault.jpg",
        Ingredientes: [
            "Jamón serrano",
            "Leche",
            "Harina",
            "Mantequilla",
            "Huevo",
            "Pan rallado"
        ],
        Instrucciones: "Prepara una bechamel con leche, harina y mantequilla. Añade jamón picado. Deja enfriar, forma las croquetas, pásalas por huevo y pan rallado. Fríelas en aceite caliente hasta que estén doradas."
    },

    {
        Nombre: "Ensalada Caprese",
        Imagen: "https://comidacaserayfacil.com/img/2023/04/ensalada-caprese-500x375.jpg",
        Ingredientes: [
            "Tomates cherry",
            "Queso mozzarella fresco",
            "Albahaca fresca",
            "Aceite de oliva virgen extra",
            "Vinagre balsámico",
            "Sal y pimienta"
        ],
        Instrucciones: "Corta los tomates y la mozzarella en rodajas. Alterna las rodajas de tomate y mozzarella en un plato. Espolvorea con hojas de albahaca fresca. Aliña con aceite de oliva, vinagre balsámico, sal y pimienta al gusto."
    },

    {
        Nombre: "Guacamole con Totopos",
        Imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7ilplzkmgHHc6Y2E8XD0Gd5ryz2Y-acOO5w&s",
        Ingredientes: [
            "2 aguacates maduros",
            "1 tomate mediano",
            "1/4 de cebolla blanca o roja",
            "1 limón (el jugo)",
            "Cilantro fresco (al gusto)",
            "Sal y pimienta al gusto",
            "Totopos",
        ],
        Instrucciones: "Corta los aguacates por la mitad, retira el hueso y saca la pulpa con una cuchara. Colócala en un tazón. Pica finamente el tomate, la cebolla y el cilantro. Agrégalos al tazón con el aguacate. Exprime el jugo de limón sobre los ingredientes en el tazón. Esto ayudará a mantener el color verde brillante del guacamole y añadirá sabor. Agrega sal y pimienta al gusto. Con un tenedor, machaca los ingredientes en el tazón hasta obtener la consistencia deseada. Puedes dejarlo más o menos troceado según tu preferencia. Prueba y ajusta el sazón si es necesario. Sirve el guacamole en un plato acompañado de totopos (chips de maíz) para disfrutar."
    },
];



const Entradas = () => {
    useEffect(() => {
        cargarEntradas();
    }, []);

    const cargarEntradas = () => {
        return (
            <div id="entrada-container" className="entrada-container">
                {entradas.map((entrada, index) => (
                    <div key={index} className="entrada">
                        <img src={entrada.Imagen} alt={entrada.Nombre} />
                        <h2>{entrada.Nombre}</h2>
                        <h3>Ingredientes:</h3>
                        <ul>
                            {entrada.Ingredientes.map((ingrediente, i) => (
                                <li key={i}>{ingrediente}</li>
                            ))}
                        </ul>
                        <h3>Instrucciones:</h3>
                        <ul>
                            {entrada.Instrucciones.split('. ').map((instruccion, i) => (
                                <li key={i}>{instruccion}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    return cargarEntradas();
};

export default Entradas;
