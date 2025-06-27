import express from "express";
import {
  create,
  getByUsername,
  verifyUsernameUnicity,
} from "../service/users/usersService.js";
const app = express();

app.get("/users/:username", async (req, res) => {
  const user = await getByUsername(req.params.username);
  res.send(user);
});

app.post("/users", async (req, res) => {
  const user = await create(req.body);
  res.status(201).send(user);
});

/**
 * Verify username unicity
 */
app.get("/users/verify/:username", async (req, res) => {
  const usernameExist = await verifyUsernameUnicity(req.params.username);
  if (usernameExist) res.status(400).send("Username already exist");
  else res.status(200).send("Username available");
});

export default app;
