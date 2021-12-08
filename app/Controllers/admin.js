import config from "../config.js";
import client from "../client.js";
import bcrypt from "bcrypt";

const admin = client.db(config.db.name).collection("admin");

export default {
  async create(username, password) {
    // Check for existing user in database
    const existingUser = admin.findOne({ username });

    if (existingUser) {
      throw new Error("User already exists");
    }

    const hash = await bcrypt.hash(password, 10);

    return admin.insertOne({ username, password: hash });
  },
  async show(username, password) {
    const user = await admin.findOne({ username });

    if (!user) {
      throw new Error("Unable to log in");
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new Error("Invalid login");
    }

    return user;
  },
};
