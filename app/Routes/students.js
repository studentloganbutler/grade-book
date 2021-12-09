import { Router } from "express";
import studentController from "../controllers/students.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello there from Student!");
});

router.post("/", async (req, res) => {
  console.log(req.isAuth);

  if (req.isAuth) {
    const student = await studentController.index();
    res.json(student);
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
});

export default router;
