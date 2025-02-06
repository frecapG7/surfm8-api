import { NotFoundError } from "../../errors/errors.js";
import User from "../../model/User.js";

export const getByUsername = async (username) => {
  // 1 - Get User
  const user = await User.findOne({ username });
  if (!user) throw new NotFoundError("User not found");

  return user;
};

export const create = async ({ username, email, password, avatar }) => {
  // 1 - verify username unicity
  if (await verifyUsernameUnicity(username))
    throw new Error("Username already exist");
  if (await verifyEmailUnicity(email)) throw new Error("Email already exist");

  // 2 - Create user
  const user = new User({ username, email, avatar });
  user.setPassword(password);

  return await user.save();
};

export const verifyUsernameUnicity = async (username) => {
  return await User.exists({ username });
};

export const verifyEmailUnicity = async (email) => {
  return await User.exists({ email });
};
