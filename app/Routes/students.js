import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello there from Student!");
});

export default router;
