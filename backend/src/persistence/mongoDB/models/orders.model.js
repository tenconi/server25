import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Products',
          required: true,
        },
        quantity: { type: Number, required: true, default: 1 },
      },
    ],
    totalPrice: { type: Number, required: true },
    status: {
      type: String,
      enum: ['pending', 'shipped', 'delivered'],
      default: 'pending',
    },
    createdAt: { type: Date, default: Date.now },
    default: 'pending',
  },
  { timestamps: true }
);

orderSchema.pre('find', function (next) {
  this.populate('products');
  next();
});

export const orderModel = mongoose.model('Order', orderSchema);
