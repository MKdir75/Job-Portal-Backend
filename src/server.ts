import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import jobRoutes from "./routes/jobRoutes";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

dotenv.config();
connectDB();

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);


const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: { origin: "http://localhost:3000" }
});

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

const PORT = process.env.PORT || 4000;
httpServer.listen(PORT, () => console.log(`Server running on port ${PORT}`));
