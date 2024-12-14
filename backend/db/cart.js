const mongoose = require("mongoose");
const { config } = require("dotenv");

// Load environment variables for local testing
config({ path: "./config/config.env" });

const DB_URL = process.env.DB_URL;

// Check if DB_URL exists
if (!DB_URL) {
  console.error("Error: DB_URL is not defined in environment variables");
  process.exit(1); // Exit process if DB_URL is missing
}

mongoose.connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected successfully"))
.catch((err) => console.error("MongoDB connection error:", err));
