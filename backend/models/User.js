import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: false,
    },
    age: {
      type: String,
      required: true,
    },
    gender: {
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
      required: true,
    },
    profilePic: {
      type: String,
      default: "",
      required: false,
    },
    genderOfInterest: {
      type: Array,
      required: true,
    },
    bio: {
      type: String,
      required: true,
    },
    matches: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
