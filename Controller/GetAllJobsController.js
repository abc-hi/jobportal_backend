import express from 'express'
import Job from '../Models/JobsSchema.js'

export const getAllJobsControllerfn = async(req,res)=>{

    try {
        const allJobs = await Job.find()
        console.log(allJobs)
        res.status(200).json({message:"view all jobs",data:allJobs})

        
    } catch (error) {
      console.log(error)
      res.status(500).json({message:"error"})
    }
}