import express from "express";
import { createJob, getJobs } from "../controllers/jobController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/", authMiddleware, createJob);
router.get("/", getJobs);

export default router;
