import express from "express";
import UserController from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", (req, res) =>
    UserController.getAllUsers(req, res)
);

router.get("/users/:id", (req, res) =>
    UserController.getUserById(req, res)
);

router.post("/users", (req, res) =>
    UserController.createUser(req, res)
);

router.put("/users/:id", (req, res) =>
    UserController.updateUser(req, res)
);

router.delete("/users/:id", (req, res) =>
    UserController.deleteUser(req, res)
);

export default router;