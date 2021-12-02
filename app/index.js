import express from "express";
import config from "./config.js";
import router from "./routes/index.js";

const app = express();

app.use(express.json());
app.use("/api", router);

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.listen(config.port, () => {
  console.log("Server running on port 3000");
});
