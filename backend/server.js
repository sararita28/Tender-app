import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
const port = process.env.port || 3000;
import authRoute from "./routes/auth.js";
import cardsRoute from "./routes/cards.js";
import usersRoute from "./routes/users.js";
//import profileImagesRoute from "./routes/profileImages.js";

//App config
const app = express();

//Dotenv config
dotenv.config();

//Middlewares
app.use(express.json());
app.use(cors());

//DB config
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log(`Connected to MongoDB`))
  .catch((err) => {
    console.log(err);
  });

//API endpoints
app.get("/", (req, res) => {
  res.status(200).send("Backend running");
});

app.use("/api/auth", authRoute);
app.use("/api/cards", cardsRoute);
app.use("/api/users", usersRoute);
//app.use("/api/chats", chatsRoute);
//app.use("/api/upload", profileImagesRoute);

//Listener
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
