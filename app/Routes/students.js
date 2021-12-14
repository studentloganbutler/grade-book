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

export default router;
