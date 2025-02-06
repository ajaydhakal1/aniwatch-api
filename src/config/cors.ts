import { config } from "dotenv";
import { cors } from "hono/cors";

config(); // Load environment variables

// Set up allowed origins from environment variable or default to localhost and "*" for wildcard
const allowedOrigins = process.env.ANIWATCH_API_CORS_ALLOWED_ORIGINS
  ? process.env.ANIWATCH_API_CORS_ALLOWED_ORIGINS.split(",")
  : ["http://localhost:5173", "*"];

// CORS configuration
const corsConfig = {
  allowMethods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  maxAge: 600,            // Preflight request cache duration in seconds
  credentials: true,      // Allow credentials (cookies, authorization headers, etc.)
  origin: allowedOrigins, // Allowed origins (can be an array or string)
};

export default cors(corsConfig); // Apply CORS middleware with the config
