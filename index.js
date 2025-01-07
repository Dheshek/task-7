import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/userRoute.js';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors());
dotenv.config();
const PORT = process.env.PORT || 8000 ;
const MONGOURL = process.env.MONGO_URL;
app.use('/api/user',router);
mongoose
.connect(MONGOURL)
.then(()=>{
    console.log("Database Connected");
    app.listen(PORT,()=>{
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((err)=>{
    console.log(error);
})
