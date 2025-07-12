import mongoose, { Document, Schema } from 'mongoose';

export interface IPayment extends Document {
  id: string;
  email: string;
  totalPrice: number;
  transactionId: string;
  date: Date;
  cartId: string[];
  menuItemId: string[];
  status: 'pending' | 'success';
}

const paymentSchema = new Schema<IPayment>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  transactionId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: () => new Date(),
  },
  cartId: {
    type: [String],
    required: true,
  },
  menuItemId: {
    type: [String],
    required: true,
  },
  status: {
    type: String,
    enum: ["pending", "success"],
    default: "pending",
  },
});

export default mongoose.model<IPayment>("payments", paymentSchema); 