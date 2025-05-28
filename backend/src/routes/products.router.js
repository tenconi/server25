import { Router } from "express";
// import Class from Controllers
import UserController from "../controllers/users.controller.js";

const router = Router();

router.get('/', UserController.getAll);
router.get('/:id', UserController.getById);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);



export default router;