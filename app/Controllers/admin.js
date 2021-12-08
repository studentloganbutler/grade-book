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

    // TODO: encrypt password
    const hash = await bcrypt.hash(password, 10);

    // TODO: Insert one admin into database

    return admin.insertOne({ username, password: hash });
  },
  // async show(username, password) {},
};
