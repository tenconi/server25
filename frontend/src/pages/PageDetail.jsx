import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductCarousel from '../components/ProductDetail/ProductDetail.jsx';
import './styles.css';
import { useNavigate } from 'react-router-dom';

const PageDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3030/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error('Error al obtener producto:', err));
  }, [id]);

  if (!product) return <p>Cargando...</p>;

  return (
    <div className="container">
      <div className="mainDetail">
        

        <div className="detailInfo">
          <button onClick={() => navigate(-1)} className="fillBtn backBtn">
          ← Volver
        </button>

          <h2 className='section_title'>{product.prodName}</h2>
          <p>Precio: ${product.prodPrice}</p>
          <p>Stock: {product.prodStock}</p>
          
        </div>

        <div className="detailImage">
          {product.images && product.images.length > 0 && (
            <ProductCarousel images={product.images} />
          )}
        </div>
      </div>
    </div>
  );
};

export default PageDetail;
