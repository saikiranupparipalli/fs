import { Router } from "express";
import * as controller from "../controllers/owner.controller.js"
const router = Router()

router.post("/", controller.owner)

router.get("/", controller.getOwner)

router.get("/:id", controller.getOwnerById)

router.put("/:id", controller.putOwner)

router.delete("/:id", controller.deleteOwner)
 
export default router