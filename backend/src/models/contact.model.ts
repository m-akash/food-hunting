import mongoose, { Document, Schema } from 'mongoose';

export interface IContact extends Document {
  id: string;
  name: string;
  email: string;
  message: string;
}

const contactSchema = new Schema<IContact>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

export default mongoose.model<IContact>("contact", contactSchema); 