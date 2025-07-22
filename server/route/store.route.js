import  { Router } from "express"
import { StoreData } from "../controller/strore.controller.js"

const router=Router()

router.post("/store",StoreData)

export default router