import { useState, useEffect } from 'react';
import axios from 'axios';
import AddProductForm from '../AddProductForm/AddProductForm.jsx';
import ProductList from '../ProductList/ProductList.jsx';

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = () => {
    setLoading(true);
    axios
      .get('http://localhost:3030/products')
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Error al cargar productos');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = (products) => {
    if (!window.confirm('¿Eliminar producto?')) return;

    axios
      .delete(`http://localhost:3030/products/${productId}`)
      .then(() => {
        setProducts((prev) =>
          prev.filter((product) => product._id !== productId)
        );
      })
      .catch((err) => {
        console.error('Error al eliminar:', err);
        alert('Error al eliminar producto');
      });
  };
  
  return (
    <div>
      <h2>Gestión de Productos</h2>

      <AddProductForm onProductCreated={fetchProducts} />
      <br />
      

      <ProductList
        products={products}
        loading={loading}
        error={error}
        onDelete={handleDelete} />   
    </div>
  );
};

export default ProductPage;
