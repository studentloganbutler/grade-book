import User from "./User.js";

export default class Admin extends User {
  constructor({ username, password }) {
    super({ username, password });
    this.role = "ADMIN";
  }

  validate() {
    const errors = [];

    if (this.username.length < 3) {
      errors.push("Username  must be at least 3 characters long");
    }

    if (this.password < 3) {
      errors.push("Password must be at least 3 characters long");
    }

    return errors;
  }
}
