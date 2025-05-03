import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './util/db.js';
import employeeRoute  from "./routes/employeeRoutes.js"

dotenv.config();
const app = express();

const port = process.env.PORT || 7000;


app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173",
    methods : ['POST' , 'GET' , 'PUT' , 'DELETE'],
    credentials : true
}));


//   all routes

app.use('/emp' , employeeRoute);



app.listen(port , ()=>{
    console.log(`server is running on port ${port}`);
});

connectDB();

