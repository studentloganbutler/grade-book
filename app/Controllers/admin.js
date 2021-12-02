import config from "../config.js";
import client from "../client.js";

const admin = client.db(config.db.name).collection("admin");

export default {
  create(username, password) {
    // Check for existing user in database
    console.log(username, password, "from admin controller");
  },
};
