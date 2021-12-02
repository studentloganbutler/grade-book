import { Router } from "express";
import adminController from "../controllers/admin.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello there from Admin!");
});

router.post("/register", (req, res) => {
  const { username, password } = req.body;
  adminController.create(username, password);
  res.send("Post request to register");
});

export default router;
