import { useEffect, useState } from 'react';
import './style.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('http://localhost:3030/products/')
       .then(res => {
        if (!res.ok) throw new Error('No se pudo obtener productos');
        return res.json();
      })
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error al obtener productos:', error);
        setLoading(false);
      });
  }, []);

    if (loading) return <p>Cargando productos...</p>;
console.log(setProducts, products);

  return (
    <div className='product-list'>
      <h3>Productos disponibles:</h3>
      {products.map((prod) => (
        <div key={prod._id} className="product-item">
          <strong>{prod.name}</strong> - ${prod.price} - Stock: {prod.stock}
        </div>
      ))}
    </div>
  );
};

export default ProductList;
