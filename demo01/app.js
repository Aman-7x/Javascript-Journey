import express from "express";
import dotenv from "dotenv";

import userRoute from "./routes/userRoute.js";
import blogRoute from "./routes/blogRoute.js";

// import compression from "compression";
import { dbConnect } from "./configs/dbConnect.js";

dbConnect();
dotenv.config();

const app = express();
const port = process.env.PORT;

// app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/user",userRoute);
app.use("/blogs",blogRoute);

app.listen(port,()=>{
    console.log(`Server Is Running At Port:${port}`);  
});