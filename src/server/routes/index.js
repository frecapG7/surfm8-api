import express from "express";
import meetings from "./meetings.js";

const app = express();
app.use(express.json());
app.use(meetings);

export default app;
