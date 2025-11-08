import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";

import pinsRouter from "./routes/pins.js";
import examsRouter from "./routes/exams.js"; // ✅ add this

dotenv.config();

const app = express(); // ✅ moved up before using app

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/ogs_exam_portal";

mongoose.connect(process.env.MONGO_URI)

  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// API routes
app.use("/api/pins", pinsRouter);
app.use("/api/exams", examsRouter);

// Static file handling (for production)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

if (process.env.NODE_ENV === "production") {
  const clientBuild = path.join(__dirname, "../client/build");
  app.use(express.static(clientBuild));
  app.get("*", (req, res) =>
    res.sendFile(path.join(clientBuild, "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("OGS Exam Portal backend is running..."));
}

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
