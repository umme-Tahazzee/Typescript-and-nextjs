import mongoose, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string; //typestring string is smaller
  createAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String, //mongoose string is capital
    required: true,
  },
  createAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string; //typestring string is smaller
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpire: Date;
  isVarified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String, //mongoose string is capital
    required: [true, "Username is required"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Username is required"],
    unique: true,
    match: [/.+\@.+\..+/, "please use a valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  verifyCode: {
    type: String,
    required: [true, "verify code is required"],
  },
  verifyCodeExpire: {
    type: Date,
    required: [true, "Verify code is required"],
  },
  isVarified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: {
    type: Boolean,
    default: false,
  },
  messages: [MessageSchema],
});

 const UserModel = (mongoose.models.User as mongoose.Model<User>) ||  mongoose.model<User>("User", UserSchema)


export default UserModel