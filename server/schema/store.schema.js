import mongoose from "mongoose";

const StoreSchema=new mongoose.Schema({
    name:String,
    rollNo:String
})

const Store=mongoose.model("Store",StoreSchema)

export default Store