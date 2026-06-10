// import User from "../Models/UserSchema.js"
// import Job from "../Models/JobsSchema.js"


// export const saveJobs = async(req,res)=>{
//     try {
//     const { jobId,userId } = req.body;

//     const user = await User.findById(userId);
//     if (!user) return res.status(404).json({ message: "User not found" });

//    if (!user.savedJobs) {
//     user.savedJobs = [];
// }
//     if (user.savedJobs.includes(jobId)) {
//       return res.status(400).json({ message: "Job already saved" });
//     }

//     user.savedJobs.push(jobId);
//     await user.save();

//     res.status(200).json({ message: "Job saved successfully"});
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Failed to save job" });
//   }
// };

import User from "../Models/UserSchema.js";
import Job from "../Models/JobsSchema.js";

export const saveJobs = async (req, res) => {
  try {
    const jobId = req.body.jobId;

    // since here i sent jobid by body, in frontend i used 
    //  const res=await axios.post(
            //                       "https://jobportal-backend-x18f.onrender.com/api/save-job",

            // { jobId: _id },

            // we may also keep JobId as url param in both frontend and backend

            // req.params → value comes from URL (/job/123)
// req.body → value comes from request payload ({ jobId: "123" })
// req.query → value comes from query string (?jobId=123)





    //  userId comes from token via auth middleware

    const userId = req.user._id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.savedJobs) user.savedJobs = [];

    if (user.savedJobs.includes(jobId)) {
      return res.status(400).json({ message: "Job already saved" });
    }

    user.savedJobs.push(jobId);
    await user.save();

    res.status(200).json({ message: "Job has been saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save job" });
  }
};
