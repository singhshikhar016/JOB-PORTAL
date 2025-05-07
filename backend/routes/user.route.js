import express from "express";
import { login, logout, register, updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/mutler.js";
 
const router = express.Router();

router.route("https://job-portal-backend-seven-omega.vercel.app/register").post(singleUpload,register);
router.route("https://job-portal-backend-seven-omega.vercel.app/login").post(login);
router.route("https://job-portal-backend-seven-omega.vercel.app/logout").get(logout);
router.route("https://job-portal-backend-seven-omega.vercel.app/profile/update").post(isAuthenticated,singleUpload,updateProfile);

export default router;

