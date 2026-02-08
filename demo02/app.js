import express from "express";
import dotenv from "dotenv";
import contactRoute from "./routes/contactRoutes.js";
import userRoute from "./routes/userRoute.js";
import { dbConnect } from "./configs/dbConnection.js";

dotenv.config();
dbConnect();
const app = express();
const port = process.env.PORT;

 
app.use(express.json());
app.use("/user",userRoute);
app.use("/contact",contactRoute);
    

app.listen(port,()=>{
    console.log(`Server is running Port : ${port}`);
}) 

