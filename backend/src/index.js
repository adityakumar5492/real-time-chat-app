import express from "express";
import dotenv from "dotenv";
dotenv.config();

import http from "http";
import cookieParser from "cookie-parser";
import cors from "cors";
import { connectDB } from "./lib/db.js";

import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { initSocket } from "./lib/socket.js";

const app = express();
const server = http.createServer(app);

// socket init
initSocket(server);

const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "*" }));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// DB connect
connectDB();

// Start server
server.listen(PORT, () => {
  console.log("Server running on PORT:", PORT);
});