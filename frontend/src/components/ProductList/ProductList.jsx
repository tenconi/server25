import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import {Link} from 'react-router-dom';

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
    <div className='productList-main-container'>
      <h2>Lista de Productos</h2>
      <div className="productList-container">

      {products.map((product) => (
        <div key={product._id} className="product-item">
          <div className='product-image-container'>
            {product.image && (
              <img
                src={`http://localhost:3030/uploads/${product.image}`}
                alt={product.prodName}
                className="product-image"
              />
            )}
          </div>

          <div className="productsDetail">
            <strong>{product.prodName}</strong> - ${product.prodPrice} - Stock:{' '}
            {product.prodStock} units.
          </div>
          <Link to={`/products/${product._id}`} className="product-link">
            Ver Detalle
          </Link>
        </div>
      ))}
      </div>
    </div>
  );
};

export default ProductList;
