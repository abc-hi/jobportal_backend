
import User from "../Models/UserSchema.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const LoginControllerfn = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        // Log user.password to verify it exists
        if (!user.password) {
            console.error("Password not found for user:", user);
            return res.status(500).json({ message: "User password is missing in the database" });
        }

        // Compare the provided password with the stored hashed password
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ message: "Invalid password" });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1hr" });
        user.token = token;
        await user.save();

        return res.status(200).json({ message: "Login Successful", token: token,user});

    } catch (error) {
        console.error("Error occurred during login:", error);

        return res.status(500).json({ error: 'Login Failed, Internal server error' });
    }
};

export default LoginControllerfn;
