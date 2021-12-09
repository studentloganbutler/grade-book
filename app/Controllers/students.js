import client from "../client.js";
import config from "../config.js";

const student = client.db(config.db.name).collection("students");

export default {
  index() {
    return student.find().toArray();
  },
};
