import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./configs/dbConnection.js";
import userRoute from "./routes/userRoute.js";
import taskRoute from "./routes/taskRoute.js";

const app = express();
dotenv.config();
dbConnect();

const port = process.env.PORT;

app.use(express.json());

app.use("/user", userRoute);
app.use("/task", taskRoute);

app.listen(port, () => {
  console.log(`Server is running at Port ${port}`);
});
