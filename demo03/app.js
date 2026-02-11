import express from "express";
import dotenv from "dotenv";
import { dbConnect } from "./configs/dbConnection.js";
import profileRoute from "./routes/profileRoute.js";
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";

dotenv.config();

dbConnect();
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/profile",profileRoute);
app.use("/user",userRoute);
app.use("/post",postRoute);

app.listen(port,()=>{
    console.log(`Server is Running at Port:${port}`);
})