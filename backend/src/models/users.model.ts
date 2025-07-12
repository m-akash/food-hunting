import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  id: string;
  name: string;
  email: string;
  password?: string;
  createdAt: Date;
  lastLogin?: Date;
  role: 'user' | 'admin';
}

const UsersSchema = new Schema<IUser>({
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
    unique: true,
  },
  password: {
    type: String,
    required: false,
    validate: {
      validator: function (v: string) {
        return !v || v.length >= 8;
      },
      message: "Password must be at least 8 characters long",
    },
  },
  createdAt: {
    type: Date,
    default: () => new Date(),
  },
  lastLogin: {
    type: Date,
    default: null,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export default mongoose.model<IUser>("users", UsersSchema); 