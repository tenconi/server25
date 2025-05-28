import mongoose from 'mongoose';

const cartSchema = new mongoose.Schema({
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId, // Referencia al ID del producto
      ref: 'Products', // Nombre del modelo de productos
      required: true, // Asegura que cada producto en el carrito sea obligatorio
      default: [], // Valor por defecto para el carrito vacío
    },
  ],
});

cartSchema.pre('find', function (next) {
  this.populate('products'); 
  next();
});

export const cartModel = mongoose.model('Cart', cartSchema);
