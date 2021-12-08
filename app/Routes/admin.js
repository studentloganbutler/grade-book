import { Router } from "express";
import adminController from "../controllers/admin.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello there from Admin!");
});

router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;
    const newUser = await adminController.create(username, password);
    res.send(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
