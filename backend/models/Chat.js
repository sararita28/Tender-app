import mongoose from "mongoose";

const ChatSchema = new mongoose.Schema({
  name: String,
  profilePic: String,
});

export default mongoose.model("Chats", ChatSchema);
