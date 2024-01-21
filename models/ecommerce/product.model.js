import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String, // that would be a url
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    catagory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Catagory',
    },
    ownedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model('Product', productSchema);
