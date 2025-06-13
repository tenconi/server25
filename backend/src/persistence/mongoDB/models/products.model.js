import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  prodName: {
    type: String,
    required: true,
  },
  prodPrice: {
    type: Number,
    required: true,
  },
  prodStock: {
    type: Number,
    required: true,
  },
 image:{
    type: String,
    default: null, // Permite que la imagen sea opcional
  }
},  { timestamps: true });

export const productsModel = mongoose.model('Products', productSchema);
