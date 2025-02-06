import mongoose from "mongoose";
import "dotenv/config";

mongoose.set("debug", true);
console.log(process.env.DB_URI);
mongoose.connect(process.env.DB_URI, {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

export default mongoose;
