import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./configs/dbConnection.js";
import courseRoute from "./routes/courseRoute.js";
import studentRoute from "./routes/studentRoute.js";
import enrollRoute from "./routes/enrollmentRoute.js";

dotenv.config();
dbConnect();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/students", studentRoute);
app.use("/enrollments", enrollRoute);
app.use("/courses", courseRoute);

app.listen(port, () => {
  console.log(`Server is Running at Port:${port}`);
});
