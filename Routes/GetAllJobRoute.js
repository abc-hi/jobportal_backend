import express from 'express';
import { getAllJobsControllerfn } from '../Controller/GetAllJobsController.js';

const router = express.Router()
router.get("/getAll-Jobs", getAllJobsControllerfn) 

export default router;