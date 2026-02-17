import express from 'express';
import applyJob from '../Controller/ApplyJobController.js';
import { upload } from '../Controller/ApplyJobController.js';
import authMiddleware from '../Middleware/AuthMiddleware.js';

const router = express.Router();

router.post("/apply-job/:jobId",upload.single('resume'),authMiddleware,applyJob);

export default router;

// router.post("/apply-job", upload.single('resume'), applyJob);
// upload → This is your multer instance configured with diskStorage:

// js
// Copy code
// export const upload = multer({ storage });
// It handles file uploads. Without it, Express cannot automatically parse files in multipart/form-data.

// .single('resume')

// .single() tells multer that this route expects a single file upload.

// 'resume' → the name of the form field in your frontend <input type="file" name="resume" />.

// This middleware will:

// Read the uploaded file from the request.

// Save it to the folder specified in storage.destination.

// Give you access to the file via req.file in your controller.

