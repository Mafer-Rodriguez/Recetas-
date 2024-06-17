import React, { useState, useEffect } from 'react';
import './Form.css';

export default function Form() {
  const [recetas, setRecetas] = useState([]);
  const [nombre, setNombre] = useState('');
  const [id, setId] = useState('');
  const [ingredientes, setIngredientes] = useState('');
  const [instrucciones, setInstrucciones] = useState('');
  const [imagen, setImagen] = useState(''); // Nuevo estado para la URL de la imagen
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    fetchRecetas();
  }, []);

  const fetchRecetas = async () => {
    try {
      const response = await fetch('http://localhost:3000/recetas');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setRecetas(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const addReceta = async () => {
    const nuevaReceta = {
      id: parseInt(id),
      nombre,
      ingredientes,
      instrucciones,
      imagen // Incluir la URL de la imagen en el nuevo objeto de receta
    };
    try {
      const response = await fetch(`http://localhost:3000/recetas${isEditing ? '/' + editId : ''}`, {
        method: isEditing ? 'PUT' : 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(nuevaReceta),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchRecetas();
      setId('');
      setNombre('');
      setIngredientes('');
      setInstrucciones('');
      setImagen(''); // Restablecer el campo de la URL de la imagen
      setIsEditing(false);
      setEditId(null);
    } catch (error) {
      console.error(`Error ${isEditing ? 'updating' : 'adding'} data:`, error);
    }
  };

  const editReceta = (receta) => {
    setId(receta.id);
    setNombre(receta.nombre);
    setIngredientes(receta.ingredientes);
    setInstrucciones(receta.instrucciones);
    setImagen(receta.imagen); // Establecer la URL de la imagen al editar
    setIsEditing(true);
    setEditId(receta.id);
  };

  const deleteReceta = async (recetaId) => {
    try {
      const response = await fetch(`http://localhost:3000/recetas/${recetaId}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchRecetas();
    } catch (error) {
      console.error('Error deleting data:', error);
    }
  };

  const deleteAllRecetas = async () => {
    try {
      for (const receta of recetas) {
        await fetch(`http://localhost:3000/recetas/${receta.id}`, {
          method: 'DELETE',
        });
      }
      setRecetas([]);
    } catch (error) {
      console.error('Error deleting all data:', error);
    }
  };

  return (
    <div className="App">
      <header>
        <h1>Agregar Recetas Nuevas</h1>
      </header>
      <main>
        <ul>
          {recetas.map((receta) => (
            <li className='listaForm' key={receta.id}>
              <img src={receta.imagen} alt={receta.nombre} /> {/* Mostrar la imagen */}
              <strong>{receta.id}: {receta.nombre}</strong><br />
              <em>Ingredientes:</em> {receta.ingredientes}<br />
              <em>Instrucciones:</em> {receta.instrucciones}<br />
              <button onClick={() => editReceta(receta)}>Editar</button>
              <button onClick={() => deleteReceta(receta.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <h2>{isEditing ? 'Editar receta' : 'Agregar nueva receta'}</h2>
        <form>
          <label htmlFor="id">ID:</label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
            disabled={isEditing} // Deshabilitar entrada de ID al editar
          />
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <label htmlFor="ingredientes">Ingredientes:</label>
          <input
            type="text"
            id="ingredientes"
            value={ingredientes}
            onChange={(e) => setIngredientes(e.target.value)}
            required
          />
          <label htmlFor="instrucciones">Instrucciones:</label>
          <input
            type="text"
            id="instrucciones"
            value={instrucciones}
            onChange={(e) => setInstrucciones(e.target.value)}
            required
          />
          <label htmlFor="imagen">URL de la imagen:</label> {/* Nuevo campo para la URL de la imagen */}
          <input
            type="text"
            id="imagen"
            value={imagen}
            onChange={(e) => setImagen(e.target.value)}
            required
          />
          <button type="button" onClick={addReceta}>{isEditing ? 'Actualizar Receta' : 'Agregar Receta'}</button>
          <button type="button" onClick={deleteAllRecetas}>Eliminar Todas las Recetas</button>
        </form>
      </main>
      
    </div>
  );
}
