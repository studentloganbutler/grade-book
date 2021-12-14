import { Router } from "express";
import adminRouter from "./admin.js";
import assignmentRouter from "./assignments.js";
import studentsRouter from "./students.js";

const router = new Router();

router.get("/", (_, res) => {
  res.send("Hello World!");
});

router.use("/admin", adminRouter);

router.use("/students", studentsRouter);

router.use("/assignments", assignmentRouter);

export default router;
