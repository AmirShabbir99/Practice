import mongoose from "mongoose";

const StoreSchema=mongoose.Schema({
    name:String,
    rollNo:String
})

const Store=mongoose.model(StoreSchema)

export default Store