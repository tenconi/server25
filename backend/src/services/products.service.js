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

  async deleteById(id) {
    const product = await productsModel.findByIdAndDelete(id);
    if (!product) throw new Error('Product not found');
    return product;
  }
}
export default ProductsService;
