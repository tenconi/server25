import { Router } from 'express';
// import Class from Controllers
import ProductsController from '../controllers/products.controller.js';
import { upload } from '../middlewares/upload.js'; // Ruta para subir producto con imagen

const router = Router();
const controller = new ProductsController();

router.get('/', (req, res) => controller.getAll(req, res));
router.post('/', upload.single('image'), (req, res) => controller.create(req, res));

// router.get('/:id', UserController.getById);

// router.post('/', ProductsController.);
// router.get('/', UserController.getAll);
// router.put('/:id', UserController.update);
// router.delete('/:id', UserController.delete);

export default router;
