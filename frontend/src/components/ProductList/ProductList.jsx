import { useEffect, useState } from 'react';
import './style.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3030/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Error al obtener productos:', err));
  }, []);

  return (
    <div className='product-list'>
      <h3>Productos disponibles:</h3>
      {products.map((prod) => (
        <div key={prod._id} className="product-item">
          <strong>{prod.name}</strong> - ${prod.price}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
