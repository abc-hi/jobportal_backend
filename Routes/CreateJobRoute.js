import express from 'express'
import { createJob } from "../Controller/CreateJobController.js";
import authMiddleware from "../Middleware/AuthMiddleware.js";

const router = express.Router()
router.post("/create-job",authMiddleware, createJob)
export default router;
