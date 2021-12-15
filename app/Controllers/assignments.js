import client from "../client.js";
import config from "../config.js";

const assignments = client.db(config.db.name).collection("assignments");

export default {
  create(newAssignment) {
    return assignments.insertOne(newAssignment);
  },
};
