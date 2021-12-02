import { Router } from "express";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello there from Admin!");
});

router.post("/register", (req, res) => {
  console.log(req.body);
  res.send("Post request to register");
});

export default router;
