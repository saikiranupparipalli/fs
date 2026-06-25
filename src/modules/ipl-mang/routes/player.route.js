import { Router } from "express";
import * as controller from "../controllers/player.controller.js";

const router = Router();

router.post("/", controller.postPlayer);

router.get("/", controller.getAllPlayer);

router.get("/:id", controller.getPlayerById);

router.put("/:id", controller.putPlayerById);

router.delete("/:id", controller.deletePlayer);

router.post("/stats", controller.postPlayerStats)
// router.get("/stats/:id", controller.getPlayerStatsByWickets)
router.put("/stats/:id", controller.putplayerStats)
 

export default router;
