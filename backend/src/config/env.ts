import dotenv from "dotenv";

dotenv.config();

if (!process.env.OPEN_ROUTER_API_KEY) {
  throw new Error("Missing Open Router API Key.");
}

const env = {
  PORT: process.env.PORT || "4000",
  FRONTEND_URL: process.env.FRONTEND_URL || "http://localhost:5173",
  OPEN_ROUTER_API_KEY: process.env.OPEN_ROUTER_API_KEY || "",
};

export default env;
