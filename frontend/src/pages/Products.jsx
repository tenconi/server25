import AddProductForm from "../components/AddProductForm/AddProductForm.jsx";
import ProductList from "../components/ProductList/ProductList.jsx";    
import './styles.css';

const Products= ()=>{

return(
    <section className="products">
      <h2>Products:</h2>
      <br/>
      <AddProductForm />
      <ProductList />
    </section>
  );

}

export default Products;