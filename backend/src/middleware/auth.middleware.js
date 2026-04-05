import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({ message: "Unauthorized - No Token Provided", isAuth: false });
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({ message: "Unauthorized - Invalid Token", isAuth: false });
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({message: "User not found", isAuth: false});
        }
        
        req.user = user;

        next();
        
    } catch (error) {
        console.log("Error in protectRoute middleware: ", error.message);
        
        // Handle JWT-specific errors
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "Unauthorized - Token Expired", isAuth: false });
        }
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Unauthorized - Invalid Token", isAuth: false });
        }
        
        res.status(500).json({message: "Internal Server error"})
    }
}
