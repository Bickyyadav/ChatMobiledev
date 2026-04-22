import app from "./src/app";
import { connectDB } from "./src/config/database";

const PORT = process.env.PORT || 3000;


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
}).catch((error) => {
    console.error(`Failed to connect to MongoDB: ${error}`);
});
