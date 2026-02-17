import mongoose from "mongoose";
import moment from "moment-timezone";


const jobSchema =new mongoose.Schema({
jobtitle:{
    type:String,
    required:true,},

companyname:{
    type:String,
    required:true,},
location:{
    type:String,
    required:true,},
jobtype:{
    type:String,
    required:true,},
 experienceLevel:{
        type:String,
    required:true,
    },
 salaryRange:{
        type:String,
        default:0,
    },
 jobDescription:{
    type:String,
    required:true,},
 requiredSkills:{
    type:String,
    required:true,},
 preferredSkills:{
    type:String,
    required:true,},
 jobcategory:{
    type:String,
    required:true,},
 jobPostedDate:{
            type:Date,
                    default: () => moment.tz("Europe/Dublin").format("YYYY-MM-DD HH:mm:ss"),

        },
 applicationDeadline:{
            type:Date,
                    default: () => moment.tz("Europe/Dublin").format("YYYY-MM-DD HH:mm:ss"),},
 numberOfOpenings:{
            type:Number,
            required:true, 
        },
 status:{
    type:String,
    required:true,},
 postedBy:{
    type: mongoose.Schema.Types.ObjectId, ref: "User" ,
    required:true,},
 lastUpdated:{
        type:Date,
        default: () => moment.tz("Europe/Dublin").format("YYYY-MM-DD HH:mm:ss")
    },
})
const Job = mongoose.model('Job',jobSchema)
export default Job;