import express from 'express';
import { saveJobs } from '../Controller/SaveJobsController.js';
import authMiddleware from '../Middleware/AuthMiddleware.js';
const router=express.Router();

router.post("/save-job",authMiddleware,saveJobs) 

export default router;