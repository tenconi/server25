import { Router } from "express";
// import Class from Controllers
import { getAllProducts, productById, createProduct } from "../controllers/products.controller.js";

const router = Router();

router.post('/add', createProduct)

router.get('/', getAllProducts)

router.get('/:prodId', productById)

router.put('/edit', importClassFromController)

router.delete('/delete', importClassFromController)



export default router;