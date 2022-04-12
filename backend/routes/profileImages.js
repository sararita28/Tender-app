/*import express from "express";
const router = express.Router();
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    callback(null, "req.body.name.jpeg");
  },
});

const upload = multer({ storage });
router.post("/", upload.single("profilePicture"), (req, res) => {
  res.status(200).json(`Profile picture has been uploaded`);
});

export default router;
*/