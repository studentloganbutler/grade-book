import { Router } from "express";
import adminController from "../controllers/admin.js";
import Admin from "../models/Users/admin.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello there from Admin!");
});

router.post("/register", async (req, res) => {
  try {
    const admin = new Admin(req.body);
    const errors = admin.validate();

    if (errors.length) {
      throw new Error(errors.join("\n"));
    }

    await adminController.create(admin);
    const token = await adminController.show(admin);

    res.status(201).send(token);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const token = await adminController.show(req.body);
    res.status(200).json({ token });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;
