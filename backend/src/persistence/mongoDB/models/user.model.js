import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    surname:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true, // No puede haber dos usuarios con el mismo email
    },
    birthdate:{
        type: Date,
        required: true,
    },
    avatar:{
        type: String,
        default: 'https://www.gravatar.com/avatar/'
    },
        cart:[{
                type: mongoose.Schema.Types.ObjectId, // Referencia al ID del carrito
                ref: 'Cart', // Nombre del modelo de carrito
            }]

})

userSchema.pre('find', function (next) {
  this.populate('cart'); // Asegura que al buscar usuarios, se rellene el campo 'cart' con los datos del carrito
  next();
});

export const userModel = mongoose.model('User', userSchema)