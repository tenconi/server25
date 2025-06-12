import { useState } from 'react';
import axios from 'axios';
import './../TestButtons/Buttons.css' 
import './style.css';

const AddProductForm = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    stock: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Objeto subido
      const res = await axios.post('http://localhost:3030/products', {
        prodName: form.name,
        prodPrice: parseFloat(form.price),
        prodStock: parseInt(form.stock)
      });

      setMessage('✅ Producto agregado correctamente');
      setForm({ name: '', price: '', stock: '' });
    } catch (error) {
      console.error('Error al agregar producto:', error);
      setMessage('❌ Hubo un error al agregar el producto');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='addProductForm'>
      <h2>Agregar Producto</h2>

      <input
        type="text"
        name="name"
        placeholder="Nombre"
        value={form.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Precio"
        value={form.price}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="stock"
        placeholder="Stock"
        value={form.stock}
        onChange={handleChange}
        required
      />

      <button type="submit" className='fillBtn'>Agregar</button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default AddProductForm;
