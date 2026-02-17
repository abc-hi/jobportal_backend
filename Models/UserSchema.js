import mongoose from "mongoose";
import Job from "./JobsSchema.js";

const userSchema = new mongoose.Schema({
    name :String,
    email : String,
    password : String,
    confirmPassword:String,

role: {
  type: String,
  enum: ["User", "Admin"],
  default: "User" // backend decides default
},   
 token:String,


 exp:Number,
    location:String,
    age:Number,
    phoneNo:Number,
    gender:String,
    resume:String,
    linkedIn:String,
    portfolio:String,
    websites:[String],
    salary:Number,
    expSummary:String,
     appliedJobs:
      {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Job",
    default: [],
  },

     savedJobs: 
     {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Job",
    default: [],
  },

   

})
const User = mongoose.model('User', userSchema)
export default User;