import client from "../client.js";
import config from "../config.js";

const assignments = client.db(config.db.name).collection("assignments");

export default {
  async create(newAssignment) {
    const result = await assignments.insertOne(newAssignment);
    return result;
  },
};
