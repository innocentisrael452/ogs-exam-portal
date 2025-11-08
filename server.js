import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// Load environment variables
dotenv.config();

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Determine directory name (for ES modules)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ----------------------------
// ✅ MongoDB Connection Setup
// ----------------------------
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ----------------------------
// ✅ Routes Setup
// ----------------------------

// Example: Basic root route to verify API is live
app.get("/", (req, res) => {
  res.send("OGS Exam Portal Backend is Running ✅");
});

// Import your API routes here (if any)
import fs from "fs";

const routesPath = path.join(__dirname, "routes");
if (fs.existsSync(routesPath)) {
  fs.readdirSync(routesPath).forEach((file) => {
    if (file.endsWith(".js")) {
      import(`./routes/${file}`).then((routeModule) => {
        if (routeModule.default) {
          app.use("/api", routeModule.default);
          console.log(`✅ Loaded route: ${file}`);
        }
      });
    }
  });
}

// ----------------------------
// ✅ Serve Frontend (for production)
// ----------------------------
const clientBuildPath = path.join(__dirname, "../client/build");
if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));
  app.get("*", (req, res) => {
    res.sendFile(path.join(clientBuildPath, "index.html"));
  });
}

// ----------------------------
// ✅ Server Listen
// ----------------------------
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
