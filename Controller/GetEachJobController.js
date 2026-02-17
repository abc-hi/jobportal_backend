import express from 'express'
import Job from '../Models/JobsSchema.js'


 export const getEachJob =async(req,res)=>{

    try {
        const id = req.params._id
                // const id = req.params.id(can also be written here id also mongodbid)
         const jobItem = await Job.findById(id)
        if(!jobItem)
            return res.status(404).json({message:"Job item not found"})
        res.status(200).json({message:"Please find the job below and apply",data:jobItem})
    } catch (error) {
        res.status(500).json({message:"error"})
    }

}