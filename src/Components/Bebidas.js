import React, { useEffect } from 'react';
import './Styles.css'; // Asegúrate de tener tus estilos CSS importados correctamente

const bebidas = [
    {
        nombre: "Agua de Mazapan",
        imagen: "https://d1uz88p17r663j.cloudfront.net/original/1ef4694bb435518ca55b0f6a05005963_AGUA_DE_MAZAPAN_CON_FRESA.jpg",
        ingredientes: [
            "4 mazapanes",
            "500 ml de agua",
            "500 ml de leche",
            "250 ml de leche evaporada",
            "150 ml de leche condensada",
            "Hielo"
        ],
        instrucciones: "Desenvuelve los mazapanes y colócalos en la licuadora.  Agrega el agua y procesa hasta formar un batido uniforme.  Añade la leche entera y la leche evaporada, procesando nuevamenteRectifica el dulzor y, si es necesario, agrega leche condensada al gusto.  Sirve muy fría en vasos con hielo y, opcionalmente, una pizca de canela en polvo."
    },
    {
        nombre: "Piña Colada",
        imagen: " https://imag.bonviveur.com/pina-colada.jpg",
        ingredientes: [
            "2 onzas de ron blanco",
            "1 onza de jugo de lima fresco",
            "3/4 onza de jarabe de azúcar",
            "Rodaja de lima para decorar"
        ],
        instrucciones: "Llena una coctelera con hielo, añade ron, jugo de lima y jarabe de azúcar. Agita bien y cuela en una copa de cóctel. Decora con una rodaja de lima."
    },
    {
        nombre: "Smoothie de Mango",
        imagen: "https://images.aws.nestle.recipes/resized/8c95a1bf5cb2b5f8dbee41b014cbd56a_agua_cremosa_de_mango_1080_850.jpg",
        ingredientes: [
            "1 taza de mango congelado",
            "1 plátano maduro",
            "1/2 taza de yogur natural",
            "1/2 taza de jugo de naranja",
            "1/2 taza de hielo"
        ],
        instrucciones: "Coloca todos los ingredientes en una licuadora y mezcla hasta que quede suave. Sirve inmediatamente."
    },
    {
        nombre: "Limonada de Fresa",
        imagen: "https://jaleo.pago.es/wp-content/uploads/2020/03/Coctel-Limonada-Fresa.jpg",
        ingredientes: [
            "1 taza de fresas frescas, picadas",
            "1 taza de jugo de limón",
            "4 tazas de agua fría",
            "1/2 taza de azúcar",
            "Hielo",
            "Rodajas de limón para decorar"
        ],
        instrucciones: "En una licuadora, mezcla las fresas y el jugo de limón hasta que esté suave. En una jarra grande, combina la mezcla de fresas, agua y azúcar. Revuelve bien hasta que el azúcar se disuelva. Sirve con hielo y decora con rodajas de limón."
    },
];

const Bebidas = () => {
    useEffect(() => {
        // Aquí puedes agregar lógica para acciones que ocurren después del renderizado inicial
    }, []);

    return (
        <div id="bebidas-container" className="bebidas-container">
            {bebidas.map((bebida, index) => (
                <div key={index} className="bebida">
                    <img src={bebida.imagen} alt={bebida.nombre} />
                    <h2>{bebida.nombre}</h2>
                    <h3>Ingredientes:</h3>
                    <ul>
                        {bebida.ingredientes.map((ingrediente, i) => (
                            <li key={i}>{ingrediente}</li>
                        ))}
                    </ul>
                    <h3>Instrucciones:</h3>
                    <ul>
                        {bebida.instrucciones.split('. ').map((instruccion, i) => (
                            <li key={i}>{instruccion}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};



export default Bebidas;
