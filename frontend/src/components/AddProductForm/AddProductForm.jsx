import { useState } from 'react';
import axios from 'axios';
import './../TestButtons/Buttons.css';
import './style.css';

const AddProductForm = () => {
  const [form, setForm] = useState({
    prodName: '',
    prodPrice: '',
    prodStock: '',
    images: [],
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    // * * * MULTIPLE FILES UPLOAD
    const { name, value, files } = e.target;
    if (name === 'images') {
      setForm({ ...form, images: Array.from(files) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('prodName', form.name);
    data.append('prodPrice', form.price);
    data.append('prodStock', form.stock);
    // if (form.image) {
    //   data.append('image', form.image);
    // }
    form.images.forEach((image) => data.append('images', image)); // 👈 nombre 'images' (plural)

    try {
      const res = await axios.post('http://localhost:3030/products', data, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      console.log('Producto creado:', res.data);
      setMessage('✅ Product add');
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setMessage('❌ Error to load the product');
      return;
    }
  };

  return (
    <form onSubmit={handleSubmit} className="addProductForm">
      <h2 className="add-form_title">+ Add Products</h2>

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

      <input
        type="file"
        name="images"
        onChange={handleChange}
        multiple
        accept="image/*"
      />

      <button type="submit" className="fillBtn">
        Agregar
      </button>

      {message && <p>{message}</p>}
    </form>
  );
};

export default AddProductForm;
