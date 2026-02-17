import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv'
dotenv.config()
import regRoute from './Routes/RegisterRoute.js'
import DBConnection from './Database/DBconfig.js';
import logRoute from './Routes/LoginRoute.js';
import adminCreateJobRoute from'./Routes/CreateJobRoute.js';
import viewAllJobRoute from './Routes/GetAllJobRoute.js'
import getEachJobRoute from './Routes/GetEachJobRoute.js'
import applyforJob from './Routes/ApplyJobRouter.js'
import jobSave from './Routes/SaveJobRoute.js'
import User from './Models/UserSchema.js';  // path relative to this file
import mongoose from 'mongoose';


const app= express();
app.use(cors({
  origin: 'http://localhost:5173',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Define allowed methods
    credentials: true,  // Include credentials like cookies if needed
}));

  
  
  app.use(express.json())
DBConnection()
const port = process.env.PORT
app.get("/",(req,res)=>{
    res.status(200).json("API is working fine")
})

//http://localhost:5001/api/register
app.use("/api", regRoute)
//http://localhost:5001/api/login

app.use("/api",logRoute)

app.use('/api',adminCreateJobRoute)

app.use('/api',viewAllJobRoute)

app.use('/api',getEachJobRoute)

app.use('/api',applyforJob)
app.use('/api',jobSave)



app.listen(port,()=>{
    console.log(`APP is running on the port,${port}`)
})