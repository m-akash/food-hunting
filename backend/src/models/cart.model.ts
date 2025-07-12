import mongoose, { Document, Schema } from 'mongoose';

export interface ICart extends Document {
  id: string;
  itemId: string;
  userEmail: string;
  foodName: string;
  foodImg: string;
  foodCategory: string;
  price: number;
}

const cartSchema = new Schema<ICart>({
  id: {
    type: String,
    required: true,
  },
  itemId: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  foodName: {
    type: String,
    required: true,
  },
  foodImg: {
    type: String,
    required: true,
  },
  foodCategory: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<ICart>("carts", cartSchema); 