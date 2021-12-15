import { Router } from "express";
import assignmentsController from "../controllers/assignments.js";
import Assignment from "../models/assignment.js";

const router = new Router();

router.post("/", async ({ isAuth, body }, res) => {
  try {
    if (isAuth?.role === "ADMIN") {
      const assignment = new Assignment(body);

      const error = assignment.validate();

      if (error.length) {
        throw new Error(error.join("\n"));
      }

      const resp = await assignmentsController.create(body);

      res.status(201).json({ resp });
    } else {
      res.status(401).json({ message: "Unauthorized" });
    }
  } catch ({ message }) {
    res.status(400).json({ message });
  }
});

export default router;
