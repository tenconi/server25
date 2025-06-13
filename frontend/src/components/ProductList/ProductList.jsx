import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // opcional, para feedback
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3030/products')
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al traer productos:', err);
        setError('No se pudieron cargar los productos');
        setLoading(false);
      });
  }, [products]);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Lista de Productos</h2>
      {products.map((product) => (
        <div key={product._id} className="product-item">

          <div>
            {product.prodImage && (
              <img
                src={`http://localhost:3030/uploads/${product.prodImage}`}
                alt={product.prodName}
                className="product-image"
              />
            )}
          </div>
          
          <div className="productsDetail">
            <strong>{product.prodName}</strong> - ${product.prodPrice} - Stock:{' '}
            {product.prodStock} units.
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
