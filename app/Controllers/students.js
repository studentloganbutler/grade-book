import { ObjectId as objectID } from "mongodb";
import client from "../client.js";
import config from "../config.js";

const studentsClient = client.db(config.dbName).collection("students");

export default {
  index() {
    return studentsClient.find().toArray();
  },
  async update(id, grade) {
    const studentQuery = {
      _id: objectID(id),
      "grades._id": objectID(grade._id),
    };
    const updateGrade = {
      $set: {
        "grades.$.pointsEarned": grade.pointsEarned,
      },
    };
    return studentsClient.updateOne(studentQuery, updateGrade);
  },
};
