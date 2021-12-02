import { Router } from "express";
import adminRouter from "./admin.js";
import studentsRouter from "./students.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.use("/admin", adminRouter);

router.use("/students", studentsRouter);

export default router;
