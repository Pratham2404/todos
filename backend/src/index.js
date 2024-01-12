import mongoose from 'mongoose'
import express from 'express'
import connectDB from './db/index.js';
import dotenv from "dotenv"
import cors from 'cors'
import router from './routes/todo.routes.js'

dotenv.config()


const app = express();
const port =  process.env.PORT

app.use(cors())
app.use(express.json())
app.use('/api',router)


connectDB()
.then(() => {
    app.listen(port, () => {
        console.log(`⚙️   Server is running at port : ${port}`);
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!! ", err);
})

