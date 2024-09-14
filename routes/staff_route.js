import express from "express"

import { createStaff, deletestaff, getallstaff, staff, updatestaff } from "../controllers/staff.js"
import uploadImage from "../middleware/uploadImg.js"

const route = express.Router()
route.post("/staff",uploadImage,createStaff)
route.patch("/staff/:id",uploadImage,updatestaff)
route.get("/staff",getallstaff)
route.get("/staff/:id",staff)
route.delete("/staff/:id",deletestaff)


export default route