import  { Router } from "express"
import { GetData, StoreData } from "../controller/strore.controller.js"

const router=Router()

router.post("/store",StoreData)
router.get("/store",GetData)

export default router