import express from 'express';
import { registerControllerfn } from '../Controller/RegisterController.js';
const router=express.Router();

router.post("/register",registerControllerfn) 

export default router;