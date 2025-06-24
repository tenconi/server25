import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCarousel from '../components/ProductDetail/ProductDetail.jsx';

const PageDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3030/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => console.error('Error al obtener producto:', err));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div>
      <h2>{product.prodName}</h2>
      <p>Precio: ${product.prodPrice}</p>
      <p>Stock: {product.prodStock}</p>

      {product.images && product.images.length > 0 && (
        <ProductCarousel images={product.images} />
      )}
    </div>
  );
};

export default PageDetail;