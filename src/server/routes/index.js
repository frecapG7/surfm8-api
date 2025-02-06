import express from "express";
import meetings from "./meetings.js";
import users from "./users.js";

const app = express();
app.use(express.json());
app.use(meetings);
app.use(users);

export default app;
