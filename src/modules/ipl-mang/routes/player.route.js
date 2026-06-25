import { Router } from "express";
import * as controller from "../controllers/player.controller.js";

const router = Router();

router.post("/", controller.postPlayer);

router.get("/", controller.getAllPlayer);

router.get("/:id", controller.getPlayerById);

router.put("/:id", controller.putPlayerById);

router.delete("/:id", controller.deletePlayer);

export default router;
