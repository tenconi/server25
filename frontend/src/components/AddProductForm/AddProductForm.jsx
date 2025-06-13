import { useState } from 'react';
import axios from 'axios';
import './../TestButtons/Buttons.css';
import './style.css';

const AddProductForm = () => {
  const [form, setForm] = useState({
    name: '',
    price: '',
    stock: '',
    image: null,
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
    // setForm({
    //   ...form,
    //   [e.target.name]: e.target.value
    // });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('name', form.name);
    data.append('price', form.price);
    data.append('stock', form.stock);
    if(form.image){
      data.append('image', form.image)}
      

    try {
      // Objeto subido
      const res = await axios.post('http://localhost:3030/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
        // prodName: form.name,
        // prodPrice: parseFloat(form.price),
        // prodStock: parseInt(form.stock),
      });
      console.log('Producto creado:', res.data);
      setMessage('✅ Producto agregado correctamente');
      // setForm({ name: '', price: '', stock: '' });
    } catch (error) {
      console.error('Error al agregar producto:', error);
      setMessage('❌ Hubo un error al agregar el producto');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="addProductForm">
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

      <input name="image" onChange={handleChange} type="file" accept="image/*" />

      <button type="submit" className="fillBtn">
        Agregar
      </button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default AddProductForm;
