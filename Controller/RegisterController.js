import User from "../Models/UserSchema.js";
import bcrypt from 'bcryptjs';

export const registerControllerfn = async(req,res)=>{
    const{name,email,password,confirmPassword,role} = req.body;
    const hashPassword = await bcrypt.hash(password,10)
console.log("Received body:", req.body);

    try {
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const newUser = new User({name,email,password:hashPassword,role})
        await newUser.save()
        res.status(200).json({message:"User Registered successfully",data:newUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Registeration failed, Internal Server Error"})
    }
}
