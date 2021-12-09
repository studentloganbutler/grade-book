import { Router } from "express";
import studentController from "../controllers/studentController";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello there from Student!");
});

router.post("/", async (_, res) => {
  const student = await studentController.index();
  res.json(student);

  // else UNAUTHORIZED
});

export default router;
