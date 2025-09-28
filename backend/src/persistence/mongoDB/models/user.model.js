import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, //quita espacios blancos al principio
  },
  email: {
    type: String,
    required: true,
    unique: true, // No puede haber dos usuarios con el mismo email
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role:{
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId, // Referencia al ID del carrito
      ref: 'Cart', // Nombre del modelo de carrito
    },
  ],
  orders:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order', // Nombre del modelo de ordenes que creamos
  }]

});

usersSchema.pre('find', function (next) {
  this.populate('cart'); // Asegura que al buscar usuarios, se rellene el campo 'cart' con los datos del carrito
  next();
});

export default mongoose.model('User', usersSchema);
