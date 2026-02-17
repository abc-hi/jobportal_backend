// import User from '../Models/UserSchema.js'
// import jwt from 'jsonwebtoken'

// const authMiddleware = async(req,res,next)=>{
//     const token = req.headers.authorization?.split(' ')[1]
//     try{    if(!token){
//         return res.status(401).json({message:"token is missing"})
//     }
// //     try{
// //     const decoded = jwt.verify(token,process.env.JWT_SECRET) 
// //     req.user = decoded;
// //     const user  = await User.findById(req.user.id)


// //     if (!user) return res.status(401).json({ message: "User not found" });

// //       // If roles are specified, check user role
// //       if (user.role.length && !user.role.includes(user.role)) {
// //         return res.status(403).json({ message: "Access denied" });
// //       }

// //     // if(user.role !='Admin'){
// //     //     return res.status(401).json({message:"Access denied"})
// //     // }
// //     next()
// // }
// // catch(error){
// //     console.log("token invalid")
// //     res.status(500).json({message:"Invalid token,Internal server error"})
// // }

// // }
// // Verify token
//       const decoded = jwt.verify(token, process.env.JWT_SECRET);

//       // 3️⃣ Find user
//       const user = await User.findById(decoded.id);
//       if (!user) {
//         return res.status(401).json({ message: "User not found" });
//       }

//       // 4️⃣ Role check (ONLY if requiredRole is passed)
//       if (requiredRole && user.role !== requiredRole) {
//         return res.status(403).json({ message: "Access denied" });
//       }

//       // 5️⃣ Attach user to request
//       req.user = user;

//       next();
//     } catch (error) {
//       console.error("Auth error:", error.message);
//       return res.status(401).json({ message: "Invalid or expired token" });
//     }
//   };

// export default authMiddleware


import User from '../Models/UserSchema.js'
import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Token is missing" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) return res.status(401).json({ message: "User not found" });

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
export default authMiddleware;
