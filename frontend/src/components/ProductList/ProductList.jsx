import { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // opcional, para feedback
  const [error, setError] = useState(null);

  //  Version primera
  // useEffect(() => {
  //   axios
  //     .get('http://localhost:3030/products')
  //     .then((response) => {
  //       setProducts(response.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error('Error al traer productos:', err);
  //       setError('No se pudieron cargar los productos');
  //       setLoading(false);
  //     });
  // }, [products]);

  // if (loading) return <p>Cargando productos...</p>;
  // if (error) return <p>{error}</p>;

  // version Segunda
  // Traer productos una sola vez al montar el componente
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    setLoading(true);
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
  };

  const handleDelete = (productId) => {
    // Opcional: confirmar antes de eliminar
    if (!window.confirm('¿Seguro que quieres eliminar este producto?')) return;

    axios
      .delete(`http://localhost:3030/products/${productId}`)
      .then(() => {
        // Quitar producto eliminado del estado
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product._id !== productId)
        );
      })
      .catch((err) => {
        console.error('Error al eliminar producto:', err);
        alert('No se pudo eliminar el producto');
      });
  };

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="productList-main-container">
      <h2>Lista de Productos</h2>
      <div className="productList-container">
        {products.map((product) => (
          <div key={product._id} className="product-item">
            <div className="product-image-container">
              {product.images && product.images.length > 0 && (
                <img
                  src={`http://localhost:3030/uploads/${product.images[0]}`}
                  alt={product.prodName}
                  className="product-image"
                />
              )}
            </div>

            <div className="productsDetail">
              <h3>{product.prodName}</h3>
              
              <p>${product.prodPrice}</p>
              <p>Stock: {product.prodStock} units.</p>              
            </div>

            <Link to={`/products/${product._id}`} className="product-link">
              Ver Detalle
            </Link>


            <button
              onClick={() => handleDelete(product._id)}
              className="delete-button"
              style={{ marginLeft: '10px' }}
            >
              Eliminar
            </button>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
