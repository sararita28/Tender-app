import mongoose from "mongoose";

const CardSchema = new mongoose.Schema({
  name: String,
  bio: String,
  age: String,
});

export default mongoose.model("Card", CardSchema);
 