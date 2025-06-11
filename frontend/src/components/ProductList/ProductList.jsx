import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // opcional, para feedback
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3030/products')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error('Error al traer productos:', err);
        setError('No se pudieron cargar los productos');
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.map(product => (
        <div key={product._id} className='product-item'>
          <strong>{product.prodName}</strong> - ${product.prodPrice} - Stock: {product.prodStock} units.
        </div>
      ))}
    </div>
  );
};

export default ProductList;