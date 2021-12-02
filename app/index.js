import express from "express";
import config from "./config.js";

const app = express();

app.get("/", (_, res) => {
  res.send("Hello World");
});

app.listen(config.port, () => {
  console.log("Server running on port 3000");
});
