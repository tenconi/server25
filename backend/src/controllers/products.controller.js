import ProductsService from '../services/products.service.js';
import fs from 'fs'; // lo traigo para eliminar img
import path from 'path'; // lo traigo para eliminar img

const service = new ProductsService();

class ProductsController {
  async create(req, res) {
    // console.log('Body:', req.body);
    // console.log('File:', req.file);
    // console.log('Datos a guardar en Mongo:', { name, price, stock, image });

    try {
      // const { name, price, stock } = req.body;

      // * * * multiple file upload * * *
      const { prodName, prodPrice, prodStock } = req.body;
      const images = req.files ? req.files.map((file) => file.filename) : [];

      // * * * single file upload * * *
      // const prodName = req.body.name;
      // const prodPrice = parseFloat(req.body.price);
      // const prodStock = parseInt(req.body.stock, 10);

      // const image = req.file ? req.file.filename : null;

      const newProduct = await service.createProduct({
        prodName,
        prodPrice: parseFloat(prodPrice),
        prodStock: parseInt(prodStock, 10),
        images,
      });
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

  async getById(req, res) {
    const product = await service.getById(req.params.id);
    if (!product) return res.status(404).json({ msg: 'No encontrado' });
    res.status(200).json(product);
  }

  async deleteById(req, res) {
    try {
      const product = await service.getById(req.params.id);
      if (!product) return res.status(404).json({ msg: 'No encontrado' });

      // 🧹 Eliminar archivos de imagen del servidor
      if (product.images && product.images.length > 0) {
        product.images.forEach((filename) => {
          const imagePath = path.join(process.cwd(), 'uploads', filename);
          if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath); // elimina la imagen
          }
        });
      }
      // 🗑️ Eliminar producto de la base de datos
      await service.deleteById(req.params.id);
      res.status(200).json({ msg: 'Producto eliminado' });
    } catch (err) {
      res;
      console.error('❌ Error al eliminar producto:', err);
      res
        .status(500)
        .json({ error: 'Error al eliminar producto', details: err.message });
    }
  }
}

export default ProductsController;
