import express from "express";
import Pin from "../models/Pin.js"; // adjust path if needed

const router = express.Router();

// Example routes
router.post("/", async (req, res) => {
  try {
    const newPin = new Pin(req.body);
    const savedPin = await newPin.save();
    res.status(201).json(savedPin);
  } catch (err) {
    console.error("Error creating pin:", err);
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const pins = await Pin.find();
    res.status(200).json(pins);
  } catch (err) {
    console.error("Error fetching pins:", err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
