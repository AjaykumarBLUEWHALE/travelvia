// upload.mjs
import cloudinary from "cloudinary";
import fs from "fs";
import path from "path";

// Configure your cloud
cloudinary.v2.config({
  cloud_name: "deqac5x7k",
  api_key: "285862773868189",
  api_secret: "ikJPO1lBevr5FlHC0Gqmm4qmzw8",
});

const folderPath = "./image/frames"; // folder with your 152 images

fs.readdirSync(folderPath).forEach((file) => {
  const filePath = path.join(folderPath, file);
  cloudinary.v2.uploader.upload(filePath, { folder: "frames" })
    .then((res) => console.log(res.secure_url))
    .catch((err) => console.error(err));
});
