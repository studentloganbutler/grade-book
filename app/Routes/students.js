import { Router } from "express";
import studentController from "../controllers/students.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello there from Student!");
});

router.post("/", async ({ isAuth }, res) => {
  if (isAuth.role === "ADMIN") {
    const student = await studentController.index();
    res.json(student);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

router.post("/:id", async ({ isAuth, params, body }, res) => {
  if (isAuth?.role === "ADMIN") {
    try {
      const student = await studentController.show(params.id, body);
      res.json(student);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

router.put("/:id/:gradeId", async ({ isAuth, params, body }, res) => {
  if (isAuth?.role === "ADMIN") {
    try {
      const update = await studentController.update(params.id, params.id, body);
      res.status(200).json(update);
    } catch ({ message }) {
      res.status(500).json({ message });
    }
  }
});

export default router;
