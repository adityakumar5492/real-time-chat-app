import express from "express" ;
import multer from "multer";
import { checkAuth,login, logout, signup ,updateProfile } from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const upload = multer({ dest: "uploads/" });

//creating route
const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.put("/update-profile", protectRoute, upload.single("profilePic"), updateProfile)

router.get("/check", protectRoute, checkAuth)

export default router;