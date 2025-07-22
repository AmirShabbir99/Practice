import express from 'express'
import mongoose from 'mongoose'
import dotenv from "dotenv"
import Route from "./route/store.route.js"

dotenv.config()
const app = express()

// Middleware to parse JSON
app.use(express.json())

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("DB connected ....."))
.catch((e) => console.log("DB connection error:", e))

// Mount your route
app.use('/api', Route)

// Start the server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}/api/store`))
