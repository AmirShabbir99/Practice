import Store from "../schema/store.schema.js";

export const StoreData=async(req,res)=>{
    const {name,rollNo}=req.body;
    await Store({name,rollNo})
    return res.status(201).json({sucess:true,message:"Data store successfully | | "})
}
