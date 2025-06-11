import { Router } from "express";
// import Class from Controllers
import  ProductsController  from "../controllers/products.controller.js";

const router = Router();
const controller = new ProductsController();

router.post('/', (req, res) => controller.create(req, res));
router.get('/', (req, res) => controller.getAll(req, res));

// router.post('/', ProductsController.);
// router.get('/', UserController.getAll);
// router.get('/:id', UserController.getById);
// router.put('/:id', UserController.update);
// router.delete('/:id', UserController.delete);



export default router;``