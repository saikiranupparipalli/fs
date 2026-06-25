import { Router } from "express";
import * as controller from "../controllers/team.controller.js";

const router = Router();

router.post("/", controller.postTeam);

router.get("/", controller.getAllTeam);

router.get("/:id", controller.getTeamById);

router.put("/:id", controller.putTeamById);

router.delete("/:id", controller.deleteTeam);

export default router;
