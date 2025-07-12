import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  id: string;
  name: string;
  details: string;
  rating: number;
}

const reviewSchema = new Schema<IReview>({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  details: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
});

export default mongoose.model<IReview>("reviews", reviewSchema); 