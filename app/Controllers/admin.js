import config from "../config.js";
import client from "../client.js";

const admin = client.db(config.db.name).collection("admin");

export default {
  async create(username, password) {
    // Check for existing user in database
    const existingUser = admin.findOne({ username });

    if (existingUser) {
      throw new Error("User already exists");
    }

    // TODO: encrypt password

    // TODO: Insert one admin into database

    // TODO:
  },
  async show(username, password) {},
};
