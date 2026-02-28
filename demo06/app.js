import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./configs/dbConnection.js";
import authecticationRoute from "./routes/authenticationRoute.js";
import adminRoute from "./routes/adminRoute.js";
import mentorRoute from "./routes/mentorRoute.js";
import studentRoute from "./routes/studentRoute.js";

dotenv.config();
dbConnect();
const app = express();

const port = process.env.PORT;
app.use(express.json());

app.use("/authentication", authecticationRoute);
app.use("/admin", adminRoute);
app.use("/mentor", mentorRoute);
app.use("/student", studentRoute);

app.listen(port, () => {
  console.log(`Server is Running at Port :${port}`);
});
