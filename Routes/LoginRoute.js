import express from 'express';
import LoginControllerfn from '../Controller/LoginController.js';
const router = express.Router()

router.post("/login",LoginControllerfn)


export default router;