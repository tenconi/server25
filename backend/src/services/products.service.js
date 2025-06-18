import { productsModel } from './../persistence/mongoDB/models/products.model.js';

class ProductsService {
  async createProduct(data) {
    const product = new productsModel(data);
    return await product.save();
  }

  async getAllProducts() {
    return await productsModel.find();
  }

  async getById(id) {
    return await productsModel.findById(id);
  }
}
export default ProductsService;
