import express from "express";

import { config } from "./src/db/config.js";

import user from "./src/routes/phoneRoutes.js";

const app = express();

user(app);

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(config.port, () => {
  console.log(` Server is running on port ${config.port}`);
});
