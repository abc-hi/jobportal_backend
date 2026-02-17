import express from 'express';
import { getEachJob } from '../Controller/GetEachJobController.js';

const router = express.Router()
router.get('/getEach-Job/:_id',getEachJob)
// router.get('/getEach-Job/:id',getEachJob) can also written here id is mongodbid

export default router;