// user part

import express from 'express';
import User from '../Models/UserSchema.js'
import multer from 'multer'
import path from 'path'


const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, './uploads')    
    },
    filename:(req,file,cb)=>{
        cb(null, Date.now()+path.extname(file.originalname))
    }
})
export const upload = multer({storage})

const applyJob = async(req,res)=>{

    try {
      const jobId = req.params.jobId;  // from URL
    const userId = req.user._id;     // from auth middleware
   
    const resumePath = req.file ? req.file.path : null;

    // Find the user
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Check if job already applied
    if (user.appliedJobs.includes(jobId)) {
      return res.status(400).json({ message: "You have already applied for this job" });
    }

    // Add job to appliedJobs
    user.appliedJobs.push(jobId);

    // Optional: update resume or other info if needed
    if (resumePath) user.resume = resumePath;
await user.save();

    res.status(200).json({ message: "Job applied successfully", data: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error", error });
  }

}
export default applyJob;


// const storage = multer.diskStorage({
// multer.diskStorage() is a function from multer that lets you configure how files are stored on your disk.

// storage here is the variable where we store this configuration.

// It takes an object with two properties: destination and filename.

// js
// Copy code
//     destination: (req, file, cb) => {
//         cb(null, './uploads');
//     },
// destination tells multer where to save the uploaded files.

// It's a function that receives three arguments:

// req → the request object (your API request).

// file → the uploaded file object (contains info like name, size, MIME type).

// cb → a callback function you call to tell multer where to save the file.

// cb(null, './uploads'):

// First parameter null → no error.

// Second parameter './uploads' → the folder path where the file will be stored.

// So, this line basically says: “Save all uploaded files in the uploads folder.”

// js
// Copy code
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname));
//     }
// filename defines what the uploaded file will be named on disk.

// It's a function with the same three arguments: req, file, cb.

// file.originalname → the original file name uploaded by the user.

// path.extname(file.originalname) → gets the file extension (e.g., .pdf, .docx, .jpg).

// Date.now() → generates a unique number based on the current timestamp to prevent file name conflicts.

// cb(null, Date.now() + path.extname(file.originalname)) → calls the callback with:

// null → no error.

// a new unique filename using timestamp + original file extension.

// Example:

// Original file: resume.pdf

// Stored file: 1693281041234.pdf
// ------------------------------------

// You are uploading resumes via your frontend (<input type="file" />).

// Multer stores them in the backend uploads folder.

// MongoDB stores the file path (uploads/1767022894536.pdf), not the actual file.

// This is enough for a basic system.
