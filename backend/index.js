import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/job.route.js";
import applicationRoute from "./routes/application.route.js";

dotenv.config();

const app = express();
app.use(cors({
  origin: 'https://job-portal-frontend-eight-beta.vercel.app',
  credentials: true 
}));

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



// API routes
app.use("https://job-portal-frontend-eight-beta.vercel.app/user", userRoute);
app.use("https://job-portal-frontend-eight-beta.vercel.app/company", companyRoute);
app.use("https://job-portal-frontend-eight-beta.vercel.app/job", jobRoute);
app.use("https://job-portal-frontend-eight-beta.vercel.app/application", applicationRoute);

const PORT = https://job-portal-frontend-eight-beta.vercel.app ;

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});
