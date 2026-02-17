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

    //  userId comes from token via auth middleware
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!user.savedJobs) user.savedJobs = [];

    if (user.savedJobs.includes(jobId)) {
      return res.status(400).json({ message: "Job already saved" });
    }

    user.savedJobs.push(jobId);
    await user.save();

    res.status(200).json({ message: "Job saved successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to save job" });
  }
};
