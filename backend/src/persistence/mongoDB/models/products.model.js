import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  prodName: {
    type: String,
    required: true,
  },
  prodDescription: {
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
});

export const productsModel = mongoose.model('Products', productSchema);
