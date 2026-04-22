import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes";
import chatRoutes from "./routes/chatRoutes";
import messageRoutes from "./routes/messageRoutes";
import userRoutes from "./routes/userRoutes";

import { clerkMiddleware } from '@clerk/express'


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware())

app.get("/health", (req, res) => {
    res.json({ message: "OK", statueCode: 200 });
})

app.use("/api/auth", authRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

export default app;



