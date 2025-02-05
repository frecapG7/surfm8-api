import express from "express";
const app = express();
import { postMeeting } from "../service/meetings/meetingsService.js";

app.get("/meetings", async (req, res) => {
  res.send("Hello Vite + Vue!");
});

app.post("/meetings", async (req, res) => {
  await postMeeting(req?.body, req.user);
  res.send("Hello Vite + Vue!");
});

export default app;
