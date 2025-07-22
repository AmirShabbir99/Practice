import express from 'express'
import mongoose from 'mongoose'

const app=express()

mongoose(MONGO_URI).then(()=>console.log("DB connected .....")).catch((e)=>console.log(e))

app.listen(process.env.PORT,()=>console.log("Server running ....."))