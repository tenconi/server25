import  ProductsService  from '../services/products.service.js';

const service = new ProductsService();

class ProductsController {
  async create(req, res) {
    try {
      const newProduct = await service.createProduct(req.body);
      res.status(201).json(newProduct);
    } catch (err) {
      res
        .status(500)
        .json({ error: 'Error al crear producto', details: err.message });
    }
  }

  async getAll(req, res) {
    try {
      const products = await service.getAllProducts();
      res.status(200).json(products);
    } catch (err) {
      res
        .status(500)
        .json({ error: 'Error al obtener productos', details: err.message });
    }
  }
}

export default ProductsController