import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import client from "../client.js";
import config from "../config.js";

const admin = client.db(config.db.name).collection("admin");

export default {
  async create({ username, password, role }) {
    // Check for existing user in database
    // Remember to add await to async functions
    const existingUser = await admin.findOne({ username });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hash = await bcrypt.hash(password, 10);

    return admin.insertOne({ username, password: hash, role });
  },
  async show({ username, password }) {
    const user = await admin.findOne({ username });
    console.log(user, username, password);

    const valid = await bcrypt.compare(password, user.password);

    if (!user) {
      throw new Error("Unable to log in");
    }

    if (!valid) {
      throw new Error("Invalid login");
    }

    return jwt.sign({ username, role: user.role }, config.encryption.secret, {
      expiresIn: config.encryption.expiresIn,
    });
  },
};
