import dotenv from "dotenv";
import app from "./app.js";
import Database from "./config/database.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

async function startServer() {
  try {
    // Test database connection
    const connection = await Database.pool.getConnection();

    console.log("Database connected successfully");

    connection.release();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Database connection failed:", error.message);
  }
}

startServer();