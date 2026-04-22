import mongoose from "mongoose";
import dns from "node:dns";

export const connectDB = async () => {
    try {
        // Override DNS servers to handle SRV resolution issues in some environments
        dns.setServers(["8.8.8.8", "8.8.4.4"]);

        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error("MONGODB_URI environment variable is not defined");
        }

        await mongoose.connect(mongoUri);
        console.log("✅ MongoDB connected successfully");
    } catch (error) {
        console.error("❌ MongoDB connection error:", error);
        process.exit(1); // exit with failure
    }
};

