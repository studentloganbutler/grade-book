import { Router } from "express";
import studentController from

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello there from Student!");
});

router.post("/register", async (req, res) => {
  const { username, password } = req.body;

await studentController.create(username, password);
const token = await studentController.login(username, password);
});

export default router;
