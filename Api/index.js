import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRouter from './Routes/auth.route.js';
dotenv.config();
mongoose.connect(process.env.MONGO).then(()=>{
    console.log('Connected to MONGODB');
}).catch((err)=>{
    console.log(err);
}
);
const app = express();
app.listen(3000,()=>{
    console.log("Server is Running on Port 3000");
});
app.use('/api/auth',authRouter);