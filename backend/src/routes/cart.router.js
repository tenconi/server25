import express from 'express';
import { authMiddleware } from '../middlewares/auth.js';
import User from '../persistence/mongoDB/models/user.model.js';
const router = express.Router();

// POST /cart/add
router.post('/add', authMiddleware, async (req, res) => {
  const { productId, quantity } = req.body;

  try {
    const user = await User.findById(req.user.id); // Suponiendo que el middleware de autenticación agrega el ID del usuario a req.user

    // Buscar si ya está el producto en el carrito
    const existingItem = user.cart.find(
      (item) => item.product.toString() === productId
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      user.cart.push({ product: productId, quantity });
    }

    await user.save();
    res.json(user.cart);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: '❌ Error adding to cart: Internal server error' });
  }
});
