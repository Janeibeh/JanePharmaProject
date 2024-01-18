import dotenv from 'dotenv';
import { config } from 'dotenv';

// Configure dotenv to use ESM syntax
config({ path: new URL('.', import.meta.url).pathname + '/.env' });

// require("dotenv").config();
const PORT = process.env.PORT || 9000;

const corsOptions = {
    origin: true
};

// routes
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors"

import authRoute from "./Routes/authRoute.js"
import productRoute from "./Routes/productRoute.js"
import categoryRoute from "./Routes/CategoryRoutes.js"
import userRouthe from "./Routes/userRouthe.js"
import doctorRouthe from "./Routes/doctorRouthe.js"
import reviewRoute from "./Routes/reviewRoutes.js"

// rest object
const app = express();

// using all third-party middlewares
app.use(express.json())
app.use(cookieParser());
app.use(cors (corsOptions));


// // routes or end points

app.use("/api/v1/auth", authRoute);
app.use("/api/v1/product", productRoute);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/users", userRouthe);
app.use("/api/v1/doctors", doctorRouthe);
app.use("/api/v1/reviews", reviewRoute);

// rest api
app.get("/", (req,res) => {
    res.status(200).send ("Api server is working")
});


// prevents warning from mongoose
mongoose.set("strictQuery", false)

// connect database
mongoose.connect ((process.env.MONGO_URL),{})
        .then(() => {
            console.log('MONGODB connection successful')
            })
        .catch(err => {
            console.error('  MONGODB  connection error')
            })

// test server
app.listen(PORT, ()=> {
    console.log(`Server has started running on port ${PORT} , open browser at http://localhost:${PORT}`)
});