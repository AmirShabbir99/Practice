import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import Route from "./route/store.route.js"
dotenv.config()
const app=express()

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB connected .....")).catch((e)=>console.log(e))

app.route('/api',Route)
app.listen(process.env.PORT,()=>console.log("Server running ....."))