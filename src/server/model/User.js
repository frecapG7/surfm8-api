import mongoose from "mongoose";
import crypto from "crypto";

const UserSchema = new mongoose.Schema({
  avatar: {
    type: String,
    required: false,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  hash: {
    type: String,
    required: false,
  },
  salt: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Method to set salt and hash password for user
UserSchema.methods.setPassword = function (password) {
  // Creating a unique salt
  this.salt = crypto.randomBytes(16).toString("hex");

  // hashing password and salt
  this.hash = crypto
    .pbkdf2Sync(password, this.salt, 100, 64, "sha512")
    .toString("hex");
};

// Method to validate password
UserSchema.methods.validPassword = function (password) {
  var hash = crypto
    .pbkdf2Sync(password, this.salt, 100, 64, "sha512")
    .toString("hex");
  return this.hash === hash;
};

export default new mongoose.model("User", UserSchema);
