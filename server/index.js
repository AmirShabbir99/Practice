    import express from 'express'
    import mongoose from 'mongoose'
import dotenv from "dotenv"
dotenv.config()
    const app=express()

    mongoose.connect(process.env.MONGO_URI).then(()=>console.log("DB connected .....")).catch((e)=>console.log(e))

    app.listen(process.env.PORT,()=>console.log("Server running ....."))