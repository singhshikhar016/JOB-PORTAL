import {v2 as cloudinary} from "cloudinary";
import dotenv from "dotenv";
dotenv.config();

cloudinary.config({
    cloud_name:"dhrgaunez",
    api_key:"673549546179921",
    api_secret:"1wn-ArLbKXTTQAdwmHiHOUC0Rqk"
});
export default cloudinary;