import express from "express";
import ViteExpress from "vite-express";

import rooter from "./routes/index.js";

const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello Vite + Vue!");
});

app.use(rooter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000...")
);
