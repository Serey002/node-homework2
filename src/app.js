import express from "express";
import userRoutes from "./routes/UserRoutes.js";

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api", userRoutes);

// Home Route
app.get("/api", (req, res) => {
  res.json({
    message: "Welcome to Professional Node.js MVC API",
  });
});

export default app;