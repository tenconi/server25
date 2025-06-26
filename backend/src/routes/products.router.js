import { Router } from 'express';
// import Class from Controllers
import ProductsController from '../controllers/products.controller.js';
import { upload } from '../middlewares/upload.js'; // Ruta para subir producto con imagen

const router = Router();
const controller = new ProductsController();

router.get('/', (req, res) => controller.getAll(req, res));
router.post('/', upload.array('images', 5), (req, res) => controller.create(req, res)); // multiple file upload // "images" debe coincidir con el nombre del input del frontend. El 5 es el número máximo de archivos permitidos.
// router.post('/', upload.single('image'), (req, res) => controller.create(req, res)); // single file upload
router.get('/:id', (req, res) => controller.getById(req, res)); 
router.delete('/:id', (req, res) => controller.deleteById(req, res)); 

// router.post('/', ProductsController.);
// router.get('/', UserController.getAll);
// router.put('/:id', UserController.update);
// router.delete('/:id', UserController.delete);

export default router;
