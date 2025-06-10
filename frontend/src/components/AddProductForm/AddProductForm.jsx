import React from 'react';
import { useState } from 'react';
import './../TestButtons/Buttons.css' 

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3030/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price }),
      });

      const data = await res.json();
      console.log('Producto creado:', data);
      setName('');
      setPrice('');
    } catch (error) {
      console.error('Error al crear producto:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="number"
        placeholder="Precio"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <button type="submit" className='fillBtn'>Agregar producto</button>
    </form>
  );
};

export default AddProductForm;
