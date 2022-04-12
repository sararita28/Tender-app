import express from "express";
const router = express.Router();
import Card from "../models/Card.js";
import User from "../models/User.js";

//Create a card (is this really necessary?)
router.post("/", (req, res) => {
  const card = req.body;
  Card.create(card, (err, data) => {
    if (err) res.status(500).send(err);
    else res.status(201).send(data);
  });
});

//Get all cards
router.get("/", (req, res) => {
  User.find((err, data) => {
    if (err) res.status(500).send(err);
    else res.status(200).send(data);
  });
});

//Create a get function to find a particular username's card?
router.get("/:id", async (req, res) => {
  try {
    const user = await Card.findById(req.params.id);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

export default router;
