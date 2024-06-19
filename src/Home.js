// Home.js

import React, { useState } from 'react';

function Home() {
  const [nombre, setNombre] = useState('');
  const [edad, setEdad] = useState('');
  const [genero, setGenero] = useState('');

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Nombre:', nombre);
    console.log('Edad:', edad);
    console.log('Género:', genero);
    setNombre('');
    setEdad('');
    setGenero('');
  };

  return (
    <div>
      <section id="about">
        <h2>About Section</h2>
        <p>This is the about section.</p>
      </section>
      <section id="contact">
        <h2>Contact Section</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" value={nombre} onChange={handleNombreChange} />
          </div>
          <div>
            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" value={edad} onChange={handleEdadChange} />
          </div>
          <div>
            <label htmlFor="genero">Género:</label>
            <select id="genero" value={genero} onChange={handleGeneroChange}>
              <option value="masculino">Masculino</option>
              <option value="femenino">Femenino</option>
              <option value="otro">Otro</option>
            </select>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
}

export default Home;
