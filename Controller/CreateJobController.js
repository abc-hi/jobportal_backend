// admin part

import Job from "../Models/JobsSchema.js"


export const createJob = async(req,res)=>{
    try{
    const{jobtitle,
companyname,
location,
jobtype,
 experienceLevel,
 salaryRange,
 jobDescription,
 requiredSkills,
 preferredSkills,
 jobcategory,
 jobPostedDate,
 applicationDeadline,
 numberOfOpenings,
 status,
 postedBy,
 lastUpdated} = req.body;

 const jobObj = new Job(req.body)
 await jobObj.save()
 res.status(200).json({message:"Job posted by admin",data:jobObj})

    }
    catch(error){
res.status(500).json({message:"Internal server error"})
    }

}


// return res.status(500).json({
//   message: "Internal server error",
//   error
// });

// ✔ What it does:
// Sends response to frontend
// STOPS the function immediately
// No further code runs after this

// ✔ ALWAYS use return when:
// sending error response
// using if conditions
// stopping execution

// without returnSends response
// BUT code continues running below it