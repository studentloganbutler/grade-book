import { Router } from "express";
import assignmentsController from "../controllers/assignments.js";

const router = new Router();

router.post("/", async (req, res) => {
  if (req.isAuth) {
    const spit = await assignmentsController.create(req.body);

    res.status(201).json({ spit });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

export default router;
