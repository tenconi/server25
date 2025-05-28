// import functions from Persistence
import {
  save,
  getAll,
  getById,
  deleteById,
  updateById,
} from '../persistence/products.persistence.js';

class ProductsController {

  async createProduct(req, res) {
    try {
      res.status(201).json({ message: 'Product created successfully' });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllProducts(req, res) {
    try {
      res.status(200).json({ message: 'Peticion exitosa' });
    } catch (error) {
      console.log(error);
    }
  }

  async productById(req, res) {
    try {
      res.status(200).json({ message: 'Peticion exitosa' });
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ProductsController();
