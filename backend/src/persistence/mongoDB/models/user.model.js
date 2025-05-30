import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // No puede haber dos usuarios con el mismo email
  },
  birthdate: {
    type: Date,
    required: true,
  },
  cart: [
    {
      type: mongoose.Schema.Types.ObjectId, // Referencia al ID del carrito
      ref: 'Cart', // Nombre del modelo de carrito
    },
  ],

});

usersSchema.pre('find', function (next) {
  this.populate('cart'); // Asegura que al buscar usuarios, se rellene el campo 'cart' con los datos del carrito
  next();
});

export default mongoose.model('User', usersSchema);
