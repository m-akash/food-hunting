import mongoose, { Document, Schema } from 'mongoose';

export interface IMenu extends Document {
  id: string;
  name: string;
  desc: string;
  image: string;
  category: string;
  price: number;
  recipe?: string;
}

const menuSchema = new Schema<IMenu>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  recipe: {
    type: String,
  },
});

export default mongoose.model<IMenu>("foodMenu", menuSchema); 