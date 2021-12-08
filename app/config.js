import dotenv from "dotenv";

dotenv.config();

export default {
  baseUrl: process.env.BASE_URL || "http://localhost",
  db: {
    name: "gradeBookDatabase",
    url: process.env.MONGO_URI,
  },
  encryption: {
    expiresIn: process.env.EXPIRES_IN || "1d",
    saltRounds: process.env.SALT_ROUNDS || 10,
    secret: process.env.ENCRYPTION_SECRET || "secret",
  },
  port: process.env.PORT || 3000,
};
