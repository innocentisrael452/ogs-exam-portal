import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import pinsRouter from "./routes/pins.js";
import examsRouter from "./routes/exams.js";
dotenv.config();
const app = express();
app.use(express.json()); app.use(cors());
const mongoURI = process.env.MONGO_URI || "mongodb://localhost:27017/ogs_exam_portal";
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB error", err));
app.use("/api/pins", pinsRouter); app.use("/api/exams", examsRouter);
const __filename = fileURLToPath(import.meta.url); const __dirname = path.dirname(__filename);
if (process.env.NODE_ENV === "production") { const clientBuild = path.join(__dirname, "../client/build"); app.use(express.static(clientBuild)); app.get("*",(req,res)=> res.sendFile(path.join(clientBuild,"index.html"))); } else { app.get("/", (req,res)=> res.send("OGS Exam Portal backend")); }
const PORT = process.env.PORT || 5000; app.listen(PORT, ()=> console.log(`Server running on ${PORT}`));
