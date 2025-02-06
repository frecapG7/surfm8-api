import express from "express";
const app = express();
import { create } from "../service/meetings/meetingsService.js";

app.get("/meetings", async (req, res) => {
  res.send("Hello Vite + Vue!");
});

app.post("/meetings", async (req, res) => {
  await create(req?.body);
  res.send("Hello Vite + Vue!");
});

app.get("/meetings/:id/messages", async (req, res) => {
  res.send("Hello Vite + Vue!");
});

app.post("/meetings/:id/messages", async (req, res) => {
    


});
export default app;
